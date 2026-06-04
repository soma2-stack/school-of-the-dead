// src/utils/MapConnectivityAudit.ts - Map Connectivity Audit System
// Detects void exposures, missing walls/ceilings, disconnected rooms, and navigation breaks

export interface ConnectivityIssue {
  id: string;
  type: 'void_exposure' | 'missing_wall' | 'missing_ceiling' | 'disconnected_room' | 
        'hallway_dead_end' | 'geometry_seam' | 'no_path_to_starter' | 'z_fighting' | 'missing_collision';
  severity: 'low' | 'medium' | 'high' | 'critical';
  roomName: string;
  location: [number, number, number];
  description: string;
  details: string;
  isIntentional?: boolean;
  connectedRoomId?: string;
  
  // Enhanced debugging fields
  roomBounds?: { x: number; z: number; w: number; d: number; h: number; floorY: number };
  nearestConnectedRoom?: string;
  distanceToNearestRoom?: number;
  reasoning?: string;
  potentialCauses?: string[];
  confidence?: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface RoomConnectivityData {
  id: string;
  name: string;
  cx: number;
  cz: number;
  w: number;
  d: number;
  h: number;
  floorY: number;
  neighbors: { N?: string; S?: string; E?: string; W?: string };
  hasFloor: boolean;
  hasCeiling: boolean;
  hasWalls: { N: boolean; S: boolean; E: boolean; W: boolean };
  isStaircase: boolean;
  isHallway: boolean;
  isConnector: boolean;
}

export interface GapData {
  side: 'N' | 'S' | 'E' | 'W';
  center: number;
  width: number;
}

export interface AuditReport {
  totalConnectedRooms: number;
  disconnectedRooms: string[];
  voidExposures: ConnectivityIssue[];
  missingWalls: ConnectivityIssue[];
  missingCeilings: ConnectivityIssue[];
  navigationBreaks: ConnectivityIssue[];
  totalIssues: number;
  scanDurationMs: number;
}

export interface DebugVisualizationData {
  rooms: RoomConnectivityData[];
  issues: ConnectivityIssue[];
  voidOpenings: Array<{ roomId: string; side: string; location: [number, number, number]; width: number }>;
  disconnectedRooms: Array<{ roomId: string; location: [number, number, number] }>;
  missingCeilings: Array<{ roomId: string; location: [number, number, number] }>;
}

class MapConnectivityAuditor {
  private roomsData: RoomConnectivityData[] = [];
  private roomGapsData: Record<string, GapData[]> = {};
  private issues: ConnectivityIssue[] = [];
  private scanStartTime: number = 0;
  private starterRoomId: string = 'starter';

  /**
   * Initialize auditor with room and gap data
   */
  initialize(rooms: any[], gaps: Record<string, GapData[]>, starterRoomId?: string) {
    if (starterRoomId) {
      this.starterRoomId = starterRoomId;
    }

    // Build room connectivity data
    this.roomsData = rooms.map((r: any) => {
      const roomNameLower = r.name.toLowerCase();
      return {
        id: r.id || r.name,
        name: r.name || r.id,
        cx: r.cx,
        cz: r.cz,
        w: r.w,
        d: r.d,
        h: r.h,
        floorY: r.floorY,
        neighbors: {},
        hasFloor: true,
        hasCeiling: !r.ceilingHoles || r.ceilingHoles.length === 0,
        hasWalls: {
          N: !r.skipWalls?.includes('N'),
          S: !r.skipWalls?.includes('S'),
          E: !r.skipWalls?.includes('E'),
          W: !r.skipWalls?.includes('W'),
        },
        isStaircase: r.isStaircase || false,
        isHallway: roomNameLower.includes('hallway') || roomNameLower.includes('corridor'),
        isConnector: roomNameLower.includes('connector') || roomNameLower.includes('transition'),
      };
    });

    // Calculate neighbors for each room
    this.calculateNeighbors();

    this.roomGapsData = gaps;
    this.issues = [];
  }

  /**
   * Calculate neighbor relationships between rooms
   */
  private calculateNeighbors() {
    const edgeTolerance = 5.0;
    const overlapTolerance = 2.0;

    for (const room of this.roomsData) {
      const halfW = room.w / 2;
      const halfD = room.d / 2;

      for (const other of this.roomsData) {
        if (other.id === room.id) continue;

        const otherHalfW = other.w / 2;
        const otherHalfD = other.d / 2;

        // Check North neighbor (other room's S edge near our N edge)
        if (Math.abs((other.cz - otherHalfD) - (room.cz + halfD)) < edgeTolerance) {
          const overlap = Math.min(room.cx + halfW + overlapTolerance, other.cx + otherHalfW + overlapTolerance) -
                         Math.max(room.cx - halfW - overlapTolerance, other.cx - otherHalfW - overlapTolerance);
          if (overlap > 0.5) {
            room.neighbors.N = other.id;
          }
        }

        // Check South neighbor (other room's N edge near our S edge)
        if (Math.abs((other.cz + otherHalfD) - (room.cz - halfD)) < edgeTolerance) {
          const overlap = Math.min(room.cx + halfW + overlapTolerance, other.cx + otherHalfW + overlapTolerance) -
                         Math.max(room.cx - halfW - overlapTolerance, other.cx - otherHalfW - overlapTolerance);
          if (overlap > 0.5) {
            room.neighbors.S = other.id;
          }
        }

        // Check East neighbor (other room's W edge near our E edge)
        if (Math.abs((other.cx - otherHalfW) - (room.cx + halfW)) < edgeTolerance) {
          const overlap = Math.min(room.cz + halfD + overlapTolerance, other.cz + otherHalfD + overlapTolerance) -
                         Math.max(room.cz - halfD - overlapTolerance, other.cz - otherHalfD - overlapTolerance);
          if (overlap > 0.5) {
            room.neighbors.E = other.id;
          }
        }

        // Check West neighbor (other room's E edge near our W edge)
        if (Math.abs((other.cx + otherHalfW) - (room.cx - halfW)) < edgeTolerance) {
          const overlap = Math.min(room.cz + halfD + overlapTolerance, other.cz + otherHalfD + overlapTolerance) -
                         Math.max(room.cz - halfD - overlapTolerance, other.cz - otherHalfD - overlapTolerance);
          if (overlap > 0.5) {
            room.neighbors.W = other.id;
          }
        }
      }
    }
  }

  /**
   * Run full connectivity audit
   */
  runAudit(): AuditReport {
    this.scanStartTime = performance.now();
    this.issues = [];

    // 1. Detect openings that expose the world void
    this.detectVoidExposures();

    // 2. Detect missing walls
    this.detectMissingWalls();

    // 3. Detect missing ceilings
    this.detectMissingCeilings();

    // 4. Detect disconnected rooms
    this.detectDisconnectedRooms();

    // 5. Detect hallways that terminate into empty space
    this.detectHallwayDeadEnds();

    // 6. Detect geometry seams where player can see outside the map
    this.detectGeometrySeams();

    // 7. Detect rooms with no valid path connection to starter room
    this.detectNoPathToStarter();

    // 8. Detect overlapping walls causing z-fighting
    this.detectZFighting();

    // 9. Detect missing collision on walls and floors
    this.detectMissingCollision();

    const scanDuration = performance.now() - this.scanStartTime;

    const disconnectedRoomIds = this.issues
      .filter(i => i.type === 'disconnected_room')
      .map(i => i.roomName);

    return {
      totalConnectedRooms: this.roomsData.length - disconnectedRoomIds.length,
      disconnectedRooms: disconnectedRoomIds,
      voidExposures: this.issues.filter(i => i.type === 'void_exposure'),
      missingWalls: this.issues.filter(i => i.type === 'missing_wall'),
      missingCeilings: this.issues.filter(i => i.type === 'missing_ceiling'),
      navigationBreaks: this.issues.filter(i => 
        i.type === 'disconnected_room' || i.type === 'no_path_to_starter' || i.type === 'hallway_dead_end'
      ),
      totalIssues: this.issues.length,
      scanDurationMs: scanDuration,
    };
  }

  /**
   * Get all issues found during audit
   */
  getIssues(): ConnectivityIssue[] {
    return [...this.issues];
  }

  /**
   * Get debug visualization data
   */
  getDebugData(): DebugVisualizationData {
    const voidOpenings = this.issues
      .filter(i => i.type === 'void_exposure')
      .map(i => ({
        roomId: i.roomName,
        side: i.details.split(' ')[0] || 'unknown',
        location: i.location,
        width: parseFloat(i.details.match(/(\d+\.?\d*)u/)?.[1] || '0'),
      }));

    const disconnectedRooms = this.issues
      .filter(i => i.type === 'disconnected_room')
      .map(i => ({
        roomId: i.roomName,
        location: i.location,
      }));

    const missingCeilings = this.issues
      .filter(i => i.type === 'missing_ceiling')
      .map(i => ({
        roomId: i.roomName,
        location: i.location,
      }));

    return {
      rooms: this.roomsData,
      issues: this.issues,
      voidOpenings,
      disconnectedRooms,
      missingCeilings,
    };
  }

  /**
   * 1. Detect openings that expose the world void
   */
  private detectVoidExposures() {
    for (const room of this.roomsData) {
      const gaps = this.roomGapsData[room.id] || [];
      const halfW = room.w / 2;
      const halfD = room.d / 2;

      for (const gap of gaps) {
        // Check if this gap leads to another room or to void
        const hasNeighbor = this.hasNeighborAcrossGap(room, gap);

        if (!hasNeighbor && gap.width > 3.0) {
          // This gap exposes to void
          let loc: [number, number, number];
          if (gap.side === 'N' || gap.side === 'S') {
            const z = gap.side === 'N' ? room.cz + halfD : room.cz - halfD;
            loc = [room.cx + gap.center, room.floorY + 0.1, z];
          } else {
            const x = gap.side === 'E' ? room.cx + halfW : room.cx - halfW;
            loc = [x, room.floorY + 0.1, room.cz + gap.center];
          }

          this.addIssue({
            id: `void_${room.id}_${gap.side}_${gap.center}`,
            type: 'void_exposure',
            severity: gap.width > 10 ? 'critical' : 'high',
            roomName: room.name,
            location: loc,
            description: 'Opening Exposes World Void',
            details: `${gap.side} wall opening (${gap.width.toFixed(2)}u) in ${room.name} leads to empty space`,
            isIntentional: this.isIntentionalVoidExposure(room, gap),
          });
        }
      }

      // Check for skipped walls that expose void
      for (const [side, hasWall] of Object.entries(room.hasWalls)) {
        if (!hasWall && !room.neighbors[side as 'N' | 'S' | 'E' | 'W']) {
          let loc: [number, number, number];
          switch (side) {
            case 'N': loc = [room.cx, room.floorY + room.h / 2, room.cz + halfD]; break;
            case 'S': loc = [room.cx, room.floorY + room.h / 2, room.cz - halfD]; break;
            case 'E': loc = [room.cx + halfW, room.floorY + room.h / 2, room.cz]; break;
            case 'W': loc = [room.cx - halfW, room.floorY + room.h / 2, room.cz]; break;
          }

          this.addIssue({
            id: `void_wall_${room.id}_${side}`,
            type: 'void_exposure',
            severity: 'high',
            roomName: room.name,
            location: loc!,
            description: 'Missing Wall Exposes Void',
            details: `${side} wall missing in ${room.name}, exposes interior to void`,
            isIntentional: room.isConnector || room.isHallway,
          });
        }
      }
    }
  }

  /**
   * 2. Detect missing walls
   */
  private detectMissingWalls() {
    for (const room of this.roomsData) {
      const gaps = this.roomGapsData[room.id] || [];
      const halfW = room.w / 2;
      const halfD = room.d / 2;

      for (const [side, hasWall] of Object.entries(room.hasWalls)) {
        if (!hasWall) {
          // Check if there's a neighbor on this side
          const neighborId = room.neighbors[side as 'N' | 'S' | 'E' | 'W'];
          
          if (!neighborId) {
            // No neighbor and no wall - could be intentional exterior or missing wall
            const roomNameLower = room.name.toLowerCase();
            const isExteriorRoom = roomNameLower.includes('courtyard') || 
                                   roomNameLower.includes('exterior') ||
                                   roomNameLower.includes('outdoor');

            if (!isExteriorRoom && !room.isConnector) {
              let loc: [number, number, number];
              switch (side) {
                case 'N': loc = [room.cx, room.floorY + room.h / 2, room.cz + halfD]; break;
                case 'S': loc = [room.cx, room.floorY + room.h / 2, room.cz - halfD]; break;
                case 'E': loc = [room.cx + halfW, room.floorY + room.h / 2, room.cz]; break;
                case 'W': loc = [room.cx - halfW, room.floorY + room.h / 2, room.cz]; break;
              }

              this.addIssue({
                id: `missing_wall_${room.id}_${side}`,
                type: 'missing_wall',
                severity: 'medium',
                roomName: room.name,
                location: loc!,
                description: 'Potentially Missing Wall',
                details: `${side} wall not defined in ${room.name} with no adjacent room`,
              });
            }
          }
        }
      }
    }
  }

  /**
   * 3. Detect missing ceilings
   */
  private detectMissingCeilings() {
    for (const room of this.roomsData) {
      if (!room.hasCeiling) {
        const loc: [number, number, number] = [room.cx, room.floorY + room.h, room.cz];

        this.addIssue({
          id: `missing_ceiling_${room.id}`,
          type: 'missing_ceiling',
          severity: 'low',
          roomName: room.name,
          location: loc,
          description: 'Room Has Ceiling Openings',
          details: `${room.name} has ceiling holes exposing upper area`,
          isIntentional: true, // Usually intentional for multi-level spaces
        });
      }

      // Check for very tall rooms that might be missing ceiling
      if (room.h > 20 && room.floorY < 5) {
        // Tall room at ground level might be missing ceiling
        const neighborAbove = this.roomsData.find(r => 
          Math.abs(r.cx - room.cx) < room.w / 2 &&
          Math.abs(r.cz - room.cz) < room.d / 2 &&
          r.floorY > room.floorY + 10
        );

        if (!neighborAbove && !room.isStaircase) {
          const loc: [number, number, number] = [room.cx, room.floorY + room.h, room.cz];

          this.addIssue({
            id: `tall_room_ceiling_${room.id}`,
            type: 'missing_ceiling',
            severity: 'medium',
            roomName: room.name,
            location: loc,
            description: 'Tall Room May Be Missing Ceiling',
            details: `${room.name} is ${room.h.toFixed(1)}u tall with no room above`,
          });
        }
      }
    }
  }

  /**
   * 4. Detect disconnected rooms
   */
  private detectDisconnectedRooms() {
    for (const room of this.roomsData) {
      const neighborCount = Object.keys(room.neighbors).length;
      const gaps = this.roomGapsData[room.id] || [];

      // A room is potentially disconnected if it has no neighbors and no gaps
      if (neighborCount === 0 && gaps.length === 0 && !room.isStaircase) {
        const loc: [number, number, number] = [room.cx, room.floorY + 1, room.cz];

        this.addIssue({
          id: `disconnected_${room.id}`,
          type: 'disconnected_room',
          severity: 'critical',
          roomName: room.name,
          location: loc,
          description: 'Room Appears Disconnected',
          details: `${room.name} has no adjacent rooms and no doorways/gaps`,
        });
      }
    }
  }

  /**
   * 5. Detect hallways that terminate into empty space
   */
  private detectHallwayDeadEnds() {
    for (const room of this.roomsData) {
      if (!room.isHallway && !room.isConnector) continue;

      const halfW = room.w / 2;
      const halfD = room.d / 2;

      // Check each end of the hallway
      for (const [side, neighborId] of Object.entries(room.neighbors)) {
        if (!neighborId) {
          // No neighbor on this side - check if it's a dead end
          const gaps = this.roomGapsData[room.id] || [];
          const hasGapOnSide = gaps.some(g => g.side === side);

          if (!hasGapOnSide && !room.hasWalls[side as 'N' | 'S' | 'E' | 'W']) {
            let loc: [number, number, number];
            switch (side) {
              case 'N': loc = [room.cx, room.floorY + 1, room.cz + halfD]; break;
              case 'S': loc = [room.cx, room.floorY + 1, room.cz - halfD]; break;
              case 'E': loc = [room.cx + halfW, room.floorY + 1, room.cz]; break;
              case 'W': loc = [room.cx - halfW, room.floorY + 1, room.cz]; break;
            }

            this.addIssue({
              id: `hallway_deadend_${room.id}_${side}`,
              type: 'hallway_dead_end',
              severity: 'high',
              roomName: room.name,
              location: loc!,
              description: 'Hallway Terminates Into Empty Space',
              details: `${room.name} ${side} end has no connecting room or doorway`,
            });
          }
        }
      }
    }
  }

  /**
   * 6. Detect geometry seams where player can see outside the map
   */
  private detectGeometrySeams() {
    for (let i = 0; i < this.roomsData.length; i++) {
      const roomA = this.roomsData[i];

      for (let j = i + 1; j < this.roomsData.length; j++) {
        const roomB = this.roomsData[j];

        // Check if rooms are adjacent but have height mismatch
        const heightDiff = Math.abs(roomA.h - roomB.h);
        const floorDiff = Math.abs(roomA.floorY - roomB.floorY);

        if (heightDiff > 1.0 || floorDiff > 0.5) {
          // Check if rooms share an edge
          const sharedEdge = this.getSharedEdge(roomA, roomB);
          
          if (sharedEdge) {
            const loc: [number, number, number] = [
              (roomA.cx + roomB.cx) / 2,
              Math.max(roomA.floorY, roomB.floorY) + 1,
              (roomA.cz + roomB.cz) / 2
            ];

            this.addIssue({
              id: `seam_${roomA.id}_${roomB.id}`,
              type: 'geometry_seam',
              severity: 'medium',
              roomName: `${roomA.name}/${roomB.name}`,
              location: loc,
              description: 'Potential Geometry Seam',
              details: `Height/floor mismatch between ${roomA.name} and ${roomB.name} may create visible seam`,
            });
          }
        }
      }
    }
  }

  /**
   * 7. Detect rooms with no valid path connection to starter room
   */
  private detectNoPathToStarter() {
    const starterRoom = this.roomsData.find(r => r.id === this.starterRoomId);
    if (!starterRoom) return;

    // BFS to find all reachable rooms from starter
    const reachable = new Set<string>();
    const queue: string[] = [this.starterRoomId];
    reachable.add(this.starterRoomId);

    while (queue.length > 0) {
      const currentId = queue.shift()!;
      const currentRoom = this.roomsData.find(r => r.id === currentId);
      if (!currentRoom) continue;

      // Add neighbors
      for (const neighborId of Object.values(currentRoom.neighbors)) {
        if (neighborId && !reachable.has(neighborId)) {
          reachable.add(neighborId);
          queue.push(neighborId);
        }
      }

      // Also consider rooms connected via gaps
      const gaps = this.roomGapsData[currentId] || [];
      for (const gap of gaps) {
        // Find room across gap
        for (const other of this.roomsData) {
          if (other.id === currentId) continue;
          if (this.roomsAreConnectedViaGap(currentRoom, other, gap)) {
            if (!reachable.has(other.id)) {
              reachable.add(other.id);
              queue.push(other.id);
            }
          }
        }
      }
    }

    // Find unreachable rooms
    for (const room of this.roomsData) {
      if (!reachable.has(room.id) && room.id !== this.starterRoomId) {
        const loc: [number, number, number] = [room.cx, room.floorY + 1, room.cz];

        this.addIssue({
          id: `no_path_${room.id}`,
          type: 'no_path_to_starter',
          severity: 'critical',
          roomName: room.name,
          location: loc,
          description: 'No Path From Starter Room',
          details: `${room.name} is not reachable from ${starterRoom.name}`,
        });
      }
    }
  }

  /**
   * 8. Detect overlapping walls causing z-fighting
   */
  private detectZFighting() {
    const overlapThreshold = 0.5;

    for (let i = 0; i < this.roomsData.length; i++) {
      const roomA = this.roomsData[i];

      for (let j = i + 1; j < this.roomsData.length; j++) {
        const roomB = this.roomsData[j];

        // Check if rooms overlap significantly
        const xOverlap = Math.min(roomA.cx + roomA.w/2, roomB.cx + roomB.w/2) -
                        Math.max(roomA.cx - roomA.w/2, roomB.cx - roomB.w/2);
        const zOverlap = Math.min(roomA.cz + roomA.d/2, roomB.cz + roomB.d/2) -
                        Math.max(roomA.cz - roomA.d/2, roomB.cz - roomB.d/2);

        if (xOverlap > overlapThreshold && zOverlap > overlapThreshold) {
          // Rooms overlap - check if they're at similar heights
          const floorDiff = Math.abs(roomA.floorY - roomB.floorY);
          
          if (floorDiff < 2.0) {
            const loc: [number, number, number] = [
              (roomA.cx + roomB.cx) / 2,
              (roomA.floorY + roomB.floorY) / 2 + 1,
              (roomA.cz + roomB.cz) / 2
            ];

            this.addIssue({
              id: `zfight_${roomA.id}_${roomB.id}`,
              type: 'z_fighting',
              severity: 'high',
              roomName: `${roomA.name}/${roomB.name}`,
              location: loc,
              description: 'Overlapping Room Geometry',
              details: `${roomA.name} and ${roomB.name} overlap by ${xOverlap.toFixed(1)}x${zOverlap.toFixed(1)}u`,
            });
          }
        }
      }
    }
  }

  /**
   * 9. Detect missing collision on walls and floors
   */
  private detectMissingCollision() {
    for (const room of this.roomsData) {
      // Check for very thin floors that might lack collision
      if (room.h < 0.5 && !room.isStaircase) {
        const loc: [number, number, number] = [room.cx, room.floorY + 0.1, room.cz];

        this.addIssue({
          id: `thin_floor_${room.id}`,
          type: 'missing_collision',
          severity: 'medium',
          roomName: room.name,
          location: loc,
          description: 'Thin Floor May Lack Collision',
          details: `${room.name} floor is only ${room.h.toFixed(2)}u thick`,
        });
      }

      // Check for walls that might be too thin
      const gaps = this.roomGapsData[room.id] || [];
      for (const [side, hasWall] of Object.entries(room.hasWalls)) {
        if (hasWall) {
          // Check if wall segment between gaps is too narrow
          const sideGaps = gaps.filter(g => g.side === side);
          
          if (sideGaps.length > 1) {
            sideGaps.sort((a, b) => a.center - b.center);
            
            for (let i = 0; i < sideGaps.length - 1; i++) {
              const g1 = sideGaps[i];
              const g2 = sideGaps[i + 1];
              
              const wallWidth = (g2.center - g2.width/2) - (g1.center + g1.width/2);
              
              if (wallWidth > 0 && wallWidth < 0.3) {
                let loc: [number, number, number];
                const midPoint = (g1.center + g1.width/2 + g2.center - g2.width/2) / 2;
                
                if (side === 'N' || side === 'S') {
                  const z = side === 'N' ? room.cz + room.d/2 : room.cz - room.d/2;
                  loc = [room.cx + midPoint, room.floorY + 1, z];
                } else {
                  const x = side === 'E' ? room.cx + room.w/2 : room.cx - room.w/2;
                  loc = [x, room.floorY + 1, room.cz + midPoint];
                }

                this.addIssue({
                  id: `thin_wall_${room.id}_${side}_${i}`,
                  type: 'missing_collision',
                  severity: 'low',
                  roomName: room.name,
                  location: loc!,
                  description: 'Narrow Wall Segment',
                  details: `Wall segment between gaps on ${side} wall is only ${wallWidth.toFixed(2)}u wide`,
                });
              }
            }
          }
        }
      }
    }
  }

  /**
   * Check if a gap connects to another room
   */
  private hasNeighborAcrossGap(room: RoomConnectivityData, gap: GapData): boolean {
    const halfW = room.w / 2;
    const halfD = room.d / 2;

    let gapEdge: number;
    let gapStart: number;
    let gapEnd: number;

    switch (gap.side) {
      case 'N':
        gapEdge = room.cz + halfD;
        gapStart = room.cx + gap.center - gap.width / 2;
        gapEnd = room.cx + gap.center + gap.width / 2;
        break;
      case 'S':
        gapEdge = room.cz - halfD;
        gapStart = room.cx + gap.center - gap.width / 2;
        gapEnd = room.cx + gap.center + gap.width / 2;
        break;
      case 'E':
        gapEdge = room.cx + halfW;
        gapStart = room.cz + gap.center - gap.width / 2;
        gapEnd = room.cz + gap.center + gap.width / 2;
        break;
      case 'W':
        gapEdge = room.cx - halfW;
        gapStart = room.cz + gap.center - gap.width / 2;
        gapEnd = room.cz + gap.center + gap.width / 2;
        break;
    }

    const edgeTolerance = 5.0;
    const overlapTolerance = 2.0;

    for (const other of this.roomsData) {
      if (other.id === room.id) continue;

      const otherHalfW = other.w / 2;
      const otherHalfD = other.d / 2;

      let isNearEdge = false;
      let overlapStart: number;
      let overlapEnd: number;

      switch (gap.side) {
        case 'N':
          if (Math.abs((other.cz - otherHalfD) - gapEdge) < edgeTolerance) {
            isNearEdge = true;
            overlapStart = other.cx - otherHalfW - overlapTolerance;
            overlapEnd = other.cx + otherHalfW + overlapTolerance;
          }
          break;
        case 'S':
          if (Math.abs((other.cz + otherHalfD) - gapEdge) < edgeTolerance) {
            isNearEdge = true;
            overlapStart = other.cx - otherHalfW - overlapTolerance;
            overlapEnd = other.cx + otherHalfW + overlapTolerance;
          }
          break;
        case 'E':
          if (Math.abs((other.cx - otherHalfW) - gapEdge) < edgeTolerance) {
            isNearEdge = true;
            overlapStart = other.cz - otherHalfD - overlapTolerance;
            overlapEnd = other.cz + otherHalfD + overlapTolerance;
          }
          break;
        case 'W':
          if (Math.abs((other.cx + otherHalfW) - gapEdge) < edgeTolerance) {
            isNearEdge = true;
            overlapStart = other.cz - otherHalfD - overlapTolerance;
            overlapEnd = other.cz + otherHalfD + overlapTolerance;
          }
          break;
      }

      if (isNearEdge) {
        const overlap = Math.max(0, Math.min(gapEnd, overlapEnd) - Math.max(gapStart, overlapStart));
        if (overlap > 0.5) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Check if two rooms are connected via a specific gap
   */
  private roomsAreConnectedViaGap(roomA: RoomConnectivityData, roomB: RoomConnectivityData, gap: GapData): boolean {
    const halfW_A = roomA.w / 2;
    const halfD_A = roomA.d / 2;
    const halfW_B = roomB.w / 2;
    const halfD_B = roomB.d / 2;

    let gapEdge: number;
    let gapStart: number;
    let gapEnd: number;

    switch (gap.side) {
      case 'N':
        gapEdge = roomA.cz + halfD_A;
        gapStart = roomA.cx + gap.center - gap.width / 2;
        gapEnd = roomA.cx + gap.center + gap.width / 2;
        break;
      case 'S':
        gapEdge = roomA.cz - halfD_A;
        gapStart = roomA.cx + gap.center - gap.width / 2;
        gapEnd = roomA.cx + gap.center + gap.width / 2;
        break;
      case 'E':
        gapEdge = roomA.cx + halfW_A;
        gapStart = roomA.cz + gap.center - gap.width / 2;
        gapEnd = roomA.cz + gap.center + gap.width / 2;
        break;
      case 'W':
        gapEdge = roomA.cx - halfW_A;
        gapStart = roomA.cz + gap.center - gap.width / 2;
        gapEnd = roomA.cz + gap.center + gap.width / 2;
        break;
    }

    const edgeTolerance = 5.0;
    const overlapTolerance = 2.0;

    const otherHalfW = halfW_B;
    const otherHalfD = halfD_B;

    let isNearEdge = false;
    let overlapStart: number;
    let overlapEnd: number;

    switch (gap.side) {
      case 'N':
        if (Math.abs((roomB.cz - otherHalfD) - gapEdge) < edgeTolerance) {
          isNearEdge = true;
          overlapStart = roomB.cx - otherHalfW - overlapTolerance;
          overlapEnd = roomB.cx + otherHalfW + overlapTolerance;
        }
        break;
      case 'S':
        if (Math.abs((roomB.cz + otherHalfD) - gapEdge) < edgeTolerance) {
          isNearEdge = true;
          overlapStart = roomB.cx - otherHalfW - overlapTolerance;
          overlapEnd = roomB.cx + otherHalfW + overlapTolerance;
        }
        break;
      case 'E':
        if (Math.abs((roomB.cx - otherHalfW) - gapEdge) < edgeTolerance) {
          isNearEdge = true;
          overlapStart = roomB.cz - otherHalfD - overlapTolerance;
          overlapEnd = roomB.cz + otherHalfD + overlapTolerance;
        }
        break;
      case 'W':
        if (Math.abs((roomB.cx + otherHalfW) - gapEdge) < edgeTolerance) {
          isNearEdge = true;
          overlapStart = roomB.cz - otherHalfD - overlapTolerance;
          overlapEnd = roomB.cz + otherHalfD + overlapTolerance;
        }
        break;
    }

    if (isNearEdge) {
      const overlap = Math.max(0, Math.min(gapEnd, overlapEnd) - Math.max(gapStart, overlapStart));
      return overlap > 0.5;
    }

    return false;
  }

  /**
   * Check if a void exposure is intentional (courtyard, exterior, etc.)
   */
  private isIntentionalVoidExposure(room: RoomConnectivityData, gap: GapData): boolean {
    const roomNameLower = room.name.toLowerCase();
    
    // Exterior spaces intentionally expose to void/sky
    if (roomNameLower.includes('courtyard') || 
        roomNameLower.includes('exterior') || 
        roomNameLower.includes('outdoor') ||
        roomNameLower.includes('garden')) {
      return true;
    }

    // Connectors and hallways often have intentional openings
    if (room.isConnector || room.isHallway) {
      return true;
    }

    // Staircases have intentional openings for passage
    if (room.isStaircase) {
      return true;
    }

    return false;
  }

  /**
   * Get shared edge between two rooms
   */
  private getSharedEdge(roomA: RoomConnectivityData, roomB: RoomConnectivityData): string | null {
    const halfW_A = roomA.w / 2;
    const halfD_A = roomA.d / 2;
    const halfW_B = roomB.w / 2;
    const halfD_B = roomB.d / 2;

    const tolerance = 5.0;

    // Check if roomB is north of roomA
    if (Math.abs((roomB.cz - halfD_B) - (roomA.cz + halfD_A)) < tolerance) {
      const overlap = Math.min(roomA.cx + halfW_A, roomB.cx + halfW_B) - 
                     Math.max(roomA.cx - halfW_A, roomB.cx - halfW_B);
      if (overlap > 2.0) return 'N';
    }

    // Check if roomB is south of roomA
    if (Math.abs((roomB.cz + halfD_B) - (roomA.cz - halfD_A)) < tolerance) {
      const overlap = Math.min(roomA.cx + halfW_A, roomB.cx + halfW_B) - 
                     Math.max(roomA.cx - halfW_A, roomB.cx - halfW_B);
      if (overlap > 2.0) return 'S';
    }

    // Check if roomB is east of roomA
    if (Math.abs((roomB.cx - halfW_B) - (roomA.cx + halfW_A)) < tolerance) {
      const overlap = Math.min(roomA.cz + halfD_A, roomB.cz + halfD_B) - 
                     Math.max(roomA.cz - halfD_A, roomB.cz - halfD_B);
      if (overlap > 2.0) return 'E';
    }

    // Check if roomB is west of roomA
    if (Math.abs((roomB.cx + halfW_B) - (roomA.cx - halfW_A)) < tolerance) {
      const overlap = Math.min(roomA.cz + halfD_A, roomB.cz + halfD_B) - 
                     Math.max(roomA.cz - halfD_A, roomB.cz - halfD_B);
      if (overlap > 2.0) return 'W';
    }

    return null;
  }

  /**
   * Calculate distance between two points (XZ plane)
   */
  private calculateDistance(x1: number, z1: number, x2: number, z2: number): number {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(z2 - z1, 2));
  }

  /**
   * Find nearest connected room to a given location
   */
  private findNearestConnectedRoom(excludeRoomId: string, location: [number, number, number]): { roomId: string; name: string; distance: number } | null {
    let nearest: { roomId: string; name: string; distance: number } | null = null;
    
    for (const room of this.roomsData) {
      if (room.id === excludeRoomId) continue;
      
      const distance = this.calculateDistance(location[0], location[2], room.cx, room.cz);
      
      if (!nearest || distance < nearest.distance) {
        nearest = { roomId: room.id, name: room.name, distance };
      }
    }
    
    return nearest;
  }

  /**
   * Generate reasoning for why an issue was detected
   */
  private generateReasoning(issueType: ConnectivityIssue['type'], room: RoomConnectivityData, gap?: GapData): string {
    switch (issueType) {
      case 'void_exposure':
        if (gap) {
          return `Gap on ${gap.side} wall (${gap.width.toFixed(1)}u wide) has no adjacent room within detection tolerance. Pathfinding graph cannot establish valid route across this opening.`;
        }
        return `Missing wall on specified side creates direct exposure to world void with no connecting geometry.`;
      
      case 'missing_wall':
        return `Wall not defined in room data and no adjacent room detected within tolerance. This creates an unsealed boundary.`;
      
      case 'missing_ceiling':
        return `Room lacks ceiling geometry definition or has excessive height without upper floor coverage.`;
      
      case 'disconnected_room':
        return `Room has zero neighbors and zero gaps/doorways. No pathfinding connections exist to any other room.`;
      
      case 'hallway_dead_end':
        return `Hallway terminates without connecting room, gap, or wall. Creates navigation dead-end into void.`;
      
      case 'geometry_seam':
        return `Adjacent rooms have mismatched floor heights or room heights, creating visible seam where geometries meet.`;
      
      case 'no_path_to_starter':
        return `BFS pathfinding from starter room cannot reach this room. All possible connection paths are blocked or missing.`;
      
      case 'z_fighting':
        return `Room geometry overlaps significantly with another room at similar height, causing rendering artifacts.`;
      
      case 'missing_collision':
        return `Geometry segment is too thin (<0.3u) to reliably generate collision mesh, or floor thickness is insufficient.`;
      
      default:
        return 'Issue detected during automated connectivity scan.';
    }
  }

  /**
   * Generate potential causes for an issue type
   */
  private generatePotentialCauses(issueType: ConnectivityIssue['type']): string[] {
    switch (issueType) {
      case 'void_exposure':
        return [
          'Missing floor tile',
          'Collision wall blocking passage',
          'Gap between meshes not bridged',
          'Doorway not registered in gap data',
          'Intentional exterior opening'
        ];
      
      case 'missing_wall':
        return [
          'Wall definition omitted in room config',
          'Adjacent room positioned outside detection tolerance',
          'Intentional open-air design',
          'Exterior boundary wall missing'
        ];
      
      case 'missing_ceiling':
        return [
          'Ceiling geometry not generated',
          'Multi-level room design (intentional)',
          'Trapdoor or skylight opening',
          'Tall room without upper floor'
        ];
      
      case 'disconnected_room':
        return [
          'Room placed in isolation',
          'Missing gap/doorway definitions',
          'Neighbor rooms positioned incorrectly',
          'Standalone structure (may be intentional)'
        ];
      
      case 'hallway_dead_end':
        return [
          'Hallway extension incomplete',
          'Missing connecting room',
          'Gap definition omitted',
          'Intentional cul-de-sac design'
        ];
      
      case 'geometry_seam':
        return [
          'Floor height mismatch between rooms',
          'Room height difference creates step',
          'Transition piece missing',
          'Different architectural styles meeting'
        ];
      
      case 'no_path_to_starter':
        return [
          'Missing intermediate connection rooms',
          'Gap chain broken',
          'One-way passage only',
          'Secret or hidden room'
        ];
      
      case 'z_fighting':
        return [
          'Rooms overlap in XZ plane',
          'Duplicate room definitions',
          'Positioning error in map data',
          'Intentional multi-layer design'
        ];
      
      case 'missing_collision':
        return [
          'Thin wall segment between gaps',
          'Floor thickness below threshold',
          'Narrow pillar or support',
          'Decorative element without collision'
        ];
      
      default:
        return ['Unknown cause'];
    }
  }

  /**
   * Determine confidence level for an issue
   */
  private determineConfidence(issueType: ConnectivityIssue['type'], room: RoomConnectivityData, isIntentional?: boolean): 'LOW' | 'MEDIUM' | 'HIGH' {
    // Lower confidence for potentially intentional designs
    if (isIntentional) return 'LOW';
    
    // Higher confidence for critical navigation issues
    if (issueType === 'disconnected_room' || issueType === 'no_path_to_starter') {
      return 'HIGH';
    }
    
    // High confidence for void exposures in non-exterior rooms
    if (issueType === 'void_exposure' && !room.isConnector && !room.isHallway) {
      return 'HIGH';
    }
    
    // Medium confidence for most other issues
    return 'MEDIUM';
  }

  /**
   * Add issue to list with enhanced debugging information
   */
  private addIssue(issue: ConnectivityIssue) {
    // Avoid duplicates
    if (this.issues.find(i => i.id === issue.id)) {
      return;
    }

    // Find the room data for this issue
    const room = this.roomsData.find(r => r.id === issue.roomName || r.name === issue.roomName);
    
    if (room) {
      // Add room bounds
      issue.roomBounds = {
        x: room.cx,
        z: room.cz,
        w: room.w,
        d: room.d,
        h: room.h,
        floorY: room.floorY
      };

      // Find nearest connected room
      const nearest = this.findNearestConnectedRoom(room.id, issue.location);
      if (nearest) {
        issue.nearestConnectedRoom = nearest.name;
        issue.distanceToNearestRoom = nearest.distance;
      }

      // Generate reasoning
      issue.reasoning = this.generateReasoning(issue.type, room);
      
      // Generate potential causes
      issue.potentialCauses = this.generatePotentialCauses(issue.type);
      
      // Determine confidence
      issue.confidence = this.determineConfidence(issue.type, room, issue.isIntentional);
    }

    this.issues.push(issue);
  }
}

// Singleton instance
let connectivityAuditorInstance: MapConnectivityAuditor | null = null;

export const getConnectivityAuditor = (): MapConnectivityAuditor => {
  if (!connectivityAuditorInstance) {
    connectivityAuditorInstance = new MapConnectivityAuditor();
  }
  return connectivityAuditorInstance;
};

// Global command for running audit with enhanced output
if (typeof window !== 'undefined') {
  (window as any).runConnectivityAudit = (rooms?: any[], gaps?: Record<string, GapData[]>, starterRoomId?: string) => {
    const auditor = getConnectivityAuditor();
    
    // If no data provided, try to use existing data or report error
    if (!rooms || !gaps) {
      console.error('[ConnectivityAudit] Please provide rooms and gaps data, or call auditor.initialize() first');
      return null;
    }

    auditor.initialize(rooms, gaps, starterRoomId);
    const report = auditor.runAudit();
    const issues = auditor.getIssues();

    console.log('=== MAP CONNECTIVITY AUDIT REPORT ===');
    console.log(`Total Rooms Scanned: ${auditor['roomsData'].length}`);
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
}

export default MapConnectivityAuditor;
