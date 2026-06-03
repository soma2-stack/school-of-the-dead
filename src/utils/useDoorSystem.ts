/**
 * School of the Dead - React Hooks for Door System
 * Provides easy integration with React components
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { getDoorManager, DoorManager, DoorState, DoorPurchaseResult } from './doors';

// ============================================================================
// Main Hook: useDoorSystem
// ============================================================================

export interface UseDoorSystemOptions {
  sessionId?: string;
  playerId: string;
}

export interface UseDoorSystemReturn {
  // State
  doors: DoorState[];
  closedDoors: DoorState[];
  currentInteractedDoor: DoorState | null;
  
  // Interaction state
  isLookingAtDoor: boolean;
  interactionPrompt: {
    show: boolean;
    text: string;
    canAfford: boolean;
  } | null;
  
  // Actions
  purchaseDoor: (doorId: string) => DoorPurchaseResult;
  openDoor: (doorId: string) => void; // Alias for purchaseDoor
  updateInteraction: (position: { x: number; y: number; z: number }, direction: { x: number; y: number; z: number }) => string | null;
  
  // Utilities
  canAffordDoor: (doorId: string) => boolean;
  getDoorById: (doorId: string) => DoorState | undefined;
  getClosedDoorsCount: () => number;
  getTotalClosedDoorsCost: () => number;
  
  // Manager reference (for advanced usage)
  manager: DoorManager;
}

export function useDoorSystem(options: UseDoorSystemOptions): UseDoorSystemReturn {
  const { sessionId = 'default', playerId } = options;
  
  // Get manager instance
  const manager = getDoorManager(sessionId);
  
  // State
  const [doors, setDoors] = useState<DoorState[]>(manager.getAllDoors());
  const [currentInteractedDoorId, setCurrentInteractedDoorId] = useState<string | null>(null);
  
  // Refs for event cleanup
  const unsubscribeRefs = useRef<(() => void)[]>([]);
  
  // Update doors state when doors change
  const updateDoors = useCallback(() => {
    setDoors(manager.getAllDoors());
  }, [manager]);
  
  // Subscribe to door events
  useEffect(() => {
    const unsubscribers: (() => void)[] = [];
    
    // Subscribe to door opened events
    const unsubDoorOpened = manager.on('doorOpened', () => {
      updateDoors();
    });
    unsubscribers.push(unsubDoorOpened);
    
    // Subscribe to interaction events
    const unsubInteractionStart = manager.on('interactionStart', (data) => {
      setCurrentInteractedDoorId(data.doorId);
    });
    unsubscribers.push(unsubInteractionStart);
    
    const unsubInteractionEnd = manager.on('interactionEnd', () => {
      setCurrentInteractedDoorId(null);
    });
    unsubscribers.push(unsubInteractionEnd);
    
    // Store unsubscribe functions
    unsubscribeRefs.current = unsubscribers;
    
    // Initial load
    updateDoors();
    
    // Cleanup on unmount
    return () => {
      unsubscribers.forEach(unsub => unsub());
    };
  }, [manager, updateDoors]);
  
  // Get current interacted door
  const currentInteractedDoor = currentInteractedDoorId 
    ? manager.getDoor(currentInteractedDoorId) || null
    : null;
  
  // Get closed doors
  const closedDoors = doors.filter(door => !door.isOpen);
  
  // Get interaction prompt
  const interactionPrompt = currentInteractedDoor 
    ? manager.getInteractionPrompt(currentInteractedDoor, playerId)
    : null;
  
  // Purchase door
  const purchaseDoor = useCallback((doorId: string): DoorPurchaseResult => {
    const result = manager.purchaseDoor(doorId, playerId);
    if (result.success) {
      updateDoors();
    }
    return result;
  }, [manager, playerId, updateDoors]);
  
  // Update interaction (call this in your game loop)
  const updateInteraction = useCallback((
    position: { x: number; y: number; z: number },
    direction: { x: number; y: number; z: number }
  ): string | null => {
    return manager.updateInteraction(position, direction);
  }, [manager]);
  
  // Check if player can afford a specific door
  const canAffordDoor = useCallback((doorId: string): boolean => {
    const door = manager.getDoor(doorId);
    if (!door) return false;
    
    // Import points manager dynamically to avoid circular dependency
    const { getPointsManager } = require('./points');
    const pointsManager = getPointsManager();
    return pointsManager.canAfford(playerId, door.cost);
  }, [manager, playerId]);
  
  // Get door by ID
  const getDoorById = useCallback((doorId: string): DoorState | undefined => {
    return manager.getDoor(doorId);
  }, [manager]);
  
  // Get count of closed doors
  const getClosedDoorsCount = useCallback((): number => {
    return closedDoors.length;
  }, [closedDoors]);
  
  // Get total cost of all closed doors
  const getTotalClosedDoorsCost = useCallback((): number => {
    return closedDoors.reduce((total, door) => total + door.cost, 0);
  }, [closedDoors]);
  
  return {
    // State
    doors,
    closedDoors,
    currentInteractedDoor,
    
    // Interaction state
    isLookingAtDoor: !!currentInteractedDoor,
    interactionPrompt,
    
    // Actions
    purchaseDoor,
    openDoor: purchaseDoor, // Alias
    updateInteraction,
    
    // Utilities
    canAffordDoor,
    getDoorById,
    getClosedDoorsCount,
    getTotalClosedDoorsCost,
    
    // Manager reference
    manager,
  };
}

// ============================================================================
// Simplified Hook: useCurrentDoorInteraction
// For quick access to just the current interaction state
// ============================================================================

export interface UseCurrentDoorInteractionReturn {
  isLookingAtDoor: boolean;
  door: DoorState | null;
  prompt: {
    show: boolean;
    text: string;
    canAfford: boolean;
  } | null;
}

export function useCurrentDoorInteraction(
  sessionId: string = 'default',
  playerId: string
): UseCurrentDoorInteractionReturn {
  const manager = getDoorManager(sessionId);
  const [door, setDoor] = useState<DoorState | null>(null);
  
  useEffect(() => {
    const unsubStart = manager.on('interactionStart', (data) => {
      setDoor(manager.getDoor(data.doorId) || null);
    });
    
    const unsubEnd = manager.on('interactionEnd', () => {
      setDoor(null);
    });
    
    // Initial state
    const currentDoor = manager.getCurrentInteractedDoor();
    setDoor(currentDoor);
    
    return () => {
      unsubStart();
      unsubEnd();
    };
  }, [manager]);
  
  const prompt = door ? manager.getInteractionPrompt(door, playerId) : null;
  
  return {
    isLookingAtDoor: !!door,
    door,
    prompt,
  };
}
