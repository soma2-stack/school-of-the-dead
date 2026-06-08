/**
 * School of the Dead - Power-Up System
 * Handles power-up drops and pickups (Max Ammo, etc.)
 */

import * as THREE from 'three';
import { getWeaponManager } from './weapons';

// ============================================================================
// Configuration
// ============================================================================

export const POWER_UP_DROP_CHANCE = 0.2; // 20% chance to drop on zombie death
export const POWER_UP_DESPAWN_TIME = 20; // seconds before despawn
export const POWER_UP_COLLECT_DISTANCE = 2; // units for player collection

// ============================================================================
// Power-Up Types
// ============================================================================

export enum PowerUpType {
  MAX_AMMO = 'max_ammo',
  INSTA_KILL = 'insta_kill',
}

// ============================================================================
// Types
// ============================================================================

export interface PowerUpPickup {
  id: string;
  type: PowerUpType;
  group: THREE.Group;
  mesh: THREE.Mesh;
  textSprite: THREE.Sprite;
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
  
  // Insta-Kill state
  private instaKillActive: boolean;
  private instaKillEndTime: number;

  constructor(scene?: THREE.Scene) {
    this.scene = scene || null;
    this.pickups = new Map();
    this.pickupIdCounter = 0;
    this.instaKillActive = false;
    this.instaKillEndTime = 0;
  }

  setScene(scene: THREE.Scene): void {
    this.scene = scene;
  }

  // ==========================================================================
  // Power-Up Drop
  // ==========================================================================

  maybeDropPowerUp(position: THREE.Vector3): void {
    if (!this.scene) return;

    // Roll for drop chance
    const roll = Math.random();
    if (roll > POWER_UP_DROP_CHANCE) {
      if (window.DEBUG_VERBOSE) {
        console.log(`[POWERUP] Drop rolled ${roll.toFixed(2)}, no drop (need <= ${POWER_UP_DROP_CHANCE})`);
      }
      return;
    }

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Power-up drop triggered! Position:`, position.clone());
    }

    // Randomly choose between Max Ammo and Insta-Kill (50/50)
    const isMaxAmmo = Math.random() < 0.5;
    
    if (isMaxAmmo) {
      this.spawnMaxAmmoPickup(position.clone());
    } else {
      this.spawnInstaKillPickup(position.clone());
    }
  }

  private spawnMaxAmmoPickup(position: THREE.Vector3): void {
    if (!this.scene) return;

    const id = `powerup_${Date.now()}_${this.pickupIdCounter++}`;

    // Create a group to hold all pickup elements
    const group = new THREE.Group();
    group.position.copy(position);
    group.position.y = position.y + 1.5; // Chest height

    // Create glowing green cube for max ammo
    const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      emissive: 0x00ff00,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.9,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    group.add(mesh);

    // Add point light for glow effect
    const light = new THREE.PointLight(0x00ff00, 1, 3);
    light.position.set(0, 0.3, 0);
    group.add(light);

    // Create text sprite
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#00ff00';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('MAX AMMO', canvas.width / 2, canvas.height / 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const textSprite = new THREE.Sprite(spriteMaterial);
    textSprite.position.set(0, 1, 0);
    textSprite.scale.set(2, 0.5, 1);
    group.add(textSprite);

    this.scene.add(group);

    const pickup: PowerUpPickup = {
      id,
      type: PowerUpType.MAX_AMMO,
      group,
      mesh,
      textSprite,
      position: position.clone(),
      spawnTime: Date.now(),
      despawnTimeoutId: null,
      collected: false,
    };

    this.pickups.set(id, pickup);

    // Set despawn timeout
    pickup.despawnTimeoutId = setTimeout(() => {
      this.removePickup(id);
    }, POWER_UP_DESPAWN_TIME * 1000);

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Max ammo pickup spawned: ${id}`);
    }
  }

  private spawnInstaKillPickup(position: THREE.Vector3): void {
    if (!this.scene) return;

    const id = `powerup_${Date.now()}_${this.pickupIdCounter++}`;

    // Create a group to hold all pickup elements
    const group = new THREE.Group();
    group.position.copy(position);
    group.position.y = position.y + 1.5; // Chest height

    // Create glowing red cube for insta-kill
    const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff0000,
      emissive: 0xff0000,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.9,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, 0);
    group.add(mesh);

    // Add point light for glow effect
    const light = new THREE.PointLight(0xff0000, 1, 3);
    light.position.set(0, 0.3, 0);
    group.add(light);

    // Create text sprite
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = 'bold 32px Arial';
      ctx.fillStyle = '#ff0000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('INSTA KILL', canvas.width / 2, canvas.height / 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const textSprite = new THREE.Sprite(spriteMaterial);
    textSprite.position.set(0, 1, 0);
    textSprite.scale.set(2, 0.5, 1);
    group.add(textSprite);

    this.scene.add(group);

    const pickup: PowerUpPickup = {
      id,
      type: PowerUpType.INSTA_KILL,
      group,
      mesh,
      textSprite,
      position: position.clone(),
      spawnTime: Date.now(),
      despawnTimeoutId: null,
      collected: false,
    };

    this.pickups.set(id, pickup);

    // Set despawn timeout
    pickup.despawnTimeoutId = setTimeout(() => {
      this.removePickup(id);
    }, POWER_UP_DESPAWN_TIME * 1000);

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Insta-kill pickup spawned: ${id}`);
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
      pickup.group.rotation.y += deltaTime * 2;
      pickup.group.rotation.z = Math.sin(time * 3) * 0.1;
      pickup.group.position.y =
        pickup.position.y + 1.5 + Math.sin(time * 2) * 0.15;

      // Check collection distance (XZ only, ignore Y)
      const dx = pickup.group.position.x - playerPosition.x;
      const dz = pickup.group.position.z - playerPosition.z;
      const distance = Math.sqrt(dx * dx + dz * dz);

      if (window.DEBUG_VERBOSE) {
        console.log('[POWERUP TEST]', {
          pickupId: pickup.id,
          pickupPos: pickup.group.position.clone(),
          playerPos: playerPosition.clone(),
          distance,
        });
      }

      if (distance <= POWER_UP_COLLECT_DISTANCE) {
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
      console.log(`[POWERUP] ${pickup.type} collected: ${pickup.id}`);
    }

    if (pickup.type === PowerUpType.MAX_AMMO) {
      // Call weapon manager to refill ammo
      const weaponManager = getWeaponManager();
      weaponManager.refillAmmo();

      if (window.DEBUG_VERBOSE) {
        console.log(`[POWERUP] Ammo refilled via Max Ammo pickup`);
      }
    } else if (pickup.type === PowerUpType.INSTA_KILL) {
      // Apply insta-kill effect
      this.applyInstaKill();

      if (window.DEBUG_VERBOSE) {
        console.log(`[POWERUP] Insta-kill activated for 30 seconds`);
      }
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

    // Remove group from scene
    if (this.scene && pickup.group) {
      this.scene.remove(pickup.group);
      
      // Dispose mesh geometry and material
      pickup.mesh.geometry.dispose();
      if (Array.isArray(pickup.mesh.material)) {
        pickup.mesh.material.forEach(m => m.dispose());
      } else {
        pickup.mesh.material.dispose();
      }
      
      // Dispose text sprite texture and material
      pickup.textSprite.material.map?.dispose();
      pickup.textSprite.material.dispose();
    }

    this.pickups.delete(id);

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Pickup removed: ${id}`);
    }
  }

  // ==========================================================================
  // Insta-Kill Effect
  // ==========================================================================

  applyInstaKill(): void {
    this.instaKillActive = true;
    this.instaKillEndTime = Date.now() + 30000; // 30 seconds from now

    if (window.DEBUG_VERBOSE) {
      console.log(`[POWERUP] Insta-kill activated until ${new Date(this.instaKillEndTime).toLocaleTimeString()}`);
    }
  }

  isInstaKillActive(): boolean {
    const now = Date.now();
    
    // Check if insta-kill is still active
    if (this.instaKillActive && now >= this.instaKillEndTime) {
      // Time expired, deactivate
      this.instaKillActive = false;
      if (window.DEBUG_VERBOSE) {
        console.log('[POWERUP] Insta-kill expired');
      }
    }
    
    return this.instaKillActive;
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
    this.instaKillActive = false;
    this.instaKillEndTime = 0;
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
