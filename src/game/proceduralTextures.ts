/**
 * School of the Dead - Procedural Textures
 * Generates and caches procedural textures for walls, floors, and ceilings.
 */

import * as THREE from 'three';

// ============================================================================
// Texture Cache
// ============================================================================

const PROCEDURAL_TEXTURES_CACHE: Record<string, THREE.CanvasTexture> = {};

// ============================================================================
// Procedural Texture Generation
// ============================================================================

export type ProceduralTextureType = 'wood_floor' | 'ceiling_tiles' | 'wall_tiles';

export function getProceduralTexture(type: ProceduralTextureType): THREE.CanvasTexture {
  if (PROCEDURAL_TEXTURES_CACHE[type]) return PROCEDURAL_TEXTURES_CACHE[type];
  
  const canvas = document.createElement('canvas');
  canvas.width = 512; 
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;
  
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
        ctx.quadraticCurveTo(256, i * plankHeight + Math.random() * plankHeight * 2 - plankHeight / 2, 512, i * plankHeight + Math.random() * plankHeight);
        ctx.stroke();
      }
      const joints = i % 2 === 0 ? [150, 380] : [220, 440];
      ctx.fillStyle = '#1e110a';
      joints.forEach(x => { ctx.fillRect(x, i * plankHeight, 2, plankHeight); });
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
          const cx2 = x + 30 + Math.random() * (tileSize - 60); 
          const cy2 = y + 30 + Math.random() * (tileSize - 60); 
          const radius = 25 + Math.random() * 45;
          ctx.beginPath(); 
          ctx.arc(cx2, cy2, radius, 0, Math.PI * 2); 
          ctx.fill();
          ctx.beginPath(); 
          ctx.arc(cx2, cy2, radius + 4, 0, Math.PI * 2); 
          ctx.stroke();
        }
        ctx.fillStyle = 'rgba(40, 45, 35, 0.65)';
        for (let m = 0; m < 35; m++) { 
          ctx.fillRect(x + Math.random() * tileSize, y + Math.random() * tileSize, 1.5, 1.5); 
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
    ctx.moveTo(0, 0); 
    ctx.lineTo(512, 0); 
    ctx.moveTo(0, 256); 
    ctx.lineTo(512, 256); 
    ctx.moveTo(0, 512); 
    ctx.lineTo(512, 512);
    ctx.moveTo(0, 0); 
    ctx.lineTo(0, 512); 
    ctx.moveTo(256, 0); 
    ctx.lineTo(256, 512); 
    ctx.moveTo(512, 0); 
    ctx.lineTo(512, 512); 
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
      ctx.moveTo(0, i * tSize); 
      ctx.lineTo(512, i * tSize); 
      ctx.moveTo(i * tSize, 0); 
      ctx.lineTo(i * tSize, 512); 
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
}
