import * as THREE from 'three';
import { getDoorManager, DEFAULT_DOORS } from './doors';

/**
 * DoorRenderer
 * 
 * Responsible for creating and managing visible Three.js meshes
 * for all doors registered in the DoorManager.
 * 
 * Features:
 * - Spawns a mesh for each door on initialization
 * - Updates mesh visibility based on door open/closed state
 * - Stores mesh references for cleanup
 * - Logs spawn information to console
 * - Displays floating ID labels above each door
 */

export class DoorRenderer {
  private scene: THREE.Scene;
  private doorMeshes: Map<string, THREE.Mesh> = new Map();
  private labelMeshes: Map<string, THREE.Sprite> = new Map();
  private material: THREE.MeshStandardMaterial;
  private labelTextMaterial: THREE.SpriteMaterial;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    
    // Simple brown material for wooden doors
    this.material = new THREE.MeshStandardMaterial({
      color: 0x8B4513, // SaddleBrown
      roughness: 0.8,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    // Create text material for labels (will use canvas texture)
    this.labelTextMaterial = new THREE.SpriteMaterial({
      color: 0xFFFFFF,
      transparent: true,
      opacity: 1.0,
    });
  }

  /**
   * Initialize and spawn meshes for all existing doors
   */
  public initialize(): void {
    const doorManager = getDoorManager();
    const doors = doorManager.getAllDoors();

    console.log('========================================');
    console.log('[DoorRenderer] Initializing doors...');
    console.log(`[DoorRenderer] Total doors in DoorManager: ${doors.length}`);
    console.log(`[DoorRenderer] Total doors in DEFAULT_DOORS: ${DEFAULT_DOORS.length}`);
    console.log('----------------------------------------');

    // Log all doors that should be rendered
    console.log('[DoorRenderer] Expected doors from DEFAULT_DOORS:');
    DEFAULT_DOORS.forEach(door => {
      console.log(`  - ${door.id}: (${door.position.x}, ${door.position.y}, ${door.position.z})`);
    });
    console.log('----------------------------------------');

    doors.forEach((door) => {
      this.spawnDoorMesh(door);
    });

    console.log('========================================');
    console.log(`[DoorRenderer] Initialization complete.`);
    console.log(`[DoorRenderer] Door meshes spawned: ${this.doorMeshes.size}`);
    console.log(`[DoorRenderer] Label meshes spawned: ${this.labelMeshes.size}`);
    console.log('========================================');
  }

  /**
   * Spawn a single door mesh with label
   */
  private spawnDoorMesh(door: { id: string; name: string; position: { x: number; y: number; z: number }; width: number; height: number }): void {
    if (this.doorMeshes.has(door.id)) {
      console.warn(`[DoorRenderer] Door mesh already exists for ID: ${door.id}`);
      return;
    }

    const { x, y, z } = door.position;

    // Create geometry (door is thin along Z axis, stands upright)
    const geometry = new THREE.BoxGeometry(door.width, door.height, 0.2);
    const mesh = new THREE.Mesh(geometry, this.material);

    // Position the door
    mesh.position.set(x, y, z);

    // Add to scene
    this.scene.add(mesh);
    this.doorMeshes.set(door.id, mesh);

    // Create floating label above door
    const labelSprite = this.createTextLabel(door.id);
    labelSprite.position.set(x, y + door.height / 2 + 0.5, z);
    // Scale label to be visible
    labelSprite.scale.set(3, 1, 1);
    this.scene.add(labelSprite);
    this.labelMeshes.set(door.id, labelSprite);

    // Log spawn information
    console.log(`[DoorRenderer] ✅ Door spawned:`);
    console.log(`    - ID: ${door.id}`);
    console.log(`    - Name: ${door.name}`);
    console.log(`    - Position: (${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)})`);
    console.log(`    - Size: ${door.width.toFixed(2)} x ${door.height.toFixed(2)} x 0.20`);
  }

  /**
   * Create a text sprite label
   */
  private createTextLabel(text: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Failed to get 2D context for door label');
    }

    // Set canvas size
    canvas.width = 512;
    canvas.height = 128;

    // Clear and set background (transparent)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background rectangle (semi-transparent black)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw text
    ctx.font = 'Bold 48px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ 
      map: texture,
      transparent: true,
      opacity: 1.0,
    });
    
    return new THREE.Sprite(material);
  }

  /**
   * Update door visibility based on open/closed state
   * Called when a door is purchased/opened
   */
  public updateDoorState(doorId: string, isOpen: boolean): void {
    const mesh = this.doorMeshes.get(doorId);
    if (!mesh) {
      console.warn(`[DoorRenderer] Cannot update state for unknown door ID: ${doorId}`);
      return;
    }

    mesh.visible = !isOpen;

    // Also hide/show the label
    const label = this.labelMeshes.get(doorId);
    if (label) {
      label.visible = !isOpen;
    }

    if (isOpen) {
      console.log(`[DoorRenderer] Door ${doorId} opened - mesh and label hidden`);
    } else {
      console.log(`[DoorRenderer] Door ${doorId} closed - mesh and label visible`);
    }
  }

  /**
   * Remove a specific door mesh and label (e.g., when door is destroyed)
   */
  public removeDoor(doorId: string): void {
    const mesh = this.doorMeshes.get(doorId);
    if (mesh) {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
      this.doorMeshes.delete(doorId);
    }

    const label = this.labelMeshes.get(doorId);
    if (label) {
      this.scene.remove(label);
      if (label.material.map) {
        label.material.map.dispose();
      }
      label.material.dispose();
      this.labelMeshes.delete(doorId);
    }

    console.log(`[DoorRenderer] Door ${doorId} removed from scene`);
  }

  /**
   * Get all door meshes (for debugging or raycasting)
   */
  public getAllMeshes(): Map<string, THREE.Mesh> {
    return new Map(this.doorMeshes);
  }

  /**
   * Get a specific door mesh by ID
   */
  public getMesh(doorId: string): THREE.Mesh | undefined {
    return this.doorMeshes.get(doorId);
  }

  /**
   * Cleanup all door meshes and labels, dispose resources
   */
  public destroy(): void {
    this.doorMeshes.forEach((mesh) => {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
    });
    this.doorMeshes.clear();

    this.labelMeshes.forEach((label) => {
      this.scene.remove(label);
      if (label.material.map) {
        label.material.map.dispose();
      }
      label.material.dispose();
    });
    this.labelMeshes.clear();

    this.material.dispose();
    console.log(`[DoorRenderer] All door meshes and labels cleaned up`);
  }
}

// Global registry for session-based renderers (multiplayer support)
const doorRenderers: Map<string, DoorRenderer> = new Map();

/**
 * Get or create a DoorRenderer for a specific session/map
 */
export function getDoorRenderer(sessionId: string = 'default'): DoorRenderer {
  if (!doorRenderers.has(sessionId)) {
    throw new Error(`DoorRenderer not initialized for session: ${sessionId}. Call createDoorRenderer first.`);
  }
  return doorRenderers.get(sessionId)!;
}

/**
 * Create a new DoorRenderer for a session
 */
export function createDoorRenderer(sessionId: string, scene: THREE.Scene): DoorRenderer {
  if (doorRenderers.has(sessionId)) {
    console.warn(`[DoorRenderer] Renderer already exists for session: ${sessionId}. Destroying old instance.`);
    doorRenderers.get(sessionId)?.destroy();
  }

  const renderer = new DoorRenderer(scene);
  doorRenderers.set(sessionId, renderer);
  
  // Auto-initialize to spawn all existing doors
  renderer.initialize();

  return renderer;
}

/**
 * Remove a DoorRenderer for a session
 */
export function removeDoorRenderer(sessionId: string): void {
  const renderer = doorRenderers.get(sessionId);
  if (renderer) {
    renderer.destroy();
    doorRenderers.delete(sessionId);
  }
}

/**
 * Clear all DoorRenderers
 */
export function clearAllDoorRenderers(): void {
  doorRenderers.forEach((renderer) => renderer.destroy());
  doorRenderers.clear();
}
