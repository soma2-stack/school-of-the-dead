/**
 * School of the Dead - Simple Zombie System
 * Basic zombie spawning, AI, and combat
 */

import * as THREE from 'three';
import { getPointsManager } from './points';
import { getRoundManager } from './rounds';
import { logger } from './logger';
import { INITIAL_ROOMS, ROOM_GAPS, type Room, getStaircaseElevation } from '../game/mapConfig';
import { playSound } from './audio';

// ============================================================================
// Configuration
// ============================================================================

export const ZOMBIE_ATTACK_RANGE = 2.5;
export const ZOMBIE_SEPARATION_RADIUS = 0.9; // Minimum distance between zombies
export const ZOMBIE_COLLISION_DISTANCE = 1.0;
export const ZOMBIE_STUCK_THRESHOLD = 2.0; // seconds
export const ZOMBIE_STUCK_RECOVERY_DISTANCE = 0.5;
export const ZOMBIE_COLLISION_RADIUS = 0.45; // Radius for collision checks (cylinder radius)
export const ZOMBIE_RAYCAST_DISTANCE = 2.0; // How far ahead to raycast
export const ZOMBIE_SLIDE_FACTOR = 0.6; // How much to slide along walls
export const ZOMBIE_MAX_CLIMB_HEIGHT = 0.3; // Maximum step-up height allowed
export const ZOMBIE_GROUND_Y = 0; // Ground level Y position

// Zombie separation configuration
export const ZOMBIE_MIN_SEPARATION = 0.9; // Minimum distance between zombie centers
export const ZOMBIE_SEPARATION_STRENGTH = 0.6; // How strongly to push apart
export const ZOMBIE_MAX_SEPARATION_PER_FRAME = 0.08; // Max separation movement per frame

// Movement substepping configuration for swept collision
export const ZOMBIE_MAX_STEP_SIZE = 0.1; // Maximum movement per substep to prevent clipping
export const ZOMBIE_MAX_SUBSTEPS = 10; // Maximum number of substeps per frame

// Stuck recovery configuration
export const ZOMBIE_STUCK_RECOVERY_MAX_DISTANCE = 0.25; // Maximum nudge distance for stuck recovery
export const ZOMBIE_TELEPORT_GUARD_MARGIN = 0.3; // Extra margin for teleport detection

// Doorway pathing configuration
export const ZOMBIE_DOORWAY_OFFSET = 2.0; // Offset from wall for doorway entry/exit targets (increased from 1.5)
export const ZOMBIE_DOORWAY_OUTSIDE_OFFSET = 2.0; // Offset outside the room for pass-through targets (increased from 1.0)
export const ZOMBIE_DOORWAY_ARRIVAL_DIST = 1.5; // Distance at which doorway is considered "reached"

// Debug configuration
export let SHOW_WALL_COLLIDERS = false;
export let SHOW_ZOMBIE_PATHING = false;
export function toggleWallColliderDebug(): boolean {
  SHOW_WALL_COLLIDERS = !SHOW_WALL_COLLIDERS;
  return SHOW_WALL_COLLIDERS;
}
export function setWallColliderDebug(enabled: boolean): void {
  SHOW_WALL_COLLIDERS = enabled;
}
export function toggleZombiePathingDebug(): boolean {
  SHOW_ZOMBIE_PATHING = !SHOW_ZOMBIE_PATHING;
  return SHOW_ZOMBIE_PATHING;
}
export function setZombiePathingDebug(enabled: boolean): void {
  SHOW_ZOMBIE_PATHING = enabled;
}

// Global debug verbose flag for detailed logging
declare global {
  interface Window {
    DEBUG_VERBOSE?: boolean;
  }
}

export interface ZombieConfig {
  health: number;
  speed: number;
  damage: number;
  pointReward: number;
  radius: number;
  height: number;
  color: number;
}

export const DEFAULT_ZOMBIE_CONFIG: ZombieConfig = {
  health: 100,
  speed: 3.5,
  damage: 25,
  pointReward: 60,
  radius: ZOMBIE_COLLISION_RADIUS, // Use the collision radius constant
  height: 5,
  color: 0x2d5a27,
};

// Round scaling configuration
export const ROUND_ZOMBIE_COUNTS: Record<number, number> = {
  1: 6,
  2: 8,
  3: 12,
};

export function getZombieCountForRound(round: number): number {
  return ROUND_ZOMBIE_COUNTS[round] ?? Math.floor(10 + round * 4);
}

// ============================================================================
// Types
// ============================================================================

export type ZombieState = 'alive' | 'dying' | 'dead';

export interface Zombie {
  id: string;
  state: ZombieState;
  health: number;
  maxHealth: number;
  position: THREE.Vector3;
  mesh?: THREE.Mesh;
  config: ZombieConfig;
  spawnTime: number;
  lastDamageTime: number;
  // Collision and tracking fields
  stuckTimer?: number;
  lastPosition?: THREE.Vector3;
  // Room/path tracking fields
  currentRoomId?: string;
  targetRoomId?: string;
  doorwayTarget?: THREE.Vector3;
  // Debug visualization
  collisionHelper?: THREE.Mesh;
}

export interface ZombieSpawnPoint {
  position: THREE.Vector3;
  roomId?: string;
}

export type ZombieEventCallback = (zombie: Zombie) => void;
export type ZombieDamageCallback = (zombie: Zombie, damage: number, playerId: string) => void;
export type ZombieKillCallback = (
  zombie: Zombie,
  playerId: string,
  skipPowerUpDrop?: boolean
) => void;

// Particle effect types
interface ParticleEffect {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  lifetime: number;
  maxLifetime: number;
}

// ============================================================================
// Zombie Manager Class
// ============================================================================

export class ZombieManager {
  private config: ZombieConfig;
  private zombies: Map<string, Zombie>;
  private spawnPoints: ZombieSpawnPoint[];
  private scene: THREE.Scene | null;
  private spawnTimeoutIds: ReturnType<typeof setTimeout>[] = [];
  
  // Event callbacks
  private onSpawnCallbacks: ZombieEventCallback[] = [];
  private onDeathCallbacks: ZombieKillCallback[] = [];
  private onDamageCallbacks: ZombieDamageCallback[] = [];
  private onPlayerDamageCallbacks: ((damage: number, zombie: Zombie) => void)[] = [];
  
  // Particle effects
  private activeParticles: ParticleEffect[] = [];

  constructor(scene?: THREE.Scene, config: Partial<ZombieConfig> = {}) {
    this.config = { ...DEFAULT_ZOMBIE_CONFIG, ...config };
    this.zombies = new Map();
    this.spawnPoints = [];
    this.scene = scene || null;
  }

  // ==========================================================================
  // Scene Management
  // ==========================================================================

  setScene(scene: THREE.Scene): void {
    this.scene = scene;
  }

  // ==========================================================================
  // Particle Effects System
  // ==========================================================================

  private spawnHitParticles(position: THREE.Vector3, count: number = 6, color: number = 0xffaa00, speed: number = 3, lifetime: number = 0.3): void {
    if (!this.scene) return;

    for (let i = 0; i < count; i++) {
      const size = 0.15 + Math.random() * 0.15;
      const geometry = new THREE.SphereGeometry(size, 4, 4);
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.9,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.position.y += 2 + Math.random() * 1.5; // Chest/head area
      
      // Random outward velocity
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * speed,
        (Math.random() - 0.3) * speed,
        (Math.random() - 0.5) * speed
      );

      this.scene.add(mesh);
      this.activeParticles.push({
        mesh,
        velocity,
        lifetime: 0,
        maxLifetime: lifetime,
      });
    }
  }

  private spawnDeathParticles(position: THREE.Vector3, count: number = 12, color: number = 0x8b0000, speed: number = 5, lifetime: number = 0.5): void {
    if (!this.scene) return;

    for (let i = 0; i < count; i++) {
      const size = 0.2 + Math.random() * 0.25;
      const geometry = new THREE.SphereGeometry(size, 4, 4);
      const material = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.95,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(position);
      mesh.position.y += 1 + Math.random() * 2;
      
      // More explosive outward velocity
      const angle = Math.random() * Math.PI * 2;
      const verticalSpeed = Math.random() * speed * 0.8;
      const horizontalSpeed = Math.random() * speed;
      
      const velocity = new THREE.Vector3(
        Math.cos(angle) * horizontalSpeed,
        verticalSpeed,
        Math.sin(angle) * horizontalSpeed
      );

      this.scene.add(mesh);
      this.activeParticles.push({
        mesh,
        velocity,
        lifetime: 0,
        maxLifetime: lifetime,
      });
    }
  }

  updateParticles(deltaTime: number): void {
    if (!this.scene || this.activeParticles.length === 0) return;

    const toRemove: number[] = [];

    for (let i = 0; i < this.activeParticles.length; i++) {
      const particle = this.activeParticles[i];
      particle.lifetime += deltaTime;

      // Update position
      particle.mesh.position.addScaledVector(particle.velocity, deltaTime);
      
      // Apply gravity
      particle.velocity.y -= 9.8 * deltaTime;

      // Fade out based on lifetime
      const alpha = 1 - (particle.lifetime / particle.maxLifetime);
      if (particle.mesh.material instanceof THREE.MeshBasicMaterial) {
        particle.mesh.material.opacity = alpha * 0.9;
      }

      // Mark for removal if expired
      if (particle.lifetime >= particle.maxLifetime) {
        toRemove.push(i);
      }
    }

    // Remove expired particles (in reverse order to maintain indices)
    for (let i = toRemove.length - 1; i >= 0; i--) {
      const index = toRemove[i];
      const particle = this.activeParticles[index];
      this.scene.remove(particle.mesh);
      particle.mesh.geometry.dispose();
      if (Array.isArray(particle.mesh.material)) {
        particle.mesh.material.forEach(m => m.dispose());
      } else {
        particle.mesh.material.dispose();
      }
      this.activeParticles.splice(index, 1);
    }
  }

  clearParticles(): void {
    if (!this.scene) return;
    
    for (const particle of this.activeParticles) {
      this.scene.remove(particle.mesh);
      particle.mesh.geometry.dispose();
      if (Array.isArray(particle.mesh.material)) {
        particle.mesh.material.forEach(m => m.dispose());
      } else {
        particle.mesh.material.dispose();
      }
    }
    this.activeParticles = [];
  }

  // ==========================================================================
  // Zombie Hit Flash Effect
  // ==========================================================================

  private flashZombieHit(zombie: Zombie): void {
    if (!zombie.mesh || !this.scene) return;

    // Store original material
    const originalMaterial = zombie.mesh.material.clone();
    
    // Create flash material (bright red)
    const flashMaterial = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.7,
    });

    // Apply flash to main mesh and all children
    const materialsToRestore: { mesh: THREE.Mesh; original: THREE.Material }[] = [];
    
    zombie.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        materialsToRestore.push({
          mesh: child,
          original: child.material.clone(),
        });
        child.material = flashMaterial;
      }
    });

    // Restore after 100ms
    setTimeout(() => {
      if (!zombie.mesh || zombie.state !== 'alive') {
        // Zombie died before restore, dispose cloned originals to prevent memory leak
        materialsToRestore.forEach(({ original }) => original.dispose());
        flashMaterial.dispose();
        return;
      }
      
      materialsToRestore.forEach(({ mesh, original }) => {
        if (mesh.parent === zombie.mesh || mesh === zombie.mesh) {
          mesh.material = original;
        } else {
          // Mesh was detached, dispose the clone
          original.dispose();
        }
      });
      
      // Dispose flash material
      flashMaterial.dispose();
      
      if (window.DEBUG_VERBOSE) {
        console.log('[VISUAL] Zombie hit flash restored');
      }
    }, 100);
  }

  // ==========================================================================
  // Spawn Point Management
  // ==========================================================================

  addSpawnPoint(position: THREE.Vector3, roomId?: string): void {
    this.spawnPoints.push({ position, roomId });
  }

  clearSpawnPoints(): void {
    this.spawnPoints = [];
  }

  setSpawnPoints(points: Array<{ x: number; y: number; z: number; roomId?: string }>): void {
    this.spawnPoints = points.map(p => ({
      position: new THREE.Vector3(p.x, p.y, p.z),
      roomId: p.roomId,
    }));
  }

  // ==========================================================================
  // Event System
  // ==========================================================================

  onSpawn(callback: ZombieEventCallback): () => void {
    this.onSpawnCallbacks.push(callback);
    return () => {
      this.onSpawnCallbacks = this.onSpawnCallbacks.filter(cb => cb !== callback);
    };
  }

  onDeath(callback: ZombieKillCallback): () => void {
    this.onDeathCallbacks.push(callback);
    return () => {
      this.onDeathCallbacks = this.onDeathCallbacks.filter(cb => cb !== callback);
    };
  }

  onDamage(callback: ZombieDamageCallback): () => void {
    this.onDamageCallbacks.push(callback);
    return () => {
      this.onDamageCallbacks = this.onDamageCallbacks.filter(cb => cb !== callback);
    };
  }

  onPlayerDamage(callback: (damage: number, zombie: Zombie) => void): () => void {
    this.onPlayerDamageCallbacks.push(callback);
    return () => {
      this.onPlayerDamageCallbacks = this.onPlayerDamageCallbacks.filter(cb => cb !== callback);
    };
  }

  private notifySpawn(zombie: Zombie): void {
    this.onSpawnCallbacks.forEach(cb => cb(zombie));
  }

  private notifyDeath(zombie: Zombie, playerId: string, skipPowerUpDrop = false): void {
    this.onDeathCallbacks.forEach(cb => cb(zombie, playerId, skipPowerUpDrop));
  }

  private notifyDamage(zombie: Zombie, damage: number, playerId: string): void {
    this.onDamageCallbacks.forEach(cb => cb(zombie, damage, playerId));
  }

  private notifyPlayerDamage(damage: number, zombie: Zombie): void {
    this.onPlayerDamageCallbacks.forEach(cb => cb(damage, zombie));
  }

  // ==========================================================================
  // Zombie Spawning
  // ==========================================================================

  spawnZombie(position?: THREE.Vector3): Zombie | null {
    const id = `zombie_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const spawnPos = position || this.getRandomSpawnPoint();
    
    if (!spawnPos) {
      console.warn('No spawn point available for zombie');
      return null;
    }

    // Store the requested room ID from spawn point for validation
    let requestedRoomId: string | undefined;
    if (!position && this.spawnPoints.length > 0) {
      const selectedPoint = this.spawnPoints.find(p => 
        p.position.distanceTo(spawnPos) < 0.01
      );
      requestedRoomId = selectedPoint?.roomId;
    }

    // EXACT SPAWN TEST: Use the exact spawn point position without any adjustment
    const finalSpawnPos = spawnPos.clone();

    const zombie: Zombie = {
      id,
      state: 'alive',
      health: this.config.health,
      maxHealth: this.config.health,
      position: finalSpawnPos.clone(),
      config: { ...this.config },
      spawnTime: Date.now(),
      lastDamageTime: 0,
    };

    this.zombies.set(id, zombie);

    // Create visual representation if scene is available
    if (this.scene) {
      this.createZombieMesh(zombie);
    }

    // Debug log for exact spawn placement test (debug mode only)
    if (window.DEBUG_VERBOSE) {
      console.log('[SPAWN EXACT TEST]', {
        id: zombie.id,
        spawnPoint: spawnPos.clone(),
        finalPosition: zombie.position.clone(),
        roomId: requestedRoomId
      });
    }

    this.notifySpawn(zombie);
    return zombie;
  }

  spawnWave(count: number): Zombie[] {
    logger.zombies.info('spawnWave called with count:', count);
    logger.zombies.debug('ENTER spawnWave');
    const spawned: Zombie[] = [];
    
    for (let i = 0; i < count; i++) {
      // Stagger spawns slightly
      const timeoutId = setTimeout(() => {
        const zombie = this.spawnZombie();
        if (zombie) spawned.push(zombie);
      }, i * 200);
      this.spawnTimeoutIds.push(timeoutId);
    }

    return spawned;
  }

  private getRandomSpawnPoint(): THREE.Vector3 | null {
    if (this.spawnPoints.length === 0) {
      // Default spawn point if none configured
      return new THREE.Vector3(0, 0, -50);
    }

    const point = this.spawnPoints[Math.floor(Math.random() * this.spawnPoints.length)];
    const requestedRoomId = point.roomId;
    
    if (window.DEBUG_VERBOSE) {
      console.log('[SPAWN DEBUG] selecting spawn point', {
        requestedPosition: point.position.clone(),
        requestedRoomId
      });
    }
    
    return point.position.clone();
  }

  private createZombieMesh(zombie: Zombie): void {
    if (!this.scene) return;

    // Simple capsule-like geometry for zombie (no animations yet)
    const geometry = new THREE.CapsuleGeometry(zombie.config.radius, zombie.config.height - zombie.config.radius * 2, 4, 8);
    const material = new THREE.MeshStandardMaterial({
      color: zombie.config.color,
      roughness: 0.8,
      metalness: 0.2,
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    // Determine ground Y at spawn position
    const spawnY = zombie.position.y;
    mesh.position.copy(zombie.position);
    mesh.position.y = spawnY + zombie.config.height / 2; // Position on ground
    
    // CRITICAL: Ensure mesh is visible and not frustum culled prematurely
    mesh.visible = true;
    mesh.frustumCulled = false;
    
    // Add simple eyes to indicate front direction
    const eyeGeometry = new THREE.SphereGeometry(0.2, 4, 4);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    
    leftEye.position.set(-0.4, zombie.config.height * 0.7, zombie.config.radius);
    rightEye.position.set(0.4, zombie.config.height * 0.7, zombie.config.radius);
    
    leftEye.frustumCulled = false;
    rightEye.frustumCulled = false;
    
    mesh.add(leftEye);
    mesh.add(rightEye);

    this.scene.add(mesh);
    zombie.mesh = mesh;

    // Create collision helper for debug visualization (only visible when debug enabled)
    this.createCollisionHelper(zombie);
    
    // Debug log for visibility verification (debug mode only)
    if (window.DEBUG_VERBOSE) {
      console.log('[ZOMBIE VISIBILITY DEBUG] spawned', {
        id: zombie.id,
        logicalPosition: zombie.position.clone(),
        meshPosition: mesh.position.clone(),
        meshVisible: mesh.visible,
        meshParent: mesh.parent?.type,
        inScene: this.scene?.children.includes(mesh),
        spawnY,
        finalMeshY: mesh.position.y
      });
    }
  }

  private createCollisionHelper(zombie: Zombie): void {
    if (!this.scene) return;

    // Create a cylinder to visualize collision bounds (green for grounded cylinder)
    const geometry = new THREE.CylinderGeometry(
      ZOMBIE_COLLISION_RADIUS,
      ZOMBIE_COLLISION_RADIUS,
      zombie.config.height,
      16
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00, // Green for zombie collision
      wireframe: true,
      transparent: true,
      opacity: 0.4,
    });

    const helper = new THREE.Mesh(geometry, material);
    helper.position.copy(zombie.position);
    helper.position.y += zombie.config.height / 2;
    
    // Only show collision helpers when debug is enabled
    helper.visible = SHOW_WALL_COLLIDERS;
    helper.frustumCulled = false;
    
    this.scene.add(helper);
    zombie.collisionHelper = helper;
  }

  private removeCollisionHelper(zombie: Zombie): void {
    if (!zombie.collisionHelper || !this.scene) return;

    this.scene.remove(zombie.collisionHelper);
    zombie.collisionHelper.geometry.dispose();
    // Handle both single material and array of materials
    const material = zombie.collisionHelper.material;
    if (Array.isArray(material)) {
      material.forEach(m => m.dispose());
    } else {
      material.dispose();
    }
    zombie.collisionHelper = undefined;
  }

  private updateCollisionHelper(zombie: Zombie, doorwayTarget?: THREE.Vector3 | null): void {
    if (!this.scene) return;

    // Update collision helper visibility based on debug toggle
    if (zombie.collisionHelper) {
      zombie.collisionHelper.position.copy(zombie.position);
      zombie.collisionHelper.position.y = zombie.position.y + zombie.config.height / 2;
      zombie.collisionHelper.visible = SHOW_WALL_COLLIDERS;
    }

    // Debug visualization for doorway pathing (yellow entry, blue exit)
    if (SHOW_ZOMBIE_PATHING && doorwayTarget) {
      // Create or update doorway target visual
      let targetDebug = (zombie as any)._doorwayTargetDebug;
      if (!targetDebug) {
        const geometry = new THREE.SphereGeometry(0.5, 8, 8);
        const material = new THREE.MeshBasicMaterial({ 
          color: 0xffff00, // Yellow for entry target
          transparent: true,
          opacity: 0.8
        });
        targetDebug = new THREE.Mesh(geometry, material);
        targetDebug.frustumCulled = false;
        this.scene.add(targetDebug);
        (zombie as any)._doorwayTargetDebug = targetDebug;
      }
      targetDebug.position.copy(doorwayTarget);
      targetDebug.position.y += 0.5; // Slightly above ground
      targetDebug.visible = true;
      
      // Draw line from zombie to target
      let lineDebug = (zombie as any)._doorwayLineDebug;
      if (!lineDebug) {
        const points = [new THREE.Vector3(), new THREE.Vector3()];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const material = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2 });
        lineDebug = new THREE.Line(geometry, material);
        lineDebug.frustumCulled = false;
        this.scene.add(lineDebug);
        (zombie as any)._doorwayLineDebug = lineDebug;
      }
      const positions = lineDebug.geometry.attributes.position.array;
      positions[0] = zombie.position.x;
      positions[1] = zombie.position.y + zombie.config.height / 2;
      positions[2] = zombie.position.z;
      positions[3] = doorwayTarget.x;
      positions[4] = doorwayTarget.y + 0.5;
      positions[5] = doorwayTarget.z;
      lineDebug.geometry.attributes.position.needsUpdate = true;
      lineDebug.visible = true;
    } else {
      // Hide debug visuals when disabled
      if ((zombie as any)._doorwayTargetDebug) {
        (zombie as any)._doorwayTargetDebug.visible = false;
      }
      if ((zombie as any)._doorwayLineDebug) {
        (zombie as any)._doorwayLineDebug.visible = false;
      }
    }
  }

  // ==========================================================================
  // Zombie Update (AI & Movement)
  // ==========================================================================

  update(
    deltaTime: number, 
    playerPosition: THREE.Vector3, 
    mapObjects: THREE.Object3D[] = []
  ): void {
    const deadZombies: string[] = [];
    
    // Reuse vectors for performance
    const chaseMove = new THREE.Vector3();
    const separation = new THREE.Vector3();
    const oldPos = new THREE.Vector3();
    const attemptX = new THREE.Vector3();
    const attemptZ = new THREE.Vector3();
    
    this.zombies.forEach((zombie, id) => {
      if (zombie.state !== 'alive') return;

      // Initialize tracking fields if needed
      if (!zombie.stuckTimer) zombie.stuckTimer = 0;
      if (!zombie.lastPosition) zombie.lastPosition = new THREE.Vector3().copy(zombie.position);

      // Store old position for stuck detection
      oldPos.copy(zombie.position);
      const oldY = zombie.position.y;

      // --- ROOM/PATH TRACKING ---
      // Determine zombie's current room and player's room for doorway-aware pathing
      const zombieRoom = this.getRoomAtPos(zombie.position.x, zombie.position.z, zombie.position.y);
      const playerRoom = this.getRoomAtPos(playerPosition.x, playerPosition.z, playerPosition.y);
      
      zombie.currentRoomId = zombieRoom?.id;
      
      // Check if zombie is on a staircase/ramp
      const zombieOnStair = zombieRoom?.isStaircase ?? false;
      const playerOnStair = playerRoom?.isStaircase ?? false;
      
      // Track effective stair state (updated after movement for teleport guard)
      let effectiveZombieOnStair = zombieOnStair;
      
      // Calculate floor difference for upstairs detection
      const zombieFloorY = zombieRoom?.floorY ?? 0;
      const playerFloorY = playerRoom?.floorY ?? playerPosition.y;
      const playerIsAboveZombie = playerFloorY > zombieFloorY + 2 || playerPosition.y > zombie.position.y + 2;
      
      // Track stair-stuck time for recovery (zombie at bottom of stairs, player on different floor)
      if (!zombieOnStair && playerOnStair && zombieRoom && playerRoom) {
        // Zombie is not on stairs but player is - check if zombie should be climbing
        const zombieFloorY = zombieRoom.floorY ?? 0;
        const playerExpectedY = getStaircaseElevation(playerRoom, playerPosition.x, playerPosition.z);
        const floorDifference = Math.abs(playerExpectedY - zombieFloorY);
        
        // If there's significant elevation difference and zombie is near stairwell entrance
        if (floorDifference > 2.0) {
          // Check if zombie is close to the stairwell room boundary
          const dxToStair = Math.abs(zombie.position.x - playerRoom.cx);
          const dzToStair = Math.abs(zombie.position.z - playerRoom.cz);
          const nearStairEntrance = dxToStair < playerRoom.w / 2 + 3 && dzToStair < playerRoom.d / 2 + 3;
          
          if (nearStairEntrance) {
            (zombie as any)._stairStuckTime = ((zombie as any)._stairStuckTime || 0) + deltaTime;
          } else {
            (zombie as any)._stairStuckTime = 0;
          }
        } else {
          (zombie as any)._stairStuckTime = 0;
        }
      } else {
        (zombie as any)._stairStuckTime = 0;
      }
      
      // Determine target position based on room relationship with two-stage doorway traversal
      let targetPosition: THREE.Vector3;
      let targetType: 'player' | 'doorway' = 'player';
      let doorwayTarget: THREE.Vector3 | null = null;

      // Special handling for stairs: if player is above zombie and zombie is not in a staircase room,
      // find the nearest stairwell and target its entrance/doorway
      const stairRooms = INITIAL_ROOMS.filter(room => room.isStaircase);

      if (playerIsAboveZombie && zombieRoom && !zombieRoom.isStaircase && stairRooms.length > 0) {
        // Find the best stair room (closest to player's room center or player position)
        let bestStairRoom = null;
        let bestDistance = Infinity;

        const refX = playerRoom ? playerRoom.cx : playerPosition.x;
        const refZ = playerRoom ? playerRoom.cz : playerPosition.z;

        for (const stairRoom of stairRooms) {
          const dx = stairRoom.cx - refX;
          const dz = stairRoom.cz - refZ;
          const dist = Math.sqrt(dx * dx + dz * dz);
          if (dist < bestDistance) {
            bestDistance = dist;
            bestStairRoom = stairRoom;
          }
        }

        if (bestStairRoom) {
          doorwayTarget = this.findDoorwayTarget(zombieRoom, bestStairRoom, mapObjects, zombie.position);

          if (doorwayTarget) {
            targetPosition = doorwayTarget;
            targetType = 'doorway';
            zombie.doorwayTarget = doorwayTarget.clone();
            zombie.targetRoomId = bestStairRoom.id;

            if (window.DEBUG_VERBOSE) {
              logger.zombies.info('[STAIR PATH] targeting stairwell entrance for upstairs player', {
                zombieId: zombie.id,
                zombieRoomId: zombieRoom.id,
                playerRoomId: playerRoom?.id,
                playerIsAboveZombie,
                bestStairRoomId: bestStairRoom.id,
                doorwayTarget
              });
            }
          } else {
            // Fallback: target the center of the stair room on zombie's floor instead of chasing through floors
            targetPosition = new THREE.Vector3(bestStairRoom.cx, zombieFloorY, bestStairRoom.cz);
            targetType = 'doorway';
            doorwayTarget = targetPosition.clone();
            zombie.doorwayTarget = targetPosition.clone();
            zombie.targetRoomId = bestStairRoom.id;
            
            if (window.DEBUG_VERBOSE) {
              logger.zombies.info('[STAIR PATH] doorway target failed, using stair room center fallback', {
                zombieId: zombie.id,
                zombieRoomId: zombieRoom.id,
                bestStairRoomId: bestStairRoom.id,
                playerRoomId: playerRoom?.id,
                fallbackTarget: targetPosition.clone()
              });
            }
          }
        } else {
          targetPosition = playerPosition;
          targetType = 'player';
        }
      }
      // Special handling for staircases: if player is in a staircase room and zombie is not,
      // target the stairwell entrance/doorway instead of chasing directly through floors
      else if (playerRoom?.isStaircase && !zombieRoom?.isStaircase && zombieRoom && playerRoom) {
        doorwayTarget = this.findDoorwayTarget(zombieRoom, playerRoom, mapObjects, zombie.position);

        if (doorwayTarget) {
          targetPosition = doorwayTarget;
          targetType = 'doorway';
          zombie.doorwayTarget = doorwayTarget.clone();
          zombie.targetRoomId = playerRoom.id;

          if (window.DEBUG_VERBOSE) {
            logger.zombies.info('[STAIR PATH] targeting stairwell entrance', {
              zombieId: zombie.id,
              zombieRoomId: zombieRoom.id,
              playerRoomId: playerRoom.id,
              doorwayTarget
            });
          }
        } else {
          // Fallback: target the center of the stair room on zombie's floor instead of chasing through floors
          const zombieFloorY = zombieRoom.floorY ?? 0;
          targetPosition = new THREE.Vector3(playerRoom.cx, zombieFloorY, playerRoom.cz);
          targetType = 'doorway';
          doorwayTarget = targetPosition.clone();
          zombie.doorwayTarget = targetPosition.clone();
          zombie.targetRoomId = playerRoom.id;
          
          if (window.DEBUG_VERBOSE) {
            logger.zombies.info('[STAIR PATH] stairwell doorway target failed, using stair room center fallback', {
              zombieId: zombie.id,
              zombieRoomId: zombieRoom.id,
              playerRoomId: playerRoom.id,
              fallbackTarget: targetPosition.clone()
            });
          }
        }
      }
      // Same room: chase player directly
      else if (zombieRoom && playerRoom && zombieRoom.id === playerRoom.id) {
        targetPosition = playerPosition;
        targetType = 'player';
        zombie.doorwayTarget = undefined;
      }
      // Different rooms: find doorway target toward player
      else if (zombieRoom && playerRoom) {
        doorwayTarget = this.findDoorwayTarget(zombieRoom, playerRoom, mapObjects, zombie.position);

        if (doorwayTarget) {
          targetPosition = doorwayTarget;
          targetType = 'doorway';
          zombie.doorwayTarget = doorwayTarget.clone();
          zombie.targetRoomId = playerRoom.id;
        } else {
          // Fallback: target the center of the player's room on zombie's floor instead of chasing through walls
          const zombieFloorY = zombieRoom.floorY ?? 0;
          targetPosition = new THREE.Vector3(playerRoom.cx, zombieFloorY, playerRoom.cz);
          targetType = 'doorway';
          doorwayTarget = targetPosition.clone();
          zombie.doorwayTarget = targetPosition.clone();
          zombie.targetRoomId = playerRoom.id;
          
          if (window.DEBUG_VERBOSE) {
            logger.zombies.info('[ZOMBIE PATH] doorway target failed, using player room center fallback', {
              zombieId: zombie.id,
              zombieRoomId: zombieRoom.id,
              playerRoomId: playerRoom.id,
              fallbackTarget: targetPosition.clone()
            });
          }
        }
      } else {
        targetPosition = playerPosition;
        targetType = 'player';
      }
      
      // Log target changes only (not every frame)
      const prevTargetType = (zombie as any)._prevTargetType;
      const prevTargetRoom = (zombie as any)._prevTargetRoom;
      const prevDoorwayTarget = (zombie as any)._prevDoorwayTarget;
      
      // Reset doorway distance tracking when the target changes
      if (prevDoorwayTarget && doorwayTarget && !prevDoorwayTarget.equals(doorwayTarget)) {
        (zombie as any)._lastDistToTarget = undefined;
        (zombie as any)._doorwayStuckTime = 0;
      } else if (prevTargetType !== targetType || prevTargetRoom !== zombie.targetRoomId) {
        // Target type or room changed - reset tracking
        (zombie as any)._lastDistToTarget = undefined;
        (zombie as any)._doorwayStuckTime = 0;
      }
      
      if (prevTargetType !== targetType || prevTargetRoom !== zombie.targetRoomId) {
        if (targetType === 'doorway') {
          logger.zombies.info('[ZOMBIE PATH] different room, using doorway target', {
            zombieId: zombie.id,
            zombieRoomId: zombieRoom?.id,
            playerRoomId: playerRoom?.id,
            targetRoomId: zombie.targetRoomId,
            doorwayTarget: zombie.doorwayTarget
          });
        } else if (prevTargetType === 'doorway' && targetType === 'player') {
          logger.zombies.info('[ZOMBIE PATH] same room, chasing player', {
            zombieId: zombie.id,
            zombieRoomId: zombieRoom?.id,
            playerRoomId: playerRoom?.id
          });
        } else if (!doorwayTarget && targetType === 'player' && zombieRoom?.id !== playerRoom?.id) {
          logger.zombies.warn('[ZOMBIE PATH] no valid path found', {
            zombieId: zombie.id,
            zombieRoomId: zombieRoom?.id,
            playerRoomId: playerRoom?.id
          });
        }
        (zombie as any)._prevTargetType = targetType;
        (zombie as any)._prevTargetRoom = zombie.targetRoomId;
      }
      (zombie as any)._prevDoorwayTarget = doorwayTarget ? doorwayTarget.clone() : null;

      // DOORWAY ARRIVAL FORGIVENESS: If targeting a doorway and close enough, consider it reached
      // CRITICAL: This must run BEFORE calculating isTargetingDoorway so the flag reflects the updated targetType
      if (targetType === 'doorway' && doorwayTarget) {
        const distToDoorwayXZ = Math.sqrt(
          Math.pow(zombie.position.x - doorwayTarget.x, 2) +
          Math.pow(zombie.position.z - doorwayTarget.z, 2)
        );

        if (distToDoorwayXZ < ZOMBIE_DOORWAY_ARRIVAL_DIST) {
          zombie.doorwayTarget = undefined;
          zombie.targetRoomId = undefined;
          doorwayTarget = null;
          targetType = 'player';
          targetPosition = playerPosition;
          
          if (window.DEBUG_VERBOSE) {
            logger.zombies.info('[ZOMBIE DOORWAY] arrived at doorway, switching to player chase', {
              zombieId: zombie.id,
              zombieRoomId: zombieRoom?.id,
              playerRoomId: playerRoom?.id,
              distToDoorway: distToDoorwayXZ
            });
          }
        }
      }

      // --- STUCK DETECTION ---
      // Must run AFTER targetType is calculated (and after doorway arrival check)
      const distanceMoved = zombie.position.distanceTo(zombie.lastPosition);
      const isMoving = distanceMoved > 0.05;
      
      // CRITICAL: Disable stuck recovery completely when targeting a doorway
      // Doorway zombies should either move forward or stop/bunch, not nudge around
      const isTargetingDoorway = targetType === 'doorway';

      // Check for stair-stuck scenario - DISABLED to prevent fake stair climbing.
      // Zombies were floating upward even when not on stairs, walking through/under stairs
      // instead of using proper stair climbing via updatedZombieOnStair detection after movement.
      const isStairStuck = false;

      if (!isMoving && zombie.state === 'alive' && !isTargetingDoorway && !isStairStuck) {
        zombie.stuckTimer += deltaTime;
        if (zombie.stuckTimer > ZOMBIE_STUCK_THRESHOLD) {
          logger.zombies.warn(`[ZOMBIE STUCK] Zombie ${zombie.id} detected stuck. Triggering recovery.`);
          
          // Recovery: Try small candidate offsets and only apply if collision-free
          // CRITICAL: Recovery must NOT teleport zombies to other rooms
          // Only tiny local nudges (max 0.25 units) are allowed
          const oldX = zombie.position.x;
          const oldY = zombie.position.y;
          const oldZ = zombie.position.z;
          const recoveryCandidates = [
            new THREE.Vector3(oldX + 0.15, oldY, oldZ),
            new THREE.Vector3(oldX - 0.15, oldY, oldZ),
            new THREE.Vector3(oldX, oldY, oldZ + 0.15),
            new THREE.Vector3(oldX, oldY, oldZ - 0.15),
            new THREE.Vector3(oldX + 0.1, oldY, oldZ + 0.1),
            new THREE.Vector3(oldX - 0.1, oldY, oldZ - 0.1),
            new THREE.Vector3(oldX + 0.1, oldY, oldZ - 0.1),
            new THREE.Vector3(oldX - 0.1, oldY, oldZ + 0.1),
          ];
          
          let recoveryApplied = false;
          for (const candidate of recoveryCandidates) {
            // Verify candidate is within max recovery distance
            const distFromOld = Math.sqrt(
              Math.pow(candidate.x - oldX, 2) + 
              Math.pow(candidate.z - oldZ, 2)
            );
            if (distFromOld > ZOMBIE_STUCK_RECOVERY_MAX_DISTANCE) {
              continue; // Skip candidates that are too far
            }
            
            if (!this.collidesWithWalls2D(candidate, ZOMBIE_COLLISION_RADIUS, mapObjects)) {
              zombie.position.x = candidate.x;
              zombie.position.z = candidate.z;
              zombie.position.y = this.getGroundYAtPosition(candidate.x, candidate.z, mapObjects);
              recoveryApplied = true;
              break;
            }
          }
          
          if (!recoveryApplied) {
            logger.zombies.warn(`[ZOMBIE STUCK] No valid recovery position found for zombie ${zombie.id}. Leaving in place.`);
          } else {
            logger.zombies.info(`[ZOMBIE RECOVERY CHECK]`, {
              oldX,
              oldY,
              oldZ,
              newPosition: zombie.position.clone()
            });
          }
          zombie.stuckTimer = 0;
        }
      } else {
        zombie.stuckTimer = 0;
      }
      zombie.lastPosition.copy(zombie.position);

      // --- BEHAVIOR LOGIC ---
      const distanceToPlayer = zombie.position.distanceTo(playerPosition);
      
      if (distanceToPlayer < ZOMBIE_ATTACK_RANGE) {
        // Attack mode: stay at range, face player
        if (zombie.mesh) {
          zombie.mesh.lookAt(playerPosition.x, zombie.mesh.position.y, playerPosition.z);
        }
      } else {
        // Chase mode: move toward target (player or doorway)
        // NOTE: Doorway arrival check already ran earlier, so targetType is up-to-date here
        
        // 1. Calculate desired chase movement (XZ plane ONLY)
        chaseMove.subVectors(targetPosition, zombie.position);
        chaseMove.y = 0; // CRITICAL: No vertical component
        if (chaseMove.lengthSq() > 0.001) {
          chaseMove.normalize().multiplyScalar(zombie.config.speed * deltaTime);
        } else {
          chaseMove.set(0, 0, 0);
        }

        // 2. Calculate zombie-to-zombie separation (XZ plane ONLY)
        // When targeting a doorway, disable separation completely to prevent sliding along walls
        separation.set(0, 0, 0);
        let neighborCount = 0;
        
        // Only apply separation when NOT targeting a doorway (isTargetingDoorway defined in stuck detection)
        if (!isTargetingDoorway) {
          this.zombies.forEach((other, otherId) => {
            if (otherId === id || other.state !== 'alive') return;
            
            // 2D distance only (XZ plane)
            const dx = zombie.position.x - other.position.x;
            const dz = zombie.position.z - other.position.z;
            const distXZ = Math.sqrt(dx * dx + dz * dz);
            
            if (distXZ < ZOMBIE_MIN_SEPARATION && distXZ > 0.01) {
              // Push away on XZ only
              const pushX = dx / distXZ;
              const pushZ = dz / distXZ;
              const pushStrength = (ZOMBIE_MIN_SEPARATION - distXZ) / ZOMBIE_MIN_SEPARATION;
              
              separation.x += pushX * pushStrength * ZOMBIE_SEPARATION_STRENGTH;
              separation.z += pushZ * pushStrength * ZOMBIE_SEPARATION_STRENGTH;
              neighborCount++;
            }
          });

          if (neighborCount > 0) {
            // Clamp separation to prevent explosion
            const sepLength = Math.sqrt(separation.x * separation.x + separation.z * separation.z);
            if (sepLength > ZOMBIE_MAX_SEPARATION_PER_FRAME) {
              separation.x = (separation.x / sepLength) * ZOMBIE_MAX_SEPARATION_PER_FRAME;
              separation.z = (separation.z / sepLength) * ZOMBIE_MAX_SEPARATION_PER_FRAME;
            }
            if (window.DEBUG_VERBOSE) {
              logger.zombies.debug(`[ZOMBIE SEPARATION] Zombie ${zombie.id}: ${neighborCount} neighbors, separation applied`);
            }
          }
        }
        separation.y = 0; // CRITICAL: No vertical component

        // Combine chase and separation (both XZ only)
        const totalMove = new THREE.Vector3(
          chaseMove.x + separation.x,
          0,
          chaseMove.z + separation.z
        );

        // 3. Apply wall collision
        // For doorway targets: use direct combined XZ movement with fallback attempts if blocked
        // For normal chase: use separate X/Z sliding
        if (mapObjects.length > 0) {
          if (isTargetingDoorway) {
            // DOORWAY TUNNEL MODE: Direct combined XZ movement with fallback attempts
            const combined = zombie.position.clone();
            combined.x += totalMove.x;
            combined.z += totalMove.z;
            combined.y = oldY;

            // Helper function to try a candidate position
            const tryDoorwayMove = (candidate: THREE.Vector3): boolean => {
              if (!this.collidesWithWalls2D(candidate, ZOMBIE_COLLISION_RADIUS, mapObjects, true)) {
                zombie.position.x = candidate.x;
                zombie.position.z = candidate.z;
                return true;
              }
              return false;
            };

            let moved = tryDoorwayMove(combined);

            // Fallback 1: Try X-only movement
            if (!moved) {
              const xOnly = zombie.position.clone();
              xOnly.x += totalMove.x;
              xOnly.y = oldY;
              moved = tryDoorwayMove(xOnly);
            }

            // Fallback 2: Try Z-only movement
            if (!moved) {
              const zOnly = zombie.position.clone();
              zOnly.z += totalMove.z;
              zOnly.y = oldY;
              moved = tryDoorwayMove(zOnly);
            }

            // Fallback 3: Try perpendicular nudges (left/right)
            if (!moved && doorwayTarget) {
              const dir = new THREE.Vector3(
                doorwayTarget.x - zombie.position.x,
                0,
                doorwayTarget.z - zombie.position.z
              ).normalize();

              const perp = new THREE.Vector3(-dir.z, 0, dir.x);

              const left = zombie.position.clone().addScaledVector(perp, 0.25);
              left.y = oldY;
              moved = tryDoorwayMove(left);

              if (!moved) {
                const right = zombie.position.clone().addScaledVector(perp, -0.25);
                right.y = oldY;
                moved = tryDoorwayMove(right);
              }
            }

            // If all attempts fail, log and stay in place
            if (!moved) {
              // Add debug logging to identify what's blocking the doorway
              if (window.DEBUG_VERBOSE) {
                const nextPos = zombie.position.clone();
                nextPos.x += totalMove.x;
                nextPos.z += totalMove.z;
                
                const blockingObjects: Array<{
                  name: string;
                  colliderType: string;
                  isOpen?: boolean;
                  blocksZombies?: boolean;
                  isCollidable?: boolean;
                  position: THREE.Vector3;
                  boxMin: THREE.Vector3;
                  boxMax: THREE.Vector3;
                }> = [];
                
                for (const obj of mapObjects) {
                  const box = new THREE.Box3().setFromObject(obj);
                  const expandedBox = new THREE.Box3(
                    new THREE.Vector3(box.min.x - ZOMBIE_COLLISION_RADIUS, box.min.y, box.min.z - ZOMBIE_COLLISION_RADIUS),
                    new THREE.Vector3(box.max.x + ZOMBIE_COLLISION_RADIUS, box.max.y, box.max.z + ZOMBIE_COLLISION_RADIUS)
                  );
                  
                  if (nextPos.x >= expandedBox.min.x && nextPos.x <= expandedBox.max.x &&
                      nextPos.z >= expandedBox.min.z && nextPos.z <= expandedBox.max.z) {
                    const wallHeight = box.max.y - box.min.y;
                    if (wallHeight > ZOMBIE_MAX_CLIMB_HEIGHT) {
                      blockingObjects.push({
                        name: obj.name || 'unnamed',
                        colliderType: obj.userData.colliderType || 'unknown',
                        isOpen: obj.userData.isOpen,
                        blocksZombies: obj.userData.blocksZombies,
                        isCollidable: obj.userData.isCollidable,
                        position: obj.position.clone(),
                        boxMin: box.min.clone(),
                        boxMax: box.max.clone()
                      });
                    }
                  }
                }
                
                console.log('[ZOMBIE DOOR BLOCKED]', {
                  zombieId: zombie.id,
                  nextPos: nextPos.clone(),
                  blockingObjects
                });
              }
              
              // Stay in place - do not revert since we never moved
            }
          } else {
            // NORMAL CHASE MODE: Same fallback attempts as doorway mode for robust movement
            const combined = zombie.position.clone();
            combined.x += totalMove.x;
            combined.z += totalMove.z;
            combined.y = oldY;

            // Helper function to try a candidate position
            const tryChaseMove = (candidate: THREE.Vector3): boolean => {
              if (!this.collidesWithWalls2D(candidate, ZOMBIE_COLLISION_RADIUS, mapObjects, true)) {
                zombie.position.x = candidate.x;
                zombie.position.z = candidate.z;
                return true;
              }
              return false;
            };

            let moved = tryChaseMove(combined);

            // Fallback 1: Try X-only movement
            if (!moved) {
              const xOnly = zombie.position.clone();
              xOnly.x += totalMove.x;
              xOnly.y = oldY;
              moved = tryChaseMove(xOnly);
            }

            // Fallback 2: Try Z-only movement
            if (!moved) {
              const zOnly = zombie.position.clone();
              zOnly.z += totalMove.z;
              zOnly.y = oldY;
              moved = tryChaseMove(zOnly);
            }

            // Fallback 3: Try perpendicular nudges (left/right)
            if (!moved && distanceToPlayer > 0.1) {
              const dir = new THREE.Vector3(
                playerPosition.x - zombie.position.x,
                0,
                playerPosition.z - zombie.position.z
              ).normalize();

              const perp = new THREE.Vector3(-dir.z, 0, dir.x);

              const left = zombie.position.clone().addScaledVector(perp, 0.25);
              left.y = oldY;
              moved = tryChaseMove(left);

              if (!moved) {
                const right = zombie.position.clone().addScaledVector(perp, -0.25);
                right.y = oldY;
                moved = tryChaseMove(right);
              }
            }

            // If all attempts fail, log stuck info
            if (!moved && window.DEBUG_VERBOSE) {
              const nextPos = zombie.position.clone();
              nextPos.x += totalMove.x;
              nextPos.z += totalMove.z;
              
              const blockingObjects: Array<{
                name: string;
                colliderType: string;
                isOpen?: boolean;
                blocksZombies?: boolean;
                isCollidable?: boolean;
                position: THREE.Vector3;
                boxMin: THREE.Vector3;
                boxMax: THREE.Vector3;
              }> = [];
              
              for (const obj of mapObjects) {
                const box = new THREE.Box3().setFromObject(obj);
                const expandedBox = new THREE.Box3(
                  new THREE.Vector3(box.min.x - ZOMBIE_COLLISION_RADIUS, box.min.y, box.min.z - ZOMBIE_COLLISION_RADIUS),
                  new THREE.Vector3(box.max.x + ZOMBIE_COLLISION_RADIUS, box.max.y, box.max.z + ZOMBIE_COLLISION_RADIUS)
                );
                
                if (nextPos.x >= expandedBox.min.x && nextPos.x <= expandedBox.max.x &&
                    nextPos.z >= expandedBox.min.z && nextPos.z <= expandedBox.max.z) {
                  const wallHeight = box.max.y - box.min.y;
                  if (wallHeight > ZOMBIE_MAX_CLIMB_HEIGHT) {
                    blockingObjects.push({
                      name: obj.name || 'unnamed',
                      colliderType: obj.userData.colliderType || 'unknown',
                      isOpen: obj.userData.isOpen,
                      blocksZombies: obj.userData.blocksZombies,
                      isCollidable: obj.userData.isCollidable,
                      position: obj.position.clone(),
                      boxMin: box.min.clone(),
                      boxMax: box.max.clone()
                    });
                  }
                }
              }
              
              console.warn('[SAME-ROOM ZOMBIE STUCK]', {
                zombieId: zombie.id,
                zombiePos: zombie.position.clone(),
                playerPos: playerPosition.clone(),
                targetPos: targetPosition.clone(),
                distanceToPlayer,
                totalMove: totalMove.clone(),
                blockingObjects,
                zombieRoomId: zombieRoom?.id,
                playerRoomId: playerRoom?.id
              });
            }
          }
        } else {
          // No map objects, apply movement directly
          zombie.position.x += totalMove.x;
          zombie.position.z += totalMove.z;
        }

        // 4. Lock Y to ground height - CRITICAL: Never allow wall collision to change Y
        // STAIR CLIMBING FIX: When on stairs or player is on stairs, use staircase elevation
        
        // Recompute room and stair state at NEW position after movement
        const updatedZombieRoom = this.getRoomAtPos(zombie.position.x, zombie.position.z, zombie.position.y);
        const updatedZombieOnStair = updatedZombieRoom?.isStaircase ?? false;
        
        // Update effective stair state for teleport guard
        effectiveZombieOnStair = updatedZombieOnStair;
        
        let groundY = this.getGroundYAtPosition(zombie.position.x, zombie.position.z, mapObjects);
        
        // Check if zombie is currently on a stair/ramp and adjust Y accordingly
        if (updatedZombieOnStair && updatedZombieRoom) {
          const stairY = getStaircaseElevation(updatedZombieRoom, zombie.position.x, zombie.position.z);
          // Only apply stair elevation if it's higher than base ground (prevents sinking)
          if (stairY > groundY - 0.1) {
            groundY = stairY;
          }
        }
        
        // Debug log for Y position (debug mode only)
        if (window.DEBUG_VERBOSE) {
          console.log('[ZOMBIE Y DEBUG]', {
            id: zombie.id,
            oldY: oldY.toFixed(3),
            computedGroundY: groundY.toFixed(3),
            newPositionY: zombie.position.y.toFixed(3),
            zombieOnStair: updatedZombieOnStair,
            playerOnStair
          });
        }
        
        zombie.position.y = groundY;

        // Safety check: reject any vertical climbing (but allow stair climbing)
        const maxYChange = updatedZombieOnStair ? 0.5 : 0.2; // Allow larger steps on stairs
        if (Math.abs(zombie.position.y - oldY) > maxYChange) {
          logger.zombies.warn(`[ZOMBIE COLLISION] rejected vertical climb for zombie ${zombie.id}: oldY=${oldY.toFixed(2)}, newY=${zombie.position.y.toFixed(2)}`);
          zombie.position.y = oldY;
        }

        // Note: Mesh sync moved to END of zombie update to handle all behavior modes
      }

      // TELEPORT GUARD: Detect and block any unauthorized position changes
      // Zombies should only move by normal speed-based movement, not teleport
      const movedDistance = zombie.position.distanceTo(oldPos);
      const maxAllowedMove = zombie.config.speed * deltaTime + ZOMBIE_TELEPORT_GUARD_MARGIN + 0.2; // Add extra margin for stair climbing
      
      // Use updated stair state for teleport guard (zombie may have just stepped onto stairs)
      // effectiveZombieOnStair was already set after recomputing room position
      
      // For zombies on stairs or climbing stairs, allow more vertical movement
      const totalMovement3D = Math.sqrt(
        Math.pow(zombie.position.x - oldPos.x, 2) +
        Math.pow(zombie.position.y - oldPos.y, 2) +
        Math.pow(zombie.position.z - oldPos.z, 2)
      );
      const maxAllowed3D = effectiveZombieOnStair || isStairStuck ? 
        Math.sqrt(Math.pow(maxAllowedMove, 2) + Math.pow(0.5, 2)) : // Extra Y allowance for stairs
        maxAllowedMove + 0.15;

      if (totalMovement3D > maxAllowed3D) {
        logger.zombies.error('[ZOMBIE TELEPORT BLOCKED]', {
          zombieId: zombie.id,
          oldPos: oldPos.clone(),
          attemptedPos: zombie.position.clone(),
          movedDistance: totalMovement3D.toFixed(3),
          maxAllowedMove: maxAllowed3D.toFixed(3),
          effectiveZombieOnStair,
          isStairStuck
        });
        // Revert to old position - this was an illegal teleport
        zombie.position.copy(oldPos);
        zombie.position.y = this.getGroundYAtPosition(oldPos.x, oldPos.z, mapObjects);
        
        // Also update mesh if it exists
        if (zombie.mesh) {
          zombie.mesh.position.copy(zombie.position);
          zombie.mesh.position.y = zombie.position.y + zombie.config.height / 2;
        }
      }

      // Check collision with player
      if (this.checkPlayerCollision(zombie, playerPosition)) {
        this.damagePlayer(zombie);
      }

      // CRITICAL: Sync mesh position at the END of every zombie update
      // This ensures visual mesh always matches logical position regardless of behavior mode
      // (chase, attack, stuck recovery, etc.)
      if (zombie.mesh) {
        zombie.mesh.position.copy(zombie.position);
        zombie.mesh.position.y = zombie.position.y + zombie.config.height / 2;
        zombie.mesh.lookAt(playerPosition.x, zombie.mesh.position.y, playerPosition.z);
        
        // Desync check (only warn in debug mode)
        if (window.DEBUG_VERBOSE) {
          const logicalPos = zombie.position;
          const meshPos = zombie.mesh.position;
          const dx = logicalPos.x - meshPos.x;
          const dz = logicalPos.z - meshPos.z;
          const distXZ = Math.sqrt(dx * dx + dz * dz);
          if (distXZ > 0.1) {
            console.warn('[ZOMBIE DESYNC] mesh does not match logic position', {
              id: zombie.id,
              logical: logicalPos.clone(),
              mesh: meshPos.clone()
            });
          }
        }
      }

      // Update collision helper visualization (only when debug enabled)
      this.updateCollisionHelper(zombie, zombie.doorwayTarget);
    });

    // Clean up dead zombies
    deadZombies.forEach(id => this.removeZombie(id));
  }

  /**
   * Check if a position collides with any wall in 2D (XZ plane only).
   * Treats zombie as a circle/cylinder and walls as 2D rectangles on XZ.
   * 
   * @param position - The position to check (y is ignored)
   * @param radius - Zombie collision radius
   * @param mapObjects - Array of wall objects to check against
   * @returns true if collision detected, false otherwise
   */
  private collidesWithWalls2D(
    position: THREE.Vector3,
    radius: number,
    mapObjects: THREE.Object3D[],
    ignoreOpenDoors: boolean = false
  ): boolean {
    const testPos = new THREE.Vector3(position.x, 0, position.z);
    
    // Starter doorway emergency no-block zone
    // This allows zombies to pass through the open starter classroom doorway
    // without getting stuck, even if there are residual collider issues.
    const isStarterDoorwayZone =
      position.x > -9 &&
      position.x < 9 &&
      position.z > -16 &&
      position.z < -4;
    
    if (isStarterDoorwayZone) {
      if (window.DEBUG_VERBOSE) {
        console.log("[STARTER DOORWAY NO-BLOCK ACTIVE]", {
          position: position.clone()
        });
      }
      return false;
    }
    
    for (const obj of mapObjects) {
      // Get world bounding box for this object
      const box = new THREE.Box3().setFromObject(obj);
      
      // Only consider objects marked as collidable
      if (!obj.userData.isCollidable) continue;
      // Filter by colliderType: only walls, doors, and props block movement
      const colliderType = obj.userData.colliderType;
      if (colliderType !== 'wall' && colliderType !== 'door' && colliderType !== 'prop') {
        continue;
      }
      
      // Skip open/passable doors
      // Doors only block if they are explicitly closed/locked (blocksZombies === true)
      if (colliderType === 'door') {
        const isOpen = obj.userData.isOpen === true;
        const blocksZombies = obj.userData.blocksZombies === true;
        
        // If door is open OR doesn't explicitly block zombies, skip it
        if (isOpen || !blocksZombies) {
          continue;
        }
      }
      
      // Also skip open doors if ignoreOpenDoors is true (for doorway targeting)
      if (ignoreOpenDoors && colliderType === 'door' && obj.userData.isOpen === true) {
        continue;
      }
      
      // Expand the box by zombie radius for circle-AABB collision
      const expandedBox = new THREE.Box3(
        new THREE.Vector3(box.min.x - radius, box.min.y, box.min.z - radius),
        new THREE.Vector3(box.max.x + radius, box.max.y, box.max.z + radius)
      );
      
      // Check if point is inside expanded box (on XZ plane)
      if (testPos.x >= expandedBox.min.x && testPos.x <= expandedBox.max.x &&
          testPos.z >= expandedBox.min.z && testPos.z <= expandedBox.max.z) {
        // Also verify wall height is sufficient to block movement (> 0.3 units)
        const wallHeight = box.max.y - box.min.y;
        if (wallHeight > ZOMBIE_MAX_CLIMB_HEIGHT) {
          return true;
        }
      }
    }
    
    return false;
  }

  /**
   * Get the ground Y position at a given XZ coordinate.
   * Uses floor objects to determine ground height.
   * 
   * @param x - X position
   * @param z - Z position
   * @param mapObjects - Array of map objects including floors
   * @returns Ground Y position, defaults to 0 if no floor found
   */
  private getGroundYAtPosition(
    x: number,
    z: number,
    mapObjects: THREE.Object3D[]
  ): number {
    const testPoint = new THREE.Vector3(x, 0, z);
    let groundY = 0; // Default ground level
    let foundFloor = false;
    
    for (const obj of mapObjects) {
      // Check if this is a floor object
      // Filter by colliderType: only floors and ramps provide ground
      const colliderType = obj.userData.colliderType;
      if (colliderType !== 'floor' && colliderType !== 'ramp') {
        continue;
      }
      if (!obj.userData.isCollidable) continue;
      
      const box = new THREE.Box3().setFromObject(obj);
      
      // Check if point is above this floor (on XZ plane)
      if (testPoint.x >= box.min.x && testPoint.x <= box.max.x &&
          testPoint.z >= box.min.z && testPoint.z <= box.max.z) {
        // This is a floor beneath the zombie
        const floorTopY = box.max.y;
        if (!foundFloor || floorTopY > groundY) {
          groundY = floorTopY;
          foundFloor = true;
        }
      }
    }
    
    // Safety check: ensure we return a valid number
    if (!foundFloor) {
      // No floor found - log warning but return default ground level (only in debug mode)
      if (window.DEBUG_VERBOSE) {
        console.warn('[ZOMBIE Y ERROR] No floor found at position', { x, z, defaultingTo: groundY });
      }
    }
    
    // Ensure groundY is never NaN or undefined
    if (isNaN(groundY) || groundY === undefined) {
      console.warn('[ZOMBIE Y ERROR] Invalid groundY detected, resetting to 0');
      groundY = 0;
    }
    
    // Debug log for ground detection (debug mode only)
    if (window.DEBUG_VERBOSE) {
      console.log('[ZOMBIE Y DEBUG] getGroundYAtPosition result', {
        x: x.toFixed(2),
        z: z.toFixed(2),
        groundY: groundY.toFixed(3),
        foundFloor
      });
    }
    
    return groundY;
  }

  /**
   * Get the room at a given XZ position.
   * Uses INITIAL_ROOMS to determine which room contains the position.
   * 
   * @param x - X position
   * @param z - Z position
   * @param y - Y position (for multi-floor maps)
   * @returns Room object if found, null otherwise
   */
  private getRoomAtPos(x: number, z: number, y: number = 0): Room | null {
    for (const room of INITIAL_ROOMS) {
      // Check if position is within room bounds on XZ plane
      const xMin = room.cx - room.w / 2;
      const xMax = room.cx + room.w / 2;
      const zMin = room.cz - room.d / 2;
      const zMax = room.cz + room.d / 2;
      
      if (x >= xMin && x <= xMax && z >= zMin && z <= zMax) {
        // For multi-floor rooms, also check Y elevation
        const floorY = room.floorY ?? 0;
        const roomHeight = room.h ?? 10;
        const yMin = floorY;
        const yMax = floorY + roomHeight;
        
        if (y >= yMin && y <= yMax) {
          return room;
        } else if (room.floorY === undefined || room.h === undefined) {
          // If room doesn't specify floor/height, assume it's valid at any Y
          return room;
        }
      }
    }
    return null;
  }

  /**
   * Find a doorway target to path toward when zombie and player are in different rooms.
   * Returns the center of the doorway opening (single point, no phases).
   * Uses ROOM_GAPS to find connections between rooms.
   * 
   * @param zombieRoom - The zombie's current room
   * @param playerRoom - The player's current room
   * @param mapObjects - Array of map objects for collision checking
   * @param zombiePos - Current zombie position for distance check
   * @returns Doorway target position if found, null otherwise
   */
  private findDoorwayTarget(
    zombieRoom: Room,
    playerRoom: Room,
    mapObjects: THREE.Object3D[] = [],
    zombiePos?: THREE.Vector3
  ): THREE.Vector3 | null {
    // Simple approach: find a gap in zombieRoom that leads toward playerRoom
    // In a full pathfinding system, this would use A* or similar
    
    const gaps = ROOM_GAPS[zombieRoom.id];
    if (!gaps || gaps.length === 0) {
      return null;
    }

    // Find the gap closest to the player's room center
    let bestGap: (typeof gaps)[number] | null = null;
    let bestDistance = Infinity;

    for (const gap of gaps) {
      // Calculate doorway center in world space based on room and gap side
      // Match the same convention as App.tsx door placement
      let doorX = zombieRoom.cx;
      let doorZ = zombieRoom.cz;
      const halfW = zombieRoom.w / 2;
      const halfD = zombieRoom.d / 2;

      switch (gap.side) {
        case 'N':
          // N wall is at localZ = +halfD, so worldZ = cz + halfD
          doorZ = zombieRoom.cz + halfD;
          doorX = zombieRoom.cx + gap.center;
          break;
        case 'S':
          // S wall is at localZ = -halfD, so worldZ = cz - halfD
          doorZ = zombieRoom.cz - halfD;
          doorX = zombieRoom.cx + gap.center;
          break;
        case 'E':
          // E wall is at localX = +halfW, so worldX = cx + halfW
          doorX = zombieRoom.cx + halfW;
          doorZ = zombieRoom.cz + gap.center;
          break;
        case 'W':
          // W wall is at localX = -halfW, so worldX = cx - halfW
          doorX = zombieRoom.cx - halfW;
          doorZ = zombieRoom.cz + gap.center;
          break;
      }

      // Distance from doorway to player room center
      const dx = doorX - playerRoom.cx;
      const dz = doorZ - playerRoom.cz;
      const distance = Math.sqrt(dx * dx + dz * dz);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestGap = gap;
      }
    }

    if (!bestGap) {
      return null;
    }

    // Calculate doorway center position using world coordinates
    // Match the same convention as App.tsx door placement
    const halfW = zombieRoom.w / 2;
    const halfD = zombieRoom.d / 2;
    const floorY = zombieRoom.floorY ?? 0;
    
    let targetX = zombieRoom.cx;
    let targetZ = zombieRoom.cz;
    let doorCenterX = zombieRoom.cx;
    let doorCenterZ = zombieRoom.cz;

    switch (bestGap.side) {
      case 'N': {
        // N wall is at localZ = +halfD, so worldZ = cz + halfD
        doorCenterX = zombieRoom.cx + bestGap.center;
        doorCenterZ = zombieRoom.cz + halfD;
        
        // Check if zombie is close to the inside target
        const insideTargetZ = doorCenterZ - ZOMBIE_DOORWAY_OFFSET;
        let usePassThrough = false;
        
        if (zombiePos) {
          const distToInside = Math.abs(zombiePos.z - insideTargetZ);
          if (distToInside < ZOMBIE_DOORWAY_ARRIVAL_DIST) {
            usePassThrough = true;
          }
        }
        
        if (usePassThrough) {
          // Pass-through target: slightly outside the room (north of the wall)
          targetX = doorCenterX;
          targetZ = doorCenterZ + ZOMBIE_DOORWAY_OUTSIDE_OFFSET;
        } else {
          // Inside target: slightly inside the room (south of the wall)
          targetX = doorCenterX;
          targetZ = insideTargetZ;
        }
        break;
      }
      case 'S': {
        // S wall is at localZ = -halfD, so worldZ = cz - halfD
        doorCenterX = zombieRoom.cx + bestGap.center;
        doorCenterZ = zombieRoom.cz - halfD;
        
        // Check if zombie is close to the inside target
        const insideTargetZ = doorCenterZ + ZOMBIE_DOORWAY_OFFSET;
        let usePassThrough = false;
        
        if (zombiePos) {
          const distToInside = Math.abs(zombiePos.z - insideTargetZ);
          if (distToInside < ZOMBIE_DOORWAY_ARRIVAL_DIST) {
            usePassThrough = true;
          }
        }
        
        if (usePassThrough) {
          // Pass-through target: slightly outside the room (south of the wall)
          targetX = doorCenterX;
          targetZ = doorCenterZ - ZOMBIE_DOORWAY_OUTSIDE_OFFSET;
        } else {
          // Inside target: slightly inside the room (north of the wall)
          targetX = doorCenterX;
          targetZ = insideTargetZ;
        }
        break;
      }
      case 'E': {
        // E wall is at localX = +halfW, so worldX = cx + halfW
        doorCenterX = zombieRoom.cx + halfW;
        doorCenterZ = zombieRoom.cz + bestGap.center;
        
        // Check if zombie is close to the inside target
        const insideTargetX = doorCenterX - ZOMBIE_DOORWAY_OFFSET;
        let usePassThrough = false;
        
        if (zombiePos) {
          const distToInside = Math.abs(zombiePos.x - insideTargetX);
          if (distToInside < ZOMBIE_DOORWAY_ARRIVAL_DIST) {
            usePassThrough = true;
          }
        }
        
        if (usePassThrough) {
          // Pass-through target: slightly outside the room (east of the wall)
          targetX = doorCenterX + ZOMBIE_DOORWAY_OUTSIDE_OFFSET;
          targetZ = doorCenterZ;
        } else {
          // Inside target: slightly inside the room (west of the wall)
          targetX = insideTargetX;
          targetZ = doorCenterZ;
        }
        break;
      }
      case 'W': {
        // W wall is at localX = -halfW, so worldX = cx - halfW
        doorCenterX = zombieRoom.cx - halfW;
        doorCenterZ = zombieRoom.cz + bestGap.center;
        
        // Check if zombie is close to the inside target
        const insideTargetX = doorCenterX + ZOMBIE_DOORWAY_OFFSET;
        let usePassThrough = false;
        
        if (zombiePos) {
          const distToInside = Math.abs(zombiePos.x - insideTargetX);
          if (distToInside < ZOMBIE_DOORWAY_ARRIVAL_DIST) {
            usePassThrough = true;
          }
        }
        
        if (usePassThrough) {
          // Pass-through target: slightly outside the room (west of the wall)
          targetX = doorCenterX - ZOMBIE_DOORWAY_OUTSIDE_OFFSET;
          targetZ = doorCenterZ;
        } else {
          // Inside target: slightly inside the room (east of the wall)
          targetX = insideTargetX;
          targetZ = doorCenterZ;
        }
        break;
      }
    }

    // Validate target is collision-free using passed mapObjects
    // Use ignoreOpenDoors=true to allow pathing through open doorways
    const targetPos = new THREE.Vector3(targetX, floorY, targetZ);
    
    // Check if target is blocked (ignoring open doors)
    const targetBlocked = this.collidesWithWalls2D(targetPos, ZOMBIE_COLLISION_RADIUS, mapObjects, true);
    
    // If target is blocked by something other than an open door, try to adjust
    if (targetBlocked) {
      const adjustedTarget = this.adjustPositionForCollision(targetPos, ZOMBIE_COLLISION_RADIUS, mapObjects, true);
      if (adjustedTarget) {
        targetPos.copy(adjustedTarget);
      } else {
        // Could not find valid target point - doorway may be truly blocked
        if (window.DEBUG_VERBOSE) {
          console.log('[ZOMBIE PATH] doorway target blocked', { zombieRoom: zombieRoom.id });
        }
        return null;
      }
    }
    
    // Debug log for doorway selection
    if (window.DEBUG_VERBOSE) {
      console.log('[ZOMBIE DOORWAY DEBUG]', {
        zombieRoom: zombieRoom.id,
        playerRoom: playerRoom.id,
        targetPos: targetPos.clone(),
        gapSide: bestGap.side
      });
    }
    
    return targetPos;

  }
  /**
   * Adjust a position to avoid wall collisions by testing nearby offsets.
   * @param position - The position to adjust
   * @param radius - Zombie collision radius
   * @param mapObjects - Array of map objects for collision checking
   * @returns Adjusted position if found, null otherwise
   */
  private adjustPositionForCollision(
    position: THREE.Vector3,
    radius: number,
    mapObjects: THREE.Object3D[],
    ignoreOpenDoors: boolean = false
  ): THREE.Vector3 | null {
    const directions = [
      new THREE.Vector3(1, 0, 0),
      new THREE.Vector3(-1, 0, 0),
      new THREE.Vector3(0, 0, 1),
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(0.707, 0, 0.707),
      new THREE.Vector3(-0.707, 0, 0.707),
      new THREE.Vector3(0.707, 0, -0.707),
      new THREE.Vector3(-0.707, 0, -0.707)
    ];

    for (const dir of directions) {
      const testPos = position.clone().add(dir.multiplyScalar(0.5));
      if (!this.collidesWithWalls2D(testPos, radius, mapObjects, ignoreOpenDoors)) {
        return testPos;
      }
    }
    return null;
  }

  private checkPlayerCollision(zombie: Zombie, playerPosition: THREE.Vector3): boolean {
    const dx = zombie.position.x - playerPosition.x;
    const dz = zombie.position.z - playerPosition.z;
    const distXZ = Math.sqrt(dx * dx + dz * dz);

    const verticalDiff = Math.abs(zombie.position.y - playerPosition.y);

    // Zombie can only attack if both X/Z distance AND vertical difference are close enough
    return (
      distXZ < (zombie.config.radius + 1.0) &&
      verticalDiff < 2.2
    );
  }

  private damagePlayer(zombie: Zombie): void {
    // Only deal damage if round is active
    const roundManager = getRoundManager();
    if (roundManager.getState() !== 'active') return;

    const now = Date.now();
    // Prevent damage spam - limit to once per second per zombie
    if (now - zombie.lastDamageTime < 1000) return;

    zombie.lastDamageTime = now;
    this.notifyPlayerDamage(zombie.config.damage, zombie);
  }

  // ==========================================================================
  // Combat System
  // ==========================================================================

  damageZombie(zombieId: string, damage: number, playerId: string): boolean {
    logger.zombies.debug('ENTER damageZombie for', zombieId);
    const zombie = this.zombies.get(zombieId);
    if (!zombie || zombie.state !== 'alive') return false;

    // Apply damage
    zombie.health -= damage;
    zombie.lastDamageTime = Date.now();

    // Play hit sound
    playSound('zombie_hit');

    // Visual feedback: flash and particles on hit
    this.flashZombieHit(zombie);
    this.spawnHitParticles(zombie.position);

    this.notifyDamage(zombie, damage, playerId);

    if (zombie.health <= 0) {
      this.killZombie(zombieId, playerId);
    }

    return true;
  }

  killZombie(zombieId: string, playerId: string, skipPowerUpDrop: boolean = false): boolean {
    logger.zombies.info('ENTER killZombie for', zombieId);
    const zombie = this.zombies.get(zombieId);
    if (!zombie || zombie.state === 'dead') return false;

    zombie.state = 'dead';

    // Play death sound
    playSound('zombie_death');

    // Visual feedback: death burst particles
    this.spawnDeathParticles(zombie.position);

    // Award points
    const pointsManager = getPointsManager();
    pointsManager.addZombieKill(playerId);

    // Notify round manager
    const roundManager = getRoundManager();
    logger.zombies.debug('Calling roundManager.registerZombieKill() from killZombie');
    roundManager.registerZombieKill();

    // Notify death (power-up drop only if not skipped)
    this.notifyDeath(zombie, playerId, skipPowerUpDrop);

    // Schedule removal
    setTimeout(() => {
      this.removeZombie(zombieId);
    }, 2000); // Wait 2 seconds before removing corpse

    return true;
  }

  removeZombie(zombieId: string): void {
    const zombie = this.zombies.get(zombieId);
    if (!zombie) return;

    // Remove mesh from scene
    if (zombie.mesh && this.scene) {
      this.scene.remove(zombie.mesh);
      zombie.mesh.geometry.dispose();
      if (Array.isArray(zombie.mesh.material)) {
        zombie.mesh.material.forEach(m => m.dispose());
      } else {
        zombie.mesh.material.dispose();
      }
    }

    // Remove collision helper from scene
    this.removeCollisionHelper(zombie);

    this.zombies.delete(zombieId);
  }

  // ==========================================================================
  // Getters & State
  // ==========================================================================

  getZombie(zombieId: string): Zombie | undefined {
    return this.zombies.get(zombieId);
  }

  getAllZombies(): Zombie[] {
    return Array.from(this.zombies.values());
  }

  getAliveZombies(): Zombie[] {
    return this.getAllZombies().filter(z => z.state === 'alive');
  }

  getAliveCount(): number {
    return this.getAliveZombies().length;
  }

  getTotalSpawned(): number {
    return this.zombies.size;
  }

  // ==========================================================================
  // Round Management
  // ==========================================================================

  startRound(roundNumber: number): void {
    const zombieCount = getZombieCountForRound(roundNumber);
    this.spawnWave(zombieCount);
  }

  clearAllZombies(): void {
    // Cancel all pending spawn timeouts
    this.spawnTimeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    this.spawnTimeoutIds = [];
    
    // Remove all zombie meshes and collision helpers
    const zombieIds = Array.from(this.zombies.keys());
    zombieIds.forEach(id => this.removeZombie(id));
    
    // Clear particles
    this.clearParticles();
  }

  // ==========================================================================
  // Cleanup
  // ==========================================================================

  destroy(): void {
    this.clearAllZombies();
    this.scene = null;
  }

  // ==========================================================================
  // Debug Data
  // ==========================================================================

  getDebugData(playerPosition: THREE.Vector3): {
    aliveCount: number;
    deadCount: number;
    stuckCount: number;
    chasingCount: number;
    attackingCount: number;
    currentRound: number;
    expectedZombiesThisRound: number;
    killsThisRound: number;
    zombies: Array<{
      id: string;
      health: number;
      maxHealth: number;
      position: { x: number; y: number; z: number };
      distanceToPlayer: number;
      state: 'alive' | 'dying' | 'dead';
      isStuck: boolean;
    }>;
  } {
    const roundManager = getRoundManager();
    
    // Defensive guard - return safe defaults if round manager not available
    if (!roundManager) {
      return {
        aliveCount: 0,
        deadCount: 0,
        stuckCount: 0,
        chasingCount: 0,
        attackingCount: 0,
        currentRound: 0,
        expectedZombiesThisRound: 0,
        killsThisRound: 0,
        zombies: [],
      };
    }
    
    const roundDebug = roundManager.getDebugState();
    
    let aliveCount = 0;
    let deadCount = 0;
    let stuckCount = 0;
    let chasingCount = 0;
    let attackingCount = 0;
    const zombiesList: Array<{
      id: string;
      health: number;
      maxHealth: number;
      position: { x: number; y: number; z: number };
      distanceToPlayer: number;
      state: 'alive' | 'dying' | 'dead';
      isStuck: boolean;
    }> = [];

    this.zombies.forEach(zombie => {
      if (zombie.state === 'alive') {
        aliveCount++;
        
        // Determine if zombie is stuck
        const isStuck = (zombie.stuckTimer && zombie.stuckTimer > 0.5) || false;
        if (isStuck) stuckCount++;
        
        // Determine behavior state based on distance
        const distToPlayer = zombie.position.distanceTo(playerPosition);
        if (distToPlayer < ZOMBIE_ATTACK_RANGE) {
          attackingCount++;
        } else {
          chasingCount++;
        }
      } else {
        deadCount++;
      }

      const distance = zombie.position.distanceTo(playerPosition);
      zombiesList.push({
        id: zombie.id,
        health: zombie.health,
        maxHealth: zombie.maxHealth,
        position: { x: zombie.position.x, y: zombie.position.y, z: zombie.position.z },
        distanceToPlayer: distance,
        state: zombie.state,
        isStuck: (zombie.stuckTimer && zombie.stuckTimer > 0.5) || false,
      });
    });

    return {
      aliveCount,
      deadCount,
      stuckCount,
      chasingCount,
      attackingCount,
      currentRound: roundDebug.round,
      expectedZombiesThisRound: roundDebug.expectedZombies,
      killsThisRound: roundDebug.killsThisRound,
      zombies: zombiesList,
    };
  }
}

// ============================================================================
// Global Instance
// ============================================================================

let globalZombieManager: ZombieManager | null = null;

export function getZombieManager(scene?: THREE.Scene): ZombieManager {
  if (!globalZombieManager) {
    globalZombieManager = new ZombieManager(scene);
  } else if (scene) {
    globalZombieManager.setScene(scene);
  }
  return globalZombieManager;
}

export function resetZombieManager(scene?: THREE.Scene, config?: Partial<ZombieConfig>): ZombieManager {
  if (globalZombieManager) {
    globalZombieManager.destroy();
  }
  globalZombieManager = new ZombieManager(scene, config);
  return globalZombieManager;
}
