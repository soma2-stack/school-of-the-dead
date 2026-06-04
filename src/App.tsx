import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { getDoorManager, initializeDoors, DoorEventType } from './utils/doors';
import { getPointsManager } from './utils/points';
import { createDoorRenderer } from './utils/DoorRenderer';
import { getRoomSealValidator, ValidationIssue } from './utils/MapValidator';
import { PointsDisplay } from './utils/PointsDisplay';
import { RuntimeDoor } from './types';
import { getFloorAuditor, getDebugFloorData, FloorIssue, renderFloorDebug } from './utils/FloorIntegrityAudit';
import { getConnectivityAuditor, ConnectivityIssue, DebugVisualizationData as ConnectivityDebugData } from './utils/MapConnectivityAudit';
import { createGeometryInspector, GeometryInspector } from './utils/GeometryInspector';
import DebugOverlay, { DebugData } from './components/DebugOverlay';

// ============================================================================
// ROOMS DATA SETUP (Standard Westbrook High Layout)
// ============================================================================
interface Room {
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

const PROCEDURAL_TEXTURES_CACHE: Record<string, THREE.CanvasTexture> = {};

const getProceduralTexture = (type: 'wood_floor' | 'ceiling_tiles' | 'wall_tiles'): THREE.CanvasTexture => {
  if (PROCEDURAL_TEXTURES_CACHE[type]) return PROCEDURAL_TEXTURES_CACHE[type];
  const canvas = document.createElement('canvas');
  canvas.width = 512; canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  if (type === 'wood_floor') {
    ctx.fillStyle = '#452c1e'; ctx.fillRect(0, 0, 512, 512);
    const plankHeight = 512 / 8;
    for (let i = 0; i < 8; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#4e3425' : '#3c2518';
      if (i % 3 === 0) ctx.fillStyle = '#432a1d';
      ctx.fillRect(0, i * plankHeight, 512, plankHeight);
      ctx.strokeStyle = '#29170e'; ctx.lineWidth = 1;
      for (let j = 0; j < 5; j++) {
        ctx.beginPath();
        ctx.moveTo(0, i * plankHeight + Math.random() * plankHeight);
        ctx.quadraticCurveTo(256, i * plankHeight + Math.random() * plankHeight * 2 - plankHeight / 2, 512, i * plankHeight + Math.random() * plankHeight);
        ctx.stroke();
      }
      const joints = i % 2 === 0 ? [150, 380] : [220, 440];
      ctx.fillStyle = '#1e110a';
      joints.forEach(x => { ctx.fillRect(x, i * plankHeight, 2, plankHeight); });
      ctx.strokeStyle = '#1a0d06'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, i * plankHeight); ctx.lineTo(512, i * plankHeight); ctx.stroke();
    }
  } else if (type === 'ceiling_tiles') {
    ctx.fillStyle = '#dcd5ca'; ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 600; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)';
      ctx.fillRect(Math.random() * 512, Math.random() * 512, 2, 2);
    }
    const tileSize = 256;
    for (let r = 0; r < 2; r++) {
      for (let c = 0; c < 2; c++) {
        const x = c * tileSize; const y = r * tileSize;
        ctx.fillStyle = 'rgba(115, 87, 59, 0.15)'; ctx.strokeStyle = 'rgba(92, 70, 48, 0.35)'; ctx.lineWidth = 1.5;
        for (let s = 0; s < 4; s++) {
          const cx2 = x + 30 + Math.random() * (tileSize - 60); const cy2 = y + 30 + Math.random() * (tileSize - 60); const radius = 25 + Math.random() * 45;
          ctx.beginPath(); ctx.arc(cx2, cy2, radius, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(cx2, cy2, radius + 4, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.fillStyle = 'rgba(40, 45, 35, 0.65)';
        for (let m = 0; m < 35; m++) { ctx.fillRect(x + Math.random() * tileSize, y + Math.random() * tileSize, 1.5, 1.5); }
        ctx.strokeStyle = 'rgba(50,50,50,0.25)'; ctx.lineWidth = 1;
        ctx.beginPath(); let px = x + 20; let py = y + 20; ctx.moveTo(px, py);
        for (let k = 0; k < 10; k++) { px += (Math.random() - 0.5) * 15; py += Math.random() * 20; ctx.lineTo(px, py); }
        ctx.stroke();
      }
    }
    ctx.strokeStyle = '#2d2e33'; ctx.lineWidth = 6; ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(512, 0); ctx.moveTo(0, 256); ctx.lineTo(512, 256); ctx.moveTo(0, 512); ctx.lineTo(512, 512);
    ctx.moveTo(0, 0); ctx.lineTo(0, 512); ctx.moveTo(256, 0); ctx.lineTo(256, 512); ctx.moveTo(512, 0); ctx.lineTo(512, 512); ctx.stroke();
    ctx.fillStyle = 'rgba(92, 49, 14, 0.55)';
    for (let gridIdx = 0; gridIdx < 20; gridIdx++) {
      ctx.fillRect(Math.random() * 512, 253 + Math.random() * 6, Math.random() * 25, Math.random() * 3);
      ctx.fillRect(253 + Math.random() * 6, Math.random() * 512, Math.random() * 3, Math.random() * 25);
    }
  } else if (type === 'wall_tiles') {
    ctx.fillStyle = '#6d8a6b'; ctx.fillRect(0, 0, 512, 512);
    const numTiles = 8; const tSize = 64;
    for (let r = 0; r < numTiles; r++) {
      for (let c = 0; c < numTiles; c++) {
        const tx = c * tSize; const ty = r * tSize;
        ctx.fillStyle = (r + c) % 2 === 0 ? '#728e6f' : '#688566';
        if ((r * c) % 5 === 0) ctx.fillStyle = '#5c7859';
        ctx.fillRect(tx + 1, ty + 1, tSize - 2, tSize - 2);
        ctx.strokeStyle = 'rgba(255,255,255,0.06)'; ctx.strokeRect(tx + 2, ty + 2, tSize - 4, tSize - 4);
        if (Math.random() < 0.15) {
          ctx.strokeStyle = 'rgba(20, 25, 20, 0.55)'; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(tx + Math.random() * tSize, ty + Math.random() * tSize); ctx.lineTo(tx + Math.random() * tSize, ty + Math.random() * tSize); ctx.stroke();
        }
        if ((r === 2 && c === 4) || (r === 6 && c === 1) || (r === 4 && c === 6)) {
          ctx.fillStyle = '#222520'; ctx.fillRect(tx + 2, ty + 2, tSize - 4, tSize - 4);
          ctx.fillStyle = '#444c41';
          for (let b = 0; b < 10; b++) { ctx.fillRect(tx + Math.random() * tSize, ty + Math.random() * tSize, Math.random() * 6, Math.random() * 6); }
        }
      }
    }
    ctx.strokeStyle = '#252924'; ctx.lineWidth = 2; ctx.beginPath();
    for (let i = 0; i <= numTiles; i++) { ctx.moveTo(0, i * tSize); ctx.lineTo(512, i * tSize); ctx.moveTo(i * tSize, 0); ctx.lineTo(i * tSize, 512); }
    ctx.stroke();
    for (let dripIdx = 0; dripIdx < 12; dripIdx++) {
      const dx = Math.random() * 512; const dy = Math.random() * 80; const dH = 150 + Math.random() * 250;
      const grad = ctx.createLinearGradient(dx, dy, dx, dy + dH);
      grad.addColorStop(0, 'rgba(21, 26, 19, 0.55)'); grad.addColorStop(0.3, 'rgba(15, 20, 14, 0.35)'); grad.addColorStop(1, 'rgba(15, 20, 14, 0.0)');
      ctx.fillStyle = grad; ctx.fillRect(dx - 3, dy, 6, dH);
    }
    ctx.strokeStyle = 'rgba(224, 215, 200, 0.35)'; ctx.lineWidth = 1.5; ctx.font = '22px Arial';
    ctx.strokeText("WASH ME", 80, 200); ctx.strokeText("CLASS OF '95", 280, 390);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping; texture.wrapT = THREE.RepeatWrapping;
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
  } else {
    const zMin = r.cz - r.d / 2;
    const t = Math.max(0, Math.min(1, (pz - zMin) / r.d));
    return r.floorY + t * climb;
  }
};

const INITIAL_ROOMS: Room[] = [
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

const ROOM_GAPS: Record<string, Array<{ side: 'N' | 'S' | 'E' | 'W'; center: number; width: number }>> = {
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

// Generate DOORS from ROOM_GAPS - each gap becomes a purchasable door
const DOORS_CONFIG: Array<{ roomId: string; side: 'N' | 'S' | 'E' | 'W'; gapIndex: number; cost: number }> = [
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

const MAP_PROPS = [
  { id: 'mystery_box_spawn', type: 'interactable', roomId: 'starter', cx: 15, cz: -25, w: 4, d: 2, h: 3, color: '#8b5a2b' },
  { id: 'main_power_switch', type: 'interactable', roomId: 'security_room', cx: 54, cz: 51.5, w: 4, d: 1, h: 4, color: '#8b0000' },
];

export const MAP_CONFIG = {
  wallThickness: 0.4,
  ceilingThickness: 0.15,
  doorHeight: 7.5,
  floorThickness: 0.2,
  doorDepth: 0.3,
};

const doorHt = MAP_CONFIG.doorHeight;

const PLAYER_EYE_HEIGHT = 4.5;
const PLAYER_RADIUS = 1.0;

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const yaw = useRef<number>(Math.PI);
  const pitch = useRef<number>(0);
  const playerPos = useRef<THREE.Vector3>(new THREE.Vector3(0, PLAYER_EYE_HEIGHT, -30));
  const velocityY = useRef<number>(0);
  const keysPressed = useRef<Record<string, boolean>>({});
  const isGrounded = useRef<boolean>(true);
  const noclipRef = useRef<boolean>(false);
  const [isPointerLocked, setIsPointerLocked] = useState<boolean>(false);
  const [promptText, setPromptText] = useState<string>('');
  const [canInteract, setCanInteract] = useState<boolean>(false);
  
  // Map Validation Mode state
  const [validationModeEnabled, setValidationModeEnabled] = useState<boolean>(false);
  const [validationIssues, setValidationIssues] = useState<ValidationIssue[]>([]);
  const [currentIssueIndex, setCurrentIssueIndex] = useState<number>(-1);
  const mapValidatorRef = useRef(getRoomSealValidator());
  
  // Floor Debug Mode state
  const [floorDebugMode, setFloorDebugMode] = useState<boolean>(false);
  const [floorAuditIssues, setFloorAuditIssues] = useState<FloorIssue[]>([]);
  const [currentFloorIssueIndex, setCurrentFloorIssueIndex] = useState<number>(-1);
  const floorAuditorRef = useRef(getFloorAuditor());
  
  // Map Connectivity Audit state
  const [connectivityDebugMode, setConnectivityDebugMode] = useState<boolean>(false);
  const [connectivityIssues, setConnectivityIssues] = useState<ConnectivityIssue[]>([]);
  const [currentConnectivityIssueIndex, setCurrentConnectivityIssueIndex] = useState<number>(-1);
  const connectivityAuditorRef = useRef(getConnectivityAuditor());
  const [connectivityReport, setConnectivityReport] = useState<any>(null);
  
  // Geometry Inspector state
  const [geometryInspectorEnabled, setGeometryInspectorEnabled] = useState<boolean>(false);
  const geometryInspectorRef = useRef<GeometryInspector | null>(null);
  const [inspectedMeshInfo, setInspectedMeshInfo] = useState<{ meshName: string; roomId?: string; wallId?: string; floorId?: string } | null>(null);
  
  // Debug wireframe ref for DEBUG_FLOORS test
  const debugWireframeRef = useRef<THREE.LineSegments | null>(null);
  
  // Not Enough Points feedback state
  const [showNotEnoughPoints, setShowNotEnoughPoints] = useState<boolean>(false);
  
  // Debug overlay state
  const [debugOverlayOpen, setDebugOverlayOpen] = useState<boolean>(false);
  const [debugLightingEnabled, setDebugLightingEnabled] = useState<boolean>(false);
  const [debugLightingBrightness, setDebugLightingBrightness] = useState<number>(3.0);
  const [fps, setFps] = useState<number>(60);
  const [meshCount, setMeshCount] = useState<number>(0);
  const [drawCalls, setDrawCalls] = useState<number>(0);
  const [currentRoomName, setCurrentRoomName] = useState<string>('');
  const [roundState, setRoundState] = useState<{ round: number; zombiesAlive: number; spawnStatus: string }>({
    round: 1,
    zombiesAlive: 0,
    spawnStatus: 'idle'
  });

  // Debug Lighting toggle function (defined at component scope for JSX access)
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const originalAmbientIntensityRef = useRef<number>(1.0);
  
  const toggleDebugLighting = () => {
    const enabled = !debugLightingEnabled;
    setDebugLightingEnabled(enabled);
    if (ambientLightRef.current) {
      if (enabled) {
        originalAmbientIntensityRef.current = ambientLightRef.current.intensity;
        ambientLightRef.current.intensity = debugLightingBrightness;
        console.log('[DEBUG LIGHTING] ON - Brightness:', debugLightingBrightness);
      } else {
        ambientLightRef.current.intensity = originalAmbientIntensityRef.current;
        console.log('[DEBUG LIGHTING] OFF');
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const mount = mountRef.current;
    if (!canvas || !mount) return;

    // Initialize doors system
    initializeDoors();
    
    // Set up door event listener for purchase attempts
    const doorManager = getDoorManager();
    const unsubscribePurchaseAttempt = doorManager.on('purchaseAttempt', (data) => {
      console.log('[App] Door purchase attempt failed:', data.doorName);
      setShowNotEnoughPoints(true);
      setTimeout(() => setShowNotEnoughPoints(false), 2000);
    });
    
    // Cleanup on unmount
    return () => {
      unsubscribePurchaseAttempt();
    };
  }, []);

  // Expose global command for running connectivity audit from console
  useEffect(() => {
    (window as any).runConnectivityAudit = () => {
      const auditor = connectivityAuditorRef.current;
      auditor.initialize(INITIAL_ROOMS, ROOM_GAPS, 'starter');
      const report = auditor.runAudit();
      const issues = auditor.getIssues();
      setConnectivityIssues(issues);
      setConnectivityReport(report);
      setConnectivityDebugMode(true);
      setCurrentConnectivityIssueIndex(-1);
      
      console.log('=== MAP CONNECTIVITY AUDIT REPORT ===');
      console.log(`Total Rooms Scanned: ${INITIAL_ROOMS.length}`);
      console.log(`Total Connected Rooms: ${report.totalConnectedRooms}`);
      console.log(`Disconnected Rooms: ${report.disconnectedRooms.length}`);
      if (report.disconnectedRooms.length > 0) {
        report.disconnectedRooms.forEach(id => console.log(`  - ${id}`));
      }
      console.log(`Void Exposures: ${report.voidExposures.length}`);
      console.log(`Missing Walls: ${report.missingWalls.length}`);
      console.log(`Missing Ceilings: ${report.missingCeilings.length}`);
      console.log(`Navigation Breaks: ${report.navigationBreaks.length}`);
      console.log(`Total Issues: ${report.totalIssues}`);
      console.log(`Scan Duration: ${report.scanDurationMs.toFixed(2)}ms`);
      console.log('=====================================\n');
      
      // Print detailed issue reports
      if (issues.length > 0) {
        console.log('=== DETAILED ISSUE REPORTS ===\n');
        
        issues.forEach((issue, idx) => {
          console.log(`--- Issue #${idx + 1} ---`);
          console.log(`[${issue.type.toUpperCase()}]`);
          console.log(`Room: ${issue.roomName}`);
          console.log(`Location: [${issue.location[0].toFixed(1)}, ${issue.location[1].toFixed(1)}, ${issue.location[2].toFixed(1)}]`);
          console.log(`Severity: ${issue.severity.toUpperCase()}`);
          console.log(`Description: ${issue.description}`);
          console.log(`Details: ${issue.details}`);
          
          if (issue.roomBounds) {
            console.log(`Room Bounds: { x: ${issue.roomBounds.x}, z: ${issue.roomBounds.z}, w: ${issue.roomBounds.w}, d: ${issue.roomBounds.d}, h: ${issue.roomBounds.h}, floorY: ${issue.roomBounds.floorY} }`);
          }
          
          if (issue.nearestConnectedRoom) {
            console.log(`Nearest Room: ${issue.nearestConnectedRoom}`);
            console.log(`Distance: ${issue.distanceToNearestRoom?.toFixed(2)} units`);
          }
          
          if (issue.reasoning) {
            console.log(`Reason: ${issue.reasoning}`);
          }
          
          if (issue.potentialCauses && issue.potentialCauses.length > 0) {
            console.log('Potential Causes:');
            issue.potentialCauses.forEach(cause => console.log(`  • ${cause}`));
          }
          
          if (issue.confidence) {
            console.log(`Confidence: ${issue.confidence}`);
          }
          
          if (issue.isIntentional !== undefined) {
            console.log(`Intentional: ${issue.isIntentional ? 'YES' : 'NO'}`);
          }
          
          console.log('');
        });
      }

      console.log('=====================================');
      console.log('Use teleportToAuditIssue(index) to navigate to specific issues.');
      console.log('Enable DEBUG_CONNECTIVITY visualization with: window.DEBUG_CONNECTIVITY = true');
      
      return report;
    };
    
    // Add teleport function for connectivity issues
    (window as any).teleportToAuditIssue = (index: number) => {
      const issues = connectivityAuditorRef.current.getIssues();
      if (issues[index]) {
        const issue = issues[index];
        playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
        yaw.current = Math.PI;
        noclipRef.current = true; // Enable noclip automatically
        setCurrentConnectivityIssueIndex(index);
        setConnectivityDebugMode(true);
        console.log(`Teleported to issue #${index + 1}: ${issue.type} in ${issue.roomName}`);
      } else {
        console.error(`Issue index ${index} not found. Total issues: ${issues.length}`);
      }
    };
    
    return () => {
      delete (window as any).runConnectivityAudit;
      delete (window as any).teleportToAuditIssue;
    };
  }, []);

  useEffect(() => {
    console.log("DOOR EFFECT RUNNING");
    const canvas = canvasRef.current;
    const mount = mountRef.current;
    if (!canvas || !mount) return;

    // ---- SCENE SETUP ----
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.Fog(0x0a0a0a, 20, 120);

    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 500);
    camera.position.copy(playerPos.current);
    cameraRef.current = camera;

    // Create door renderer to spawn visible meshes for all doors
    const doorRenderer = createDoorRenderer('default', scene);

    // Initialize Geometry Inspector
    const raycasterForInspector = new THREE.Raycaster();
    const geometryInspector = createGeometryInspector(scene, camera, raycasterForInspector);
    geometryInspectorRef.current = geometryInspector;
    
    // Expose global toggle function
    (window as any).toggleGeometryInspector = () => {
      geometryInspector.toggle();
      setGeometryInspectorEnabled(geometryInspector.isActive());
      console.log('[GeometryInspector] Toggled:', geometryInspector.isActive() ? 'ON' : 'OFF');
    };
    (window as any).enableGeometryInspector = () => {
      geometryInspector.enable();
      setGeometryInspectorEnabled(true);
    };
    (window as any).disableGeometryInspector = () => {
      geometryInspector.disable();
      setGeometryInspectorEnabled(false);
    };

    // ---- LIGHTING ----
    const ambientLight = new THREE.AmbientLight(0x222222, 1.0);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const roomLightColors: Record<string, number> = {
      starter: 0x3a4d2a, hallway: 0x1a1a2e, science_lab: 0x2a2010, library: 0x2a2010,
      gym: 0x102030, cafeteria: 0x1a1510, courtyard: 0x0a1a0a, underground_tunnel: 0x050808,
      the_vault: 0x0a0c0a, stairwell: 0x1a0808, stairwell_2: 0x1a0808,
      upper_hallway: 0x141420, upper_hallway_2: 0x141420, upper_hallway_north: 0x141420,
      principal_office: 0x1a1010, security_room: 0x080a10,
      nurses_office: 0x1a2020, nurses_office_backroom: 0x121818,
      gym_north_hallway: 0x101820, lower_hallway_south: 0x141420, main_office: 0x0e1520,
    };
    INITIAL_ROOMS.forEach(r => {
      const light = new THREE.PointLight(roomLightColors[r.id] ?? 0x222222, 2.5, Math.max(r.w, r.d) * 1.2);
      light.position.set(r.cx, r.floorY + r.h * 0.75, r.cz);
      scene.add(light);
    });

    // Expose global toggle function
    (window as any).toggleDebugLighting = toggleDebugLighting;
    (window as any).setDebugLightingBrightness = (brightness: number) => {
      setDebugLightingBrightness(brightness);
      if (debugLightingEnabled && ambientLightRef.current) {
        ambientLightRef.current.intensity = brightness;
      }
      console.log('[DEBUG LIGHTING] Brightness set to:', brightness);
    };

    // ---- DOOR SYSTEM ----
    const doors: RuntimeDoor[] = [];
    const doorColliderMap = new Map<THREE.Mesh, RuntimeDoor>();
    
    // Mapping from raycast doorway IDs to DoorManager IDs
    // This ensures the prompt system only shows purchasable doors that DoorManager recognizes
    const RAYCAST_TO_DOORMANAGER_ID: Record<string, string> = {
      'starter_N_0': 'starter_classroom_door',
      'science_lab_S_0': 'hallway_science_lab_door',
      'library_S_0': 'hallway_library_door',
      'cafeteria_E_0': 'hallway_cafeteria_door',
    };
    
    // Build runtime door objects from config
    DOORS_CONFIG.forEach((dc, idx) => {
      const gaps = ROOM_GAPS[dc.roomId] || [];
      const gap = gaps[dc.gapIndex];
      if (!gap) return;
      
      const room = INITIAL_ROOMS.find(r => r.id === dc.roomId);
      if (!room) return;
      
      // Calculate raycast doorway ID
      const raycastDoorId = `${dc.roomId}_${dc.side}_${dc.gapIndex}`;
      
      // Check if this doorway is a purchasable door (exists in mapping)
      const doorManagerId = RAYCAST_TO_DOORMANAGER_ID[raycastDoorId];
      
      // Skip non-purchasable doorways (they behave as normal map geometry)
      if (!doorManagerId) {
        return;  // Use return instead of continue in forEach
      }
      
      // Calculate door world position based on room and gap
      let doorX = 0, doorZ = 0, doorRotY = 0;
      const doorW = gap.width;
      const doorH = doorHt;
      const doorD = 0.3;
      
      if (gap.side === 'N') {
        doorX = gap.center;
        doorZ = room.d / 2;
        doorRotY = 0;
      } else if (gap.side === 'S') {
        doorX = gap.center;
        doorZ = -room.d / 2;
        doorRotY = 0;
      } else if (gap.side === 'E') {
        doorX = room.w / 2;
        doorZ = gap.center;
        doorRotY = Math.PI / 2;
      } else { // W
        doorX = -room.w / 2;
        doorZ = gap.center;
        doorRotY = Math.PI / 2;
      }
      
      // Convert to world coordinates
      const worldX = room.cx + doorX;
      const worldZ = room.cz + doorZ;
      
      const doorObj: RuntimeDoor = {
        id: doorManagerId,  // Use DoorManager ID, not raycast ID
        type: 'gap',
        axis: gap.side === 'N' || gap.side === 'S' ? 'z' : 'x',
        x: worldX,
        z: worldZ,
        w: doorW,
        h: doorH,
        d: doorD,
        cost: dc.cost,
        unlocked: false,
        name: raycastDoorId,  // Keep raycast ID for display purposes
        roomId: dc.roomId,
        side: gap.side,
        isOpen: false,
        isPurchased: false,
        doorManagerId: doorManagerId,  // Store the DoorManager ID for purchase logic
      };
      doors.push(doorObj);
    });

    // Create door meshes and colliders
    const doorMat = new THREE.MeshLambertMaterial({ color: 0x3d2817 });
    const doorFrameMat = new THREE.MeshLambertMaterial({ color: 0x2a1a0f });
    
    doors.forEach(door => {
      // Door mesh (visual)
      const doorThickness = door.d || 0.3;
      const doorGeom = new THREE.BoxGeometry(door.w, door.h, doorThickness);
      const doorMesh = new THREE.Mesh(doorGeom, doorMat);
      
      // Position door centered in gap at floor level
      doorMesh.position.set(door.x, door.h / 2, door.z);
      doorMesh.rotation.y = door.axis === 'x' ? Math.PI / 2 : 0;
      doorMesh.castShadow = true;
      doorMesh.receiveShadow = true;
      scene.add(doorMesh);
      door.mesh = doorMesh;
      
      // Door collider (invisible physics)
      const colliderGeom = new THREE.BoxGeometry(door.w, door.h, doorThickness + 0.1);
      const colliderMat = new THREE.MeshBasicMaterial({ visible: false });
      const collider = new THREE.Mesh(colliderGeom, colliderMat);
      collider.position.copy(doorMesh.position);
      collider.rotation.copy(doorMesh.rotation);
      scene.add(collider);
      door.collider = collider;
      doorColliderMap.set(collider, door);
    });

    // ---- GEOMETRY BUILDER ----
    const wt = MAP_CONFIG.wallThickness;
    const ct = MAP_CONFIG.ceilingThickness;
    const ft = MAP_CONFIG.floorThickness;
    const doorH = MAP_CONFIG.doorHeight;

    const wallMat = new THREE.MeshLambertMaterial({ map: getProceduralTexture('wall_tiles') });
    const floorMatWood = new THREE.MeshLambertMaterial({ map: getProceduralTexture('wood_floor') });
    const ceilMat = new THREE.MeshLambertMaterial({ map: getProceduralTexture('ceiling_tiles') });

    const buildRoom = (r: Room) => {
      const gaps = ROOM_GAPS[r.id] || [];
      const roomColor = parseInt(r.color.replace('#', ''), 16);
      const customFloorMat = new THREE.MeshLambertMaterial({ color: roomColor });
      const floorMat = r.floorTexture === 'wood_floor.png' ? floorMatWood : customFloorMat;

      // Floor - handle carved floors for stairwells and other rooms with floor holes
      if (!r.disabledFloor) {
        if (r.carvedFloors && r.carvedFloors.length > 0) {
          // Build floor with carved out sections (for stairwell openings, etc.)
          const floorSegments: Array<{ x: number; z: number; w: number; d: number }> = [];
          const floorZMin = r.cz - r.d / 2;
          const floorZMax = r.cz + r.d / 2;
          const floorXMin = r.cx - r.w / 2;
          const floorXMax = r.cx + r.w / 2;
          
          // Parse carved floor definitions (format: "x:z:w:d" or use trapdoors/ceilingHoles from adjacent rooms)
          // For now, create a simple floor that avoids the carved areas
          // Check if this room has trapdoors defined (holes in floor)
          const trapdoors = r.trapdoors || [];
          
          if (trapdoors.length > 0) {
            // Build floor around trapdoors using segments
            // Simple approach: create full floor then subtract holes by building segments
            const holeFreeZones = trapdoors.map(t => ({
              xMin: t.cx - t.w / 2,
              xMax: t.cx + t.w / 2,
              zMin: t.cz - t.d / 2,
              zMax: t.cz + t.d / 2
            }));
            
            // Create floor segments avoiding holes - split into strips
            let currentZ = floorZMin;
            while (currentZ < floorZMax) {
              // Find next hole boundary in Z direction
              let nextZ = floorZMax;
              for (const hole of holeFreeZones) {
                if (hole.zMin > currentZ && hole.zMin < nextZ) nextZ = hole.zMin;
                if (hole.zMax > currentZ && hole.zMax < nextZ && hole.zMax > currentZ) {
                  // Skip to after this hole if we're at its start
                }
              }
              
              const stripDepth = nextZ - currentZ;
              if (stripDepth > 0.1) {
                // Check for holes in this strip
                const holesInStrip = holeFreeZones.filter(h => h.zMin <= nextZ && h.zMax >= currentZ);
                
                if (holesInStrip.length === 0) {
                  // No holes, create full strip
                  const floor = new THREE.Mesh(new THREE.BoxGeometry(r.w, ft, stripDepth), floorMat);
                  floor.position.set(r.cx, r.floorY - ft / 2, currentZ + stripDepth / 2);
                  floor.receiveShadow = true;
                  scene.add(floor);
                } else {
                  // Has holes, create segments around them
                  let currentX = floorXMin;
                  const sortedHoles = [...holesInStrip].sort((a, b) => a.xMin - b.xMin);
                  
                  for (const hole of sortedHoles) {
                    if (hole.xMin > currentX + 0.1) {
                      const segWidth = hole.xMin - currentX;
                      const floor = new THREE.Mesh(new THREE.BoxGeometry(segWidth, ft, stripDepth), floorMat);
                      floor.position.set(currentX + segWidth / 2, r.floorY - ft / 2, currentZ + stripDepth / 2);
                      floor.receiveShadow = true;
                      scene.add(floor);
                    }
                    currentX = Math.max(currentX, hole.xMax);
                  }
                  
                  // Final segment after last hole
                  if (currentX < floorXMax - 0.1) {
                    const segWidth = floorXMax - currentX;
                    const floor = new THREE.Mesh(new THREE.BoxGeometry(segWidth, ft, stripDepth), floorMat);
                    floor.position.set(currentX + segWidth / 2, r.floorY - ft / 2, currentZ + stripDepth / 2);
                    floor.receiveShadow = true;
                    scene.add(floor);
                  }
                }
              }
              
              // Move to next zone
              let minHoleZ = floorZMax;
              for (const hole of holeFreeZones) {
                if (hole.zMax > currentZ && hole.zMax < minHoleZ) minHoleZ = hole.zMax;
              }
              currentZ = minHoleZ;
            }
          } else {
            // No trapdoors, create simple full floor
            const floor = new THREE.Mesh(new THREE.BoxGeometry(r.w, ft, r.d), floorMat);
            floor.position.set(r.cx, r.floorY - ft / 2, r.cz);
            floor.receiveShadow = true;
            scene.add(floor);
          }
        } else {
          // Standard floor without carvings
          const floor = new THREE.Mesh(new THREE.BoxGeometry(r.w, ft, r.d), floorMat);
          floor.position.set(r.cx, r.floorY - ft / 2, r.cz);
          floor.receiveShadow = true;
          scene.add(floor);
        }
      }

      // Ceiling
      if (!r.disabledCeiling) {
        const ceil = new THREE.Mesh(new THREE.BoxGeometry(r.w, ct, r.d), ceilMat);
        ceil.position.set(r.cx, r.floorY + r.h + ct / 2, r.cz);
        scene.add(ceil);
      }

      // Walls
      const wallDefs: Array<{ side: 'N' | 'S' | 'E' | 'W'; px: number; pz: number; len: number; rotY: number }> = [
        { side: 'N', px: r.cx, pz: r.cz + r.d / 2, len: r.w, rotY: 0 },
        { side: 'S', px: r.cx, pz: r.cz - r.d / 2, len: r.w, rotY: 0 },
        { side: 'E', px: r.cx + r.w / 2, pz: r.cz, len: r.d, rotY: Math.PI / 2 },
        { side: 'W', px: r.cx - r.w / 2, pz: r.cz, len: r.d, rotY: Math.PI / 2 },
      ];

      wallDefs.forEach(({ side, px, pz, len, rotY }) => {
        if (r.disabledWalls?.includes(side)) return;
        const sideGaps = gaps.filter(g => g.side === side);

        const buildSegment = (startU: number, endU: number) => {
          const segLen = endU - startU;
          if (segLen <= 0.01) return;
          const segCenter = (startU + endU) / 2 - len / 2;
          const belowH = Math.min(doorH, r.h);
          const below = new THREE.Mesh(new THREE.BoxGeometry(segLen, belowH, wt), wallMat);
          below.rotation.y = rotY;
          if (rotY === 0) below.position.set(px + segCenter, r.floorY + belowH / 2, pz);
          else below.position.set(px, r.floorY + belowH / 2, pz + segCenter);
          below.castShadow = true; below.receiveShadow = true;
          scene.add(below);
          if (r.h > doorH) {
            const aboveH = r.h - doorH;
            const above = new THREE.Mesh(new THREE.BoxGeometry(segLen, aboveH, wt), wallMat);
            above.rotation.y = rotY;
            if (rotY === 0) above.position.set(px + segCenter, r.floorY + doorH + aboveH / 2, pz);
            else above.position.set(px, r.floorY + doorH + aboveH / 2, pz + segCenter);
            scene.add(above);
          }
        };

        if (sideGaps.length === 0) {
          buildSegment(0, len);
        } else {
          const sorted = [...sideGaps].sort((a, b) => (a.center - a.width / 2) - (b.center - b.width / 2));
          let cursor = 0;
          sorted.forEach(g => {
            const gStart = Math.max(0, (g.center - g.width / 2) + len / 2);
            const gEnd = Math.min(len, (g.center + g.width / 2) + len / 2);
            buildSegment(cursor, gStart);
            cursor = gEnd;
          });
          buildSegment(cursor, len);
        }
      });

      // Staircase ramp
      if (r.isStaircase) {
        const ramp = new THREE.Mesh(
          new THREE.BoxGeometry(r.w, 0.3, r.d),
          new THREE.MeshLambertMaterial({ color: 0x5a3020 })
        );
        ramp.position.set(r.cx, r.floorY + (r.climbHeight ?? r.h) / 2, r.cz);
        const climb = r.climbHeight ?? r.h;
        const dir = r.stairDirection || (r.w > r.d ? 'W_E' : 'N_S');
        if (dir === 'W_E' || dir === 'E_W') ramp.rotation.z = (dir === 'W_E' ? 1 : -1) * Math.atan2(climb, r.w);
        else ramp.rotation.x = (dir === 'N_S' ? 1 : -1) * Math.atan2(climb, r.d);
        scene.add(ramp);
      }
    };

    INITIAL_ROOMS.forEach(r => buildRoom(r));

    // Props
    MAP_PROPS.forEach(prop => {
      const ownerRoom = INITIAL_ROOMS.find(r => r.id === prop.roomId);
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(prop.w, prop.h, prop.d),
        new THREE.MeshLambertMaterial({ color: parseInt(prop.color.replace('#', ''), 16) })
      );
      mesh.position.set(prop.cx, (ownerRoom?.floorY ?? 0) + prop.h / 2, prop.cz);
      scene.add(mesh);
    });

    // ---- RESIZE ----
    const handleResize = () => {
      const w = mount.clientWidth; const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    handleResize();
    const resizeObs = new ResizeObserver(handleResize);
    resizeObs.observe(mount);

    // ---- POINTER LOCK ----
    const handleMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement !== canvas) return;
      yaw.current -= e.movementX * 0.002;
      pitch.current -= e.movementY * 0.002;
      pitch.current = Math.max(-Math.PI / 2 + 0.05, Math.min(Math.PI / 2 - 0.05, pitch.current));
    };
    const handleClick = () => { if (document.pointerLockElement !== canvas) canvas?.requestPointerLock(); };
    const handleLockChange = () => { setIsPointerLocked(document.pointerLockElement === canvas); };
    canvas.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('pointerlockchange', handleLockChange);

    // ---- KEYBOARD ----
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = true;
      if (e.code === 'KeyV') noclipRef.current = !noclipRef.current;
      
      // Debug Overlay - F1 to toggle overlay visibility
      if (e.code === 'F1') {
        e.preventDefault();
        setDebugOverlayOpen(prev => !prev);
      }
      
      // Debug Lighting - F2 to toggle bright lighting mode
      if (e.code === 'F2') {
        e.preventDefault();
        toggleDebugLighting();
      }
      
      // Geometry Inspector - F4 to toggle geometry inspection mode
      if (e.code === 'F4') {
        e.preventDefault();
        if (geometryInspectorRef.current) {
          geometryInspectorRef.current.toggle();
          setGeometryInspectorEnabled(geometryInspectorRef.current.isActive());
          console.log('[GeometryInspector] Toggled:', geometryInspectorRef.current.isActive() ? 'ON' : 'OFF');
          console.log('[GeometryInspector] Call window.inspectGeometry() to print all meshes within 20 units');
        }
      }
      
      // Floor Debug Mode - F7 to toggle floor audit visualization
      if (e.code === 'F7') {
        e.preventDefault();
        const auditor = floorAuditorRef.current;
        auditor.initialize(INITIAL_ROOMS, ROOM_GAPS);
        const report = auditor.runAudit();
        setFloorAuditIssues(report.issues);
        setFloorDebugMode(prev => !prev);
        setCurrentFloorIssueIndex(-1);
        console.log(`[FloorIntegrityAudit] Debug mode ${!floorDebugMode ? 'enabled' : 'disabled'}: ${report.totalIssuesFound} issues found`);
      }
      
      // Floor Debug Mode - F8 to teleport to next floor issue
      if (e.code === 'F8') {
        e.preventDefault();
        if (floorAuditIssues.length > 0) {
          const nextIndex = (currentFloorIssueIndex + 1) % floorAuditIssues.length;
          const issue = floorAuditIssues[nextIndex];
          
          // Teleport player to issue location
          playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
          yaw.current = Math.PI; // Face the issue
          setCurrentFloorIssueIndex(nextIndex);
          console.log(`[FloorIntegrityAudit] Teleported to issue ${nextIndex + 1}/${floorAuditIssues.length}: ${issue.cause} in ${issue.roomName}`);
        }
      }
      
      // Map Connectivity Audit - F6 to run full connectivity audit
      if (e.code === 'F6') {
        e.preventDefault();
        const auditor = connectivityAuditorRef.current;
        auditor.initialize(INITIAL_ROOMS, ROOM_GAPS, 'starter');
        const report = auditor.runAudit();
        const issues = auditor.getIssues();
        setConnectivityIssues(issues);
        setConnectivityReport(report);
        setConnectivityDebugMode(true);
        setCurrentConnectivityIssueIndex(-1);
        console.log(`[MapConnectivityAudit] Audit complete: ${report.totalIssues} issues found`);
        console.log(`  - Connected Rooms: ${report.totalConnectedRooms}`);
        console.log(`  - Disconnected Rooms: ${report.disconnectedRooms.length}`);
        console.log(`  - Void Exposures: ${report.voidExposures.length}`);
        console.log(`  - Missing Walls: ${report.missingWalls.length}`);
        console.log(`  - Missing Ceilings: ${report.missingCeilings.length}`);
        console.log(`  - Navigation Breaks: ${report.navigationBreaks.length}`);
      }
      
      // Map Connectivity Audit - F5 to teleport to next connectivity issue
      if (e.code === 'F5') {
        e.preventDefault();
        if (connectivityIssues.length > 0) {
          const nextIndex = (currentConnectivityIssueIndex + 1) % connectivityIssues.length;
          const issue = connectivityIssues[nextIndex];
          
          // Teleport player to issue location
          playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
          yaw.current = Math.PI; // Face the issue
          setCurrentConnectivityIssueIndex(nextIndex);
          console.log(`[MapConnectivityAudit] Teleported to issue ${nextIndex + 1}/${connectivityIssues.length}: ${issue.description} in ${issue.roomName}`);
        }
      }
      
      // Map Validation Mode - F9 to scan current room
      if (e.code === 'F9') {
        e.preventDefault();
        const validator = mapValidatorRef.current;
        
        // Get current room name based on player position
        const px = playerPos.current.x;
        const pz = playerPos.current.z;
        let currentRoomName: string | undefined;
        
        for (const room of INITIAL_ROOMS) {
          const halfW = room.w / 2;
          const halfD = room.d / 2;
          if (px >= room.cx - halfW && px <= room.cx + halfW &&
              pz >= room.cz - halfD && pz <= room.cz + halfD) {
            currentRoomName = room.name;
            break;
          }
        }
        
        validator.setData(INITIAL_ROOMS, ROOM_GAPS, doors);
        validator.enable(currentRoomName);
        const issues = validator.getIssues();
        setValidationIssues(issues);
        setValidationModeEnabled(true);
        setCurrentIssueIndex(-1);
        console.log(`[RoomSealValidator] Scan complete: ${issues.length} issues found${currentRoomName ? ` in ${currentRoomName}` : ''}`);
      }
      
      // Map Validation Mode - F10 to teleport to next issue
      if (e.code === 'F10') {
        e.preventDefault();
        const validator = mapValidatorRef.current;
        const issues = validator.getIssues();
        
        if (issues.length > 0) {
          const nextIndex = (currentIssueIndex + 1) % issues.length;
          const issue = issues[nextIndex];
          
          // Teleport player to issue location
          playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
          yaw.current = Math.PI; // Face the issue
          setCurrentIssueIndex(nextIndex);
          console.log(`[RoomSealValidator] Teleported to issue ${nextIndex + 1}/${issues.length}: ${issue.description} in ${issue.roomName}`);
        }
      }
      
      // Toggle validation mode with F11
      if (e.code === 'F11') {
        e.preventDefault();
        const validator = mapValidatorRef.current;
        validator.setData(INITIAL_ROOMS, ROOM_GAPS, doors);
        const enabled = validator.toggle();
        setValidationModeEnabled(enabled);
        if (enabled) {
          const issues = validator.getIssues();
          setValidationIssues(issues);
        } else {
          setValidationIssues([]);
          setCurrentIssueIndex(-1);
        }
        console.log(`[MapValidator] Validation mode ${enabled ? 'enabled' : 'disabled'}`);
      }
      
      // Door interaction - Press E to purchase door (removed - handled by handleInteractionKey)
    };
    const handleKeyUp = (e: KeyboardEvent) => { keysPressed.current[e.code] = false; };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // ---- COLLISION ----
    const getRoomAtPos = (px: number, pz: number, py: number) =>
      INITIAL_ROOMS.find(r => {
        const xMin = r.cx - r.w / 2; const xMax = r.cx + r.w / 2;
        const zMin = r.cz - r.d / 2; const zMax = r.cz + r.d / 2;
        return px >= xMin && px <= xMax && pz >= zMin && pz <= zMax && py >= r.floorY - 1 && py <= r.floorY + r.h + 1;
      });

    const canPassWall = (roomId: string, side: 'N' | 'S' | 'E' | 'W', offset: number): boolean =>
      (ROOM_GAPS[roomId] || []).filter(g => g.side === side).some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);

    // Door collision check - returns true if player can pass through this gap
    const canPassDoor = (roomId: string, side: 'N' | 'S' | 'E' | 'W', gapIndex: number): boolean => {
      const door = doors.find(d => d.roomId === roomId && d.side === side && DOORS_CONFIG.findIndex(dc => dc.roomId === roomId && dc.side === side && dc.gapIndex === gapIndex) >= 0);
      if (!door) return true; // No door here
      if (!door.isPurchased) return false; // Unpurchased door blocks passage
      if (door.isOpen) return true; // Open purchased door
      return false; // Closed purchased door blocks passage
    };

    const tryMove = (pos: THREE.Vector3, delta: THREE.Vector3): THREE.Vector3 => {
      const next = pos.clone().add(delta);
      const currentRoom = getRoomAtPos(pos.x, pos.z, pos.y);
      if (!currentRoom) return next;
      const xMin = currentRoom.cx - currentRoom.w / 2; const xMax = currentRoom.cx + currentRoom.w / 2;
      const zMin = currentRoom.cz - currentRoom.d / 2; const zMax = currentRoom.cz + currentRoom.d / 2;
      let nx = next.x; let nz = next.z;
      const pr = PLAYER_RADIUS;
      
      // Check wall gaps and door collisions
      const gaps = ROOM_GAPS[currentRoom.id] || [];
      
      // South wall
      if (nz - pr < zMin) {
        const southGaps = gaps.filter(g => g.side === 'S');
        const offset = pos.x - currentRoom.cx;
        const inGap = southGaps.some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
        if (!inGap) {
          nz = zMin + pr;
        } else {
          // Check if any door in this gap is closed
          const gapIdx = gaps.findIndex(g => g.side === 'S' && offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
          if (gapIdx >= 0) {
            const door = doors.find(d => d.roomId === currentRoom.id && d.side === 'S');
            if (door && !canPassDoor(currentRoom.id, 'S', gapIdx)) {
              nz = zMin + pr; // Blocked by closed door
            }
          }
        }
      }
      
      // North wall
      if (nz + pr > zMax) {
        const northGaps = gaps.filter(g => g.side === 'N');
        const offset = pos.x - currentRoom.cx;
        const inGap = northGaps.some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
        if (!inGap) {
          nz = zMax - pr;
        } else {
          const gapIdx = gaps.findIndex(g => g.side === 'N' && offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
          if (gapIdx >= 0) {
            const door = doors.find(d => d.roomId === currentRoom.id && d.side === 'N');
            if (door && !canPassDoor(currentRoom.id, 'N', gapIdx)) {
              nz = zMax - pr;
            }
          }
        }
      }
      
      // West wall
      if (nx - pr < xMin) {
        const westGaps = gaps.filter(g => g.side === 'W');
        const offset = pos.z - currentRoom.cz;
        const inGap = westGaps.some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
        if (!inGap) {
          nx = xMin + pr;
        } else {
          const gapIdx = gaps.findIndex(g => g.side === 'W' && offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
          if (gapIdx >= 0) {
            const door = doors.find(d => d.roomId === currentRoom.id && d.side === 'W');
            if (door && !canPassDoor(currentRoom.id, 'W', gapIdx)) {
              nx = xMin + pr;
            }
          }
        }
      }
      
      // East wall
      if (nx + pr > xMax) {
        const eastGaps = gaps.filter(g => g.side === 'E');
        const offset = pos.z - currentRoom.cz;
        const inGap = eastGaps.some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
        if (!inGap) {
          nx = xMax - pr;
        } else {
          const gapIdx = gaps.findIndex(g => g.side === 'E' && offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
          if (gapIdx >= 0) {
            const door = doors.find(d => d.roomId === currentRoom.id && d.side === 'E');
            if (door && !canPassDoor(currentRoom.id, 'E', gapIdx)) {
              nx = xMax - pr;
            }
          }
        }
      }
      
      return new THREE.Vector3(nx, next.y, nz);
    };

    // ---- GAME LOOP ----
    let lastTime = performance.now();
    let animId: number;
    
    // Raycaster for door interaction
    const raycaster = new THREE.Raycaster();
    const doorInteractionRange = 8.0;
    let hoveredDoor: RuntimeDoor | null = null;
    
    // Handle door interaction (purchase/open)
    const handleDoorInteraction = () => {
      if (!hoveredDoor || !isPointerLocked) return;
      
      if (!hoveredDoor.isPurchased) {
        // Purchase the door
        hoveredDoor.isPurchased = true;
        hoveredDoor.isOpen = false;
        // Keep collider active (door is closed after purchase)
      } else if (!hoveredDoor.isOpen) {
        // Open the door
        hoveredDoor.isOpen = true;
        if (hoveredDoor.mesh) {
          // Slide door open based on axis
          const openOffset = hoveredDoor.w * 0.6;
          if (hoveredDoor.axis === 'x') {
            hoveredDoor.mesh.position.z += openOffset;
          } else {
            hoveredDoor.mesh.position.x += openOffset;
          }
        }
        // Remove collider when opened
        if (hoveredDoor.collider) {
          scene.remove(hoveredDoor.collider);
          doorColliderMap.delete(hoveredDoor.collider);
          hoveredDoor.collider = undefined;
        }
      }
    };

    const loop = () => {
      animId = requestAnimationFrame(loop);
      const now = performance.now();
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;
      const keys = keysPressed.current;
      const speed = noclipRef.current ? 20 : 10;
      const fwd = new THREE.Vector3(-Math.sin(yaw.current), 0, -Math.cos(yaw.current));
      const right = new THREE.Vector3(Math.cos(yaw.current), 0, -Math.sin(yaw.current));
      let moveDir = new THREE.Vector3();
      if (keys['KeyW'] || keys['ArrowUp']) moveDir.add(fwd);
      if (keys['KeyS'] || keys['ArrowDown']) moveDir.sub(fwd);
      if (keys['KeyD'] || keys['ArrowRight']) moveDir.add(right);
      if (keys['KeyA'] || keys['ArrowLeft']) moveDir.sub(right);
      if (moveDir.lengthSq() > 0) moveDir.normalize().multiplyScalar(speed * dt);

      if (noclipRef.current) {
        if (keys['Space']) moveDir.y += speed * dt;
        if (keys['ShiftLeft'] || keys['ShiftRight']) moveDir.y -= speed * dt;
        playerPos.current.add(moveDir);
      } else {
        velocityY.current -= 30 * dt;
        const currentRoom = getRoomAtPos(playerPos.current.x, playerPos.current.z, playerPos.current.y);
        let groundY = currentRoom
          ? (currentRoom.isStaircase
            ? getStaircaseElevationMath(currentRoom, playerPos.current.x, playerPos.current.z) + PLAYER_EYE_HEIGHT
            : currentRoom.floorY + PLAYER_EYE_HEIGHT)
          : PLAYER_EYE_HEIGHT;
        playerPos.current.y += velocityY.current * dt;
        if (playerPos.current.y <= groundY) {
          playerPos.current.y = groundY;
          velocityY.current = 0;
          isGrounded.current = true;
        } else {
          isGrounded.current = false;
        }
        if (keys['Space'] && isGrounded.current) { velocityY.current = 10; isGrounded.current = false; }
        const moved = tryMove(playerPos.current, moveDir);
        playerPos.current.x = moved.x;
        playerPos.current.z = moved.z;
      }

      camera.position.copy(playerPos.current);
      camera.rotation.order = 'YXZ';
      camera.rotation.y = yaw.current;
      camera.rotation.x = pitch.current;
      
      // Update validation mode highlights if enabled
      if (validationModeEnabled) {
        mapValidatorRef.current.updateHighlights(now / 1000);
      }
      
      // DEBUG_FLOORS: Render test wireframe box if enabled
      // This reads window.DEBUG_FLOORS every frame to verify connection to render loop
      if ((window as any).DEBUG_FLOORS === true) {
        console.log('DEBUG WIREFRAMES ACTIVE');
        
        // LOG ROOM COUNT AND DETAILS
        console.log("ROOM COUNT", INITIAL_ROOMS.length);
        INITIAL_ROOMS.forEach((room, idx) => {
          if (idx < 5) { // Log first 5 rooms to avoid spam
            console.log(
              "WIREFRAME ROOM",
              room.id,
              room.name,
              room.cx,
              room.cz,
              room.w,
              room.d,
              room.floorY
            );
          }
        });
        
        // Create or update test wireframe box at world position 0,5,0
        if (!debugWireframeRef.current) {
          const geometry = new THREE.BoxGeometry(4, 4, 4);
          const edges = new THREE.EdgesGeometry(geometry);
          const material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
          const wireframe = new THREE.LineSegments(edges, material);
          wireframe.position.set(0, 5, 0);
          wireframe.renderOrder = 999;
          wireframe.frustumCulled = false;
          scene.add(wireframe);
          debugWireframeRef.current = wireframe;
          console.log('[DEBUG] Red wireframe box created at (0, 5, 0)');
        }
        
        // TEMPORARY TEST: Render every room as a solid magenta wireframe box
        // This verifies that room data is reaching the renderer
        const globalKey = '__ROOM_DEBUG_WIREFRAMES__';
        let roomWireframes: THREE.LineSegments[] = (window as any)[globalKey] || [];
        
        // Clear existing room wireframes
        roomWireframes.forEach(w => {
          scene.remove(w);
          w.geometry.dispose();
          (w.material as THREE.Material).dispose();
        });
        roomWireframes = [];
        
        // Create magenta wireframe for each room
        INITIAL_ROOMS.forEach(room => {
          const roomGeometry = new THREE.BoxGeometry(room.w, 1, room.d);
          const roomEdges = new THREE.EdgesGeometry(roomGeometry);
          const roomMaterial = new THREE.LineBasicMaterial({ color: 0xff00ff });
          const roomWireframe = new THREE.LineSegments(roomEdges, roomMaterial);
          roomWireframe.position.set(room.cx, room.floorY + 0.5, room.cz);
          roomWireframe.renderOrder = 998;
          roomWireframe.frustumCulled = false;
          scene.add(roomWireframe);
          roomWireframes.push(roomWireframe);
        });
        
        (window as any)[globalKey] = roomWireframes;
        console.log("WIREFRAMES CREATED", roomWireframes.length);
      } else {
        // Cleanup wireframe when disabled
        if (debugWireframeRef.current) {
          debugWireframeRef.current.geometry.dispose();
          (debugWireframeRef.current.material as THREE.Material).dispose();
          scene.remove(debugWireframeRef.current);
          debugWireframeRef.current = null;
          console.log('[DEBUG] Red wireframe box removed');
        }
        
        // Cleanup room wireframes when disabled
        const globalKey = '__ROOM_DEBUG_WIREFRAMES__';
        let roomWireframes: THREE.LineSegments[] = (window as any)[globalKey] || [];
        roomWireframes.forEach(w => {
          scene.remove(w);
          w.geometry.dispose();
          (w.material as THREE.Material).dispose();
        });
        (window as any)[globalKey] = [];
      }
      
      // Render floor debug visualization if enabled
      if (floorDebugMode) {
        renderFloorDebug(scene, now / 1000);
      }
      
      // Geometry Inspector - highlight mesh under crosshair
      if (geometryInspectorEnabled && geometryInspectorRef.current) {
        const inspector = geometryInspectorRef.current;
        const hitMesh = inspector.inspectAtCrosshair();
        
        // DIAGNOSTIC LOGGING: Compare room counts between systems
        const allSceneMeshes: THREE.Mesh[] = [];
        scene.traverse((obj) => {
          if (obj instanceof THREE.Mesh && 
              obj !== (inspector as any).highlightMesh && 
              obj !== (inspector as any).wireframeMesh &&
              !obj.name.includes('debug') &&
              !obj.name.includes('highlight')) {
            allSceneMeshes.push(obj);
          }
        });
        
        console.log('[DIAGNOSTIC] Geometry Inspector Scene Mesh Count:', allSceneMeshes.length);
        console.log('[DIAGNOSTIC] Connectivity Audit Room Count:', INITIAL_ROOMS.length);
        console.log('[DIAGNOSTIC] Connectivity Issues Array Length:', connectivityIssues.length);
        
        // Print room IDs scanned by each system
        const sceneMeshIds = allSceneMeshes.map(m => m.name || m.uuid).slice(0, 10);
        const roomIds = INITIAL_ROOMS.map(r => r.id);
        console.log('[DIAGNOSTIC] Sample Scene Mesh Names:', sceneMeshIds);
        console.log('[DIAGNOSTIC] Room IDs from INITIAL_ROOMS:', roomIds.slice(0, 10));
        console.log('[DIAGNOSTIC] Total Issues Before Rendering:', connectivityIssues.length);
        
        // Print issue marker coordinates
        if (connectivityIssues.length > 0) {
          console.log('[DIAGNOSTIC] Issue Marker Coordinates:');
          connectivityIssues.forEach((issue, idx) => {
            if (idx < 5) {
              console.log(`  #${idx + 1} ${issue.type}: [${issue.location[0].toFixed(1)}, ${issue.location[1].toFixed(1)}, ${issue.location[2].toFixed(1)}] in ${issue.roomName}`);
            }
          });
        }
        
        if (hitMesh) {
          const bounds = new THREE.Box3().setFromObject(hitMesh);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          bounds.getSize(size);
          bounds.getCenter(center);
          
          // Calculate distance from camera to hit mesh
          const distance = camera.position.distanceTo(center);
          
          // Update highlight visual
          inspector.updateHighlight(hitMesh, distance);
          
          // Get mesh info for display
          const info = inspector.getInspectedMesh();
          if (info) {
            setInspectedMeshInfo({
              meshName: info.meshName,
              roomId: info.roomId,
              wallId: info.wallId,
              floorId: info.floorId,
            });
          }
        } else {
          inspector.updateHighlight(null, 0);
          setInspectedMeshInfo(null);
        }
      }
      
      // Door interaction raycast
      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      const doorColliders = Array.from(doorColliderMap.keys());
      const intersects = raycaster.intersectObjects(doorColliders);
      
      hoveredDoor = null;
      if (intersects.length > 0 && intersects[0].distance <= doorInteractionRange) {
        const hitCollider = intersects[0].object as THREE.Mesh;
        const door = doorColliderMap.get(hitCollider);
        if (door) {
          hoveredDoor = door;
          if (!door.isPurchased) {
            setPromptText(`Press E to buy ${door.name} (${door.cost})`);
            setCanInteract(true);
          } else if (!door.isOpen) {
            setPromptText('Press E to open');
            setCanInteract(true);
          } else {
            setPromptText('');
            setCanInteract(false);
          }
        } else {
          setPromptText('');
          setCanInteract(false);
        }
      } else {
        setPromptText('');
        setCanInteract(false);
      }
      
      // Sync with DoorManager for event handling
      const doorManager = getDoorManager();
      const playerPosVec = { x: playerPos.current.x, y: playerPos.current.y, z: playerPos.current.z };
      const playerDirVec = new THREE.Vector3(-Math.sin(yaw.current), 0, -Math.cos(yaw.current));
      doorManager.updateInteraction(playerPosVec, playerDirVec);
      
      renderer.render(scene, camera);
      
      // Update debug overlay stats every frame
      const frameCount = (window as any).__debugFrameCount || 0;
      const prevDebugTime = (window as any).__debugLastTime || now;
      (window as any).__debugFrameCount = frameCount + 1;
      
      if (now - prevDebugTime >= 500) {
        const calculatedFps = Math.round((frameCount + 1) * 1000 / (now - prevDebugTime));
        setFps(calculatedFps);
        (window as any).__debugFrameCount = 0;
        (window as any).__debugLastTime = now;
        
        // Count meshes and draw calls
        let meshCnt = 0;
        scene.traverse((obj) => {
          if (obj instanceof THREE.Mesh) meshCnt++;
        });
        setMeshCount(meshCnt);
        setDrawCalls(renderer.info.render.calls);
        
        // Get current room name
        const currentRoom = getRoomAtPos(playerPos.current.x, playerPos.current.z, playerPos.current.y);
        setCurrentRoomName(currentRoom?.name || 'None');
      }
    };
    loop();

    // Keyboard handler for door interaction (uses hoveredDoor from prompt system)
    const handleInteractionKey = (e: KeyboardEvent) => {
      const isCurrentlyPointerLocked = document.pointerLockElement !== null;
      console.log("KEY EVENT", e.code, "isPointerLocked =", isCurrentlyPointerLocked);
      console.log('[DEBUG] Key event received:', e.key);
      if (e.code === 'KeyE' && isCurrentlyPointerLocked) {
        console.log("KEY_E_TEST");
        console.log("=== [E] key pressed ===");
        console.log("=== Key handler entered ===");
        
        // Use the same door reference that drives the visible prompt
        const currentDoor = hoveredDoor;
        
        if (!currentDoor) {
          console.log("Current door found: NO (null)");
          return;
        }
        
        console.log("Current door found: YES");
        console.log("Door ID:", currentDoor.id);
        console.log("purchaseDoor() called");
        
        const doorManager = getDoorManager();
        const playerId = 'player1';
        
        // Always use the DoorManager ID for purchase logic
        // The door's id field now contains the DoorManager ID due to mapping
        const purchaseDoorId = currentDoor.doorManagerId || currentDoor.id;
        const result = doorManager.purchaseDoor(purchaseDoorId, playerId);
        
        console.log("purchaseDoor() result:", result);
        console.log("Result.success:", result.success);
        
        if (result.success) {
          console.log('[App] Door purchased successfully:', currentDoor.name);
          console.log("DoorRenderer update called");
          // Hide the actual door mesh created in App.tsx (not DoorRenderer's separate mesh)
          if (currentDoor.mesh) {
            currentDoor.mesh.visible = false;
            console.log(`[App] Door mesh hidden: ${currentDoor.id}`);
          }
          // Also hide the collider to prevent any residual interaction
          if (currentDoor.collider) {
            currentDoor.collider.visible = false;
            console.log(`[App] Door collider hidden: ${currentDoor.id}`);
          }
          // Update door state
          currentDoor.isOpen = true;
          currentDoor.isPurchased = true;
        } else {
          console.log('[App] Door purchase failed:', result.reason);
          if (result.reason === "INSUFFICIENT_POINTS") {
            setShowNotEnoughPoints(true);
            setTimeout(() => setShowNotEnoughPoints(false), 2000);
          }
        }
      }
    };
    window.addEventListener('keydown', handleInteractionKey);

    return () => {
      cancelAnimationFrame(animId);
      resizeObs.disconnect();
      canvas.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('pointerlockchange', handleLockChange);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleInteractionKey);
      
      // Cleanup door renderer
      doorRenderer.destroy();
      
      // Cleanup debug wireframe if exists
      if (debugWireframeRef.current) {
        debugWireframeRef.current.geometry.dispose();
        (debugWireframeRef.current.material as THREE.Material).dispose();
        scene.remove(debugWireframeRef.current);
        debugWireframeRef.current = null;
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden select-none">
      {/* Points Display */}
      <div className="absolute top-4 right-4 z-20">
        <PointsDisplay playerId="player1" />
      </div>

      {/* Not Enough Points Feedback */}
      {showNotEnoughPoints && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
          <div className="bg-red-900/90 border-2 border-red-500 px-6 py-3 rounded-lg text-lg font-mono tracking-wide text-red-200 whitespace-nowrap animate-pulse">
            NOT ENOUGH POINTS
          </div>
        </div>
      )}

      {/* Debug Overlay - Collapsible F1 menu */}
      <DebugOverlay
        data={{
          fps,
          meshCount,
          drawCalls,
          playerPos: playerPos.current,
          playerRot: cameraRef.current?.rotation || new THREE.Euler(0, 0, 0),
          currentRoom: currentRoomName,
          noclip: noclipRef.current,
          round: roundState.round,
          zombiesAlive: roundState.zombiesAlive,
          spawnStatus: roundState.spawnStatus,
          connectivityIssues: connectivityIssues,
          floorIntegrityIssues: floorAuditIssues,
          debugLightingEnabled,
          debugLightingBrightness,
        }}
        onToggleNoclip={() => { noclipRef.current = !noclipRef.current; }}
        onRunConnectivity={() => {
          const auditor = connectivityAuditorRef.current;
          auditor.initialize(INITIAL_ROOMS, ROOM_GAPS, 'starter');
          const report = auditor.runAudit();
          const issues = auditor.getIssues();
          setConnectivityIssues(issues);
          setConnectivityReport(report);
          setConnectivityDebugMode(true);
          setCurrentConnectivityIssueIndex(-1);
        }}
        onRunFloorAudit={() => {
          const auditor = floorAuditorRef.current;
          auditor.initialize(INITIAL_ROOMS, ROOM_GAPS);
          const report = auditor.runAudit();
          setFloorAuditIssues(report.issues);
          setFloorDebugMode(true);
          setCurrentFloorIssueIndex(-1);
        }}
        onTeleportToSpawn={() => {
          // Teleport to starter room spawn point
          playerPos.current.set(17.5, PLAYER_EYE_HEIGHT, -10);
          yaw.current = Math.PI;
          console.log('[DebugOverlay] Teleported to starter room spawn');
        }}
        onTeleportToIssue={(issue) => {
          playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
          yaw.current = Math.PI;
          noclipRef.current = true;
          console.log(`[DebugOverlay] Teleported to issue: ${issue.type} in ${issue.roomName}`);
        }}
        onToggleDebugLighting={toggleDebugLighting}
        onSetDebugLightingBrightness={(brightness: number) => {
          setDebugLightingBrightness(brightness);
          if (debugLightingEnabled && ambientLightRef.current) {
            ambientLightRef.current.intensity = brightness;
          }
        }}
      />

      <div ref={mountRef} className="absolute inset-0">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      {/* Crosshair */}
      {isPointerLocked && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className={`w-1.5 h-1.5 rounded-full border border-white/60 ${geometryInspectorEnabled ? 'bg-yellow-400' : 'bg-emerald-400'}`} />
        </div>
      )}

      {/* Geometry Inspector Info Display */}
      {isPointerLocked && geometryInspectorEnabled && inspectedMeshInfo && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="bg-black/80 border border-yellow-500/70 px-4 py-3 rounded-lg text-xs font-mono tracking-wide text-yellow-300 whitespace-nowrap">
            <div className="font-bold text-yellow-200 mb-1">GEOMETRY INSPECTOR</div>
            <div>Mesh: <span className="text-white">{inspectedMeshInfo.meshName}</span></div>
            {inspectedMeshInfo.roomId && <div>Room ID: <span className="text-emerald-400">{inspectedMeshInfo.roomId}</span></div>}
            {inspectedMeshInfo.wallId && <div>Wall ID: <span className="text-blue-400">{inspectedMeshInfo.wallId}</span></div>}
            {inspectedMeshInfo.floorId && <div>Floor ID: <span className="text-purple-400">{inspectedMeshInfo.floorId}</span></div>}
            <div className="mt-2 text-yellow-500/70 text-[10px]">Press F4 to toggle · window.inspectGeometry() for details</div>
          </div>
        </div>
      )}

      {/* Door interaction prompt */}
      {isPointerLocked && canInteract && promptText && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="bg-black/70 border border-emerald-500/50 px-4 py-2 rounded-lg text-sm font-mono tracking-wide text-emerald-400 whitespace-nowrap">
            {promptText}
          </div>
        </div>
      )}

      {/* Click-to-play prompt */}
      {!isPointerLocked && (
        <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10">
          <div className="bg-black/70 border border-white/10 px-5 py-2 rounded-full text-[11px] font-mono tracking-widest text-white/50 uppercase">
            Click to Play · WASD Move · Mouse Look · V Noclip · F4 Geometry Inspector · ESC Free Cursor
          </div>
        </div>
      )}

      {/* Map Validation Mode UI */}
      {validationModeEnabled && (
        <>
          {/* Validation mode indicator */}
          <div className="absolute top-4 left-4 pointer-events-none z-10">
            <div className="bg-red-900/80 border border-red-500 px-3 py-2 rounded-lg text-xs font-mono text-red-300">
              <div className="font-bold text-red-200 mb-1">MAP VALIDATION MODE</div>
              <div>Issues: {validationIssues.length}</div>
              {currentIssueIndex >= 0 && (
                <div className="text-yellow-300">Viewing: {currentIssueIndex + 1}/{validationIssues.length}</div>
              )}
              <div className="mt-2 text-gray-400 text-[10px]">
                F8: Scan · F9: Next Issue · F10: Toggle
              </div>
            </div>
          </div>

          {/* Issues list */}
          {validationIssues.length > 0 && (
            <div className="absolute top-4 right-4 max-w-md max-h-96 overflow-y-auto pointer-events-auto z-10">
              <div className="bg-black/80 border border-red-500/50 rounded-lg p-3">
                <div className="text-xs font-mono text-red-300 font-bold mb-2">DETECTED ISSUES</div>
                <div className="space-y-1">
                  {validationIssues.map((issue, idx) => (
                    <div
                      key={issue.id}
                      className={`text-[10px] font-mono p-1.5 rounded cursor-pointer transition-colors ${
                        idx === currentIssueIndex
                          ? 'bg-yellow-900/50 text-yellow-200 border border-yellow-500/50'
                          : issue.severity === 'critical'
                            ? 'bg-red-950/50 text-red-300 hover:bg-red-900/30'
                            : issue.severity === 'high'
                              ? 'bg-orange-950/50 text-orange-300 hover:bg-orange-900/30'
                              : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800/50'
                      }`}
                      onClick={() => {
                        setCurrentIssueIndex(idx);
                        const validator = mapValidatorRef.current;
                        const issues = validator.getIssues();
                        if (issues[idx]) {
                          playerPos.current.set(issues[idx].location[0], issues[idx].location[1] + 2, issues[idx].location[2] + 5);
                          yaw.current = Math.PI;
                        }
                      }}
                    >
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        issue.type === 'floor_gap' ? 'bg-red-500' :
                        issue.type === 'wall_gap' ? 'bg-yellow-500' :
                        issue.type === 'door_gap' ? 'bg-blue-500' :
                        issue.type === 'stair_gap' ? 'bg-orange-500' :
                        issue.type === 'corner_crack' ? 'bg-pink-500' :
                        'bg-gray-500'
                      }`} />
                      [{issue.severity.toUpperCase()}] {issue.roomName} - {issue.type.replace('_', ' ')}
                      <div className="text-gray-400 ml-4 truncate">{issue.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No issues message */}
          {validationModeEnabled && validationIssues.length === 0 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
              <div className="bg-green-900/80 border border-green-500 px-6 py-4 rounded-lg text-sm font-mono text-green-300">
                <div className="font-bold text-green-200 mb-1">NO ISSUES DETECTED</div>
                <div className="text-green-400">Map geometry is clean!</div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
