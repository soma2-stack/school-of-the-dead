import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

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
  { id: 'stairwell_2', name: 'Secondary Stairwell', cx: 90, cz: -22, w: 16, d: 24, floorY: 0, h: 22, climbHeight: 11, color: '#542828', isStaircase: true, stairDirection: 'N_S' },
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

const MAP_PROPS = [
  { id: 'mystery_box_spawn', type: 'interactable', roomId: 'starter', cx: 15, cz: -25, w: 4, d: 2, h: 3, color: '#8b5a2b' },
  { id: 'main_power_switch', type: 'interactable', roomId: 'security_room', cx: 54, cz: 51.5, w: 4, d: 1, h: 4, color: '#8b0000' },
];

export const MAP_CONFIG = {
  wallThickness: 0.4,
  ceilingThickness: 0.15,
  doorHeight: 7.5,
  floorThickness: 0.2,
};

const PLAYER_EYE_HEIGHT = 4.5;
const PLAYER_RADIUS = 1.0;

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const yaw = useRef<number>(Math.PI);
  const pitch = useRef<number>(0);
  const playerPos = useRef<THREE.Vector3>(new THREE.Vector3(0, PLAYER_EYE_HEIGHT, -30));
  const velocityY = useRef<number>(0);
  const keysPressed = useRef<Record<string, boolean>>({});
  const isGrounded = useRef<boolean>(true);
  const noclipRef = useRef<boolean>(false);
  const [isPointerLocked, setIsPointerLocked] = useState<boolean>(false);

  useEffect(() => {
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

    // ---- LIGHTING ----
    scene.add(new THREE.AmbientLight(0x222222, 1.0));

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

      // Floor
      if (!r.disabledFloor) {
        const floor = new THREE.Mesh(new THREE.BoxGeometry(r.w, ft, r.d), floorMat);
        floor.position.set(r.cx, r.floorY - ft / 2, r.cz);
        floor.receiveShadow = true;
        scene.add(floor);
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
        if (dir === 'W_E' || dir === 'E_W') ramp.rotation.z = (dir === 'E_W' ? 1 : -1) * Math.atan2(climb, r.w);
        else ramp.rotation.x = (dir === 'S_N' ? 1 : -1) * Math.atan2(climb, r.d);
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

    const tryMove = (pos: THREE.Vector3, delta: THREE.Vector3): THREE.Vector3 => {
      const next = pos.clone().add(delta);
      const currentRoom = getRoomAtPos(pos.x, pos.z, pos.y);
      if (!currentRoom) return next;
      const xMin = currentRoom.cx - currentRoom.w / 2; const xMax = currentRoom.cx + currentRoom.w / 2;
      const zMin = currentRoom.cz - currentRoom.d / 2; const zMax = currentRoom.cz + currentRoom.d / 2;
      let nx = next.x; let nz = next.z;
      const pr = PLAYER_RADIUS;
      if (nz - pr < zMin && !canPassWall(currentRoom.id, 'S', pos.x - currentRoom.cx)) nz = zMin + pr;
      if (nz + pr > zMax && !canPassWall(currentRoom.id, 'N', pos.x - currentRoom.cx)) nz = zMax - pr;
      if (nx - pr < xMin && !canPassWall(currentRoom.id, 'W', pos.z - currentRoom.cz)) nx = xMin + pr;
      if (nx + pr > xMax && !canPassWall(currentRoom.id, 'E', pos.z - currentRoom.cz)) nx = xMax - pr;
      return new THREE.Vector3(nx, next.y, nz);
    };

    // ---- GAME LOOP ----
    let lastTime = performance.now();
    let animId: number;
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
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      resizeObs.disconnect();
      canvas.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('pointerlockchange', handleLockChange);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden select-none">
      <div ref={mountRef} className="absolute inset-0">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>

      {/* Crosshair */}
      {isPointerLocked && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 border border-white/60" />
        </div>
      )}

      {/* Click-to-play prompt */}
      {!isPointerLocked && (
        <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10">
          <div className="bg-black/70 border border-white/10 px-5 py-2 rounded-full text-[11px] font-mono tracking-widest text-white/50 uppercase">
            Click to Play · WASD Move · Mouse Look · V Noclip · ESC Free Cursor
          </div>
        </div>
      )}
    </div>
  );
}
