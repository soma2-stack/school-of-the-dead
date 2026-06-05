/**
 * School of the Dead - Simple Weapon UI Component
 * Shows current weapon info in bottom right corner
 */

import React from 'react';
import { getWeaponManager } from './weapons';

export const WeaponUI: React.FC = () => {
  const [weaponInfo, setWeaponInfo] = React.useState({
    name: 'School Pistol',
    damage: 100,
    ammo: Infinity,
  });

  React.useEffect(() => {
    const weaponManager = getWeaponManager();
    const config = weaponManager.getConfig();
    setWeaponInfo({
      name: config.name,
      damage: config.damage,
      ammo: config.ammo === -1 ? Infinity : config.ammo,
    });
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
      <div>{weaponInfo.ammo === Infinity ? '∞' : weaponInfo.ammo} Ammo</div>
    </div>
  );
};

export default WeaponUI;
