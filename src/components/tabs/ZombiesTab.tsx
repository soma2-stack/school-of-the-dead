import React from 'react';
import { ZombieDebugData } from '../DebugOverlay';

interface Props {
  zombieDebugData: ZombieDebugData;
  onKillAllZombies?: () => void;
  onSpawnZombie?: (count: number) => void;
  onNextRound?: () => void;
}

const ZombiesTab: React.FC<Props> = ({
  zombieDebugData,
  onKillAllZombies,
  onSpawnZombie,
  onNextRound,
}) => {
  const buttonStyle: React.CSSProperties = {
    background: '#003300',
    color: '#0f0',
    border: '1px solid #0f0',
    padding: '4px 8px',
    cursor: 'pointer',
    fontSize: '10px',
    marginTop: '5px',
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div>
      {/* Summary Stats */}
      <div style={{
        border: '1px solid #f00',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        padding: '8px',
        marginBottom: '10px',
        borderRadius: '4px'
      }}>
        <strong style={{ color: '#f00', display: 'block', marginBottom: '6px' }}>
          ZOMBIE STATUS
        </strong>
        <div style={{ fontSize: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
          <span>Alive Zombies:</span>
          <span style={{ color: '#0f0' }}>{zombieDebugData.aliveCount}</span>

          <span>Dead Zombies:</span>
          <span style={{ color: '#888' }}>{zombieDebugData.deadCount}</span>

          <span>Current Round:</span>
          <span style={{ color: '#ff0' }}>{zombieDebugData.currentRound}</span>

          <span>Expected This Round:</span>
          <span>{zombieDebugData.expectedZombiesThisRound}</span>

          <span>Kills This Round:</span>
          <span style={{ color: '#0ff' }}>{zombieDebugData.killsThisRound}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ marginBottom: '10px' }}>
        <button
          onClick={() => onKillAllZombies?.()}
          style={{
            ...buttonStyle,
            backgroundColor: '#991b1b',
            borderColor: '#f00',
            marginBottom: '4px',
          }}
        >
          💀 KILL ALL ZOMBIES
        </button>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            onClick={() => onSpawnZombie?.(1)}
            style={{
              ...buttonStyle,
              marginTop: 0,
              backgroundColor: '#166534',
              borderColor: '#0f0',
              flex: 1,
            }}
          >
            🧟 SPAWN 1 ZOMBIE
          </button>
          <button
            onClick={() => onSpawnZombie?.(10)}
            style={{
              ...buttonStyle,
              marginTop: 0,
              backgroundColor: '#166534',
              borderColor: '#0f0',
              flex: 1,
            }}
          >
            🧟🧟 SPAWN 10 ZOMBIES
          </button>
        </div>
        <button
          onClick={() => onNextRound?.()}
          style={{
            ...buttonStyle,
            backgroundColor: '#1e3a8a',
            borderColor: '#00f',
            marginTop: '4px',
          }}
        >
          🔄 START NEXT ROUND
        </button>
      </div>

      {/* Zombie List */}
      <div style={{
        border: '1px solid #333',
        borderRadius: '4px',
        maxHeight: '300px',
        overflowY: 'auto',
      }}>
        <strong style={{ color: '#f88', display: 'block', padding: '6px', borderBottom: '1px solid #333' }}>
          ZOMBIE DETAILS ({zombieDebugData.zombies.length})
        </strong>
        {zombieDebugData.zombies.map((zombie, idx) => (
          <div
            key={zombie.id}
            style={{
              padding: '6px',
              borderBottom: '1px solid #222',
              backgroundColor: zombie.state === 'alive' ? 'rgba(0, 255, 0, 0.05)' : 'rgba(255, 0, 0, 0.05)',
              fontSize: '9px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
              <strong style={{ color: zombie.state === 'alive' ? '#0f0' : '#f00' }}>
                #{idx + 1} - {zombie.id.slice(-8)}
              </strong>
              <span style={{ 
                color: zombie.state === 'alive' ? '#0f0' : zombie.state === 'dying' ? '#ff0' : '#f00',
                fontWeight: 'bold',
              }}>
                [{zombie.state.toUpperCase()}]
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
              <span>Health: {zombie.health}/{zombie.maxHealth}</span>
              <span>Dist: {zombie.distanceToPlayer.toFixed(1)}</span>
              <span>X: {zombie.position.x.toFixed(1)}</span>
              <span>Z: {zombie.position.z.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZombiesTab;
