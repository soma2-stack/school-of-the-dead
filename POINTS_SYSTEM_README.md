# School of the Dead - COD Zombies Points System

## 1. System Design

The Points System is a modular, self-contained module designed for integration into a React + Three.js game. It follows these design principles:

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Game Layer (Your Code)                    │
├─────────────────────────────────────────────────────────────┤
│  React Components                                            │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │ PointsDisplay   │  │ PointsDebugPanel│                   │
│  └────────┬────────┘  └─────────────────┘                   │
│           │                                                  │
│  ┌────────▼────────┐                                         │
│  │ usePlayerPoints │ (React Hook)                            │
│  └────────┬────────┘                                         │
├───────────┼──────────────────────────────────────────────────┤
│           │ Core Logic Layer                                 │
│  ┌────────▼────────┐                                         │
│  │ PlayerPointsManager │                                      │
│  │ - Configurable values                                     │
│  │ - Multi-player support                                    │
│  │ - Event listeners                                         │
│  │ - Save/Load serialization                                 │
│  └─────────────────┘                                         │
└─────────────────────────────────────────────────────────────┘
```

### Key Design Decisions

1. **Separation of Concerns**: Core logic (`points.ts`) is completely separate from React-specific code
2. **Singleton Pattern**: Global manager instance for easy access, but allows custom instances for testing
3. **Event-Driven**: Listener system for UI updates, sound effects, achievements
4. **Immutable Config**: Default configuration is frozen to prevent accidental mutation
5. **Type-Safe**: Full TypeScript support with comprehensive interfaces

---

## 2. Data Structures

### Configuration

```typescript
interface PointsConfig {
  startingPoints: number;    // Default: 500
  bulletHit: number;         // Default: 10
  zombieKill: number;        // Default: 60
  headshotKill: number;      // Default: 100
  knifeKill: number;         // Default: 130
  repairBarricade: number;   // Default: 10
}
```

### Player State

```typescript
interface PlayerPointsState {
  playerId: string;          // Unique identifier
  currentPoints: number;     // Current available points
  totalEarned: number;       // Lifetime earnings (stats)
  totalSpent: number;        // Lifetime spending (stats)
  lastUpdated: number;       // Timestamp (ms)
}
```

### Serializable Data (Save/Load)

```typescript
interface PlayerPointsData {
  playerId: string;
  currentPoints: number;
  totalEarned: number;
  totalSpent: number;
  savedAt: number;
  version: string;           // For migration support
}
```

### Operation Result

```typescript
interface PointsOperationResult {
  success: boolean;
  previousPoints: number;
  newPoints: number;
  amountChanged: number;
  reason: PointsEvent;
}
```

---

## 3. API / Functions

### PlayerPointsManager Class

#### Constructor
```typescript
constructor(config?: PointsConfig)
```

#### Player Management
| Method | Description |
|--------|-------------|
| `registerPlayer(playerId: string)` | Register new player with starting points |
| `hasPlayer(playerId: string)` | Check if player exists |
| `getPlayerState(playerId)` | Get full player state |
| `getPoints(playerId)` | Get current points only |
| `removePlayer(playerId)` | Remove player from system |
| `getAllPlayerIds()` | Get all registered player IDs |

#### Adding Points
| Method | Points Awarded |
|--------|---------------|
| `addBulletHit(playerId)` | +10 |
| `addZombieKill(playerId)` | +60 |
| `addHeadshotKill(playerId)` | +100 |
| `addKnifeKill(playerId)` | +130 |
| `addRepairBarricade(playerId)` | +10 |

#### Spending Points
```typescript
canAfford(playerId: string, cost: number): boolean
spendPoints(playerId: string, amount: number): PointsOperationResult
getMaxAffordableAmount(playerId: string): number
```

#### Event System
```typescript
subscribe(listener: PointsChangeListener): () => void
// Listener receives: (playerId, result) => void
```

#### Save/Load
```typescript
serializePlayer(playerId: string): PlayerPointsData | null
deserializePlayer(data: PlayerPointsData): PlayerPointsState
exportAllPlayers(): PlayerPointsData[]
importAllPlayers(data: PlayerPointsData[]): void
```

### React Hooks

#### usePlayerPoints
```typescript
const {
  currentPoints,
  totalEarned,
  totalSpent,
  addBulletHit,
  addZombieKill,
  addHeadshotKill,
  addKnifeKill,
  addRepairBarricade,
  spendPoints,
  canAfford,
  refresh,
  manager,
} = usePlayerPoints(playerId);
```

#### usePointsListener
```typescript
usePointsListener((playerId, result) => {
  // Handle points change (sound effects, achievements, etc.)
});
```

---

## 4. Complete Production-Ready Code

Files created:
- `/workspace/src/utils/points.ts` - Core logic
- `/workspace/src/utils/usePlayerPoints.ts` - React hooks
- `/workspace/src/utils/PointsDisplay.tsx` - UI components

---

## 5. Example Usage

### Basic Integration

```tsx
import { PointsDisplay } from './utils/PointsDisplay';
import { getPointsManager } from './utils/points';

function GameUI() {
  return (
    <div className="game-ui">
      <PointsDisplay 
        playerId="player1" 
        showTotalEarned={true}
      />
    </div>
  );
}
```

### In Game Logic (Three.js/Game Loop)

```tsx
import { getPointsManager } from './utils/points';

const pointsManager = getPointsManager();

// When a bullet hits a zombie
function onBulletHit(playerId: string) {
  pointsManager.addBulletHit(playerId);
}

// When a zombie is killed
function onZombieKilled(playerId: string, isHeadshot: boolean) {
  if (isHeadshot) {
    pointsManager.addHeadshotKill(playerId);
  } else {
    pointsManager.addZombieKill(playerId);
  }
}

// When repairing barricades
function onBarricadeRepaired(playerId: string) {
  pointsManager.addRepairBarricade(playerId);
}

// When purchasing items
function purchaseItem(playerId: string, cost: number): boolean {
  const result = pointsManager.spendPoints(playerId, cost);
  return result?.success ?? false;
}
```

### Using React Hook in Component

```tsx
import { usePlayerPoints } from './utils/usePlayerPoints';

function WeaponShop({ playerId }: { playerId: string }) {
  const { currentPoints, canAfford, spendPoints } = usePlayerPoints(playerId);
  
  const weapons = [
    { name: 'Pistol', cost: 200 },
    { name: 'Shotgun', cost: 500 },
    { name: 'Assault Rifle', cost: 1200 },
  ];
  
  return (
    <div className="weapon-shop">
      <h3>Current Points: {currentPoints}</h3>
      {weapons.map(weapon => (
        <button
          key={weapon.name}
          disabled={!canAfford(weapon.cost)}
          onClick={() => spendPoints(weapon.cost)}
        >
          {weapon.name} - {weapon.cost} pts
        </button>
      ))}
    </div>
  );
}
```

### Multiplayer Support

```tsx
import { getPointsManager } from './utils/points';

const manager = getPointsManager();

// Register multiple players
manager.registerPlayer('player1');
manager.registerPlayer('player2');
manager.registerPlayer('player3');

// Each player has independent points
manager.addZombieKill('player1');  // Player 1 gets 60 points
manager.addHeadshotKill('player2'); // Player 2 gets 100 points

// Check individual affordability
manager.canAfford('player1', 500);  // true or false
manager.canAfford('player2', 500);  // true or false
```

### Save/Load Example

```tsx
import { getPointsManager } from './utils/points';

const manager = getPointsManager();

// Saving
function saveGame() {
  const data = manager.exportAllPlayers();
  localStorage.setItem('schoolOfTheDead_save', JSON.stringify(data));
}

// Loading
function loadGame() {
  const saved = localStorage.getItem('schoolOfTheDead_save');
  if (saved) {
    const data = JSON.parse(saved);
    manager.importAllPlayers(data);
  }
}
```

### Custom Configuration

```tsx
import { resetPointsManager } from './utils/points';

// Override default point values
const customConfig = {
  startingPoints: 750,
  bulletHit: 15,
  zombieKill: 80,
  headshotKill: 150,
  knifeKill: 200,
  repairBarricade: 15,
};

resetPointsManager(customConfig);
```

### Listening to Events (Sound Effects, Achievements)

```tsx
import { usePointsListener } from './utils/usePlayerPoints';

function SoundEffectManager() {
  usePointsListener((playerId, result) => {
    switch (result.reason) {
      case 'headshot_kill':
        playSound('headshot_bonus');
        break;
      case 'knife_kill':
        playSound('knife_kill_bonus');
        break;
      case 'purchase':
        if (result.success) {
          playSound('purchase_success');
        } else {
          playSound('insufficient_funds');
        }
        break;
    }
  });
  
  return null;
}
```

---

## 6. Future Expansion Notes

### Easy Extensions (No Breaking Changes)

1. **New Point Types**
   ```typescript
   // Add to PointsConfig
   interface PointsConfig {
     // ... existing fields
     assistKill: number;      // New: points for damage assists
     survivalBonus: number;   // New: points per round survived
     comboMultiplier: number; // New: streak bonus
   }
   
   // Add method to PlayerPointsManager
   addAssistKill(playerId: string) {
     return this.addPoints(playerId, this.config.assistKill, 'assist_kill');
   }
   ```

2. **Achievement System Integration**
   ```typescript
   // Subscribe to listener and track milestones
   manager.subscribe((playerId, result) => {
     if (result.reason === 'headshot_kill') {
       // Increment headshot counter for achievement
       achievements.increment(playerId, 'headshots');
     }
   });
   ```

3. **Leaderboards**
   ```typescript
   // Use exportAllPlayers() and sort by totalEarned
   const allPlayers = manager.exportAllPlayers();
   const leaderboard = allPlayers.sort((a, b) => b.totalEarned - a.totalEarned);
   ```

4. **Point Modifiers (Power-ups)**
   ```typescript
   // Add multiplier support
   class PlayerPointsManager {
     private multipliers: Map<string, number> = new Map();
     
     setMultiplier(playerId: string, multiplier: number) {
       this.multipliers.set(playerId, multiplier);
     }
     
     private addPoints(playerId, amount, reason) {
       const multiplier = this.multipliers.get(playerId) ?? 1;
       // Apply multiplier...
     }
   }
   ```

5. **Server Sync (Multiplayer)**
   ```typescript
   // Serialize and send to server
   const playerData = manager.serializePlayer(playerId);
   socket.emit('points_update', playerData);
   
   // Receive from server
   socket.on('points_update', (data) => {
     manager.deserializePlayer(data);
   });
   ```

6. **Analytics/Stats Tracking**
   ```typescript
   // Already tracks totalEarned and totalSpent
   const stats = manager.getPlayerStats('player1');
   console.log(`Net gain: ${stats.netGain}`);
   ```

### Files Structure for Future Growth

```
src/utils/
├── points.ts              # Core logic (extend here)
├── usePlayerPoints.ts     # React hooks (extend here)
├── PointsDisplay.tsx      # UI components
├── points.test.ts         # Unit tests (recommended addition)
└── points.constants.ts    # Separate constants file (optional)
```

### Recommended Next Steps

1. **Add Unit Tests**: Create `points.test.ts` with Jest/Vitest
2. **Add Persistence Layer**: Integrate with your save system
3. **Add Sound Effects**: Hook into the listener system
4. **Add CSS Styling**: Create dedicated stylesheet for PointsDisplay
5. **Add Animations**: Use Framer Motion for point pop-up animations

---

## Quick Reference Card

| Action | Method | Points |
|--------|--------|--------|
| Start Game | `registerPlayer(id)` | 500 |
| Bullet Hit | `addBulletHit(id)` | +10 |
| Normal Kill | `addZombieKill(id)` | +60 |
| Headshot Kill | `addHeadshotKill(id)` | +100 |
| Knife Kill | `addKnifeKill(id)` | +130 |
| Repair Board | `addRepairBarricade(id)` | +10 |
| Purchase | `spendPoints(id, cost)` | -cost |
| Check Funds | `canAfford(id, cost)` | boolean |
