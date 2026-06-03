import * as THREE from 'three';
import { getDoorManager } from './doors';

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
 */

export class DoorRenderer {
  private scene: THREE.Scene;
  private doorMeshes: Map<string, THREE.Mesh> = new Map();
  private material: THREE.MeshStandardMaterial;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    
    // Simple brown material for wooden doors
    this.material = new THREE.MeshStandardMaterial({
      color: 0x8B4513, // SaddleBrown
      roughness: 0.8,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
  }

  /**
   * Initialize and spawn meshes for all existing doors
   */
  public initialize(): void {
    const doorManager = getDoorManager();
    const doors = doorManager.getAllDoors();

    console.log(`[DoorRenderer] Initializing ${doors.length} door(s)...`);

    doors.forEach((door) => {
      this.spawnDoorMesh(door);
    });

    console.log(`[DoorRenderer] Initialization complete. ${this.doorMeshes.size} mesh(es) spawned.`);
  }

  /**
   * Spawn a single door mesh
   */
  private spawnDoorMesh(door: { id: string; position: { x: number; y: number; z: number }; width: number; height: number }): void {
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

    // Log spawn information
    console.log(`[DoorRenderer] Door spawned:`);
    console.log(`  - ID: ${door.id}`);
    console.log(`  - Position: (${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)})`);
    console.log(`  - Size: ${door.width.toFixed(2)} x ${door.height.toFixed(2)} x 0.20`);
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

    if (isOpen) {
      console.log(`[DoorRenderer] Door ${doorId} opened - mesh hidden`);
    } else {
      console.log(`[DoorRenderer] Door ${doorId} closed - mesh visible`);
    }
  }

  /**
   * Remove a specific door mesh (e.g., when door is destroyed)
   */
  public removeDoor(doorId: string): void {
    const mesh = this.doorMeshes.get(doorId);
    if (mesh) {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
      this.doorMeshes.delete(doorId);
      console.log(`[DoorRenderer] Door ${doorId} removed from scene`);
    }
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
   * Cleanup all door meshes and dispose resources
   */
  public destroy(): void {
    this.doorMeshes.forEach((mesh) => {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
    });
    this.doorMeshes.clear();
    this.material.dispose();
    console.log(`[DoorRenderer] All door meshes cleaned up`);
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
