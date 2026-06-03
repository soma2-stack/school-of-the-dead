// src/utils/MapValidator.ts - Room Seal Validator

export interface ValidationIssue {
  id: string;
  type: 'floor_gap' | 'wall_gap' | 'stair_gap' | 'door_gap' | 'corner_crack';
  severity: 'low' | 'medium' | 'high' | 'critical';
  roomName: string;
  location: [number, number, number];
  description: string;
  details: string;
}

interface RoomData {
  name: string;
  x: number;
  y: number;
  z: number;
  width: number;
  depth: number;
  height: number;
  doors?: any[];
  stairDirection?: string;
}

interface GapData {
  side: 'N' | 'S' | 'E' | 'W';
  offset: number;
  width: number;
}

class RoomSealValidator {
  private roomsData: RoomData[] = [];
  private roomGapsData: Record<string, GapData[]> = {};
  private doorsData: any[] = [];
  private issues: ValidationIssue[] = [];
  private currentIssueIndex = -1;
  private scanTargetRoom: string | null = null;

  setData(rooms: RoomData[], gaps: Record<string, GapData[]>, doors: any[]) {
    this.roomsData = rooms;
    this.roomGapsData = gaps;
    this.doorsData = doors;
    this.issues = [];
    this.currentIssueIndex = -1;
  }

  enable(targetRoom?: string) {
    this.scanTargetRoom = targetRoom || null;
    this.runFullScan();
  }

  disable() {
    this.issues = [];
    this.currentIssueIndex = -1;
    this.scanTargetRoom = null;
  }

  toggle(targetRoom?: string): boolean {
    if (this.issues.length > 0 && !targetRoom) {
      this.disable();
      return false;
    }
    this.enable(targetRoom);
    return true;
  }

  getIssues(): ValidationIssue[] {
    return this.issues;
  }

  getCurrentIssue(): ValidationIssue | null {
    if (this.issues.length === 0 || this.currentIssueIndex < 0) return null;
    return this.issues[this.currentIssueIndex];
  }

  nextIssue(): ValidationIssue | null {
    if (this.issues.length === 0) return null;
    this.currentIssueIndex = (this.currentIssueIndex + 1) % this.issues.length;
    return this.getCurrentIssue();
  }

  runFullScan() {
    const start = performance.now();
    this.issues = [];
    
    for (const room of this.roomsData) {
      if (this.scanTargetRoom && room.name !== this.scanTargetRoom) {
        continue;
      }
      this.checkRoomSeal(room);
    }

    const end = performance.now();
    console.log(`[RoomSealValidator] Scan completed in ${(end - start).toFixed(2)}ms. Found ${this.issues.length} issues.`);
    if (this.issues.length === 0 && !this.scanTargetRoom) {
      console.log('[RoomSealValidator] All playable rooms are properly sealed.');
    }
  }

  private checkRoomSeal(room: RoomData) {
    this.checkFloorEdges(room);
    this.checkWallConnections(room);
    this.checkStairwellIntegrity(room);
    this.checkDoorwayCoverage(room);
    this.checkRoomCorners(room);
  }

  private checkFloorEdges(room: RoomData) {
    const gaps = this.roomGapsData[room.name] || [];
    const halfW = room.width / 2;
    const halfD = room.depth / 2;
    const floorY = room.y;

    // Check defined gaps - these are intentional openings (doors, stairs)
    // We flag them as potential issues if they seem problematic
    for (const gap of gaps) {
      let loc: [number, number, number];
      if (gap.side === 'S' || gap.side === 'N') {
        const z = gap.side === 'N' ? room.z + halfD : room.z - halfD;
        loc = [room.x + gap.offset, floorY + 0.1, z];
      } else {
        const x = gap.side === 'E' ? room.x + halfW : room.x - halfW;
        loc = [x, floorY + 0.1, room.z + gap.offset];
      }
      
      // Only report very large gaps as critical issues
      if (gap.width > 3.0) {
        this.addIssue({
          id: `floor_${room.name}_${gap.side}_${gap.offset}`,
          type: 'floor_gap',
          severity: 'critical',
          roomName: room.name,
          location: loc,
          description: 'Large Floor Opening',
          details: `Gap of ${gap.width.toFixed(2)}u on ${gap.side} wall of ${room.name}`
        });
      }
    }
  }

  private checkWallConnections(room: RoomData) {
    const gaps = this.roomGapsData[room.name] || [];
    const sides: ('N'|'S'|'E'|'W')[] = ['N', 'S', 'E', 'W'];
    
    for (const side of sides) {
      const sideGaps = gaps.filter(g => g.side === side);
      
      if (sideGaps.length === 0) {
        // Solid wall expected. Check if neighbor exists.
        const neighbor = this.getNeighborInDirection(room, side);
        if (!neighbor) {
          // Exterior wall, assumed solid - no issue
          continue;
        }
        // Internal wall to neighbor. Check height alignment.
        if (Math.abs(room.height - neighbor.height) > 0.5) {
           this.addIssue({
             id: `wall_height_${room.name}_${side}`,
             type: 'wall_gap',
             severity: 'medium',
             roomName: room.name,
             location: this.getWallCenter(room, side),
             description: 'Wall Height Mismatch',
             details: `${room.name} wall (${room.height}u) does not match ${neighbor.name} (${neighbor.height}u)`
           });
        }
      } else {
        // Check for overlapping gaps which would remove wall segments
        sideGaps.sort((a, b) => a.offset - b.offset);
        for (let i = 0; i < sideGaps.length - 1; i++) {
           const g1 = sideGaps[i];
           const g2 = sideGaps[i+1];
           if ((g1.offset + g1.width/2) > (g2.offset - g2.width/2)) {
             this.addIssue({
               id: `wall_overlap_${room.name}_${side}_${i}`,
               type: 'wall_gap',
               severity: 'high',
               roomName: room.name,
               location: this.getWallCenter(room, side),
               description: 'Overlapping Openings',
               details: `Gaps on ${side} wall overlap, removing wall segment.`
             });
           }
        }
      }
    }
  }

  private checkStairwellIntegrity(room: RoomData) {
    if (!room.stairDirection) return;

    // Stairwells should have reasonable dimensions
    if (room.width < 2 || room.depth < 2) {
      this.addIssue({
        id: `stair_small_${room.name}`,
        type: 'stair_gap',
        severity: 'high',
        roomName: room.name,
        location: [room.x, room.y + 1, room.z],
        description: 'Stairwell Too Narrow',
        details: `${room.name} stairwell dimensions (${room.width}x${room.depth}) are too small.`
      });
    }
    
    // Check that stairwell has appropriate gaps for passage
    const gaps = this.roomGapsData[room.name] || [];
    if (gaps.length === 0) {
       // A stairwell with no openings might be sealed shut
       this.addIssue({
         id: `stair_sealed_${room.name}`,
         type: 'stair_gap',
         severity: 'medium',
         roomName: room.name,
         location: [room.x, room.y + 1, room.z],
         description: 'Sealed Stairwell',
         details: `${room.name} has no doorways/gaps, may be inaccessible.`
       });
    }
  }

  private checkDoorwayCoverage(room: RoomData) {
    const gaps = this.roomGapsData[room.name] || [];
    const roomDoors = this.doorsData.filter(d => d.room === room.name);

    for (const gap of gaps) {
      // Find corresponding door
      const door = roomDoors.find(d => {
        if (d.side !== gap.side) return false;
        return Math.abs(d.offset - gap.offset) < 1.0;
      });

      if (!door) {
        const loc = this.getGapLocation(room, gap);
        this.addIssue({
          id: `door_missing_${room.name}_${gap.side}_${gap.offset}`,
          type: 'door_gap',
          severity: 'high',
          roomName: room.name,
          location: loc,
          description: 'Uncovered Doorway',
          details: `Gap at ${gap.side} offset ${gap.offset} has no associated door.`
        });
      } else {
        // Check size mismatch
        if (Math.abs(door.width - gap.width) > 0.5) {
          const loc = this.getGapLocation(room, gap);
          this.addIssue({
            id: `door_size_${room.name}_${gap.side}_${gap.offset}`,
            type: 'door_gap',
            severity: 'medium',
            roomName: room.name,
            location: loc,
            description: 'Door Size Mismatch',
            details: `Door width (${door.width}) does not match gap width (${gap.width}).`
          });
        }
      }
    }
  }

  private checkRoomCorners(room: RoomData) {
    const corners = [
      { x: room.x - room.width/2, z: room.z - room.depth/2, name: 'SW' },
      { x: room.x + room.width/2, z: room.z - room.depth/2, name: 'SE' },
      { x: room.x + room.width/2, z: room.z + room.depth/2, name: 'NE' },
      { x: room.x - room.width/2, z: room.z + room.depth/2, name: 'NW' },
    ];

    const gaps = this.roomGapsData[room.name] || [];
    
    for (const corner of corners) {
      const touchingSides: ('N'|'S'|'E'|'W')[] = [];
      if (Math.abs(corner.z - (room.z - room.depth/2)) < 0.1) touchingSides.push('S');
      if (Math.abs(corner.z - (room.z + room.depth/2)) < 0.1) touchingSides.push('N');
      if (Math.abs(corner.x - (room.x - room.width/2)) < 0.1) touchingSides.push('W');
      if (Math.abs(corner.x - (room.x + room.width/2)) < 0.1) touchingSides.push('E');

      let gapTooClose = false;
      for (const side of touchingSides) {
        const sideGaps = gaps.filter(g => g.side === side);
        for (const gap of sideGaps) {
          const distToCorner = this.getDistanceToCorner(gap, side, corner, room);
          if (distToCorner >= 0 && distToCorner < 0.5) {
            gapTooClose = true;
            break;
          }
        }
      }

      if (gapTooClose) {
        this.addIssue({
          id: `corner_crack_${room.name}_${corner.name}`,
          type: 'corner_crack',
          severity: 'high',
          roomName: room.name,
          location: [corner.x, room.y + 1, corner.z],
          description: 'Corner Crack Risk',
          details: `Opening too close to ${corner.name} corner in ${room.name}, may cause rendering issues.`
        });
      }
    }
  }

  private getDistanceToCorner(gap: GapData, side: string, corner: any, room: RoomData): number {
    if (side === 'N' || side === 'S') {
      const cornerX = corner.x;
      const gapStart = gap.offset - gap.width/2;
      const gapEnd = gap.offset + gap.width/2;
      if (cornerX < gapStart) return gapStart - cornerX;
      if (cornerX > gapEnd) return cornerX - gapEnd;
      return -1; // Overlap
    } else {
      const cornerZ = corner.z;
      const gapStart = gap.offset - gap.width/2;
      const gapEnd = gap.offset + gap.width/2;
      if (cornerZ < gapStart) return gapStart - cornerZ;
      if (cornerZ > gapEnd) return cornerZ - gapEnd;
      return -1;
    }
  }

  private getNeighbors(room: RoomData) {
    const neighbors: Record<string, RoomData | null> = { N: null, S: null, E: null, W: null };
    
    for (const other of this.roomsData) {
      if (other.name === room.name) continue;
      
      if (Math.abs(other.x - room.x) < 5 && Math.abs(other.z - (room.z - room.depth)) < 5) {
        neighbors.S = other;
      }
      if (Math.abs(other.x - room.x) < 5 && Math.abs(other.z - (room.z + room.depth)) < 5) {
        neighbors.N = other;
      }
      if (Math.abs(other.z - room.z) < 5 && Math.abs(other.x - (room.x - room.width)) < 5) {
        neighbors.W = other;
      }
      if (Math.abs(other.z - room.z) < 5 && Math.abs(other.x - (room.x + room.width)) < 5) {
        neighbors.E = other;
      }
    }
    return neighbors;
  }

  private getNeighborInDirection(room: RoomData, dir: 'N'|'S'|'E'|'W'): RoomData | null {
    const neighbors = this.getNeighbors(room);
    return neighbors[dir] || null;
  }

  private getWallCenter(room: RoomData, side: 'N'|'S'|'E'|'W'): [number, number, number] {
    const halfW = room.width / 2;
    const halfD = room.depth / 2;
    const y = room.y + room.height / 2;
    
    switch(side) {
      case 'N': return [room.x, y, room.z + halfD];
      case 'S': return [room.x, y, room.z - halfD];
      case 'E': return [room.x + halfW, y, room.z];
      case 'W': return [room.x - halfW, y, room.z];
    }
  }

  private getGapLocation(room: RoomData, gap: GapData): [number, number, number] {
    const halfW = room.width / 2;
    const halfD = room.depth / 2;
    const y = room.y + 1;
    
    switch(gap.side) {
      case 'N': return [room.x + gap.offset, y, room.z + halfD];
      case 'S': return [room.x + gap.offset, y, room.z - halfD];
      case 'E': return [room.x + halfW, y, room.z + gap.offset];
      case 'W': return [room.x - halfW, y, room.z + gap.offset];
    }
  }

  private addIssue(issue: ValidationIssue) {
    if (!this.issues.find(i => i.id === issue.id)) {
      this.issues.push(issue);
    }
  }
}

export const getRoomSealValidator = (() => {
  let instance: RoomSealValidator | null = null;
  return () => {
    if (!instance) {
      instance = new RoomSealValidator();
    }
    return instance;
  };
})();
