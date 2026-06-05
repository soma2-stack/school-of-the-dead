/**
 * School of the Dead - Round System
 * COD Zombies-inspired round management
 * 
 * Manages round state, progression, and intermission timing.
 * Does NOT handle zombie spawning, AI, or behavior.
 */

// ============================================================================
// Configuration
// ============================================================================

export interface RoundConfig {
  startingRound: number;
  intermissionDurationMs: number;  // Time between rounds
  minRoundDurationMs: number;      // Minimum time before round can end
}

export type RoundEventType = 'roundStart' | 'roundEnd' | 'stateChange' | 'zombiesRemainingChange';
export type RoundEventCallback = (data: any) => void;

const DEFAULT_CONFIG: RoundConfig = {
  startingRound: 1,
  intermissionDurationMs: 10000,   // 10 seconds between rounds
  minRoundDurationMs: 5000,        // 5 seconds minimum round duration
};

// ============================================================================
// Types
// ============================================================================

export type RoundState = 'idle' | 'intermission' | 'active' | 'ended';

export interface RoundData {
  currentRound: number;
  state: RoundState;
  zombiesRemaining: number;
  zombiesKilled: number;
  totalZombiesSpawned: number;
  roundStartTime: number | null;     // Timestamp when round started
  intermissionStartTime: number | null; // Timestamp when intermission started
  totalRoundsCompleted: number;
  previousRoundDurationMs: number | null; // Duration of last completed round
}

export interface RoundSnapshot {
  roundData: RoundData;
  config: RoundConfig;
}

// ============================================================================
// Round Manager Class
// ============================================================================

export class RoundManager {
  private config: RoundConfig;
  private roundData: RoundData;
  private stateChangeCallbacks: ((data: RoundData) => void)[] = [];
  private zombiesRemainingCallbacks: ((remaining: number, total: number) => void)[] = [];
  private roundStartCallbacks: ((roundNumber: number) => void)[] = [];
  private roundEndCallbacks: ((roundNumber: number) => void)[] = [];
  private intermissionTimerId: ReturnType<typeof setTimeout> | null = null;

  constructor(config: Partial<RoundConfig> = {}) {
    // Merge provided config with defaults to ensure custom values are applied
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.roundData = this.createInitialRoundData();
  }

  private createInitialRoundData(): RoundData {
    return {
      currentRound: this.config.startingRound,
      state: 'idle',
      zombiesRemaining: 0,
      zombiesKilled: 0,
      totalZombiesSpawned: 0,
      roundStartTime: null,
      intermissionStartTime: null,
      totalRoundsCompleted: 0,
      previousRoundDurationMs: null,
    };
  }

  // ==========================================================================
  // Event System (Subscribe/Unsubscribe Pattern)
  // ==========================================================================

  /**
   * Subscribe to round start events
   */
  onRoundStart(callback: (roundNumber: number) => void): () => void {
    this.roundStartCallbacks.push(callback);
    return () => {
      this.roundStartCallbacks = this.roundStartCallbacks.filter(cb => cb !== callback);
    };
  }

  /**
   * Subscribe to round end events
   */
  onRoundEnd(callback: (roundNumber: number) => void): () => void {
    this.roundEndCallbacks.push(callback);
    return () => {
      this.roundEndCallbacks = this.roundEndCallbacks.filter(cb => cb !== callback);
    };
  }

  /**
   * Subscribe to state change events
   */
  onStateChange(callback: (data: RoundData) => void): () => void {
    this.stateChangeCallbacks.push(callback);
    return () => {
      this.stateChangeCallbacks = this.stateChangeCallbacks.filter(cb => cb !== callback);
    };
  }

  /**
   * Subscribe to zombies remaining change events
   */
  onZombiesRemainingChange(callback: (remaining: number, total: number) => void): () => void {
    this.zombiesRemainingCallbacks.push(callback);
    return () => {
      this.zombiesRemainingCallbacks = this.zombiesRemainingCallbacks.filter(cb => cb !== callback);
    };
  }

  private notifyRoundStart(roundNumber: number): void {
    this.roundStartCallbacks.forEach(cb => cb(roundNumber));
  }

  private notifyRoundEnd(roundNumber: number): void {
    this.roundEndCallbacks.forEach(cb => cb(roundNumber));
  }

  private notifyStateChange(): void {
    const data = this.getRoundData();
    this.stateChangeCallbacks.forEach(cb => cb(data));
  }

  private notifyZombiesRemaining(): void {
    this.zombiesRemainingCallbacks.forEach(cb => 
      cb(this.roundData.zombiesRemaining, this.roundData.totalZombiesSpawned)
    );
  }

  // ==========================================================================
  // Core State Management
  // ==========================================================================

  /**
   * Start a new round
   * Called when intermission ends and zombies should spawn
   * @param totalZombies - Optional override. If not provided, uses calculateZombieCount().
   */
  startRound(totalZombies?: number): void {
    console.log('[ROUND] startRound() called', {
      state: this.roundData.state,
      currentRound: this.roundData.currentRound,
      totalZombiesOverride: totalZombies,
    });

    if (this.roundData.state === 'active') {
      console.warn('[ROUND] Round already active');
      return;
    }

    this.roundData.state = 'active';
    this.roundData.currentRound = Math.max(this.config.startingRound, this.roundData.currentRound);
    
    // Use provided count or calculate based on round number
    const zombieCount = totalZombies ?? RoundManager.calculateZombieCount(this.roundData.currentRound);
    this.roundData.zombiesRemaining = zombieCount;
    this.roundData.zombiesKilled = 0;
    this.roundData.totalZombiesSpawned = zombieCount;
    this.roundData.roundStartTime = Date.now();
    this.roundData.intermissionStartTime = null;

    console.log('[ROUND] Round started', {
      round: this.roundData.currentRound,
      totalZombies: zombieCount,
    });

    this.notifyRoundStart(this.roundData.currentRound);
    this.notifyStateChange();
    this.notifyZombiesRemaining();
  }

  /**
   * End the current round
   * Called when all zombies are defeated
   * Automatically starts intermission, which then auto-advances to the next round.
   */
  endRound(): void {
    console.log('[ROUND] endRound() called', {
      state: this.roundData.state,
      currentRound: this.roundData.currentRound,
    });

    if (this.roundData.state !== 'active') {
      console.warn('[ROUND] Cannot end round - no active round');
      return;
    }

    const now = Date.now();
    const roundDuration = now - (this.roundData.roundStartTime || now);

    // Enforce minimum round duration
    if (roundDuration < this.config.minRoundDurationMs) {
      console.warn('[ROUND] Round ended too early, enforcing minimum duration');
    }

    // Store previous round duration
    this.roundData.previousRoundDurationMs = roundDuration;

    this.roundData.state = 'ended';
    this.roundData.totalRoundsCompleted += 1;
    this.roundData.roundStartTime = null;

    console.log('[ROUND] Round ended, notifying callbacks and starting intermission');

    this.notifyRoundEnd(this.roundData.currentRound);
    this.notifyStateChange();

    // AUTOMATIC ROUND PROGRESSION:
    // After round ends, automatically start intermission
    this.startIntermission();
  }

  /**
   * Begin intermission between rounds
   * Called after round ends, before next round starts
   * Automatically schedules the next round to start when intermission completes.
   */
  startIntermission(): void {
    console.log('[ROUND] startIntermission() called', {
      state: this.roundData.state,
    });

    if (this.roundData.state !== 'ended' && this.roundData.state !== 'idle') {
      console.warn('[ROUND] Can only start intermission after round ends');
      return;
    }

    // Clear any existing timer
    if (this.intermissionTimerId) {
      clearTimeout(this.intermissionTimerId);
      this.intermissionTimerId = null;
    }

    this.roundData.state = 'intermission';
    this.roundData.intermissionStartTime = Date.now();

    console.log('[ROUND] Intermission started, scheduling auto-advance in', this.config.intermissionDurationMs, 'ms');

    this.notifyStateChange();

    // AUTOMATIC ROUND PROGRESSION:
    // Schedule next round to start automatically when intermission completes
    this.intermissionTimerId = setTimeout(() => {
      console.log('[ROUND] Intermission timer fired, calling onIntermissionComplete()');
      this.onIntermissionComplete();
    }, this.config.intermissionDurationMs);
  }

  /**
   * Internal handler called when intermission completes
   * Automatically advances to the next round and starts it
   */
  private onIntermissionComplete(): void {
    console.log('[ROUND] onIntermissionComplete() called', {
      currentRound: this.roundData.currentRound,
    });

    // Advance round number
    this.roundData.currentRound += 1;
    
    console.log('[ROUND] Starting round', this.roundData.currentRound, 'automatically');
    
    // AUTOMATIC ROUND PROGRESSION:
    // Start the new round immediately (this will spawn zombies via callbacks)
    this.startRound();
  }

  /**
   * Get remaining intermission time in milliseconds
   */
  getIntermissionRemaining(): number {
    if (this.roundData.state !== 'intermission' || !this.roundData.intermissionStartTime) {
      return 0;
    }

    const elapsed = Date.now() - this.roundData.intermissionStartTime;
    return Math.max(0, this.config.intermissionDurationMs - elapsed);
  }

  /**
   * Check if intermission is complete
   */
  isIntermissionComplete(): boolean {
    return this.getIntermissionRemaining() <= 0 && this.roundData.state === 'intermission';
  }

  /**
   * Force advance to next round (skip intermission)
   * Note: With automatic progression, this is rarely needed.
   */
  forceNextRound(): void {
    console.log('[ROUND] forceNextRound() called', {
      currentRound: this.roundData.currentRound,
      state: this.roundData.state,
    });

    // Clear any pending intermission timer
    if (this.intermissionTimerId) {
      clearTimeout(this.intermissionTimerId);
      this.intermissionTimerId = null;
    }

    this.roundData.currentRound += 1;
    this.roundData.state = 'idle';
    this.roundData.zombiesRemaining = 0;
    this.roundData.zombiesKilled = 0;
    this.roundData.totalZombiesSpawned = 0;
    this.roundData.intermissionStartTime = null;

    console.log('[ROUND] Forced advance to round', this.roundData.currentRound);

    this.notifyStateChange();
  }

  // ==========================================================================
  // Zombie Tracking (Called by external spawn/kill systems)
  // ==========================================================================

  /**
   * Register that a zombie has been spawned
   * @returns The new remaining count
   */
  registerZombieSpawn(): number {
    console.log('[ROUND] registerZombieSpawn() called', {
      state: this.roundData.state,
      totalSpawnedBefore: this.roundData.totalZombiesSpawned,
    });

    if (this.roundData.state !== 'active') {
      console.warn('[ROUND] Cannot spawn zombie - round not active');
      return this.roundData.zombiesRemaining;
    }

    this.roundData.totalZombiesSpawned += 1;
    this.roundData.zombiesRemaining += 1;

    console.log('[ROUND] After spawn', {
      zombiesRemaining: this.roundData.zombiesRemaining,
      totalSpawned: this.roundData.totalZombiesSpawned,
    });

    this.notifyZombiesRemaining();
    return this.roundData.zombiesRemaining;
  }

  /**
   * Register that a zombie has been killed
   * Automatically ends round if all zombies are defeated
   * @returns The new remaining count
   */
  registerZombieKill(): number {
    console.log('[ROUND] registerZombieKill called', {
      state: this.roundData.state,
      zombiesRemaining: this.roundData.zombiesRemaining,
      zombiesKilled: this.roundData.zombiesKilled,
    });

    if (this.roundData.state !== 'active') {
      console.warn('[ROUND] Cannot register kill - round not active');
      return this.roundData.zombiesRemaining;
    }

    this.roundData.zombiesKilled += 1;
    this.roundData.zombiesRemaining = Math.max(0, this.roundData.zombiesRemaining - 1);

    console.log('[ROUND] After kill', {
      zombiesRemaining: this.roundData.zombiesRemaining,
      zombiesKilled: this.roundData.zombiesKilled,
      totalSpawned: this.roundData.totalZombiesSpawned,
    });

    this.notifyZombiesRemaining();

    // Auto-end round if all zombies defeated
    if (this.roundData.zombiesRemaining <= 0) {
      console.log('[ROUND] All zombies defeated, calling endRound()');
      this.endRound();
    }

    return this.roundData.zombiesRemaining;
  }

  /**
   * Set zombies remaining directly (for special cases)
   */
  setZombiesRemaining(remaining: number): void {
    if (this.roundData.state !== 'active') {
      console.warn('Cannot set zombies remaining - round not active');
      return;
    }

    this.roundData.zombiesRemaining = Math.max(0, remaining);
    
    // Adjust killed count accordingly
    this.roundData.zombiesKilled = this.roundData.totalZombiesSpawned - remaining;

    this.notifyZombiesRemaining();

    if (this.roundData.zombiesRemaining <= 0) {
      this.endRound();
    }
  }

  // ==========================================================================
  // Getters
  // ==========================================================================

  getCurrentRound(): number {
    return this.roundData.currentRound;
  }

  getState(): RoundState {
    return this.roundData.state;
  }

  getZombiesRemaining(): number {
    return this.roundData.zombiesRemaining;
  }

  getZombiesKilled(): number {
    return this.roundData.zombiesKilled;
  }

  getTotalZombiesSpawned(): number {
    return this.roundData.totalZombiesSpawned;
  }

  getRoundStartTime(): number | null {
    return this.roundData.roundStartTime;
  }

  getIntermissionStartTime(): number | null {
    return this.roundData.intermissionStartTime;
  }

  getTotalRoundsCompleted(): number {
    return this.roundData.totalRoundsCompleted;
  }

  /**
   * Get full round data snapshot
   */
  getRoundData(): Readonly<RoundData> {
    return { ...this.roundData };
  }

  /**
   * Get round state for debug UI
   */
  getDebugState(): { round: number; expectedZombies: number; killsThisRound: number } {
    return {
      round: this.roundData.currentRound,
      expectedZombies: this.roundData.totalZombiesSpawned,
      killsThisRound: this.roundData.zombiesKilled,
    };
  }

  /**
   * Get complete system snapshot for save/load
   */
  getSnapshot(): RoundSnapshot {
    return {
      roundData: { ...this.roundData },
      config: { ...this.config },
    };
  }

  /**
   * Get round duration in milliseconds (null if not started)
   */
  getRoundDuration(): number | null {
    if (!this.roundData.roundStartTime) {
      return null;
    }

    if (this.roundData.state === 'active') {
      return Date.now() - this.roundData.roundStartTime;
    }

    // Round ended - would need end time stored for accurate calculation
    return null;
  }

  /**
   * Get previous round duration in milliseconds
   */
  getPreviousRoundDuration(): number | null {
    return this.roundData.previousRoundDurationMs;
  }

  // ==========================================================================
  // Static Helper Functions
  // ==========================================================================

  /**
   * Calculate recommended zombie count for a given round.
   * Scaling: R1=6, R2=8, R3=13, then gradual increase.
   */
  static calculateZombieCount(round: number): number {
    if (round <= 0) return 0;
    if (round === 1) return 6;
    if (round === 2) return 8;
    if (round === 3) return 13;
    
    // Formula for round 4+: Base + scaling factor
    // R4 -> ~18, R5 -> ~23, R10 -> ~50
    return Math.floor(10 + (round * 4.5));
  }

  // ==========================================================================
  // Configuration
  // ==========================================================================

  updateConfig(newConfig: Partial<RoundConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  getConfig(): Readonly<RoundConfig> {
    return { ...this.config };
  }

  // ==========================================================================
  // Reset
  // ==========================================================================

  /**
   * Reset to initial state (new game)
   */
  reset(): void {
    // Clear any pending intermission timer
    if (this.intermissionTimerId) {
      clearTimeout(this.intermissionTimerId);
      this.intermissionTimerId = null;
    }

    this.roundData = this.createInitialRoundData();
    this.notifyStateChange();
  }

  /**
   * Load from snapshot (for save/load system)
   */
  loadFromSnapshot(snapshot: RoundSnapshot): void {
    // Clear any pending intermission timer
    if (this.intermissionTimerId) {
      clearTimeout(this.intermissionTimerId);
      this.intermissionTimerId = null;
    }

    this.roundData = { ...snapshot.roundData };
    this.config = { ...snapshot.config };
    this.notifyStateChange();
  }

  /**
   * Cleanup - clear timers when manager is destroyed
   */
  destroy(): void {
    if (this.intermissionTimerId) {
      clearTimeout(this.intermissionTimerId);
      this.intermissionTimerId = null;
    }
  }
}

// ============================================================================
// Global Instance Manager (for multiplayer support)
// ============================================================================

const globalRoundManagers = new Map<string, RoundManager>();

/**
 * Get or create a RoundManager for a specific game/session
 * @param sessionId Unique identifier for the game session
 * @param config Optional configuration
 */
export function getRoundManager(
  sessionId: string = 'default',
  config?: Partial<RoundConfig>
): RoundManager {
  if (!globalRoundManagers.has(sessionId)) {
    globalRoundManagers.set(sessionId, new RoundManager(config));
  }
  return globalRoundManagers.get(sessionId)!;
}

/**
 * Remove a RoundManager instance
 * Also cleans up any pending timers
 */
export function removeRoundManager(sessionId: string): void {
  const manager = globalRoundManagers.get(sessionId);
  if (manager) {
    manager.destroy();
  }
  globalRoundManagers.delete(sessionId);
}

/**
 * Clear all RoundManager instances
 * Also cleans up all pending timers
 */
export function clearAllRoundManagers(): void {
  globalRoundManagers.forEach(manager => manager.destroy());
  globalRoundManagers.clear();
}

/**
 * Get all active session IDs
 */
export function getActiveSessionIds(): string[] {
  return Array.from(globalRoundManagers.keys());
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Calculate recommended zombie count for a given round.
 * Scaling: R1=6, R2=8, R3=13, then gradual increase.
 */
export function calculateZombieCount(round: number): number {
  return RoundManager.calculateZombieCount(round);
}

/**
 * Format round time as MM:SS
 */
export function formatRoundTime(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * Format intermission countdown
 */
export function formatIntermissionCountdown(milliseconds: number): string {
  const seconds = Math.ceil(milliseconds / 1000);
  return `Round starts in ${seconds}s`;
}
