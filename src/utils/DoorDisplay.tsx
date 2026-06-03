/**
 * School of the Dead - Door UI Components
 * React components for door interaction display and debug
 */

import React, { useEffect, useState } from 'react';
import { useDoorSystem, useCurrentDoorInteraction } from './useDoorSystem';
import { DoorState } from './doors';

// ============================================================================
// DEV_MODE Flag - Set to false in production
// ============================================================================

const DEV_MODE = true;

// ============================================================================
// DoorInteractionPrompt Component
// Shows "Press E to Open Door" prompt when looking at a door
// ============================================================================

export interface DoorInteractionPromptProps {
  sessionId?: string;
  playerId: string;
}

export const DoorInteractionPrompt: React.FC<DoorInteractionPromptProps> = ({
  sessionId = 'default',
  playerId,
}) => {
  const { isLookingAtDoor, prompt } = useCurrentDoorInteraction(sessionId, playerId);
  
  if (!isLookingAtDoor || !prompt || !prompt.show) {
    return null;
  }
  
  return (
    <div style={styles.promptContainer}>
      <div style={{
        ...styles.promptText,
        color: prompt.canAfford ? '#4ade80' : '#ef4444',
      }}>
        {prompt.text}
      </div>
    </div>
  );
};

// ============================================================================
// DoorStatusLabel Component
// Shows floating cost label above a door (for Three.js integration)
// ============================================================================

export interface DoorStatusLabelProps {
  door: DoorState;
  isVisible?: boolean;
}

export const DoorStatusLabel: React.FC<DoorStatusLabelProps> = ({
  door,
  isVisible = true,
}) => {
  if (!isVisible || door.isOpen) {
    return null;
  }
  
  return (
    <div style={styles.labelContainer}>
      <span style={styles.labelText}>{door.cost}</span>
    </div>
  );
};

// ============================================================================
// DoorsCounter Component
// Shows count and total cost of closed doors
// ============================================================================

export interface DoorsCounterProps {
  sessionId?: string;
  showTotalCost?: boolean;
}

export const DoorsCounter: React.FC<DoorsCounterProps> = ({
  sessionId = 'default',
  showTotalCost = true,
}) => {
  // We need a dummy playerId for the hook, but we only use door stats
  const [count, setCount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  
  useEffect(() => {
    const { getDoorManager } = require('./doors');
    const manager = getDoorManager(sessionId);
    
    const updateCount = () => {
      const closedDoors = manager.getClosedDoors();
      setCount(closedDoors.length);
      setTotalCost(closedDoors.reduce((sum, d) => sum + d.cost, 0));
    };
    
    updateCount();
    
    // Subscribe to door events
    const unsub = manager.on('doorOpened', updateCount);
    return () => unsub();
  }, [sessionId]);
  
  if (count === 0) {
    return null;
  }
  
  return (
    <div style={styles.counterContainer}>
      <div style={styles.counterText}>
        Doors Remaining: {count}
      </div>
      {showTotalCost && (
        <div style={styles.counterSubtext}>
          Total Cost: {totalCost}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// DoorDebugPanel Component (DEV ONLY)
// Shows all door states and allows testing
// ============================================================================

export interface DoorDebugPanelProps {
  sessionId?: string;
  playerId: string;
}

export const DoorDebugPanel: React.FC<DoorDebugPanelProps> = ({
  sessionId = 'default',
  playerId,
}) => {
  const {
    doors,
    closedDoors,
    currentInteractedDoor,
    purchaseDoor,
    canAffordDoor,
    manager,
  } = useDoorSystem({ sessionId, playerId });
  
  const [lastResult, setLastResult] = useState<string>('');
  
  if (!DEV_MODE) {
    return null;
  }
  
  const handlePurchase = (doorId: string) => {
    const result = purchaseDoor(doorId);
    setLastResult(`[${new Date().toLocaleTimeString()}] ${result.success ? '✓' : '✗'} ${doorId}: ${result.reason || 'Success'}`);
  };
  
  const handleReset = () => {
    manager.resetDoors();
    setLastResult('[Reset] All doors closed');
  };
  
  return (
    <div style={styles.debugPanel}>
      <div style={styles.debugHeader}>
        <h3 style={styles.debugTitle}>🚪 Door Debug Panel</h3>
        <button onClick={handleReset} style={styles.resetButton}>
          Reset All Doors
        </button>
      </div>
      
      {lastResult && (
        <div style={styles.lastResult}>{lastResult}</div>
      )}
      
      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>Current Interaction</h4>
        {currentInteractedDoor ? (
          <div style={styles.doorItem}>
            <strong>{currentInteractedDoor.name}</strong>
            <br />
            Cost: {currentInteractedDoor.cost} | 
            Can Afford: {canAffordDoor(currentInteractedDoor.id) ? '✓' : '✗'}
            <br />
            <button
              onClick={() => handlePurchase(currentInteractedDoor.id)}
              style={{
                ...styles.purchaseButton,
                backgroundColor: canAffordDoor(currentInteractedDoor.id) ? '#22c55e' : '#6b7280',
              }}
              disabled={!canAffordDoor(currentInteractedDoor.id)}
            >
              Purchase Now
            </button>
          </div>
        ) : (
          <div style={styles.noInteraction}>No door in view</div>
        )}
      </div>
      
      <div style={styles.section}>
        <h4 style={styles.sectionTitle}>
          All Doors ({closedDoors.length} closed / {doors.length} total)
        </h4>
        <div style={styles.doorsList}>
          {doors.map(door => (
            <div
              key={door.id}
              style={{
                ...styles.doorItem,
                opacity: door.isOpen ? 0.5 : 1,
                backgroundColor: door.isOpen ? '#374151' : '#1f2937',
              }}
            >
              <div style={styles.doorInfo}>
                <strong>{door.name}</strong>
                {door.isOpen && <span style={styles.openBadge}>OPEN</span>}
                <br />
                Cost: {door.cost} | 
                Room: {door.connectedRoomId}
                <br />
                Pos: ({door.position.x}, {door.position.y}, {door.position.z})
              </div>
              {!door.isOpen && (
                <button
                  onClick={() => handlePurchase(door.id)}
                  style={{
                    ...styles.purchaseButton,
                    backgroundColor: canAffordDoor(door.id) ? '#22c55e' : '#6b7280',
                  }}
                  disabled={!canAffordDoor(door.id)}
                >
                  Buy
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div style={styles.warningBanner}>
        ⚠️ DEV ONLY - Remove in production
      </div>
    </div>
  );
};

// ============================================================================
// Styles
// ============================================================================

const styles: Record<string, React.CSSProperties> = {
  // Prompt styles
  promptContainer: {
    position: 'fixed',
    bottom: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    textAlign: 'center',
    pointerEvents: 'none',
  },
  promptText: {
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    padding: '12px 24px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: '8px',
    border: '2px solid rgba(255,255,255,0.2)',
  },
  
  // Label styles
  labelContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(255,165,0,0.9)',
    color: '#000',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  },
  labelText: {
    fontWeight: 'bold',
  },
  
  // Counter styles
  counterContainer: {
    position: 'fixed',
    top: '80px',
    right: '20px',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid rgba(255,255,255,0.2)',
    zIndex: 999,
  },
  counterText: {
    color: '#fbbf24',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  counterSubtext: {
    color: '#9ca3af',
    fontSize: '14px',
    marginTop: '4px',
  },
  
  // Debug panel styles
  debugPanel: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '350px',
    maxHeight: '500px',
    overflowY: 'auto',
    backgroundColor: 'rgba(17,24,39,0.95)',
    borderRadius: '12px',
    padding: '16px',
    zIndex: 9999,
    fontFamily: 'monospace',
    fontSize: '13px',
    color: '#e5e7eb',
    border: '2px solid #374151',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
  },
  debugHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    paddingBottom: '12px',
    borderBottom: '1px solid #374151',
  },
  debugTitle: {
    margin: 0,
    fontSize: '16px',
    color: '#fbbf24',
  },
  resetButton: {
    padding: '6px 12px',
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  lastResult: {
    backgroundColor: '#1f2937',
    padding: '8px',
    borderRadius: '4px',
    marginBottom: '12px',
    fontSize: '12px',
    color: '#9ca3af',
  },
  section: {
    marginBottom: '16px',
  },
  sectionTitle: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    color: '#fbbf24',
    borderBottom: '1px solid #374151',
    paddingBottom: '4px',
  },
  noInteraction: {
    color: '#6b7280',
    fontStyle: 'italic',
    padding: '8px',
    backgroundColor: '#1f2937',
    borderRadius: '4px',
  },
  doorsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  doorItem: {
    backgroundColor: '#1f2937',
    padding: '10px',
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doorInfo: {
    flex: 1,
    fontSize: '12px',
    lineHeight: '1.4',
  },
  openBadge: {
    backgroundColor: '#22c55e',
    color: '#000',
    padding: '2px 6px',
    borderRadius: '4px',
    fontSize: '10px',
    fontWeight: 'bold',
    marginLeft: '8px',
  },
  purchaseButton: {
    padding: '6px 12px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    fontWeight: 'bold',
    marginLeft: '8px',
  },
  warningBanner: {
    marginTop: '16px',
    padding: '8px',
    backgroundColor: '#fef3c7',
    color: '#92400e',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '12px',
  },
};

// ============================================================================
// Default Export - Convenience component bundle
// ============================================================================

export interface DoorUIBundleProps {
  sessionId?: string;
  playerId: string;
  showDebug?: boolean;
  showCounter?: boolean;
}

export const DoorUIBundle: React.FC<DoorUIBundleProps> = ({
  sessionId = 'default',
  playerId,
  showDebug = DEV_MODE,
  showCounter = true,
}) => {
  return (
    <>
      <DoorInteractionPrompt sessionId={sessionId} playerId={playerId} />
      {showCounter && <DoorsCounter sessionId={sessionId} />}
      {showDebug && <DoorDebugPanel sessionId={sessionId} playerId={playerId} />}
    </>
  );
};
