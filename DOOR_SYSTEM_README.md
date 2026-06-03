# School of the Dead - Door System Documentation

## Overview

A complete COD Zombies-inspired door-buying system for School of the Dead. This system manages doors, player interactions, purchases, and visual feedback without implementing zombie AI, weapons, perks, or other gameplay systems.

---

## Files Created

| File | Purpose |
|------|---------|
| `src/types.ts` | Added `DoorConfig` interface |
| `src/utils/doors.ts` | Core `DoorManager` class with all door logic |
| `src/utils/useDoorSystem.ts` | React hooks (`useDoorSystem`, `useCurrentDoorInteraction`) |
| `src/utils/DoorDisplay.tsx` | UI components (prompt, counter, debug panel) |
| `src/utils/audio.ts` | Updated with `playSound()` helper and door purchase sound |

---

## Features Implemented

### Door Configuration

Each door has the following properties:
- `id`: Unique identifier
- `name`: Display name (e.g., "Starter Classroom Door")
- `cost`: Points required to open
- `position`: 3D coordinates `{x, y, z}`
- `width`: Door width in units
- `height`: Door height in units
- `connectedRoomId`: ID of the room this door connects to
- `isOpen`: Boolean state

### Default Door

```typescript
{
  id: 'starter_classroom_door',
  name: 'Starter Classroom Door',
  cost: 750,
  position: { x: 0, y: 0, z: 5 },
  width: 2,
  height: 3,
  connectedRoomId: 'main_hallway',
  isOpen: false,
}
```

### Player Interaction

- **Detection Range**: 4 units (configurable)
- **Look Angle Threshold**: 30 degrees (configurable)
- **Prompt Display**: 
  - Green text: "Press E to Open Door (750)" when affordable
  - Red text: "Not Enough Points" when insufficient funds

### Purchase Flow

1. Player looks at closed door within range
2. Prompt appears showing cost and affordability
3. Player presses interaction key (E)
4. System checks points via existing Points System
5. If sufficient: deduct points, set `isOpen = true`, play sound
6. If insufficient: show denial message, play denied sound

---

## API Reference

### DoorManager Class

```typescript
import { getDoorManager, DoorManager } from './utils/doors';

const manager = getDoorManager('session-id');
```

#### Core Methods

| Method | Description |
|--------|-------------|
| `addDoor(config: DoorConfig)` | Add a new door |
| `getDoor(doorId: string)` | Get door by ID |
| `getAllDoors()` | Get all doors |
| `getClosedDoors()` | Get only closed doors |
| `purchaseDoor(doorId, playerId)` | Attempt purchase |
| `updateInteraction(position, direction)` | Update player interaction state |
| `getInteractionPrompt(door, playerId)` | Get prompt text |
| `resetDoors()` | Close all doors |

#### Event System

```typescript
// Subscribe to events
const unsubscribe = manager.on('doorOpened', (data) => {
  console.log(`${data.doorName} was opened by ${data.playerId}`);
});

// Event types: 'doorOpened' | 'purchaseAttempt' | 'interactionStart' | 'interactionEnd'
```

### React Hooks

#### useDoorSystem

```typescript
import { useDoorSystem } from './utils/useDoorSystem';

const {
  doors,
  closedDoors,
  currentInteractedDoor,
  isLookingAtDoor,
  interactionPrompt,
  purchaseDoor,
  updateInteraction,
  canAffordDoor,
  getClosedDoorsCount,
  getTotalClosedDoorsCost,
} = useDoorSystem({ sessionId: 'game1', playerId: 'player1' });
```

#### useCurrentDoorInteraction

```typescript
import { useCurrentDoorInteraction } from './utils/useDoorSystem';

const { isLookingAtDoor, door, prompt } = useCurrentDoorInteraction('game1', 'player1');
```

### UI Components

#### DoorInteractionPrompt

```tsx
import { DoorInteractionPrompt } from './utils/DoorDisplay';

<DoorInteractionPrompt sessionId="game1" playerId="player1" />
```

#### DoorsCounter

```tsx
import { DoorsCounter } from './utils/DoorDisplay';

<DoorsCounter sessionId="game1" showTotalCost={true} />
```

#### DoorDebugPanel (DEV ONLY)

```tsx
import { DoorDebugPanel } from './utils/DoorDisplay';

<DoorDebugPanel sessionId="game1" playerId="player1" />
```

#### DoorUIBundle (All-in-One)

```tsx
import { DoorUIBundle } from './utils/DoorDisplay';

<DoorUIBundle 
  sessionId="game1" 
  playerId="player1" 
  showDebug={true} 
  showCounter={true} 
/>
```

---

## Integration Guide

### 1. Add Doors to Your Game

```typescript
import { createDoorManager, type DoorConfig } from './utils/doors';

const customDoors: DoorConfig[] = [
  {
    id: 'classroom_door',
    name: 'Classroom Door',
    cost: 750,
    position: { x: 0, y: 0, z: 5 },
    width: 2,
    height: 3,
    connectedRoomId: 'hallway',
    isOpen: false,
  },
  {
    id: 'cafeteria_door',
    name: 'Cafeteria Entrance',
    cost: 1000,
    position: { x: 10, y: 0, z: -5 },
    width: 2.5,
    height: 3.5,
    connectedRoomId: 'cafeteria',
    isOpen: false,
  },
];

createDoorManager('game1', { doors: customDoors });
```

### 2. Render Door Visuals (Three.js Example)

```typescript
import { useFrame } from '@react-three/fiber';
import { getDoorManager } from './utils/doors';

function DoorMesh({ doorId }: { doorId: string }) {
  const manager = getDoorManager();
  const door = manager.getDoor(doorId);
  
  if (!door || door.isOpen) return null;
  
  return (
    <mesh position={[door.position.x, door.position.y, door.position.z]}>
      {/* Wooden barricade mesh */}
      <boxGeometry args={[door.width, door.height, 0.2]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  );
}
```

### 3. Handle Player Interaction (Game Loop)

```typescript
import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useDoorSystem } from './utils/useDoorSystem';

function PlayerInteraction() {
  const { camera } = useThree();
  const { updateInteraction, purchaseDoor, currentInteractedDoor } = useDoorSystem({
    sessionId: 'game1',
    playerId: 'player1',
  });
  
  useFrame(() => {
    // Update interaction based on player position and look direction
    const position = camera.position;
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    
    updateInteraction(
      { x: position.x, y: position.y, z: position.z },
      { x: direction.x, y: direction.y, z: direction.z }
    );
  });
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'e' && currentInteractedDoor) {
        purchaseDoor(currentInteractedDoor.id);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentInteractedDoor, purchaseDoor]);
  
  return null;
}
```

### 4. Add UI to Your App

```tsx
import { DoorUIBundle } from './utils/DoorDisplay';

function App() {
  return (
    <>
      {/* Your game canvas */}
      <Canvas>...</Canvas>
      
      {/* Door UI overlay */}
      <DoorUIBundle 
        sessionId="game1" 
        playerId="player1" 
        showDebug={process.env.NODE_ENV === 'development'}
      />
    </>
  );
}
```

---

## Console Logs

The system outputs helpful debug information:

```
[Door] Detected: Starter Classroom Door (750 points)
[Door] Not enough points: { door: 'Starter Classroom Door', cost: 750, playerPoints: 500 }
[Door] Purchased: { door: 'Starter Classroom Door', cost: 750, playerPoints: 1250 }
```

---

## Configuration Options

### Interaction Settings

```typescript
const config = {
  interactionConfig: {
    maxInteractionDistance: 4,      // Units
    interactionAngleThreshold: 30,   // Degrees
  },
};

createDoorManager('game1', config);
```

### Adding More Doors

Simply add entries to the `DEFAULT_DOORS` array in `doors.ts` or pass custom doors to `createDoorManager()`:

```typescript
const moreDoors: DoorConfig[] = [
  {
    id: 'arcade_door',
    name: 'Arcade Entrance',
    cost: 1250,
    position: { x: -15, y: 0, z: 8 },
    width: 3,
    height: 3.5,
    connectedRoomId: 'arcade',
    isOpen: false,
  },
  // Add more...
];
```

---

## Save/Load Support

```typescript
// Export door states
const doorStates = manager.exportDoors();
localStorage.setItem('doors', JSON.stringify(doorStates));

// Import door states
const saved = JSON.parse(localStorage.getItem('doors') || '[]');
manager.importDoors(saved);
```

---

## Multiplayer Support

Each game session gets its own DoorManager instance:

```typescript
const manager1 = getDoorManager('game-session-1');
const manager2 = getDoorManager('game-session-2');
```

---

## Architecture Notes

- **Separation of Concerns**: Door system only manages door state, not visuals or collision
- **Event-Driven**: Other systems communicate via events, not direct coupling
- **No Hardcoded Logic**: All doors are data-driven via configuration
- **Reusable**: Easy to add new doors by adding config entries
- **Type-Safe**: Full TypeScript support with interfaces and types

---

## What This System Does NOT Do

- ❌ Zombie AI or behavior
- ❌ Weapon systems
- ❌ Perk mechanics
- ❌ Pack-a-Punch
- ❌ Mystery Box
- ❌ Door collision detection (handled by physics engine)
- ❌ Door visual rendering (handled by Three.js components)
- ❌ Player movement (handled by controls system)

---

## Future Expansion Ideas

- Door health/damage system
- Barricade repair mechanics
- Door camping point awards
- Multiple door types (garage doors, gates, etc.)
- Door upgrade system
- Sound occlusion through closed doors
- AI pathfinding integration
