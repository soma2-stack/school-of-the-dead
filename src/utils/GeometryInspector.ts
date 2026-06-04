import * as THREE from 'three';

/**
 * Real Geometry Inspector - Inspects actual rendered meshes in the scene
 * Not just blueprint data, but what's actually being rendered
 */
export interface GeometryInspector {
  /** Enable/disable geometry inspection mode */
  enable(): void;
  /** Disable geometry inspection mode */
  disable(): void;
  /** Toggle inspection mode */
  toggle(): void;
  /** Check if inspector is active */
  isActive(): boolean;
  /** Get current inspected mesh info */
  getInspectedMesh(): InspectedMeshInfo | null;
  /** Print all meshes within range to console */
  inspectAllMeshes(range?: number): void;
  /** Cast ray and return hit mesh (internal use) */
  inspectAtCrosshair(): THREE.Mesh | null;
  /** Update highlight visual (internal use) */
  updateHighlight(mesh: THREE.Mesh | null): void;
}

export interface InspectedMeshInfo {
  meshName: string;
  meshId: string;
  roomId?: string;
  wallId?: string;
  floorId?: string;
  distance: number;
  hasCollision: boolean;
  isVisible: boolean;
  materialOpacity: number;
  normalsFaceInward: boolean;
  bounds: THREE.Box3;
  position: THREE.Vector3;
  rotation: THREE.Euler;
  scale: THREE.Vector3;
  geometryType: string;
  materialType: string;
  vertexCount: number;
  userData: Record<string, unknown>;
}

export function createGeometryInspector(
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera,
  raycaster: THREE.Raycaster
): GeometryInspector {
  let enabled = false;
  let highlightMesh: THREE.Mesh | null = null;
  let wireframeMesh: THREE.LineSegments | null = null;
  let currentInspectedMesh: InspectedMeshInfo | null = null;

  // Create highlight overlay (bright yellow transparent box)
  const highlightMaterial = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.4,
    depthTest: true,
    depthWrite: false,
  });

  // Create wireframe material
  const wireframeMaterial = new THREE.LineBasicMaterial({
    color: 0xffff00,
    linewidth: 2,
  });

  function createHighlightMesh(): THREE.Mesh {
    const geom = new THREE.BoxGeometry(1, 1, 1);
    const mesh = new THREE.Mesh(geom, highlightMaterial.clone());
    mesh.renderOrder = 999;
    return mesh;
  }

  function createWireframeMesh(): THREE.LineSegments {
    const geom = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
    const lines = new THREE.LineSegments(geom, wireframeMaterial);
    lines.renderOrder = 1000;
    return lines;
  }

  function extractRoomInfo(mesh: THREE.Object3D): { roomId?: string; wallId?: string; floorId?: string } {
    const result: { roomId?: string; wallId?: string; floorId?: string } = {};

    // Check userData for room/wall/floor identifiers
    let current: THREE.Object3D | null = mesh;
    while (current) {
      if (current.userData) {
        if (current.userData.roomId) result.roomId = current.userData.roomId;
        if (current.userData.wallId) result.wallId = current.userData.wallId;
        if (current.userData.floorId) result.floorId = current.userData.floorId;
        if (current.userData.type) {
          const type = current.userData.type as string;
          if (type === 'wall' && !result.wallId) {
            result.wallId = `${result.roomId || 'unknown'}_${current.userData.side || 'unknown'}`;
          } else if (type === 'floor' && !result.floorId) {
            result.floorId = `${result.roomId || 'unknown'}_floor`;
          } else if (type === 'ceiling' && !result.floorId) {
            result.floorId = `${result.roomId || 'unknown'}_ceiling`;
          }
        }
      }
      current = current.parent;
    }

    return result;
  }

  function checkNormalsFaceInward(mesh: THREE.Mesh, roomCenter?: THREE.Vector3): boolean {
    const geom = mesh.geometry as THREE.BufferGeometry;
    if (!geom.attributes.position) return false;
    if (!geom.attributes.normal) return false;

    const positions = geom.attributes.position.array as Float32Array;
    const normals = geom.attributes.normal.array as Float32Array;

    // Get world position of mesh
    const worldPos = new THREE.Vector3();
    mesh.getWorldPosition(worldPos);

    // Sample a few faces to determine normal direction
    let inwardCount = 0;
    let totalSamples = 0;

    for (let i = 0; i < Math.min(positions.length, 180); i += 9) { // Sample every 3 vertices (1 face)
      const vx = positions[i];
      const vy = positions[i + 1];
      const vz = positions[i + 2];
      const nx = normals[i];
      const ny = normals[i + 1];
      const nz = normals[i + 2];

      // Vertex world position
      const vertexWorld = new THREE.Vector3(vx, vy, vz);
      vertexWorld.applyMatrix4(mesh.matrixWorld);

      // Normal in world space
      const normalWorld = new THREE.Vector3(nx, ny, nz);
      normalWorld.transformDirection(mesh.matrixWorld).normalize();

      // Direction from vertex to room center (or away from mesh center)
      const targetPoint = roomCenter || worldPos;
      const toCenter = new THREE.Vector3().subVectors(targetPoint, vertexWorld).normalize();

      // If normal points toward center, dot product should be positive
      const dot = normalWorld.dot(toCenter);
      if (dot > 0) inwardCount++;
      totalSamples++;
    }

    // If majority of normals point inward, return true
    return totalSamples > 0 && inwardCount / totalSamples > 0.5;
  }

  function getMeshInfo(mesh: THREE.Mesh, distance: number): InspectedMeshInfo {
    const geom = mesh.geometry as THREE.BufferGeometry;
    const material = mesh.material as THREE.Material | THREE.Material[];
    const mat = Array.isArray(material) ? material[0] : material;

    const bounds = new THREE.Box3().setFromObject(mesh);
    const position = new THREE.Vector3();
    const rotation = new THREE.Euler();
    const scale = new THREE.Vector3();
    mesh.getWorldPosition(position);
    mesh.getWorldRotation(rotation);
    mesh.getWorldScale(scale);

    // Get material opacity
    let materialOpacity = 1.0;
    if (mat) {
      const matAny = mat as any;
      if (matAny.opacity !== undefined) {
        materialOpacity = matAny.opacity;
      }
      if (matAny.transparent && matAny.opacity < 1) {
        materialOpacity = matAny.opacity;
      }
    }

    // Check for collision
    const hasCollision = mesh.userData.hasCollision !== false && 
                         mesh.name.includes('collider') || 
                         mesh.userData.isCollider === true;

    // Extract room/wall/floor info
    const roomInfo = extractRoomInfo(mesh);

    // Check normals
    const normalsFaceInward = checkNormalsFaceInward(mesh);

    return {
      meshName: mesh.name || 'unnamed',
      meshId: mesh.id.toString(),
      roomId: roomInfo.roomId,
      wallId: roomInfo.wallId,
      floorId: roomInfo.floorId,
      distance,
      hasCollision,
      isVisible: mesh.visible,
      materialOpacity,
      normalsFaceInward,
      bounds,
      position,
      rotation,
      scale,
      geometryType: geom.type,
      materialType: mat?.type || 'unknown',
      vertexCount: geom.attributes.position?.count || 0,
      userData: { ...mesh.userData },
    };
  }

  function updateHighlight(mesh: THREE.Mesh | null, distance: number) {
    // Remove old highlights
    if (highlightMesh) {
      scene.remove(highlightMesh);
      highlightMesh = null;
    }
    if (wireframeMesh) {
      scene.remove(wireframeMesh);
      wireframeMesh = null;
    }

    if (!mesh) {
      currentInspectedMesh = null;
      return;
    }

    // Get mesh bounds
    const bounds = new THREE.Box3().setFromObject(mesh);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    bounds.getSize(size);
    bounds.getCenter(center);

    // Create and position highlight mesh
    highlightMesh = createHighlightMesh();
    highlightMesh.scale.copy(size);
    highlightMesh.position.copy(center);
    scene.add(highlightMesh!);

    // Create and position wireframe
    wireframeMesh = createWireframeMesh();
    wireframeMesh.scale.copy(size);
    wireframeMesh.position.copy(center);
    scene.add(wireframeMesh!);

    // Store current inspected mesh info
    currentInspectedMesh = getMeshInfo(mesh, distance);
  }

  function castRay(): THREE.Mesh | null {
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
    
    // Collect all meshes in scene (excluding debug/highlight meshes)
    const allMeshes: THREE.Mesh[] = [];
    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh && 
          obj !== highlightMesh && 
          obj !== wireframeMesh &&
          !obj.name.includes('debug') &&
          !obj.name.includes('highlight')) {
        allMeshes.push(obj);
      }
    });

    const intersects = raycaster.intersectObjects(allMeshes);
    
    if (intersects.length > 0) {
      return intersects[0].object as THREE.Mesh;
    }
    
    return null;
  }

  function inspectAtCrosshair(): THREE.Mesh | null {
    return castRay();
  }

  function enable() {
    enabled = true;
    console.log('[GeometryInspector] Enabled - cast rays from camera to detect rendered meshes');
  }

  function disable() {
    enabled = false;
    updateHighlight(null, 0);
    console.log('[GeometryInspector] Disabled');
  }

  function toggle() {
    if (enabled) disable();
    else enable();
  }

  function isActive(): boolean {
    return enabled;
  }

  function getInspectedMesh(): InspectedMeshInfo | null {
    return currentInspectedMesh;
  }

  function inspectAllMeshes(range: number = 20): void {
    console.log(`\n=== GEOMETRY INSPECTOR: All Meshes Within ${range} Units ===`);
    console.log(`Player Position: (${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)})`);
    console.log('='.repeat(70));

    const playerPos = camera.position;
    const inspectedMeshes: Array<{ mesh: THREE.Mesh; distance: number; info: InspectedMeshInfo }> = [];

    scene.traverse((obj) => {
      if (obj instanceof THREE.Mesh && 
          obj !== highlightMesh && 
          obj !== wireframeMesh &&
          !obj.name.includes('debug') &&
          !obj.name.includes('highlight')) {
        
        const worldPos = new THREE.Vector3();
        obj.getWorldPosition(worldPos);
        const distance = worldPos.distanceTo(playerPos);

        if (distance <= range) {
          const info = getMeshInfo(obj, distance);
          inspectedMeshes.push({ mesh: obj, distance, info });
        }
      }
    });

    // Sort by distance
    inspectedMeshes.sort((a, b) => a.distance - b.distance);

    console.log(`Found ${inspectedMeshes.length} meshes within ${range} units:\n`);

    inspectedMeshes.forEach(({ mesh, distance, info }, idx) => {
      console.log(`\n--- Mesh #${idx + 1} ---`);
      console.log(`  Name: "${info.meshName}" (ID: ${info.meshId})`);
      console.log(`  Distance: ${distance.toFixed(2)} units`);
      console.log(`  Room ID: ${info.roomId || 'N/A'}`);
      console.log(`  Wall ID: ${info.wallId || 'N/A'}`);
      console.log(`  Floor ID: ${info.floorId || 'N/A'}`);
      console.log(`  Position: (${info.position.x.toFixed(2)}, ${info.position.y.toFixed(2)}, ${info.position.z.toFixed(2)})`);
      console.log(`  Bounds Min: (${info.bounds.min.x.toFixed(2)}, ${info.bounds.min.y.toFixed(2)}, ${info.bounds.min.z.toFixed(2)})`);
      console.log(`  Bounds Max: (${info.bounds.max.x.toFixed(2)}, ${info.bounds.max.y.toFixed(2)}, ${info.bounds.max.z.toFixed(2)})`);
      console.log(`  Has Collision: ${info.hasCollision}`);
      console.log(`  Is Visible: ${info.isVisible}`);
      console.log(`  Material Opacity: ${info.materialOpacity.toFixed(2)} ${info.materialOpacity < 1 ? '(TRANSPARENT!)' : ''}`);
      console.log(`  Normals Face Inward: ${info.normalsFaceInward}`);
      console.log(`  Geometry: ${info.geometryType} (${info.vertexCount} vertices)`);
      console.log(`  Material: ${info.materialType}`);
      
      if (Object.keys(info.userData).length > 0) {
        console.log(`  UserData:`, JSON.stringify(info.userData, null, 2));
      }
    });

    console.log('\n' + '='.repeat(70));
    console.log(`Total: ${inspectedMeshes.length} meshes`);
  }

  // Expose global function
  (window as any).inspectGeometry = () => {
    inspectAllMeshes(20);
  };

  return {
    enable,
    disable,
    toggle,
    isActive,
    getInspectedMesh,
    inspectAllMeshes,
  };
}
