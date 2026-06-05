/**
 * React Hook for COD Zombies Points System
 * Provides easy integration with React components
 */

import { useState, useEffect, useCallback } from 'react';
import {
  PlayerPointsManager,
  getPointsManager,
  PointsOperationResult,
  PointsEvent,
} from './points';

/**
 * Hook to access and display player points in React components
 * 
 * @param playerId - The unique identifier for the player
 * @param manager - Optional custom points manager instance (uses global by default)
 * 
 * @returns Object containing points state and action methods
 */
export function usePlayerPoints(
  playerId: string,
  manager?: PlayerPointsManager
) {
  const pointsManager = manager ?? getPointsManager();
  
  // Local state for current points
  const [currentPoints, setCurrentPoints] = useState<number>(() => {
    return pointsManager.getPoints(playerId);
  });

  const [totalEarned, setTotalEarned] = useState<number>(() => {
    return pointsManager.getPlayerState(playerId)?.totalEarned ?? 0;
  });

  const [totalSpent, setTotalSpent] = useState<number>(() => {
    return pointsManager.getPlayerState(playerId)?.totalSpent ?? 0;
  });

  // Subscribe to points changes
  useEffect(() => {
    console.log('[UI DEBUG] usePlayerPoints useEffect - playerId:', playerId);
    // Ensure player is registered
    if (!pointsManager.hasPlayer(playerId)) {
      console.log('[UI DEBUG] Registering player:', playerId);
      pointsManager.registerPlayer(playerId);
    }

    // Update initial state
    const state = pointsManager.getPlayerState(playerId);
    console.log('[UI DEBUG] Initial player state:', state);
    if (state) {
      setCurrentPoints(state.currentPoints);
      setTotalEarned(state.totalEarned);
      setTotalSpent(state.totalSpent);
    }

    // Subscribe to changes
    const unsubscribe = pointsManager.subscribe((changedPlayerId, result) => {
      console.log('[UI DEBUG] Points change event:', { changedPlayerId, playerId, result });
      if (changedPlayerId === playerId) {
        console.log('[UI DEBUG] Updating React state from', currentPoints, 'to', result.newPoints);
        setCurrentPoints(result.newPoints);
        setTotalEarned((prev) => prev + Math.max(0, result.amountChanged));
        setTotalSpent((prev) => prev + Math.max(0, -result.amountChanged));
      } else {
        console.log('[UI DEBUG] Player ID mismatch, ignoring event');
      }
    });

    return unsubscribe;
  }, [playerId, pointsManager]);

  // Action methods
  const addBulletHit = useCallback(() => {
    return pointsManager.addBulletHit(playerId);
  }, [playerId, pointsManager]);

  const addZombieKill = useCallback(() => {
    return pointsManager.addZombieKill(playerId);
  }, [playerId, pointsManager]);

  const addHeadshotKill = useCallback(() => {
    return pointsManager.addHeadshotKill(playerId);
  }, [playerId, pointsManager]);

  const addKnifeKill = useCallback(() => {
    return pointsManager.addKnifeKill(playerId);
  }, [playerId, pointsManager]);

  const addRepairBarricade = useCallback(() => {
    return pointsManager.addRepairBarricade(playerId);
  }, [playerId, pointsManager]);

  const spendPoints = useCallback(
    (amount: number) => {
      return pointsManager.spendPoints(playerId, amount);
    },
    [playerId, pointsManager]
  );

  const canAfford = useCallback(
    (amount: number) => {
      return pointsManager.canAfford(playerId, amount);
    },
    [playerId, pointsManager]
  );

  const refresh = useCallback(() => {
    const state = pointsManager.getPlayerState(playerId);
    if (state) {
      setCurrentPoints(state.currentPoints);
      setTotalEarned(state.totalEarned);
      setTotalSpent(state.totalSpent);
    }
  }, [playerId, pointsManager]);

  return {
    // State
    currentPoints,
    totalEarned,
    totalSpent,
    
    // Actions
    addBulletHit,
    addZombieKill,
    addHeadshotKill,
    addKnifeKill,
    addRepairBarricade,
    spendPoints,
    canAfford,
    refresh,
    
    // Manager reference for advanced usage
    manager: pointsManager,
  };
}

/**
 * Hook to subscribe to any points change (useful for sound effects, achievements, etc.)
 */
export function usePointsListener(
  callback: (playerId: string, result: PointsOperationResult) => void,
  manager?: PlayerPointsManager
) {
  const pointsManager = manager ?? getPointsManager();

  useEffect(() => {
    const unsubscribe = pointsManager.subscribe(callback);
    return unsubscribe;
  }, [callback, pointsManager]);
}

/**
 * Hook to get the points manager instance
 */
export function usePointsManager(manager?: PlayerPointsManager) {
  return manager ?? getPointsManager();
}
