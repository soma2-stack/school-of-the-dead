/**
 * School of the Dead - Simple Weapon UI Component
 * Shows current weapon info in bottom right corner
 */

import React from 'react';
import { getWeaponManager } from './weapons';

export const WeaponUI: React.FC = () => {
  const [weaponInfo, setWeaponInfo] = React.useState({
    name: 'School Pistol',
    damage: 35,
    currentMagazine: 8,
    reserveAmmo: 64,
    isReloading: false,
  });

  React.useEffect(() => {
    const weaponManager = getWeaponManager();
    const config = weaponManager.getConfig();
    const state = weaponManager.getWeaponState();
    setWeaponInfo({
      name: config.name,
      damage: config.damage,
      currentMagazine: state.currentMagazine,
      reserveAmmo: state.reserveAmmo,
      isReloading: state.isReloading,
    });
  }, []);

  // Update ammo display on fire/reload events
  React.useEffect(() => {
    const updateInterval = setInterval(() => {
      const weaponManager = getWeaponManager();
      const config = weaponManager.getConfig();
      const state = weaponManager.getWeaponState();

      setWeaponInfo({
        name: config.name,
        damage: config.damage,
        currentMagazine: state.currentMagazine,
        reserveAmmo: state.reserveAmmo,
        isReloading: state.isReloading,
      });
    }, 100);

    return () => clearInterval(updateInterval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: '2px solid #4a4a4a',
        borderRadius: '4px',
        padding: '12px 16px',
        fontFamily: "'Courier New', Courier, monospace",
        color: '#fff',
        fontSize: '14px',
        zIndex: 9999,
        minWidth: '150px',
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
        {weaponInfo.name}
      </div>
      <div style={{ marginBottom: '4px' }}>DMG: {weaponInfo.damage}</div>
      <div style={{ marginBottom: '4px' }}>
        Ammo: {weaponInfo.currentMagazine} / {weaponInfo.reserveAmmo}
      </div>
      {weaponInfo.isReloading && (
        <div style={{ color: '#ffaa00' }}>Reloading...</div>
      )}
    </div>
  );
};

export default WeaponUI;
