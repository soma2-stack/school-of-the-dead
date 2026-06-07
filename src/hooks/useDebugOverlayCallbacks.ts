import { getPointsManager } from '../utils/points';
import { getRoundManager, RoundManager } from '../utils/rounds';
import { ZombieManager } from '../utils/zombies';

export interface DebugOverlayCallbacks {
  onAddPoints: (amount: number) => void;
  onSetPoints: (amount: number) => void;
  onStartRound: (round: number) => void;
  onNextRound: () => void;
  onPreviousRound: () => void;
  onForceEndRound: () => void;
  onSpawnCurrentWave: () => void;
  onKillAllZombies: () => void;
  onSpawnZombie: (count: number) => void;
}

export interface UseDebugOverlayCallbacksDeps {
  zombieManagerRef: React.MutableRefObject<ZombieManager | null>;
  roundState: { round: number; zombiesAlive: number; spawnStatus: string };
  setRoundState: (state: { round: number; zombiesAlive: number; spawnStatus: string }) => void;
}

/**
 * Hook that provides callback functions for the DebugOverlay component.
 * Handles points manipulation and round system debug controls.
 */
export function useDebugOverlayCallbacks(deps: UseDebugOverlayCallbacksDeps): DebugOverlayCallbacks {
  const { zombieManagerRef, roundState, setRoundState } = deps;

  const addPlayerPoints = (amount: number) => {
    console.log('[APP] onAddPoints called with amount:', amount);
    const pointsManager = getPointsManager();
    const playerId = 'player1';
    
    // Ensure player is registered
    if (!pointsManager.hasPlayer(playerId)) {
      console.log('[APP] Registering player:', playerId);
      pointsManager.registerPlayer(playerId);
    }
    
    const currentState = pointsManager.getPlayerState(playerId);
    console.log('[APP] Points BEFORE add:', currentState?.currentPoints ?? 0);
    
    const result = pointsManager.adjustPoints(playerId, amount, 'manual_adjustment');
    console.log('[APP] adjustPoints result:', result);
    
    const newState = pointsManager.getPlayerState(playerId);
    console.log('[APP] Points AFTER add:', newState?.currentPoints ?? 0);
  };

  const setPlayerPoints = (amount: number) => {
    console.log('[APP] onSetPoints called with amount:', amount);
    const pointsManager = getPointsManager();
    const playerId = 'player1';
    
    if (!pointsManager.hasPlayer(playerId)) {
      pointsManager.registerPlayer(playerId);
    }
    
    const currentState = pointsManager.getPlayerState(playerId);
    const currentPoints = currentState?.currentPoints ?? 0;
    const delta = amount - currentPoints;
    
    console.log('[APP] Setting points from', currentPoints, 'to', amount, '(delta:', delta, ')');
    const result = pointsManager.adjustPoints(playerId, delta, 'manual_adjustment');
    console.log('[APP] adjustPoints result:', result);
  };

  const startDebugRound = (round: number) => {
    console.log('[ROUND TRACE] ENTER onStartRound handler in App.tsx');
    console.log('[ROUND TRACE] onStartRound called with round:', round);
    const roundManager = getRoundManager();
    console.log('[ROUND TRACE] RoundManager instance:', roundManager);
    console.log('[ROUND TRACE] RoundManager state before start:', roundManager.getCurrentRound(), 'state:', roundManager.getState());
    console.log('[ROUND TRACE] Calling roundManager.startRound() with:', round);
    roundManager.startRound(round);
    console.log('[ROUND TRACE] RoundManager state after start:', roundManager.getCurrentRound(), 'state:', roundManager.getState());
    // Update React state to reflect changes
    setRoundState({
      round: roundManager.getCurrentRound(),
      zombiesAlive: roundManager.getZombiesRemaining(),
      spawnStatus: roundManager.getState(),
    });
  };

  const goToNextDebugRound = () => {
    console.log('[ROUND FLOW] NEXT ROUND button clicked');
    console.log('[APP] onNextRound called');
    const roundManager = getRoundManager();
    const currentRound = roundManager.getCurrentRound();
    console.log('[APP] Current round before next:', currentRound, 'state:', roundManager.getState());
    console.log('[ROUND FLOW] Calling roundManager.forceNextRound()');
    roundManager.forceNextRound();
    console.log('[APP] Current round after next:', roundManager.getCurrentRound(), 'state:', roundManager.getState());
    setRoundState({
      round: roundManager.getCurrentRound(),
      zombiesAlive: roundManager.getZombiesRemaining(),
      spawnStatus: roundManager.getState(),
    });
  };

  const goToPreviousDebugRound = () => {
    console.log('[APP] onPreviousRound called');
    const roundManager = getRoundManager();
    const currentRound = roundManager.getCurrentRound();
    console.log('[APP] Current round before prev:', currentRound);
    // No previousRound method exists - manually decrement if possible
    const newRound = Math.max(1, currentRound - 1);
    // We can't directly set the round, so we just update React state for display
    // The actual round manager doesn't support going backwards
    console.log('[APP] Cannot go to previous round via RoundManager (not supported). Display only:', newRound);
    setRoundState({
      round: newRound,
      zombiesAlive: roundManager.getZombiesRemaining(),
      spawnStatus: roundManager.getState(),
    });
  };

  const forceEndDebugRound = () => {
    console.log('[ROUND FLOW] FORCE END ROUND button clicked');
    console.log('[APP] onForceEndRound called');
    const roundManager = getRoundManager();
    console.log('[ROUND FLOW] Calling roundManager.endRound()');
    roundManager.endRound();
    setRoundState({
      round: roundManager.getCurrentRound(),
      zombiesAlive: roundManager.getZombiesRemaining(),
      spawnStatus: roundManager.getState(),
    });
  };

  const spawnCurrentDebugWave = () => {
    console.log('[ROUND FLOW] SPAWN CURRENT WAVE button clicked (handler)');
    console.log('[APP] onSpawnCurrentWave called');
    const roundManager = getRoundManager();
    const zombieManager = zombieManagerRef.current;
    
    // LOG STATE BEFORE SPAWNING
    console.log('[ROUND TRACE] Before spawn - current state:', roundManager.getState());
    console.log('[ROUND TRACE] Before spawn - current round:', roundManager.getCurrentRound());
    
    if (zombieManager) {
      // FIX: If round is idle, start it first
      if (roundManager.getState() === 'idle') {
        console.log('[ROUND TRACE] Round is idle, calling startRound() before spawning');
        roundManager.startRound(roundManager.getCurrentRound());
        console.log('[ROUND TRACE] After startRound() - new state:', roundManager.getState());
      }
      
      // spawnCurrentWave doesn't exist on RoundManager - spawn based on round config
      const totalZombies = RoundManager.calculateZombieCount(roundManager.getCurrentRound());
      console.log('[ROUND FLOW] Spawning', totalZombies, 'zombies for round', roundManager.getCurrentRound());
      for (let i = 0; i < totalZombies; i++) {
        zombieManager.spawnZombie();
        roundManager.registerZombieSpawn();
      }
      setRoundState({
        round: roundManager.getCurrentRound(),
        zombiesAlive: roundManager.getZombiesRemaining(),
        spawnStatus: roundManager.getState(),
      });
    }
  };

  const killAllDebugZombies = () => {
    console.log('[APP] onKillAllZombies called');
    const zombieManager = zombieManagerRef.current;
    const roundManager = getRoundManager();
    if (zombieManager) {
      zombieManager.clearAllZombies();
      // Kill all remaining zombies in round manager
      const remaining = roundManager.getZombiesRemaining();
      for (let i = 0; i < remaining; i++) {
        roundManager.registerZombieKill();
      }
      setRoundState({
        round: roundState.round,
        zombiesAlive: roundManager.getZombiesRemaining(),
        spawnStatus: roundManager.getState(),
      });
    }
  };

  const spawnDebugZombies = (count: number) => {
    console.log('[APP] onSpawnZombie called with count:', count);
    const zombieManager = zombieManagerRef.current;
    const roundManager = getRoundManager();
    if (zombieManager) {
      for (let i = 0; i < count; i++) {
        zombieManager.spawnZombie();
        roundManager.registerZombieSpawn();
      }
      setRoundState({
        round: roundState.round,
        zombiesAlive: roundManager.getZombiesRemaining(),
        spawnStatus: roundManager.getState(),
      });
    }
  };

  return {
    onAddPoints: addPlayerPoints,
    onSetPoints: setPlayerPoints,
    onStartRound: startDebugRound,
    onNextRound: goToNextDebugRound,
    onPreviousRound: goToPreviousDebugRound,
    onForceEndRound: forceEndDebugRound,
    onSpawnCurrentWave: spawnCurrentDebugWave,
    onKillAllZombies: killAllDebugZombies,
    onSpawnZombie: spawnDebugZombies,
  };
}
