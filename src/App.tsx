import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { 
  Sliders, 
  Eye, 
  Compass, 
  Map as MapIcon, 
  RotateCcw, 
  X, 
  Info, 
  ChevronRight,
  Maximize,
  HelpCircle,
  Activity,
  Plus,
  Trash2,
  Grid,
  Shield,
  EyeOff,
  Download,
  Undo2,
  Redo2
} from 'lucide-react';

// ============================================================================
// ROOMS DATA SETUP (Standard Westbrook High Layout Mockup)
// ============================================================================
interface Room {
  id: string;
  name: string;
  cx: number; // Center X coordinates
  cz: number; // Center Z coordinates
  w: number;  // Width
  d: number;  // Depth (Length)
  h: number;  // Height
  floorY: number; // elevation level
  color: string;
  disabledWalls?: Array<'N' | 'S' | 'E' | 'W'>;
  disabledFloor?: boolean;
  disabledCeiling?: boolean;
  isStaircase?: boolean;
  stairDirection?: 'N_S' | 'S_N' | 'W_E' | 'E_W';
  carvedFloors?: string[];   // coordinates of carved out floor tiles "ix,iz"
  carvedCeilings?: string[]; // coordinates of carved out ceiling tiles "ix,iz"
  climbHeight?: number;      // physical height of steps climbing
  trapdoors?: Array<{ cx: number; cz: number; w: number; d: number }>;
  ceilingHoles?: Array<{ cx: number; cz: number; w: number; d: number }>;
  floorTexture?: string;
}

// Procedural textures generator cache
const PROCEDURAL_TEXTURES_CACHE: Record<string, THREE.CanvasTexture> = {};

const getProceduralTexture = (type: 'wood_floor' | 'ceiling_tiles' | 'wall_tiles'): THREE.CanvasTexture => {
  if (PROCEDURAL_TEXTURES_CACHE[type]) {
    return PROCEDURAL_TEXTURES_CACHE[type];
  }

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  if (type === 'wood_floor') {
    // Warm weathering dark rustic wood planks
    ctx.fillStyle = '#452c1e';
    ctx.fillRect(0, 0, 512, 512);

    const plankHeight = 512 / 8;
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#4e3425' : '#3c2518';
      if (i % 3 === 0) ctx.fillStyle = '#432a1d';
      ctx.fillRect(0, i * plankHeight, 512, plankHeight);

      // Draw wood grain lines
      ctx.strokeStyle = '#29170e';
      ctx.lineWidth = 1;
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.moveTo(0, i * plankHeight + Math.random() * plankHeight);
        ctx.quadraticCurveTo(
          256, i * plankHeight + Math.random() * plankHeight * 2 - plankHeight / 2,
          512, i * plankHeight + Math.random() * plankHeight
        );
        ctx.stroke();
      }

      // Draw joints (vertical seams staggered)
      const joints = i % 2 === 0 ? [150, 380] : [220, 440];
      ctx.fillStyle = '#1e110a';
      joints.forEach(x => {
        ctx.fillRect(x, i * plankHeight, 2, plankHeight);
      });

      // Dark edges for planks
      ctx.strokeStyle = '#1a0d06';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, i * plankHeight);
      ctx.lineTo(512, i * plankHeight);
      ctx.stroke();
    }
  } else if (type === 'ceiling_tiles') {
    // Off-white decayed ceiling tiles with water-damaged stains, mold, metal frame
    ctx.fillStyle = '#dcd5ca';
    ctx.fillRect(0, 0, 512, 512);

    // Grunge noise background
    for (let i = 0; i < 600; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)';
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }

    // Grid details (2x2 tile layout in 512x512)
    const tileSize = 256;
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 2; c++) {
        const x = c * tileSize;
        const y = r * tileSize;

        // Water stains halos
        ctx.fillStyle = 'rgba(115, 87, 59, 0.15)';
        ctx.strokeStyle = 'rgba(92, 70, 48, 0.35)';
        ctx.lineWidth = 1.5;

        for (let s = 0; s < 4; s++) {
          const cx = x + 30 + Math.random() * (tileSize - 60);
          const cy = y + 30 + Math.random() * (tileSize - 60);
          const radius = 25 + Math.random() * 45;

          ctx.beginPath();
          ctx.arc(cx, cy, radius, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(cx, cy, radius + 4, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Mold specks
        ctx.fillStyle = 'rgba(40, 45, 35, 0.65)';
        for (let m = 0; m < 35; m++) {
          const mx = x + Math.random() * tileSize;
          const my = y + Math.random() * tileSize;
          ctx.fillRect(mx, my, 1.5, 1.5);
        }

        // Cracks and paper tear
        ctx.strokeStyle = 'rgba(50,50,50,0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        let px = x + 20;
        let py = y + 20;
        ctx.moveTo(px, py);
        for (let k = 0; k < 10; k++) {
          px += (Math.random() - 0.5) * 15;
          py += Math.random() * 20;
          ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    }

    // Metal Grid border overlays
    ctx.strokeStyle = '#2d2e33';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(512, 0);
    ctx.moveTo(0, 256); ctx.lineTo(512, 256);
    ctx.moveTo(0, 512); ctx.lineTo(512, 512);
    ctx.moveTo(0, 0); ctx.lineTo(0, 512);
    ctx.moveTo(256, 0); ctx.lineTo(256, 512);
    ctx.moveTo(512, 0); ctx.lineTo(512, 512);
    ctx.stroke();

    // Red-brown rust spot highlights
    ctx.fillStyle = 'rgba(92, 49, 14, 0.55)';
    for (let gridIdx = 0; gridIdx < 20; gridIdx++) {
      ctx.fillRect(Math.random() * 512, 253 + Math.random() * 6, Math.random() * 25, Math.random() * 3);
      ctx.fillRect(253 + Math.random() * 6, Math.random() * 512, Math.random() * 3, Math.random() * 25);
    }
  } else if (type === 'wall_tiles') {
    // Dirty mossy green school wall tiles
    ctx.fillStyle = '#6d8a6b';
    ctx.fillRect(0, 0, 512, 512);

    const numTiles = 8;
    const tSize = 64;
    for (let r = 0; r < numTiles; r++) {
      for (let c = 0; c < numTiles; c++) {
        const tx = c * tSize;
        const ty = r * tSize;

        ctx.fillStyle = (r + c) % 2 === 0 ? '#728e6f' : '#688566';
        if ((r * c) % 5 === 0) ctx.fillStyle = '#5c7859';
        ctx.fillRect(tx + 1, ty + 1, tSize - 2, tSize - 2);

        // Tile inner glow bevel borders
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.strokeRect(tx + 2, ty + 2, tSize - 4, tSize - 4);

        // Random subtle crack offsets
        if (Math.random() < 0.15) {
          ctx.strokeStyle = 'rgba(20, 25, 20, 0.55)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(tx + Math.random() * tSize, ty + Math.random() * tSize);
          ctx.lineTo(tx + Math.random() * tSize, ty + Math.random() * tSize);
          ctx.stroke();
        }

        // Hollow missing tiles showing dark cement/rock
        if ((r === 2 && c === 4) || (r === 6 && c === 1) || (r === 4 && c === 6)) {
          ctx.fillStyle = '#222520';
          ctx.fillRect(tx + 2, ty + 2, tSize - 4, tSize - 4);

          ctx.fillStyle = '#444c41';
          for (let b = 0; b < 10; b++) {
            ctx.fillRect(tx + Math.random() * tSize, ty + Math.random() * tSize, Math.random() * 6, Math.random() * 6);
          }
        }
      }
    }

    // Tile Grout Grid lines (mossy black/grey)
    ctx.strokeStyle = '#252924';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= numTiles; i++) {
      ctx.moveTo(0, i * tSize); ctx.lineTo(512, i * tSize);
      ctx.moveTo(i * tSize, 0); ctx.lineTo(i * tSize, 512);
    }
    ctx.stroke();

    // Dark mold drippings vertically
    for (let dripIdx = 0; dripIdx < 12; dripIdx++) {
      const dx = Math.random() * 512;
      const dy = Math.random() * 80;
      const dH = 150 + Math.random() * 250;

      const grad = ctx.createLinearGradient(dx, dy, dx, dy + dH);
      grad.addColorStop(0, 'rgba(21, 26, 19, 0.55)');
      grad.addColorStop(0.3, 'rgba(15, 20, 14, 0.35)');
      grad.addColorStop(1, 'rgba(15, 20, 14, 0.0)');

      ctx.fillStyle = grad;
      ctx.fillRect(dx - 3, dy, 6, dH);
    }

    // Scratch marks & etched graffiti
    ctx.strokeStyle = 'rgba(224, 215, 200, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.font = '22px Arial';
    ctx.strokeText("WASH ME", 80, 200);
    ctx.strokeText("CLASS OF '95", 280, 390);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  PROCEDURAL_TEXTURES_CACHE[type] = texture;
  return texture;
};

const getStaircaseElevationMath = (r: Room, px: number, pz: number): number => {
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
    const zMin = r.cz - r.d / 2;
    const t = Math.max(0, Math.min(1, (pz - zMin) / r.d));
    return r.floorY + (1 - t) * climb;
  } else { // 'N_S'
    const zMin = r.cz - r.d / 2;
    const t = Math.max(0, Math.min(1, (pz - zMin) / r.d));
    return r.floorY + t * climb;
  }
};

const getCardinalDirection = (radians: number): { degree: number; label: string } => {
  let deg = (radians * 180) / Math.PI;
  // normalize to [0, 360) where 0 is North, 90 is East, 180 is South, 270 is West
  deg = ((deg % 360) + 360) % 360;
  
  const directions = [
    { limit: 22.5, label: 'N' },
    { limit: 67.5, label: 'NE' },
    { limit: 112.5, label: 'E' },
    { limit: 157.5, label: 'SE' },
    { limit: 202.5, label: 'S' },
    { limit: 247.5, label: 'SW' },
    { limit: 292.5, label: 'W' },
    { limit: 337.5, label: 'NW' },
    { limit: 360, label: 'N' }
  ];
  const item = directions.find(d => deg < d.limit);
  const label = item ? item.label : 'N';
  return { degree: Math.round(deg), label };
};

const INITIAL_ROOMS: Room[] = [
  { id: 'starter', name: 'Starter Classroom', cx: 17.5, cz: -40, w: 75, d: 60, floorY: 0, h: 10, color: '#3d5c3a', floorTexture: "wood_floor.png" },
  { id: 'hallway', name: 'Main Hallway', cx: 20, cz: -3, w: 80, d: 14, floorY: 0, h: 10, color: '#323247' },
  { id: 'science_lab', name: 'Science Lab', cx: 5, cz: 26.5, w: 30, d: 45, floorY: 0, h: 10, color: '#4a3720' },
  { id: 'library', name: 'Library Shelf Area', cx: 40, cz: 26.5, w: 36, d: 45, floorY: 0, h: 10, color: '#453c1b', floorTexture: "wood_floor.png" },
  { id: 'stairwell', name: 'Stairwell Access', cx: 68, cz: -3, w: 16, d: 10, floorY: 0, h: 22, climbHeight: 11, color: '#542828', isStaircase: true, stairDirection: 'W_E' },
  {
    id: 'gym',
    name: 'Gymnasium (Floor 2)',
    cx: 144,
    cz: 15,
    w: 80,
    d: 60,
    floorY: 11,
    h: 18,
    color: '#20434f',
    carvedFloors: []
  },
  { id: 'cafeteria', name: 'Cafeteria Wing', cx: -50, cz: -3, w: 60, d: 50, floorY: 0, h: 10, color: '#2a261f' },
  { id: 'courtyard', name: 'Overgrown Courtyard', cx: -63, cz: 57, w: 90, d: 70, floorY: 0, h: 15, color: '#162e1a', disabledCeiling: true, trapdoors: [ { cx: -42, cz: -48.5, w: 8, d: 8 }, { cx: -42, cz: -31, w: 12, d: 6 } ] },
  { id: 'underground_tunnel', name: 'Utility Tunnel', cx: -103, cz: 63.4, w: 12, d: 80, floorY: -12, h: 9, color: '#111412', ceilingHoles: [ { cx: -42, cz: -48.5, w: 8, d: 8 }, { cx: -42, cz: -31, w: 12, d: 6 } ] },
  { id: 'the_vault', name: 'Fallout Shelter Vault', cx: -103, cz: 123.4, w: 60, d: 40, floorY: -12, h: 9, color: '#282b29' },
  { id: 'upper_hallway', name: '2nd Floor Hallway', cx: 90, cz: -3, w: 28, d: 14, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'principal_office', name: "Principal's Office", cx: 90, cz: 127, w: 56, d: 56, floorY: 11, h: 10, color: '#362a2a' },
  { id: 'upper_hallway_2', name: '2nd floor hallway 2', cx: 90, cz: 51.5, w: 18, d: 95, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'security_room', name: 'Master Security & Breaker Room', cx: 66, cz: 51.5, w: 30, d: 35, floorY: 11, h: 10, color: '#1a212b' },
  { id: 'upper_hallway_north', name: '2nd Floor North Connector', cx: 150, cz: 92, w: 102, d: 14, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'gym_north_hallway', name: 'Gym North Connector', cx: 144, cz: 65, w: 18, d: 40, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'nurses_office', name: "Nurse's Office", cx: 164, cz: 112, w: 32, d: 26, floorY: 11, h: 10, color: '#1f3d3c', floorTexture: "wood_floor.png" },
  { id: 'nurses_office_backroom', name: "Nurse's Office Backroom", cx: 164, cz: 135, w: 24, d: 20, floorY: 11, h: 10, color: '#19302f', floorTexture: "wood_floor.png" },
  { id: 'stairwell_2', name: 'Secondary Stairwell', cx: 90, cz: -22, w: 16, d: 24, floorY: 0, h: 22, climbHeight: 11, color: '#542828', isStaircase: true, stairDirection: 'N_S' },
  { id: 'lower_hallway_south', name: 'South Wing Hallway', cx: 90, cz: -76.5, w: 14, d: 85, floorY: 0, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" },
  { id: 'main_office', name: 'Main Office', cx: 90, cz: -139, w: 50, d: 40, floorY: 0, h: 10, color: '#1e293b', floorTexture: "wood_floor.png" }
];

// Connection/Doorway openings config
const ROOM_GAPS: Record<string, Array<{ side: 'N' | 'S' | 'E' | 'W'; center: number; width: number }>> = {
  starter: [{ side: 'N', center: -17.5, width: 6.0 }],
  hallway: [
    { side: 'S', center: -20, width: 6.0 },   // connects to starter (global X = 0)
    { side: 'N', center: -15, width: 6.0 },   // connects to science lab (global X = 5)
    { side: 'N', center: 20, width: 6.0 },    // connects to library (global X = 40)
    { side: 'E', center: 0, width: 6.0 },     // connects to stairwell (global Z = -3)
    { side: 'W', center: 0, width: 14.0 },   // connects to cafeteria (global Z = -3)
  ],
  science_lab: [{ side: 'S', center: 0, width: 6.0 }],
  library: [{ side: 'S', center: 0, width: 6.0 }],
  stairwell: [
    { side: 'W', center: 0, width: 6.0 },     // connects to hallway (global Z = -3)
    { side: 'E', center: 0, width: 10.0 }     // connects to gym (global Z = -3)
  ],
  gym: [
    { side: 'W', center: -18, width: 10.0 },     // second floor entrance (global X = 76, aligns with staircase)
    { side: 'S', center: 0, width: 10.0 },
    { side: 'N', center: 0, width: 10.0 }
  ],
  cafeteria: [
    { side: 'E', center: 0, width: 14.0 },     // connects to hallway (global Z = -3)
    { side: 'N', center: 0, width: 12.0 }
  ],
  courtyard: [
    { side: 'S', center: 13, width: 12.0 }
  ],
  boiler_room: [
    { side: 'N', center: 0, width: 12.0 }
  ],
  underground_tunnel: [
    { side: 'S', center: 0, width: 12.0 },
    { side: 'N', center: 0, width: 12.0 }
  ],
  the_vault: [
    { side: 'S', center: 0, width: 12.0 }
  ],
  upper_hallway: [
    { side: 'W', center: 0, width: 10 },
    { side: 'E', center: 0, width: 10 },
    { side: 'S', center: 0, width: 6 },
    { side: 'N', center: 0, width: 10 }
  ],
  principal_office: [
    { side: 'S', center: 0, width: 8.0 }
  ],
  upper_hallway_2: [
    { side: 'S', center: 0, width: 10 },
    { side: 'W', center: 0, width: 8.0 },
    { side: 'E', center: 40.5, width: 10.0 },
    { side: 'N', center: 0, width: 8.0 }
  ],
  security_room: [
    { side: 'E', center: 0, width: 8.0 }
  ],
  upper_hallway_north: [
    { side: 'W', center: 0, width: 10.0 },
    { side: 'N', center: 12, width: 10.0 },
    { side: 'N', center: 14.0, width: 6.0 },
    { side: 'S', center: -6, width: 10.0 }
  ],
  gym_north_hallway: [
    { side: 'N', center: 0, width: 10.0 },
    { side: 'S', center: 0, width: 10.0 }
  ],
  nurses_office: [
    { side: 'S', center: 0, width: 6.0 },
    { side: 'N', center: 0, width: 6.0 }
  ],
  nurses_office_backroom: [
    { side: 'S', center: 0, width: 6.0 }
  ],
  stairwell_2: [
    { side: 'N', center: 0, width: 6.0 },
    { side: 'S', center: 0, width: 6.0 }
  ],
  lower_hallway_south: [
    { side: 'N', center: 0, width: 6.0 },
    { side: 'S', center: 0, width: 6.0 }
  ],
  main_office: [
    { side: 'N', center: 0, width: 6.0 }
  ]
};

const MAP_PROPS = [
  { "id": "mystery_box_spawn", "type": "interactable", "roomId": "starter", "cx": 15, "cz": -25, "w": 4, "d": 2, "h": 3, "color": "#8b5a2b" },
  { "id": "main_power_switch", "type": "interactable", "roomId": "security_room", "cx": 54, "cz": 51.5, "w": 4, "d": 1, "h": 4, "color": "#8b0000" }
];

export const MAP_CONFIG = {
  wallThickness: 0.4,
  ceilingThickness: 0.15,
  doorHeight: 7.5,
  floorThickness: 0.2
};

// Player eye level height & radius limits
const PLAYER_EYE_HEIGHT = 4.5;
const PLAYER_RADIUS = 1.0;

export default function App() {
  // Load initial states from localStorage if available
  const [rooms, setRooms] = useState<Room[]>(() => {
    try {
      const saved = localStorage.getItem('dead_halls_rooms');
      if (saved) {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Adjust coordinates and configurations to align correctly with user selections
          parsed = parsed.map((r: any) => {
            if (r.id === 'stairwell') {
              return { 
                ...r, 
                cx: 68, 
                cz: -3, 
                w: 16, 
                d: 10, 
                floorY: 0, 
                h: 22, 
                climbHeight: 11,
                isStaircase: true, 
                stairDirection: 'W_E',
                disabledCeiling: false
              };
            }
            if (r.id === 'starter') {
              return {
                ...r,
                cx: 17.5,
                cz: -40,
                w: 75,
                d: 60,
                h: 10,
                disabledCeiling: false,
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'science_lab') {
              return {
                ...r,
                cx: 5,
                cz: 26.5,
                w: 30,
                d: 45,
                h: 10,
                disabledCeiling: false
              };
            }
            if (r.id === 'library') {
              return {
                ...r,
                cx: 40,
                cz: 26.5,
                w: 36,
                d: 45,
                h: 10,
                disabledCeiling: false,
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'gym') {
              // Ensure gymnasium properties are correct but DO NOT force carvedFloors anymore!
              // Keep their existing carved floors if they customized it, otherwise empty list
              return { 
                ...r, 
                cx: 144, 
                cz: 15, 
                w: 80, 
                d: 60, 
                floorY: 11, 
                h: 18,
                disabledCeiling: false,
                carvedFloors: r.carvedFloors || []
              };
            }
            if (r.id === 'cafeteria') {
              // Strictly enforce ONLY the cafeteria position X to -50 and Z to -3
              return {
                ...r,
                cx: -50,
                cz: -3
              };
            }
             if (r.id === 'courtyard') {
              // Strictly enforce courtyard position X to -63 and Z to 57
              return {
                ...r,
                cx: -63,
                cz: 57,
                trapdoors: [ { cx: -42, cz: -48.5, w: 8, d: 8 }, { cx: -42, cz: -31, w: 12, d: 6 } ]
              };
            }
            if (r.id === 'underground_tunnel') {
              return {
                ...r,
                cx: -103,
                cz: 63.4,
                w: 12,
                d: 80,
                floorY: -12,
                h: 9,
                disabledCeiling: false,
                ceilingHoles: [ { cx: -42, cz: -48.5, w: 8, d: 8 }, { cx: -42, cz: -31, w: 12, d: 6 } ]
              };
            }
            if (r.id === 'the_vault') {
              return {
                ...r,
                cx: -103,
                cz: 123.4,
                w: 60,
                d: 40,
                floorY: -12,
                h: 9,
                disabledCeiling: false
              };
            }
            if (r.id === 'upper_hallway') {
              return {
                ...r,
                cx: 90,
                cz: -3,
                w: 28,
                d: 14,
                floorY: 11,
                h: 10,
                color: '#2a2d36',
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'principal_office') {
              return {
                ...r,
                cx: 90,
                cz: 127,
                w: 56,
                d: 56,
                floorY: 11,
                h: 10,
                color: '#362a2a'
              };
            }
            if (r.id === 'upper_hallway_2') {
              return {
                ...r,
                cx: 90,
                cz: 51.5,
                w: 18,
                d: 95,
                floorY: 11,
                h: 10,
                color: '#2a2d36',
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'security_room') {
              return {
                ...r,
                cx: 66,
                cz: 51.5,
                w: 30,
                d: 35,
                floorY: 11,
                h: 10,
                color: '#1a212b'
              };
            }
            if (r.id === 'upper_hallway_north') {
              return {
                ...r,
                cx: 150,
                cz: 92,
                w: 102,
                d: 14,
                floorY: 11,
                h: 10,
                color: '#2a2d36',
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'gym_north_hallway') {
              return {
                ...r,
                cx: 144,
                cz: 65,
                w: 18,
                d: 40,
                floorY: 11,
                h: 10,
                color: '#2a2d36',
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'nurses_office') {
              return {
                ...r,
                cx: 164,
                cz: 112,
                w: 32,
                d: 26,
                floorY: 11,
                h: 10,
                color: '#1f3d3c',
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'nurses_office_backroom') {
              return {
                ...r,
                cx: 164,
                cz: 135,
                w: 24,
                d: 20,
                floorY: 11,
                h: 10,
                color: '#19302f',
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'stairwell_2') {
              return {
                ...r,
                cx: 90,
                cz: -22,
                w: 16,
                d: 24,
                floorY: 0,
                h: 22,
                climbHeight: 11,
                color: '#542828',
                isStaircase: true,
                stairDirection: 'N_S'
              };
            }
            if (r.id === 'lower_hallway_south') {
              return {
                ...r,
                cx: 90,
                cz: -76.5,
                w: 14,
                d: 85,
                floorY: 0,
                h: 10,
                color: '#2a2d36',
                floorTexture: "wood_floor.png"
              };
            }
            if (r.id === 'main_office') {
              return {
                ...r,
                cx: 90,
                cz: -139,
                w: 50,
                d: 40,
                floorY: 0,
                h: 10,
                color: '#1e293b',
                floorTexture: "wood_floor.png"
              };
            }
            return r;
          });
          // Ensure courtyard is present
          const hasCourtyard = parsed.some((r: any) => r.id === 'courtyard');
          if (!hasCourtyard) {
            parsed.push({ id: 'courtyard', name: 'Overgrown Courtyard', cx: -63, cz: 57, w: 90, d: 70, floorY: 0, h: 15, color: '#162e1a', disabledCeiling: true, trapdoors: [ { cx: -42, cz: -48.5, w: 8, d: 8 }, { cx: -42, cz: -31, w: 12, d: 6 } ] });
          }
          // Ensure underground_tunnel is present
          const hasTunnel = parsed.some((r: any) => r.id === 'underground_tunnel');
          if (!hasTunnel) {
            parsed.push({ id: 'underground_tunnel', name: 'Utility Tunnel', cx: -103, cz: 63.4, w: 12, d: 80, floorY: -12, h: 9, color: '#111412', ceilingHoles: [ { cx: -42, cz: -48.5, w: 8, d: 8 }, { cx: -42, cz: -31, w: 12, d: 6 } ] });
          }
          // Ensure the_vault is present
          const hasVault = parsed.some((r: any) => r.id === 'the_vault');
          if (!hasVault) {
            parsed.push({ id: 'the_vault', name: 'Fallout Shelter Vault', cx: -103, cz: 123.4, w: 60, d: 40, floorY: -12, h: 9, color: '#282b29' });
          }
          // Ensure upper_hallway is present
          const hasUpperHallway = parsed.some((r: any) => r.id === 'upper_hallway');
          if (!hasUpperHallway) {
            parsed.push({ id: 'upper_hallway', name: '2nd Floor Hallway', cx: 90, cz: -3, w: 28, d: 14, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" });
          }
          // Ensure principal_office is present
          const hasPrincipalOffice = parsed.some((r: any) => r.id === 'principal_office');
          if (!hasPrincipalOffice) {
            parsed.push({ id: 'principal_office', name: "Principal's Office", cx: 90, cz: 127, w: 56, d: 56, floorY: 11, h: 10, color: '#362a2a' });
          }
          // Ensure upper_hallway_2 is present
          const hasUpperHallway2 = parsed.some((r: any) => r.id === 'upper_hallway_2');
          if (!hasUpperHallway2) {
            parsed.push({ id: 'upper_hallway_2', name: '2nd floor hallway 2', cx: 90, cz: 51.5, w: 18, d: 95, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" });
          }
          // Ensure security_room is present
          const hasSecurityRoom = parsed.some((r: any) => r.id === 'security_room');
          if (!hasSecurityRoom) {
            parsed.push({ id: 'security_room', name: 'Master Security & Breaker Room', cx: 66, cz: 51.5, w: 30, d: 35, floorY: 11, h: 10, color: '#1a212b' });
          }
          // Ensure upper_hallway_north is present
          const hasUpperHallwayNorth = parsed.some((r: any) => r.id === 'upper_hallway_north');
          if (!hasUpperHallwayNorth) {
            parsed.push({ id: 'upper_hallway_north', name: '2nd Floor North Connector', cx: 150, cz: 92, w: 102, d: 14, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" });
          }
          // Ensure gym_north_hallway is present
          const hasGymNorthHallway = parsed.some((r: any) => r.id === 'gym_north_hallway');
          if (!hasGymNorthHallway) {
            parsed.push({ id: 'gym_north_hallway', name: 'Gym North Connector', cx: 144, cz: 65, w: 18, d: 40, floorY: 11, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" });
          }
          // Ensure nurses_office is present
          const hasNursesOffice = parsed.some((r: any) => r.id === 'nurses_office');
          if (!hasNursesOffice) {
            parsed.push({ id: 'nurses_office', name: "Nurse's Office", cx: 164, cz: 112, w: 32, d: 26, floorY: 11, h: 10, color: '#1f3d3c', floorTexture: "wood_floor.png" });
          }
          // Ensure nurses_office_backroom is present
          const hasNursesBackroom = parsed.some((r: any) => r.id === 'nurses_office_backroom');
          if (!hasNursesBackroom) {
            parsed.push({ id: 'nurses_office_backroom', name: "Nurse's Office Backroom", cx: 164, cz: 135, w: 24, d: 20, floorY: 11, h: 10, color: '#19302f', floorTexture: "wood_floor.png" });
          }
          // Ensure stairwell_2 is present
          const hasStairwell2 = parsed.some((r: any) => r.id === 'stairwell_2');
          if (!hasStairwell2) {
            parsed.push({ id: 'stairwell_2', name: 'Secondary Stairwell', cx: 90, cz: -22, w: 16, d: 24, floorY: 0, h: 22, climbHeight: 11, color: '#542828', isStaircase: true, stairDirection: 'N_S' });
          }
          // Ensure lower_hallway_south is present
          const hasLowerHallwaySouth = parsed.some((r: any) => r.id === 'lower_hallway_south');
          if (!hasLowerHallwaySouth) {
            parsed.push({ id: 'lower_hallway_south', name: 'South Wing Hallway', cx: 90, cz: -76.5, w: 14, d: 85, floorY: 0, h: 10, color: '#2a2d36', floorTexture: "wood_floor.png" });
          }
          // Ensure main_office is present
          const hasMainOffice = parsed.some((r: any) => r.id === 'main_office');
          if (!hasMainOffice) {
            parsed.push({ id: 'main_office', name: 'Main Office', cx: 90, cz: -139, w: 50, d: 40, floorY: 0, h: 10, color: '#1e293b', floorTexture: "wood_floor.png" });
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not load rooms from localStorage", e);
    }
    return INITIAL_ROOMS;
  });

  const [selectedRoomId, setSelectedRoomId] = useState<string>('starter');

  const [roomGaps, setRoomGaps] = useState<Record<string, Array<{ side: 'N' | 'S' | 'E' | 'W'; center: number; width: number }>>>(() => {
    try {
      const saved = localStorage.getItem('dead_halls_room_gaps');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          // Adjust hallway West gap to align with cafeteria now at cz: -3 (center 0 instead of -25)
          if (parsed.hallway && Array.isArray(parsed.hallway)) {
            parsed.hallway = parsed.hallway.map((g: any) => {
              if (g.side === 'W' && g.center === -25) {
                return { ...g, center: 0 };
              }
              return g;
            });
          }
          // Adjust starter North gap to align with shift to cx: 17.5
          if (parsed.starter && Array.isArray(parsed.starter)) {
            parsed.starter = parsed.starter.map((g: any) => {
              if (g.side === 'N' && (g.center === 0 || g.center === -10)) {
                return { ...g, center: -17.5 };
              }
              return g;
            });
          } else {
            parsed.starter = [{ side: 'N', center: -17.5, width: 6.0 }];
          }
          // Ensure stairwell always has the E gap (to Gym) and W gap (to Hallway) correctly defined
          if (!parsed.stairwell || !Array.isArray(parsed.stairwell)) {
            parsed.stairwell = [
              { side: 'W', center: 0, width: 6.0 },
              { side: 'E', center: 0, width: 10.0 }
            ];
          } else {
            const hasW = parsed.stairwell.some((g: any) => g.side === 'W');
            const hasE = parsed.stairwell.some((g: any) => g.side === 'E');
            if (!hasW) {
              parsed.stairwell.push({ side: 'W', center: 0, width: 6.0 });
            }
            if (!hasE) {
              parsed.stairwell.push({ side: 'E', center: 0, width: 10.0 });
            }
          }
          // Inject cafeteria North exit door if missing from saved gaps
          if (parsed.cafeteria && Array.isArray(parsed.cafeteria)) {
            const hasNorthExit = parsed.cafeteria.some((g: any) => g.side === 'N' && g.center === 0);
            if (!hasNorthExit) {
              parsed.cafeteria.push({ side: 'N', center: 0, width: 12.0 });
            }
          } else {
            parsed.cafeteria = [
              { side: 'E', center: 0, width: 14.0 },
              { side: 'N', center: 0, width: 12.0 }
            ];
          }
          // Inject courtyard South gap if missing from saved gaps
          if (!parsed.courtyard || !Array.isArray(parsed.courtyard)) {
            parsed.courtyard = [
              { side: 'S', center: 13, width: 12.0 }
            ];
          } else {
            // Also adjust existing courtyard south gap to match new alignment
            parsed.courtyard = parsed.courtyard.map((g: any) => {
              if (g.side === 'S') return { ...g, center: 13 };
              return g;
            });
          }
          // Inject boiler_room gap if missing
          if (!parsed.boiler_room || !Array.isArray(parsed.boiler_room)) {
            parsed.boiler_room = [
              { side: 'N', center: 0, width: 12.0 }
            ];
          }
          // Inject underground_tunnel gaps if missing
          if (!parsed.underground_tunnel || !Array.isArray(parsed.underground_tunnel)) {
            parsed.underground_tunnel = [
              { side: 'S', center: 0, width: 12.0 },
              { side: 'N', center: 0, width: 12.0 }
            ];
          }
          // Inject the_vault gaps if missing
          if (!parsed.the_vault || !Array.isArray(parsed.the_vault)) {
            parsed.the_vault = [
              { side: 'S', center: 0, width: 12.0 }
            ];
          } else {
            // Adjust to face the tunnel on South side
            parsed.the_vault = parsed.the_vault.map((g: any) => {
              if (g.side === 'N') return { ...g, side: 'S' };
              return g;
            });
            const hasSouth = parsed.the_vault.some((g: any) => g.side === 'S');
            if (!hasSouth) {
              parsed.the_vault.push({ side: 'S', center: 0, width: 12.0 });
            }
          }
          // Inject upper_hallway gaps if missing
          if (!parsed.upper_hallway || !Array.isArray(parsed.upper_hallway)) {
            parsed.upper_hallway = [
              { side: 'W', center: 0, width: 10 },
              { side: 'E', center: 0, width: 10 },
              { side: 'S', center: 0, width: 6 },
              { side: 'N', center: 0, width: 10 }
            ];
          } else {
            const hasNorth = parsed.upper_hallway.some((g: any) => g.side === 'N');
            if (!hasNorth) {
              parsed.upper_hallway.push({ side: 'N', center: 0, width: 10 });
            }
          }
          // Inject principal_office gaps if missing
          if (!parsed.principal_office || !Array.isArray(parsed.principal_office)) {
            parsed.principal_office = [
              { side: 'S', center: 0, width: 8.0 }
            ];
          } else {
            const hasSouth = parsed.principal_office.some((g: any) => g.side === 'S' && g.center === 0);
            if (!hasSouth) {
              parsed.principal_office = parsed.principal_office.filter((g: any) => g.side !== 'S');
              parsed.principal_office.push({ side: 'S', center: 0, width: 8.0 });
            }
          }
          // Inject upper_hallway_2 gaps if missing
          if (!parsed.upper_hallway_2 || !Array.isArray(parsed.upper_hallway_2)) {
            parsed.upper_hallway_2 = [
              { side: 'S', center: 0, width: 10 },
              { side: 'W', center: 0, width: 8.0 },
              { side: 'E', center: 40.5, width: 10.0 },
              { side: 'N', center: 0, width: 8.0 }
            ];
          } else {
            // Check if there is an existing 'W' gap. We can replace/add as needed.
            // Let's ensure there is a gap with center 0 and width 8 on side W if requested.
            const hasWestWithZero = parsed.upper_hallway_2.some((g: any) => g.side === 'W' && g.center === 0);
            if (!hasWestWithZero) {
              // Remove other W gaps to prevent duplicates, then push
              parsed.upper_hallway_2 = parsed.upper_hallway_2.filter((g: any) => g.side !== 'W');
              parsed.upper_hallway_2.push({ side: 'W', center: 0, width: 8.0 });
            }
            // Always overwrite the 'E' side gap to be at center 40.5 to align with the connector at cz = 92
            parsed.upper_hallway_2 = parsed.upper_hallway_2.filter((g: any) => g.side !== 'E');
            parsed.upper_hallway_2.push({ side: 'E', center: 40.5, width: 10.0 });
            // Always ensure the 'N' side gap exists to connect to principal_office
            const hasNorthWithZero = parsed.upper_hallway_2.some((g: any) => g.side === 'N' && g.center === 0);
            if (!hasNorthWithZero) {
              parsed.upper_hallway_2 = parsed.upper_hallway_2.filter((g: any) => g.side !== 'N');
              parsed.upper_hallway_2.push({ side: 'N', center: 0, width: 8.0 });
            }
          }
          // Inject security_room gaps if missing
          if (!parsed.security_room || !Array.isArray(parsed.security_room)) {
            parsed.security_room = [
              { side: 'E', center: 0, width: 8.0 }
            ];
          } else {
            const hasEastWithZero = parsed.security_room.some((g: any) => g.side === 'E' && g.center === 0);
            if (!hasEastWithZero) {
              parsed.security_room = parsed.security_room.filter((g: any) => g.side !== 'E');
              parsed.security_room.push({ side: 'E', center: 0, width: 8.0 });
            }
          }
          // Inject gym South and North wall gaps
          if (parsed.gym && Array.isArray(parsed.gym)) {
            parsed.gym = parsed.gym.filter((g: any) => !(g.side === 'N' && g.center === -14));
            const hasSouth = parsed.gym.some((g: any) => g.side === 'S' && g.center === 0);
            if (!hasSouth) {
              parsed.gym.push({ side: 'S', center: 0, width: 10.0 });
            }
            const hasNorth = parsed.gym.some((g: any) => g.side === 'N' && g.center === 0);
            if (!hasNorth) {
              parsed.gym = parsed.gym.filter((g: any) => g.side !== 'N');
              parsed.gym.push({ side: 'N', center: 0, width: 10.0 });
            }
          }
          // Inject upper_hallway_north gaps if missing or outdated
          if (!parsed.upper_hallway_north || !Array.isArray(parsed.upper_hallway_north)) {
            parsed.upper_hallway_north = [
              { side: 'W', center: 0, width: 10.0 },
              { side: 'N', center: 12, width: 10.0 },
              { side: 'N', center: 14.0, width: 6.0 },
              { side: 'S', center: -6, width: 10.0 }
            ];
          } else {
            const hasWest = parsed.upper_hallway_north.some((g: any) => g.side === 'W' && g.center === 0);
            if (!hasWest) {
              parsed.upper_hallway_north = parsed.upper_hallway_north.filter((g: any) => g.side !== 'W');
              parsed.upper_hallway_north.push({ side: 'W', center: 0, width: 10.0 });
            }
            const hasNorth12 = parsed.upper_hallway_north.some((g: any) => g.side === 'N' && g.center === 12);
            if (!hasNorth12) {
              parsed.upper_hallway_north.push({ side: 'N', center: 12, width: 10.0 });
            }
            const hasNorth14 = parsed.upper_hallway_north.some((g: any) => g.side === 'N' && g.center === 14.0);
            if (!hasNorth14) {
              parsed.upper_hallway_north.push({ side: 'N', center: 14.0, width: 6.0 });
            }
            const hasSouth = parsed.upper_hallway_north.some((g: any) => g.side === 'S' && g.center === -6);
            if (!hasSouth) {
              parsed.upper_hallway_north = parsed.upper_hallway_north.filter((g: any) => g.side !== 'S');
              parsed.upper_hallway_north.push({ side: 'S', center: -6, width: 10.0 });
            }
          }
          // Inject gym_north_hallway gaps if missing or outdated
          if (!parsed.gym_north_hallway || !Array.isArray(parsed.gym_north_hallway)) {
            parsed.gym_north_hallway = [
              { side: 'N', center: 0, width: 10.0 },
              { side: 'S', center: 0, width: 10.0 }
            ];
          } else {
            const hasNorth = parsed.gym_north_hallway.some((g: any) => g.side === 'N' && g.center === 0);
            if (!hasNorth) {
              parsed.gym_north_hallway = parsed.gym_north_hallway.filter((g: any) => g.side !== 'N');
              parsed.gym_north_hallway.push({ side: 'N', center: 0, width: 10.0 });
            }
            const hasSouth = parsed.gym_north_hallway.some((g: any) => g.side === 'S' && g.center === 0);
            if (!hasSouth) {
              parsed.gym_north_hallway = parsed.gym_north_hallway.filter((g: any) => g.side !== 'S');
              parsed.gym_north_hallway.push({ side: 'S', center: 0, width: 10.0 });
            }
          }
          // Inject nurses_office gaps
          if (!parsed.nurses_office || !Array.isArray(parsed.nurses_office)) {
            parsed.nurses_office = [
              { side: 'S', center: 0, width: 6.0 },
              { side: 'N', center: 0, width: 6.0 }
            ];
          } else {
            const hasSouth = parsed.nurses_office.some((g: any) => g.side === 'S' && g.center === 0);
            if (!hasSouth) {
              parsed.nurses_office.push({ side: 'S', center: 0, width: 6.0 });
            }
            const hasNorth = parsed.nurses_office.some((g: any) => g.side === 'N' && g.center === 0);
            if (!hasNorth) {
              parsed.nurses_office.push({ side: 'N', center: 0, width: 6.0 });
            }
          }
          // Inject nurses_office_backroom gaps
          if (!parsed.nurses_office_backroom || !Array.isArray(parsed.nurses_office_backroom)) {
            parsed.nurses_office_backroom = [
              { side: 'S', center: 0, width: 6.0 }
            ];
          } else {
            const hasSouth = parsed.nurses_office_backroom.some((g: any) => g.side === 'S' && g.center === 0);
            if (!hasSouth) {
              parsed.nurses_office_backroom.push({ side: 'S', center: 0, width: 6.0 });
            }
          }
          // Inject stairwell_2 gaps if missing
          if (!parsed.stairwell_2 || !Array.isArray(parsed.stairwell_2)) {
            parsed.stairwell_2 = [
              { side: 'N', center: 0, width: 6.0 },
              { side: 'S', center: 0, width: 6.0 }
            ];
          } else {
            const hasNorth = parsed.stairwell_2.some((g: any) => g.side === 'N' && g.center === 0);
            if (!hasNorth) {
              parsed.stairwell_2.push({ side: 'N', center: 0, width: 6.0 });
            }
            const hasSouth = parsed.stairwell_2.some((g: any) => g.side === 'S' && g.center === 0);
            if (!hasSouth) {
              parsed.stairwell_2.push({ side: 'S', center: 0, width: 6.0 });
            }
          }
          // Inject lower_hallway_south gaps if missing
          if (!parsed.lower_hallway_south || !Array.isArray(parsed.lower_hallway_south)) {
            parsed.lower_hallway_south = [
              { side: 'N', center: 0, width: 6.0 },
              { side: 'S', center: 0, width: 6.0 }
            ];
          } else {
            const hasNorth = parsed.lower_hallway_south.some((g: any) => g.side === 'N' && g.center === 0);
            if (!hasNorth) {
              parsed.lower_hallway_south.push({ side: 'N', center: 0, width: 6.0 });
            }
            const hasSouth = parsed.lower_hallway_south.some((g: any) => g.side === 'S' && g.center === 0);
            if (!hasSouth) {
              parsed.lower_hallway_south.push({ side: 'S', center: 0, width: 6.0 });
            }
          }
          // Inject main_office gaps if missing
          if (!parsed.main_office || !Array.isArray(parsed.main_office)) {
            parsed.main_office = [
              { side: 'N', center: 0, width: 6.0 }
            ];
          } else {
            const hasNorth = parsed.main_office.some((g: any) => g.side === 'N' && g.center === 0);
            if (!hasNorth) {
              parsed.main_office.push({ side: 'N', center: 0, width: 6.0 });
            }
          }
          // Do NOT override parsed.gym anymore so any wall segments edited by the user are fully preserved!
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not load room gaps from localStorage", e);
    }
    return ROOM_GAPS;
  });

  const [noclip, setNoclip] = useState<boolean>(false);

  // --- UNDO / REDO HISTORY ENGINE ---
  const undoStackRef = useRef<Array<{ rooms: Room[]; roomGaps: Record<string, any> }>>([]);
  const redoStackRef = useRef<Array<{ rooms: Room[]; roomGaps: Record<string, any> }>>([]);
  const isUndoRedoAction = useRef<boolean>(false);
  const lastSavedState = useRef<{ rooms: Room[]; roomGaps: Record<string, any> } | null>(null);

  // Initialize lastSavedState once on mount
  useEffect(() => {
    lastSavedState.current = {
      rooms: JSON.parse(JSON.stringify(rooms)),
      roomGaps: JSON.parse(JSON.stringify(roomGaps))
    };
  }, []);

  // Monitor changes to state to record historical snapshots
  useEffect(() => {
    if (isUndoRedoAction.current) {
      isUndoRedoAction.current = false;
      lastSavedState.current = {
        rooms: JSON.parse(JSON.stringify(rooms)),
        roomGaps: JSON.parse(JSON.stringify(roomGaps))
      };
      return;
    }

    if (!lastSavedState.current) return;

    // Check if current state actually differs from last saved state
    const roomsStr = JSON.stringify(rooms);
    const lastRoomsStr = JSON.stringify(lastSavedState.current.rooms);
    const gapsStr = JSON.stringify(roomGaps);
    const lastGapsStr = JSON.stringify(lastSavedState.current.roomGaps);

    if (roomsStr !== lastRoomsStr || gapsStr !== lastGapsStr) {
      // Debounce history snapshot creation by 400ms to group continuous inputs (sliders, typing, paints)
      const timer = setTimeout(() => {
        undoStackRef.current.push({
          rooms: JSON.parse(JSON.stringify(lastSavedState.current!.rooms)),
          roomGaps: JSON.parse(JSON.stringify(lastSavedState.current!.roomGaps))
        });

        redoStackRef.current = [];

        // Cap undo history at 50 steps
        if (undoStackRef.current.length > 50) {
          undoStackRef.current.shift();
        }

        lastSavedState.current = {
          rooms: JSON.parse(JSON.stringify(rooms)),
          roomGaps: JSON.parse(JSON.stringify(roomGaps))
        };
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [rooms, roomGaps]);

  const handleUndo = () => {
    if (undoStackRef.current.length === 0) return;
    
    const prev = undoStackRef.current.pop()!;
    
    redoStackRef.current.push({
      rooms: JSON.parse(JSON.stringify(rooms)),
      roomGaps: JSON.parse(JSON.stringify(roomGaps))
    });

    isUndoRedoAction.current = true;
    setRooms(prev.rooms);
    setRoomGaps(prev.roomGaps);
    
    setSaveNotification('⏪ Undone');
    setTimeout(() => setSaveNotification(null), 1000);
  };

  const handleRedo = () => {
    if (redoStackRef.current.length === 0) return;

    const next = redoStackRef.current.pop()!;

    undoStackRef.current.push({
      rooms: JSON.parse(JSON.stringify(rooms)),
      roomGaps: JSON.parse(JSON.stringify(roomGaps))
    });

    isUndoRedoAction.current = true;
    setRooms(next.rooms);
    setRoomGaps(next.roomGaps);

    setSaveNotification('⏩ Redone');
    setTimeout(() => setSaveNotification(null), 1000);
  };

  // Bind Undo & Redo globally on window keydown
  useEffect(() => {
    const handleUndoRedoKeys = (e: KeyboardEvent) => {
      const isCtrl = e.ctrlKey || e.metaKey;
      if (isCtrl && e.key.toLowerCase() === 'z') {
        const active = document.activeElement?.tagName;
        if (active === 'INPUT' || active === 'TEXTAREA') {
          return;
        }
        e.preventDefault();
        if (e.shiftKey) {
          handleRedo();
        } else {
          handleUndo();
        }
      } else if (isCtrl && e.key.toLowerCase() === 'y') {
        const active = document.activeElement?.tagName;
        if (active === 'INPUT' || active === 'TEXTAREA') {
          return;
        }
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener('keydown', handleUndoRedoKeys);
    return () => {
      window.removeEventListener('keydown', handleUndoRedoKeys);
    };
  }, [rooms, roomGaps]);

  useEffect(() => {
    try {
      localStorage.setItem('dead_halls_rooms', JSON.stringify(rooms));
    } catch (e) {
      console.warn("Could not save rooms to localStorage", e);
    }
  }, [rooms]);

  useEffect(() => {
    try {
      localStorage.setItem('dead_halls_room_gaps', JSON.stringify(roomGaps));
    } catch (e) {
      console.warn("Could not save room gaps to localStorage", e);
    }
  }, [roomGaps]);

  // Toggle tool states
  const [showLabels, setShowLabels] = useState<boolean>(true);       // F1
  const [showGrid, setShowGrid] = useState<boolean>(true);           // F2
  const [showCollisionBounds, setShowCollisionBounds] = useState<boolean>(false); // F3
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);  // F4
  const [showTeleportList, setShowTeleportList] = useState<boolean>(false); // F5
  const [showMap, setShowMap] = useState<boolean>(false);             // M

  // Grid Snapping state parameters
  const [gridSnapping, setGridSnapping] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('dead_halls_grid_snapping');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true;
    }
  });

  const [snapSize, setSnapSize] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('dead_halls_snap_size');
      return saved !== null ? JSON.parse(saved) : 2;
    } catch {
      return 2;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('dead_halls_grid_snapping', JSON.stringify(gridSnapping));
    } catch (e) {
      console.warn("Could not save grid snapping state", e);
    }
  }, [gridSnapping]);

  useEffect(() => {
    try {
      localStorage.setItem('dead_halls_snap_size', JSON.stringify(snapSize));
    } catch (e) {
      console.warn("Could not save snap size state", e);
    }
  }, [snapSize]);
 
  // Spot Selection Focus & Tab Layout State
  const [focusTarget, setFocusTarget] = useState<{
    type: 'wall' | 'floor';
    roomId: string;
    roomName: string;
    side?: 'N' | 'S' | 'E' | 'W';
    point: { x: number; y: number; z: number };
    distance: number;
  } | null>(null);
  const focusTargetRef = useRef<any>(null);
  const [activeTab, setActiveTab] = useState<'room' | 'demolition' | 'tools'>('room');
  const [saveNotification, setSaveNotification] = useState<string | null>(null);

  // Doorway creator inputs
  const [doorwaySide, setDoorwaySide] = useState<'N' | 'S' | 'E' | 'W'>('N');
  const [doorwayCenter, setDoorwayCenter] = useState<number>(0);
  const [doorwayWidth, setDoorwayWidth] = useState<number>(6);

  // Wall Painting Brush State
  const [paintMode, setPaintMode] = useState<'carve' | 'wall'>('carve');
  const [isPaintingLocal, setIsPaintingLocal] = useState<boolean>(false);
  const [demoSubTab, setDemoSubTab] = useState<'walls' | 'floors' | 'ceilings'>('walls');
  const [floorBrushMode, setFloorBrushMode] = useState<'carve' | 'restore'>('carve');

  // Global mouseup registration to reset painting state
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsPaintingLocal(false);
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  // Debug Panel Telemetry State
  const [currentRoomName, setCurrentRoomName] = useState<string>('Starter Classroom');
  const [playerCoords, setPlayerCoords] = useState<{ x: number; y: number; z: number }>({ x: 0, y: PLAYER_EYE_HEIGHT, z: -30 });
  const [fps, setFps] = useState<number>(60);
  const [isPointerLocked, setIsPointerLocked] = useState<boolean>(false);

  // References
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const yaw = useRef<number>(Math.PI); // Facing north initially
  const pitch = useRef<number>(0);
  const playerPos = useRef<THREE.Vector3>(new THREE.Vector3(0, PLAYER_EYE_HEIGHT, -30));
  const velocityY = useRef<number>(0);
  const keysPressed = useRef<Record<string, boolean>>({});
  const isGrounded = useRef<boolean>(true);

  // Projection tracking state for floating name tags
  const [projectedLabels, setProjectedLabels] = useState<Array<{
    id: string;
    name: string;
    w: number;
    d: number;
    h: number;
    x: number;
    y: number;
    visible: boolean;
  }>>([]);

  // Find currently selected room object
  const selectedRoom = useMemo(() => {
    return rooms.find(r => r.id === selectedRoomId) || rooms[0];
  }, [rooms, selectedRoomId]);

  // Calculate relative offset for focused spot on a wall (snapped to whole meters)
  const getFocusOffset = (focus: any, roomsList: Room[]) => {
    if (!focus || focus.type !== 'wall') return 0;
    const room = roomsList.find(r => r.id === focus.roomId);
    if (!room) return 0;
    
    if (focus.side === 'N' || focus.side === 'S') {
      const rawOffset = focus.point.x - room.cx;
      const maxRange = room.w / 2;
      const bound = Math.max(1, Math.floor(maxRange - 2));
      return Math.max(-bound, Math.min(bound, Math.round(rawOffset)));
    } else {
      const rawOffset = focus.point.z - room.cz;
      const maxRange = room.d / 2;
      const bound = Math.max(1, Math.floor(maxRange - 2));
      return Math.max(-bound, Math.min(bound, Math.round(rawOffset)));
    }
  };

  // Helper to calculate visual wall segments as individual tiles of ~2 meters for the selected wall side
  const activeTiles = useMemo(() => {
    const r = selectedRoom;
    const side = doorwaySide;
    const L = (side === 'N' || side === 'S') ? r.w : r.d;
    
    // Divide wall into 2-meter visual tiles (at least 5 and up to 40)
    const tileSize = 2;
    const numTiles = Math.min(40, Math.max(5, Math.floor(L / tileSize)));
    const tilesList: Array<{ index: number; center: number; width: number; isGap: boolean; label: string }> = [];
    
    const gaps = (roomGaps[r.id] || []).filter(g => g.side === side);
    
    for (let i = 0; i < numTiles; i++) {
      const center = -L / 2 + (i + 0.5) * (L / numTiles);
      // Determine if within any gap
      const isGap = gaps.some(g => {
        const gapL = g.center - g.width / 2;
        const gapR = g.center + g.width / 2;
        return center >= gapL - 0.25 && center <= gapR + 0.25;
      });
      
      const label = `${center > 0 ? '+' : ''}${center.toFixed(0)}m`;
      tilesList.push({
        index: i,
        center: Math.round(center * 10) / 10,
        width: L / numTiles,
        isGap,
        label
      });
    }
    return tilesList;
  }, [selectedRoom, doorwaySide, roomGaps]);

  // Method to paint/toggle tiles
  const handleTileInteraction = (tileIndex: number, forcedMode?: 'carve' | 'wall') => {
    const tilesCopy = [...activeTiles];
    const mode = forcedMode || paintMode;
    
    // Set clicked tile status of tilesCopy
    if (tileIndex < 0 || tileIndex >= tilesCopy.length) return;
    
    const updatedTiles = tilesCopy.map((t, idx) => {
      if (idx === tileIndex) {
        return { ...t, isGap: (mode === 'carve') };
      }
      return t;
    });
    
    // Merge contiguous blocks of isGap === true
    const newGapsForSide: Array<{ side: 'N' | 'S' | 'E' | 'W'; center: number; width: number }> = [];
    let currentGroup: Array<typeof updatedTiles[0]> = [];
    
    for (let i = 0; i < updatedTiles.length; i++) {
       const tile = updatedTiles[i];
       if (tile.isGap) {
         currentGroup.push(tile);
       } else {
         if (currentGroup.length > 0) {
           const mergedWidth = currentGroup.reduce((sum, t) => sum + t.width, 0);
           const mergedCenter = (currentGroup[0].center + currentGroup[currentGroup.length - 1].center) / 2;
           newGapsForSide.push({ side: doorwaySide, center: Math.round(mergedCenter * 10) / 10, width: Math.round(mergedWidth * 10) / 10 });
           currentGroup = [];
         }
       }
    }
    if (currentGroup.length > 0) {
       const mergedWidth = currentGroup.reduce((sum, t) => sum + t.width, 0);
       const mergedCenter = (currentGroup[0].center + currentGroup[currentGroup.length - 1].center) / 2;
       newGapsForSide.push({ side: doorwaySide, center: Math.round(mergedCenter * 10) / 10, width: Math.round(mergedWidth * 10) / 10 });
    }

    setRoomGaps(prev => {
      const otherRoomsAndSidesGaps = (prev[selectedRoomId] || []).filter(g => g.side !== doorwaySide);
      return {
        ...prev,
        [selectedRoomId]: [...otherRoomsAndSidesGaps, ...newGapsForSide]
      };
    });
  };

  // Paint/Toggle a specific wall segment tile directly from 3D space intersections
  const paintWallTile3D = (roomId: string, side: 'N' | 'S' | 'E' | 'W', point: { x: number; y: number; z: number }, mode: 'carve' | 'wall') => {
    const r = rooms.find(rm => rm.id === roomId);
    if (!r) return;

    const L = (side === 'N' || side === 'S') ? r.w : r.d;
    const rawOffset = (side === 'N' || side === 'S') ? (point.x - r.cx) : (point.z - r.cz);

    // Calc tile density index (minimum 5, maximum 40, size 2m)
    const tileSize = 2;
    const numTiles = Math.min(40, Math.max(5, Math.floor(L / tileSize)));

    const t = (rawOffset + L / 2) / L;
    const tileIndex = Math.max(0, Math.min(numTiles - 1, Math.floor(t * numTiles)));

    const gaps = (roomGaps[r.id] || []).filter(g => g.side === side);
    const tilesList: Array<{ center: number; width: number; isGap: boolean }> = [];

    for (let i = 0; i < numTiles; i++) {
      const center = -L / 2 + (i + 0.5) * (L / numTiles);
      const isGap = gaps.some(g => {
        const gapL = g.center - g.width / 2;
        const gapR = g.center + g.width / 2;
        return center >= gapL - 0.25 && center <= gapR + 0.25;
      });
      tilesList.push({
        center: Math.round(center * 10) / 10,
        width: L / numTiles,
        isGap
      });
    }

    const updatedTiles = tilesList.map((tile, idx) => {
      if (idx === tileIndex) {
        return { ...tile, isGap: (mode === 'carve') };
      }
      return tile;
    });

    const newGapsForSide: Array<{ side: 'N' | 'S' | 'E' | 'W'; center: number; width: number }> = [];
    let currentGroup: Array<typeof updatedTiles[0]> = [];

    for (let i = 0; i < updatedTiles.length; i++) {
      const tile = updatedTiles[i];
      if (tile.isGap) {
        currentGroup.push(tile);
      } else {
        if (currentGroup.length > 0) {
          const mergedWidth = currentGroup.reduce((sum, t) => sum + t.width, 0);
          const mergedCenter = (currentGroup[0].center + currentGroup[currentGroup.length - 1].center) / 2;
          newGapsForSide.push({ side, center: Math.round(mergedCenter * 10) / 10, width: Math.round(mergedWidth * 10) / 10 });
          currentGroup = [];
        }
      }
    }
    if (currentGroup.length > 0) {
      const mergedWidth = currentGroup.reduce((sum, t) => sum + t.width, 0);
      const mergedCenter = (currentGroup[0].center + currentGroup[currentGroup.length - 1].center) / 2;
      newGapsForSide.push({ side, center: Math.round(mergedCenter * 10) / 10, width: Math.round(mergedWidth * 10) / 10 });
    }

    setRoomGaps(prev => {
      const otherRoomsAndSidesGaps = (prev[r.id] || []).filter(g => g.side !== side);
      const finalGaps = [...otherRoomsAndSidesGaps, ...newGapsForSide];
      
      // If any gap configuration has changed, trigger layout saved/sync warning off
      return {
        ...prev,
        [r.id]: finalGaps
      };
    });
  };

  // Save layout sandbox to local storage
  const handleSave = () => {
    try {
      localStorage.setItem('dead_halls_rooms', JSON.stringify(rooms));
      localStorage.setItem('dead_halls_room_gaps', JSON.stringify(roomGaps));
      setSaveNotification('💾 Layout saved successfully!');
      setTimeout(() => {
        setSaveNotification(null);
      }, 3000);
    } catch (e) {
      console.warn("Could not save level to localStorage", e);
      setSaveNotification('❌ Saving failed! Local storage error.');
      setTimeout(() => {
        setSaveNotification(null);
      }, 3500);
    }
  };

  // Export full interactive 3D blueprint as an HTML file download
  const handleExportHTML = () => {
    const roomsJson = JSON.stringify(rooms, null, 2);
    const gapsJson = JSON.stringify(roomGaps, null, 2);
    
    const htmlString = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dead Halls - 3D Map Blueprint Export</title>
  <script src="https://unpkg.com/three@0.147.0/build/three.min.js"></script>
  <script src="https://unpkg.com/three@0.147.0/examples/js/controls/OrbitControls.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Inter', sans-serif;
      background-color: #080d12;
      color: #cbd5e1;
    }
    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body class="h-screen w-screen flex flex-col md:flex-row overflow-hidden">

  <!-- Left Panel: Directory, Coordinates, JSON schemas for Perplexity -->
  <div class="w-full md:w-[450px] bg-[#0c131a] border-b md:border-b-0 md:border-r border-slate-900 flex flex-col h-[40%] md:h-full z-10">
    <div class="p-6 border-b border-slate-900 flex items-center justify-between">
      <div>
        <h1 class="text-emerald-400 font-mono font-bold tracking-tight text-lg">MAP BLUEPRINT EXPORT</h1>
        <p class="text-xs text-slate-500 font-mono">Dead Halls Map Sandbox v1.40</p>
      </div>
      <span class="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase">ACTIVE</span>
    </div>

    <!-- Scrollable info & code pane -->
    <div class="flex-1 overflow-y-auto p-6 space-y-6">
      <div class="space-y-2">
        <h2 class="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Overview Description</h2>
        <p class="text-xs text-slate-400 leading-relaxed">
          This self-contained file displays the complete <span class="text-slate-300 font-medium">Westbrook High Layout</span> blueprint coordinates and connections in interactive 3D. Share this layout data (JSON below) or upload this whole HTML file to models like <span class="text-emerald-400 font-medium">Perplexity</span>, Gemini, or Claude to analyze school layouts, build navigation networks, or reference design parameters intact.
        </p>
      </div>

      <!-- Action items -->
      <div class="grid grid-cols-3 gap-1.5">
        <button onclick="copyLayoutJSON()" class="bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:text-white px-2 py-2 text-[10px] font-mono font-bold rounded cursor-pointer transition flex items-center justify-center gap-1" title="Copy JSON data to clipboard">
          📋 Copy JSON
        </button>
        <button onclick="downloadThisHTML()" class="bg-emerald-500 text-slate-950 hover:bg-emerald-400 px-2 py-2 text-[10px] font-mono font-bold rounded cursor-pointer transition flex items-center justify-center gap-1" title="Download interactive 3D map as HTML">
          💾 Download HTML
        </button>
        <button onclick="downloadLayoutJSON()" class="bg-amber-500 text-slate-950 hover:bg-amber-400 px-2 py-2 text-[10px] font-mono font-bold rounded cursor-pointer transition flex items-center justify-center gap-1" title="Export layout as raw JSON file">
          📥 Export JSON File
        </button>
      </div>

      <!-- Roof/Ceiling Mode Controls -->
      <div class="space-y-2 border-t border-slate-900 pt-4">
        <h2 class="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Roof / Ceilings ViewMode</h2>
        <div class="grid grid-cols-3 gap-1.5 text-xs">
          <button onclick="setRoofMode('glass')" id="btn-roof-glass" class="px-2 py-1.5 bg-emerald-500 text-slate-950 font-mono font-bold rounded cursor-pointer transition text-center text-[10px]">
            Glass Blue (On)
          </button>
          <button onclick="setRoofMode('solid')" id="btn-roof-solid" class="px-2 py-1.5 bg-slate-900 text-slate-400 border border-slate-800 font-mono font-bold rounded cursor-pointer hover:bg-slate-850 transition text-center text-[10px]">
            Solid Gray
          </button>
          <button onclick="setRoofMode('hidden')" id="btn-roof-hidden" class="px-2 py-1.5 bg-slate-900 text-slate-400 border border-slate-800 font-mono font-bold rounded cursor-pointer hover:bg-slate-850 transition text-center text-[10px]">
            Hidden
          </button>
        </div>
      </div>

      <div class="space-y-2">
        <h2 class="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Room Entities Coordinates (JSON)</h2>
        <div class="relative">
          <pre id="json-code" class="bg-slate-950 p-4 rounded border border-slate-900 text-[10px] text-emerald-500/90 overflow-x-auto max-h-[250px] font-mono"></pre>
        </div>
      </div>

      <div class="space-y-2">
        <h2 class="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">Room Gaps / Connectors Config</h2>
        <div class="relative font-mono">
          <pre id="gaps-code" class="bg-slate-950 p-4 rounded border border-slate-900 text-[10px] text-amber-500/90 overflow-x-auto max-h-[200px] font-mono"></pre>
        </div>
      </div>
    </div>

    <!-- Left side Footer status -->
    <div class="p-4 bg-slate-950 flex items-center justify-between border-t border-slate-900 text-[10px] font-mono text-slate-500">
      <span>GRID OVERRIDE: SYNC ON</span>
      <span>WALK MODE: 3D blue-lines</span>
    </div>
  </div>

  <!-- Right Panel: Interactive 3D Canvas Viewport -->
  <div class="flex-1 relative flex flex-col h-[60%] md:h-full">
    <!-- Viewport Heading Info Overlay -->
    <div class="absolute top-4 left-4 z-20 pointer-events-none space-y-1">
      <div class="bg-slate-950/80 backdrop-blur-md px-3 py-2 rounded border border-slate-900/60 flex items-center gap-3">
        <div class="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
        <span class="text-xs font-mono font-bold tracking-widest text-slate-200">INTERACTIVE BLUEPRINT VIEWPORT</span>
      </div>
      <p class="text-[10px] font-mono text-slate-400 bg-slate-950/40 px-2 py-0.5 rounded w-max">Drag: Rotate | Scroll: Zoom | Right-Click: Pan</p>
    </div>

    <canvas id="blueprint-canvas" class="w-full h-full block"></canvas>
  </div>

  <script id="data-source">
    // Live configured school sandbox boundaries & layout blueprint
    const MAP_ROOMS = ${roomsJson};
    const MAP_GAPS = ${gapsJson};

    const MAP_PROPS = [
      { "id": "mystery_box_spawn", "type": "interactable", "roomId": "starter", "cx": 15, "cz": -25, "w": 4, "d": 2, "h": 3, "color": "#8b5a2b" },
      { "id": "main_power_switch", "type": "interactable", "roomId": "security_room", "cx": 54, "cz": 51.5, "w": 4, "d": 1, "h": 4, "color": "#8b0000" }
    ];

    // Fill left pane text displays
    document.getElementById('json-code').innerText = JSON.stringify(MAP_ROOMS, null, 2);
    document.getElementById('gaps-code').innerText = JSON.stringify(MAP_GAPS, null, 2);

    function copyLayoutJSON() {
      const data = { rooms: MAP_ROOMS, gaps: MAP_GAPS, props: MAP_PROPS };
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      alert('School map blueprint layout JSON copied securely to clipboard!');
    }

    function downloadLayoutJSON() {
      const data = { rooms: MAP_ROOMS, gaps: MAP_GAPS, props: MAP_PROPS };
      const jsonString = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'school_of_the_dead_layout.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    function downloadThisHTML() {
      // Create a blob containing this entire file's elements outerHTML
      const htmlText = document.documentElement.outerHTML;
      const blob = new Blob([htmlText], { type: 'text/html' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'dead_halls_3d_blueprint_export.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    // --- THREE.JS INTERACTIVE ENVIRONMENT WORKFLOW ---
    const MAP_CONFIG = {
      wallThickness: 0.4,
      ceilingThickness: 0.15,
      doorHeight: 7.5,
      floorThickness: 0.2
    };

    const canvas = document.getElementById('blueprint-canvas');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060a0f);
    scene.fog = new THREE.FogExp2(0x060a0f, 0.008);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    // Position nice bird-eye visual isometric overview
    camera.position.set(40, 160, 200);

    const controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI; // allow full vertical rotation to view sublevel geometry

    // Lights
    const ambientLight = new THREE.AmbientLight(0x334155, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight1.position.set(100, 200, 50);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0284c7, 0.4);
    dirLight2.position.set(-100, -50, -100);
    scene.add(dirLight2);

    // Grid Helpers
    const grid1 = new THREE.GridHelper(300, 60, 0x1e293b, 0x0f172a);
    grid1.position.y = -0.05;
    scene.add(grid1);

    // Build Rooms
    const PROCEDURAL_TEXTURES_CACHE = {};
    const getProceduralTexture = (type) => {
      if (PROCEDURAL_TEXTURES_CACHE[type]) {
        return PROCEDURAL_TEXTURES_CACHE[type];
      }

      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      if (type === 'wood_floor') {
        ctx.fillStyle = '#452c1e';
        ctx.fillRect(0, 0, 512, 512);

        const plankHeight = 512 / 8;
        for (let i = 0; i < 8; i++) {
          ctx.fillStyle = i % 2 === 0 ? '#4e3425' : '#3c2518';
          if (i % 3 === 0) ctx.fillStyle = '#432a1d';
          ctx.fillRect(0, i * plankHeight, 512, plankHeight);

          ctx.strokeStyle = '#29170e';
          ctx.lineWidth = 1;
          for (let j = 0; j < 5; j++) {
            ctx.beginPath();
            ctx.moveTo(0, i * plankHeight + Math.random() * plankHeight);
            ctx.quadraticCurveTo(
              256, i * plankHeight + Math.random() * plankHeight * 2 - plankHeight / 2,
              512, i * plankHeight + Math.random() * plankHeight
            );
            ctx.stroke();
          }

          const joints = i % 2 === 0 ? [150, 380] : [220, 440];
          ctx.fillStyle = '#1e110a';
          joints.forEach(x => {
            ctx.fillRect(x, i * plankHeight, 2, plankHeight);
          });

          ctx.strokeStyle = '#1a0d06';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(0, i * plankHeight);
          ctx.lineTo(512, i * plankHeight);
          ctx.stroke();
        }
      } else if (type === 'ceiling_tiles') {
        ctx.fillStyle = '#dcd5ca';
        ctx.fillRect(0, 0, 512, 512);

        for (let i = 0; i < 600; i++) {
          ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)';
          ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
        }

        const tileSize = 256;
        for (let r = 0; r < 2; r++) {
          for (let c = 0; c < 2; c++) {
            const x = c * tileSize;
            const y = r * tileSize;

            ctx.fillStyle = 'rgba(115, 87, 59, 0.15)';
            ctx.strokeStyle = 'rgba(92, 70, 48, 0.35)';
            ctx.lineWidth = 1.5;

            for (let s = 0; s < 4; s++) {
              const cx = x + 30 + Math.random() * (tileSize - 60);
              const cy = y + 30 + Math.random() * (tileSize - 60);
              const radius = 25 + Math.random() * 45;

              ctx.beginPath();
              ctx.arc(cx, cy, radius, 0, Math.PI * 2);
              ctx.fill();

              ctx.beginPath();
              ctx.arc(cx, cy, radius + 4, 0, Math.PI * 2);
              ctx.stroke();
            }

            ctx.fillStyle = 'rgba(40, 45, 35, 0.65)';
            for (let m = 0; m < 35; m++) {
              const mx = x + Math.random() * tileSize;
              const my = y + Math.random() * tileSize;
              ctx.fillRect(mx, my, 1.5, 1.5);
            }

            ctx.strokeStyle = 'rgba(50,50,50,0.25)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            let px = x + 20;
            let py = y + 20;
            ctx.moveTo(px, py);
            for (let k = 0; k < 10; k++) {
              px += (Math.random() - 0.5) * 15;
              py += Math.random() * 20;
              ctx.lineTo(px, py);
            }
            ctx.stroke();
          }
        }

        ctx.strokeStyle = '#2d2e33';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(0, 0); ctx.lineTo(512, 0);
        ctx.moveTo(0, 256); ctx.lineTo(512, 256);
        ctx.moveTo(0, 512); ctx.lineTo(512, 512);
        ctx.moveTo(0, 0); ctx.lineTo(0, 512);
        ctx.moveTo(256, 0); ctx.lineTo(256, 512);
        ctx.moveTo(512, 0); ctx.lineTo(512, 512);
        ctx.stroke();

        ctx.fillStyle = 'rgba(92, 49, 14, 0.55)';
        for (let gridIdx = 0; gridIdx < 20; gridIdx++) {
          ctx.fillRect(Math.random() * 512, 253 + Math.random() * 6, Math.random() * 25, Math.random() * 3);
          ctx.fillRect(253 + Math.random() * 6, Math.random() * 512, Math.random() * 3, Math.random() * 25);
        }
      } else if (type === 'wall_tiles') {
        ctx.fillStyle = '#6d8a6b';
        ctx.fillRect(0, 0, 512, 512);

        const numTiles = 8;
        const tSize = 64;
        for (let r = 0; r < numTiles; r++) {
          for (let c = 0; c < numTiles; c++) {
            const tx = c * tSize;
            const ty = r * tSize;

            ctx.fillStyle = (r + c) % 2 === 0 ? '#728e6f' : '#688566';
            if ((r * c) % 5 === 0) ctx.fillStyle = '#5c7859';
            ctx.fillRect(tx + 1, ty + 1, tSize - 2, tSize - 2);

            ctx.strokeStyle = 'rgba(255,255,255,0.06)';
            ctx.strokeRect(tx + 2, ty + 2, tSize - 4, tSize - 4);

            if (Math.random() < 0.15) {
              ctx.strokeStyle = 'rgba(20, 25, 20, 0.55)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(tx + Math.random() * tSize, ty + Math.random() * tSize);
              ctx.lineTo(tx + Math.random() * tSize, ty + Math.random() * tSize);
              ctx.stroke();
            }

            if ((r === 2 && c === 4) || (r === 6 && c === 1) || (r === 4 && c === 6)) {
              ctx.fillStyle = '#222520';
              ctx.fillRect(tx + 2, ty + 2, tSize - 4, tSize - 4);

              ctx.fillStyle = '#444c41';
              for (let b = 0; b < 10; b++) {
                ctx.fillRect(tx + Math.random() * tSize, ty + Math.random() * tSize, Math.random() * 6, Math.random() * 6);
              }
            }
          }
        }

        ctx.strokeStyle = '#252924';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i <= numTiles; i++) {
          ctx.moveTo(0, i * tSize); ctx.lineTo(512, i * tSize);
          ctx.moveTo(i * tSize, 0); ctx.lineTo(i * tSize, 512);
        }
        ctx.stroke();

        for (let dripIdx = 0; dripIdx < 12; dripIdx++) {
          const dx = Math.random() * 512;
          const dy = Math.random() * 80;
          const dH = 150 + Math.random() * 250;

          const grad = ctx.createLinearGradient(dx, dy, dx, dy + dH);
          grad.addColorStop(0, 'rgba(21, 26, 19, 0.55)');
          grad.addColorStop(0.3, 'rgba(15, 20, 14, 0.35)');
          grad.addColorStop(1, 'rgba(15, 20, 14, 0.0)');

          ctx.fillStyle = grad;
          ctx.fillRect(dx - 3, dy, 6, dH);
        }

        ctx.strokeStyle = 'rgba(224, 215, 200, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.font = '22px Arial';
        ctx.strokeText("WASH ME", 80, 200);
        ctx.strokeText("CLASS OF '95", 280, 390);
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      PROCEDURAL_TEXTURES_CACHE[type] = texture;
      return texture;
    };

    const materials = {
      floor: new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.9, metalness: 0.1 }),
      gymFloor: new THREE.MeshStandardMaterial({ color: 0x1e3a8a, roughness: 0.7, metalness: 0.1 }),
      wall: new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 }),
      stair: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.8 }),
      doorGauge: new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
    };

    const ceilingMeshes = [];

    // Helper functions for modular geometry construction to prevent spaghetti code
    const buildFloor = (r) => {
      const fGeo = new THREE.BoxGeometry(r.w, MAP_CONFIG.floorThickness, r.d);
      const isGym = r.id === 'gym';
      let fMat;
      if (r.floorTexture) {
        let tex;
        if (r.floorTexture === "wood_floor.png") {
          tex = getProceduralTexture("wood_floor").clone();
          tex.repeat.set(r.w / 12, r.d / 12);
        } else {
          const loader = new THREE.TextureLoader();
          tex = loader.load(r.floorTexture);
          tex.wrapS = THREE.RepeatWrapping;
          tex.wrapT = THREE.RepeatWrapping;
          tex.repeat.set(r.w / 10, r.d / 10);
        }
        fMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9, metalness: 0.1 });
      } else {
        fMat = isGym ? materials.gymFloor : new THREE.MeshStandardMaterial({ color: r.color, roughness: 0.8 });
      }
      const fMesh = new THREE.Mesh(fGeo, fMat);
      fMesh.position.set(r.cx, r.floorY - MAP_CONFIG.floorThickness / 2, r.cz);
      scene.add(fMesh);

      if (r.trapdoors && Array.isArray(r.trapdoors)) {
        r.trapdoors.forEach((td) => {
          let finalCx = td.cx;
          let finalCz = td.cz;
          if (td.cx === -42) {
            finalCx = -103;
            if (td.cz === -48.5) finalCz = 23.4;
            else if (td.cz === -31) finalCz = 40.9;
          }
          const tdGeo = new THREE.BoxGeometry(td.w, 0.05, td.d);
          const tdMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
          const tdMesh = new THREE.Mesh(tdGeo, tdMat);
          tdMesh.position.set(finalCx, r.floorY + 0.15, finalCz);
          scene.add(tdMesh);
        });
      }
    };

    const buildCeiling = (r) => {
      if (!r.disabledCeiling) {
        const createPart = (cx, cz, w, d) => {
          if (w <= 0.1 || d <= 0.1) return;
          const cGeo = new THREE.BoxGeometry(w, MAP_CONFIG.ceilingThickness, d);
          const cMat = new THREE.MeshStandardMaterial({ 
            color: 0x38bdf8, // vibrant cyan blueprint glass
            transparent: true, 
            opacity: 0.45, 
            roughness: 0.2,
            metalness: 0.8,
            side: THREE.DoubleSide
          });
          const cMesh = new THREE.Mesh(cGeo, cMat);
          cMesh.position.set(cx, r.floorY + r.h, cz);
          scene.add(cMesh);
          cMesh.userData = { isCeiling: true, baseColor: r.color, roomId: r.id, w: w, d: d };
          ceilingMeshes.push(cMesh);
        };

        const rawHoles = r.ceilingHoles || [];
        const holes = rawHoles.map((h) => {
          if (h.cx === -42) {
            let finalCz = h.cz;
            if (h.cz === -48.5) finalCz = 23.4;
            else if (h.cz === -31) finalCz = 40.9;
            return { ...h, cx: -103, cz: finalCz };
          }
          return h;
        });

        if (holes && holes.length > 0) {
          const rxMin = r.cx - (r.w - MAP_CONFIG.wallThickness) / 2;
          const rxMax = r.cx + (r.w - MAP_CONFIG.wallThickness) / 2;
          const rzMin = r.cz - (r.d - MAP_CONFIG.wallThickness) / 2;
          const rzMax = r.cz + (r.d - MAP_CONFIG.wallThickness) / 2;

          const xBoundaries = [rxMin, rxMax];
          const zBoundaries = [rzMin, rzMax];

          holes.forEach((h) => {
            const hxMin = h.cx - h.w / 2;
            const hxMax = h.cx + h.w / 2;
            const hzMin = h.cz - h.d / 2;
            const hzMax = h.cz + h.d / 2;

            const cxMin = Math.max(rxMin, hxMin);
            const cxMax = Math.min(rxMax, hxMax);
            const czMin = Math.max(rzMin, hzMin);
            const czMax = Math.min(rzMax, hzMax);

            if (cxMax > cxMin + 0.05) {
              xBoundaries.push(cxMin, cxMax);
            }
            if (czMax > czMin + 0.05) {
              zBoundaries.push(czMin, czMax);
            }
          });

          xBoundaries.sort((a, b) => a - b);
          zBoundaries.sort((a, b) => a - b);

          const xCoords = [];
          xBoundaries.forEach((x) => {
            if (xCoords.length === 0 || x - xCoords[xCoords.length - 1] > 0.05) {
              xCoords.push(x);
            }
          });

          const zCoords = [];
          zBoundaries.forEach((z) => {
            if (zCoords.length === 0 || z - zCoords[zCoords.length - 1] > 0.05) {
              zCoords.push(z);
            }
          });

          for (let i = 0; i < xCoords.length - 1; i++) {
            for (let j = 0; j < zCoords.length - 1; j++) {
              const x1 = xCoords[i];
              const x2 = xCoords[i + 1];
              const z1 = zCoords[j];
              const z2 = zCoords[j + 1];
              
              const partW = x2 - x1;
              const partD = z2 - z1;
              if (partW <= 0.05 || partD <= 0.05) continue;

              const centerX = (x1 + x2) / 2;
              const centerZ = (z1 + z2) / 2;

              let inHole = false;
              for (const h of holes) {
                const hxMin = h.cx - h.w / 2;
                const hxMax = h.cx + h.w / 2;
                const hzMin = h.cz - h.d / 2;
                const hzMax = h.cz + h.d / 2;
                if (centerX >= hxMin - 0.02 && centerX <= hxMax + 0.02 &&
                    centerZ >= hzMin - 0.02 && centerZ <= hzMax + 0.02) {
                  inHole = true;
                  break;
                }
              }

              if (!inHole) {
                createPart(centerX, centerZ, partW, partD);
              }
            }
          }
        } else {
          createPart(r.cx, r.cz, r.w - MAP_CONFIG.wallThickness, r.d - MAP_CONFIG.wallThickness);
        }
      }
    };

    const buildStairs = (r) => {
      if (r.isStaircase) {
        const stepsCount = 13;
        const climb = r.climbHeight ?? r.h;
        const stepH = climb / stepsCount;
        const dir = r.stairDirection || (r.w > r.d ? 'W_E' : 'N_S');

        if (dir === 'W_E') {
          const stepW = r.w / stepsCount;
          for (let i = 0; i < stepsCount; i++) {
            const stepGeo = new THREE.BoxGeometry(stepW, stepH * (i + 1), r.d);
            const stepMesh = new THREE.Mesh(stepGeo, materials.stair);
            stepMesh.position.set(
              r.cx - r.w / 2 + stepW * i + stepW / 2,
              r.floorY + (stepH * (i + 1)) / 2,
              r.cz
            );
            scene.add(stepMesh);
          }
        }
      }
    };

    const buildProps = () => {
      MAP_PROPS.forEach(p => {
        const room = MAP_ROOMS.find(r => r.id === p.roomId);
        if (!room) return;
        const geo = new THREE.BoxGeometry(p.w, p.h, p.d);
        const mat = new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.8 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(p.cx, room.floorY + p.h / 2, p.cz);
        scene.add(mesh);
      });
    };

    const buildWallSide = (r, sideGaps, side) => {
      const isNorthSouth = side === 'N' || side === 'S';
      
      let currentVal = isNorthSouth ? (r.cx - r.w / 2) : (r.cz - r.d / 2);
      const endVal = isNorthSouth ? (r.cx + r.w / 2) : (r.cz + r.d / 2);
      
      const wallCoord = side === 'N' ? (r.cz + r.d / 2) :
                        side === 'S' ? (r.cz - r.d / 2) :
                        side === 'E' ? (r.cx + r.w / 2) :
                        (r.cx - r.w / 2);

      sideGaps.forEach(gap => {
        const gapCenterGlobal = (isNorthSouth ? r.cx : r.cz) + gap.center;
        const gapL = gapCenterGlobal - gap.width / 2;
        const gapR = gapCenterGlobal + gap.width / 2;

        if (currentVal < gapL) {
          const wLength = gapL - currentVal;
          if (isNorthSouth) {
            addWallSegment(currentVal + wLength / 2, wallCoord, wLength, r.h, MAP_CONFIG.wallThickness, r.floorY, r.id);
          } else {
            addWallSegment(wallCoord, currentVal + wLength / 2, MAP_CONFIG.wallThickness, r.h, wLength, r.floorY, r.id);
          }
        }
        
        const doorHeight = MAP_CONFIG.doorHeight;
        if (r.h > doorHeight) {
          if (isNorthSouth) {
            addWallSegment(gapCenterGlobal, wallCoord, gap.width, r.h - doorHeight, MAP_CONFIG.wallThickness, r.floorY + doorHeight, r.id);
          } else {
            addWallSegment(wallCoord, gapCenterGlobal, MAP_CONFIG.wallThickness, r.h - doorHeight, gap.width, r.floorY + doorHeight, r.id);
          }
        }
        currentVal = gapR;
      });
 
      if (currentVal < endVal) {
        const wLength = endVal - currentVal;
        if (isNorthSouth) {
          addWallSegment(currentVal + wLength / 2, wallCoord, wLength, r.h, MAP_CONFIG.wallThickness, r.floorY, r.id);
        } else {
          addWallSegment(wallCoord, currentVal + wLength / 2, MAP_CONFIG.wallThickness, r.h, wLength, r.floorY, r.id);
        }
      }
    };

    const buildWalls = (r, gaps) => {
      buildWallSide(r, gaps.filter(g => g.side === 'N'), 'N');
      buildWallSide(r, gaps.filter(g => g.side === 'S'), 'S');
      buildWallSide(r, gaps.filter(g => g.side === 'E'), 'E');
      buildWallSide(r, gaps.filter(g => g.side === 'W'), 'W');
    };

    // Calculate wall segments containing openings
    MAP_ROOMS.forEach(r => {
      buildFloor(r);
      buildCeiling(r);
      const gaps = MAP_GAPS[r.id] || [];
      buildWalls(r, gaps);
      buildStairs(r);
    });

    buildProps();

    let roofMode = 'glass';
    function setRoofMode(mode) {
      roofMode = mode;
      
      // Update buttons visual styles
      ['glass', 'solid', 'hidden'].forEach(m => {
        const btn = document.getElementById('btn-roof-' + m);
        if (btn) {
          if (m === mode) {
            btn.className = "px-2 py-1.5 bg-emerald-500 text-slate-950 font-mono font-bold rounded cursor-pointer transition text-center text-[10px]";
          } else {
            btn.className = "px-2 py-1.5 bg-slate-900 text-slate-400 border border-slate-800 font-mono font-bold rounded cursor-pointer hover:bg-slate-850 transition text-center text-[10px]";
          }
        }
      });

      ceilingMeshes.forEach(mesh => {
        if (mode === 'hidden') {
          mesh.visible = false;
        } else {
          mesh.visible = true;
          if (mode === 'solid') {
            mesh.material.transparent = false;
            mesh.material.opacity = 1.0;
            if (['starter', 'library', 'science_lab', 'hallway'].includes(mesh.userData.roomId)) {
              const cTex = getProceduralTexture('ceiling_tiles').clone();
              cTex.repeat.set(mesh.userData.w / 4, mesh.userData.d / 4);
              mesh.material.map = cTex;
              mesh.material.color.setHex(0xffffff);
              mesh.material.roughness = 0.9;
              mesh.material.metalness = 0.1;
            } else {
              mesh.material.map = null;
              // Use solid slate metallic roof tile
              mesh.material.color.setHex(0x475569); 
              mesh.material.roughness = 0.6;
              mesh.material.metalness = 0.5;
            }
          } else {
            mesh.material.map = null;
            // glass/blueprint look
            mesh.material.transparent = true;
            mesh.material.opacity = 0.45;
            mesh.material.color.setHex(0x38bdf8);
            mesh.material.roughness = 0.2;
            mesh.material.metalness = 0.8;
          }
          mesh.material.needsUpdate = true;
        }
      });
    }

    function addWallSegment(x, z, w, h, d, floorY, roomId) {
      const geo = new THREE.BoxGeometry(w, h, d);
      let wallMat = materials.wall;
      if (['starter', 'library', 'science_lab', 'hallway'].includes(roomId)) {
        const wTex = getProceduralTexture('wall_tiles').clone();
        const wallLength = w > d ? w : d;
        wTex.repeat.set(wallLength / 8, h / 8);
        wallMat = new THREE.MeshStandardMaterial({ map: wTex, roughness: 0.8 });
      }
      const mesh = new THREE.Mesh(geo, wallMat);
      mesh.position.set(x, floorY + h/2, z);
      scene.add(mesh);
    }

    // Handles window resizing inside standard flex-layout
    window.addEventListener('resize', () => {
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });

    // Simple Render loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  </script>
</body>
</html>`;

    const blob = new Blob([htmlString], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dead_halls_3d_blueprint_export.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  // Slicing algorithm to split a wall interval by doorway gaps
  const getWallSegments = useMemo(() => {
    const list: Array<{
      minX: number;
      maxX: number;
      minZ: number;
      maxZ: number;
      minY: number;
      maxY: number;
      roomId: string;
      side: 'N' | 'S' | 'E' | 'W';
    }> = [];

    rooms.forEach(r => {
      const gaps = roomGaps[r.id] || [];
      const disabledWalls = r.disabledWalls || [];

      // ================= NORTH WALL (Z-positive edge, constant Z = cz + d/2) =================
      if (!disabledWalls.includes('N')) {
        const nGaps = gaps.filter(g => g.side === 'N').sort((a, b) => a.center - b.center);
        let currentN = r.cx - r.w / 2;
        nGaps.forEach(g => {
          const gapCenterGlobal = r.cx + g.center;
          const gapL = gapCenterGlobal - g.width / 2;
          const gapR = gapCenterGlobal + g.width / 2;
          if (gapL > currentN) {
            list.push({
              minX: currentN, maxX: Math.min(gapL, r.cx + r.w / 2),
              minZ: r.cz + r.d / 2 - 0.3, maxZ: r.cz + r.d / 2 + 0.3,
              minY: r.floorY, maxY: r.floorY + r.h,
              roomId: r.id, side: 'N'
            });
          }
          currentN = Math.max(currentN, Math.min(gapR, r.cx + r.w / 2));

          const actualGapL = Math.max(r.cx - r.w / 2, gapL);
          const actualGapR = Math.min(r.cx + r.w / 2, gapR);
          if (actualGapL < actualGapR) {
            const gapX = gapCenterGlobal;
            const gapZ = r.cz + r.d / 2;
            const other = rooms.find(o => {
              if (o.id === r.id) return false;
              const margin = 0.5;
              return gapX >= o.cx - o.w/2 - margin && gapX <= o.cx + o.w/2 + margin &&
                     gapZ >= o.cz - o.d/2 - margin && gapZ <= o.cz + o.d/2 + margin;
            });
            const doorFloorY = other ? Math.max(r.floorY, other.floorY) : r.floorY;
            const doorHeight = MAP_CONFIG.doorHeight;
            const doorTopY = doorFloorY + doorHeight;
            if (doorTopY < r.floorY + r.h) {
              list.push({
                minX: actualGapL, maxX: actualGapR,
                minZ: r.cz + r.d / 2 - 0.3, maxZ: r.cz + r.d / 2 + 0.3,
                minY: doorTopY, maxY: r.floorY + r.h,
                roomId: r.id, side: 'N'
              });
            }
            if (doorFloorY > r.floorY) {
              list.push({
                minX: actualGapL, maxX: actualGapR,
                minZ: r.cz + r.d / 2 - 0.3, maxZ: r.cz + r.d / 2 + 0.3,
                minY: r.floorY, maxY: doorFloorY,
                roomId: r.id, side: 'N'
              });
            }
          }
        });
        if (currentN < r.cx + r.w / 2) {
          list.push({
            minX: currentN, maxX: r.cx + r.w / 2,
            minZ: r.cz + r.d / 2 - 0.3, maxZ: r.cz + r.d / 2 + 0.3,
            minY: r.floorY, maxY: r.floorY + r.h,
            roomId: r.id, side: 'N'
          });
        }
      }

      // ================= SOUTH WALL (Z-negative edge, constant Z = cz - d/2) =================
      if (!disabledWalls.includes('S')) {
        const sGaps = gaps.filter(g => g.side === 'S').sort((a, b) => a.center - b.center);
        let currentS = r.cx - r.w / 2;
        sGaps.forEach(g => {
          const gapCenterGlobal = r.cx + g.center;
          const gapL = gapCenterGlobal - g.width / 2;
          const gapR = gapCenterGlobal + g.width / 2;
          if (gapL > currentS) {
            list.push({
              minX: currentS, maxX: Math.min(gapL, r.cx + r.w / 2),
              minZ: r.cz - r.d / 2 - 0.3, maxZ: r.cz - r.d / 2 + 0.3,
              minY: r.floorY, maxY: r.floorY + r.h,
              roomId: r.id, side: 'S'
            });
          }
          currentS = Math.max(currentS, Math.min(gapR, r.cx + r.w / 2));

          const actualGapL = Math.max(r.cx - r.w / 2, gapL);
          const actualGapR = Math.min(r.cx + r.w / 2, gapR);
          if (actualGapL < actualGapR) {
            const gapX = gapCenterGlobal;
            const gapZ = r.cz - r.d / 2;
            const other = rooms.find(o => {
              if (o.id === r.id) return false;
              const margin = 0.5;
              return gapX >= o.cx - o.w/2 - margin && gapX <= o.cx + o.w/2 + margin &&
                     gapZ >= o.cz - o.d/2 - margin && gapZ <= o.cz + o.d/2 + margin;
            });
            const doorFloorY = other ? Math.max(r.floorY, other.floorY) : r.floorY;
            const doorHeight = MAP_CONFIG.doorHeight;
            const doorTopY = doorFloorY + doorHeight;
            if (doorTopY < r.floorY + r.h) {
              list.push({
                minX: actualGapL, maxX: actualGapR,
                minZ: r.cz - r.d / 2 - 0.3, maxZ: r.cz - r.d / 2 + 0.3,
                minY: doorTopY, maxY: r.floorY + r.h,
                roomId: r.id, side: 'S'
              });
            }
            if (doorFloorY > r.floorY) {
              list.push({
                minX: actualGapL, maxX: actualGapR,
                minZ: r.cz - r.d / 2 - 0.3, maxZ: r.cz - r.d / 2 + 0.3,
                minY: r.floorY, maxY: doorFloorY,
                roomId: r.id, side: 'S'
              });
            }
          }
        });
        if (currentS < r.cx + r.w / 2) {
          list.push({
            minX: currentS, maxX: r.cx + r.w / 2,
            minZ: r.cz - r.d / 2 - 0.3, maxZ: r.cz - r.d / 2 + 0.3,
            minY: r.floorY, maxY: r.floorY + r.h,
            roomId: r.id, side: 'S'
          });
        }
      }

      // ================= EAST WALL (X-positive edge, constant X = cx + w/2) =================
      if (!disabledWalls.includes('E')) {
        const eGaps = gaps.filter(g => g.side === 'E').sort((a, b) => a.center - b.center);
        let currentE = r.cz - r.d / 2;
        eGaps.forEach(g => {
          const gapCenterGlobal = r.cz + g.center;
          const gapL = gapCenterGlobal - g.width / 2;
          const gapR = gapCenterGlobal + g.width / 2;
          if (gapL > currentE) {
            list.push({
              minX: r.cx + r.w / 2 - 0.3, maxX: r.cx + r.w / 2 + 0.3,
              minZ: currentE, maxZ: Math.min(gapL, r.cz + r.d / 2),
              minY: r.floorY, maxY: r.floorY + r.h,
              roomId: r.id, side: 'E'
            });
          }
          currentE = Math.max(currentE, Math.min(gapR, r.cz + r.d / 2));

          const actualGapL = Math.max(r.cz - r.d / 2, gapL);
          const actualGapR = Math.min(r.cz + r.d / 2, gapR);
          if (actualGapL < actualGapR) {
            const gapX = r.cx + r.w / 2;
            const gapZ = gapCenterGlobal;
            const other = rooms.find(o => {
              if (o.id === r.id) return false;
              const margin = 0.5;
              return gapX >= o.cx - o.w/2 - margin && gapX <= o.cx + o.w/2 + margin &&
                     gapZ >= o.cz - o.d/2 - margin && gapZ <= o.cz + o.d/2 + margin;
            });
            const doorFloorY = other ? Math.max(r.floorY, other.floorY) : r.floorY;
            const doorHeight = MAP_CONFIG.doorHeight;
            const doorTopY = doorFloorY + doorHeight;
            if (doorTopY < r.floorY + r.h) {
              list.push({
                minX: r.cx + r.w / 2 - 0.3, maxX: r.cx + r.w / 2 + 0.3,
                minZ: actualGapL, maxZ: actualGapR,
                minY: doorTopY, maxY: r.floorY + r.h,
                roomId: r.id, side: 'E'
              });
            }
            if (doorFloorY > r.floorY) {
              list.push({
                minX: r.cx + r.w / 2 - 0.3, maxX: r.cx + r.w / 2 + 0.3,
                minZ: actualGapL, maxZ: actualGapR,
                minY: r.floorY, maxY: doorFloorY,
                roomId: r.id, side: 'E'
              });
            }
          }
        });
        if (currentE < r.cz + r.d / 2) {
          list.push({
            minX: r.cx + r.w / 2 - 0.3, maxX: r.cx + r.w / 2 + 0.3,
            minZ: currentE, maxZ: r.cz + r.d / 2,
            minY: r.floorY, maxY: r.floorY + r.h,
            roomId: r.id, side: 'E'
          });
        }
      }

      // ================= WEST WALL (X-negative edge, constant X = cx - w/2) =================
      if (!disabledWalls.includes('W')) {
        const wGaps = gaps.filter(g => g.side === 'W').sort((a, b) => a.center - b.center);
        let currentW = r.cz - r.d / 2;
        wGaps.forEach(g => {
          const gapCenterGlobal = r.cz + g.center;
          const gapL = gapCenterGlobal - g.width / 2;
          const gapR = gapCenterGlobal + g.width / 2;
          if (gapL > currentW) {
            list.push({
              minX: r.cx - r.w / 2 - 0.3, maxX: r.cx - r.w / 2 + 0.3,
              minZ: currentW, maxZ: Math.min(gapL, r.cz + r.d / 2),
              minY: r.floorY, maxY: r.floorY + r.h,
              roomId: r.id, side: 'W'
            });
          }
          currentW = Math.max(currentW, Math.min(gapR, r.cz + r.d / 2));

          const actualGapL = Math.max(r.cz - r.d / 2, gapL);
          const actualGapR = Math.min(r.cz + r.d / 2, gapR);
          if (actualGapL < actualGapR) {
            const gapX = r.cx - r.w / 2;
            const gapZ = gapCenterGlobal;
            const other = rooms.find(o => {
              if (o.id === r.id) return false;
              const margin = 0.5;
              return gapX >= o.cx - o.w/2 - margin && gapX <= o.cx + o.w/2 + margin &&
                     gapZ >= o.cz - o.d/2 - margin && gapZ <= o.cz + o.d/2 + margin;
            });
            const doorFloorY = other ? Math.max(r.floorY, other.floorY) : r.floorY;
            const doorHeight = MAP_CONFIG.doorHeight;
            const doorTopY = doorFloorY + doorHeight;
            if (doorTopY < r.floorY + r.h) {
              list.push({
                minX: r.cx - r.w / 2 - 0.3, maxX: r.cx - r.w / 2 + 0.3,
                minZ: actualGapL, maxZ: actualGapR,
                minY: doorTopY, maxY: r.floorY + r.h,
                roomId: r.id, side: 'W'
              });
            }
            if (doorFloorY > r.floorY) {
              list.push({
                minX: r.cx - r.w / 2 - 0.3, maxX: r.cx - r.w / 2 + 0.3,
                minZ: actualGapL, maxZ: actualGapR,
                minY: r.floorY, maxY: doorFloorY,
                roomId: r.id, side: 'W'
              });
            }
          }
        });
        if (currentW < r.cz + r.d / 2) {
          list.push({
            minX: r.cx - r.w / 2 - 0.3, maxX: r.cx - r.w / 2 + 0.3,
            minZ: currentW, maxZ: r.cz + r.d / 2,
            minY: r.floorY, maxY: r.floorY + r.h,
            roomId: r.id, side: 'W'
          });
        }
      }
    });

    return list;
  }, [rooms, roomGaps]);

  // Elevation calculation under any point X, Z with support for sloped stairwells and specific tile carving
  const getFloorElevationAt = (px: number, pz: number, currentY: number) => {
    const currentFloorY = currentY - PLAYER_EYE_HEIGHT;
    let bestElevY = -500; // Let flooring be void base
    
    // Find all rooms the player is horizontally inside that have active/rendered floors
    let insideRooms = (roomsRef.current || rooms).filter(r => {
      if (r.disabledFloor) return false;
      
      const isInsideBounds = px >= r.cx - r.w / 2 && px <= r.cx + r.w / 2 &&
                             pz >= r.cz - r.d / 2 && pz <= r.cz + r.d / 2;
      if (!isInsideBounds) return false;

      // Handle custom floor tile carving removal
      if (!r.isStaircase && r.carvedFloors && r.carvedFloors.length > 0) {
        const numX = Math.round(r.w / 4);
        const numZ = Math.round(r.d / 4);
        const cellW = r.w / numX;
        const cellD = r.d / numZ;
        const ix = Math.max(0, Math.min(numX - 1, Math.floor((px - (r.cx - r.w / 2)) / cellW)));
        const iz = Math.max(0, Math.min(numZ - 1, Math.floor((pz - (r.cz - r.d / 2)) / cellD)));
        if (r.carvedFloors.includes(`${ix},${iz}`)) {
          return false; // User has carved out this specific floor tile
        }
      }

      return true;
    });

    // Priority filter to select staircase if standing on one
    const insideStaircase = insideRooms.find(r => r.id === 'stairwell' || r.isStaircase);
    if (insideStaircase) {
      // If player is within climbing range of the staircase elev, bind to it
      const stairElev = getStaircaseElevationMath(insideStaircase, px, pz);
      if (Math.abs(currentFloorY - stairElev) < insideStaircase.h + 2.0) {
        return stairElev;
      }
    }

    if (insideRooms.length > 0) {
      // Find the room whose floor elevation is closest to the player's current level
      let closestRoom = insideRooms[0];
      let minDiff = 9999;

      insideRooms.forEach(r => {
        let roomElev = r.floorY;
        if (r.id === 'stairwell' || r.isStaircase) {
          roomElev = getStaircaseElevationMath(r, px, pz);
        }
        const diff = Math.abs(currentFloorY - roomElev);
        if (diff < minDiff) {
          minDiff = diff;
          closestRoom = r;
        }
      });

      if (closestRoom.id === 'stairwell' || closestRoom.isStaircase) {
        bestElevY = getStaircaseElevationMath(closestRoom, px, pz);
      } else {
        bestElevY = closestRoom.floorY;
      }
    }

    return bestElevY;
  };

  // Find room name from coordinates with vertical proximity check
  const getRoomNameAt = (px: number, pz: number, currentY: number) => {
    const currentFloorY = currentY - PLAYER_EYE_HEIGHT;
    
    // Find all rooms the player is horizontally inside
    let insideRooms = (roomsRef.current || rooms).filter(r => {
      const isInsideBounds = px >= r.cx - r.w / 2 && px <= r.cx + r.w / 2 &&
                             pz >= r.cz - r.d / 2 && pz <= r.cz + r.d / 2;
      if (!isInsideBounds) return false;

      // Handle carved floor check for room naming / presence
      if (!r.isStaircase && r.carvedFloors && r.carvedFloors.length > 0) {
        const numX = Math.round(r.w / 4);
        const numZ = Math.round(r.d / 4);
        const cellW = r.w / numX;
        const cellD = r.d / numZ;
        const ix = Math.max(0, Math.min(numX - 1, Math.floor((px - (r.cx - r.w / 2)) / cellW)));
        const iz = Math.max(0, Math.min(numZ - 1, Math.floor((pz - (r.cz - r.d / 2)) / cellD)));
        if (r.carvedFloors.includes(`${ix},${iz}`)) {
          return false;
        }
      }
      return true;
    });

    const isInsideStairwell = insideRooms.some(r => r.id === 'stairwell' || r.isStaircase);
    if (isInsideStairwell) {
      insideRooms = insideRooms.filter(r => r.id === 'stairwell' || r.isStaircase);
    }

    let bestRoom = null;
    let minDiff = 9999;

    insideRooms.forEach(r => {
      let roomElev = r.floorY;
      if (r.id === 'stairwell' || r.isStaircase) {
        roomElev = getStaircaseElevationMath(r, px, pz);
      }
      const diff = Math.abs(currentFloorY - roomElev);
      if (diff < minDiff) {
        minDiff = diff;
        bestRoom = r;
      }
    });

    if (bestRoom) {
      const bRoom = bestRoom as Room;
      if (bRoom.disabledFloor) {
        return `${bRoom.name} (Floor Demolished)`;
      }
      return bRoom.name;
    }
    return 'Outside Boundaries';
  };

  // Teleport player wrapper
  const teleportToRoom = (roomId: string) => {
    const target = rooms.find(r => r.id === roomId);
    if (!target) return;
    velocityY.current = 0;
    const groundY = target.floorY + PLAYER_EYE_HEIGHT;
    playerPos.current.set(target.cx, groundY, target.cz);
    setPlayerCoords({ x: target.cx, y: groundY, z: target.cz });
    setCurrentRoomName(target.name);
    setSelectedRoomId(roomId);
  };

  // Trigger individual Room updates instant refresh
  const handleRoomDimensionChange = (id: string, field: 'w' | 'd' | 'h', val: number) => {
    let finalVal = val;
    if (gridSnapping && (field === 'w' || field === 'd')) {
      finalVal = Math.max(4, Math.round(val / snapSize) * snapSize);
    }
    setRooms(prev => prev.map(r => r.id === id ? { ...r, [field]: finalVal } : r));
  };

  // Generic room property modifier
  const handleRoomPropertyChange = (id: string, field: keyof Room, val: any) => {
    let finalVal = val;
    if (gridSnapping && typeof val === 'number' && (field === 'cx' || field === 'cz' || field === 'w' || field === 'd')) {
      if (field === 'w' || field === 'd') {
        finalVal = Math.max(4, Math.round(val / snapSize) * snapSize);
      } else {
        finalVal = Math.round(val / snapSize) * snapSize;
      }
    }
    setRooms(prev => prev.map(r => r.id === id ? { ...r, [field]: finalVal } : r));
  };

  const handleFloorTilePaint = (ix: number, iz: number, mode: 'carve' | 'restore') => {
    setRooms(prev => prev.map(r => {
      if (r.id !== selectedRoomId) return r;
      const currentCarved = r.carvedFloors || [];
      const tileKey = `${ix},${iz}`;
      let updatedCarved = [...currentCarved];
      if (mode === 'carve') {
        if (!updatedCarved.includes(tileKey)) {
          updatedCarved.push(tileKey);
        }
      } else {
        updatedCarved = updatedCarved.filter(key => key !== tileKey);
      }
      return { ...r, carvedFloors: updatedCarved };
    }));
  };

  const handleCeilingTilePaint = (ix: number, iz: number, mode: 'carve' | 'restore') => {
    setRooms(prev => prev.map(r => {
      if (r.id !== selectedRoomId) return r;
      const currentCarved = r.carvedCeilings || [];
      const tileKey = `${ix},${iz}`;
      let updatedCarved = [...currentCarved];
      if (mode === 'carve') {
        if (!updatedCarved.includes(tileKey)) {
          updatedCarved.push(tileKey);
        }
      } else {
        updatedCarved = updatedCarved.filter(key => key !== tileKey);
      }
      return { ...r, carvedCeilings: updatedCarved };
    }));
  };

  // Auto-snap the active room when grid snapping is enabled / grid step changes
  useEffect(() => {
    if (gridSnapping && selectedRoomId) {
      setRooms(prev => prev.map(r => {
        if (r.id === selectedRoomId) {
          return {
            ...r,
            cx: Math.round(r.cx / snapSize) * snapSize,
            cz: Math.round(r.cz / snapSize) * snapSize,
            w: Math.max(4, Math.round(r.w / snapSize) * snapSize),
            d: Math.max(4, Math.round(r.d / snapSize) * snapSize)
          };
        }
        return r;
      }));
    }
  }, [gridSnapping, snapSize, selectedRoomId]);

  // Add Custom Room near player's alignment coordinates
  const handleAddCustomRoom = () => {
    const customCount = rooms.filter(r => r.id.startsWith('custom_')).length;
    const newId = `custom_${Date.now()}`;
    const newName = `Custom Room ${customCount + 1}`;
    
    // Grid alignment placement around player
    const step = gridSnapping ? snapSize : 5;
    const spawnX = Math.round(playerPos.current.x / step) * step;
    const spawnZ = Math.round(playerPos.current.z / step) * step;
    const isPlayerFloor2 = (playerPos.current.y - PLAYER_EYE_HEIGHT) > 5.5;
    const spawnFloorY = isPlayerFloor2 ? 11 : 0;
    
    const colors = ['#6d28d9', '#be185d', '#0369a1', '#15803d', '#b45309', '#0f766e', '#be123c', '#4d7c0f'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    let spawnW = 24;
    let spawnD = 24;
    if (gridSnapping) {
      spawnW = Math.max(4, Math.round(24 / snapSize) * snapSize);
      spawnD = Math.max(4, Math.round(24 / snapSize) * snapSize);
    }

    const newRoom: Room = {
      id: newId,
      name: newName,
      cx: spawnX,
      cz: spawnZ,
      w: spawnW,
      d: spawnD,
      h: 10,
      floorY: spawnFloorY,
      color: randomColor
    };
    
    setRooms(prev => [...prev, newRoom]);
    setSelectedRoomId(newId);
  };

  // Delete currently selected custom room
  const handleDeleteSelectedRoom = () => {
    const CORE_ROOMS = ['starter', 'hallway', 'science_lab', 'library', 'stairwell', 'gym', 'cafeteria', 'courtyard', 'underground_tunnel', 'the_vault', 'upper_hallway', 'principal_office', 'upper_hallway_2', 'security_room', 'upper_hallway_north', 'gym_north_hallway', 'nurses_office', 'nurses_office_backroom', 'stairwell_2', 'lower_hallway_south', 'main_office'];
    if (CORE_ROOMS.includes(selectedRoomId)) return;
    
    setRooms(prev => prev.filter(r => r.id !== selectedRoomId));
    setSelectedRoomId('starter');
  };

  // Add a new doorway (gap)
  const handleAddDoorway = (roomId: string, side: 'N' | 'S' | 'E' | 'W', center: number, width: number) => {
    setRoomGaps(prev => {
      const currentGaps = prev[roomId] || [];
      return {
        ...prev,
        [roomId]: [...currentGaps, { side, center, width }]
      };
    });
  };

  // Remove a doorway (gap)
  const handleRemoveDoorway = (roomId: string, index: number) => {
    setRoomGaps(prev => {
      const currentGaps = prev[roomId] || [];
      return {
        ...prev,
        [roomId]: currentGaps.filter((_, idx) => idx !== index)
      };
    });
  };

  // Reset standard rooms dimensions back to initials
  const handleResetDimensions = () => {
    setRooms(INITIAL_ROOMS);
    setRoomGaps(ROOM_GAPS);
    setNoclip(false);
    try {
      localStorage.removeItem('dead_halls_rooms');
      localStorage.removeItem('dead_halls_room_gaps');
    } catch (e) {
      console.warn("Could not clear localStorage", e);
    }
    playerPos.current.set(0, PLAYER_EYE_HEIGHT, -30);
    yaw.current = Math.PI;
    pitch.current = 0;
    velocityY.current = 0;
    setPlayerCoords({ x: 0, y: PLAYER_EYE_HEIGHT, z: -30 });
    setSelectedRoomId('starter');
  };

  // Keep live references of inputs and preferences to serve rendering thread with zero lag
  const roomsRef = useRef(rooms);
  useEffect(() => { roomsRef.current = rooms; }, [rooms]);

  const selectedRoomIdRef = useRef(selectedRoomId);
  useEffect(() => { selectedRoomIdRef.current = selectedRoomId; }, [selectedRoomId]);

  const showGridRef = useRef(showGrid);
  useEffect(() => { showGridRef.current = showGrid; }, [showGrid]);

  const showCollisionBoundsRef = useRef(showCollisionBounds);
  useEffect(() => { showCollisionBoundsRef.current = showCollisionBounds; }, [showCollisionBounds]);

  const wireframeModeRef = useRef(wireframeMode);
  useEffect(() => { wireframeModeRef.current = wireframeMode; }, [wireframeMode]);

  const showLabelsRef = useRef(showLabels);
  useEffect(() => { showLabelsRef.current = showLabels; }, [showLabels]);

  const roomGapsRef = useRef(roomGaps);
  useEffect(() => { roomGapsRef.current = roomGaps; }, [roomGaps]);

  const getWallSegmentsRef = useRef(getWallSegments);
  useEffect(() => { getWallSegmentsRef.current = getWallSegments; }, [getWallSegments]);

  const activeTabRef = useRef(activeTab);
  useEffect(() => { activeTabRef.current = activeTab; }, [activeTab]);

  const paintModeRef = useRef(paintMode);
  useEffect(() => { paintModeRef.current = paintMode; }, [paintMode]);

  const noclipRef = useRef(noclip);
  useEffect(() => { noclipRef.current = noclip; }, [noclip]);

  const doorwayWidthRef = useRef(doorwayWidth);
  useEffect(() => { doorwayWidthRef.current = doorwayWidth; }, [doorwayWidth]);

  const gridSnappingRef = useRef(gridSnapping);
  useEffect(() => { gridSnappingRef.current = gridSnapping; }, [gridSnapping]);

  const snapSizeRef = useRef(snapSize);
  useEffect(() => { snapSizeRef.current = snapSize; }, [snapSize]);

  const isMouseDownRef = useRef(false);
  useEffect(() => {
    const handleDown = () => { isMouseDownRef.current = true; };
    const handleUp = () => { isMouseDownRef.current = false; };
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  // Frame scheduler dirty trigger flag
  const needsGeometryUpdateRef = useRef(true);
  useEffect(() => {
    needsGeometryUpdateRef.current = true;
  }, [rooms, selectedRoomId, showGrid, showCollisionBounds, wireframeMode, showLabels, roomGaps, getWallSegments, activeTab, doorwayWidth, gridSnapping, snapSize]);

  // Three.js Scene Setup and Core Tick Interaction loop
  useEffect(() => {
    if (!mountRef.current || !canvasRef.current) return;

    const container = mountRef.current;
    const canvas = canvasRef.current;

    // A) Renderer and camera creation
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#080d12');
    scene.fog = new THREE.FogExp2(0x080d12, 0.018);

    const camera = new THREE.PerspectiveCamera(65, container.clientWidth / container.clientHeight, 0.1, 500);
    camera.rotation.order = 'YXZ';

    // B) Lightings Rig
    const ambientLight = new THREE.AmbientLight(0x2d3a4d, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0x40d5ff, 0.6);
    sunLight.position.set(-60, 100, -30);
    scene.add(sunLight);

    // Grid Helpers holding group
    const helpersGroup = new THREE.Group();
    scene.add(helpersGroup);

    // Custom level boundaries and room holding group
    const mapGroup = new THREE.Group();
    scene.add(mapGroup);

    // Floor & Wall meshes for raycaster picking
    const floorMeshes: THREE.Mesh[] = [];
    const wallMeshes: THREE.Mesh[] = [];

    // Highlight Overlay for focused floor / wall
    const highlightGroup = new THREE.Group();
    const hlBoxGeo = new THREE.BoxGeometry(1.0, 1.0, 1.0);
    const hlBoxMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.85, depthTest: false });
    const hlBoxMesh = new THREE.Mesh(hlBoxGeo, hlBoxMat);
    
    const hlSphereGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const hlSphereMat = new THREE.MeshBasicMaterial({ color: 0xfacc15, depthTest: false });
    const hlSphereMesh = new THREE.Mesh(hlSphereGeo, hlSphereMat);
    
    highlightGroup.add(hlBoxMesh);
    highlightGroup.add(hlSphereMesh);
    highlightGroup.visible = false;
    scene.add(highlightGroup);

    // Materials List
    const materials = {
      floor: new THREE.MeshStandardMaterial({ color: 0x333b4d, roughness: 0.8, metalness: 0.2 }),
      selectedFloor: new THREE.MeshStandardMaterial({ color: 0x00ffcc, roughness: 0.4, emissive: 0x004433, emissiveIntensity: 0.4 }),
      wall: new THREE.MeshStandardMaterial({ color: 0x5a637a, roughness: 0.9, flatShading: true }),
      selectedWall: new THREE.MeshStandardMaterial({ color: 0x22d3ee, roughness: 0.85 }),
      wireframe: new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true }),
      boundary: new THREE.MeshBasicMaterial({ color: 0xff4400, wireframe: true, transparent: true, opacity: 0.65 }),
      stairStep: new THREE.MeshStandardMaterial({ color: 0x4a2e2e, roughness: 0.9 }),
      demolishedFloor: new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.9, wireframe: true, transparent: true, opacity: 0.35 })
    };

    // Build standard scene meshes
    const updateThreeGeometries = () => {
      // Clear old meshes
      while (mapGroup.children.length > 0) {
        scene.remove(mapGroup.children[0]);
        mapGroup.remove(mapGroup.children[0]);
      }
      floorMeshes.length = 0;
      wallMeshes.length = 0;

      // Clean helpers
      while (helpersGroup.children.length > 0) {
        scene.remove(helpersGroup.children[0]);
        helpersGroup.remove(helpersGroup.children[0]);
      }

      // Re-build GRID toggles
      if (showGridRef.current) {
        const stepSize = (gridSnappingRef.current && snapSizeRef.current) ? snapSizeRef.current : 4;
        const floor0Grid = new THREE.GridHelper(240, Math.round(240 / stepSize), 0x14beb4, 0x1e293b);
        floor0Grid.position.y = 0.05;
        helpersGroup.add(floor0Grid);

        const gymRoom = roomsRef.current.find(rm => rm.id === 'gym');
        const gymCX = gymRoom ? gymRoom.cx : 144;
        const gymCZ = gymRoom ? gymRoom.cz : 15;
        const gym1Grid = new THREE.GridHelper(100, Math.round(100 / stepSize), 0xe23a3a, 0x1e293b);
        gym1Grid.position.set(gymCX, 11.05, gymCZ);
        helpersGroup.add(gym1Grid);
      }

      // Re-build standard Rooms and floors
      roomsRef.current.forEach(r => {
        const isSel = r.id === selectedRoomIdRef.current;
        
        let currentFloorMat;
        if (r.disabledFloor) {
          currentFloorMat = materials.demolishedFloor;
        } else if (r.floorTexture) {
          let tex;
          if (r.floorTexture === "wood_floor.png") {
            tex = getProceduralTexture("wood_floor").clone();
            tex.repeat.set(r.w / 12, r.d / 12);
          } else {
            const loader = new THREE.TextureLoader();
            tex = loader.load(r.floorTexture);
            tex.wrapS = THREE.RepeatWrapping;
            tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(r.w / 10, r.d / 10);
          }
          if (isSel) {
            currentFloorMat = new THREE.MeshStandardMaterial({
              map: tex,
              roughness: 0.6,
              metalness: 0.1,
              color: 0x99ffec,
              emissive: 0x004433,
              emissiveIntensity: 0.5
            });
          } else {
            currentFloorMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9, metalness: 0.1 });
          }
        } else {
          currentFloorMat = isSel ? materials.selectedFloor : new THREE.MeshStandardMaterial({ color: r.color, roughness: 0.8 });
        }
        
        if (wireframeModeRef.current) {
          currentFloorMat.wireframe = true;
          materials.wall.wireframe = true;
          materials.selectedWall.wireframe = true;
          materials.stairStep.wireframe = true;
        } else {
          currentFloorMat.wireframe = r.disabledFloor ? true : false;
          materials.wall.wireframe = false;
          materials.selectedWall.wireframe = false;
          materials.stairStep.wireframe = false;
        }

        // Floor Board Cells (only if NOT a staircase entity)
        if (!r.isStaircase) {
          const numX = Math.round(r.w / 4);
          const numZ = Math.round(r.d / 4);
          const cellW = r.w / numX;
          const cellD = r.d / numZ;

          for (let ix = 0; ix < numX; ix++) {
            for (let iz = 0; iz < numZ; iz++) {
              const tileKey = `${ix},${iz}`;
              const floorTileCarved = r.carvedFloors?.includes(tileKey);

              // Render active solid floor cell
              if (!floorTileCarved) {
                const fGeo = new THREE.BoxGeometry(cellW - 0.05, MAP_CONFIG.floorThickness, cellD - 0.05); // beautiful gap-separated structural tiles
                const fMesh = new THREE.Mesh(fGeo, currentFloorMat);
                fMesh.position.set(
                  r.cx - r.w / 2 + (ix + 0.5) * cellW,
                  r.floorY - MAP_CONFIG.floorThickness / 2,
                  r.cz - r.d / 2 + (iz + 0.5) * cellD
                );
                fMesh.receiveShadow = true;
                fMesh.userData = { roomId: r.id, type: 'floor', tileKey };
                mapGroup.add(fMesh);
                floorMeshes.push(fMesh);
              }
            }
          }
        }

        // Ceiling board Cells (keep overhead look clean and stair landing open)
        if (!r.disabledCeiling) {
          const numX = Math.round(r.w / 4);
          const numZ = Math.round(r.d / 4);
          const cellW = r.w / numX;
          const cellD = r.d / numZ;

          for (let ix = 0; ix < numX; ix++) {
            for (let iz = 0; iz < numZ; iz++) {
              const tileKey = `${ix},${iz}`;
              const ceilingTileCarved = r.carvedCeilings?.includes(tileKey);

              // Render active solid ceiling cell
              if (!ceilingTileCarved) {
                const cGeo = new THREE.BoxGeometry(cellW - 0.05, MAP_CONFIG.floorThickness, cellD - 0.05);
                let cellMat = materials.wall;
                if (['starter', 'library', 'science_lab', 'hallway'].includes(r.id) && !wireframeModeRef.current) {
                  const cTex = getProceduralTexture('ceiling_tiles').clone();
                  // Align repeat per cells to make 2x2 grid patterns look seamless
                  cTex.repeat.set(cellW / 4, cellD / 4);
                  cellMat = new THREE.MeshStandardMaterial({ map: cTex, roughness: 0.9 });
                }
                const cMesh = new THREE.Mesh(cGeo, cellMat);
                cMesh.position.set(
                  r.cx - r.w / 2 + (ix + 0.5) * cellW,
                  r.floorY + r.h + MAP_CONFIG.floorThickness / 2,
                  r.cz - r.d / 2 + (iz + 0.5) * cellD
                );
                cMesh.userData = { roomId: r.id, type: 'ceiling', tileKey };
                mapGroup.add(cMesh);
              }
            }
          }
        }
      });

      // Build sloped Stair steps visually for any room marked as staircase entity
      roomsRef.current.forEach(stairRoom => {
        if (stairRoom.isStaircase || stairRoom.id === 'stairwell') {
          const stepsCount = 14;
          const climb = stairRoom.climbHeight ?? stairRoom.h;
          const stepH = climb / stepsCount;
          const dir = stairRoom.stairDirection || (stairRoom.w > stairRoom.d ? 'W_E' : 'N_S');

          if (dir === 'W_E') {
            // Slopes along X axis (West to East)
            const stepW = stairRoom.w / stepsCount;
            const stepD = stairRoom.d - 1.0;
            const stairXStart = stairRoom.cx - stairRoom.w / 2;

            for (let i = 0; i < stepsCount; i++) {
              const stepGeo = new THREE.BoxGeometry(stepW, stepH * (i + 1), stepD);
              const stepMesh = new THREE.Mesh(stepGeo, materials.stairStep);
              stepMesh.position.set(
                stairXStart + stepW * i + stepW / 2,
                stairRoom.floorY + (stepH * (i + 1)) / 2,
                stairRoom.cz
              );
              mapGroup.add(stepMesh);
            }
          } else if (dir === 'E_W') {
            // Slopes along X axis (East to West)
            const stepW = stairRoom.w / stepsCount;
            const stepD = stairRoom.d - 1.0;
            const stairXStart = stairRoom.cx - stairRoom.w / 2;

            for (let i = 0; i < stepsCount; i++) {
              const stepGeo = new THREE.BoxGeometry(stepW, stepH * (i + 1), stepD);
              const stepMesh = new THREE.Mesh(stepGeo, materials.stairStep);
              stepMesh.position.set(
                (stairXStart + stairRoom.w) - (stepW * i + stepW / 2),
                stairRoom.floorY + (stepH * (i + 1)) / 2,
                stairRoom.cz
              );
              mapGroup.add(stepMesh);
            }
          } else if (dir === 'S_N') {
            // Slopes along Z axis (South to North)
            const stepW = stairRoom.w - 1.0;
            const stepD = stairRoom.d / stepsCount;
            const stairZStart = stairRoom.cz - stairRoom.d / 2;

            for (let i = 0; i < stepsCount; i++) {
              const stepGeo = new THREE.BoxGeometry(stepW, stepH * (i + 1), stepD);
              const stepMesh = new THREE.Mesh(stepGeo, materials.stairStep);
              stepMesh.position.set(
                stairRoom.cx,
                stairRoom.floorY + (stepH * (i + 1)) / 2,
                (stairZStart + stairRoom.d) - (stepD * i + stepD / 2)
              );
              mapGroup.add(stepMesh);
            }
          } else { // 'N_S'
            // Slopes along Z axis (North to South)
            const stepW = stairRoom.w - 1.0;
            const stepD = stairRoom.d / stepsCount;
            const stairZStart = stairRoom.cz - stairRoom.d / 2;

            for (let i = 0; i < stepsCount; i++) {
              const stepGeo = new THREE.BoxGeometry(stepW, stepH * (i + 1), stepD);
              const stepMesh = new THREE.Mesh(stepGeo, materials.stairStep);
              stepMesh.position.set(
                stairRoom.cx,
                stairRoom.floorY + (stepH * (i + 1)) / 2,
                stairZStart + stepD * i + stepD / 2
              );
              mapGroup.add(stepMesh);
            }
          }
        }
      });

      // Reconstruct solid walls from segmented list
      getWallSegmentsRef.current.forEach((seg, index) => {
        const isSelRoom = seg.roomId === selectedRoomIdRef.current;
        let wallMat = isSelRoom ? materials.selectedWall : materials.wall;
        if (['starter', 'library', 'science_lab', 'hallway'].includes(seg.roomId) && !wireframeModeRef.current) {
          const wTex = getProceduralTexture('wall_tiles').clone();
          const segW = seg.maxX - seg.minX;
          const segH = seg.maxY - seg.minY;
          const segD = seg.maxZ - seg.minZ;
          const wallLength = segW > segD ? segW : segD;
          wTex.repeat.set(wallLength / 8, segH / 8);
          if (isSelRoom) {
            wallMat = new THREE.MeshStandardMaterial({ 
              map: wTex, 
              roughness: 0.7, 
              color: 0x99ffec, 
              emissive: 0x003344, 
              emissiveIntensity: 0.5 
            });
          } else {
            wallMat = new THREE.MeshStandardMaterial({ map: wTex, roughness: 0.8 });
          }
        }

        const wGeo = new THREE.BoxGeometry(
          seg.maxX - seg.minX,
          seg.maxY - seg.minY,
          seg.maxZ - seg.minZ
        );
        const wMesh = new THREE.Mesh(wGeo, wallMat);

        // Offset the visual render coordinates slightly inward toward its own room center to prevent overlapping visual Z-fighting with adjacent room walls
        let posX = (seg.minX + seg.maxX) / 2;
        let posY = (seg.minY + seg.maxY) / 2;
        let posZ = (seg.minZ + seg.maxZ) / 2;

        const r = roomsRef.current.find(rm => rm.id === seg.roomId);
        if (r) {
          const shift = 0.301; // 30.1 cm inward shift keeps adjacent walls perfectly back-to-back with zero overlap/clipping static
          if (seg.side === 'N') posZ -= shift;
          if (seg.side === 'S') posZ += shift;
          if (seg.side === 'E') posX -= shift;
          if (seg.side === 'W') posX += shift;
        }

        wMesh.position.set(posX, posY, posZ);
        wMesh.castShadow = true;
        wMesh.receiveShadow = true;
        wMesh.userData = { roomId: seg.roomId, side: seg.side };
        mapGroup.add(wMesh);
        wallMeshes.push(wMesh);

        // Rendering COLLISION debug bounding boxes if requested (F3)
        if (showCollisionBoundsRef.current) {
          const bGeo = new THREE.BoxGeometry(
            (seg.maxX - seg.minX) + 0.3,
            (seg.maxY - seg.minY) + 0.3,
            (seg.maxZ - seg.minZ) + 0.3
          );
          const bMesh = new THREE.Mesh(bGeo, materials.boundary);
          bMesh.position.copy(wMesh.position);
          helpersGroup.add(bMesh);
        }
      });

      // Render 3D highlighted neon gateways for all active doorway gaps so they can see multiple doors/carved indices!
      if (activeTabRef.current === 'demolition') {
        roomsRef.current.forEach(r => {
          const gaps = roomGapsRef.current[r.id] || [];
          const isSelRoom = r.id === selectedRoomIdRef.current;
          gaps.forEach(g => {
            let posX = r.cx;
            let posY = r.floorY + r.h / 2;
            let posZ = r.cz;
            let sizeX = 0.1;
            let sizeY = r.h;
            let sizeZ = 0.1;

            if (g.side === 'N' || g.side === 'S') {
              posX = r.cx + g.center;
              posZ = r.cz + (g.side === 'N' ? r.d / 2 : -r.d / 2);
              sizeX = g.width;
              sizeZ = 0.58; // slightly thinner to prevent overlap with solid wall parts
            } else {
              posZ = r.cz + g.center;
              posX = r.cx + (g.side === 'E' ? r.w / 2 : -r.w / 2);
              sizeX = 0.58;
              sizeZ = g.width;
            }

            const gapGeo = new THREE.BoxGeometry(sizeX, sizeY, sizeZ);
            // Neon amber/cyan transparent indicators
            const gapMat = new THREE.MeshBasicMaterial({
              color: isSelRoom ? 0xf59e0b : 0x0ea5e9,
              transparent: true,
              opacity: 0.22,
              depthWrite: false
            });
            const gapMesh = new THREE.Mesh(gapGeo, gapMat);
            gapMesh.position.set(posX, posY, posZ);
            
            const edgMat = new THREE.MeshBasicMaterial({
              color: isSelRoom ? 0xfacc15 : 0x38bdf8,
              wireframe: true,
              transparent: true,
              opacity: 0.55,
              depthWrite: false
            });
            const edgMesh = new THREE.Mesh(gapGeo, edgMat);
            edgMesh.position.copy(gapMesh.position);

            mapGroup.add(gapMesh);
            mapGroup.add(edgMesh);
          });
        });
      }

      // Render MAP_PROPS in the live editor viewport
      MAP_PROPS.forEach(p => {
        const room = roomsRef.current.find(r => r.id === p.roomId);
        if (!room) return;
        const geo = new THREE.BoxGeometry(p.w, p.h, p.d);
        const mat = new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.8 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(p.cx, room.floorY + p.h / 2, p.cz);
        mapGroup.add(mesh);
      });
    };

    updateThreeGeometries();

    // C) Pointer Lock Event Bindings and Mouse Tracking
    const handleLockChange = () => {
      setIsPointerLocked(document.pointerLockElement === canvas);
    };
    document.addEventListener('pointerlockchange', handleLockChange);

    const mouseNDC = new THREE.Vector2(0, 0);
    const onCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    canvas.addEventListener('mousemove', onCanvasMouseMove);

    const onPointerClick = (e: MouseEvent) => {
      if (document.pointerLockElement !== canvas) {
        try {
          const promise = canvas.requestPointerLock() as any;
          if (promise && typeof promise.catch === 'function') {
            promise.catch((err: any) => {
              console.warn("Pointer lock request deferred or ignored:", err);
            });
          }
        } catch (err) {
          console.warn("Pointer lock request failed:", err);
        }
      }

      // Also support Click to Pick Room Selection in 3D scene!
      const rect = canvas.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1
      );

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([...floorMeshes, ...wallMeshes]);
      if (intersects.length > 0) {
        const pickedId = intersects[0].object.userData?.roomId;
        if (pickedId) {
          setSelectedRoomId(pickedId);
        }
      }
    };
    canvas.addEventListener('mousedown', onPointerClick);

    // Fallback click and drag look around when pointer lock isn't active
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onDragStart = (e: MouseEvent) => {
      if (document.pointerLockElement === canvas) return;
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onDragMove = (e: MouseEvent) => {
      if (document.pointerLockElement === canvas) {
        // Pointer Locked Look Around
        yaw.current -= e.movementX * 0.0025;
        pitch.current = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, pitch.current - e.movementY * 0.0025));
      } else if (isDragging) {
        // Drag Fallback Look Around
        const dx = e.clientX - prevMouseX;
        const dy = e.clientY - prevMouseY;
        prevMouseX = e.clientX;
        prevMouseY = e.clientY;

        yaw.current -= dx * 0.004;
        pitch.current = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, pitch.current - dy * 0.004));
      }
    };

    const onDragEnd = () => {
      isDragging = false;
    };

    window.addEventListener('mousedown', onDragStart);
    window.addEventListener('mousemove', onDragMove);
    window.addEventListener('mouseup', onDragEnd);

    // D) Keyboard Listeners
    const onKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = true;

      // Function key overrides logic
      if (e.key === 'F1') {
        e.preventDefault();
        setShowLabels(p => !p);
      }
      if (e.key === 'F2') {
        e.preventDefault();
        setShowGrid(p => !p);
      }
      if (e.key === 'F3') {
        e.preventDefault();
        setShowCollisionBounds(p => !p);
      }
      if (e.key === 'F4') {
        e.preventDefault();
        setWireframeMode(p => !p);
      }
      if (e.key === 'F5') {
        e.preventDefault();
        setShowTeleportList(p => !p);
      }
      if (e.key === 'F6') {
        e.preventDefault();
        setNoclip(p => !p);
      }
      if (e.key.toLowerCase() === 'v') {
        const active = document.activeElement?.tagName;
        if (active !== 'INPUT' && active !== 'TEXTAREA') {
          e.preventDefault();
          setNoclip(p => !p);
        }
      }
      if (e.key.toLowerCase() === 'm') {
        const active = document.activeElement?.tagName;
        if (active !== 'INPUT' && active !== 'TEXTAREA') {
          e.preventDefault();
          setShowMap(p => !p);
        }
      }
      if (e.key.toLowerCase() === 'e') {
        const active = document.activeElement?.tagName;
        if (active !== 'INPUT' && active !== 'TEXTAREA') {
          const focus = focusTargetRef.current;
          if (focus && focus.type === 'wall') {
            e.preventDefault();
            const snappedOffset = getFocusOffset(focus, roomsRef.current);
            handleAddDoorway(focus.roomId, focus.side!, snappedOffset, doorwayWidthRef.current || doorwayWidth);
          }
        }
      }
      if (e.key.toLowerCase() === 'r') {
        const active = document.activeElement?.tagName;
        if (active !== 'INPUT' && active !== 'TEXTAREA') {
          const focus = focusTargetRef.current;
          if (focus) {
            e.preventDefault();
            if (focus.type === 'wall' && focus.side) {
              setRooms(prev => prev.map(r => {
                if (r.id === focus.roomId) {
                  const currentDisabled = r.disabledWalls || [];
                  const isRemoved = currentDisabled.includes(focus.side!);
                  const updated = isRemoved 
                    ? currentDisabled.filter(s => s !== focus.side)
                    : [...currentDisabled, focus.side!];
                  return { ...r, disabledWalls: updated };
                }
                return r;
              }));
            } else if (focus.type === 'floor') {
              setRooms(prev => prev.map(r => {
                if (r.id === focus.roomId) {
                  return { ...r, disabledFloor: !r.disabledFloor };
                }
                return r;
              }));
            }
          }
        }
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = false;
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    // E) High frequency physics & rendering Loop
    let lastTime = performance.now();
    let frameTimes: number[] = [];
    let isRunning = true;

    // Projected labels calculator projection buffer
    const tempV3 = new THREE.Vector3();

    const tick = () => {
      if (!isRunning) return;
      requestAnimationFrame(tick);

      const time = performance.now();
      const dt = Math.min((time - lastTime) / 1000, 0.1); // Guard against giant pauses
      lastTime = time;

      // FPS calculation
      frameTimes.push(time);
      while (frameTimes.length > 0 && frameTimes[0] <= time - 1000) {
        frameTimes.shift();
      }
      setFps(frameTimes.length);

      // --- MOVEMENT CALCULATIONS ---
      const moveForward = keysPressed.current['KeyW'] || keysPressed.current['ArrowUp'];
      const moveBackward = keysPressed.current['KeyS'] || keysPressed.current['ArrowDown'];
      const moveLeft = keysPressed.current['KeyA'] || keysPressed.current['ArrowLeft'];
      const moveRight = keysPressed.current['KeyD'] || keysPressed.current['ArrowRight'];
      const isSprinting = keysPressed.current['ShiftLeft'] || keysPressed.current['ShiftRight'];
      const wantJump = keysPressed.current['Space'];

      // Direction vectors from Yaw Euler rotation
      const forwardX = Math.sin(yaw.current);
      const forwardZ = Math.cos(yaw.current);
      const rightX = -Math.cos(yaw.current);
      const rightZ = Math.sin(yaw.current);

      let dx = 0;
      let dz = 0;

      if (moveForward) { dx += forwardX; dz += forwardZ; }
      if (moveBackward) { dx -= forwardX; dz -= forwardZ; }
      if (moveLeft) { dx -= rightX; dz -= rightZ; }
      if (moveRight) { dx += rightX; dz += rightZ; }

      // Normalization of vectors
      const len = Math.sqrt(dx * dx + dz * dz);
      if (len > 0) {
        dx /= len;
        dz /= len;
      }

      const currentSpeed = isSprinting ? 28.0 : 13.5;
      const vx = dx * currentSpeed;
      const vz = dz * currentSpeed;

      const pX = playerPos.current.x;
      const pY = playerPos.current.y;
      const pZ = playerPos.current.z;

      let nextX = pX;
      let nextY = pY;
      let nextZ = pZ;

      if (noclip) {
        // Noclip flight/movement: translation along look direction
        const fwdX = Math.sin(yaw.current) * Math.cos(pitch.current);
        const fwdY = Math.sin(pitch.current);
        const fwdZ = Math.cos(yaw.current) * Math.cos(pitch.current);
        
        // Perpendicular standard right vector on horizontal plane
        const rgtX = -Math.cos(yaw.current);
        const rgtZ = Math.sin(yaw.current);

        let moveDirX = 0;
        let moveDirY = 0;
        let moveDirZ = 0;

        if (moveForward) {
          moveDirX += fwdX;
          moveDirY += fwdY;
          moveDirZ += fwdZ;
        }
        if (moveBackward) {
          moveDirX -= fwdX;
          moveDirY -= fwdY;
          moveDirZ -= fwdZ;
        }
        if (moveLeft) {
          moveDirX -= rgtX;
          moveDirZ -= rgtZ;
        }
        if (moveRight) {
          moveDirX += rgtX;
          moveDirZ += rgtZ;
        }

        // Dedicated climb and dive
        if (wantJump) {
          moveDirY += 1.0;
        }
        if (isSprinting) {
          moveDirY -= 1.0;
        }

        const dirLen = Math.sqrt(moveDirX * moveDirX + moveDirY * moveDirY + moveDirZ * moveDirZ);
        const flySpeed = isSprinting && !wantJump ? 45.0 : 25.0; // nice speed boost
        if (dirLen > 0) {
          nextX += (moveDirX / dirLen) * flySpeed * dt;
          nextY += (moveDirY / dirLen) * flySpeed * dt;
          nextZ += (moveDirZ / dirLen) * flySpeed * dt;
        }
        velocityY.current = 0;
        isGrounded.current = false;
      } else {
        // --- NORMAL WALK WITH GRAVITY & COLLIDERS ---
        // Gravity apply tick
        velocityY.current -= 36.0 * dt;
        nextY = pY + velocityY.current * dt;

        // Detect floor elevation height immediately under player position
        const groundFloorY = getFloorElevationAt(pX, pZ, pY);
        const minClipY = groundFloorY + PLAYER_EYE_HEIGHT;

        if (nextY <= minClipY) {
          nextY = minClipY;
          velocityY.current = 0;
          isGrounded.current = true;
        } else {
          isGrounded.current = false;
        }

        // Abyss fallback protection (warp player back to Starter Classroom if they fall past -100m)
        if (nextY < -100.0) {
          nextX = 0;
          nextY = PLAYER_EYE_HEIGHT;
          nextZ = -30;
          velocityY.current = 0;
          isGrounded.current = true;
        }

        // Jump activation
        if (wantJump && isGrounded.current) {
          velocityY.current = 13.0;
          isGrounded.current = false;
        }

        // Try X move independently
        if (vx !== 0) {
          const testX = pX + vx * dt;
          let collidesX = false;
          
          for (const seg of getWallSegmentsRef.current) {
            // Check player bound collision Cylinder-to-Box helper
            const colX = testX + PLAYER_RADIUS > seg.minX && testX - PLAYER_RADIUS < seg.maxX;
            const colZ = pZ + PLAYER_RADIUS > seg.minZ && pZ - PLAYER_RADIUS < seg.maxZ;
            // Allow stepping up/down of up to 2.0 meters without horizontal wall collision, supporting stair-room connections
            const STEP_HEIGHT = 2.0;
            const colY = nextY + 0.2 > seg.minY && nextY - (PLAYER_EYE_HEIGHT - STEP_HEIGHT) < seg.maxY;
            if (colX && colZ && colY) {
              collidesX = true;
              break;
            }
          }
          if (!collidesX) nextX = testX;
        }

        // Try Z move independently
        if (vz !== 0) {
          const testZ = pZ + vz * dt;
          let collidesZ = false;

          for (const seg of getWallSegmentsRef.current) {
            const colX = nextX + PLAYER_RADIUS > seg.minX && nextX - PLAYER_RADIUS < seg.maxX;
            const colZ = testZ + PLAYER_RADIUS > seg.minZ && testZ - PLAYER_RADIUS < seg.maxZ;
            // Allow stepping up/down of up to 2.0 meters without horizontal wall collision, supporting stair-room connections
            const STEP_HEIGHT = 2.0;
            const colY = nextY + 0.2 > seg.minY && nextY - (PLAYER_EYE_HEIGHT - STEP_HEIGHT) < seg.maxY;
            if (colX && colZ && colY) {
              collidesZ = true;
              break;
            }
          }
          if (!collidesZ) nextZ = testZ;
        }
      }

      // Save player coordinates refs
      playerPos.current.set(nextX, nextY, nextZ);

      // Camera view rotation quaternion math
      camera.position.copy(playerPos.current);
      const targetFacing = new THREE.Vector3(
        camera.position.x + Math.sin(yaw.current) * Math.cos(pitch.current),
        camera.position.y + Math.sin(pitch.current),
        camera.position.z + Math.cos(yaw.current) * Math.cos(pitch.current)
      );
      camera.lookAt(targetFacing);

      // --- SPOT INTERACTION RAYCASTING FOCUS CHECK ---
      const focusRaycaster = new THREE.Raycaster();
      if (document.pointerLockElement === canvas) {
        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        focusRaycaster.set(camera.position, cameraDirection);
      } else {
        focusRaycaster.setFromCamera(mouseNDC, camera);
      }
      focusRaycaster.near = 0.1;
      focusRaycaster.far = 120;
      
      const targetsToIntersect = [...floorMeshes, ...wallMeshes];
      const intersects = focusRaycaster.intersectObjects(targetsToIntersect);
      
      let newFocus: any = null;
      if (intersects.length > 0) {
        const hit = intersects[0];
        const obj = hit.object;
        const roomId = obj.userData?.roomId;
        const roomObj = roomsRef.current.find(r => r.id === roomId);
        
        if (roomObj && roomId) {
          if (floorMeshes.includes(obj as THREE.Mesh)) {
            newFocus = {
              type: 'floor' as const,
              roomId,
              roomName: roomObj.name,
              point: { x: hit.point.x, y: hit.point.y, z: hit.point.z },
              distance: hit.distance
            };
          } else if (wallMeshes.includes(obj as THREE.Mesh)) {
            newFocus = {
              type: 'wall' as const,
              roomId,
              roomName: roomObj.name,
              side: obj.userData?.side as 'N' | 'S' | 'E' | 'W',
              point: { x: hit.point.x, y: hit.point.y, z: hit.point.z },
              distance: hit.distance
            };
          }
        }
      }

      // Update highlight visualization mesh position in 3D Space
      if (newFocus) {
        highlightGroup.visible = true;
        const room = roomsRef.current.find(r => r.id === newFocus.roomId);
        if (room) {
          if (newFocus.type === 'wall') {
            const side = newFocus.side;
            const snappedOffset = getFocusOffset(newFocus, roomsRef.current);
            
            // Snap to exact wall coordinates and stretch indicator vertically of room height
            if (side === 'N') {
              highlightGroup.position.set(room.cx + snappedOffset, room.floorY + room.h / 2, room.cz + room.d / 2);
              highlightGroup.scale.set(0.65, room.h, 0.25);
            } else if (side === 'S') {
              highlightGroup.position.set(room.cx + snappedOffset, room.floorY + room.h / 2, room.cz - room.d / 2);
              highlightGroup.scale.set(0.65, room.h, 0.25);
            } else if (side === 'E') {
              highlightGroup.position.set(room.cx + room.w / 2, room.floorY + room.h / 2, room.cz + snappedOffset);
              highlightGroup.scale.set(0.25, room.h, 0.65);
            } else if (side === 'W') {
              highlightGroup.position.set(room.cx - room.w / 2, room.floorY + room.h / 2, room.cz + snappedOffset);
              highlightGroup.scale.set(0.25, room.h, 0.65);
            }
          } else {
            // Floor highlight: snap coordinates on the 1m grid
            highlightGroup.position.set(Math.round(newFocus.point.x), room.floorY + 0.05, Math.round(newFocus.point.z));
            highlightGroup.scale.set(1.4, 0.15, 1.4);
          }
        }
      } else {
        highlightGroup.visible = false;
      }

      // Update state if focus has changed significantly (by 0.15m or is different type/zone/side)
      const currentFocus = focusTargetRef.current;
      const focusChanged = !currentFocus || !newFocus ||
        currentFocus.type !== newFocus.type ||
        currentFocus.roomId !== newFocus.roomId ||
        currentFocus.side !== newFocus.side ||
        Math.abs(currentFocus.point.x - newFocus.point.x) > 0.15 ||
        Math.abs(currentFocus.point.z - newFocus.point.z) > 0.15;

      if (focusChanged && (newFocus || currentFocus)) {
        focusTargetRef.current = newFocus;
        setFocusTarget(newFocus);
      }

      // Live 3D Pointer Painting execution check
      if (activeTabRef.current === 'demolition' && isMouseDownRef.current && newFocus && newFocus.type === 'wall' && newFocus.side) {
        paintWallTile3D(newFocus.roomId, newFocus.side, newFocus.point, paintModeRef.current);
      }

      // Recompile dynamic ThreeJS scene geometries inside the same loop cycle if scheduled dirty
      if (needsGeometryUpdateRef.current) {
        updateThreeGeometries();
        needsGeometryUpdateRef.current = false;
      }

      // Render execution
      renderer.render(scene, camera);

      // Sync state inputs at slightly lower rate to keep render thread 100% full speed
      setPlayerCoords({ x: nextX, y: nextY, z: nextZ });
      setCurrentRoomName(getRoomNameAt(nextX, nextZ, nextY));

      // Calculate room projection labels (F1)
      const widthHalf = container.clientWidth / 2;
      const heightHalf = container.clientHeight / 2;

      const labelsData = roomsRef.current.map(r => {
        tempV3.set(r.cx, r.floorY + r.h + 1.2, r.cz);
        tempV3.project(camera);

        // Check if label coordinate projected is in front of the camera plane
        const isBehind = tempV3.z > 1;

        let xPos = (tempV3.x * widthHalf) + widthHalf;
        let yPos = -(tempV3.y * heightHalf) + heightHalf;

        const isValid = Number.isFinite(xPos) && !Number.isNaN(xPos) && Number.isFinite(yPos) && !Number.isNaN(yPos);
        if (!isValid) {
          xPos = 0;
          yPos = 0;
        }

        return {
          id: r.id,
          name: r.name,
          w: r.w,
          d: r.d,
          h: r.h,
          x: xPos,
          y: yPos,
          visible: !isBehind && showLabelsRef.current && isValid
        };
      });
      setProjectedLabels(labelsData);
    };

    // Begin Animation Loop
    tick();

    // Resize listeners
    const resizeObserver = new ResizeObserver(() => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    return () => {
      isRunning = false;
      document.removeEventListener('pointerlockchange', handleLockChange);
      canvas.removeEventListener('mousemove', onCanvasMouseMove);
      canvas.removeEventListener('mousedown', onPointerClick);
      window.removeEventListener('mousedown', onDragStart);
      window.removeEventListener('mousemove', onDragMove);
      window.removeEventListener('mouseup', onDragEnd);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      resizeObserver.disconnect();
    };
  }, [isPointerLocked]);

  // Compute total map boundaries representation
  const mapExtents = useMemo(() => {
    let minX = 999, maxX = -999, minZ = 999, maxZ = -999;
    rooms.forEach(r => {
      if (r.cx - r.w/2 < minX) minX = r.cx - r.w/2;
      if (r.cx + r.w/2 > maxX) maxX = r.cx + r.w/2;
      if (r.cz - r.d/2 < minZ) minZ = r.cz - r.d/2;
      if (r.cz + r.d/2 > maxZ) maxZ = r.cz + r.d/2;
    });
    return { minX: minX - 10, maxX: maxX + 10, minZ: minZ - 10, maxZ: maxZ + 10 };
  }, [rooms]);

  return (
    <div className="flex h-screen w-screen bg-slate-950 font-sans text-slate-100 select-none overflow-hidden">
      
      {/* LEFT PRIMARY PANEL: 3D VIEWPORT FRAME */}
      <main className="relative flex-1 flex flex-col min-w-0 border-r border-slate-900 bg-slate-950">
        
        {/* VIEWPORT CONTROLS BAR */}
        <header className="h-14 shrink-0 flex items-center justify-between px-5 border-b border-slate-900 bg-slate-900/45 backdrop-blur-md z-20">
          <div className="flex items-center space-x-3">
            <div className="size-2.5 rounded-full bg-emerald-500 animate-pulse border border-emerald-400"></div>
            <div>
              <span className="font-mono text-xs font-bold leading-none uppercase tracking-wider text-emerald-400">Layout Testbed Active</span>
              <p className="text-[10px] text-slate-400 tracking-tight leading-none font-medium">Dead Halls Map Sandbox v1.40</p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0 font-mono">
            {/* Direct HTML Blueprint Downloader */}
            <button
              type="button"
              onClick={handleExportHTML}
              className="flex items-center space-x-1.5 px-3 py-1 bg-emerald-950/60 border border-emerald-800 text-emerald-400 hover:bg-emerald-900/50 hover:text-emerald-300 rounded text-[10px] font-bold tracking-tight transition cursor-pointer shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.15)]"
              title="Get a self-contained 3D HTML blueprint map export file of Westbrook High"
            >
              <Download className="size-3" />
              <span>Export 3D Map HTML</span>
            </button>

            {/* Legend / Status indicators */}
            <div className="flex items-center space-x-1 px-2.5 py-1 bg-slate-800/80 rounded border border-slate-700/50 text-[10px]">
              <span className="text-slate-400">Press</span>
              <kbd className="px-1 bg-slate-950 rounded text-amber-400 font-bold">ESC</kbd>
              <span className="text-slate-400">to free cursor</span>
            </div>
          </div>
        </header>

        {/* THREEJS VIEWPORT BODY CONTAINER */}
        <div 
          ref={mountRef} 
          className="relative flex-1 w-full min-h-0 bg-slate-950 cursor-crosshair overflow-hidden"
          id="viewport-canvas-container"
          title="Click looking in viewport! Click floor to select rooms, WASD mouse look around"
        >
          <canvas ref={canvasRef} className="block w-full h-full" id="canvas3d" />

          {/* DYNAMIC COMPASS HUD OVERLAY */}
          {(() => {
            const heading = getCardinalDirection(yaw.current);
            const ringRotate = -heading.degree;
            return (
              <div 
                id="hud-compass" 
                className="absolute top-4 right-4 z-10 flex items-center space-x-3 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-800/80 shadow-2xl pointer-events-none select-none transition-all"
              >
                {/* Visual Circle Compass */}
                <div className="relative size-10 rounded-full border border-slate-700/60 bg-slate-900/90 flex items-center justify-center overflow-hidden">
                  {/* Rotating Dial */}
                  <div 
                    className="absolute inset-0 transition-transform duration-75 ease-out"
                    style={{ transform: `rotate(${ringRotate}deg)` }}
                  >
                    {/* Ring cardinals */}
                    <span className="absolute top-0.5 left-1/2 -translate-x-1/2 text-[9px] font-black text-rose-500 font-mono">N</span>
                    <span className="absolute right-0.5 top-1/2 -translate-y-1/2 text-[9px] font-black text-slate-300 font-bold font-mono">E</span>
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-300 font-mono">S</span>
                    <span className="absolute left-0.5 top-1/2 -translate-y-1/2 text-[9px] font-bold text-slate-300 font-mono">W</span>
                    
                    {/* Tick markings for NE, SE, SW, NW */}
                    <span className="absolute top-2.5 right-2 text-[5.5px] font-bold text-slate-500 font-mono">NE</span>
                    <span className="absolute bottom-2.5 right-2 text-[5.5px] font-bold text-slate-500 font-mono">SE</span>
                    <span className="absolute bottom-2.5 left-2 text-[5.5px] font-bold text-slate-500 font-mono">SW</span>
                    <span className="absolute top-2.5 left-2 text-[5.5px] font-bold text-slate-500 font-mono">NW</span>
                  </div>
                  
                  {/* North Pointer Indicator (Stationary) */}
                  <div className="absolute top-0.5 text-cyan-400 text-[10px] leading-none select-none font-bold">▲</div>
                  {/* Subtle inner core */}
                  <div className="size-2 rounded-full bg-slate-950 border border-slate-800" />
                </div>
                
                {/* Text feedback */}
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-mono text-slate-400 font-bold leading-none tracking-wider">Compass Heading</span>
                  <div className="flex items-baseline space-x-1.5 mt-0.5">
                    <span className="text-sm font-black text-emerald-400 font-mono">{heading.degree}°</span>
                    <span className="text-xs font-black text-cyan-400 font-sans">{heading.label}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* SAVE CANVAS NOTIFICATION PILL */}
          {saveNotification && (
            <div className="absolute top-18 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-black tracking-wider px-5 py-2.5 rounded-full text-xs shadow-[0_0_20px_rgba(16,185,129,0.7)] z-50 flex items-center space-x-2 animate-bounce pointer-events-none border border-emerald-300">
              <span>{saveNotification}</span>
            </div>
          )}

          {/* SPOT FOCUS INTERACTION HEADS-UP OVERLAY (HUD) */}
          {focusTarget && (
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-cyan-500/40 p-3 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.25)] flex flex-col items-center space-y-2 z-15 animate-fade-in pointer-events-auto">
              <div className="flex items-center space-x-2 text-[10px] font-mono text-slate-300">
                <span className="font-bold text-[#22d3ee] uppercase tracking-widest">{focusTarget.type === 'wall' ? '🧱 Wall Spotted' : '🕳️ Floor Spotted'}</span>
                <span className="text-slate-600 font-bold">|</span>
                <span className="text-yellow-400 font-bold font-sans uppercase">{focusTarget.roomName}</span>
                {focusTarget.type === 'wall' && (
                  <>
                    <span className="text-slate-600 font-bold">|</span>
                    <span className="text-indigo-400 font-bold font-mono">Side {focusTarget.side}</span>
                    <span className="text-slate-600 font-bold">|</span>
                    <span className="text-amber-400 font-bold font-mono">Offset: {getFocusOffset(focusTarget, rooms)}m</span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-1.5 pt-1">
                {focusTarget.type === 'wall' ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        const offset = getFocusOffset(focusTarget, rooms);
                        handleAddDoorway(focusTarget.roomId, focusTarget.side!, offset, doorwayWidth);
                      }}
                      className="cursor-pointer px-2.5 py-1.5 bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-black font-mono text-[9px] uppercase rounded transition flex items-center space-x-1.5"
                    >
                      <kbd className="px-1 py-0.5 bg-slate-950 text-amber-400 rounded text-[8px] font-extrabold shadow-inner">E</kbd>
                      <span>Cut Doorway here</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setRooms(prev => prev.map(r => {
                          if (r.id === focusTarget.roomId) {
                            const currentDisabled = r.disabledWalls || [];
                            const isRemoved = currentDisabled.includes(focusTarget.side!);
                            const updated = isRemoved 
                              ? currentDisabled.filter(s => s !== focusTarget.side)
                              : [...currentDisabled, focusTarget.side!];
                            return { ...r, disabledWalls: updated };
                          }
                          return r;
                        }));
                      }}
                      className="cursor-pointer px-2.5 py-1.5 bg-rose-950/80 border border-rose-800 hover:bg-rose-900 active:scale-95 text-rose-200 hover:text-white font-black font-mono text-[9px] uppercase rounded transition flex items-center space-x-1.5"
                    >
                      <kbd className="px-1 py-0.5 bg-slate-950 text-rose-500 rounded text-[8px] font-extrabold shadow-inner">R</kbd>
                      <span>Toggle Wall</span>
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setRooms(prev => prev.map(r => {
                        if (r.id === focusTarget.roomId) {
                          return { ...r, disabledFloor: !r.disabledFloor };
                        }
                        return r;
                      }));
                    }}
                    className="cursor-pointer px-2.5 py-1.5 bg-rose-950/80 border border-rose-800 hover:bg-rose-900 active:scale-95 text-rose-200 hover:text-white font-black font-mono text-[9px] uppercase rounded transition flex items-center space-x-1.5"
                  >
                    <kbd className="px-1 py-0.5 bg-slate-950 text-rose-500 rounded text-[8px] font-extrabold shadow-inner">R</kbd>
                    <span>Toggle Floor</span>
                  </button>
                )}
                {isPointerLocked && (
                  <span className="text-[8px] font-mono text-slate-500 ml-1 block">or press hotkey</span>
                )}
              </div>
            </div>
          )}

          {/* PROJECTED FLOATING ROOM LABELS (F1 Toggled) */}
          {projectedLabels.map(lbl => {
            if (!lbl.visible) return null;
            const isTarget = lbl.id === selectedRoomId;
            return (
              <div
                key={lbl.id}
                className="absolute pointer-events-none transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center select-none"
                style={{ left: lbl.x, top: lbl.y }}
              >
                <div className={`px-2.5 py-1 text-center font-mono rounded text-[10px] uppercase font-bold shadow-lg transition-all border ${
                  isTarget 
                    ? 'bg-amber-400 text-slate-950 border-amber-300 scale-105 shadow-amber-400/20' 
                    : 'bg-slate-950/90 text-slate-200 border-slate-800'
                }`}>
                  <div className="font-sans font-extrabold tracking-wider">{lbl.name}</div>
                  <div className={`text-[9px] font-mono mt-0.5 ${isTarget ? 'text-slate-800 font-bold' : 'text-slate-400'}`}>
                    {lbl.w.toFixed(1)}m × {lbl.d.toFixed(1)}m × {lbl.h.toFixed(1)}m
                  </div>
                </div>
                <div className={`w-0.5 h-3 ${isTarget ? 'bg-amber-400' : 'bg-slate-700'} shadow`}></div>
              </div>
            );
          })}

          {/* TOP LEFT MULTI-METRIC DEBUG WINDOW */}
          <div className="absolute top-4 left-4 pointer-events-none bg-slate-950/85 backdrop-blur border border-slate-900 rounded-lg p-3.5 w-68 shadow-xl font-mono text-[11px] space-y-2 z-10">
            <div className="flex justify-between border-b border-slate-900 pb-1.5 uppercase font-bold tracking-widest text-[#00ffcc] text-[9px] items-center">
              <span>Telemetry Monitor</span>
              <kbd className="px-1.5 py-0.5 bg-slate-900 rounded text-slate-400">ACTIVE</kbd>
            </div>
            
            <div className="space-y-1 leading-normal text-slate-300">
              <div className="flex justify-between items-center bg-slate-900/40 px-1.5 py-0.5 rounded">
                <span className="text-slate-400 font-medium">Zone Name:</span>
                <span className="text-yellow-400 font-bold truncate max-w-[130px]" title={currentRoomName}>
                  {currentRoomName}
                </span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/40 px-1.5 py-0.5 rounded">
                <span className="text-slate-400 font-medium">Coordinates:</span>
                <span className="text-[#38bdf8] font-bold">
                  {playerCoords.x.toFixed(1)}, {playerCoords.y.toFixed(1)}, {playerCoords.z.toFixed(1)}
                </span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/40 px-1.5 py-0.5 rounded">
                <span className="text-slate-400 font-medium font-mono">Frame Rate:</span>
                <span className={`font-bold font-mono ${fps >= 50 ? 'text-emerald-400' : fps >= 30 ? 'text-amber-500' : 'text-rose-500'}`}>
                  {fps} FPS
                </span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/40 px-1.5 py-0.5 rounded">
                <span className="text-slate-400 font-medium">Yaw Rotation:</span>
                <span className="text-indigo-400 text-[10px] font-bold">
                  {((yaw.current * 180) / Math.PI % 360).toFixed(0)}°
                </span>
              </div>
            </div>

            <div className="pt-1.5 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500">
              <span>Sprint: Shift</span>
              <span>Jump: Space</span>
            </div>
          </div>

          {/* HOTKEYS FLOATING BAR - ON-CANVAS */}
          <div className="absolute bottom-4 left-4 pointer-events-auto bg-slate-950/80 backdrop-blur-md rounded-lg p-2.5 border border-slate-900 flex items-center space-x-3 shadow-2xl z-10 font-mono text-[10px] tracking-wide">
            <span className="text-slate-400 font-bold pl-1 uppercase font-mono tracking-widest text-[9px] border-r border-slate-800 pr-2">Hotkey overrides:</span>
            
            <button 
              onClick={() => setShowLabels(p => !p)}
              className={`px-2 py-1 rounded font-bold border transition ${
                showLabels ? 'bg-amber-400 text-slate-950 border-amber-300' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Toggle text overlays pointing each room name on the screen"
            >
              F1: Labels
            </button>

            <button 
              onClick={() => setShowGrid(p => !p)}
              className={`px-2 py-1 rounded font-bold border transition ${
                showGrid ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Toggle helper floor grids in level 1 and gymnasium level 2 floors"
            >
              F2: Grid
            </button>

            <button 
              onClick={() => setShowCollisionBounds(p => !p)}
              className={`px-2 py-1 rounded font-bold border transition ${
                showCollisionBounds ? 'bg-rose-500 text-white border-rose-400 animate-pulse' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Show boundary boxes around all wall solid segments in color red"
            >
              F3: Bounding
            </button>

            <button 
              onClick={() => setWireframeMode(p => !p)}
              className={`px-2 py-1 rounded font-bold border transition ${
                wireframeMode ? 'bg-[#00f0ff] text-slate-950 border-[#8cf0ff]' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Toggle three.js visual wireframe mode showing line loops"
            >
              F4: Wireframe
            </button>

            <button 
              onClick={() => setShowTeleportList(p => !p)}
              className={`px-2 py-1 rounded font-bold border transition ${
                showTeleportList ? 'bg-indigo-500 text-white border-indigo-400' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Opens room teleport quick list menu override"
            >
              F5: Teleport
            </button>

            <button 
              onClick={() => setNoclip(p => !p)}
              className={`px-2 py-1 rounded font-bold border transition ${
                noclip ? 'bg-indigo-500 text-white border-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Toggle fly mode where you pass through walls without gravity limits"
            >
              F6 / V: Noclip
            </button>

            <button 
              onClick={() => setShowMap(p => !p)}
              className={`px-2 py-1 rounded font-bold border transition ${
                showMap ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-extrabold' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
              title="Opens 2D Blueprint overlay of High School classrooms"
            >
              M: Map View
            </button>
          </div>

          {/* IF POINTER LOCK CAPTURED HOVER INFO */}
          {isPointerLocked && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-10 flex flex-col items-center justify-center">
              <div className="size-1.5 rounded-full bg-emerald-400 border border-white"></div>
            </div>
          )}

          {/* FALLBACK INSTRUCTION OVERLAY when mouse isn't locked */}
          {!isPointerLocked && (
            <div className="absolute inset-x-0 bottom-18 flex justify-center pointer-events-none select-none z-10">
              <div className="bg-slate-950/75 border border-slate-800/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-wider text-slate-400">
                DRAG MOUSE ON VIEWPORT TO LOOK AROUND · CLICK VIEWPORT TO CONFIRM LOCK
              </div>
            </div>
          )}
        </div>
      </main>

      {/* RIGHT SIDEBAR PANEL: ROOM DESIGNER PROPERTIES PANEL */}
      <aside className="w-80 border-l border-slate-900 bg-slate-900/30 relative flex flex-col shrink-0 min-w-[320px] overflow-hidden">
        
        {/* HEADER BLOCK */}
        <div className="p-4 border-b border-slate-900 flex items-center justify-between bg-slate-950/80 shrink-0">
          <div className="flex items-center space-x-2">
            <Sliders className="size-4 text-cyan-400" />
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[#22d3ee]">Designer</h2>
          </div>
          
          <div className="flex items-center space-x-1 shrink-0">
            <button 
              type="button"
              onClick={handleUndo}
              className="px-2 py-1 bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-xs text-slate-300 hover:text-white rounded flex items-center transition cursor-pointer"
              title="Undo (Ctrl+Z)"
            >
              <Undo2 className="size-3" />
            </button>
            <button 
              type="button"
              onClick={handleRedo}
              className="px-2 py-1 bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-xs text-slate-300 hover:text-white rounded flex items-center transition cursor-pointer"
              title="Redo (Ctrl+Shift+Z or Ctrl+Y)"
            >
              <Redo2 className="size-3" />
            </button>
            <button 
              type="button"
              onClick={handleSave}
              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 text-[10px] font-mono font-bold text-white rounded flex items-center gap-1.5 transition shadow-[0_0_10px_rgba(16,185,129,0.25)] cursor-pointer"
              title="Save current layout to local storage sandbox"
            >
              <span>💾 Save Sandbox</span>
            </button>
            <button 
              type="button"
              onClick={handleResetDimensions}
              className="px-2 py-1 bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-xs text-rose-400 rounded flex items-center transition cursor-pointer"
              title="Reset level sandbox back to initial rooms"
            >
              <RotateCcw className="size-3" />
            </button>
          </div>
        </div>

        {/* CLUTTER REMOVAL: PRIMARY NAVIGATION TABS */}
        <div className="flex border-b border-slate-900 bg-slate-950 shrink-0 text-[10px] font-mono font-bold select-none">
          <button
            type="button"
            onClick={() => setActiveTab('room')}
            className={`flex-1 py-3 text-center uppercase tracking-wider transition cursor-pointer ${
              activeTab === 'room'
                ? 'text-cyan-400 bg-slate-900/40 border-b-2 border-cyan-400'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/10'
            }`}
          >
            📐 Room Shape
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('demolition')}
            className={`flex-1 py-3 text-center uppercase tracking-wider transition cursor-pointer ${
              activeTab === 'demolition'
                ? 'text-amber-400 bg-slate-900/40 border-b-2 border-amber-400'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/10'
            }`}
          >
            🧱 Walls & Doors
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tools')}
            className={`flex-1 py-3 text-center uppercase tracking-wider transition cursor-pointer ${
              activeTab === 'tools'
                ? 'text-indigo-400 bg-slate-900/40 border-b-2 border-indigo-400'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/10'
            }`}
          >
            🚀 Core Tools
          </button>
        </div>

        {/* TAB TARGET CONTAINER */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">
          
          {/* TAB 1: ROOM PARAMS SHAPE */}
          {activeTab === 'room' && (
            <div className="space-y-4 animate-fade-in">
              {/* TARGET SELECTOR */}
              <div className="bg-slate-950/50 p-3 rounded-lg border border-slate-900 space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase font-bold text-slate-400">
                  <span>Target Room to Edit:</span>
                </div>
                
                <select
                  value={selectedRoomId}
                  onChange={(e) => setSelectedRoomId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-md p-2 text-xs font-mono text-slate-200 outline-none cursor-pointer transition focus:ring-1 focus:ring-cyan-500"
                >
                  {rooms.map(r => (
                    <option key={r.id} value={r.id}>
                      {r.name} (Floor {r.floorY === 11 ? '2' : '1'})
                    </option>
                  ))}
                </select>

                <div className="pt-2 flex justify-between items-center border-t border-slate-900/50 text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Compass className="size-3 text-cyan-400" /> Coord: {selectedRoom.cx.toFixed(0)}, {selectedRoom.cz.toFixed(0)}
                  </span>
                  <button 
                    type="button"
                    onClick={() => teleportToRoom(selectedRoomId)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold transition uppercase cursor-pointer bg-transparent border-0 p-0"
                    title="Warps player position into the center of this room"
                  >
                    Warp to Room ➔
                  </button>
                </div>
              </div>

              {/* EDIT PROPERTIES */}
              <div className="space-y-4">
                {/* EDIT NAME */}
                <div className="space-y-1.5 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Room Name:</span>
                  <input
                    type="text"
                    value={selectedRoom.name}
                    onChange={(e) => handleRoomPropertyChange(selectedRoomId, 'name', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 hover:border-slate-700 rounded p-1.5 text-xs font-mono text-slate-200 outline-none transition focus:border-cyan-500"
                    placeholder="Enter classroom/area name..."
                  />
                </div>

                {/* POSITION CONTROLLERS: X & Z */}
                <div className="space-y-1.5 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-medium">Position X (East/West):</span>
                    <span className="text-amber-500 font-bold">{selectedRoom.cx}m</span>
                  </div>
                  <input 
                    type="range"
                    min="-120"
                    max="120"
                    step={gridSnapping ? snapSize : 1}
                    value={selectedRoom.cx}
                    onChange={(e) => handleRoomPropertyChange(selectedRoomId, 'cx', parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                    <span>West: -120m</span>
                    <span>East: 120m</span>
                  </div>
                </div>

                <div className="space-y-1.5 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-medium">Position Z (North/South):</span>
                    <span className="text-violet-400 font-bold">{selectedRoom.cz}m</span>
                  </div>
                  <input 
                    type="range"
                    min="-120"
                    max="120"
                    step={gridSnapping ? snapSize : 1}
                    value={selectedRoom.cz}
                    onChange={(e) => handleRoomPropertyChange(selectedRoomId, 'cz', parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-400 focus:outline-none"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                    <span>South: -120m</span>
                    <span>North: 120m</span>
                  </div>
                </div>

                {/* FLOOR LEVEL BUTTON GROUP */}
                <div className="space-y-2 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Floor Level Elevation (Y):</span>
                    <span className="font-mono text-xs text-emerald-400 font-bold bg-slate-950 px-1.5 py-0.5 rounded">{selectedRoom.floorY}m</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleRoomPropertyChange(selectedRoomId, 'floorY', 0)}
                      className={`p-1.5 text-xs font-mono font-bold rounded cursor-pointer transition ${
                        selectedRoom.floorY === 0
                          ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.3)] border border-cyan-400'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-950'
                      }`}
                    >
                      Floor 1 (0m)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRoomPropertyChange(selectedRoomId, 'floorY', 11)}
                      className={`p-1.5 text-xs font-mono font-bold rounded cursor-pointer transition ${
                        selectedRoom.floorY === 11
                          ? 'bg-cyan-600 text-white shadow-[0_0_10px_rgba(6,182,212,0.3)] border border-cyan-400'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-950'
                      }`}
                    >
                      Floor 2 (11m)
                    </button>
                  </div>
                  <div className="pt-1.5 space-y-1">
                    <div className="flex justify-between items-center text-[9px] text-slate-500 font-mono">
                      <span>Custom Elevation Slider:</span>
                    </div>
                    <input
                      type="range"
                      min="-40"
                      max="80"
                      step={gridSnapping ? snapSize : 0.5}
                      value={selectedRoom.floorY}
                      onChange={(e) => handleRoomPropertyChange(selectedRoomId, 'floorY', parseFloat(e.target.value))}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400 focus:outline-none"
                    />
                    <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                      <span>Basement: -40m</span>
                      <span>High: 80m</span>
                    </div>
                  </div>
                </div>

                {/* ROOM ENTITY TYPE TOGGLE */}
                <div className="space-y-2 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Room Entity Type:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleRoomPropertyChange(selectedRoomId, 'isStaircase', false)}
                      className={`p-1.5 text-xs font-mono font-bold rounded cursor-pointer transition flex items-center justify-center gap-1 ${
                        !selectedRoom.isStaircase
                          ? 'bg-amber-600 text-white shadow-[0_0_10px_rgba(217,119,6,0.3)] border border-amber-400'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-950'
                      }`}
                    >
                      <span>🏫</span>
                      <span>Standard Room</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRoomPropertyChange(selectedRoomId, 'isStaircase', true)}
                      className={`p-1.5 text-xs font-mono font-bold rounded cursor-pointer transition flex items-center justify-center gap-1 ${
                        selectedRoom.isStaircase
                          ? 'bg-amber-600 text-white shadow-[0_0_10px_rgba(217,119,6,0.3)] border border-amber-400'
                          : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-950'
                      }`}
                    >
                      <span>🪜</span>
                      <span>Staircase Entity</span>
                    </button>
                  </div>
                </div>

                {(selectedRoom.isStaircase || selectedRoom.id === 'stairwell') && (
                  <div className="space-y-2 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Stair Climb Direction (Rotation):</span>
                    <div className="grid grid-cols-2 gap-2 select-none">
                      {[
                        { key: 'N_S', label: '⬇️ South (N ➔ S)' },
                        { key: 'S_N', label: '⬆️ North (S ➔ N)' },
                        { key: 'W_E', label: '➡️ East (W ➔ E)' },
                        { key: 'E_W', label: '⬅️ West (E ➔ W)' }
                      ].map(item => (
                        <button
                          key={item.key}
                          type="button"
                          onClick={() => handleRoomPropertyChange(selectedRoomId, 'stairDirection', item.key)}
                          className={`p-1.5 text-[10px] font-mono font-bold rounded cursor-pointer transition flex items-center justify-center gap-1 ${
                            (selectedRoom.stairDirection || (selectedRoom.w > selectedRoom.d ? 'W_E' : 'N_S')) === item.key
                              ? 'bg-violet-600 text-white border border-violet-400 shadow-[0_0_10px_rgba(124,58,237,0.3)] font-bold'
                              : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-950'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* WIDTH SLIDER */}
                <div className="space-y-1.5 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-medium">Room Width (X axis):</span>
                    <span className="text-sky-400 font-bold">{selectedRoom.w}m</span>
                  </div>
                  <input 
                    type="range"
                    min="10"
                    max="120"
                    step={gridSnapping ? snapSize : 1}
                    value={selectedRoom.w}
                    onChange={(e) => handleRoomDimensionChange(selectedRoomId, 'w', parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                    <span>10m</span>
                    <span>120m</span>
                  </div>
                </div>

                {/* LENGTH/DEPTH SLIDER */}
                <div className="space-y-1.5 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-medium">Room Length (Z axis):</span>
                    <span className="text-amber-400 font-bold">{selectedRoom.d}m</span>
                  </div>
                  <input 
                    type="range"
                    min="10"
                    max="120"
                    step={gridSnapping ? snapSize : 1}
                    value={selectedRoom.d}
                    onChange={(e) => handleRoomDimensionChange(selectedRoomId, 'd', parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                    <span>10m</span>
                    <span>120m</span>
                  </div>
                </div>

                {/* HEIGHT SLIDER */}
                <div className="space-y-1.5 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-medium">Room Height:</span>
                    <span className="text-emerald-400 font-bold">{selectedRoom.h}m</span>
                  </div>
                  <input 
                    type="range"
                    min="5"
                    max="32"
                    step="1"
                    value={selectedRoom.h}
                    onChange={(e) => handleRoomDimensionChange(selectedRoomId, 'h', parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                    <span>5m</span>
                    <span>32m</span>
                  </div>
                </div>

                {/* ROOM COLOR PALETTE */}
                <div className="space-y-2 bg-slate-950/20 p-2.5 rounded border border-slate-900">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">Room Color Theme:</span>
                  <div className="grid grid-cols-5 gap-1.5 pb-1">
                    {[
                      { hex: '#3d5c3a', label: 'Forest Green' },
                      { hex: '#323247', label: 'Dark Navy' },
                      { hex: '#4a3720', label: 'Science Amber' },
                      { hex: '#453c1b', label: 'Library Gold' },
                      { hex: '#542828', label: 'Stair Brick' },
                      { hex: '#20434f', label: 'Gym Steel' },
                      { hex: '#2a261f', label: 'Cafe Charcoal' },
                      { hex: '#6d28d9', label: 'Tech Violet' },
                      { hex: '#be185d', label: 'Pink Neon' },
                      { hex: '#3b82f6', label: 'School Blue' }
                    ].map(item => (
                      <button
                        key={item.hex}
                        type="button"
                        onClick={() => handleRoomPropertyChange(selectedRoomId, 'color', item.hex)}
                        style={{ backgroundColor: item.hex }}
                        className={`size-6 rounded-full cursor-pointer transition border hover:scale-110 active:scale-[0.9] ${
                          selectedRoom.color === item.hex
                            ? 'border-white shadow-[0_0_8px_rgba(255,255,255,0.7)]'
                            : 'border-transparent'
                        }`}
                        title={item.label}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WALLS, CEILINGS, ENTRANCES DEMOLITION */}
          {activeTab === 'demolition' && (
            <div className="space-y-4 animate-fade-in text-slate-200">
              <div className="p-3 bg-cyan-950/30 border border-cyan-800/40 rounded-lg text-[10px] text-cyan-300 leading-normal font-mono select-none shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                💡 <span className="font-bold">Pro-Tip:</span> Look directly at any wall/floor in 3D and press <kbd className="px-1 bg-slate-950 rounded text-amber-500 font-bold">E</kbd> to cut a door at your crosshair, or <kbd className="px-1 bg-slate-950 rounded text-rose-400 font-bold">R</kbd> to demolish!
              </div>

              {/* STRUCTURAL WALL TOGGLES */}
              <div className="space-y-2.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block border-b border-slate-900 pb-1">🧱 Solid Walls Demolition:</span>
                <div className="grid grid-cols-2 gap-2">
                  {(['N', 'S', 'E', 'W'] as const).map(side => {
                    const sideNames = { N: 'North Wall', S: 'South Wall', E: 'East Wall', W: 'West Wall' };
                    const isRemoved = (selectedRoom.disabledWalls || []).includes(side);
                    return (
                      <button
                        key={side}
                        type="button"
                        onClick={() => {
                          const currentDisabled = selectedRoom.disabledWalls || [];
                          const updated = isRemoved 
                            ? currentDisabled.filter(s => s !== side)
                            : [...currentDisabled, side];
                          handleRoomPropertyChange(selectedRoomId, 'disabledWalls', updated);
                        }}
                        className={`p-2 text-[10px] font-mono font-bold rounded cursor-pointer transition border flex flex-col items-center gap-1 leading-tight ${
                          isRemoved
                            ? 'bg-rose-950/50 border-rose-800 text-rose-300 shadow-inner'
                            : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                        }`}
                      >
                        <span className="text-xs">{isRemoved ? '❌' : '🧱'}</span>
                        <span>{sideNames[side]}</span>
                        <span className="text-[8px] opacity-75">{isRemoved ? 'Removed' : 'Solid Wall'}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FLOOR & CEILING */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    handleRoomPropertyChange(selectedRoomId, 'disabledFloor', !selectedRoom.disabledFloor);
                  }}
                  className={`p-2 text-[10px] font-mono font-bold rounded cursor-pointer transition border flex flex-col items-center gap-1 leading-tight ${
                    selectedRoom.disabledFloor
                      ? 'bg-rose-950/50 border-rose-800 text-rose-300'
                      : 'bg-slate-950/60 hover:bg-slate-900 text-slate-300 border-slate-900'
                  }`}
                >
                  <span className="text-xs">{selectedRoom.disabledFloor ? '🕳️' : '🔘'}</span>
                  <span>{selectedRoom.disabledFloor ? 'Floor Removed' : 'Remove Floor'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleRoomPropertyChange(selectedRoomId, 'disabledCeiling', !selectedRoom.disabledCeiling);
                  }}
                  className={`p-2 text-[10px] font-mono font-bold rounded cursor-pointer transition border flex flex-col items-center gap-1 leading-tight ${
                    selectedRoom.disabledCeiling
                      ? 'bg-rose-950/50 border-rose-800 text-rose-300'
                      : 'bg-slate-950/60 hover:bg-slate-900 text-slate-300 border-slate-900'
                  }`}
                >
                  <span className="text-xs">{selectedRoom.disabledCeiling ? '🌤️' : '🛖'}</span>
                  <span>{selectedRoom.disabledCeiling ? 'Ceiling Removed' : 'Remove Ceiling'}</span>
                </button>
              </div>

              {/* INTERACTIVE PAINT BRUSH SELECTION TABS */}
              <div className="space-y-1.5 pt-1.5 border-t border-slate-900/40">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">🎨 PLAN PAINT BRUSH SELECTOR:</span>
                <div className="grid grid-cols-3 gap-1 p-0.5 bg-slate-950/85 border border-slate-900 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setDemoSubTab('walls')}
                    className={`py-1.5 text-[9px] font-mono font-bold rounded cursor-pointer transition flex flex-col items-center leading-none ${
                      demoSubTab === 'walls'
                        ? 'bg-amber-500 text-slate-950 font-black shadow'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                    }`}
                  >
                    <span>🧱</span>
                    <span className="mt-1">Walls/Doors</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDemoSubTab('floors')}
                    className={`py-1.5 text-[9px] font-mono font-bold rounded cursor-pointer transition flex flex-col items-center leading-none ${
                      demoSubTab === 'floors'
                        ? 'bg-cyan-500 text-slate-950 font-black shadow-cyan-400/20 shadow'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                    }`}
                  >
                    <span>🕳️</span>
                    <span className="mt-1">Floor Tiles</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDemoSubTab('ceilings')}
                    className={`py-1.5 text-[9px] font-mono font-bold rounded cursor-pointer transition flex flex-col items-center leading-none ${
                      demoSubTab === 'ceilings'
                        ? 'bg-violet-500 text-white font-black shadow shadow-violet-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/40'
                    }`}
                  >
                    <span>🌤️</span>
                    <span className="mt-1">Ceiling Tiles</span>
                  </button>
                </div>
              </div>

              {/* SUB-TAB CONTENTS */}
              {demoSubTab === 'walls' && (
                <div className="space-y-3 pt-1">
                  {/* VISUAL CELL TILE PAINT MAPPER/BRUSH */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">🧱 Interactive Wall Editor:</span>
                      <div className="flex bg-slate-950 rounded p-0.5 border border-slate-900 text-[8px] font-mono">
                        <button
                          type="button"
                          onClick={() => setPaintMode('carve')}
                          className={`px-2 py-0.5 rounded cursor-pointer leading-none font-bold transition ${paintMode === 'carve' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
                          title="Turns clicked/dragged tiles into walk-through doors"
                        >
                          🚪 Door Brush
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaintMode('wall')}
                          className={`px-2 py-0.5 rounded cursor-pointer leading-none font-bold transition ${paintMode === 'wall' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'}`}
                          title="Rebuilds solid walls when clicked/dragged"
                        >
                          🧱 Wall Brush
                        </button>
                      </div>
                    </div>

                    <div className="bg-slate-950/80 p-3.5 rounded-lg border border-slate-900 space-y-3">
                      {/* WALL SIDE SELECT */}
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>Wall Side View:</span>
                        <div className="flex space-x-1">
                          {(['N', 'S', 'E', 'W'] as const).map(side => (
                            <button
                              key={side}
                              type="button"
                              onClick={() => {
                                setDoorwaySide(side);
                                setDoorwayCenter(0);
                              }}
                              className={`size-5 text-[10px] font-mono font-bold rounded flex items-center justify-center cursor-pointer transition ${
                                doorwaySide === side
                                  ? 'bg-cyan-500 text-slate-950 font-black'
                                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400'
                              }`}
                            >
                              {side}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* DRAWING GRID STRIP */}
                      <div className="space-y-1.5 font-mono select-none">
                        <div className="flex justify-between text-[9px] text-slate-500 font-bold px-0.5">
                          <span>Left Edge</span>
                          <span className="text-slate-400 font-black">Drag & Paint Wall Tiles</span>
                          <span>Right Edge</span>
                        </div>

                        {/* TILE STRIP BLOCK */}
                        <div 
                          className="grid gap-1 py-1 px-1 bg-slate-900 rounded border border-slate-800 cursor-crosshair relative leading-none"
                          style={{ gridTemplateColumns: `repeat(${activeTiles.length}, minmax(0, 1fr))` }}
                        >
                          {activeTiles.map((tile, idx) => (
                            <div
                              key={tile.index}
                              onMouseDown={(e) => {
                                e.preventDefault();
                                setIsPaintingLocal(true);
                                handleTileInteraction(idx, paintMode);
                              }}
                              onMouseEnter={() => {
                                if (isPaintingLocal) {
                                  handleTileInteraction(idx, paintMode);
                                }
                              }}
                              className={`h-11 rounded border flex flex-col items-center justify-center transition-all text-[8px] font-bold cursor-crosshair select-none relative ${
                                tile.isGap
                                  ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-[inset_0_0_8px_rgba(245,158,11,0.2)] hover:bg-amber-500/30 hover:scale-105 hover:shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                                  : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-900 hover:scale-105 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                              }`}
                              title={`Tile index ${idx} at relative offset ${tile.center}m. Click/drag with selected brush tool to paint`}
                            >
                              <span className="text-[12px] h-3.5 mb-1 select-none leading-none">
                                {tile.isGap ? '🚪' : '🧱'}
                              </span>
                              <span className="text-[7px] leading-none opacity-80" style={{ fontSize: '7px' }}>
                                {tile.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        <p className="text-[8px] text-slate-500 leading-tight">
                          * Holds a total of <strong>{activeTiles.length} customizable tiles</strong> of size {activeTiles[0]?.width?.toFixed(1) || '4'}m. Drag across multiple tiles to carve compound passage doors!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 2D PLAN VIEW FOR FLOORS */}
              {demoSubTab === 'floors' && (
                <div className="space-y-3 animate-fade-in">
                  <div className="space-y-3 bg-slate-950/80 p-3.5 rounded-lg border border-slate-900 text-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">🕳️ Floor Tile Tile Carver:</span>
                      <div className="flex bg-slate-950 rounded p-0.5 border border-slate-900 text-[8px] font-mono">
                        <button
                          type="button"
                          onClick={() => setFloorBrushMode('carve')}
                          className={`px-2 py-0.5 rounded cursor-pointer leading-none font-bold transition flex items-center gap-1 ${floorBrushMode === 'carve' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'}`}
                          title="Hole Brush: Drag to remove floor tiles"
                        >
                          <span>🕳️</span>
                          <span>Hole Brush</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFloorBrushMode('restore')}
                          className={`px-2 py-0.5 rounded cursor-pointer leading-none font-bold transition flex items-center gap-1 ${floorBrushMode === 'restore' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
                          title="Pen Brush: Drag to rebuild safe floor tiles"
                        >
                          <span>🔘</span>
                          <span>Floor Pen</span>
                        </button>
                      </div>
                    </div>

                    {/* 2D FLUID CELL MATRIX */}
                    {(() => {
                      const numX = Math.round(selectedRoom.w / 4);
                      const numZ = Math.round(selectedRoom.d / 4);
                      
                      return (
                        <div className="space-y-2 select-none font-mono">
                          <div className="text-[9px] text-slate-400 bg-cyan-950/20 p-2 border border-cyan-900/30 rounded leading-tight">
                            💡 <strong>Drag/Paint across the grid</strong> to carve specific tile sectors in the floor (perfect for mezzanine drops or staircase landings).
                          </div>

                          <div 
                            className="grid gap-1 py-3 px-3 bg-slate-900 rounded border border-slate-800 cursor-crosshair relative leading-none"
                            style={{ 
                              gridTemplateColumns: `repeat(${numX}, minmax(0, 1fr))`,
                            }}
                          >
                            {Array.from({ length: numZ }).map((_, rIdx) => {
                              return (
                                <div key={rIdx} className="contents">
                                  {Array.from({ length: numX }).map((_, cIdx) => {
                                    const tileKey = `${cIdx},${rIdx}`;
                                    const isCarved = (selectedRoom.carvedFloors || []).includes(tileKey);
                                    return (
                                      <div
                                        key={tileKey}
                                        onMouseDown={(e) => {
                                          e.preventDefault();
                                          setIsPaintingLocal(true);
                                          handleFloorTilePaint(cIdx, rIdx, floorBrushMode);
                                        }}
                                        onMouseEnter={() => {
                                          if (isPaintingLocal) {
                                            handleFloorTilePaint(cIdx, rIdx, floorBrushMode);
                                          }
                                        }}
                                        className={`aspect-square rounded border flex flex-col items-center justify-center transition-all text-[7px] font-mono leading-none font-bold cursor-crosshair select-none relative p-1 ${
                                          isCarved
                                            ? 'bg-rose-950/60 border-rose-500 text-rose-300 shadow-[inset_0_0_8px_rgba(239,68,68,0.2)]'
                                            : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-cyan-400 hover:text-cyan-300'
                                        }`}
                                        title={`Floor Tile (${cIdx}, ${rIdx}) - ${isCarved ? 'DEMOLISHED' : 'SOLID'}`}
                                      >
                                        <span className="text-[12px] select-none leading-none mb-0.5">
                                          {isCarved ? '🕳️' : '🔘'}
                                        </span>
                                        <span className="opacity-70 text-[6px]">{cIdx},{rIdx}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="flex justify-between items-center text-[8px] text-slate-500 px-0.5 pt-1">
                            <span>Grid Count: {numX}x{numZ} ({numX * numZ} cells)</span>
                            <button
                              type="button"
                              onClick={() => {
                                handleRoomPropertyChange(selectedRoomId, 'carvedFloors', []);
                              }}
                              className="text-rose-400 hover:text-rose-300 font-bold transition leading-none uppercase text-[8px] cursor-pointer"
                            >
                              Reset Floor Grid ↺
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* 2D PLAN VIEW FOR CEILINGS */}
              {demoSubTab === 'ceilings' && (
                <div className="space-y-3 animate-fade-in">
                  <div className="space-y-3 bg-slate-950/80 p-3.5 rounded-lg border border-slate-900 text-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">🌤️ Ceiling Tile Tile Carver:</span>
                      <div className="flex bg-slate-950 rounded p-0.5 border border-slate-900 text-[8px] font-mono">
                        <button
                          type="button"
                          onClick={() => setFloorBrushMode('carve')}
                          className={`px-2 py-0.5 rounded cursor-pointer leading-none font-bold transition flex items-center gap-1 ${floorBrushMode === 'carve' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-white'}`}
                          title="Hole Brush: Drag to remove ceiling tiles"
                        >
                          <span>🌤️</span>
                          <span>Hole Brush</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFloorBrushMode('restore')}
                          className={`px-2 py-0.5 rounded cursor-pointer leading-none font-bold transition flex items-center gap-1 ${floorBrushMode === 'restore' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
                          title="Pen Brush: Drag to rebuild ceiling tiles"
                        >
                          <span>🛖</span>
                          <span>Ceiling Pen</span>
                        </button>
                      </div>
                    </div>

                    {/* 2D FLUID CELL MATRIX */}
                    {(() => {
                      const numX = Math.round(selectedRoom.w / 4);
                      const numZ = Math.round(selectedRoom.d / 4);
                      
                      return (
                        <div className="space-y-2 select-none font-mono">
                          <div className="text-[9px] text-slate-400 bg-cyan-950/20 p-2 border border-cyan-900/30 rounded leading-tight">
                            💡 <strong>Drag/Paint across the grid</strong> to carve specific structural tiles in the ceiling (perfect for open skylights, shafts, or stair openings).
                          </div>

                          <div 
                            className="grid gap-1 py-3 px-3 bg-slate-900 rounded border border-slate-800 cursor-crosshair relative leading-none"
                            style={{ 
                              gridTemplateColumns: `repeat(${numX}, minmax(0, 1fr))`,
                            }}
                          >
                            {Array.from({ length: numZ }).map((_, rIdx) => {
                              return (
                                <div key={rIdx} className="contents">
                                  {Array.from({ length: numX }).map((_, cIdx) => {
                                    const tileKey = `${cIdx},${rIdx}`;
                                    const isCarved = (selectedRoom.carvedCeilings || []).includes(tileKey);
                                    return (
                                      <div
                                        key={tileKey}
                                        onMouseDown={(e) => {
                                          e.preventDefault();
                                          setIsPaintingLocal(true);
                                          handleCeilingTilePaint(cIdx, rIdx, floorBrushMode);
                                        }}
                                        onMouseEnter={() => {
                                          if (isPaintingLocal) {
                                            handleCeilingTilePaint(cIdx, rIdx, floorBrushMode);
                                          }
                                        }}
                                        className={`aspect-square rounded border flex flex-col items-center justify-center transition-all text-[7px] font-mono leading-none font-bold cursor-crosshair select-none relative p-1 ${
                                          isCarved
                                            ? 'bg-rose-950/60 border-rose-500 text-rose-300 shadow-[inset_0_0_8px_rgba(239,68,68,0.2)]'
                                            : 'bg-slate-950 border-slate-800 text-slate-500 hover:border-cyan-400 hover:text-cyan-300'
                                        }`}
                                        title={`Ceiling Tile (${cIdx}, ${rIdx}) - ${isCarved ? 'DEMOLISHED' : 'SOLID'}`}
                                      >
                                        <span className="text-[12px] select-none leading-none mb-0.5">
                                          {isCarved ? '🌤️' : '🛖'}
                                        </span>
                                        <span className="opacity-70 text-[6px]">{cIdx},{rIdx}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                          
                          <div className="flex justify-between items-center text-[8px] text-slate-500 px-0.5 pt-1">
                            <span>Grid Count: {numX}x{numZ} ({numX * numZ} cells)</span>
                            <button
                              type="button"
                              onClick={() => {
                                handleRoomPropertyChange(selectedRoomId, 'carvedCeilings', []);
                              }}
                              className="text-rose-400 hover:text-rose-300 font-bold transition leading-none uppercase text-[8px] cursor-pointer"
                            >
                              Reset Ceiling Grid ↺
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* ALTERNATIVE SLIDER-BASED PRECISE DOORS */}
              <div className="space-y-3 pt-3 border-t border-slate-900/60">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block">🚪 Quick Slider Carver:</span>
                
                <div className="bg-slate-950/20 p-3 rounded-lg border border-slate-900 space-y-2.5">
                  {/* CENTER OFFSET */}
                  {(() => {
                    const maxRange = doorwaySide === 'N' || doorwaySide === 'S' ? selectedRoom.w / 2 : selectedRoom.d / 2;
                    const bound = Math.max(2, Math.floor(maxRange - 2));
                    return (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-slate-400">Position Center:</span>
                          <span className="text-amber-500 font-bold">{doorwayCenter > 0 ? `+${doorwayCenter}` : doorwayCenter}m</span>
                        </div>
                        <input
                          type="range"
                          min={-bound}
                          max={bound}
                          step="1"
                          value={doorwayCenter}
                          onChange={(e) => setDoorwayCenter(parseInt(e.target.value) || 0)}
                          className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
                        />
                      </div>
                    );
                  })()}

                  {/* ARCHWAY WIDTH */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">Carver Width:</span>
                      <span className="text-amber-400 font-bold">{doorwayWidth}m</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="16"
                      step="1"
                      value={doorwayWidth}
                      onChange={(e) => setDoorwayWidth(parseInt(e.target.value) || 2)}
                      className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
                    />
                  </div>

                  {/* CREATE BUTTON */}
                  <button
                    type="button"
                    onClick={() => {
                      handleAddDoorway(selectedRoomId, doorwaySide, doorwayCenter, doorwayWidth);
                      setDoorwayCenter(0);
                    }}
                    className="cursor-pointer w-full py-1.5 bg-amber-600 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold font-mono text-[9px] uppercase rounded transition flex items-center justify-center gap-1 shadow-md"
                  >
                    <Plus className="size-3" />
                    <span>Cut Doorway at Slider Offset</span>
                  </button>
                </div>
              </div>

              {/* LIST OF CURRENT GAPS */}
              <div className="space-y-2 pt-1 border-t border-slate-900/60">
                <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">Active Doorway Openings:</span>
                {(() => {
                  const gaps = roomGaps[selectedRoomId] || [];
                  if (gaps.length === 0) {
                    return (
                      <div className="text-[10px] font-mono text-slate-500 italic bg-slate-950/15 p-2 rounded text-center border border-dashed border-slate-900">
                        No door openings cut. Wall is fully solid.
                      </div>
                    );
                  }
                  return (
                    <div className="max-h-36 overflow-y-auto space-y-1 bg-slate-950/20 p-1.5 rounded border border-slate-900">
                      {gaps.map((g, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-slate-900/60 p-1.5 px-2 rounded border border-slate-950 text-[10px] font-mono text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <span className="text-amber-500 font-bold uppercase">Side {g.side}</span>
                            <span className="text-slate-555">·</span>
                            <span>center: <strong className="text-slate-100">{g.center}m</strong></span>
                            <span className="text-slate-555">·</span>
                            <span>width: <strong className="text-slate-100">{g.width}m</strong></span>
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveDoorway(selectedRoomId, idx)}
                            className="p-1 px-1.5 bg-rose-950/60 hover:bg-rose-900 border border-rose-900 text-rose-200 hover:text-white rounded text-[8px] cursor-pointer transition font-mono font-bold"
                          >
                            Fill in
                          </button>
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* TAB 3: TOOLS & SPAWNS */}
          {activeTab === 'tools' && (
            <div className="space-y-4 animate-fade-in">
              
              {/* NOCLIP ENGINE */}
              <div className="bg-slate-950/60 p-3 rounded-lg border border-indigo-950/50 space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400">Movement Engine:</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider ${noclip ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-slate-900 text-slate-500'}`}>
                    {noclip ? 'Noclip Flight Active (V)' : 'Grounded (V)'}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setNoclip(p => !p)}
                  className={`w-full py-2 px-3 rounded text-xs font-mono font-bold cursor-pointer transition flex items-center justify-center gap-1.5 border leading-none ${
                    noclip 
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-[0_0_12px_rgba(109,40,217,0.35)]' 
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:text-white text-slate-300'
                  }`}
                  title="When active, you ignore gravity and pass through walls. Use W,A,S,D to fly, Space to climb, and Shift to dive."
                >
                  <span>🚀 Toggle Flight Mode (F6 / V)</span>
                </button>
              </div>

              {/* GLOBAL GRID SNAPPING OPTIONS */}
              <div className="bg-slate-950/60 p-3.5 rounded-lg border border-slate-900 space-y-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5">
                    <Grid className="size-3.5 text-cyan-400" />
                    <span>Enforce Grid Snapping:</span>
                  </span>
                  
                  <label className="relative inline-flex items-center cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      className="sr-only peer"
                      checked={gridSnapping}
                      onChange={(e) => setGridSnapping(e.target.checked)}
                    />
                    <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-cyan-600 peer-checked:after:bg-cyan-100"></div>
                  </label>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-slate-500 uppercase font-bold block">Grid Step Size Select:</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[1, 2, 4].map((size) => (
                      <button
                        key={size}
                        type="button"
                        disabled={!gridSnapping}
                        onClick={() => setSnapSize(size)}
                        className={`py-1.5 px-2 rounded font-mono text-xs font-bold border transition duration-150 flex flex-col items-center justify-center cursor-pointer ${
                          !gridSnapping 
                            ? 'bg-slate-950/30 border-slate-950 text-slate-700 cursor-not-allowed'
                            : snapSize === size
                              ? 'bg-cyan-600/20 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.15)]'
                              : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                        }`}
                        title={`Align coordinates and dimensions to ${size} meter steps`}
                      >
                        <span className="text-[11px] leading-none">{size}m</span>
                        <span className="text-[8px] opacity-65 font-normal mt-0.5">steps</span>
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-[8px] text-slate-500 leading-normal font-mono">
                  * Dynamic grid snapping forces room centers and dimensions to align seamlessly. Editing coordinates and spawning custom classrooms will snap automatically to the selected {snapSize}m step value.
                </p>
              </div>

              {/* SPAWN CUSTOM CLASSROOM */}
              <div className="space-y-2 bg-slate-950/10 border border-slate-900/60 p-3 rounded-lg">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block pb-1 border-b border-slate-950">🏫 Spawn Custom Classroom Zone:</span>
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleAddCustomRoom}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 font-extrabold font-mono text-[10px] uppercase p-2.5 rounded cursor-pointer text-white flex items-center justify-center gap-1 transition"
                  >
                    <Plus className="size-3.5" />
                    <span>Spawn Room</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDeleteSelectedRoom}
                    disabled={['starter', 'hallway', 'science_lab', 'library', 'stairwell', 'gym', 'cafeteria', 'courtyard', 'underground_tunnel', 'the_vault', 'upper_hallway', 'principal_office', 'upper_hallway_2', 'security_room', 'upper_hallway_north', 'gym_north_hallway', 'nurses_office', 'nurses_office_backroom', 'stairwell_2', 'lower_hallway_south', 'main_office'].includes(selectedRoomId)}
                    className={`flex-1 font-extrabold font-mono text-[10px] uppercase p-2.5 rounded flex items-center justify-center gap-1 transition ${
                      ['starter', 'hallway', 'science_lab', 'library', 'stairwell', 'gym', 'cafeteria', 'courtyard', 'underground_tunnel', 'the_vault', 'upper_hallway', 'principal_office', 'upper_hallway_2', 'security_room', 'upper_hallway_north', 'gym_north_hallway', 'nurses_office', 'nurses_office_backroom', 'stairwell_2', 'lower_hallway_south', 'main_office'].includes(selectedRoomId)
                        ? 'bg-slate-950/40 border border-slate-900/80 text-slate-600 cursor-not-allowed'
                        : 'bg-rose-950/60 border border-rose-900 hover:bg-rose-900 text-rose-200 cursor-pointer'
                    }`}
                  >
                    <Trash2 className="size-3.5" />
                    <span>Delete Selected</span>
                  </button>
                </div>
              </div>

              {/* TELEPORT LIST */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block border-b border-slate-900 pb-1">
                  Blueprint Quick Teleports:
                </span>
                <div className="max-h-56 overflow-y-auto space-y-1 bg-slate-950/40 p-1.5 rounded border border-slate-900">
                  {rooms.map(r => {
                    const isCurrent = currentRoomName === r.name;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => teleportToRoom(r.id)}
                        className={`w-full p-2 text-left rounded font-mono text-[10px] uppercase flex justify-between items-center transition cursor-pointer leading-none ${
                          isCurrent 
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]' 
                            : 'bg-slate-900/65 hover:bg-slate-800/80 border border-slate-950 text-slate-300 hover:text-white'
                        }`}
                      >
                        <span className="truncate">{r.name}</span>
                        <span className={`text-[8px] font-bold tracking-tight rounded px-1.5 py-0.5 ${
                          isCurrent ? 'bg-slate-950/80 text-cyan-400' : 'bg-slate-950 text-slate-500'
                        }`}>
                          {r.w}×{r.d}m
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR FOOTER METRICS */}
        <footer className="p-3 bg-slate-950 border-t border-slate-900 text-[9px] font-mono flex items-center justify-between shrink-0 text-slate-500">
          <span>Walk Mode: Physics Active</span>
          <span className="text-[#00f0ff] uppercase font-bold leading-none">GRID SYNC ON</span>
        </footer>
      </aside>

      {/* OVERLAY PANEL 1: TELEPORT LIST QUICK MENU MODAL (F5) */}
      {showTeleportList && (
        <div className="absolute inset-0 bg-slate-950/92 backdrop-blur-md z-40 flex items-center justify-center p-6">
          <div className="w-[480px] bg-slate-900 border border-slate-800/80 rounded-xl shadow-2xl p-6 relative max-h-[85vh] flex flex-col font-mono text-xs">
            <button 
              onClick={() => setShowTeleportList(false)}
              className="absolute top-4 right-4 p-1 rounded-md bg-slate-950 text-slate-400 hover:text-white transition"
            >
              <X className="size-4" />
            </button>

            <div className="mb-4 border-b border-slate-800 pb-3">
              <h2 className="text-sm font-bold text-[#00ffcc] uppercase tracking-wider flex items-center gap-2">
                <Compass className="size-4 animate-spin-slow" />
                <span>Map Teleporter Portal (F5)</span>
              </h2>
              <p className="text-[10px] text-slate-400 mt-1 uppercase">Click coordinates to execute warp</p>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {rooms.map(r => {
                const isCurrent = currentRoomName === r.name;
                return (
                  <div 
                    key={r.id}
                    onClick={() => {
                      teleportToRoom(r.id);
                      setShowTeleportList(false);
                    }}
                    className={`p-3 rounded-lg border cursor-pointer hover:border-amber-400 hover:bg-slate-950/50 flex justify-between items-center transition ${
                      isCurrent ? 'bg-amber-400/10 border-amber-500/50 text-amber-400' : 'bg-slate-950 border-slate-900 text-slate-200'
                    }`}
                  >
                    <div>
                      <h4 className="font-bold text-[11px] uppercase">{r.name}</h4>
                      <p className="text-[9px] text-slate-400 mt-0.5">Elevator Y: {r.floorY === 11 ? 'LEVEL 2 (11.0m)' : 'LEVEL 1 (0.0m)'}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] bg-slate-900 border border-slate-800 px-2 py-1 rounded text-[#00ffcc] font-bold">
                        Warp: X:{r.cx}, Z:{r.cz}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-500 text-center uppercase tracking-wider mt-3">
              Press F5 again to close this portal overrides
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY PANEL 2: MAP VIEW 2D BLUEPRINT MODAL (M) */}
      {showMap && (
        <div className="absolute inset-0 bg-slate-950/94 backdrop-blur-md z-40 flex items-center justify-center p-6">
          <div className="w-[640px] bg-slate-900 border border-slate-800/80 rounded-xl shadow-2xl p-6 relative max-h-[85vh] flex flex-col font-mono text-xs">
            <button 
              onClick={() => setShowMap(false)}
              className="absolute top-4 right-4 p-1 rounded-md bg-slate-950 text-slate-400 hover:text-white transition"
            >
              <X className="size-4" />
            </button>

            <div className="mb-3 border-b border-slate-800 pb-2.5 shrink-0">
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <MapIcon className="size-4" />
                <span>Top-Down Layout Blueprint (M)</span>
              </h2>
              <p className="text-[10px] text-slate-400 mt-1 uppercase">2D schematics of school classrooms dimensions and layout</p>
            </div>

            {/* SVG CANVAS BLUEPRINT CONTAINER */}
            <div className="flex-1 bg-slate-950 border border-slate-950 rounded-lg p-3 overflow-hidden flex items-center justify-center relative shadow-inner">
              <svg 
                viewBox={`${mapExtents.minX} ${mapExtents.minZ} ${mapExtents.maxX - mapExtents.minX} ${mapExtents.maxZ - mapExtents.minZ}`}
                className="w-full h-full max-h-[460px] max-w-[540px]"
              >
                {/* SVG GRID HELPER BEHIND ROOMS */}
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#101827" strokeWidth="0.8"/>
                </pattern>
                <rect 
                  x={mapExtents.minX} 
                  y={mapExtents.minZ} 
                  width={mapExtents.maxX - mapExtents.minX} 
                  height={mapExtents.maxZ - mapExtents.minZ} 
                  fill="url(#grid)" 
                />

                {/* Draw standard Rooms on map */}
                {rooms.map(r => {
                  const isCurrentRoom = currentRoomName === r.name;
                  const isEditingRoom = selectedRoomId === r.id;
                  const strokeCol = isEditingRoom ? '#00f0ff' : isCurrentRoom ? '#f59e0b' : '#334155';
                  return (
                    <g key={r.id}>
                      <rect
                        x={r.cx - r.w / 2}
                        y={r.cz - r.d / 2}
                        width={r.w}
                        height={r.d}
                        fill={r.color}
                        fillOpacity={isCurrentRoom ? 0.45 : isEditingRoom ? 0.35 : 0.22}
                        stroke={strokeCol}
                        strokeWidth="1.5"
                        strokeDasharray={r.floorY === 11 ? '4 2' : 'none'}
                        rx="1"
                      />
                      
                      {/* Room labels on SVG */}
                      <text
                        x={r.cx}
                        y={r.cz - 1.5}
                        fill={isCurrentRoom ? '#fbbf24' : isEditingRoom ? '#22d3ee' : '#94a3b8'}
                        fontSize="3.2"
                        fontWeight="bold"
                        fontFamily="monospace"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        {r.name.split(' ')[0]}
                      </text>
                      <text
                        x={r.cx}
                        y={r.cz + 2.5}
                        fill="#64748b"
                        fontSize="2.2"
                        fontFamily="monospace"
                        textAnchor="middle"
                        dominantBaseline="central"
                      >
                        {r.w.toFixed(0)}m×{r.d.toFixed(0)}m
                      </text>
                    </g>
                  );
                })}

                {/* Draw doorway gaps visually */}
                {rooms.map(r => {
                  const gaps = roomGaps[r.id] || [];
                  return gaps.map((g, idx) => {
                    const gx = g.side === 'E' ? (r.cx + r.w / 2) : g.side === 'W' ? (r.cx - r.w / 2) : (r.cx + g.center);
                    const gz = g.side === 'N' ? (r.cz + r.d / 2) : g.side === 'S' ? (r.cz - r.d / 2) : (r.cz + g.center);
                    return (
                      <circle
                        key={idx}
                        cx={gx}
                        cy={gz}
                        r={g.width / 2.5}
                        fill="#111827"
                        stroke="#00ffff"
                        strokeWidth="0.5"
                        strokeOpacity="0.8"
                      />
                    );
                  });
                })}

                {/* Draw Player dot location arrow on map */}
                <g transform={`translate(${playerCoords.x}, ${playerCoords.z})`}>
                  <circle cx="0" cy="0" r="3" fill="#ef4444" className="animate-ping" style={{ transformOrigin: 'center' }} />
                  <circle cx="0" cy="0" r="2.2" fill="#ef4444" stroke="#ffffff" strokeWidth="0.5" />
                  
                  {/* Facing camera direction pointer arrow */}
                  <g transform={`rotate(${((yaw.current * 180) / Math.PI) + 180})`}>
                    <line x1="0" y1="0" x2="0" y2="5.5" stroke="#ffffff" strokeWidth="0.95" strokeLinecap="round" />
                    <polygon points="-1.5,5 0,7.5 1.5,5" fill="#ffffff" />
                  </g>
                </g>
              </svg>

              {/* Floor Level Legend inside overlay */}
              <div className="absolute bottom-4 right-4 bg-slate-950/90 px-3 py-1.5 rounded-lg border border-slate-800 text-[10px] space-y-1 block shrink-0 select-none">
                <div className="flex items-center space-x-2">
                  <span className="size-2 bg-[#ef4444] rounded-full inline-block"></span>
                  <span className="text-slate-300 font-bold">Player spawn</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2.5 border border-[#334155] border-dashed inline-block bg-slate-800/20"></div>
                  <span className="text-slate-400">Floor 2 (Gym level)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-2.5 border border-[#334155] inline-block bg-slate-800/10"></div>
                  <span className="text-slate-400">Floor 1 Rooms</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-500 text-center uppercase tracking-wider shrink-0 mt-3">
              Press M again to escape blueprint and return to walk mode
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
