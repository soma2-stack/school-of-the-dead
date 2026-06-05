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
export const ZOMBIE_SEPARATION_RADIUS = 1.5;
export const ZOMBIE_COLLISION_DISTANCE = 1.0;
export const ZOMBIE_STUCK_THRESHOLD = 2.0; // seconds
export const ZOMBIE_STUCK_RECOVERY_DISTANCE = 0.5;
export const ZOMBIE_COLLISION_RADIUS = 1.2; // Radius for collision checks
export const ZOMBIE_RAYCAST_DISTANCE = 2.0; // How far ahead to raycast
export const ZOMBIE_SLIDE_FACTOR = 0.6; // How much to slide along walls
export const ZOMBIE_MAX_CLIMB_HEIGHT = 0.3; // Maximum step-up height allowed
export const ZOMBIE_GROUND_Y = 0; // Ground level Y position

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
  radius: 1.2,
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

    const zombie: Zombie = {
      id,
      state: 'alive',
      health: this.config.health,
      maxHealth: this.config.health,
      position: spawnPos.clone(),
      config: { ...this.config },
      spawnTime: Date.now(),
      lastDamageTime: 0,
    };

    this.zombies.set(id, zombie);

    // Create visual representation if scene is available
    if (this.scene) {
      this.createZombieMesh(zombie);
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
    mesh.position.copy(zombie.position);
    mesh.position.y += zombie.config.height / 2; // Position on ground
    
    // Add simple eyes to indicate front direction
    const eyeGeometry = new THREE.SphereGeometry(0.2, 4, 4);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    
    leftEye.position.set(-0.4, zombie.config.height * 0.7, zombie.config.radius);
    rightEye.position.set(0.4, zombie.config.height * 0.7, zombie.config.radius);
    
    mesh.add(leftEye);
    mesh.add(rightEye);

    this.scene.add(mesh);
    zombie.mesh = mesh;

    // Create collision helper for debug visualization
    this.createCollisionHelper(zombie);
  }

  private createCollisionHelper(zombie: Zombie): void {
    if (!this.scene) return;

    // Create a wireframe sphere to visualize collision bounds
    const geometry = new THREE.SphereGeometry(ZOMBIE_COLLISION_RADIUS, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });

    const helper = new THREE.Mesh(geometry, material);
    helper.position.copy(zombie.position);
    helper.position.y += zombie.config.height / 2;
    
    this.scene.add(helper);
    zombie.collisionHelper = helper;
  }

  private removeCollisionHelper(zombie: Zombie): void {
    if (!zombie.collisionHelper || !this.scene) return;

    this.scene.remove(zombie.collisionHelper);
    zombie.collisionHelper.geometry.dispose();
    zombie.collisionHelper.material.dispose();
    zombie.collisionHelper = undefined;
  }

  private updateCollisionHelper(zombie: Zombie): void {
    if (!zombie.collisionHelper || !this.scene) return;

    zombie.collisionHelper.position.copy(zombie.position);
    zombie.collisionHelper.position.y += zombie.config.height / 2;
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
    const direction = new THREE.Vector3();
    const repulsion = new THREE.Vector3();
    const moveStep = new THREE.Vector3();
    const wallNormal = new THREE.Vector3();
    const rayOrigin = new THREE.Vector3();
    const slideDirection = new THREE.Vector3();
    const newPosition = new THREE.Vector3();
    
    const raycaster = new THREE.Raycaster();

    this.zombies.forEach((zombie, id) => {
      if (zombie.state !== 'alive') return;

      // Initialize tracking fields if needed
      if (!zombie.stuckTimer) zombie.stuckTimer = 0;
      if (!zombie.lastPosition) zombie.lastPosition = new THREE.Vector3().copy(zombie.position);

      // --- STUCK DETECTION ---
      const distanceMoved = zombie.position.distanceTo(zombie.lastPosition);
      const isMoving = distanceMoved > 0.05;

      if (!isMoving && zombie.state === 'alive') {
        zombie.stuckTimer += deltaTime;
        if (zombie.stuckTimer > ZOMBIE_STUCK_THRESHOLD) {
          logger.zombies.warn(`[ZOMBIE STUCK] Zombie ${zombie.id} detected stuck. Triggering recovery.`);
          
          // Recovery: Slightly lift and reposition to avoid geometry trap
          zombie.position.y += ZOMBIE_STUCK_RECOVERY_DISTANCE;
          zombie.position.x += (Math.random() - 0.5) * 2;
          zombie.position.z += (Math.random() - 0.5) * 2;
          zombie.stuckTimer = 0;
          logger.zombies.info(`[PATH DEBUG] Recovery Triggered for Zombie ${zombie.id}`);
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
        
        // 1. Base Direction: Towards Player
        direction.subVectors(playerPosition, zombie.position).normalize();
        direction.y = 0;

        // 2. Zombie Separation (Avoid Stacking)
        repulsion.set(0, 0, 0);
        let neighborCount = 0;
        
        this.zombies.forEach((other, otherId) => {
          if (otherId === id || other.state !== 'alive') return;
          
          const dist = zombie.position.distanceTo(other.position);
          if (dist < ZOMBIE_SEPARATION_RADIUS && dist > 0.01) {
            const push = new THREE.Vector3().subVectors(zombie.position, other.position).normalize();
            push.multiplyScalar((ZOMBIE_SEPARATION_RADIUS - dist) / ZOMBIE_SEPARATION_RADIUS);
            repulsion.add(push);
            neighborCount++;
          }
        });

        if (neighborCount > 0) {
          repulsion.divideScalar(neighborCount).normalize();
          // Blend separation with chase direction
          direction.add(repulsion.multiplyScalar(0.8)).normalize();
        }

        // Calculate movement step
        moveStep.copy(direction).multiplyScalar(zombie.config.speed * deltaTime);
        
        // 3. Wall Collision Detection and Resolution
        if (mapObjects.length > 0) {
          const collided = this.checkWallCollision(
            zombie,
            moveStep,
            mapObjects,
            raycaster,
            rayOrigin,
            wallNormal,
            slideDirection,
            newPosition
          );
          
          if (collided) {
            // Apply the collision-resolved position
            zombie.position.copy(newPosition);
          } else {
            // No collision, apply normal movement
            zombie.position.add(moveStep);
          }
        } else {
          // No map objects, just move normally
          zombie.position.add(moveStep);
        }

        // Update mesh
        if (zombie.mesh) {
          zombie.mesh.position.copy(zombie.position);
          zombie.mesh.position.y += zombie.config.height / 2;
          zombie.mesh.lookAt(playerPosition.x, zombie.mesh.position.y, playerPosition.z);
        }
        
        // Update collision helper visualization
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
   * Check for wall collisions and resolve them by sliding along walls.
   * Returns true if collision occurred, false otherwise.
   * If collision occurs, newPosition is set to the resolved position.
   * 
   * IMPORTANT: Collision resolution only happens on XZ plane.
   * Y position is never modified by collision response to prevent
   * zombies from climbing over walls.
   */
  private checkWallCollision(
    zombie: Zombie,
    moveStep: THREE.Vector3,
    mapObjects: THREE.Object3D[],
    raycaster: THREE.Raycaster,
    rayOrigin: THREE.Vector3,
    wallNormal: THREE.Vector3,
    slideDirection: THREE.Vector3,
    newPosition: THREE.Vector3
  ): boolean {
    let hasCollision = false;
    
    // Store Y position before collision - this must never change
    const yPositionBefore = zombie.position.y;
    
    // Calculate proposed new position (XZ only for movement, Y stays same)
    newPosition.copy(zombie.position);
    newPosition.x += moveStep.x;
    newPosition.z += moveStep.z;
    // IMPORTANT: Do NOT add moveStep.y - zombies stay grounded
    
    // Raycast in the direction of movement from multiple points around the zombie
    // to detect walls more reliably
    const rayDirections = [
      moveStep.clone().normalize(), // Forward
    ];
    
    // Add side rays for better coverage
    const sideOffset = new THREE.Vector3(-moveStep.z, 0, moveStep.x).normalize();
    rayDirections.push(
      sideOffset.clone().multiplyScalar(ZOMBIE_SLIDE_FACTOR).add(moveStep.clone().normalize()).normalize()
    );
    rayDirections.push(
      sideOffset.clone().multiplyScalar(-ZOMBIE_SLIDE_FACTOR).add(moveStep.clone().normalize()).normalize()
    );
    
    for (const rayDir of rayDirections) {
      // Raycast from zombie center height, but keep ray horizontal (no Y component)
      rayOrigin.copy(zombie.position);
      rayOrigin.y += 1; // Raycast from center height
      
      // Ensure ray direction is purely horizontal (XZ plane only)
      const horizontalRayDir = rayDir.clone();
      horizontalRayDir.y = 0;
      if (horizontalRayDir.lengthSq() < 0.001) {
        continue; // Skip if no horizontal movement
      }
      horizontalRayDir.normalize();
      
      raycaster.set(rayOrigin, horizontalRayDir);
      raycaster.far = moveStep.length() + ZOMBIE_COLLISION_RADIUS;
      
      const intersects = raycaster.intersectObjects(mapObjects, true);
      
      if (intersects.length > 0) {
        const hit = intersects[0];
        const distanceToHit = hit.distance;
        
        // Log collision attempt details
        logger.zombies.debug(`[WALL COLLISION] Zombie ${zombie.id}:`);
        logger.zombies.debug(`  Position: (${zombie.position.x.toFixed(2)}, ${zombie.position.y.toFixed(2)}, ${zombie.position.z.toFixed(2)})`);
        logger.zombies.debug(`  Attempted Position: (${newPosition.x.toFixed(2)}, ${newPosition.y.toFixed(2)}, ${newPosition.z.toFixed(2)})`);
        logger.zombies.debug(`  Wall Hit at distance: ${distanceToHit.toFixed(2)}`);
        
        // Check if we would hit the wall during this movement
        if (distanceToHit < moveStep.length()) {
          hasCollision = true;
          
          // Get wall normal in world space
          wallNormal.copy(hit.face?.normal || new THREE.Vector3(0, 1, 0));
          if (hit.object.matrixWorld) {
            wallNormal.transformDirection(hit.object.matrixWorld).normalize();
          }
          
          // CRITICAL: Zero out Y component of wall normal - we only care about XZ collision
          wallNormal.y = 0;
          if (wallNormal.lengthSq() > 0.001) {
            wallNormal.normalize();
          } else {
            // If normal becomes zero after removing Y, use a default horizontal normal
            wallNormal.set(horizontalRayDir.z, 0, -horizontalRayDir.x);
          }
          
          // Calculate penetration depth into the wall
          const penetrationDepth = (ZOMBIE_COLLISION_RADIUS - distanceToHit);
          logger.zombies.debug(`  Penetration Depth: ${penetrationDepth.toFixed(2)}`);
          logger.zombies.debug(`  Y Position Before: ${yPositionBefore.toFixed(2)}`);
          
          // Calculate slide direction: project movement onto the wall plane (XZ only)
          // First, get the horizontal movement vector
          const horizontalMove = new THREE.Vector3(moveStep.x, 0, moveStep.z);
          const dot = horizontalMove.dot(wallNormal);
          
          // Only slide if moving towards the wall
          if (dot < 0) {
            // Remove the component of movement that goes into the wall
            slideDirection.copy(horizontalMove).sub(wallNormal.clone().multiplyScalar(dot));
            
            // Normalize and scale to original horizontal speed
            if (slideDirection.lengthSq() > 0.001) {
              slideDirection.normalize().multiplyScalar(horizontalMove.length());
            } else {
              // No valid slide direction - wall is perpendicular to movement
              slideDirection.set(0, 0, 0);
            }
            
            // Move the zombie to just before the wall, then slide
            const safeDistance = Math.max(0, distanceToHit - ZOMBIE_COLLISION_RADIUS * 0.5);
            if (safeDistance > 0) {
              newPosition.copy(zombie.position);
              newPosition.add(horizontalRayDir.clone().multiplyScalar(safeDistance));
              newPosition.x += slideDirection.x;
              newPosition.z += slideDirection.z;
            } else {
              // Very close to wall, just slide along it (or stop if no slide possible)
              newPosition.copy(zombie.position);
              newPosition.x += slideDirection.x;
              newPosition.z += slideDirection.z;
            }
            
            logger.zombies.debug(`  [COLLISION] Zombie ${zombie.id} hit wall, sliding along normal`);
          } else {
            // Moving away from wall or parallel, just stop before it
            newPosition.copy(zombie.position);
            newPosition.add(horizontalRayDir.clone().multiplyScalar(Math.max(0, distanceToHit - ZOMBIE_COLLISION_RADIUS * 0.5)));
          }
          
          // CRITICAL: Ensure Y position never changes - zombies must remain grounded
          newPosition.y = yPositionBefore;
          logger.zombies.debug(`  Y Position After: ${newPosition.y.toFixed(2)}`);
          
          // Check if zombie is attempting vertical movement (should be rejected)
          if (Math.abs(newPosition.y - yPositionBefore) > 0.001) {
            logger.zombies.warn(`[REJECTED] Zombie ${zombie.id} attempted vertical movement from ${yPositionBefore.toFixed(2)} to ${newPosition.y.toFixed(2)}`);
            newPosition.y = yPositionBefore;
          }
          
          break; // Handle first collision only
        }
      }
    }
    
    return hasCollision;
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
