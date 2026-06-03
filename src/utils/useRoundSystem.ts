/**
 * School of the Dead - React Hooks for Round System
 * Provides React integration for the RoundManager
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  RoundManager,
  RoundData,
  RoundState,
  getRoundManager,
  formatRoundTime,
  formatIntermissionCountdown,
} from './rounds';

// ============================================================================
// Main Hook
// ============================================================================

export interface UseRoundSystemOptions {
  sessionId?: string;
  autoRefreshMs?: number;  // For intermission countdown refresh
}

export interface UseRoundSystemReturn {
  // Core state
  currentRound: number;
  state: RoundState;
  
  // Zombie tracking
  zombiesRemaining: number;
  zombiesKilled: number;
  totalZombiesSpawned: number;
  
  // Timing
  roundDuration: number | null;
  roundDurationFormatted: string | null;
  intermissionRemaining: number;
  intermissionCountdown: string;
  isIntermissionComplete: boolean;
  
  // Stats
  totalRoundsCompleted: number;
  
  // Actions
  startRound: (totalZombies: number) => void;
  endRound: () => void;
  startIntermission: () => void;
  forceNextRound: () => void;
  registerZombieSpawn: () => number;
  registerZombieKill: () => number;
  setZombiesRemaining: (remaining: number) => void;
  
  // Utilities
  canStartRound: boolean;
  canEndRound: boolean;
  canStartIntermission: boolean;
  
  // Manager access (for advanced usage)
  manager: RoundManager;
}

/**
 * React hook for integrating round system into components
 */
export function useRoundSystem(options: UseRoundSystemOptions = {}): UseRoundSystemReturn {
  const {
    sessionId = 'default',
    autoRefreshMs = 100,  // Refresh intermission countdown every 100ms
  } = options;

  const managerRef = useRef<RoundManager | null>(null);
  const [, forceUpdate] = useState({});
  const [intermissionTick, setIntermissionTick] = useState(0);

  // Get or create manager instance
  if (!managerRef.current) {
    managerRef.current = getRoundManager(sessionId);
  }

  const manager = managerRef.current;

  // Subscribe to state changes
  useEffect(() => {
    const unsubscribe = manager.onStateChange(() => {
      forceUpdate({});
    });

    return unsubscribe;
  }, [manager]);

  // Subscribe to zombie count changes
  useEffect(() => {
    const unsubscribe = manager.onZombiesRemainingChange(() => {
      forceUpdate({});
    });

    return unsubscribe;
  }, [manager]);

  // Auto-refresh for intermission countdown
  useEffect(() => {
    const state = manager.getState();
    if (state !== 'intermission') {
      return;
    }

    const interval = setInterval(() => {
      if (manager.isIntermissionComplete()) {
        forceUpdate({});
      } else {
        setIntermissionTick(t => t + 1);
      }
    }, autoRefreshMs);

    return () => clearInterval(interval);
  }, [manager, autoRefreshMs]);

  // Getters
  const currentRound = manager.getCurrentRound();
  const state = manager.getState();
  const zombiesRemaining = manager.getZombiesRemaining();
  const zombiesKilled = manager.getZombiesKilled();
  const totalZombiesSpawned = manager.getTotalZombiesSpawned();
  const roundDuration = manager.getRoundDuration();
  const roundDurationFormatted = roundDuration !== null ? formatRoundTime(roundDuration) : null;
  const intermissionRemaining = manager.getIntermissionRemaining();
  const intermissionCountdown = formatIntermissionCountdown(intermissionRemaining);
  const isIntermissionComplete = manager.isIntermissionComplete();
  const totalRoundsCompleted = manager.getTotalRoundsCompleted();

  // Actions
  const startRound = useCallback((totalZombies: number) => {
    manager.startRound(totalZombies);
  }, [manager]);

  const endRound = useCallback(() => {
    manager.endRound();
  }, [manager]);

  const startIntermission = useCallback(() => {
    manager.startIntermission();
  }, [manager]);

  const forceNextRound = useCallback(() => {
    manager.forceNextRound();
  }, [manager]);

  const registerZombieSpawn = useCallback(() => {
    return manager.registerZombieSpawn();
  }, [manager]);

  const registerZombieKill = useCallback(() => {
    return manager.registerZombieKill();
  }, [manager]);

  const setZombiesRemaining = useCallback((remaining: number) => {
    manager.setZombiesRemaining(remaining);
  }, [manager]);

  // Capability checks
  const canStartRound = state === 'idle' || state === 'intermission';
  const canEndRound = state === 'active';
  const canStartIntermission = state === 'ended' || state === 'idle';

  return {
    // Core state
    currentRound,
    state,
    
    // Zombie tracking
    zombiesRemaining,
    zombiesKilled,
    totalZombiesSpawned,
    
    // Timing
    roundDuration,
    roundDurationFormatted,
    intermissionRemaining,
    intermissionCountdown,
    isIntermissionComplete,
    
    // Stats
    totalRoundsCompleted,
    
    // Actions
    startRound,
    endRound,
    startIntermission,
    forceNextRound,
    registerZombieSpawn,
    registerZombieKill,
    setZombiesRemaining,
    
    // Utilities
    canStartRound,
    canEndRound,
    canStartIntermission,
    
    // Manager access
    manager,
  };
}

// ============================================================================
// Specialized Hooks
// ============================================================================

/**
 * Hook that only tracks zombies remaining (optimized for UI updates)
 */
export function useZombiesRemaining(sessionId: string = 'default'): {
  remaining: number;
  total: number;
  killed: number;
} {
  const manager = getRoundManager(sessionId);
  const [data, setData] = useState({
    remaining: manager.getZombiesRemaining(),
    total: manager.getTotalZombiesSpawned(),
    killed: manager.getZombiesKilled(),
  });

  useEffect(() => {
    const unsubscribe = manager.onZombiesRemainingChange((remaining, total) => {
      setData({
        remaining,
        total,
        killed: total - remaining,
      });
    });

    return unsubscribe;
  }, [manager]);

  return data;
}

/**
 * Hook that only tracks round state (optimized for UI updates)
 */
export function useRoundState(sessionId: string = 'default'): {
  currentRound: number;
  state: RoundState;
  totalRoundsCompleted: number;
} {
  const manager = getRoundManager(sessionId);
  const [state, setState] = useState({
    currentRound: manager.getCurrentRound(),
    state: manager.getState(),
    totalRoundsCompleted: manager.getTotalRoundsCompleted(),
  });

  useEffect(() => {
    const unsubscribe = manager.onStateChange((data) => {
      setState({
        currentRound: data.currentRound,
        state: data.state,
        totalRoundsCompleted: data.totalRoundsCompleted,
      });
    });

    return unsubscribe;
  }, [manager]);

  return state;
}

/**
 * Hook for intermission countdown timer
 */
export function useIntermissionCountdown(sessionId: string = 'default', refreshMs: number = 100): {
  remaining: number;
  countdown: string;
  isComplete: boolean;
  isActive: boolean;
} {
  const manager = getRoundManager(sessionId);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const state = manager.getState();
    if (state !== 'intermission') {
      return;
    }

    const interval = setInterval(() => {
      if (manager.isIntermissionComplete()) {
        setTick(t => t + 1);
      } else {
        setTick(t => t + 1);
      }
    }, refreshMs);

    return () => clearInterval(interval);
  }, [manager, refreshMs]);

  // Also subscribe to state changes
  useEffect(() => {
    const unsubscribe = manager.onStateChange(() => {
      setTick(t => t + 1);
    });

    return unsubscribe;
  }, [manager]);

  const remaining = manager.getIntermissionRemaining();
  const isActive = manager.getState() === 'intermission';

  return {
    remaining,
    countdown: formatIntermissionCountdown(remaining),
    isComplete: manager.isIntermissionComplete(),
    isActive,
  };
}
