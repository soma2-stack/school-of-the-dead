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
  damage: 35,
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
    console.log('[WEAPON] Fire input received');
    console.log('[WEAPON] weaponManager !== null:', this !== null);

    if (!this.canFire()) {
      console.log('[WEAPON] canFire() returned false');
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

    console.log('[WEAPON] Raycast executed');

    // Raycast for hits
    const aliveZombies = zombieManager.getAliveZombies();
    console.log(`[WEAPON] Alive zombies: ${aliveZombies.length}`);
    
    const zombieMeshes = aliveZombies
      .map((z: any) => z.mesh)
      .filter((mesh: THREE.Mesh): mesh is THREE.Mesh => mesh !== undefined);
    
    console.log(`[WEAPON] Zombie meshes to test: ${zombieMeshes.length}`);

    const intersects = raycaster.intersectObjects(zombieMeshes, true);
    console.log(`[WEAPON] Intersections: ${intersects.length}`);

    if (intersects.length > 0) {
      const hitObject = intersects[0].object;
      console.log(`[WEAPON] Hit mesh: ${hitObject.name || hitObject.type}`);
      
      // Find the root mesh (in case we hit a child object like eyes)
      let rootMesh = hitObject;
      while (rootMesh.parent && !aliveZombies.some((z: any) => z.mesh === rootMesh)) {
        rootMesh = rootMesh.parent as THREE.Mesh;
      }

      const hitZombie = aliveZombies.find(
        (z: any) => z.mesh === rootMesh
      );

      if (hitZombie) {
        console.log(`[WEAPON] Zombie ID: ${hitZombie.id}`);
        console.log('[WEAPON] Checking zombie state:', hitZombie.state);

        // Only award points and deal damage if zombie is alive
        if (hitZombie.state === 'alive') {
          // Award bullet hit points IMMEDIATELY before applying damage
          const pointsManager = getPointsManager();
          console.log('[POINTS] Before bulletHit - playerId:', playerId);
          const beforeState = pointsManager.getPlayerState(playerId);
          console.log('[POINTS] Before:', beforeState?.currentPoints ?? 0);
          const hitResult = pointsManager.addBulletHit(playerId);
          console.log('[POINTS] addBulletHit result:', hitResult);
          const afterState = pointsManager.getPlayerState(playerId);
          console.log('[POINTS] After:', afterState?.currentPoints ?? 0);
          console.log('[WEAPON] Awarded 10 points for bullet hit');

          if (window.DEBUG_VERBOSE) {
            console.log("[POINT TEST] bullet hit awarded", hitResult);
            console.log("[POINT TEST] points after hit", getPointsManager().getPoints(playerId));
          }

          console.log('[WEAPON] Calling damageZombie');

          // Deal damage AFTER awarding hit points
          const damage = this.weapon.config.damage;
          zombieManager.damageZombie(hitZombie.id, damage, playerId);
          
          console.log('[WEAPON] Damage applied successfully');
          console.log('[WEAPON] Hit zombie', hitZombie.id);
        } else {
          console.log('[WEAPON] Zombie is not alive, skipping hit');
        }

        return {
          success: true,
          hitZombieId: hitZombie.id,
          damageDealt: this.weapon.config.damage,
        };
      } else {
        console.log('[WEAPON] Could not find zombie for mesh');
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
