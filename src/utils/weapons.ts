/**
 * School of the Dead - Minimal Weapon System
 * Starter Pistol only - no extra features
 */

import * as THREE from 'three';
import { getPointsManager } from './points';

// ============================================================================
// Configuration
// ============================================================================

export interface WeaponConfig {
  name: string;
  damage: number;
  fireRate: number; // seconds between shots
  magazine: number; // -1 for infinite
  ammo: number; // -1 for infinite
}

export const STARTER_PISTOL_CONFIG: WeaponConfig = {
  name: 'School Pistol',
  damage: 100,
  fireRate: 0.25,
  magazine: -1,
  ammo: -1,
};

// ============================================================================
// Types
// ============================================================================

export interface WeaponState {
  config: WeaponConfig;
  lastFireTime: number;
  isFiring: boolean;
}

export type FireResult = {
  success: boolean;
  hitZombieId?: string;
  damageDealt?: number;
  reason?: string;
};

// ============================================================================
// Weapon Manager Class
// ============================================================================

export class WeaponManager {
  private weapon: WeaponState;
  private scene: THREE.Scene | null;

  constructor(scene?: THREE.Scene, config: Partial<WeaponConfig> = {}) {
    this.weapon = {
      config: { ...STARTER_PISTOL_CONFIG, ...config },
      lastFireTime: 0,
      isFiring: false,
    };
    this.scene = scene || null;
  }

  setScene(scene: THREE.Scene): void {
    this.scene = scene;
  }

  // ==========================================================================
  // Firing
  // ==========================================================================

  canFire(): boolean {
    const now = Date.now();
    const timeSinceLastFire = (now - this.weapon.lastFireTime) / 1000;

    if (timeSinceLastFire < this.weapon.config.fireRate) {
      return false;
    }

    // Check ammo (infinite ammo check)
    if (this.weapon.config.ammo !== -1 && this.weapon.config.ammo <= 0) {
      return false;
    }

    if (this.weapon.config.magazine !== -1 && this.weapon.config.magazine <= 0) {
      return false;
    }

    return true;
  }

  fire(
    raycaster: THREE.Raycaster,
    zombieManager: any,
    playerId: string
  ): FireResult {
    console.log('[WEAPON] Fired');

    if (!this.canFire()) {
      return { success: false, reason: 'cannot_fire' };
    }

    this.weapon.lastFireTime = Date.now();
    this.weapon.isFiring = true;

    // Decrease ammo if not infinite
    if (this.weapon.config.ammo !== -1) {
      this.weapon.config.ammo -= 1;
    }
    if (this.weapon.config.magazine !== -1) {
      this.weapon.config.magazine -= 1;
    }

    // Raycast for hits
    const aliveZombies = zombieManager.getAliveZombies();
    const zombieMeshes = aliveZombies
      .map((z: any) => z.mesh)
      .filter((mesh: THREE.Mesh): mesh is THREE.Mesh => mesh !== undefined);

    const intersects = raycaster.intersectObjects(zombieMeshes);

    if (intersects.length > 0) {
      const hitObject = intersects[0].object;
      const hitZombie = aliveZombies.find(
        (z: any) => z.mesh === hitObject || z.mesh === hitObject.parent
      );

      if (hitZombie) {
        console.log('[WEAPON] Hit zombie', hitZombie.id);

        // Store previous health to detect kill
        const previousHealth = hitZombie.health;

        // Deal damage
        const damage = this.weapon.config.damage;
        zombieManager.damageZombie(hitZombie.id, damage, playerId);

        // Award hit points
        const pointsManager = getPointsManager();
        pointsManager.addBulletHit(playerId);
        console.log('[WEAPON] Awarded 10 points');

        // Check if kill happened (health was > 0 before damage, now <= 0)
        if (previousHealth > 0 && previousHealth <= damage) {
          console.log('[WEAPON] Zombie killed', hitZombie.id);
          console.log('[WEAPON] Awarded 100 kill bonus');
        }

        return {
          success: true,
          hitZombieId: hitZombie.id,
          damageDealt: damage,
        };
      }
    }

    setTimeout(() => {
      this.weapon.isFiring = false;
    }, 100);

    return { success: false };
  }

  // ==========================================================================
  // Getters
  // ==========================================================================

  getWeaponState(): WeaponState {
    return { ...this.weapon };
  }

  getConfig(): WeaponConfig {
    return { ...this.weapon.config };
  }

  getDamage(): number {
    return this.weapon.config.damage;
  }

  getAmmo(): number {
    return this.weapon.config.ammo;
  }

  getMagazine(): number {
    return this.weapon.config.magazine;
  }

  getName(): string {
    return this.weapon.config.name;
  }

  // ==========================================================================
  // Cleanup
  // ==========================================================================

  destroy(): void {
    this.scene = null;
  }
}

// ============================================================================
// Global Instance
// ============================================================================

let globalWeaponManager: WeaponManager | null = null;

export function getWeaponManager(scene?: THREE.Scene): WeaponManager {
  if (!globalWeaponManager) {
    globalWeaponManager = new WeaponManager(scene);
  } else if (scene) {
    globalWeaponManager.setScene(scene);
  }
  return globalWeaponManager;
}

export function resetWeaponManager(
  scene?: THREE.Scene,
  config?: Partial<WeaponConfig>
): WeaponManager {
  if (globalWeaponManager) {
    globalWeaponManager.destroy();
  }
  globalWeaponManager = new WeaponManager(scene, config);
  return globalWeaponManager;
}
