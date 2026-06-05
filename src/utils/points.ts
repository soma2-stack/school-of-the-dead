/**
 * School of the Dead - COD Zombies Points System
 * 
 * A modular, configurable points system inspired by Call of Duty Zombies.
 * Supports multiplayer, save/load, and future expansion.
 */

import { logger } from './logger';
// ============================================================================
// CONFIGURATION - All point values are centralized here for easy tuning
// ============================================================================

export interface PointsConfig {
  startingPoints: number;
  bulletHit: number;
  zombieKill: number;
  headshotKill: number;
  knifeKill: number;
  repairBarricade: number;
}

export const DEFAULT_POINTS_CONFIG: PointsConfig = {
  startingPoints: 500,
  bulletHit: 10,
  zombieKill: 60,
  headshotKill: 100,
  knifeKill: 130,
  repairBarricade: 10,
};

// Freeze the default config to prevent accidental mutation
Object.freeze(DEFAULT_POINTS_CONFIG);

// ============================================================================
// DATA STRUCTURES
// ============================================================================

/**
 * Represents the current state of a player's points
 */
export interface PlayerPointsState {
  playerId: string;
  currentPoints: number;
  totalEarned: number;      // Lifetime earnings (for stats)
  totalSpent: number;       // Lifetime spending (for stats)
  lastUpdated: number;      // Timestamp in milliseconds
}

/**
 * Serializable format for save/load operations
 */
export interface PlayerPointsData {
  playerId: string;
  currentPoints: number;
  totalEarned: number;
  totalSpent: number;
  savedAt: number;
  version: string;
}

/**
 * Result of a points operation
 */
export interface PointsOperationResult {
  success: boolean;
  previousPoints: number;
  newPoints: number;
  amountChanged: number;
  reason: PointsEvent;
}

/**
 * Event types for points changes (useful for achievements, sound effects, etc.)
 */
export type PointsEvent =
  | 'bullet_hit'
  | 'zombie_kill'
  | 'headshot_kill'
  | 'knife_kill'
  | 'repair_barricade'
  | 'purchase'
  | 'starting_bonus'
  | 'manual_adjustment';

/**
 * Listener callback for points changes
 */
export type PointsChangeListener = (
  playerId: string,
  result: PointsOperationResult
) => void;

// ============================================================================
// PLAYER POINTS MANAGER CLASS
// ============================================================================

export class PlayerPointsManager {
  private config: PointsConfig;
  private players: Map<string, PlayerPointsState>;
  private listeners: Set<PointsChangeListener>;

  constructor(config: PointsConfig = DEFAULT_POINTS_CONFIG) {
    this.config = { ...config };
    this.players = new Map();
    this.listeners = new Set();
  }

  // --------------------------------------------------------------------------
  // Configuration
  // --------------------------------------------------------------------------

  /**
   * Update the points configuration
   */
  setConfig(config: Partial<PointsConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Get current configuration
   */
  getConfig(): Readonly<PointsConfig> {
    return { ...this.config };
  }

  // --------------------------------------------------------------------------
  // Player Management
  // --------------------------------------------------------------------------

  /**
   * Register a new player or reset an existing player to starting points
   */
  registerPlayer(playerId: string): PlayerPointsState {
    const initialState: PlayerPointsState = {
      playerId,
      currentPoints: this.config.startingPoints,
      totalEarned: this.config.startingPoints,
      totalSpent: 0,
      lastUpdated: Date.now(),
    };

    this.players.set(playerId, initialState);
    
    // Notify listeners of starting bonus
    this.notifyListeners(playerId, {
      success: true,
      previousPoints: 0,
      newPoints: initialState.currentPoints,
      amountChanged: this.config.startingPoints,
      reason: 'starting_bonus',
    });

    return initialState;
  }

  /**
   * Check if a player is registered
   */
  hasPlayer(playerId: string): boolean {
    return this.players.has(playerId);
  }

  /**
   * Get a player's current points state
   */
  getPlayerState(playerId: string): PlayerPointsState | undefined {
    const state = this.players.get(playerId);
    return state ? { ...state } : undefined;
  }

  /**
   * Get a player's current points (convenience method)
   */
  getPoints(playerId: string): number {
    return this.players.get(playerId)?.currentPoints ?? 0;
  }

  /**
   * Remove a player from the system
   */
  removePlayer(playerId: string): boolean {
    return this.players.delete(playerId);
  }

  /**
   * Get all registered player IDs
   */
  getAllPlayerIds(): string[] {
    return Array.from(this.players.keys());
  }

  // --------------------------------------------------------------------------
  // Affordability Checks
  // --------------------------------------------------------------------------

  /**
   * Check if a player can afford a purchase
   */
  canAfford(playerId: string, cost: number): boolean {
    const player = this.players.get(playerId);
    if (!player) return false;
    return player.currentPoints >= cost;
  }

  /**
   * Get the maximum amount a player can spend
   */
  getMaxAffordableAmount(playerId: string): number {
    return this.players.get(playerId)?.currentPoints ?? 0;
  }

  // --------------------------------------------------------------------------
  // Adding Points
  // --------------------------------------------------------------------------

  /**
   * Add points for a bullet hit on a zombie
   */
  addBulletHit(playerId: string): PointsOperationResult | null {
    return this.addPoints(playerId, this.config.bulletHit, 'bullet_hit');
  }

  /**
   * Add points for a standard zombie kill
   */
  addZombieKill(playerId: string): PointsOperationResult | null {
    return this.addPoints(playerId, this.config.zombieKill, 'zombie_kill');
  }

  /**
   * Add points for a headshot kill
   */
  addHeadshotKill(playerId: string): PointsOperationResult | null {
    return this.addPoints(playerId, this.config.headshotKill, 'headshot_kill');
  }

  /**
   * Add points for a knife kill
   */
  addKnifeKill(playerId: string): PointsOperationResult | null {
    return this.addPoints(playerId, this.config.knifeKill, 'knife_kill');
  }

  /**
   * Add points for repairing a barricade board
   */
  addRepairBarricade(playerId: string): PointsOperationResult | null {
    return this.addPoints(playerId, this.config.repairBarricade, 'repair_barricade');
  }

  /**
   * Generic method to add points
   * Ensures points never go negative (though adding shouldn't cause that anyway)
   */
  private addPoints(
    playerId: string,
    amount: number,
    reason: PointsEvent
  ): PointsOperationResult | null {
    const player = this.players.get(playerId);
    logger.points.debug('addPoints called:', { playerId, amount, reason, playerExists: !!player });
    if (!player) return null;

    if (amount <= 0) {
      return {
        success: false,
        previousPoints: player.currentPoints,
        newPoints: player.currentPoints,
        amountChanged: 0,
        reason,
      };
    }

    const previousPoints = player.currentPoints;
    player.currentPoints += amount;
    player.totalEarned += amount;
    player.lastUpdated = Date.now();
    logger.points.debug('Points updated:', { previousPoints, newPoints: player.currentPoints });

    const result: PointsOperationResult = {
      success: true,
      previousPoints,
      newPoints: player.currentPoints,
      amountChanged: amount,
      reason,
    };

    logger.points.debug('Notifying listeners, listener count:', this.listeners.size);
    this.notifyListeners(playerId, result);
    return result;
  }

  // --------------------------------------------------------------------------
  // Spending Points
  // --------------------------------------------------------------------------

  /**
   * Spend points on a purchase
   * Returns null if player doesn't exist, or result with success=false if insufficient funds
   */
  spendPoints(
    playerId: string,
    amount: number,
    description?: string
  ): PointsOperationResult | null {
    const player = this.players.get(playerId);
    if (!player) return null;

    // Prevent negative spending
    if (amount <= 0) {
      return {
        success: false,
        previousPoints: player.currentPoints,
        newPoints: player.currentPoints,
        amountChanged: 0,
        reason: 'purchase',
      };
    }

    // Check if player can afford
    if (player.currentPoints < amount) {
      return {
        success: false,
        previousPoints: player.currentPoints,
        newPoints: player.currentPoints,
        amountChanged: 0,
        reason: 'purchase',
      };
    }

    const previousPoints = player.currentPoints;
    player.currentPoints -= amount;
    player.totalSpent += amount;
    player.lastUpdated = Date.now();

    const result: PointsOperationResult = {
      success: true,
      previousPoints,
      newPoints: player.currentPoints,
      amountChanged: -amount,
      reason: 'purchase',
    };

    this.notifyListeners(playerId, result);
    return result;
  }

  // --------------------------------------------------------------------------
  // Manual Adjustment (for debugging or special events)
  // --------------------------------------------------------------------------

  /**
   * Manually adjust points (positive or negative)
   * Will not allow points to go below zero
   */
  adjustPoints(
    playerId: string,
    amount: number,
    reason: 'manual_adjustment' | 'starting_bonus' = 'manual_adjustment'
  ): PointsOperationResult | null {
    const player = this.players.get(playerId);
    if (!player) return null;

    const previousPoints = player.currentPoints;
    let actualAmount = amount;

    // Prevent going below zero
    if (previousPoints + amount < 0) {
      actualAmount = -previousPoints;
    }

    player.currentPoints += actualAmount;

    if (actualAmount > 0) {
      player.totalEarned += actualAmount;
    } else {
      player.totalSpent += Math.abs(actualAmount);
    }

    player.lastUpdated = Date.now();

    const result: PointsOperationResult = {
      success: true,
      previousPoints,
      newPoints: player.currentPoints,
      amountChanged: actualAmount,
      reason,
    };

    this.notifyListeners(playerId, result);
    return result;
  }

  // --------------------------------------------------------------------------
  // Event Listeners
  // --------------------------------------------------------------------------

  /**
   * Subscribe to points change events
   */
  subscribe(listener: PointsChangeListener): () => void {
    this.listeners.add(listener);
    // Return unsubscribe function
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * Notify all listeners of a points change
   */
  private notifyListeners(playerId: string, result: PointsOperationResult): void {
    logger.points.debug('notifyListeners called:', { playerId, result, listenerCount: this.listeners.size });
    this.listeners.forEach((listener, index) => {
      logger.points.debug(`Calling listener ${index}`);
      try {
        listener(playerId, result);
        logger.points.debug(`Listener ${index} completed`);
      } catch (error) {
        console.error('Error in points change listener:', error);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Save/Load Support
  // --------------------------------------------------------------------------

  /**
   * Serialize a player's points data for saving
   */
  serializePlayer(playerId: string): PlayerPointsData | null {
    const player = this.players.get(playerId);
    if (!player) return null;

    return {
      playerId: player.playerId,
      currentPoints: player.currentPoints,
      totalEarned: player.totalEarned,
      totalSpent: player.totalSpent,
      savedAt: Date.now(),
      version: '1.0.0',
    };
  }

  /**
   * Deserialize and load a player's points data
   */
  deserializePlayer(data: PlayerPointsData): PlayerPointsState {
    const state: PlayerPointsState = {
      playerId: data.playerId,
      currentPoints: Math.max(0, data.currentPoints), // Ensure non-negative
      totalEarned: data.totalEarned,
      totalSpent: data.totalSpent,
      lastUpdated: data.savedAt,
    };

    this.players.set(state.playerId, state);
    return state;
  }

  /**
   * Export all players' data for saving
   */
  exportAllPlayers(): PlayerPointsData[] {
    return Array.from(this.players.values()).map((player) => ({
      playerId: player.playerId,
      currentPoints: player.currentPoints,
      totalEarned: player.totalEarned,
      totalSpent: player.totalSpent,
      savedAt: player.lastUpdated,
      version: '1.0.0',
    }));
  }

  /**
   * Import multiple players' data
   */
  importAllPlayers(dataArray: PlayerPointsData[]): void {
    dataArray.forEach((data) => {
      this.deserializePlayer(data);
    });
  }

  // --------------------------------------------------------------------------
  // Statistics
  // --------------------------------------------------------------------------

  /**
   * Get statistics for a player
   */
  getPlayerStats(playerId: string): {
    currentPoints: number;
    totalEarned: number;
    totalSpent: number;
    netGain: number;
  } | null {
    const player = this.players.get(playerId);
    if (!player) return null;

    return {
      currentPoints: player.currentPoints,
      totalEarned: player.totalEarned,
      totalSpent: player.totalSpent,
      netGain: player.totalEarned - player.totalSpent,
    };
  }
}

// ============================================================================
// SINGLETON INSTANCE FOR EASY ACCESS
// ============================================================================

/**
 * Global points manager instance
 * Use this for quick access in your game
 */
let globalPointsManager: PlayerPointsManager | null = null;

export function getPointsManager(): PlayerPointsManager {
  if (!globalPointsManager) {
    globalPointsManager = new PlayerPointsManager();
  }
  return globalPointsManager;
}

export function resetPointsManager(config?: PointsConfig): PlayerPointsManager {
  globalPointsManager = new PlayerPointsManager(config);
  return globalPointsManager;
}
