/**
 * React Component for displaying COD Zombies-style Points UI
 * A simple, customizable points display component
 */

import React from 'react';
import { usePlayerPoints } from './usePlayerPoints';
import type { PlayerPointsManager } from './points';

export interface PointsDisplayProps {
  /** Unique player identifier */
  playerId: string;
  
  /** Optional custom points manager */
  manager?: PlayerPointsManager;
  
  /** Custom CSS class */
  className?: string;
  
  /** Show total earned statistic */
  showTotalEarned?: boolean;
  
  /** Show total spent statistic */
  showTotalSpent?: boolean;
  
  /** Custom label for points */
  label?: string;
  
  /** Format function for displaying points */
  formatPoints?: (points: number) => string;
  
  /** Color when points are low (for warnings) */
  lowPointsThreshold?: number;
  
  /** Callback when points change significantly (e.g., for sound effects) */
  onSignificantChange?: (amount: number) => void;
}

export const PointsDisplay: React.FC<PointsDisplayProps> = ({
  playerId,
  manager,
  className = '',
  showTotalEarned = false,
  showTotalSpent = false,
  label = 'Points',
  formatPoints = (pts) => pts.toLocaleString(),
  lowPointsThreshold = 500,
  onSignificantChange,
}) => {
  const {
    currentPoints,
    totalEarned,
    totalSpent,
    addBulletHit,
    addZombieKill,
    addHeadshotKill,
    addKnifeKill,
    addRepairBarricade,
    canAfford,
    spendPoints,
  } = usePlayerPoints(playerId, manager);

  // Track previous points for significant change detection
  const [prevPoints, setPrevPoints] = React.useState(currentPoints);

  React.useEffect(() => {
    const diff = Math.abs(currentPoints - prevPoints);
    if (diff >= 50 && onSignificantChange) {
      onSignificantChange(diff);
    }
    setPrevPoints(currentPoints);
  }, [currentPoints, prevPoints, onSignificantChange]);

  const isLowPoints = currentPoints < lowPointsThreshold;

  return (
    <div
      className={`cod-points-display ${className}`}
      style={{
        display: 'inline-block',
        padding: '8px 16px',
        backgroundColor: '#1a1a1a',
        border: '2px solid #4a4a4a',
        borderRadius: '4px',
        fontFamily: "'Courier New', Courier, monospace",
        color: isLowPoints ? '#ff6b6b' : '#90EE90',
        fontWeight: 'bold',
        fontSize: '24px',
        minWidth: '150px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
        textShadow: '0 0 10px rgba(144, 238, 144, 0.5)',
      }}
    >
      <div style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>
        {label}
      </div>
      <div>{formatPoints(currentPoints)}</div>
      
      {(showTotalEarned || showTotalSpent) && (
        <div
          style={{
            fontSize: '10px',
            color: '#666',
            marginTop: '4px',
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          {showTotalEarned && <span>Earned: {formatPoints(totalEarned)}</span>}
          {showTotalSpent && <span>Spent: {formatPoints(totalSpent)}</span>}
        </div>
      )}
    </div>
  );
};

/**
 * Debug/Test component for testing the points system
 * Only use in development environments
 */
export const PointsDebugPanel: React.FC<{
  playerId: string;
  manager?: PlayerPointsManager;
}> = ({ playerId, manager }) => {
  const {
    currentPoints,
    totalEarned,
    totalSpent,
    addBulletHit,
    addZombieKill,
    addHeadshotKill,
    addKnifeKill,
    addRepairBarricade,
    canAfford,
    spendPoints,
  } = usePlayerPoints(playerId, manager);

  const testPurchases = [
    { name: 'Ammo Clip', cost: 50 },
    { name: 'Health Pack', cost: 100 },
    { name: 'Grenade', cost: 250 },
    { name: 'Special Weapon', cost: 1000 },
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        padding: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        border: '1px solid #333',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '12px',
        color: '#fff',
        zIndex: 9999,
        maxWidth: '300px',
      }}
    >
      <h3 style={{ margin: '0 0 12px 0', color: '#90EE90' }}>
        Points Debug Panel
      </h3>
      
      <div style={{ marginBottom: '16px' }}>
        <div>Current: {currentPoints}</div>
        <div>Total Earned: {totalEarned}</div>
        <div>Total Spent: {totalSpent}</div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <strong style={{ color: '#ffd700' }}>Test Point Awards:</strong>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px' }}>
          <button onClick={addBulletHit} style={buttonStyle}>
            +10 Bullet Hit
          </button>
          <button onClick={addZombieKill} style={buttonStyle}>
            +60 Zombie Kill
          </button>
          <button onClick={addHeadshotKill} style={buttonStyle}>
            +100 Headshot Kill
          </button>
          <button onClick={addKnifeKill} style={buttonStyle}>
            +130 Knife Kill
          </button>
          <button onClick={addRepairBarricade} style={buttonStyle}>
            +10 Repair Barricade
          </button>
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <strong style={{ color: '#ffd700' }}>Test Purchases:</strong>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px' }}>
          {testPurchases.map((purchase) => (
            <button
              key={purchase.name}
              onClick={() => spendPoints(purchase.cost)}
              disabled={!canAfford(purchase.cost)}
              style={{
                ...buttonStyle,
                opacity: canAfford(purchase.cost) ? 1 : 0.5,
                cursor: canAfford(purchase.cost) ? 'pointer' : 'not-allowed',
              }}
            >
              {purchase.name} (-{purchase.cost})
            </button>
          ))}
        </div>
      </div>

      <div>
        <strong style={{ color: '#ffd700' }}>Affordability:</strong>
        <div style={{ marginTop: '4px' }}>
          {testPurchases.map((purchase) => (
            <div key={purchase.name} style={{ color: canAfford(purchase.cost) ? '#90EE90' : '#ff6b6b' }}>
              {purchase.name}: {canAfford(purchase.cost) ? '✓' : '✗'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: '6px 12px',
  backgroundColor: '#333',
  border: '1px solid #555',
  borderRadius: '4px',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '11px',
  textAlign: 'left',
};

export default PointsDisplay;
