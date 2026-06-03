# School of the Dead - Round System

COD Zombies-inspired round management system for React + Three.js games.

## Overview

This system manages round state, progression, and intermission timing. It does **NOT** handle zombie spawning, AI, movement, or behavior - those are external systems that integrate with this round manager.

## Files

| File | Purpose |
|------|---------|
| `src/utils/rounds.ts` | Core `RoundManager` class and types |
| `src/utils/useRoundSystem.ts` | React hooks for integration |
| `src/utils/RoundDisplay.tsx` | UI components (display, overlay, debug) |

## Features

- ✅ Current round number tracking
- ✅ Round start/end lifecycle
- ✅ Intermission between rounds with countdown
- ✅ Zombie remaining tracking (external spawn/kill registration)
- ✅ Round progression logic
- ✅ Configurable settings (duration, starting round, etc.)
- ✅ Multiplayer support (session-based managers)
- ✅ Save/Load support (snapshot serialization)
- ✅ Event system for state changes
- ✅ React hooks for easy integration

## What This System Does NOT Do

- ❌ Zombie AI or behavior
- ❌ Zombie movement or attacks
- ❌ Zombie spawning logic (only tracks spawned count)
- ❌ Buyable doors
- ❌ Weapons or combat
- ❌ Mystery Box
- ❌ Perks or power-ups
- ❌ Pack-a-Punch

---

## Configuration

```typescript
import { DEFAULT_ROUND_CONFIG, RoundConfig } from './utils/rounds';

// Default configuration
console.log(DEFAULT_ROUND_CONFIG);
// {
//   startingRound: 1,
//   intermissionDurationMs: 10000,  // 10 seconds
//   minRoundDurationMs: 5000,       // 5 seconds minimum
// }

// Custom configuration
const customConfig: Partial<RoundConfig> = {
  startingRound: 1,
  intermissionDurationMs: 15000,  // 15 seconds
  minRoundDurationMs: 10000,      // 10 seconds minimum
};
```

---

## API Reference

### RoundManager Class

#### Constructor

```typescript
const manager = new RoundManager(config?: Partial<RoundConfig>);
```

#### Core Methods

```typescript
// Start a new round with specified zombie count
manager.startRound(totalZombies: number): void;

// End the current round (called when all zombies defeated)
manager.endRound(): void;

// Begin intermission period
manager.startIntermission(): void;

// Get remaining intermission time in ms
manager.getIntermissionRemaining(): number;

// Check if intermission is complete
manager.isIntermissionComplete(): boolean;

// Force advance to next round (skip intermission)
manager.forceNextRound(): void;
```

#### Zombie Tracking (Called by External Systems)

```typescript
// Register a zombie spawn - returns new remaining count
const remaining = manager.registerZombieSpawn(): number;

// Register a zombie kill - auto-ends round if all killed
const remaining = manager.registerZombieKill(): number;

// Set zombies remaining directly
manager.setZombiesRemaining(remaining: number): void;
```

#### Getters

```typescript
manager.getCurrentRound(): number;
manager.getState(): RoundState;  // 'idle' | 'intermission' | 'active' | 'ended'
manager.getZombiesRemaining(): number;
manager.getZombiesKilled(): number;
manager.getTotalZombiesSpawned(): number;
manager.getRoundStartTime(): number | null;
manager.getIntermissionStartTime(): number | null;
manager.getTotalRoundsCompleted(): number;
manager.getRoundData(): Readonly<RoundData>;
manager.getSnapshot(): RoundSnapshot;  // For save/load
manager.getRoundDuration(): number | null;
```

#### Configuration

```typescript
manager.updateConfig(newConfig: Partial<RoundConfig>): void;
manager.getConfig(): Readonly<RoundConfig>;
```

#### Reset & Load

```typescript
manager.reset(): void;  // Reset to initial state
manager.loadFromSnapshot(snapshot: RoundSnapshot): void;  // Load saved state
```

#### Event System

```typescript
// Subscribe to state changes
const unsubscribe = manager.onStateChange((data: RoundData) => {
  console.log('State changed:', data.state);
});

// Subscribe to zombie count changes
const unsubscribe = manager.onZombiesRemainingChange((remaining, total) => {
  console.log(`${remaining}/${total} zombies remaining`);
});

// Call unsubscribe() to remove listener
unsubscribe();
```

---

### Global Manager Functions

```typescript
import { getRoundManager, removeRoundManager, clearAllRoundManagers } from './utils/rounds';

// Get or create manager for a session (multiplayer support)
const manager = getRoundManager('session-123', customConfig);

// Remove a specific session
removeRoundManager('session-123');

// Clear all sessions
clearAllRoundManagers();

// Get all active session IDs
const sessions = getActiveSessionIds();
```

---

### React Hooks

#### useRoundSystem (Main Hook)

```typescript
import { useRoundSystem } from './utils/useRoundSystem';

function GameComponent() {
  const {
    // Core state
    currentRound,
    state,
    
    // Zombie tracking
    zombiesRemaining,
    zombiesKilled,
    totalZombiesSpawned,
    
    // Timing
    roundDuration,           // milliseconds
    roundDurationFormatted,  // "MM:SS"
    intermissionRemaining,   // milliseconds
    intermissionCountdown,   // "Round starts in 5s"
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
    
    // Capability checks
    canStartRound,
    canEndRound,
    canStartIntermission,
    
    // Direct manager access
    manager,
  } = useRoundSystem({ 
    sessionId: 'default',
    autoRefreshMs: 100  // Intermission countdown refresh rate
  });

  return (
    <div>
      <h1>Round {currentRound}</h1>
      <p>Status: {state}</p>
      {state === 'active' && (
        <p>Zombies: {zombiesRemaining}/{totalZombiesSpawned}</p>
      )}
    </div>
  );
}
```

#### Specialized Hooks

```typescript
// Only track zombies remaining (optimized for frequent updates)
const { remaining, total, killed } = useZombiesRemaining('session-id');

// Only track round state (optimized for UI)
const { currentRound, state, totalRoundsCompleted } = useRoundState('session-id');

// Only track intermission countdown
const { remaining, countdown, isComplete, isActive } = useIntermissionCountdown('session-id', 100);
```

---

## React Components

### RoundDisplay

Main round information display (top center of screen).

```tsx
import { RoundDisplay } from './utils/RoundDisplay';

function Game() {
  return (
    <>
      <ThreeScene />
      <RoundDisplay
        sessionId="default"
        showZombiesRemaining={true}
        showTimer={true}
      />
    </>
  );
}
```

### IntermissionOverlay

Full-screen overlay during intermission.

```tsx
import { IntermissionOverlay } from './utils/RoundDisplay';

function Game() {
  const handleRoundStart = () => {
    // Your round start logic here
    console.log('Starting next round!');
  };

  return (
    <>
      <ThreeScene />
      <IntermissionOverlay
        sessionId="default"
        onRoundStart={handleRoundStart}
      />
    </>
  );
}
```

### ZombiesCounter

Bottom-positioned zombie counter with progress bar.

```tsx
import { ZombiesCounter } from './utils/RoundDisplay';

function Game() {
  return (
    <>
      <ThreeScene />
      <ZombiesCounter
        sessionId="default"
        showProgress={true}
      />
    </>
  );
}
```

### RoundDebugPanel

Development-only debug panel with controls.

```tsx
import { RoundDebugPanel } from './utils/RoundDisplay';

function Game({ isDevMode }) {
  return (
    <>
      <ThreeScene />
      {isDevMode && <RoundDebugPanel sessionId="default" />}
    </>
  );
}
```

---

## Example Usage

### Basic Game Loop Integration

```typescript
import { getRoundManager } from './utils/rounds';

class GameLoop {
  private roundManager = getRoundManager('game-session');
  private zombiesToSpawn = 0;
  private zombiesSpawned = 0;

  startGame() {
    this.startRound(1); // Start round 1 with 1 zombie
  }

  startRound(roundNumber: number) {
    const zombieCount = this.calculateZombieCount(roundNumber);
    this.zombiesToSpawn = zombieCount;
    this.zombiesSpawned = 0;
    
    this.roundManager.startRound(zombieCount);
    
    // Your spawning system handles actual zombie creation
    this.spawnZombiesOverTime(zombieCount);
  }

  calculateZombieCount(round: number): number {
    // COD Zombies-style scaling
    return Math.floor(6 * Math.pow(1.5, round - 1));
  }

  spawnZombiesOverTime(count: number) {
    // Your spawning logic here
    // When each zombie spawns:
    // this.roundManager.registerZombieSpawn();
  }

  onZombieKilled() {
    // Called when your combat system kills a zombie
    const remaining = this.roundManager.registerZombieKill();
    
    if (remaining === 0) {
      // Round complete - start intermission
      this.roundManager.startIntermission();
      
      // Schedule next round after intermission
      setTimeout(() => {
        if (this.roundManager.isIntermissionComplete()) {
          this.startRound(this.roundManager.getCurrentRound() + 1);
        }
      }, this.roundManager.getConfig().intermissionDurationMs);
    }
  }
}
```

### React Component Integration

```tsx
import React, { useEffect } from 'react';
import { useRoundSystem } from './utils/useRoundSystem';
import { RoundDisplay, IntermissionOverlay } from './utils/RoundDisplay';

function GameScene() {
  const {
    currentRound,
    state,
    zombiesRemaining,
    startRound,
    registerZombieKill,
    isIntermissionComplete,
  } = useRoundSystem({ sessionId: 'player1' });

  // Listen for zombie kills from your combat system
  useEffect(() => {
    const handleZombieKill = (zombieId: string) => {
      registerZombieKill();
      // Also award points via Points System
    };

    // Subscribe to your game's event system
    gameEvents.on('zombie:killed', handleZombieKill);
    return () => gameEvents.off('zombie:killed', handleZombieKill);
  }, [registerZombieKill]);

  // Auto-start next round after intermission
  useEffect(() => {
    if (state === 'intermission' && isIntermissionComplete) {
      const nextRoundZombies = calculateZombiesForRound(currentRound + 1);
      startRound(nextRoundZombies);
    }
  }, [state, isIntermissionComplete, currentRound, startRound]);

  return (
    <>
      <Canvas>
        {/* Your Three.js scene */}
      </Canvas>
      <RoundDisplay sessionId="player1" />
      <IntermissionOverlay sessionId="player1" />
    </>
  );
}

function calculateZombiesForRound(round: number): number {
  return Math.floor(6 * Math.pow(1.5, round - 1));
}

export default GameScene;
```

### Save/Load Integration

```typescript
import { getRoundManager } from './utils/rounds';

// Save game state
function saveGame(playerId: string) {
  const roundManager = getRoundManager(`session-${playerId}`);
  const roundSnapshot = roundManager.getSnapshot();
  
  const gameState = {
    player: playerId,
    roundData: roundSnapshot,
    // ... other game state (points, inventory, etc.)
  };
  
  localStorage.setItem(`school-of-dead-save-${playerId}`, JSON.stringify(gameState));
}

// Load game state
function loadGame(playerId: string) {
  const saved = localStorage.getItem(`school-of-dead-save-${playerId}`);
  if (!saved) return false;
  
  const gameState = JSON.parse(saved);
  const roundManager = getRoundManager(`session-${playerId}`);
  
  roundManager.loadFromSnapshot(gameState.roundData);
  
  return true;
}
```

### Multiplayer Support

```typescript
import { getRoundManager } from './utils/rounds';

// Each player gets their own round manager session
const player1Rounds = getRoundManager('player1-session');
const player2Rounds = getRoundManager('player2-session');

// Or for co-op where players share rounds
const coopRounds = getRoundManager('coop-session-abc123');

// Players in same session share round state
player1Rounds.startRound(10);
console.log(player2Rounds.getCurrentRound()); // Same round number
```

---

## State Machine

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    ┌──────┐     ┌─────────────┐     ┌────────┐            │
│    │ IDLE │────▶│ INTERMISSION│────▶│ ACTIVE │            │
│    └──────┘     └─────────────┘     └────────┘            │
│       ▲                                   │                │
│       │                                   │                │
│       │         ┌─────────────┐           │                │
│       └─────────│   ENDED     │◀──────────┘                │
│                 └─────────────┘                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘

State Transitions:
- IDLE → INTERMISSION: startIntermission()
- INTERMISSION → ACTIVE: startRound() (when intermission complete)
- ACTIVE → ENDED: endRound() (auto-called when zombiesRemaining = 0)
- ENDED → INTERMISSION: startIntermission()
- Any → IDLE: forceNextRound(), reset()
```

---

## Integration with Points System

The Round System works alongside the Points System:

```typescript
import { getPointsManager } from './utils/points';
import { getRoundManager } from './utils/rounds';

const pointsManager = getPointsManager('player1');
const roundManager = getRoundManager('player1');

// When zombie dies
function onZombieDeath(isHeadshot: boolean, wasKnife: boolean) {
  // Award points
  if (wasKnife) {
    pointsManager.addKnifeKill('player1');
  } else if (isHeadshot) {
    pointsManager.addHeadshotKill('player1');
  } else {
    pointsManager.addZombieKill('player1');
  }
  
  // Update round state
  roundManager.registerZombieKill();
}
```

---

## Utility Functions

```typescript
import { formatRoundTime, formatIntermissionCountdown } from './utils/rounds';

// Format milliseconds as MM:SS
formatRoundTime(125000);  // "02:05"

// Format countdown message
formatIntermissionCountdown(5000);  // "Round starts in 5s"
```

---

## Best Practices

1. **Call `startRound()` with the total zombie count** before spawning begins
2. **Call `registerZombieSpawn()`** for each zombie that actually spawns
3. **Call `registerZombieKill()`** for each zombie death - this auto-ends rounds
4. **Use `startIntermission()`** after round ends, before next round
5. **Check `isIntermissionComplete()`** before starting next round
6. **Use React hooks in UI components** for automatic state synchronization
7. **Use specialized hooks** (`useZombiesRemaining`, `useRoundState`) for performance-critical updates
8. **Store session IDs** for multiplayer to keep player states separate

---

## Future Expansion Notes

This system is designed to integrate with:

- **Zombie Spawner System**: Calls `registerZombieSpawn()` when zombies appear
- **Combat System**: Calls `registerZombieKill()` when zombies die
- **Points System**: Awards points based on kills (separate system)
- **Wave Configuration**: Determines zombie counts per round
- **Save/Load System**: Uses `getSnapshot()` and `loadFromSnapshot()`
- **Multiplayer Networking**: Syncs round state across clients using session IDs

The round manager intentionally has no knowledge of:
- How zombies are created
- Where zombies spawn
- Zombie behavior or AI
- Combat mechanics
- Point values or economy

This separation of concerns allows each system to evolve independently.
