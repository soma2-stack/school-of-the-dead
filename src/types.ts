export interface RoomConfig {
  id: string;
  name: string;
  sub: string;
  cx: number;
  cz: number;
  w: number;
  d: number;
  floorY: number;
  h: number;
  floorLvl: number;
  zoneR: number;
  color: string;
  presetType: string;
  skipWalls?: string[];
  walls?: Record<string, { matType: string }>;
  customWalls?: Array<{
    axis: 'x' | 'z';
    cx: number;
    cz: number;
    len: number;
    h?: number;
    baseY?: number;
    matType?: string;
  }>;
}

export interface DoorConfig {
  id: string;
  type: 'single' | 'double_caf' | 'gap' | 'gap_frame' | 'open';
  axis: 'x' | 'z';
  x: number;
  z: number;
  w: number;
  h: number;
  shiftZ?: number;
  shiftX?: number;
  rx?: number;
  cost: number;
  unlocked: boolean;
  name: string;
}

export interface WindowConfig {
  axis: 'x' | 'z';
  x: number;
  z: number;
  w: number;
  h: number;
  bottomY: number;
}

export interface LightConfig {
  type: 'ambient' | 'sun' | 'pt' | 'pt_flicker';
  x?: number;
  y?: number;
  z?: number;
  color: number;
  intensity: number;
  distance?: number;
  phase?: number;
  speed?: number;
}

export interface DecorConfig {
  type: 'staircase' | 'floor' | 'mesh' | 'cafeteria_generator';
  x?: number;
  y?: number;
  z?: number;
  w?: number;
  h?: number;
  d?: number;
  steps?: number;
  color?: string;
}
