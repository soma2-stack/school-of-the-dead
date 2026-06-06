/**
 * School of the Dead - Map Configuration
 * Static map data including rooms, gaps, doors, and map constants.
 */

// ============================================================================
// Types
// ============================================================================

export interface Room {
  id: string;
  name: string;
  cx: number;
  cz: number;
  w: number;
  d: number;
  h: number;
  floorY: number;
  color: string;
  disabledWalls?: Array<'N' | 'S' | 'E' | 'W'>;
  disabledFloor?: boolean;
  disabledCeiling?: boolean;
  isStaircase?: boolean;
  stairDirection?: 'N_S' | 'S_N' | 'W_E' | 'E_W';
  carvedFloors?: string[];
  carvedCeilings?: string[];
  climbHeight?: number;
  trapdoors?: Array<{ cx: number; cz: number; w: number; d: number }>;
  ceilingHoles?: Array<{ cx: number; cz: number; w: number; d: number }>;
  floorTexture?: string;
}

export interface RoomGap {
  side: 'N' | 'S' | 'E' | 'W';
  center: number;
  width: number;
}

export interface DoorConfig {
  roomId: string;
  side: 'N' | 'S' | 'E' | 'W';
  gapIndex: number;
  cost: number;
}

export interface MapProps {
  id: string;
  type: string;
  roomId: string;
  cx: number;
  cz: number;
  w: number;
  d: number;
  h: number;
  color: string;
}

// ============================================================================
// Map Configuration Constants
// ============================================================================

export const MAP_CONFIG = {
  wallThickness: 0.4,
  ceilingThickness: 0.15,
  doorHeight: 7.5,
  floorThickness: 0.2,
  doorDepth: 0.3,
};

// ============================================================================
// Room Definitions (Standard Westbrook High Layout)
// ============================================================================

export const INITIAL_ROOMS: Room[] = [
  { id: 'starter', name: 'Starter Classroom', cx: 17.5, cz: -40, w: 75, d: 60, floorY: 0, h: 10, color: '#3d5c3a', floorTexture: "wood_floor.png" },
  { id: 'hallway', name: 'Main Hallway', cx: 20, cz: -3, w: 80, d: 14, floorY: 0, h: 10, color: '#323247' },
  { id: 'science_lab', name: 'Science Lab', cx: 5, cz: 26.5, w: 30, d: 45, floorY: 0, h: 10, color: '#4a3720' },
  { id: 'library', name: 'Library Shelf Area', cx: 40, cz: 26.5, w: 36, d: 45, floorY: 0, h: 10, color: '#453c1b', floorTexture: "wood_floor.png" },
  { id: 'stairwell', name: 'Stairwell Access', cx: 68, cz: -3, w: 16, d: 10, floorY: 0, h: 22, climbHeight: 11, color: '#542828', isStaircase: true, stairDirection: 'W_E' },
  { id: 'gym', name: 'Gymnasium (Floor 2)', cx: 144, cz: 15, w: 80, d: 60, floorY: 11, h: 18, color: '#20434f', carvedFloors: [] },
  { id: 'cafeteria', name: 'Cafeteria Wing', cx: -50, cz: -3, w: 60, d: 50, floorY: 0, h: 10, color: '#2a261f' },
  { id: 'courtyard', name: 'Overgrown Courtyard', cx: -63, cz: 57, w: 90, d: 70, floorY: 0, h: 15, color: '#162e1a', disabledCeiling: true, trapdoors: [{ cx: -42, cz: -48.5, w: 8, d: 8 }, { cx: -42, cz: -31, w: 12, d: 6 }] },
  { id: 'underground_tunnel', name: 'Utility Tunnel', cx: -103, cz: 63.4, w: 12, d: 80, floorY: -12, h: 9, color: '#111412', ceilingHoles: [{ cx: -42, cz: -48.5, w: 8, d: 8 }, { cx: -42, cz: -31, w: 12, d: 6 }] },
  { id: 'the_vault', name: 'Fallout Shelter Vault', cx: -103, cz: 123.4, w: 60, d: 40, floorY: -12, h: 9, color: '#282b29' },
  { id: 'upper_hallway', name: '2nd Floor Hallway', cx: 90, cz: -3, w: 28, d: 14, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'principal_office', name: "Principal's Office", cx: 90, cz: 127, w: 56, d: 56, floorY: 11, h: 10, color: '#362a2a' },
  { id: 'upper_hallway_2', name: '2nd floor hallway 2', cx: 90, cz: 51.5, w: 18, d: 95, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'security_room', name: 'Master Security & Breaker Room', cx: 66, cz: 51.5, w: 30, d: 35, floorY: 11, h: 10, color: '#1a212b' },
  { id: 'upper_hallway_north', name: '2nd Floor North Connector', cx: 150, cz: 92, w: 102, d: 14, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'gym_north_hallway', name: 'Gym North Connector', cx: 144, cz: 65, w: 18, d: 40, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'nurses_office', name: "Nurse's Office", cx: 164, cz: 112, w: 32, d: 26, floorY: 11, h: 10, color: '#1f3d3c', floorTexture: "wood_floor.png" },
  { id: 'nurses_office_backroom', name: "Nurse's Office Backroom", cx: 164, cz: 135, w: 24, d: 20, floorY: 11, h: 10, color: '#19302f', floorTexture: "wood_floor.png" },
  { id: 'stairwell_2', name: 'Secondary Stairwell', cx: 90, cz: -22, w: 16, d: 24, floorY: 0, h: 22, climbHeight: 11, color: '#542828', isStaircase: true, stairDirection: 'S_N' },
  { id: 'lower_hallway_south', name: 'South Wing Hallway', cx: 90, cz: -76.5, w: 14, d: 85, floorY: 0, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'main_office', name: 'Main Office', cx: 90, cz: -139, w: 50, d: 40, floorY: 0, h: 10, color: '#1e293b', floorTexture: "wood_floor.png" },
];

// ============================================================================
// Room Gaps (Door Openings in Walls)
// ============================================================================

export const ROOM_GAPS: Record<string, RoomGap[]> = {
  starter: [{ side: 'N', center: -17.5, width: 6.0 }],
  hallway: [
    { side: 'S', center: -20, width: 6.0 },
    { side: 'N', center: -15, width: 6.0 },
    { side: 'N', center: 20, width: 6.0 },
    { side: 'E', center: 0, width: 6.0 },
    { side: 'W', center: 0, width: 14.0 },
  ],
  science_lab: [{ side: 'S', center: 0, width: 6.0 }],
  library: [{ side: 'S', center: 0, width: 6.0 }],
  stairwell: [
    { side: 'W', center: 0, width: 6.0 },
    { side: 'E', center: 0, width: 10.0 },
  ],
  gym: [
    { side: 'W', center: -18, width: 10.0 },
    { side: 'S', center: 0, width: 10.0 },
    { side: 'N', center: 0, width: 10.0 },
  ],
  cafeteria: [
    { side: 'E', center: 0, width: 14.0 },
    { side: 'N', center: 0, width: 12.0 },
  ],
  courtyard: [{ side: 'S', center: 13, width: 12.0 }],
  boiler_room: [{ side: 'N', center: 0, width: 12.0 }],
  underground_tunnel: [
    { side: 'S', center: 0, width: 12.0 },
    { side: 'N', center: 0, width: 12.0 },
  ],
  the_vault: [{ side: 'S', center: 0, width: 12.0 }],
  upper_hallway: [
    { side: 'W', center: 0, width: 10 },
    { side: 'E', center: 0, width: 10 },
    { side: 'S', center: 0, width: 6 },
    { side: 'N', center: 0, width: 10 },
  ],
  principal_office: [{ side: 'S', center: 0, width: 8.0 }],
  upper_hallway_2: [
    { side: 'S', center: 0, width: 10 },
    { side: 'W', center: 0, width: 8.0 },
    { side: 'E', center: 40.5, width: 10.0 },
    { side: 'N', center: 0, width: 8.0 },
  ],
  security_room: [{ side: 'E', center: 0, width: 8.0 }],
  upper_hallway_north: [
    { side: 'W', center: 0, width: 10.0 },
    { side: 'N', center: 12, width: 10.0 },
    { side: 'N', center: 14.0, width: 6.0 },
    { side: 'S', center: -6, width: 10.0 },
  ],
  gym_north_hallway: [
    { side: 'N', center: 0, width: 10.0 },
    { side: 'S', center: 0, width: 10.0 },
  ],
  nurses_office: [
    { side: 'S', center: 0, width: 6.0 },
    { side: 'N', center: 0, width: 6.0 },
  ],
  nurses_office_backroom: [{ side: 'S', center: 0, width: 6.0 }],
  stairwell_2: [
    { side: 'N', center: 0, width: 6.0 },
    { side: 'S', center: 0, width: 6.0 },
  ],
  lower_hallway_south: [
    { side: 'N', center: 0, width: 6.0 },
    { side: 'S', center: 0, width: 6.0 },
  ],
  main_office: [{ side: 'N', center: 0, width: 6.0 }],
};

// ============================================================================
// Door Configuration (Generated from ROOM_GAPS)
// Each gap becomes a purchasable door
// ============================================================================

export const DOORS_CONFIG: DoorConfig[] = [
  { roomId: 'starter', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'hallway', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'hallway', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'hallway', side: 'N', gapIndex: 1, cost: 750 },
  { roomId: 'hallway', side: 'E', gapIndex: 0, cost: 750 },
  { roomId: 'hallway', side: 'W', gapIndex: 0, cost: 1000 },
  { roomId: 'science_lab', side: 'S', gapIndex: 0, cost: 1000 },
  { roomId: 'library', side: 'S', gapIndex: 0, cost: 1000 },
  { roomId: 'stairwell', side: 'W', gapIndex: 0, cost: 750 },
  { roomId: 'stairwell', side: 'E', gapIndex: 0, cost: 750 },
  { roomId: 'gym', side: 'W', gapIndex: 0, cost: 1250 },
  { roomId: 'gym', side: 'S', gapIndex: 0, cost: 1000 },
  { roomId: 'gym', side: 'N', gapIndex: 0, cost: 1000 },
  { roomId: 'cafeteria', side: 'E', gapIndex: 0, cost: 1250 },
  { roomId: 'cafeteria', side: 'N', gapIndex: 0, cost: 1000 },
  { roomId: 'courtyard', side: 'S', gapIndex: 0, cost: 1250 },
  { roomId: 'underground_tunnel', side: 'S', gapIndex: 0, cost: 1000 },
  { roomId: 'underground_tunnel', side: 'N', gapIndex: 0, cost: 1000 },
  { roomId: 'the_vault', side: 'S', gapIndex: 0, cost: 1500 },
  { roomId: 'upper_hallway', side: 'W', gapIndex: 0, cost: 750 },
  { roomId: 'upper_hallway', side: 'E', gapIndex: 0, cost: 750 },
  { roomId: 'upper_hallway', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'upper_hallway', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'principal_office', side: 'S', gapIndex: 0, cost: 1000 },
  { roomId: 'upper_hallway_2', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'upper_hallway_2', side: 'W', gapIndex: 0, cost: 750 },
  { roomId: 'upper_hallway_2', side: 'E', gapIndex: 0, cost: 750 },
  { roomId: 'upper_hallway_2', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'security_room', side: 'E', gapIndex: 0, cost: 1000 },
  { roomId: 'upper_hallway_north', side: 'W', gapIndex: 0, cost: 750 },
  { roomId: 'upper_hallway_north', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'upper_hallway_north', side: 'N', gapIndex: 1, cost: 750 },
  { roomId: 'upper_hallway_north', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'gym_north_hallway', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'gym_north_hallway', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'nurses_office', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'nurses_office', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'nurses_office_backroom', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'stairwell_2', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'stairwell_2', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'lower_hallway_south', side: 'N', gapIndex: 0, cost: 750 },
  { roomId: 'lower_hallway_south', side: 'S', gapIndex: 0, cost: 750 },
  { roomId: 'main_office', side: 'N', gapIndex: 0, cost: 1000 },
];

// ============================================================================
// Map Props (Interactable Objects)
// ============================================================================

export const MAP_PROPS: MapProps[] = [
  { id: 'mystery_box_spawn', type: 'interactable', roomId: 'starter', cx: 15, cz: -25, w: 4, d: 2, h: 3, color: '#8b5a2b' },
  { id: 'main_power_switch', type: 'interactable', roomId: 'security_room', cx: 54, cz: 51.5, w: 4, d: 1, h: 4, color: '#8b0000' },
];

// ============================================================================
// Staircase Elevation Helper
// Calculates player elevation on staircases based on position and direction
// ============================================================================

export function getStaircaseElevation(r: Room, px: number, pz: number): number {
  const dir = r.stairDirection || (r.w > r.d ? 'W_E' : 'N_S');
  const climb = r.climbHeight ?? r.h;
  if (dir === 'W_E') {
    const xMin = r.cx - r.w / 2;
    const t = Math.max(0, Math.min(1, (px - xMin) / r.w));
    return r.floorY + t * climb;
  } else if (dir === 'E_W') {
    const xMin = r.cx - r.w / 2;
    const t = Math.max(0, Math.min(1, (px - xMin) / r.w));
    return r.floorY + (1 - t) * climb;
  } else if (dir === 'S_N') {
    // S_N: south (negative Z) is bottom (height=0), north (positive Z) is top (height=climb)
    const zMin = r.cz - r.d / 2;
    const t = Math.max(0, Math.min(1, (pz - zMin) / r.d));
    return r.floorY + t * climb;
  } else if (dir === 'N_S') {
    // N_S: north (positive Z) is bottom (height=0), south (negative Z) is top (height=climb)
    const zMin = r.cz - r.d / 2;
    const t = Math.max(0, Math.min(1, (pz - zMin) / r.d));
    return r.floorY + (1 - t) * climb;
  }
  return r.floorY;
}
