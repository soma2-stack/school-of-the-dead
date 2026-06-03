/**
 * School of the Dead - Round Display Components
 * React components for displaying round information
 */

import React from 'react';
import { useRoundSystem, useZombiesRemaining, useIntermissionCountdown } from './useRoundSystem';
import { RoundState, RoundManager } from './rounds';

// ============================================================================
// Styles (inline for portability - replace with your CSS system)
// ============================================================================

const styles: Record<string, React.CSSProperties> = {
  container: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    textAlign: 'center',
    fontFamily: "'Courier New', Courier, monospace",
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
  },
  roundInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    border: '2px solid #ff4444',
    borderRadius: '8px',
    padding: '16px 32px',
    display: 'inline-block',
    minWidth: '200px',
  },
  roundNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#ff4444',
    margin: '0 0 8px 0',
    letterSpacing: '4px',
  },
  stateIndicator: {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: '#aaaaaa',
    marginBottom: '8px',
  },
  zombiesCounter: {
    fontSize: '18px',
    color: '#ffffff',
    marginTop: '8px',
  },
  timer: {
    fontSize: '16px',
    color: '#ffff00',
    marginTop: '8px',
  },
  intermissionOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  intermissionText: {
    fontSize: '48px',
    color: '#ff4444',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '8px',
    marginBottom: '24px',
  },
  countdownText: {
    fontSize: '72px',
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: "'Courier New', Courier, monospace",
  },
  subtext: {
    fontSize: '18px',
    color: '#888888',
    marginTop: '16px',
  },
  debugPanel: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    border: '1px solid #444444',
    borderRadius: '8px',
    padding: '16px',
    fontFamily: "'Courier New', Courier, monospace",
    fontSize: '12px',
    color: '#00ff00',
    zIndex: 1001,
    minWidth: '250px',
  },
  debugRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '4px',
  },
  debugLabel: {
    color: '#aaaaaa',
  },
  debugValue: {
    color: '#00ff00',
    fontWeight: 'bold',
  },
  button: {
    marginTop: '8px',
    padding: '8px 16px',
    backgroundColor: '#ff4444',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
  },
  buttonDisabled: {
    backgroundColor: '#444444',
    cursor: 'not-allowed',
  },
  progressBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#333333',
    borderRadius: '4px',
    overflow: 'hidden',
    marginTop: '8px',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff4444',
    transition: 'width 0.3s ease',
  },
};

// ============================================================================
// Main Round Display Component
// ============================================================================

export interface RoundDisplayProps {
  sessionId?: string;
  showZombiesRemaining?: boolean;
  showTimer?: boolean;
  className?: string;
}

/**
 * Main round display component - shows current round number and state
 */
export const RoundDisplay: React.FC<RoundDisplayProps> = ({
  sessionId = 'default',
  showZombiesRemaining = true,
  showTimer = true,
  className = '',
}) => {
  const {
    currentRound,
    state,
    zombiesRemaining,
    totalZombiesSpawned,
    roundDurationFormatted,
    intermissionCountdown,
  } = useRoundSystem({ sessionId });

  const getStateLabel = (state: RoundState): string => {
    switch (state) {
      case 'idle':
        return 'Waiting';
      case 'intermission':
        return 'Intermission';
      case 'active':
        return 'Round Active';
      case 'ended':
        return 'Round Complete';
      default:
        return state;
    }
  };

  const getStateColor = (state: RoundState): string => {
    switch (state) {
      case 'idle':
        return '#888888';
      case 'intermission':
        return '#ffff00';
      case 'active':
        return '#ff4444';
      case 'ended':
        return '#00ff00';
      default:
        return '#ffffff';
    }
  };

  return (
    <div style={styles.container} className={className}>
      <div style={styles.roundInfo}>
        <div style={styles.roundNumber}>ROUND {currentRound}</div>
        <div
          style={{
            ...styles.stateIndicator,
            color: getStateColor(state),
          }}
        >
          {getStateLabel(state)}
        </div>

        {showZombiesRemaining && state === 'active' && (
          <div style={styles.zombiesCounter}>
            Zombies: {zombiesRemaining} / {totalZombiesSpawned}
          </div>
        )}

        {showTimer && state === 'active' && roundDurationFormatted && (
          <div style={styles.timer}>Time: {roundDurationFormatted}</div>
        )}

        {showTimer && state === 'intermission' && (
          <div style={styles.timer}>{intermissionCountdown}</div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// Intermission Overlay Component
// ============================================================================

export interface IntermissionOverlayProps {
  sessionId?: string;
  onRoundStart?: () => void;
  autoHide?: boolean;
}

/**
 * Full-screen overlay shown during intermission
 */
export const IntermissionOverlay: React.FC<IntermissionOverlayProps> = ({
  sessionId = 'default',
  onRoundStart,
  autoHide = true,
}) => {
  const { countdown, isComplete, isActive } = useIntermissionCountdown(sessionId);
  const { currentRound, startRound } = useRoundSystem({ sessionId });

  if (!isActive) {
    return null;
  }

  const handleManualStart = () => {
    if (isComplete && onRoundStart) {
      onRoundStart();
      // Note: Actual round start should be handled by game logic
    }
  };

  return (
    <div style={styles.intermissionOverlay}>
      <div style={styles.intermissionText}>Round {currentRound}</div>
      <div style={styles.countdownText}>{countdown.replace('Round starts in ', '')}</div>
      <div style={styles.subtext}>
        {isComplete ? 'Press to start' : 'Prepare for the next wave'}
      </div>
      
      {isComplete && onRoundStart && (
        <button
          style={styles.button}
          onClick={handleManualStart}
        >
          Start Round
        </button>
      )}
    </div>
  );
};

// ============================================================================
// Zombies Remaining Counter Component
// ============================================================================

export interface ZombiesCounterProps {
  sessionId?: string;
  showProgress?: boolean;
  className?: string;
}

/**
 * Compact zombies remaining counter with optional progress bar
 */
export const ZombiesCounter: React.FC<ZombiesCounterProps> = ({
  sessionId = 'default',
  showProgress = true,
  className = '',
}) => {
  const { remaining, total, killed } = useZombiesRemaining(sessionId);
  const { state } = useRoundState(sessionId);

  if (state !== 'active' || total === 0) {
    return null;
  }

  const percentage = total > 0 ? ((total - remaining) / total) * 100 : 0;

  return (
    <div style={{ ...styles.container, top: 'auto', bottom: '20px' }} className={className}>
      <div style={styles.roundInfo}>
        <div style={styles.zombiesCounter}>
          🧟 {remaining} Remaining
        </div>
        
        {showProgress && (
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${percentage}%`,
              }}
            />
          </div>
        )}
        
        <div style={{ ...styles.stateIndicator, marginTop: '8px' }}>
          Killed: {killed} | Spawned: {total}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Debug Panel Component (Development Only)
// ============================================================================

export interface RoundDebugPanelProps {
  sessionId?: string;
  visible?: boolean;
}

/**
 * Debug panel for developers - shows all round state information
 * Should only be used in development builds
 */
export const RoundDebugPanel: React.FC<RoundDebugPanelProps> = ({
  sessionId = 'default',
  visible = true,
}) => {
  const {
    currentRound,
    state,
    zombiesRemaining,
    zombiesKilled,
    totalZombiesSpawned,
    roundDuration,
    intermissionRemaining,
    totalRoundsCompleted,
    canStartRound,
    canEndRound,
    canStartIntermission,
    startRound,
    endRound,
    startIntermission,
    forceNextRound,
    registerZombieSpawn,
    registerZombieKill,
    manager,
  } = useRoundSystem({ sessionId, autoRefreshMs: 100 });

  // Get previous round duration and recommended zombie count
  const previousRoundDuration = manager.getPreviousRoundDuration();
  const recommendedCount = RoundManager.calculateZombieCount(currentRound);

  if (!visible) {
    return null;
  }

  const config = manager.getConfig();

  return (
    <div style={styles.debugPanel} className="round-debug-panel">
      <div style={{ borderBottom: '1px solid #444', paddingBottom: '8px', marginBottom: '8px' }}>
        <strong>ROUND SYSTEM DEBUG</strong>
      </div>

      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>Session:</span>
        <span style={styles.debugValue}>{sessionId}</span>
      </div>
      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>Current Round:</span>
        <span style={styles.debugValue}>{currentRound}</span>
      </div>
      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>State:</span>
        <span style={styles.debugValue}>{state}</span>
      </div>
      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>Zombies Remaining:</span>
        <span style={styles.debugValue}>
          {zombiesRemaining}/{totalZombiesSpawned}
        </span>
      </div>
      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>Previous Round Duration:</span>
        <span style={styles.debugValue}>
          {previousRoundDuration !== null ? `${Math.floor(previousRoundDuration / 1000)}s` : '-'}
        </span>
      </div>
      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>Recommended Zombie Count:</span>
        <span style={styles.debugValue}>{recommendedCount}</span>
      </div>
      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>Rounds Completed:</span>
        <span style={styles.debugValue}>{totalRoundsCompleted}</span>
      </div>
      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>Round Time:</span>
        <span style={styles.debugValue}>
          {roundDuration !== null ? `${Math.floor(roundDuration / 1000)}s` : '-'}
        </span>
      </div>
      <div style={styles.debugRow}>
        <span style={styles.debugLabel}>Intermission:</span>
        <span style={styles.debugValue}>
          {Math.floor(intermissionRemaining / 1000)}s
        </span>
      </div>

      <div style={{ borderTop: '1px solid #444', marginTop: '8px', paddingTop: '8px' }}>
        <div style={styles.debugLabel}>Config:</div>
        <div style={styles.debugRow}>
          <span style={styles.debugLabel}>Start Round:</span>
          <span style={styles.debugValue}>{config.startingRound}</span>
        </div>
        <div style={styles.debugRow}>
          <span style={styles.debugLabel}>Intermission:</span>
          <span style={styles.debugValue}>{config.intermissionDurationMs / 1000}s</span>
        </div>
        <div style={styles.debugRow}>
          <span style={styles.debugLabel}>Min Duration:</span>
          <span style={styles.debugValue}>{config.minRoundDurationMs / 1000}s</span>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #444', marginTop: '8px', paddingTop: '8px' }}>
        <div style={styles.debugLabel}>Actions:</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
          <button
            style={{
              ...styles.button,
              ...(canStartRound ? {} : styles.buttonDisabled),
            }}
            onClick={() => startRound(10)}
            disabled={!canStartRound}
          >
            Start R{currentRound + 1}
          </button>
          <button
            style={{
              ...styles.button,
              ...(canEndRound ? {} : styles.buttonDisabled),
            }}
            onClick={endRound}
            disabled={!canEndRound}
          >
            End Round
          </button>
          <button
            style={{
              ...styles.button,
              ...(canStartIntermission ? {} : styles.buttonDisabled),
            }}
            onClick={startIntermission}
            disabled={!canStartIntermission}
          >
            Intermission
          </button>
          <button
            style={styles.button}
            onClick={forceNextRound}
          >
            Force Next
          </button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
          <button
            style={styles.button}
            onClick={registerZombieSpawn}
          >
            +Spawn
          </button>
          <button
            style={styles.button}
            onClick={registerZombieKill}
          >
            +Kill
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper import for the specialized hook
import { useRoundState } from './useRoundSystem';

// ============================================================================
// Export All Components
// ============================================================================

export default {
  RoundDisplay,
  IntermissionOverlay,
  ZombiesCounter,
  RoundDebugPanel,
};
