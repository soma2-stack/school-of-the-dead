/**
 * School of the Dead - Door System
 * COD Zombies-inspired door buying mechanics
 * 
 * Manages doors, player interactions, and purchases.
 * Does NOT handle zombie AI, weapons, perks, or Pack-a-Punch.
 */

import type { BuyableDoorConfig } from '../types';
import { getPointsManager } from './points';
import { playSound } from './audio';

// ============================================================================
// Configuration
// ============================================================================

export interface DoorInteractionConfig {
  maxInteractionDistance: number;  // Units away player can interact
  interactionAngleThreshold: number; // Degrees threshold for "looking at" door
}

const DEFAULT_INTERACTION_CONFIG: DoorInteractionConfig = {
  maxInteractionDistance: 4,
  interactionAngleThreshold: 30, // degrees
};

// ============================================================================
// Door State
// ============================================================================

export interface DoorState extends BuyableDoorConfig {
  meshId?: string;        // Reference to Three.js mesh
  labelMeshId?: string;   // Reference to floating cost label
  barrierMeshId?: string; // Reference to barricade mesh
}

export interface DoorPurchaseResult {
  success: boolean;
  doorId: string;
  reason?: string;
  previousPoints?: number;
  newPoints?: number;
}

// ============================================================================
// Door Events
// ============================================================================

export type DoorEventType = 'doorOpened' | 'purchaseAttempt' | 'interactionStart' | 'interactionEnd';
export type DoorEventCallback = (data: any) => void;

export interface DoorEventData {
  type: DoorEventType;
  doorId: string;
  doorName: string;
  playerId?: string;
  timestamp: number;
}

// ============================================================================
// Default Doors Configuration
// Add new doors here to make them available in the game
// 
// Door positions calculated from ROOM_GAPS and INITIAL_ROOMS in App.tsx:
// Room dimensions: w=width (x-axis), d=depth (z-axis), centered at (cx, cz)
// Wall positions: N wall at cz + d/2, S wall at cz - d/2, E wall at cx + w/2, W wall at cx - w/2
// Gap center is relative to room center, so world position = room_center + relative_offset
//
// Starter Classroom: cx=17.5, cz=-40, w=75, d=60
//   - N gap: side='N', center=-17.5, width=6
//   - N wall at z = -40 + 30 = -10
//   - Door x = 17.5 + (-17.5) = 0, z = -10
//
// Hallway: cx=20, cz=-3, w=80, d=14
//   - S gap: center=-20, width=6 -> x=0, z=-10 (connects to starter)
//   - N gaps: center=-15 (x=5), center=20 (x=40) at z=4
//   - W gap: center=0, width=14 -> x=-20, z=-3 (connects to cafeteria)
//   - E gap: center=0, width=6 -> x=60, z=4 (connects to stairwell)
//
// Science Lab: cx=5, cz=26.5, w=30, d=45
//   - S gap: center=0, width=6 -> x=5, z=4 (connects to hallway)
//
// Library: cx=40, cz=26.5, w=36, d=45
//   - S gap: center=0, width=6 -> x=40, z=4 (connects to hallway)
//
// Cafeteria: cx=-50, cz=-3, w=60, d=50
//   - E gap: center=0, width=14 -> x=-20, z=-3 (connects to hallway)
// ============================================================================

export const DEFAULT_DOORS: BuyableDoorConfig[] = [
  {
    id: 'starter_classroom_door',
    name: 'Starter Classroom Door',
    cost: 750,
    // Starter Classroom: cx=17.5, cz=-40, w=75, d=60
    // N wall at z = -40 + 30 = -10, gap center at x=0 (world coords)
    position: { x: 0, y: 1.5, z: -10 },
    width: 6,
    height: 3,
    connectedRoomId: 'hallway',
    isOpen: false,
  },
  {
    id: 'hallway_science_lab_door',
    name: 'Science Lab Door',
    cost: 1000,
    // Science Lab: cx=5, cz=26.5, w=30, d=45
    // S wall at z = 26.5 - 22.5 = 4, gap center at x=5 (world coords)
    position: { x: 5, y: 1.5, z: 4 },
    width: 6,
    height: 3,
    connectedRoomId: 'science_lab',
    isOpen: false,
  },
  {
    id: 'hallway_library_door',
    name: 'Library Door',
    cost: 1000,
    // Library: cx=40, cz=26.5, w=36, d=45
    // S wall at z = 26.5 - 22.5 = 4, gap center at x=40 (world coords)
    position: { x: 40, y: 1.5, z: 4 },
    width: 6,
    height: 3,
    connectedRoomId: 'library',
    isOpen: false,
  },
  {
    id: 'hallway_cafeteria_door',
    name: 'Cafeteria Entrance',
    cost: 1250,
    // Cafeteria: cx=-50, cz=-3, w=60, d=50
    // E wall at x = -50 + 30 = -20, gap center at z=-3 (world coords)
    position: { x: -20, y: 1.5, z: -3 },
    width: 14,
    height: 3,
    connectedRoomId: 'cafeteria',
    isOpen: false,
  },
];

// ============================================================================
// Door Manager Class
// ============================================================================

export class DoorManager {
  private doors: Map<string, DoorState>;
  private interactionConfig: DoorInteractionConfig;
  private eventCallbacks: Map<DoorEventType, Set<DoorEventCallback>>;
  
  // Track current player interaction state
  private currentInteractedDoor: string | null = null;

  constructor(config: {
    doors?: BuyableDoorConfig[];
    interactionConfig?: Partial<DoorInteractionConfig>;
  } = {}) {
    this.doors = new Map();
    this.eventCallbacks = new Map();
    
    // Initialize with default or provided doors
    const doorConfigs = config.doors ?? DEFAULT_DOORS;
    doorConfigs.forEach(doorConfig => {
      this.addDoor(doorConfig);
    });
    
    // Merge interaction config
    this.interactionConfig = {
      ...DEFAULT_INTERACTION_CONFIG,
      ...(config.interactionConfig ?? {}),
    };
  }

  // ==========================================================================
  // Event System
  // ==========================================================================

  on(eventType: DoorEventType, callback: DoorEventCallback): () => void {
    if (!this.eventCallbacks.has(eventType)) {
      this.eventCallbacks.set(eventType, new Set());
    }
    this.eventCallbacks.get(eventType)!.add(callback);
    
    // Return unsubscribe function
    return () => {
      const callbacks = this.eventCallbacks.get(eventType);
      if (callbacks) {
        callbacks.delete(callback);
      }
    };
  }

  private notifyEvent(eventData: DoorEventData): void {
    const callbacks = this.eventCallbacks.get(eventData.type);
    if (callbacks) {
      callbacks.forEach(cb => {
        try {
          cb(eventData);
        } catch (error) {
          console.error('Error in door event listener:', error);
        }
      });
    }
  }

  // ==========================================================================
  // Door Management
  // ==========================================================================

  /**
   * Add a new door to the system
   */
  addDoor(doorConfig: BuyableDoorConfig): DoorState {
    if (this.doors.has(doorConfig.id)) {
      console.warn(`Door with id '${doorConfig.id}' already exists`);
      return this.doors.get(doorConfig.id)!;
    }

    const doorState: DoorState = {
      ...doorConfig,
      isOpen: false,
    };

    this.doors.set(doorState.id, doorState);
    return doorState;
  }

  /**
   * Remove a door from the system
   */
  removeDoor(doorId: string): boolean {
    return this.doors.delete(doorId);
  }

  /**
   * Get a door by ID
   */
  getDoor(doorId: string): DoorState | undefined {
    return this.doors.get(doorId);
  }

  /**
   * Get all doors
   */
  getAllDoors(): DoorState[] {
    return Array.from(this.doors.values());
  }

  /**
   * Get all closed doors (available for purchase)
   */
  getClosedDoors(): DoorState[] {
    return this.getAllDoors().filter(door => !door.isOpen);
  }

  /**
   * Get door at position (for raycasting/hit testing)
   */
  getDoorAtPosition(x: number, y: number, z: number, tolerance: number = 1): DoorState | undefined {
    for (const door of this.doors.values()) {
      const dx = door.position.x - x;
      const dy = door.position.y - y;
      const dz = door.position.z - z;
      const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
      if (distance <= tolerance) {
        return door;
      }
    }
    return undefined;
  }

  // ==========================================================================
  // Player Interaction
  // ==========================================================================

  /**
   * Check if player is looking at a door and within range
   * @param playerPosition - Player's world position {x, y, z}
   * @param playerDirection - Player's look direction vector {x, y, z} (normalized)
   * @returns The door being looked at, or null
   */
  getLookedAtDoor(
    playerPosition: { x: number; y: number; z: number },
    playerDirection: { x: number; y: number; z: number }
  ): DoorState | null {
    let closestDoor: DoorState | null = null;
    let closestDistance = this.interactionConfig.maxInteractionDistance;

    for (const door of this.doors.values()) {
      // Skip already open doors
      if (door.isOpen) continue;

      // Calculate vector from player to door
      const toDoor = {
        x: door.position.x - playerPosition.x,
        y: door.position.y - playerPosition.y,
        z: door.position.z - playerPosition.z,
      };

      // Calculate distance
      const distance = Math.sqrt(toDoor.x ** 2 + toDoor.y ** 2 + toDoor.z ** 2);

      // Check if within interaction range
      if (distance > this.interactionConfig.maxInteractionDistance) {
        continue;
      }

      // Normalize the vector to door
      const toDoorNorm = {
        x: toDoor.x / distance,
        y: toDoor.y / distance,
        z: toDoor.z / distance,
      };

      // Calculate dot product to determine if player is looking at door
      const dotProduct = 
        playerDirection.x * toDoorNorm.x +
        playerDirection.y * toDoorNorm.y +
        playerDirection.z * toDoorNorm.z;

      // Convert dot product to angle (in degrees)
      const angle = Math.acos(Math.max(-1, Math.min(1, dotProduct))) * (180 / Math.PI);

      // Check if player is looking at door (within angle threshold)
      if (angle <= this.interactionConfig.interactionAngleThreshold) {
        if (distance < closestDistance) {
          closestDistance = distance;
          closestDoor = door;
        }
      }
    }

    return closestDoor;
  }

  /**
   * Update interaction state based on player position and direction
   * @returns The currently interacted door ID or null
   */
  updateInteraction(
    playerPosition: { x: number; y: number; z: number },
    playerDirection: { x: number; y: number; z: number }
  ): string | null {
    const lookedAtDoor = this.getLookedAtDoor(playerPosition, playerDirection);

    // Log when player is within range of any door (for debugging)
    if (lookedAtDoor) {
      console.log(`[Door] Player in range of: ${lookedAtDoor.name} at (${playerPosition.x.toFixed(1)}, ${playerPosition.y.toFixed(1)}, ${playerPosition.z.toFixed(1)})`);
    }

    if (lookedAtDoor) {
      if (this.currentInteractedDoor !== lookedAtDoor.id) {
        // New door interaction started
        this.currentInteractedDoor = lookedAtDoor.id;
        this.notifyEvent({
          type: 'interactionStart',
          doorId: lookedAtDoor.id,
          doorName: lookedAtDoor.name,
          timestamp: Date.now(),
        });
        console.log(`[Door] Detected: ${lookedAtDoor.name} (${lookedAtDoor.cost} points)`);
      }
      return lookedAtDoor.id;
    } else {
      if (this.currentInteractedDoor !== null) {
        // Door interaction ended
        const prevDoorId = this.currentInteractedDoor;
        const prevDoor = this.doors.get(prevDoorId);
        this.currentInteractedDoor = null;
        
        if (prevDoor) {
          this.notifyEvent({
            type: 'interactionEnd',
            doorId: prevDoorId,
            doorName: prevDoor.name,
            timestamp: Date.now(),
          });
        }
      }
      return null;
    }
  }

  /**
   * Get the currently interacted door
   */
  getCurrentInteractedDoor(): DoorState | null {
    if (!this.currentInteractedDoor) return null;
    return this.doors.get(this.currentInteractedDoor) || null;
  }

  // ==========================================================================
  // Door Purchase
  // ==========================================================================

  /**
   * Attempt to purchase and open a door
   * @param doorId - The door to purchase
   * @param playerId - The player attempting purchase
   * @returns Result of the purchase attempt
   */
  purchaseDoor(doorId: string, playerId: string): DoorPurchaseResult {
    const door = this.doors.get(doorId);
    
    if (!door) {
      console.log('[Door] Door not found:', doorId);
      return {
        success: false,
        doorId,
        reason: 'Door not found',
      };
    }

    if (door.isOpen) {
      console.log('[Door] Door already open:', door.name);
      return {
        success: false,
        doorId,
        reason: 'Door already open',
      };
    }

    const pointsManager = getPointsManager();
    
    // Check if player has enough points
    if (!pointsManager.canAfford(playerId, door.cost)) {
      const currentPoints = pointsManager.getPoints(playerId);
      console.log('[Door] Not enough points:', {
        door: door.name,
        cost: door.cost,
        playerPoints: currentPoints,
      });
      
      this.notifyEvent({
        type: 'purchaseAttempt',
        doorId,
        doorName: door.name,
        playerId,
        timestamp: Date.now(),
      });
      
      return {
        success: false,
        doorId,
        reason: 'Not enough points',
        previousPoints: currentPoints,
      };
    }

    // Deduct points
    const result = pointsManager.spendPoints(playerId, door.cost, `Door: ${door.name}`);
    
    if (!result || !result.success) {
      console.log('[Door] Failed to spend points');
      return {
        success: false,
        doorId,
        reason: 'Failed to process payment',
      };
    }

    // Open the door
    door.isOpen = true;
    
    console.log('[Door] Purchased:', {
      door: door.name,
      cost: door.cost,
      playerPoints: result.newPoints,
    });

    // Play purchase sound placeholder
    try {
      playSound('door_purchase');
    } catch (error) {
      // Sound system might not be fully implemented yet
      console.log('[Door] Sound placeholder: door_purchase');
    }

    // Notify event
    this.notifyEvent({
      type: 'doorOpened',
      doorId,
      doorName: door.name,
      playerId,
      timestamp: Date.now(),
    });

    return {
      success: true,
      doorId,
      previousPoints: result.previousPoints,
      newPoints: result.newPoints,
    };
  }

  // ==========================================================================
  // Visual Helpers
  // ==========================================================================

  /**
   * Get display text for door interaction prompt
   */
  getInteractionPrompt(door: DoorState, playerId: string): {
    show: boolean;
    text: string;
    canAfford: boolean;
  } {
    if (door.isOpen) {
      return { show: false, text: '', canAfford: true };
    }

    const pointsManager = getPointsManager();
    const canAfford = pointsManager.canAfford(playerId, door.cost);
    
    return {
      show: true,
      text: canAfford 
        ? `Press E to Open Door (${door.cost})`
        : 'Not Enough Points',
      canAfford,
    };
  }

  // ==========================================================================
  // Serialization
  // ==========================================================================

  /**
   * Export door states for save/load
   */
  exportDoors(): DoorState[] {
    return this.getAllDoors().map(door => ({
      id: door.id,
      name: door.name,
      cost: door.cost,
      position: door.position,
      width: door.width,
      height: door.height,
      connectedRoomId: door.connectedRoomId,
      isOpen: door.isOpen,
    }));
  }

  /**
   * Import door states from save data
   */
  importDoors(doorStates: DoorState[]): void {
    doorStates.forEach(state => {
      if (this.doors.has(state.id)) {
        const existing = this.doors.get(state.id)!;
        existing.isOpen = state.isOpen;
      } else {
        this.addDoor(state);
      }
    });
  }

  // ==========================================================================
  // Reset
  // ==========================================================================

  /**
   * Reset all doors to closed state
   */
  resetDoors(): void {
    this.doors.forEach(door => {
      door.isOpen = false;
    });
    this.currentInteractedDoor = null;
  }

  /**
   * Reset all doors for game restart - fully restore to initial state
   */
  resetAllDoors(): void {
    this.doors.forEach(door => {
      door.isOpen = false;
    });
    this.currentInteractedDoor = null;
  }

  /**
   * Cleanup
   */
  destroy(): void {
    this.doors.clear();
    this.eventCallbacks.clear();
    this.currentInteractedDoor = null;
  }
}

// ============================================================================
// Global Instance Manager
// ============================================================================

const globalDoorManagers = new Map<string, DoorManager>();

/**
 * Get or create a DoorManager for a specific game/session
 */
export function getDoorManager(sessionId: string = 'default'): DoorManager {
  if (!globalDoorManagers.has(sessionId)) {
    globalDoorManagers.set(sessionId, new DoorManager());
  }
  return globalDoorManagers.get(sessionId)!;
}

/**
 * Create a custom DoorManager with specific configuration
 */
export function createDoorManager(
  sessionId: string,
  config: {
    doors?: BuyableDoorConfig[];
    interactionConfig?: Partial<DoorInteractionConfig>;
  }
): DoorManager {
  const manager = new DoorManager(config);
  globalDoorManagers.set(sessionId, manager);
  return manager;
}

/**
 * Remove a DoorManager instance
 */
export function removeDoorManager(sessionId: string): void {
  const manager = globalDoorManagers.get(sessionId);
  if (manager) {
    manager.destroy();
  }
  globalDoorManagers.delete(sessionId);
}

/**
 * Clear all DoorManager instances
 */
export function clearAllDoorManagers(): void {
  globalDoorManagers.forEach(manager => manager.destroy());
  globalDoorManagers.clear();
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Calculate total cost of all closed doors
 */
export function getTotalClosedDoorsCost(sessionId: string = 'default'): number {
  const manager = getDoorManager(sessionId);
  return manager.getClosedDoors().reduce((total, door) => total + door.cost, 0);
}

/**
 * Get count of closed doors
 */
export function getClosedDoorsCount(sessionId: string = 'default'): number {
  const manager = getDoorManager(sessionId);
  return manager.getClosedDoors().length;
}

/**
 * Initialize default doors in the DoorManager
 * Call this once at game startup to register all default doors
 */
export function initializeDoors(): void {
  const manager = getDoorManager();
  // Doors are already initialized by the DoorManager constructor with DEFAULT_DOORS
  console.log(`[DoorSystem] Initialized with ${manager.getAllDoors().length} door(s)`);
}
