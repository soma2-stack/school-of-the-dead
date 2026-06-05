export interface DoorConnection {
  fromRoomId: string;
  fromRoomName: string;
  toRoomId: string | null;
  toRoomName: string | null;
  side: 'N' | 'S' | 'E' | 'W';
  gapCenter: number;
  gapWidth: number;
  cost: number;
  connectionType: 'Door' | 'Open Passage' | 'Stairwell' | 'Connector' | 'None';
  isPurchasable: boolean;
}

export interface RoomDoorData {
  id: string;
  name: string;
  cx: number;
  cz: number;
  w: number;
  d: number;
  floorY: number;
  h: number;
  isStaircase: boolean;
  isHallway: boolean;
  isConnector: boolean;
  doors: DoorConnection[];
  reachableWithoutPurchase: boolean;
  missingDoors: MissingDoorRecommendation[];
}

export interface MissingDoorRecommendation {
  side: 'N' | 'S' | 'E' | 'W';
  location: [number, number, number];
  recommendedPrice: number;
  recommendedType: 'Classroom Door' | 'Double Door' | 'Security Gate' | 'Chain Barrier' | 'Rubble Barrier';
  reason: string;
}

export interface DoorAuditReport {
  totalRooms: number;
  roomsWithDoors: number;
  roomsMissingDoors: number;
  reachableWithoutPurchase: string[];
  progressionBreaks: string[];
  allConnections: DoorConnection[];
  roomData: RoomDoorData[];
  recommendations: MissingDoorRecommendation[];
}

export interface RoomAdjacency {
  roomId: string;
  neighborId: string;
  side: 'N' | 'S' | 'E' | 'W';
  distance: number;
}

class DoorConnectivityAuditor {
  private roomsData: RoomDoorData[] = [];
  private gapsData: Record<string, Array<{ side: 'N' | 'S' | 'E' | 'W'; center: number; width: number }>> = {};
  private doorsConfig: Array<{ roomId: string; side: 'N' | 'S' | 'E' | 'W'; gapIndex: number; cost: number }> = [];
  private adjacencies: RoomAdjacency[] = [];

  /**
   * Initialize auditor with room, gap, and door configuration data
   */
  initialize(
    rooms: any[],
    gaps: Record<string, Array<{ side: 'N' | 'S' | 'E' | 'W'; center: number; width: number }>>,
    doorsConfig: Array<{ roomId: string; side: 'N' | 'S' | 'E' | 'W'; gapIndex: number; cost: number }>
  ) {
    this.gapsData = gaps;
    this.doorsConfig = doorsConfig;
    this.adjacencies = [];

    // Build room door data
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
        isStaircase: r.isStaircase || false,
        isHallway: roomNameLower.includes('hallway') || roomNameLower.includes('corridor'),
        isConnector: roomNameLower.includes('connector') || roomNameLower.includes('transition'),
        doors: [],
        reachableWithoutPurchase: false,
        missingDoors: [],
      };
    });

    // Calculate adjacencies between rooms
    this.calculateAdjacencies();

    // Build door connections for each room
    this.buildDoorConnections();

    // Analyze progression (which rooms are reachable without purchase from starter)
    this.analyzeProgression();

    // Find missing door opportunities
    this.findMissingDoors();
  }

  /**
   * Calculate which rooms are adjacent to each other
   */
  private calculateAdjacencies() {
    const edgeTolerance = 5.0;
    const overlapTolerance = 2.0;

    for (const room of this.roomsData) {
      const halfW = room.w / 2;
      const halfD = room.d / 2;

      for (const other of this.roomsData) {
        if (other.id === room.id) continue;

        const otherHalfW = other.w / 2;
        const otherHalfD = other.d / 2;

        // Check North neighbor
        if (Math.abs((other.cz - otherHalfD) - (room.cz + halfD)) < edgeTolerance) {
          const overlap = Math.min(room.cx + halfW + overlapTolerance, other.cx + otherHalfW + overlapTolerance) -
                         Math.max(room.cx - halfW - overlapTolerance, other.cx - otherHalfW - overlapTolerance);
          if (overlap > 0.5) {
            this.adjacencies.push({
              roomId: room.id,
              neighborId: other.id,
              side: 'N',
              distance: Math.abs((other.cz - otherHalfD) - (room.cz + halfD)),
            });
          }
        }

        // Check South neighbor
        if (Math.abs((other.cz + otherHalfD) - (room.cz - halfD)) < edgeTolerance) {
          const overlap = Math.min(room.cx + halfW + overlapTolerance, other.cx + otherHalfW + overlapTolerance) -
                         Math.max(room.cx - halfW - overlapTolerance, other.cx - otherHalfW - overlapTolerance);
          if (overlap > 0.5) {
            this.adjacencies.push({
              roomId: room.id,
              neighborId: other.id,
              side: 'S',
              distance: Math.abs((other.cz + otherHalfD) - (room.cz - halfD)),
            });
          }
        }

        // Check East neighbor
        if (Math.abs((other.cx - otherHalfW) - (room.cx + halfW)) < edgeTolerance) {
          const overlap = Math.min(room.cz + halfD + overlapTolerance, other.cz + otherHalfD + overlapTolerance) -
                         Math.max(room.cz - halfD - overlapTolerance, other.cz - otherHalfD - overlapTolerance);
          if (overlap > 0.5) {
            this.adjacencies.push({
              roomId: room.id,
              neighborId: other.id,
              side: 'E',
              distance: Math.abs((other.cx - otherHalfW) - (room.cx + halfW)),
            });
          }
        }

        // Check West neighbor
        if (Math.abs((other.cx + otherHalfW) - (room.cx - halfW)) < edgeTolerance) {
          const overlap = Math.min(room.cz + halfD + overlapTolerance, other.cz + otherHalfD + overlapTolerance) -
                         Math.max(room.cz - halfD - overlapTolerance, other.cz - otherHalfD - overlapTolerance);
          if (overlap > 0.5) {
            this.adjacencies.push({
              roomId: room.id,
              neighborId: other.id,
              side: 'W',
              distance: Math.abs((other.cx + otherHalfW) - (room.cx - halfW)),
            });
          }
        }
      }
    }
  }

  /**
   * Build door connection data for each room
   */
  private buildDoorConnections() {
    for (const room of this.roomsData) {
      const gaps = this.gapsData[room.id] || [];
      const halfW = room.w / 2;
      const halfD = room.d / 2;

      // Process each gap as a potential door
      gaps.forEach((gap, gapIndex) => {
        // Find if there's a configured door for this gap
        const configuredDoor = this.doorsConfig.find(
          dc => dc.roomId === room.id && dc.side === gap.side && dc.gapIndex === gapIndex
        );

        // Find neighbor across this gap
        const adjacency = this.adjacencies.find(
          a => a.roomId === room.id && a.side === gap.side
        );
        const neighborRoom = adjacency 
          ? this.roomsData.find(r => r.id === adjacency.neighborId) 
          : null;

        // Determine connection type
        let connectionType: DoorConnection['connectionType'] = 'Door';
        if (room.isStaircase || neighborRoom?.isStaircase) {
          connectionType = 'Stairwell';
        } else if (room.isConnector || neighborRoom?.isConnector) {
          connectionType = 'Connector';
        } else if (!configuredDoor) {
          connectionType = 'Open Passage';
        }

        // Calculate door location
        let location: [number, number, number];
        if (gap.side === 'N' || gap.side === 'S') {
          const z = gap.side === 'N' ? room.cz + halfD : room.cz - halfD;
          location = [room.cx + gap.center, room.floorY, z];
        } else {
          const x = gap.side === 'E' ? room.cx + halfW : room.cx - halfW;
          location = [x, room.floorY, room.cz + gap.center];
        }

        const doorConnection: DoorConnection = {
          fromRoomId: room.id,
          fromRoomName: room.name,
          toRoomId: neighborRoom?.id || null,
          toRoomName: neighborRoom?.name || null,
          side: gap.side,
          gapCenter: gap.center,
          gapWidth: gap.width,
          cost: configuredDoor?.cost || 0,
          connectionType,
          isPurchasable: !!configuredDoor,
        };

        room.doors.push(doorConnection);
      });

      // Also check for walls without gaps that might need doors
      const sides: ('N' | 'S' | 'E' | 'W')[] = ['N', 'S', 'E', 'W'];
      for (const side of sides) {
        const hasGap = gaps.some(g => g.side === side);
        const adjacency = this.adjacencies.find(a => a.roomId === room.id && a.side === side);
        
        if (adjacency && !hasGap) {
          // There's a neighbor but no gap - this might be a solid wall
          const neighborRoom = this.roomsData.find(r => r.id === adjacency.neighborId);
          
          let location: [number, number, number];
          switch (side) {
            case 'N': location = [room.cx, room.floorY, room.cz + halfD]; break;
            case 'S': location = [room.cx, room.floorY, room.cz - halfD]; break;
            case 'E': location = [room.cx + halfW, room.floorY, room.cz]; break;
            case 'W': location = [room.cx - halfW, room.floorY, room.cz]; break;
          }

          room.doors.push({
            fromRoomId: room.id,
            fromRoomName: room.name,
            toRoomId: neighborRoom?.id || null,
            toRoomName: neighborRoom?.name || null,
            side,
            gapCenter: 0,
            gapWidth: 0,
            cost: 0,
            connectionType: 'None',
            isPurchasable: false,
          });
        }
      }
    }
  }

  /**
   * Analyze which rooms are reachable without purchasing doors
   */
  private analyzeProgression() {
    const starterRoom = this.roomsData.find(r => r.id === 'starter');
    if (!starterRoom) return;

    const reachable = new Set<string>(['starter']);
    let changed = true;

    while (changed) {
      changed = false;
      for (const room of this.roomsData) {
        if (reachable.has(room.id)) {
          // Check all doors from this room
          for (const door of room.doors) {
            if (door.toRoomId && !reachable.has(door.toRoomId)) {
              // Can reach neighbor if door is free (no cost) or open passage
              if (!door.isPurchasable || door.cost === 0 || door.connectionType === 'Open Passage') {
                reachable.add(door.toRoomId);
                changed = true;
              }
            }
          }
        }
      }
    }

    // Mark rooms as reachable without purchase
    for (const room of this.roomsData) {
      room.reachableWithoutPurchase = reachable.has(room.id);
    }
  }

  /**
   * Find missing door opportunities
   */
  private findMissingDoors() {
    for (const room of this.roomsData) {
      const halfW = room.w / 2;
      const halfD = room.d / 2;

      // Skip exterior rooms
      const roomNameLower = room.name.toLowerCase();
      const isExterior = roomNameLower.includes('courtyard') || 
                        roomNameLower.includes('exterior') ||
                        roomNameLower.includes('outdoor');

      for (const side of ['N', 'S', 'E', 'W'] as const) {
        const adjacency = this.adjacencies.find(a => a.roomId === room.id && a.side === side);
        if (!adjacency) continue;

        const neighborRoom = this.roomsData.find(r => r.id === adjacency.neighborId);
        if (!neighborRoom) continue;

        // Check if there's already a door/gap on this side
        const existingDoor = room.doors.find(d => d.side === side && d.gapWidth > 0);
        if (existingDoor) continue;

        // This is a potential missing door
        let location: [number, number, number];
        switch (side) {
          case 'N': location = [room.cx, room.floorY, room.cz + halfD]; break;
          case 'S': location = [room.cx, room.floorY, room.cz - halfD]; break;
          case 'E': location = [room.cx + halfW, room.floorY, room.cz]; break;
          case 'W': location = [room.cx - halfW, room.floorY, room.cz]; break;
        }

        // Determine recommended door type and price
        let recommendedType: MissingDoorRecommendation['recommendedType'] = 'Classroom Door';
        let recommendedPrice = 750;
        let reason = 'Standard interior room connection';

        if (room.isHallway || neighborRoom.isHallway) {
          recommendedType = 'Double Door';
          recommendedPrice = 1000;
          reason = 'Hallway connection requires wider entrance';
        } else if (room.isStaircase || neighborRoom.isStaircase) {
          recommendedType = 'Security Gate';
          recommendedPrice = 1250;
          reason = 'Stairwell access requires security barrier';
        } else if (isExterior) {
          recommendedType = 'Rubble Barrier';
          recommendedPrice = 500;
          reason = 'Exterior connection can use debris barrier';
        }

        room.missingDoors.push({
          side,
          location,
          recommendedPrice,
          recommendedType,
          reason,
        });
      }
    }
  }

  /**
   * Run full door audit and generate report
   */
  runAudit(): DoorAuditReport {
    // Count rooms with any door connection (gap exists)
    const roomsWithDoorGaps = this.roomsData.filter(r => r.doors.some(d => d.gapWidth > 0)).length;
    
    // Count rooms with purchasable doors (configured)
    const roomsWithPurchasableDoors = this.roomsData.filter(r => r.doors.some(d => d.isPurchasable)).length;
    
    const roomsMissingDoors = this.roomsData.filter(r => r.missingDoors.length > 0).length;
    const reachableWithoutPurchase = this.roomsData
      .filter(r => r.reachableWithoutPurchase && r.id !== 'starter')
      .map(r => r.name);
    
    // Find progression breaks (rooms that should be reachable but aren't)
    const progressionBreaks = this.roomsData
      .filter(r => !r.reachableWithoutPurchase && r.id !== 'starter' && !r.isStaircase)
      .filter(r => {
        // Check if room has at least one adjacent room that IS reachable
        return r.doors.some(d => {
          const neighbor = this.roomsData.find(nr => nr.id === d.toRoomId);
          return neighbor?.reachableWithoutPurchase;
        });
      })
      .map(r => r.name);

    const allConnections: DoorConnection[] = [];
    for (const room of this.roomsData) {
      allConnections.push(...room.doors.filter(d => d.gapWidth > 0));
    }

    // Categorize connections by type
    const doorConnections = allConnections.filter(c => c.connectionType === 'Door');
    const openPassages = allConnections.filter(c => c.connectionType === 'Open Passage');
    const stairConnections = allConnections.filter(c => c.connectionType === 'Stairwell');
    const connectorConnections = allConnections.filter(c => c.connectionType === 'Connector');
    const noneConnections = allConnections.filter(c => c.connectionType === 'None');

    console.log('\\n=== CONNECTION BREAKDOWN ===');
    console.log(`Door Connections: ${doorConnections.length}`);
    console.log(`Open Passages: ${openPassages.length}`);
    console.log(`Stair Connections: ${stairConnections.length}`);
    console.log(`Connector Connections: ${connectorConnections.length}`);
    console.log(`None/Barrier: ${noneConnections.length}`);
    console.log(`Total Gaps: ${allConnections.length}`);
    console.log('============================\\n');

    // Print each connection detail
    console.log('\\n=== ALL CONNECTIONS ===');
    allConnections.forEach(conn => {
      console.log(`${conn.fromRoomName} -> ${conn.toRoomName || 'VOID'}`);
      console.log(`  Side: ${conn.side}, Type: ${conn.connectionType}, Cost: ${conn.isPurchasable ? `$${conn.cost}` : 'N/A'}, Gap: ${conn.gapWidth}`);
    });
    console.log('=======================\\n');

    const allRecommendations: MissingDoorRecommendation[] = [];
    for (const room of this.roomsData) {
      allRecommendations.push(...room.missingDoors);
    }

    return {
      totalRooms: this.roomsData.length,
      roomsWithDoors: roomsWithDoorGaps,  // Changed to count rooms with gaps, not just purchasable
      roomsMissingDoors,
      reachableWithoutPurchase,
      progressionBreaks,
      allConnections,
      roomData: this.roomsData,
      recommendations: allRecommendations,
    };
  }

  /**
   * Get formatted connectivity graph for display
   */
  getConnectivityGraph(): string {
    const lines: string[] = [];
    
    for (const room of this.roomsData) {
      lines.push(`\n${room.name.toUpperCase()}`);
      
      for (const door of room.doors.filter(d => d.gapWidth > 0)) {
        const target = door.toRoomName || 'VOID';
        const costStr = door.isPurchasable ? `$${door.cost}` : 'FREE';
        const typeStr = door.connectionType === 'Door' ? 'Door' : door.connectionType;
        lines.push(`-> ${target} (${door.side} ${typeStr} ${costStr})`);
      }
    }

    return lines.join('\n');
  }
}

export function getDoorAuditor(): DoorConnectivityAuditor {
  return new DoorConnectivityAuditor();
}
