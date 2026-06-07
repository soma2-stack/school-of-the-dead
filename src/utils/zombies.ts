/**
 * School of the Dead - Simple Zombie System
 * Basic zombie spawning, AI, and combat
 */

import * as THREE from 'three';
import { getPointsManager } from './points';
import { getRoundManager } from './rounds';
import { logger } from './logger';

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

// Debug configuration
export let SHOW_WALL_COLLIDERS = false;
export function toggleWallColliderDebug(): boolean {
  SHOW_WALL_COLLIDERS = !SHOW_WALL_COLLIDERS;
  return SHOW_WALL_COLLIDERS;
}
export function setWallColliderDebug(enabled: boolean): void {
  SHOW_WALL_COLLIDERS = enabled;
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
  // Debug visualization
  collisionHelper?: THREE.Mesh;
}

export interface ZombieSpawnPoint {
  position: THREE.Vector3;
  roomId?: string;
}

export type ZombieEventCallback = (zombie: Zombie) => void;
export type ZombieDamageCallback = (zombie: Zombie, damage: number, playerId: string) => void;
export type ZombieKillCallback = (zombie: Zombie, playerId: string) => void;

// ============================================================================
// Zombie Manager Class
// ============================================================================

export class ZombieManager {
  private config: ZombieConfig;
  private zombies: Map<string, Zombie>;
  private spawnPoints: ZombieSpawnPoint[];
  private scene: THREE.Scene | null;
  
  // Event callbacks
  private onSpawnCallbacks: ZombieEventCallback[] = [];
  private onDeathCallbacks: ZombieKillCallback[] = [];
  private onDamageCallbacks: ZombieDamageCallback[] = [];
  private onPlayerDamageCallbacks: ((damage: number, zombie: Zombie) => void)[] = [];

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

  private notifyDeath(zombie: Zombie, playerId: string): void {
    this.onDeathCallbacks.forEach(cb => cb(zombie, playerId));
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
      setTimeout(() => {
        const zombie = this.spawnZombie();
        if (zombie) spawned.push(zombie);
      }, i * 200);
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

  private updateCollisionHelper(zombie: Zombie): void {
    if (!zombie.collisionHelper || !this.scene) return;

    zombie.collisionHelper.position.copy(zombie.position);
    zombie.collisionHelper.position.y += zombie.config.height / 2;
    
    // Update visibility based on debug toggle
    zombie.collisionHelper.visible = SHOW_WALL_COLLIDERS;
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
    const groundYVec = new THREE.Vector3();
    
    this.zombies.forEach((zombie, id) => {
      if (zombie.state !== 'alive') return;

      // Initialize tracking fields if needed
      if (!zombie.stuckTimer) zombie.stuckTimer = 0;
      if (!zombie.lastPosition) zombie.lastPosition = new THREE.Vector3().copy(zombie.position);

      // Store old position for stuck detection
      oldPos.copy(zombie.position);
      const oldY = zombie.position.y;

      // --- STUCK DETECTION ---
      const distanceMoved = zombie.position.distanceTo(zombie.lastPosition);
      const isMoving = distanceMoved > 0.05;

      if (!isMoving && zombie.state === 'alive') {
        zombie.stuckTimer += deltaTime;
        if (zombie.stuckTimer > ZOMBIE_STUCK_THRESHOLD) {
          logger.zombies.warn(`[ZOMBIE STUCK] Zombie ${zombie.id} detected stuck. Triggering recovery.`);
          
          // Recovery: Try small candidate offsets and only apply if collision-free
          const oldX = zombie.position.x;
          const oldZ = zombie.position.z;
          const recoveryCandidates = [
            new THREE.Vector3(oldX + 0.3, oldZ, oldY),
            new THREE.Vector3(oldX - 0.3, oldZ, oldY),
            new THREE.Vector3(oldX, oldZ + 0.3, oldY),
            new THREE.Vector3(oldX, oldZ - 0.3, oldY),
            new THREE.Vector3(oldX + 0.2, oldZ + 0.2, oldY),
            new THREE.Vector3(oldX - 0.2, oldZ - 0.2, oldY),
            new THREE.Vector3(oldX + 0.2, oldZ - 0.2, oldY),
            new THREE.Vector3(oldX - 0.2, oldZ + 0.2, oldY),
          ];
          
          let recoveryApplied = false;
          for (const candidate of recoveryCandidates) {
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
            logger.zombies.info(`[PATH DEBUG] Recovery applied for Zombie ${zombie.id}`);
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
        // Chase mode: move toward player
        
        // 1. Calculate desired chase movement (XZ plane ONLY)
        chaseMove.subVectors(playerPosition, zombie.position);
        chaseMove.y = 0; // CRITICAL: No vertical component
        if (chaseMove.lengthSq() > 0.001) {
          chaseMove.normalize().multiplyScalar(zombie.config.speed * deltaTime);
        } else {
          chaseMove.set(0, 0, 0);
        }

        // 2. Calculate zombie-to-zombie separation (XZ plane ONLY)
        separation.set(0, 0, 0);
        let neighborCount = 0;
        
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
        separation.y = 0; // CRITICAL: No vertical component

        // Combine chase and separation (both XZ only)
        const totalMove = new THREE.Vector3(
          chaseMove.x + separation.x,
          0,
          chaseMove.z + separation.z
        );

        // 3. Apply wall collision with swept collision using substeps
        // This prevents clipping through walls when movement distance is large
        if (mapObjects.length > 0) {
          const moveLength = Math.sqrt(totalMove.x * totalMove.x + totalMove.z * totalMove.z);
          const numSteps = Math.min(
            Math.ceil(moveLength / ZOMBIE_MAX_STEP_SIZE),
            ZOMBIE_MAX_SUBSTEPS
          );
          
          if (numSteps > 1) {
            // Substep the movement to prevent clipping
            const stepMove = totalMove.clone().divideScalar(numSteps);
            
            for (let step = 0; step < numSteps; step++) {
              // Try X movement for this substep
              attemptX.copy(zombie.position);
              attemptX.x += stepMove.x;
              attemptX.y = oldY; // Lock Y
                
              if (!this.collidesWithWalls2D(attemptX, ZOMBIE_COLLISION_RADIUS, mapObjects)) {
                zombie.position.x = attemptX.x;
              }

              // Try Z movement for this substep
              attemptZ.copy(zombie.position);
              attemptZ.z += stepMove.z;
              attemptZ.y = oldY; // Lock Y
                
              if (!this.collidesWithWalls2D(attemptZ, ZOMBIE_COLLISION_RADIUS, mapObjects)) {
                zombie.position.z = attemptZ.z;
              }
            }
          } else {
            // Single step movement (original behavior for small moves)
            // Try X movement first
            attemptX.copy(zombie.position);
            attemptX.x += totalMove.x;
            attemptX.y = oldY; // Lock Y
            
            if (!this.collidesWithWalls2D(attemptX, ZOMBIE_COLLISION_RADIUS, mapObjects)) {
              zombie.position.x = attemptX.x;
            }

            // Try Z movement from current position (after X was potentially applied)
            attemptZ.copy(zombie.position);
            attemptZ.z += totalMove.z;
            attemptZ.y = oldY; // Lock Y
            
            if (!this.collidesWithWalls2D(attemptZ, ZOMBIE_COLLISION_RADIUS, mapObjects)) {
              zombie.position.z = attemptZ.z;
            }
          }

          // Final collision check: if final position still collides, revert to old position
          // This handles corner cases where separate X/Z movement allows slipping around corners
          const finalPos = new THREE.Vector3(zombie.position.x, oldY, zombie.position.z);
          if (this.collidesWithWalls2D(finalPos, ZOMBIE_COLLISION_RADIUS, mapObjects)) {
            zombie.position.x = oldPos.x;
            zombie.position.z = oldPos.z;
          }

          // Clip debug warning (only when clipping actually happens)
          const clippedThroughWall = this.collidesWithWalls2D(finalPos, ZOMBIE_COLLISION_RADIUS, mapObjects) && 
                                     (Math.abs(zombie.position.x - oldPos.x) > 0.01 || Math.abs(zombie.position.z - oldPos.z) > 0.01);
          if (clippedThroughWall) {
            console.warn('[ZOMBIE CLIP DEBUG]', {
              zombieId: zombie.id,
              oldPosition: oldPos.clone(),
              attemptedPosition: finalPos.clone(),
              finalPosition: zombie.position.clone(),
              wallColliderType: 'wall/door/prop'
            });
          }
        } else {
          // No map objects, apply movement directly
          zombie.position.x += totalMove.x;
          zombie.position.z += totalMove.z;
        }

        // 4. Lock Y to ground height - CRITICAL: Never allow wall collision to change Y
        const groundY = this.getGroundYAtPosition(zombie.position.x, zombie.position.z, mapObjects);
        
        // Debug log for Y position (debug mode only)
        if (window.DEBUG_VERBOSE) {
          console.log('[ZOMBIE Y DEBUG]', {
            id: zombie.id,
            oldY: oldY.toFixed(3),
            computedGroundY: groundY.toFixed(3),
            newPositionY: zombie.position.y.toFixed(3)
          });
        }
        
        zombie.position.y = groundY;

        // Safety check: reject any vertical climbing
        if (Math.abs(zombie.position.y - oldY) > 0.2) {
          logger.zombies.warn(`[ZOMBIE COLLISION] rejected vertical climb for zombie ${zombie.id}: oldY=${oldY.toFixed(2)}, newY=${zombie.position.y.toFixed(2)}`);
          zombie.position.y = groundY;
        }

        // Update mesh - CRITICAL: sync visual mesh with logical position every frame
        if (zombie.mesh) {
          zombie.mesh.position.copy(zombie.position);
          zombie.mesh.position.y = groundY + zombie.config.height / 2;
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
        this.updateCollisionHelper(zombie);
      }

      // Check collision with player
      if (this.checkPlayerCollision(zombie, playerPosition)) {
        this.damagePlayer(zombie);
      }
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
    mapObjects: THREE.Object3D[]
  ): boolean {
    const testPos = new THREE.Vector3(position.x, 0, position.z);
    
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

  private checkPlayerCollision(zombie: Zombie, playerPosition: THREE.Vector3): boolean {
    const dx = zombie.position.x - playerPosition.x;
    const dz = zombie.position.z - playerPosition.z;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    return distance < (zombie.config.radius + 1.0); // Player radius approx 1.0
  }

  private damagePlayer(zombie: Zombie): void {
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

    zombie.health -= damage;
    zombie.lastDamageTime = Date.now();

    this.notifyDamage(zombie, damage, playerId);

    if (zombie.health <= 0) {
      this.killZombie(zombieId, playerId);
    }

    return true;
  }

  killZombie(zombieId: string, playerId: string): boolean {
    logger.zombies.info('ENTER killZombie for', zombieId);
    const zombie = this.zombies.get(zombieId);
    if (!zombie || zombie.state === 'dead') return false;

    zombie.state = 'dead';

    // Award points
    const pointsManager = getPointsManager();
    pointsManager.addZombieKill(playerId);

    // Notify round manager
    const roundManager = getRoundManager();
    logger.zombies.debug('Calling roundManager.registerZombieKill() from killZombie');
    roundManager.registerZombieKill();

    this.notifyDeath(zombie, playerId);

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
    const zombieIds = Array.from(this.zombies.keys());
    zombieIds.forEach(id => this.removeZombie(id));
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
