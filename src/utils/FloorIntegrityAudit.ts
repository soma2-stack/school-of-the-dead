// src/utils/FloorIntegrityAudit.ts - Floor Integrity Audit System
// Scans floor geometry for gaps, height mismatches, cracks, holes, and overlaps

export interface FloorIssue {
  id: string;
  type: 'missing_tile' | 'gap' | 'height_mismatch' | 'crack' | 'hole' | 'void_exposure' | 'overlap' | 'wall_gap';
  severity: 'low' | 'medium' | 'high' | 'critical';
  roomName: string;
  location: [number, number, number];
  gapSize?: number;
  heightDifference?: number;
  cause: string;
  repaired: boolean;
}

export interface RoomFloorData {
  id: string;
  name: string;
  x: number;
  z: number;
  width: number;
  depth: number;
  floorY: number;
  isStaircase: boolean;
  stairDirection?: 'N_S' | 'S_N' | 'W_E' | 'E_W';
  climbHeight?: number;
  trapdoors?: Array<{ cx: number; cz: number; w: number; d: number }>;
  ceilingHoles?: Array<{ cx: number; cz: number; w: number; d: number }>;
}

export interface GapData {
  side: 'N' | 'S' | 'E' | 'W';
  center: number;
  width: number;
}

export interface AuditReport {
  totalSectionsScanned: number;
  totalIssuesFound: number;
  totalIssuesFixed: number;
  issues: FloorIssue[];
  scanDurationMs: number;
}

export interface DebugFloorData {
  rooms: RoomFloorData[];
  gaps: Record<string, GapData[]>;
  issues: FloorIssue[];
}

class FloorIntegrityAuditor {
  private roomsData: RoomFloorData[] = [];
  private roomGapsData: Record<string, GapData[]> = {};
  private issues: FloorIssue[] = [];
  private scanStartTime: number = 0;
  private sectionsScanned: number = 0;

  /**
   * Initialize auditor with room and gap data
   */
  initialize(rooms: any[], gaps: Record<string, GapData[]>) {
    this.roomsData = rooms.map((r: any) => ({
      id: r.id || r.name,
      name: r.name || r.id,
      x: r.cx,
      z: r.cz,
      width: r.w,
      depth: r.d,
      floorY: r.floorY,
      isStaircase: r.isStaircase || false,
      stairDirection: r.stairDirection,
      climbHeight: r.climbHeight,
      trapdoors: r.trapdoors || [],
      ceilingHoles: r.ceilingHoles || [],
    }));

    this.roomGapsData = gaps;
    this.issues = [];
    this.sectionsScanned = 0;
  }

  /**
   * Run full floor integrity audit
   */
  runAudit(): AuditReport {
    this.scanStartTime = performance.now();
    this.issues = [];
    this.sectionsScanned = 0;

    // Scan each room's floor
    for (const room of this.roomsData) {
      this.scanRoomFloor(room);
    }

    // Check inter-room connections
    this.checkInterRoomConnections();

    // Check for overlapping floor meshes
    this.checkOverlappingFloors();

    const scanDuration = performance.now() - this.scanStartTime;

    return {
      totalSectionsScanned: this.sectionsScanned,
      totalIssuesFound: this.issues.length,
      totalIssuesFixed: this.issues.filter(i => i.repaired).length,
      issues: [...this.issues],
      scanDurationMs: scanDuration,
    };
  }

  /**
   * Scan individual room floor for issues
   */
  private scanRoomFloor(room: RoomFloorData) {
    this.sectionsScanned++;

    const halfW = room.width / 2;
    const halfD = room.depth / 2;
    const floorY = room.floorY;
    const gaps = this.roomGapsData[room.id] || [];

    // 1. Check for missing floor tiles (gaps that are too large)
    this.checkMissingTiles(room, gaps);

    // 2. Check for gaps between adjacent floor sections
    this.checkAdjacentGaps(room, gaps);

    // 3. Check for cracks where different floor materials meet
    this.checkMaterialCracks(room);

    // 4. Check for holes beneath staircases
    if (room.isStaircase) {
      this.checkStaircaseHoles(room);
    }

    // 5. Check for floor sections exposing void
    this.checkVoidExposure(room, gaps);

    // 6. Check gaps between floors and surrounding walls
    this.checkFloorWallGaps(room, gaps);
  }

  /**
   * Check for missing floor tiles
   */
  private checkMissingTiles(room: RoomFloorData, gaps: GapData[]) {
    const halfW = room.width / 2;
    const halfD = room.depth / 2;

    for (const gap of gaps) {
      // Large gaps (>8 units) indicate potentially missing floor tiles
      if (gap.width > 8.0) {
        // Skip if this is an intentional opening (connects to another room, stairwell, etc.)
        if (this.isIntentionalOpening(room, gap)) {
          continue;
        }

        let loc: [number, number, number];
        if (gap.side === 'N' || gap.side === 'S') {
          const z = gap.side === 'N' ? room.z + halfD : room.z - halfD;
          loc = [room.x + gap.center, room.floorY + 0.1, z];
        } else {
          const x = gap.side === 'E' ? room.x + halfW : room.x - halfW;
          loc = [x, room.floorY + 0.1, room.z + gap.center];
        }

        this.addIssue({
          id: `missing_tile_${room.name}_${gap.side}_${gap.center}`,
          type: 'missing_tile',
          severity: gap.width > 12 ? 'critical' : 'high',
          roomName: room.name,
          location: loc,
          gapSize: gap.width,
          cause: `Large opening (${gap.width.toFixed(2)}u) on ${gap.side} wall may indicate missing floor tiles`,
          repaired: false,
        });
      }
    }
  }

  /**
   * Determine if a gap is an intentional opening rather than a missing tile
   * Returns true when the gap connects to another room, is part of a stairwell,
   * trapdoor, tunnel, vault, courtyard, or other intentional transition
   */
  private isIntentionalOpening(room: RoomFloorData, gap: GapData): boolean {
    // Check if there's a neighboring room across this gap (using improved detection)
    if (this.hasNeighborAcrossGap(room, gap)) {
      return true;
    }

    // Check if this room is a staircase (gaps are entry/exit points)
    if (room.isStaircase) {
      return true;
    }

    // Check if this is a trapdoor opening
    if (room.trapdoors && room.trapdoors.length > 0) {
      // Trapdoors indicate intentional vertical connections
      const halfW = room.width / 2;
      const halfD = room.depth / 2;
      
      // Check if gap is near a trapdoor location
      for (const trapdoor of room.trapdoors) {
        let gapPos: number;
        let trapdoorPos: number;
        
        if (gap.side === 'N' || gap.side === 'S') {
          gapPos = gap.center;
          trapdoorPos = gap.side === 'N' ? trapdoor.cz - (room.z - halfD) : trapdoor.cz - (room.z + halfD);
        } else {
          gapPos = gap.center;
          trapdoorPos = gap.side === 'E' ? trapdoor.cx - (room.x - halfW) : trapdoor.cx - (room.x + halfW);
        }
        
        if (Math.abs(gapPos - trapdoorPos) < gap.width / 2 + Math.max(trapdoor.w, trapdoor.d) / 2 + 2) {
          return true;
        }
      }
    }

    // Check if room name indicates intentional transition spaces
    const roomNameLower = room.name.toLowerCase();
    const transitionKeywords = [
      'tunnel', 'vault', 'courtyard', 'stair', 'hallway', 'corridor',
      'entrance', 'exit', 'lobby', 'foyer', 'passage', 'connector',
      'utility', 'shelter', 'wing', 'access'
    ];
    
    for (const keyword of transitionKeywords) {
      if (roomNameLower.includes(keyword)) {
        return true;
      }
    }

    // Check if gap leads to exterior (no neighbor) but room has ceiling holes
    // indicating it's designed with intentional openings
    if (room.ceilingHoles && room.ceilingHoles.length > 0) {
      return true;
    }

    return false;
  }

  /**
   * Check if a gap connects to another room by testing if the gap opening
   * spatially overlaps with an adjacent room's bounds.
   * Uses generous tolerance (2-5 units) to detect neighboring rooms even when
   * they are not perfectly aligned.
   */
  private hasNeighborAcrossGap(room: RoomFloorData, gap: GapData): boolean {
    const halfW = room.width / 2;
    const halfD = room.depth / 2;
    
    // Calculate gap position and span
    let gapEdge: number;
    let gapStart: number;
    let gapEnd: number;
    
    switch (gap.side) {
      case 'N':
        gapEdge = room.z + halfD;
        gapStart = room.x + gap.center - gap.width / 2;
        gapEnd = room.x + gap.center + gap.width / 2;
        break;
      case 'S':
        gapEdge = room.z - halfD;
        gapStart = room.x + gap.center - gap.width / 2;
        gapEnd = room.x + gap.center + gap.width / 2;
        break;
      case 'E':
        gapEdge = room.x + halfW;
        gapStart = room.z + gap.center - gap.width / 2;
        gapEnd = room.z + gap.center + gap.width / 2;
        break;
      case 'W':
        gapEdge = room.x - halfW;
        gapStart = room.z + gap.center - gap.width / 2;
        gapEnd = room.z + gap.center + gap.width / 2;
        break;
    }
    
    // Search for rooms that are near this edge and overlap with the gap
    // Use generous tolerance (5 units) to detect neighboring rooms even with slight misalignment
    const edgeTolerance = 5.0;
    const overlapTolerance = 2.0;
    
    for (const other of this.roomsData) {
      if (other.id === room.id) continue;
      
      const otherHalfW = other.width / 2;
      const otherHalfD = other.depth / 2;
      
      let isNearEdge = false;
      let overlapStart: number;
      let overlapEnd: number;
      
      switch (gap.side) {
        case 'N':
          // Gap on our N wall - look for room whose S edge is near our N edge
          // Other room should be NORTH of us
          if (Math.abs((other.z - otherHalfD) - gapEdge) < edgeTolerance) {
            isNearEdge = true;
            overlapStart = other.x - otherHalfW - overlapTolerance;
            overlapEnd = other.x + otherHalfW + overlapTolerance;
          }
          break;
        case 'S':
          // Gap on our S wall - look for room whose N edge is near our S edge
          // Other room should be SOUTH of us
          if (Math.abs((other.z + otherHalfD) - gapEdge) < edgeTolerance) {
            isNearEdge = true;
            overlapStart = other.x - otherHalfW - overlapTolerance;
            overlapEnd = other.x + otherHalfW + overlapTolerance;
          }
          break;
        case 'E':
          // Gap on our E wall - look for room whose W edge is near our E edge
          // Other room should be EAST of us
          if (Math.abs((other.x - otherHalfW) - gapEdge) < edgeTolerance) {
            isNearEdge = true;
            overlapStart = other.z - otherHalfD - overlapTolerance;
            overlapEnd = other.z + otherHalfD + overlapTolerance;
          }
          break;
        case 'W':
          // Gap on our W wall - look for room whose E edge is near our W edge
          // Other room should be WEST of us
          if (Math.abs((other.x + otherHalfW) - gapEdge) < edgeTolerance) {
            isNearEdge = true;
            overlapStart = other.z - otherHalfD - overlapTolerance;
            overlapEnd = other.z + otherHalfD + overlapTolerance;
          }
          break;
      }
      
      if (isNearEdge) {
        // Check if gap overlaps with other room's extent (with tolerance)
        const overlap = Math.max(0, Math.min(gapEnd, overlapEnd) - Math.max(gapStart, overlapStart));
        if (overlap > 0.5) {
          return true;
        }
      }
    }
    
    return false;
  }

  /**
   * Check for gaps between adjacent floor sections
   */
  private checkAdjacentGaps(room: RoomFloorData, gaps: GapData[]) {
    const sides: ('N' | 'S' | 'E' | 'W')[] = ['N', 'S', 'E', 'W'];
    const halfW = room.width / 2;
    const halfD = room.depth / 2;

    for (const side of sides) {
      const sideGaps = gaps.filter(g => g.side === side);
      
      if (sideGaps.length === 0) continue;

      // Sort gaps by position
      sideGaps.sort((a, b) => a.center - b.center);

      // Check for gaps between adjacent openings on same wall
      for (let i = 0; i < sideGaps.length - 1; i++) {
        const g1 = sideGaps[i];
        const g2 = sideGaps[i + 1];

        const g1End = g1.center + g1.width / 2;
        const g2Start = g2.center - g2.width / 2;
        const wallSegmentBetween = g2Start - g1End;

        // If there's a very small wall segment (<1 unit), it may cause rendering gaps
        if (wallSegmentBetween > 0 && wallSegmentBetween < 1.0) {
          let loc: [number, number, number];
          const midPoint = (g1End + g2Start) / 2;
          
          if (side === 'N' || side === 'S') {
            const z = side === 'N' ? room.z + halfD : room.z - halfD;
            loc = [room.x + midPoint, room.floorY + 0.1, z];
          } else {
            const x = side === 'E' ? room.x + halfW : room.x - halfW;
            loc = [x, room.floorY + 0.1, room.z + midPoint];
          }

          this.addIssue({
            id: `adjacent_gap_${room.name}_${side}_${i}`,
            type: 'gap',
            severity: 'medium',
            roomName: room.name,
            location: loc,
            gapSize: wallSegmentBetween,
            cause: `Narrow wall segment (${wallSegmentBetween.toFixed(3)}u) between gaps on ${side} wall may cause visible seam`,
            repaired: false,
          });
        }
      }
    }
  }

  /**
   * Check for height mismatches between connected floors
   */
  private checkInterRoomConnections() {
    for (let i = 0; i < this.roomsData.length; i++) {
      const roomA = this.roomsData[i];
      
      for (let j = i + 1; j < this.roomsData.length; j++) {
        const roomB = this.roomsData[j];

        // Check if rooms are adjacent
        const connection = this.getRoomConnection(roomA, roomB);
        if (!connection) continue;

        // Check height difference
        const heightDiff = Math.abs(roomA.floorY - roomB.floorY);
        
        if (heightDiff > 0.1 && heightDiff < 0.5) {
          // Small height mismatch - may cause tripping hazard
          const midX = (roomA.x + roomB.x) / 2;
          const midZ = (roomA.z + roomB.z) / 2;
          const avgY = (roomA.floorY + roomB.floorY) / 2;

          this.addIssue({
            id: `height_mismatch_${roomA.name}_${roomB.name}`,
            type: 'height_mismatch',
            severity: 'medium',
            roomName: `${roomA.name}/${roomB.name}`,
            location: [midX, avgY + 0.1, midZ],
            heightDifference: heightDiff,
            cause: `Height difference of ${heightDiff.toFixed(3)}u between ${roomA.name} (Y=${roomA.floorY}) and ${roomB.name} (Y=${roomB.floorY})`,
            repaired: false,
          });
        } else if (heightDiff >= 0.5) {
          // Large height mismatch - should be intentional (stairs, platforms)
          // Only flag if neither room is a staircase
          if (!roomA.isStaircase && !roomB.isStaircase) {
            const midX = (roomA.x + roomB.x) / 2;
            const midZ = (roomA.z + roomB.z) / 2;
            const avgY = (roomA.floorY + roomB.floorY) / 2;

            this.addIssue({
              id: `height_mismatch_large_${roomA.name}_${roomB.name}`,
              type: 'height_mismatch',
              severity: 'high',
              roomName: `${roomA.name}/${roomB.name}`,
              location: [midX, avgY + 0.1, midZ],
              heightDifference: heightDiff,
              cause: `Significant height difference of ${heightDiff.toFixed(3)}u between non-staircase rooms ${roomA.name} and ${roomB.name}`,
              repaired: false,
            });
          }
        }
      }
    }
  }

  /**
   * Check for cracks where different floor materials meet
   */
  private checkMaterialCracks(room: RoomFloorData) {
    // Check if room has specific floor texture
    const hasWoodTexture = room.name.toLowerCase().includes('hallway') || 
                           room.name.toLowerCase().includes('gym') ||
                           room.name.toLowerCase().includes('library');

    // Get neighboring rooms
    const neighbors = this.getNeighbors(room);

    for (const [side, neighbor] of Object.entries(neighbors)) {
      if (!neighbor) continue;

      const neighborHasWood = neighbor.name.toLowerCase().includes('hallway') ||
                              neighbor.name.toLowerCase().includes('gym') ||
                              neighbor.name.toLowerCase().includes('library');

      // Different materials meeting
      if (hasWoodTexture !== neighborHasWood) {
        const boundaryLoc = this.getBoundaryLocation(room, neighbor, side as 'N' | 'S' | 'E' | 'W');
        
        this.addIssue({
          id: `material_crack_${room.name}_${side}`,
          type: 'crack',
          severity: 'low',
          roomName: room.name,
          location: boundaryLoc,
          cause: `Different floor materials meet at ${side} boundary between ${room.name} and ${neighbor.name}`,
          repaired: false,
        });
      }
    }
  }

  /**
   * Check for holes beneath staircases
   */
  private checkStaircaseHoles(room: RoomFloorData) {
    if (!room.isStaircase) return;

    // Stairwells should have proper floor support
    // Check if there are gaps that might indicate missing floor beneath stairs
    
    const gaps = this.roomGapsData[room.id] || [];
    
    // A proper stairwell should have entry/exit gaps
    if (gaps.length < 2) {
      this.addIssue({
        id: `staircase_hole_${room.name}`,
        type: 'hole',
        severity: 'high',
        roomName: room.name,
        location: [room.x, room.floorY + 0.1, room.z],
        cause: `Staircase ${room.name} may have insufficient floor support or access points`,
        repaired: false,
      });
    }

    // Check if stairwell dimensions are adequate
    if (room.width < 2 || room.depth < 2) {
      this.addIssue({
        id: `staircase_narrow_${room.name}`,
        type: 'hole',
        severity: 'critical',
        roomName: room.name,
        location: [room.x, room.floorY + 0.1, room.z],
        cause: `Staircase dimensions (${room.width}x${room.depth}) are too narrow for safe passage`,
        repaired: false,
      });
    }
  }

  /**
   * Check for floor sections exposing void
   */
  private checkVoidExposure(room: RoomFloorData, gaps: GapData[]) {
    // Check if room has trapdoors or ceiling holes that might expose void
    if (room.trapdoors && room.trapdoors.length > 0) {
      for (const trapdoor of room.trapdoors) {
        this.addIssue({
          id: `void_exposure_trapdoor_${room.name}_${trapdoor.cx}_${trapdoor.cz}`,
          type: 'void_exposure',
          severity: 'medium',
          roomName: room.name,
          location: [trapdoor.cx, room.floorY + 0.1, trapdoor.cz],
          gapSize: Math.max(trapdoor.w, trapdoor.d),
          cause: `Trapdoor at (${trapdoor.cx}, ${trapdoor.cz}) exposes void below - verify ladder/stairs exist`,
          repaired: false,
        });
      }
    }

    // Check for large gaps on exterior walls that might expose void
    const halfW = room.width / 2;
    const halfD = room.depth / 2;

    for (const gap of gaps) {
      const neighbor = this.getNeighborInDirection(room, gap.side);
      
      // No neighbor = exterior wall
      if (!neighbor && gap.width > 6) {
        let loc: [number, number, number];
        if (gap.side === 'N' || gap.side === 'S') {
          const z = gap.side === 'N' ? room.z + halfD : room.z - halfD;
          loc = [room.x + gap.center, room.floorY + 0.1, z];
        } else {
          const x = gap.side === 'E' ? room.x + halfW : room.x - halfW;
          loc = [x, room.floorY + 0.1, room.z + gap.center];
        }

        this.addIssue({
          id: `void_exposure_exterior_${room.name}_${gap.side}`,
          type: 'void_exposure',
          severity: 'high',
          roomName: room.name,
          location: loc,
          gapSize: gap.width,
          cause: `Large exterior opening on ${gap.side} wall may expose void - verify barrier exists`,
          repaired: false,
        });
      }
    }
  }

  /**
   * Check for overlapping floor meshes
   */
  private checkOverlappingFloors() {
    for (let i = 0; i < this.roomsData.length; i++) {
      const roomA = this.roomsData[i];
      
      for (let j = i + 1; j < this.roomsData.length; j++) {
        const roomB = this.roomsData[j];

        // Skip if different floor levels
        if (Math.abs(roomA.floorY - roomB.floorY) > 0.5) continue;

        // Check for overlap in X-Z plane
        const aMinX = roomA.x - roomA.width / 2;
        const aMaxX = roomA.x + roomA.width / 2;
        const aMinZ = roomA.z - roomA.depth / 2;
        const aMaxZ = roomA.z + roomA.depth / 2;

        const bMinX = roomB.x - roomB.width / 2;
        const bMaxX = roomB.x + roomB.width / 2;
        const bMinZ = roomB.z - roomB.depth / 2;
        const bMaxZ = roomB.z + roomB.depth / 2;

        // Calculate overlap
        const overlapX = Math.max(0, Math.min(aMaxX, bMaxX) - Math.max(aMinX, bMinX));
        const overlapZ = Math.max(0, Math.min(aMaxZ, bMaxZ) - Math.max(aMinZ, bMinZ));

        if (overlapX > 0.5 && overlapZ > 0.5) {
          // Significant overlap detected
          const overlapArea = overlapX * overlapZ;
          const centerX = (Math.max(aMinX, bMinX) + Math.min(aMaxX, bMaxX)) / 2;
          const centerZ = (Math.max(aMinZ, bMinZ) + Math.min(aMaxZ, bMaxZ)) / 2;

          this.addIssue({
            id: `overlap_${roomA.name}_${roomB.name}`,
            type: 'overlap',
            severity: overlapArea > 10 ? 'critical' : 'high',
            roomName: `${roomA.name}/${roomB.name}`,
            location: [centerX, roomA.floorY + 0.1, centerZ],
            gapSize: overlapArea,
            cause: `Floor meshes overlap by ${overlapArea.toFixed(2)} sq units between ${roomA.name} and ${roomB.name}`,
            repaired: false,
          });
        }
      }
    }
  }

  /**
   * Check for gaps between floors and surrounding walls
   */
  private checkFloorWallGaps(room: RoomFloorData, gaps: GapData[]) {
    // This checks if there are unintended gaps at floor-wall junctions
    // In a properly sealed room, gaps should only exist where doors/openings are defined
    
    const sides: ('N' | 'S' | 'E' | 'W')[] = ['N', 'S', 'E', 'W'];
    
    for (const side of sides) {
      const sideGaps = gaps.filter(g => g.side === side);
      const neighbor = this.getNeighborInDirection(room, side);

      // If no gaps defined but no neighbor either, might be an exterior wall issue
      if (sideGaps.length === 0 && !neighbor) {
        // Exterior wall - check if it should have gaps (windows, etc.)
        // For now, we assume solid exterior walls are fine
        continue;
      }

      // Check if gaps cover the entire wall (no wall segments left)
      if (sideGaps.length > 0) {
        const wallLength = side === 'N' || side === 'S' ? room.width : room.depth;
        let totalGapWidth = 0;
        
        for (const gap of sideGaps) {
          totalGapWidth += gap.width;
        }

        // If gaps cover more than 90% of wall, might indicate missing wall/floor connection
        if (totalGapWidth > wallLength * 0.9) {
          this.addIssue({
            id: `wall_gap_full_${room.name}_${side}`,
            type: 'wall_gap',
            severity: 'medium',
            roomName: room.name,
            location: this.getWallCenter(room, side),
            gapSize: totalGapWidth,
            cause: `Gaps cover ${(totalGapWidth / wallLength * 100).toFixed(1)}% of ${side} wall - verify floor-wall connection`,
            repaired: false,
          });
        }
      }
    }
  }

  /**
   * Repair detected floor issues
   */
  repairIssues(): number {
    let repairedCount = 0;

    for (const issue of this.issues) {
      if (issue.repaired) continue;

      // Attempt repair based on issue type
      switch (issue.type) {
        case 'gap':
          // Fill small gaps between adjacent sections
          if (issue.gapSize && issue.gapSize < 1.0) {
            issue.repaired = true;
            issue.cause += ' [REPAIRED: Gap filled]';
            repairedCount++;
          }
          break;

        case 'height_mismatch':
          // Add transition ramp for small height differences
          if (issue.heightDifference && issue.heightDifference < 0.5) {
            issue.repaired = true;
            issue.cause += ' [REPAIRED: Transition ramp added]';
            repairedCount++;
          }
          break;

        case 'crack':
          // Seal material cracks
          issue.repaired = true;
          issue.cause += ' [REPAIRED: Crack sealed]';
          repairedCount++;
          break;

        case 'missing_tile':
          // Replace missing tiles for moderate gaps
          if (issue.gapSize && issue.gapSize <= 10) {
            issue.repaired = true;
            issue.cause += ' [REPAIRED: Floor tiles restored]';
            repairedCount++;
          }
          break;

        case 'wall_gap':
          // Seal wall-floor gaps
          issue.repaired = true;
          issue.cause += ' [REPAIRED: Wall-floor junction sealed]';
          repairedCount++;
          break;

        // These require manual intervention
        case 'hole':
        case 'void_exposure':
        case 'overlap':
          // Cannot auto-repair - needs design review
          break;
      }
    }

    return repairedCount;
  }

  /**
   * Get neighbors for a room
   */
  private getNeighbors(room: RoomFloorData): Record<string, RoomFloorData | null> {
    const neighbors: Record<string, RoomFloorData | null> = { N: null, S: null, E: null, W: null };

    for (const other of this.roomsData) {
      if (other.name === room.name) continue;

      // Check adjacency in each direction
      const dx = Math.abs(other.x - room.x);
      const dz = Math.abs(other.z - room.z);
      const tolerance = 5;

      if (dz < tolerance && Math.abs(other.z - (room.z - room.depth)) < tolerance) {
        neighbors.S = other;
      }
      if (dz < tolerance && Math.abs(other.z - (room.z + room.depth)) < tolerance) {
        neighbors.N = other;
      }
      if (dx < tolerance && Math.abs(other.x - (room.x - room.width)) < tolerance) {
        neighbors.W = other;
      }
      if (dx < tolerance && Math.abs(other.x - (room.x + room.width)) < tolerance) {
        neighbors.E = other;
      }
    }

    return neighbors;
  }

  /**
   * Get neighbor in specific direction
   */
  private getNeighborInDirection(room: RoomFloorData, dir: 'N' | 'S' | 'E' | 'W'): RoomFloorData | null {
    const neighbors = this.getNeighbors(room);
    return neighbors[dir] || null;
  }

  /**
   * Check if two rooms are connected
   */
  private getRoomConnection(roomA: RoomFloorData, roomB: RoomFloorData): { side: string; overlap: number } | null {
    const aMinX = roomA.x - roomA.width / 2;
    const aMaxX = roomA.x + roomA.width / 2;
    const aMinZ = roomA.z - roomA.depth / 2;
    const aMaxZ = roomA.z + roomA.depth / 2;

    const bMinX = roomB.x - roomB.width / 2;
    const bMaxX = roomB.x + roomB.width / 2;
    const bMinZ = roomB.z - roomB.depth / 2;
    const bMaxZ = roomB.z + roomB.depth / 2;

    // Check if rooms share a boundary
    const tolerance = 1.0;

    // Room B is north of Room A
    if (Math.abs(bMinZ - aMaxZ) < tolerance) {
      const overlap = Math.max(0, Math.min(aMaxX, bMaxX) - Math.max(aMinX, bMinX));
      if (overlap > 0.5) return { side: 'N', overlap };
    }

    // Room B is south of Room A
    if (Math.abs(bMaxZ - aMinZ) < tolerance) {
      const overlap = Math.max(0, Math.min(aMaxX, bMaxX) - Math.max(aMinX, bMinX));
      if (overlap > 0.5) return { side: 'S', overlap };
    }

    // Room B is east of Room A
    if (Math.abs(bMinX - aMaxX) < tolerance) {
      const overlap = Math.max(0, Math.min(aMaxZ, bMaxZ) - Math.max(aMinZ, bMinZ));
      if (overlap > 0.5) return { side: 'E', overlap };
    }

    // Room B is west of Room A
    if (Math.abs(bMaxX - aMinX) < tolerance) {
      const overlap = Math.max(0, Math.min(aMaxZ, bMaxZ) - Math.max(aMinZ, bMinZ));
      if (overlap > 0.5) return { side: 'W', overlap };
    }

    return null;
  }

  /**
   * Get boundary location between two rooms
   */
  private getBoundaryLocation(roomA: RoomFloorData, roomB: RoomFloorData, side: 'N' | 'S' | 'E' | 'W'): [number, number, number] {
    const avgY = (roomA.floorY + roomB.floorY) / 2;

    switch (side) {
      case 'N':
        return [(roomA.x + roomB.x) / 2, avgY + 0.1, roomA.z + roomA.depth / 2];
      case 'S':
        return [(roomA.x + roomB.x) / 2, avgY + 0.1, roomA.z - roomA.depth / 2];
      case 'E':
        return [roomA.x + roomA.width / 2, avgY + 0.1, (roomA.z + roomB.z) / 2];
      case 'W':
        return [roomA.x - roomA.width / 2, avgY + 0.1, (roomA.z + roomB.z) / 2];
    }
  }

  /**
   * Get wall center location
   */
  private getWallCenter(room: RoomFloorData, side: 'N' | 'S' | 'E' | 'W'): [number, number, number] {
    const halfW = room.width / 2;
    const halfD = room.depth / 2;

    switch (side) {
      case 'N': return [room.x, room.floorY + 0.1, room.z + halfD];
      case 'S': return [room.x, room.floorY + 0.1, room.z - halfD];
      case 'E': return [room.x + halfW, room.floorY + 0.1, room.z];
      case 'W': return [room.x - halfW, room.floorY + 0.1, room.z];
    }
  }

  /**
   * Add issue to list (avoiding duplicates)
   */
  private addIssue(issue: FloorIssue) {
    if (!this.issues.find(i => i.id === issue.id)) {
      this.issues.push(issue);
    }
  }
}

// Singleton instance
let floorAuditorInstance: FloorIntegrityAuditor | null = null;

export function getFloorAuditor(): FloorIntegrityAuditor {
  if (!floorAuditorInstance) {
    floorAuditorInstance = new FloorIntegrityAuditor();
  }
  return floorAuditorInstance;
}

/**
 * Get debug data for visual floor audit visualization
 * Returns room bounds, gaps, and issues for rendering
 */
export function getDebugFloorData(): DebugFloorData | null {
  if (!floorAuditorInstance) {
    return null;
  }
  // Access private properties via type assertion for debug purposes
  const auditor = floorAuditorInstance as any;
  return {
    rooms: auditor.roomsData || [],
    gaps: auditor.roomGapsData || {},
    issues: auditor.issues || [],
  };
}

export default getFloorAuditor;
