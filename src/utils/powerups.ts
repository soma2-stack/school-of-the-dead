/**
 * School of the Dead - Power-Up System
 * Handles power-up drops and pickups (Max Ammo, etc.)
 */

import * as THREE from 'three';
import { getWeaponManager } from './weapons';

// ============================================================================
// Configuration
// ============================================================================

export const MAX_AMMO_DROP_CHANCE = 0.2; // 20% chance to drop on zombie death
export const MAX_AMMO_DESPAWN_TIME = 20; // seconds before despawn
export const MAX_AMMO_COLLECT_DISTANCE = 2; // units for player collection

// ============================================================================
// Types
// ============================================================================

export interface PowerUpPickup {
  id: string;
  type: 'max_ammo';
  mesh: THREE.Mesh;
  position: THREE.Vector3;
  spawnTime: number;
  despawnTimeoutId: ReturnType<typeof setTimeout> | null;
  collected: boolean;
}

// ============================================================================
// PowerUp Manager Class
// ============================================================================

export class PowerUpManager {
  private scene: THREE.Scene | null;
  private pickups: Map<string, PowerUpPickup>;
  private pickupIdCounter: number;

  constructor(scene?: THREE.Scene) {
    this.scene = scene || null;
    this.pickups = new Map();
    this.pickupIdCounter = 0;
  }

  setScene(scene: THREE.Scene): void {
    this.scene = scene;
  }

  // ==========================================================================
  // Max Ammo Drop
  // ==========================================================================

  maybeDropMaxAmmo(position: THREE.Vector3): void {
    if (!this.scene) return;

    // Roll for drop chance
    const roll = Math.random();
    if (roll > MAX_AMMO_DROP_CHANCE) {
      if (window.DEBUG_VERBOSE) {
        console.log(`[POWERUP] Max ammo drop rolled ${roll.toFixed(2)}, no drop (need <= ${MAX_AMMO_DROP_CHANCE})`);
      }
      return;
    }

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Max ammo drop triggered! Position:`, position.clone());
    }

    this.spawnMaxAmmoPickup(position.clone());
  }

  private spawnMaxAmmoPickup(position: THREE.Vector3): void {
    if (!this.scene) return;

    const id = `powerup_${Date.now()}_${this.pickupIdCounter++}`;

    // Create glowing green sphere/cube for max ammo
    const geometry = new THREE.SphereGeometry(0.4, 16, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
      opacity: 0.9,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    mesh.position.y = position.y + 1.5; // Chest height

    this.scene.add(mesh);

    const pickup: PowerUpPickup = {
      id,
      type: 'max_ammo',
      mesh,
      position: position.clone(),
      spawnTime: Date.now(),
      despawnTimeoutId: null,
      collected: false,
    };

    this.pickups.set(id, pickup);

    // Set despawn timeout
    pickup.despawnTimeoutId = setTimeout(() => {
      this.removePickup(id);
    }, MAX_AMMO_DESPAWN_TIME * 1000);

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Max ammo pickup spawned: ${id}`);
    }
  }

  // ==========================================================================
  // Update Loop
  // ==========================================================================

  update(deltaTime: number, playerPosition: THREE.Vector3): void {
    if (!this.scene || this.pickups.size === 0) return;

    const toRemove: string[] = [];

    for (const [id, pickup] of this.pickups.entries()) {
      if (pickup.collected) {
        continue;
      }

      // Rotate and bob animation
      const time = Date.now() / 1000;
      pickup.mesh.rotation.y += deltaTime * 2;
      pickup.mesh.rotation.z = Math.sin(time * 3) * 0.1;
      pickup.mesh.position.y =
        pickup.position.y + 1.5 + Math.sin(time * 2) * 0.15;

      // Check collection distance (XZ only, ignore Y)
      const dx = pickup.mesh.position.x - playerPosition.x;
      const dz = pickup.mesh.position.z - playerPosition.z;
      const distance = Math.sqrt(dx * dx + dz * dz);

      if (window.DEBUG_VERBOSE) {
        console.log('[POWERUP TEST]', {
          pickupId: pickup.id,
          pickupPos: pickup.mesh.position.clone(),
          playerPos: playerPosition.clone(),
          distance,
        });
      }

      if (distance <= MAX_AMMO_COLLECT_DISTANCE) {
        this.collectPickup(pickup);
        toRemove.push(id);
      }
    }

    // Remove collected pickups
    toRemove.forEach(id => {
      const pickup = this.pickups.get(id);
      if (pickup) {
        this.removePickup(id);
      }
    });
  }

  // ==========================================================================
  // Collection
  // ==========================================================================

  private collectPickup(pickup: PowerUpPickup): void {
    if (pickup.collected) return;

    pickup.collected = true;

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Max ammo collected: ${pickup.id}`);
    }

    // Call weapon manager to refill ammo
    const weaponManager = getWeaponManager();
    weaponManager.refillAmmo();

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Ammo refilled via Max Ammo pickup`);
    }
  }

  // ==========================================================================
  // Removal
  // ==========================================================================

  private removePickup(id: string): void {
    const pickup = this.pickups.get(id);
    if (!pickup) return;

    // Cancel despawn timeout if exists
    if (pickup.despawnTimeoutId) {
      clearTimeout(pickup.despawnTimeoutId);
      pickup.despawnTimeoutId = null;
    }

    // Remove mesh from scene
    if (this.scene && pickup.mesh) {
      this.scene.remove(pickup.mesh);
      pickup.mesh.geometry.dispose();
      if (Array.isArray(pickup.mesh.material)) {
        pickup.mesh.material.forEach(m => m.dispose());
      } else {
        pickup.mesh.material.dispose();
      }
    }

    this.pickups.delete(id);

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Pickup removed: ${id}`);
    }
  }

  // ==========================================================================
  // Cleanup
  // ==========================================================================

  destroy(): void {
    for (const [id, pickup] of this.pickups.entries()) {
      this.removePickup(id);
    }
    this.pickups.clear();
    this.scene = null;
  }
}

// ============================================================================
// Global Instance
// ============================================================================

let globalPowerUpManager: PowerUpManager | null = null;

export function getPowerUpManager(scene?: THREE.Scene): PowerUpManager {
  if (!globalPowerUpManager) {
    globalPowerUpManager = new PowerUpManager(scene);
  } else if (scene) {
    globalPowerUpManager.setScene(scene);
  }
  return globalPowerUpManager;
}

export function resetPowerUpManager(scene?: THREE.Scene): PowerUpManager {
  if (globalPowerUpManager) {
    globalPowerUpManager.destroy();
  }
  globalPowerUpManager = new PowerUpManager(scene);
  return globalPowerUpManager;
}
