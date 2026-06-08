/**
 * School of the Dead - Minimal Weapon System
 * Starter Pistol with basic ammo/reload
 */

import * as THREE from 'three';
import { getPointsManager } from './points';
import { getPowerUpManager } from './powerups';

// ============================================================================
// Configuration
// ============================================================================

export interface WeaponConfig {
  name: string;
  damage: number;
  fireRate: number; // seconds between shots
  magazineSize: number;
  maxReserveAmmo: number;
  reloadTime: number; // seconds
}

export const STARTER_PISTOL_CONFIG: WeaponConfig = {
  name: 'School Pistol',
  damage: 35,
  fireRate: 0.25,
  magazineSize: 8,
  maxReserveAmmo: 64,
  reloadTime: 1.2,
};

// ============================================================================
// Types
// ============================================================================

export interface WeaponState {
  config: WeaponConfig;
  lastFireTime: number;
  isFiring: boolean;
  currentMagazine: number;
  reserveAmmo: number;
  isReloading: boolean;
  reloadTimeoutId: ReturnType<typeof setTimeout> | null;
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
    const fullConfig = { ...STARTER_PISTOL_CONFIG, ...config };
    this.weapon = {
      config: fullConfig,
      lastFireTime: 0,
      isFiring: false,
      currentMagazine: fullConfig.magazineSize,
      reserveAmmo: fullConfig.maxReserveAmmo,
      isReloading: false,
      reloadTimeoutId: null,
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
    // Cannot fire while reloading
    if (this.weapon.isReloading) {
      return false;
    }

    const now = Date.now();
    const timeSinceLastFire = (now - this.weapon.lastFireTime) / 1000;

    if (timeSinceLastFire < this.weapon.config.fireRate) {
      return false;
    }

    // Check magazine ammo
    if (this.weapon.currentMagazine <= 0) {
      return false;
    }

    return true;
  }

  fire(
    raycaster: THREE.Raycaster,
    zombieManager: any,
    playerId: string
  ): FireResult {
    if (window.DEBUG_VERBOSE) {
      console.log('[WEAPON] Fire input received');
    }

    if (!this.canFire()) {
      if (window.DEBUG_VERBOSE) {
        console.log('[WEAPON] canFire() returned false');
      }
      return { success: false, reason: 'cannot_fire' };
    }

    this.weapon.lastFireTime = Date.now();
    this.weapon.isFiring = true;

    // Decrease magazine ammo (uses 1 bullet even if it misses)
    this.weapon.currentMagazine -= 1;

    if (window.DEBUG_VERBOSE) {
      console.log(`[WEAPON] Fired! Magazine: ${this.weapon.currentMagazine}/${this.weapon.reserveAmmo}`);
    }

    // Raycast for hits
    const aliveZombies = zombieManager.getAliveZombies();
    
    const zombieMeshes = aliveZombies
      .map((z: any) => z.mesh)
      .filter((mesh: THREE.Mesh): mesh is THREE.Mesh => mesh !== undefined);
    

    const intersects = raycaster.intersectObjects(zombieMeshes, true);

    if (intersects.length > 0) {
      const hitObject = intersects[0].object;
      
      // Find the root mesh (in case we hit a child object like eyes)
      let rootMesh = hitObject;
      while (rootMesh.parent && !aliveZombies.some((z: any) => z.mesh === rootMesh)) {
        rootMesh = rootMesh.parent as THREE.Mesh;
      }

      const hitZombie = aliveZombies.find(
        (z: any) => z.mesh === rootMesh
      );

      if (hitZombie) {
        // Only award points and deal damage if zombie is alive
        if (hitZombie.state === 'alive') {
          // Award bullet hit points IMMEDIATELY before applying damage
          const pointsManager = getPointsManager();
          const hitResult = pointsManager.addBulletHit(playerId);

          if (window.DEBUG_VERBOSE) {
            console.log("[POINT TEST] bullet hit awarded", hitResult);
            console.log("[POINT TEST] points after hit", getPointsManager().getPoints(playerId));
          }

          // Deal damage AFTER awarding hit points
          let damage = this.weapon.config.damage;
          
          // Check for Insta-Kill power-up
          try {
            const powerUpManager = getPowerUpManager();
            if (powerUpManager.isInstaKillActive()) {
              damage = hitZombie.health;
              if (window.DEBUG_VERBOSE) {
                console.log('[WEAPON] Insta-kill active! Setting damage to zombie health:', damage);
              }
            }
          } catch {
            // power-up manager not initialized, use normal damage
          }
          
          zombieManager.damageZombie(hitZombie.id, damage, playerId);
          
          if (window.DEBUG_VERBOSE) {
            console.log('[WEAPON] Hit zombie', hitZombie.id, 'for', damage, 'damage');
          }
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
  // Reload
  // ==========================================================================

  reload(): boolean {
    // Cannot reload if already reloading
    if (this.weapon.isReloading) {
      if (window.DEBUG_VERBOSE) {
        console.log('[WEAPON] Already reloading');
      }
      return false;
    }

    // Cannot reload if magazine is already full
    if (this.weapon.currentMagazine >= this.weapon.config.magazineSize) {
      if (window.DEBUG_VERBOSE) {
        console.log('[WEAPON] Magazine already full');
      }
      return false;
    }

    // Cannot reload if no reserve ammo
    if (this.weapon.reserveAmmo <= 0) {
      if (window.DEBUG_VERBOSE) {
        console.log('[WEAPON] No reserve ammo');
      }
      return false;
    }

    // Start reload
    this.weapon.isReloading = true;

    if (window.DEBUG_VERBOSE) {
      console.log(`[WEAPON] Reloading... (${this.weapon.config.reloadTime}s)`);
    }

    this.weapon.reloadTimeoutId = setTimeout(() => {
      this.completeReload();
    }, this.weapon.config.reloadTime * 1000);

    return true;
  }

  private completeReload(): void {
    if (!this.weapon.isReloading) return;

    const bulletsNeeded = this.weapon.config.magazineSize - this.weapon.currentMagazine;
    const bulletsToLoad = Math.min(bulletsNeeded, this.weapon.reserveAmmo);

    this.weapon.currentMagazine += bulletsToLoad;
    this.weapon.reserveAmmo -= bulletsToLoad;
    this.weapon.isReloading = false;
    this.weapon.reloadTimeoutId = null;

    if (window.DEBUG_VERBOSE) {
      console.log(`[WEAPON] Reload complete! Magazine: ${this.weapon.currentMagazine}/${this.weapon.reserveAmmo}`);
    }
  }

  // ==========================================================================
  // Refill Ammo (for testing/debug)
  // ==========================================================================

  refillAmmo(): void {
    // Cancel any active reload timeout safely
    if (this.weapon.reloadTimeoutId) {
      clearTimeout(this.weapon.reloadTimeoutId);
      this.weapon.reloadTimeoutId = null;
    }

    // Fill current magazine
    this.weapon.currentMagazine = this.weapon.config.magazineSize;
    
    // Refill reserve ammo to max
    this.weapon.reserveAmmo = this.weapon.config.maxReserveAmmo;
    
    // Cancel any active reload state
    this.weapon.isReloading = false;

    if (window.DEBUG_VERBOSE) {
      console.log(`[WEAPON] Ammo refilled! Magazine: ${this.weapon.currentMagazine}/${this.weapon.reserveAmmo}`);
    }
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

  getCurrentMagazine(): number {
    return this.weapon.currentMagazine;
  }

  getReserveAmmo(): number {
    return this.weapon.reserveAmmo;
  }

  getMagazineSize(): number {
    return this.weapon.config.magazineSize;
  }

  getMaxReserveAmmo(): number {
    return this.weapon.config.maxReserveAmmo;
  }

  isCurrentlyReloading(): boolean {
    return this.weapon.isReloading;
  }

  getName(): string {
    return this.weapon.config.name;
  }

  // ==========================================================================
  // Cleanup
  // ==========================================================================

  destroy(): void {
    // Cancel any pending reload timeout
    if (this.weapon.reloadTimeoutId) {
      clearTimeout(this.weapon.reloadTimeoutId);
      this.weapon.reloadTimeoutId = null;
    }
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
