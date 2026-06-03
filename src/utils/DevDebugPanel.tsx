import React, { useState, useEffect } from 'react';
import { getPointsManager } from './points';
import { getRoundManager, calculateZombieCount } from './rounds';

// Dev mode flag - set to false in production
const DEV_MODE = true;

interface DevDebugPanelProps {
  playerId: string;
  sessionId?: string;
}

export const DevDebugPanel: React.FC<DevDebugPanelProps> = ({ playerId, sessionId }) => {
  // Don't render anything if not in dev mode
  if (!DEV_MODE) {
    return null;
  }
  const [points, setPoints] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);
  const [roundState, setRoundState] = useState<string>('idle');
  const [zombiesRemaining, setZombiesRemaining] = useState(0);
  const [previousRoundDuration, setPreviousRoundDuration] = useState<number | null>(null);
  const [recommendedZombieCount, setRecommendedZombieCount] = useState(0);

  const pointsManager = getPointsManager();
  const roundManager = getRoundManager(sessionId);

  // Refresh data periodically
  useEffect(() => {
    const updateData = () => {
      if (pointsManager) {
        setPoints(pointsManager.getPoints(playerId));
      }

      if (roundManager) {
        setCurrentRound(roundManager.getCurrentRound());
        setRoundState(roundManager.getState());
        setZombiesRemaining(roundManager.getZombiesRemaining());
        setPreviousRoundDuration(roundManager.getPreviousRoundDuration());
        setRecommendedZombieCount(calculateZombieCount(roundManager.getCurrentRound()));
      }
    };

    updateData();
    const interval = setInterval(updateData, 500);

    return () => clearInterval(interval);
  }, [playerId, sessionId]);

  const handleAddPoints = () => {
    // Add points using bullet hit method (easiest way to add small amounts)
    // Call it 10 times to get 100 points (10 * 10 = 100)
    for (let i = 0; i < 10; i++) {
      pointsManager?.addBulletHit(playerId);
    }
  };

  const handleRemovePoints = () => {
    // Spend points directly
    pointsManager?.spendPoints(playerId, 100, 'debug_remove');
  };

  const handleStartRound = () => {
    const zombieCount = calculateZombieCount(currentRound);
    roundManager?.startRound(zombieCount);
  };

  const handleEndRound = () => {
    roundManager?.endRound();
  };

  const handleKillZombie = () => {
    roundManager?.registerZombieKill();
  };

  const handleNextRound = () => {
    roundManager?.forceNextRound();
  };

  const formatDuration = (ms: number | null): string => {
    if (ms === null) return '-';
    return `${(ms / 1000).toFixed(1)}s`;
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>🛠️ Dev Debug Panel</h3>
      
      {/* Stats Display */}
      <div style={styles.statsSection}>
        <div style={styles.statRow}>
          <span style={styles.statLabel}>Current Points:</span>
          <span style={styles.statValue}>{points}</span>
        </div>
        <div style={styles.statRow}>
          <span style={styles.statLabel}>Current Round:</span>
          <span style={styles.statValue}>{currentRound}</span>
        </div>
        <div style={styles.statRow}>
          <span style={styles.statLabel}>Round State:</span>
          <span style={{ ...styles.statValue, ...getStateColor(roundState) }}>
            {roundState}
          </span>
        </div>
        <div style={styles.statRow}>
          <span style={styles.statLabel}>Zombies Remaining:</span>
          <span style={styles.statValue}>{zombiesRemaining}</span>
        </div>
        <div style={styles.statRow}>
          <span style={styles.statLabel}>Prev Round Duration:</span>
          <span style={styles.statValue}>{formatDuration(previousRoundDuration)}</span>
        </div>
        <div style={styles.statRow}>
          <span style={styles.statLabel}>Recommended Zombie Count:</span>
          <span style={styles.statValue}>{recommendedZombieCount}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={styles.buttonsSection}>
        <h4 style={styles.subtitle}>Points Actions</h4>
        <div style={styles.buttonRow}>
          <button style={styles.buttonPositive} onClick={handleAddPoints}>
            +100 Points
          </button>
          <button style={styles.buttonNegative} onClick={handleRemovePoints}>
            -100 Points
          </button>
        </div>

        <h4 style={styles.subtitle}>Round Actions</h4>
        <div style={styles.buttonRow}>
          <button style={styles.buttonPrimary} onClick={handleStartRound}>
            Start Round
          </button>
          <button style={styles.buttonWarning} onClick={handleEndRound}>
            End Round
          </button>
        </div>

        <div style={styles.buttonRow}>
          <button style={styles.buttonDanger} onClick={handleKillZombie}>
            Kill Zombie
          </button>
          <button style={styles.buttonSecondary} onClick={handleNextRound}>
            Next Round
          </button>
        </div>
      </div>

      <div style={styles.warning}>
        ⚠️ Dev Mode Only - Remove in production
      </div>
    </div>
  );
};

// Helper to color-code round states
const getStateColor = (state: string): React.CSSProperties => {
  switch (state) {
    case 'active':
      return { color: '#4ade80' };
    case 'intermission':
      return { color: '#fbbf24' };
    case 'ended':
      return { color: '#f87171' };
    default:
      return { color: '#9ca3af' };
  }
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '320px',
    backgroundColor: 'rgba(17, 24, 39, 0.95)',
    border: '2px solid #4b5563',
    borderRadius: '8px',
    padding: '16px',
    fontFamily: "'Courier New', monospace",
    fontSize: '14px',
    color: '#e5e7eb',
    zIndex: 9999,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  title: {
    margin: '0 0 16px 0',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottom: '1px solid #4b5563',
    paddingBottom: '8px',
  },
  statsSection: {
    marginBottom: '16px',
  },
  statRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '6px',
  },
  statLabel: {
    color: '#9ca3af',
  },
  statValue: {
    fontWeight: 'bold',
  },
  buttonsSection: {
    borderTop: '1px solid #4b5563',
    paddingTop: '16px',
  },
  subtitle: {
    margin: '0 0 8px 0',
    fontSize: '13px',
    color: '#9ca3af',
  },
  buttonRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '8px',
  },
  buttonPositive: {
    flex: 1,
    padding: '8px 12px',
    backgroundColor: '#059669',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  buttonNegative: {
    flex: 1,
    padding: '8px 12px',
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  buttonPrimary: {
    flex: 1,
    padding: '8px 12px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  buttonWarning: {
    flex: 1,
    padding: '8px 12px',
    backgroundColor: '#d97706',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  buttonDanger: {
    flex: 1,
    padding: '8px 12px',
    backgroundColor: '#991b1b',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  buttonSecondary: {
    flex: 1,
    padding: '8px 12px',
    backgroundColor: '#4b5563',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '12px',
  },
  warning: {
    marginTop: '12px',
    padding: '8px',
    backgroundColor: 'rgba(234, 179, 8, 0.2)',
    border: '1px dashed #eab308',
    borderRadius: '4px',
    textAlign: 'center',
    fontSize: '11px',
    color: '#fbbf24',
  },
};

export default DevDebugPanel;
