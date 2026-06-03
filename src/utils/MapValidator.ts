import * as THREE from 'three';

export interface MapValidationIssue {
  id: string;
  type: 'floor_gap' | 'missing_wall' | 'door_gap' | 'overlap' | 'stair_misalign' | 'void_hole';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  position: THREE.Vector3;
  roomIds?: string[];
  details?: Record<string, any>;
}

export interface ValidationResult {
  issues: MapValidationIssue[];
  scanTime: number;
  totalRoomsScanned: number;
}

const GAP_THRESHOLD = 0.1;

/**
 * Map Validation System - Detects geometry problems in the map
 */
export class MapValidator {
  private issues: MapValidationIssue[] = [];
  private debugMeshes: THREE.Mesh[] = [];
  private scene: THREE.Scene | null = null;
  private isEnabled: boolean = false;
  private roomsData: any[] = [];
  private roomGapsData: Record<string, any[]> = {};
  private doorsData: any[] = [];

  constructor() {}

  /**
   * Set data references for scanning
   */
  public setData(rooms: any[], roomGaps: Record<string, any[]>, doors: any[]): void {
    this.roomsData = rooms;
    this.roomGapsData = roomGaps;
    this.doorsData = doors;
  }

  /**
   * Enable validation mode and highlight issues
   */
  public enable(scene: THREE.Scene): void {
    this.scene = scene;
    this.isEnabled = true;
    this.runFullScan();
  }

  /**
   * Disable validation mode and remove highlights
   */
  public disable(): void {
    this.isEnabled = false;
    this.clearHighlights();
    this.issues = [];
    this.scene = null;
  }

  /**
   * Toggle validation mode
   */
  public toggle(scene: THREE.Scene): boolean {
    if (this.isEnabled) {
      this.disable();
      return false;
    } else {
      this.enable(scene);
      return true;
    }
  }

  /**
   * Run a full map scan and detect all issues
   */
  public runFullScan(): ValidationResult {
    const startTime = performance.now();
    this.issues = [];
    
    if (!this.scene) {
      return { issues: [], scanTime: 0, totalRoomsScanned: 0 };
    }

    // Clear previous highlights
    this.clearHighlights();

    // Scan for floor gaps
    this.scanFloorGaps(this.roomsData, this.roomGapsData);

    // Scan for missing wall sections
    this.scanMissingWalls(this.roomsData, this.roomGapsData);

    // Scan for door gaps
    this.scanDoorGaps(this.doorsData, this.roomGapsData);

    // Scan for overlapping geometry
    this.scanOverlaps(this.roomsData);

    // Scan for stair misalignment
    this.scanStairAlignment(this.roomsData);

    // Scan for void holes
    this.scanVoidHoles(this.roomsData, this.roomGapsData);

    // Highlight all found issues
    this.highlightAllIssues();

    const scanTime = performance.now() - startTime;
    
    return {
      issues: [...this.issues],
      scanTime,
      totalRoomsScanned: this.roomsData.length
    };
  }

  /**
   * Get current issues
   */
  public getIssues(): MapValidationIssue[] {
    return [...this.issues];
  }

  /**
   * Get issue by index
   */
  public getIssue(index: number): MapValidationIssue | null {
    if (index >= 0 && index < this.issues.length) {
      return this.issues[index];
    }
    return null;
  }

  /**
   * Get total issue count
   */
  public getIssueCount(): number {
    return this.issues.length;
  }

  /**
   * Clear all highlight meshes
   */
  private clearHighlights(): void {
    if (!this.scene) return;
    
    for (const mesh of this.debugMeshes) {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
      if (Array.isArray(mesh.material)) {
        mesh.material.forEach(m => m.dispose());
      } else {
        mesh.material.dispose();
      }
    }
    this.debugMeshes = [];
  }

  /**
   * Highlight all detected issues
   */
  private highlightAllIssues(): void {
    for (const issue of this.issues) {
      this.createHighlightMesh(issue);
    }
  }

  /**
   * Create a highlight mesh for an issue
   */
  private createHighlightMesh(issue: MapValidationIssue): void {
    if (!this.scene) return;

    let color: number;
    let geometry: THREE.BoxGeometry;
    let size: number;

    switch (issue.type) {
      case 'floor_gap':
        color = 0xff0000; // Bright red
        size = 1.5;
        break;
      case 'missing_wall':
        color = 0xffff00; // Bright yellow
        size = 2.0;
        break;
      case 'door_gap':
        color = 0x0088ff; // Bright blue
        size = 1.8;
        break;
      case 'overlap':
        color = 0xff00ff; // Purple
        size = 2.5;
        break;
      case 'stair_misalign':
        color = 0xff8800; // Orange
        size = 2.0;
        break;
      case 'void_hole':
        color = 0xff0044; // Red-pink
        size = 2.2;
        break;
      default:
        color = 0xffffff;
        size = 1.0;
    }

    geometry = new THREE.BoxGeometry(size, size * 0.2, size);
    const material = new THREE.MeshBasicMaterial({ 
      color, 
      transparent: true, 
      opacity: 0.7,
      depthTest: false
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(issue.position);
    mesh.position.y += 0.5; // Float slightly above ground
    
    // Add pulsing animation data
    (mesh as any).userData = {
      baseY: mesh.position.y,
      pulseSpeed: 3 + Math.random() * 2,
      pulseOffset: Math.random() * Math.PI * 2
    };

    this.scene.add(mesh);
    this.debugMeshes.push(mesh);
  }

  /**
   * Update highlight animations
   */
  public updateHighlights(time: number): void {
    for (const mesh of this.debugMeshes) {
      const userData = mesh.userData as any;
      if (userData && userData.baseY !== undefined) {
        mesh.position.y = userData.baseY + Math.sin(time * userData.pulseSpeed + userData.pulseOffset) * 0.3;
        mesh.rotation.y += 0.02;
      }
    }
  }

  /**
   * Scan for floor gaps larger than threshold
   */
  private scanFloorGaps(rooms: any[], roomGaps: Record<string, any[]>): void {
    for (const room of rooms) {
      const gaps = roomGaps[room.id] || [];
      
      // Check each gap for potential floor issues
      for (const gap of gaps) {
        const gapWidth = gap.width;
        
        // Floor gaps at doorways are expected, but check for unintended gaps
        // Look for gaps between adjacent room floors
        const adjacentRoom = this.findAdjacentRoom(room, gap.side, rooms);
        
        if (adjacentRoom) {
          const floorHeightDiff = Math.abs(room.floorY - adjacentRoom.floorY);
          
          // Check if there's a significant gap between floor levels
          if (floorHeightDiff > GAP_THRESHOLD && !room.isStaircase && !adjacentRoom.isStaircase) {
            // Calculate gap position
            let gapPos = new THREE.Vector3(room.cx, room.floorY, room.cz);
            
            if (gap.side === 'N') {
              gapPos.z = room.cz + room.d / 2;
              gapPos.x = gap.center + room.cx;
            } else if (gap.side === 'S') {
              gapPos.z = room.cz - room.d / 2;
              gapPos.x = gap.center + room.cx;
            } else if (gap.side === 'E') {
              gapPos.x = room.cx + room.w / 2;
              gapPos.z = gap.center + room.cz;
            } else {
              gapPos.x = room.cx - room.w / 2;
              gapPos.z = gap.center + room.cz;
            }

            this.issues.push({
              id: `floor_gap_${room.id}_${gap.side}_${gap.center}`,
              type: 'floor_gap',
              severity: floorHeightDiff > 2 ? 'high' : 'medium',
              description: `Floor height mismatch between ${room.id} and ${adjacentRoom.id}: ${floorHeightDiff.toFixed(2)} units`,
              position: gapPos,
              roomIds: [room.id, adjacentRoom.id],
              details: { heightDiff: floorHeightDiff, gapWidth }
            });
          }
        }
      }

      // Check for carved floors that might have gaps
      if (room.carvedFloors || room.trapdoors) {
        const carvings = room.carvedFloors || room.trapdoors || [];
        for (const carving of carvings) {
          // Check if carving creates an unintended void exposure
          const carvingBounds = {
            xMin: carving.cx - carving.w / 2,
            xMax: carving.cx + carving.w / 2,
            zMin: carving.cz - carving.d / 2,
            zMax: carving.cz + carving.d / 2
          };

          // Check if this carving is properly covered by another room above/below
          const hasCover = rooms.some(r => 
            r.id !== room.id &&
            r.floorY > room.floorY &&
            r.floorY - room.floorY < 1 &&
            r.cx + r.w / 2 > carvingBounds.xMin &&
            r.cx - r.w / 2 < carvingBounds.xMax &&
            r.cz + r.d / 2 > carvingBounds.zMin &&
            r.cz - r.d / 2 < carvingBounds.zMax
          );

          if (!hasCover && !room.ceilingHoles?.some((h: any) => 
            Math.abs(h.cx - carving.cx) < 0.5 && Math.abs(h.cz - carving.cz) < 0.5
          )) {
            this.issues.push({
              id: `void_hole_${room.id}_${carving.cx}_${carving.cz}`,
              type: 'void_hole',
              severity: 'critical',
              description: `Uncovered floor opening in ${room.id} may expose void`,
              position: new THREE.Vector3(carving.cx, room.floorY, carving.cz),
              roomIds: [room.id],
              details: carving
            });
          }
        }
      }
    }
  }

  /**
   * Scan for missing wall sections
   */
  private scanMissingWalls(rooms: any[], roomGaps: Record<string, any[]>): void {
    for (const room of rooms) {
      const gaps = roomGaps[room.id] || [];
      const disabledWalls = room.disabledWalls || [];

      // Check each wall side
      const sides: Array<{ side: string; axis: 'x' | 'z'; positive: boolean }> = [
        { side: 'N', axis: 'z', positive: true },
        { side: 'S', axis: 'z', positive: false },
        { side: 'E', axis: 'x', positive: true },
        { side: 'W', axis: 'x', positive: false }
      ];

      for (const { side, axis, positive } of sides) {
        if (disabledWalls.includes(side as any)) continue;

        const sideGaps = gaps.filter(g => g.side === side);
        
        // Calculate total gap width on this side
        const totalGapWidth = sideGaps.reduce((sum, g) => sum + g.width, 0);
        const wallLength = axis === 'x' ? room.w : room.d;
        
        // If more than 80% of wall is gaps, might be intentional, otherwise flag large gaps
        for (const gap of sideGaps) {
          if (gap.width > wallLength * 0.5) {
            let gapPos = new THREE.Vector3(room.cx, room.floorY + 4, room.cz);
            
            if (side === 'N') {
              gapPos.z = room.cz + room.d / 2;
              gapPos.x = gap.center + room.cx;
            } else if (side === 'S') {
              gapPos.z = room.cz - room.d / 2;
              gapPos.x = gap.center + room.cx;
            } else if (side === 'E') {
              gapPos.x = room.cx + room.w / 2;
              gapPos.z = gap.center + room.cz;
            } else {
              gapPos.x = room.cx - room.w / 2;
              gapPos.z = gap.center + room.cz;
            }

            // Check if there's an adjacent room that should have a connecting wall
            const adjacentRoom = this.findAdjacentRoom(room, side as any, rooms);
            if (!adjacentRoom && gap.width > 15) {
              this.issues.push({
                id: `missing_wall_${room.id}_${side}_${gap.center}`,
                type: 'missing_wall',
                severity: 'medium',
                description: `Large wall gap (${gap.width.toFixed(1)}u) on ${side} side of ${room.id} with no adjacent room`,
                position: gapPos,
                roomIds: [room.id],
                details: { gap, wallLength, totalGapWidth }
              });
            }
          }
        }
      }
    }
  }

  /**
   * Scan for doors that don't fully cover their doorways
   */
  private scanDoorGaps(doors: any[], roomGaps: Record<string, any[]>): void {
    for (const door of doors) {
      const gaps = roomGaps[door.roomId] || [];
      const gap = gaps.find(g => g.side === door.side);
      
      if (!gap) continue;

      // Check if door width matches gap width
      const widthDiff = Math.abs(door.w - gap.width);
      
      if (widthDiff > GAP_THRESHOLD) {
        let doorPos = new THREE.Vector3(door.x, door.h / 2, door.z);
        
        this.issues.push({
          id: `door_gap_${door.id}`,
          type: 'door_gap',
          severity: widthDiff > 1 ? 'high' : 'low',
          description: `Door "${door.name}" width (${door.w.toFixed(1)}) doesn't match gap width (${gap.width.toFixed(1)}). Difference: ${widthDiff.toFixed(2)}u`,
          position: doorPos,
          roomIds: [door.roomId],
          details: { doorWidth: door.w, gapWidth: gap.width, difference: widthDiff }
        });
      }

      // Check door height vs room height
      const room = { id: door.roomId }; // Simplified - would need actual room data
      // Height check could be added here if room data is available
    }
  }

  /**
   * Scan for overlapping geometry
   */
  private scanOverlaps(rooms: any[]): void {
    for (let i = 0; i < rooms.length; i++) {
      for (let j = i + 1; j < rooms.length; j++) {
        const r1 = rooms[i];
        const r2 = rooms[j];

        // Skip if different floor levels (unless stairs)
        if (Math.abs(r1.floorY - r2.floorY) > 1 && !r1.isStaircase && !r2.isStaircase) continue;

        // Check bounding box overlap
        const r1Bounds = {
          xMin: r1.cx - r1.w / 2,
          xMax: r1.cx + r1.w / 2,
          zMin: r1.cz - r1.d / 2,
          zMax: r1.cz + r1.d / 2
        };

        const r2Bounds = {
          xMin: r2.cx - r2.w / 2,
          xMax: r2.cx + r2.w / 2,
          zMin: r2.cz - r2.d / 2,
          zMax: r2.cz + r2.d / 2
        };

        const overlapsX = r1Bounds.xMax > r2Bounds.xMin && r1Bounds.xMin < r2Bounds.xMax;
        const overlapsZ = r1Bounds.zMax > r2Bounds.zMin && r1Bounds.zMin < r2Bounds.zMax;

        if (overlapsX && overlapsZ) {
          // Calculate overlap center
          const overlapCenter = new THREE.Vector3(
            (Math.max(r1Bounds.xMin, r2Bounds.xMin) + Math.min(r1Bounds.xMax, r2Bounds.xMax)) / 2,
            Math.max(r1.floorY, r2.floorY) + 2,
            (Math.max(r1Bounds.zMin, r2Bounds.zMin) + Math.min(r1Bounds.zMax, r2Bounds.zMax)) / 2
          );

          // Check if this is intentional (stairs, connected rooms, etc.)
          const isIntentional = 
            r1.isStaircase || r2.isStaircase ||
            (r1.trapdoors && r2.ceilingHoles) ||
            Math.abs(r1.floorY - r2.floorY) >= r1.h;

          if (!isIntentional) {
            this.issues.push({
              id: `overlap_${r1.id}_${r2.id}`,
              type: 'overlap',
              severity: 'high',
              description: `Geometry overlap between ${r1.id} and ${r2.id}`,
              position: overlapCenter,
              roomIds: [r1.id, r2.id],
              details: { room1: r1.id, room2: r2.id }
            });
          }
        }
      }
    }
  }

  /**
   * Scan for stair misalignment
   */
  private scanStairAlignment(rooms: any[]): void {
    const staircases = rooms.filter(r => r.isStaircase);

    for (const stair of staircases) {
      const climbHeight = stair.climbHeight || stair.h;
      const targetFloorY = stair.floorY + climbHeight;

      // Find rooms at the target floor level that should connect
      const connectedRooms = rooms.filter(r => 
        r.id !== stair.id &&
        Math.abs(r.floorY - targetFloorY) < 0.5 &&
        this.roomsAreAdjacent(stair, r)
      );

      if (connectedRooms.length === 0) {
        // Stair doesn't connect to any room at its top level
        this.issues.push({
          id: `stair_misalign_${stair.id}`,
          type: 'stair_misalign',
          severity: 'medium',
          description: `Staircase "${stair.id}" climbs to Y=${targetFloorY} but no adjacent room found at that level`,
          position: new THREE.Vector3(stair.cx, targetFloorY - 2, stair.cz),
          roomIds: [stair.id],
          details: { climbHeight, targetFloorY, stairDirection: stair.stairDirection }
        });
      }

      // Check stair direction consistency
      if (stair.stairDirection) {
        const dir = stair.stairDirection;
        // Verify the stair orientation makes sense with connected rooms
        // This is a basic check - could be enhanced with more sophisticated logic
      }
    }
  }

  /**
   * Scan for holes to the void
   */
  private scanVoidHoles(rooms: any[], roomGaps: Record<string, any[]>): void {
    // Already handled in scanFloorGaps for carved floors
    // Additional checks for edge-of-map gaps
    
    const mapBounds = { xMin: -200, xMax: 200, zMin: -200, zMax: 200 };

    for (const room of rooms) {
      const gaps = roomGaps[room.id] || [];
      
      for (const gap of gaps) {
        // Calculate world position of gap
        let gapWorldX = room.cx;
        let gapWorldZ = room.cz;

        if (gap.side === 'N') {
          gapWorldZ = room.cz + room.d / 2;
          gapWorldX = gap.center + room.cx;
        } else if (gap.side === 'S') {
          gapWorldZ = room.cz - room.d / 2;
          gapWorldX = gap.center + room.cx;
        } else if (gap.side === 'E') {
          gapWorldX = room.cx + room.w / 2;
          gapWorldZ = gap.center + room.cz;
        } else {
          gapWorldX = room.cx - room.w / 2;
          gapWorldZ = gap.center + room.cz;
        }

        // Check if gap is at map edge (potential void exposure)
        const atMapEdge = 
          gapWorldX < mapBounds.xMin + 10 ||
          gapWorldX > mapBounds.xMax - 10 ||
          gapWorldZ < mapBounds.zMin + 10 ||
          gapWorldZ > mapBounds.zMax - 10;

        if (atMapEdge) {
          const adjacentRoom = this.findAdjacentRoom(room, gap.side as any, rooms);
          if (!adjacentRoom) {
            this.issues.push({
              id: `void_edge_${room.id}_${gap.side}`,
              type: 'void_hole',
              severity: 'critical',
              description: `Gap on ${gap.side} side of ${room.id} is at map edge with no adjacent room - exposes void`,
              position: new THREE.Vector3(gapWorldX, room.floorY + 2, gapWorldZ),
              roomIds: [room.id],
              details: { gap, atMapEdge: true }
            });
          }
        }
      }
    }
  }

  /**
   * Find adjacent room in a given direction
   */
  private findAdjacentRoom(room: any, side: 'N' | 'S' | 'E' | 'W', rooms: any[]): any | null {
    let searchCx = room.cx;
    let searchCz = room.cz;
    const tolerance = 5;

    if (side === 'N') {
      searchCz = room.cz + room.d / 2 + 1;
    } else if (side === 'S') {
      searchCz = room.cz - room.d / 2 - 1;
    } else if (side === 'E') {
      searchCx = room.cx + room.w / 2 + 1;
    } else {
      searchCx = room.cx - room.w / 2 - 1;
    }

    return rooms.find(r => 
      r.id !== room.id &&
      Math.abs(r.cx - searchCx) < tolerance &&
      Math.abs(r.cz - searchCz) < tolerance
    ) || null;
  }

  /**
   * Check if two rooms are adjacent (share a boundary)
   */
  private roomsAreAdjacent(r1: any, r2: any): boolean {
    const r1Bounds = {
      xMin: r1.cx - r1.w / 2,
      xMax: r1.cx + r1.w / 2,
      zMin: r1.cz - r1.d / 2,
      zMax: r1.cz + r1.d / 2
    };

    const r2Bounds = {
      xMin: r2.cx - r2.w / 2,
      xMax: r2.cx + r2.w / 2,
      zMin: r2.cz - r2.d / 2,
      zMax: r2.cz + r2.d / 2
    };

    // Check if boundaries touch or nearly touch
    const xTouch = Math.abs(r1Bounds.xMax - r2Bounds.xMin) < 2 || 
                   Math.abs(r1Bounds.xMin - r2Bounds.xMax) < 2;
    const zTouch = Math.abs(r1Bounds.zMax - r2Bounds.zMin) < 2 || 
                   Math.abs(r1Bounds.zMin - r2Bounds.zMax) < 2;

    // Also check for overlapping boundaries
    const xOverlap = r1Bounds.xMax > r2Bounds.xMin - 2 && r1Bounds.xMin < r2Bounds.xMax + 2;
    const zOverlap = r1Bounds.zMax > r2Bounds.zMin - 2 && r1Bounds.zMin < r2Bounds.zMax + 2;

    return (xTouch || xOverlap) && (zTouch || zOverlap);
  }
}

// Singleton instance
let validatorInstance: MapValidator | null = null;

export function getMapValidator(): MapValidator {
  if (!validatorInstance) {
    validatorInstance = new MapValidator();
  }
  return validatorInstance;
}
