import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { getDoorManager, initializeDoors, DoorEventType } from './utils/doors';
import { getPointsManager } from './utils/points';
import { createDoorRenderer } from './utils/DoorRenderer';
import { getRoomSealValidator, ValidationIssue } from './utils/MapValidator';
import { PointsDisplay } from './utils/PointsDisplay';
import { RuntimeDoor } from './types';
import { getFloorAuditor, getDebugFloorData, FloorIssue, renderFloorDebug } from './utils/FloorIntegrityAudit';
import { getConnectivityAuditor, ConnectivityIssue, DebugVisualizationData as ConnectivityDebugData } from './utils/MapConnectivityAudit';
import { getDoorAuditor, DoorAuditReport, DoorConnection } from './utils/DoorConnectivityAudit';
import { createGeometryInspector, GeometryInspector } from './utils/GeometryInspector';
import { getZombieManager, ZombieManager, getZombieCountForRound, setWallColliderDebug, toggleWallColliderDebug } from './utils/zombies';
import { getRoundManager, RoundManager } from './utils/rounds';
import { getWeaponManager, WeaponManager } from './utils/weapons';
import { Crosshair } from './utils/Crosshair';
import { logger } from './utils/logger';
import { WeaponUI } from './utils/WeaponUI';
import DebugOverlay, { DebugData } from './components/DebugOverlay';
import {
  Room,
  INITIAL_ROOMS,
  ROOM_GAPS,
  DOORS_CONFIG,
  MAP_CONFIG,
  MAP_PROPS,
  getStaircaseElevation,
} from './game/mapConfig';
import { PLAYER_EYE_HEIGHT, PLAYER_RADIUS } from './game/playerConfig';
import { getProceduralTexture } from './game/proceduralTextures';
import { useLatestRef } from './hooks/useLatestRef';
import { useDebugLighting } from './hooks/useDebugLighting';
import { useDebugAuditHelpers, type DebugAuditDeps } from './hooks/useDebugAuditHelpers';
import { useDebugOverlayActions, type DebugOverlayActionsDeps } from './hooks/useDebugOverlayActions';

// ============================================================================
// SCENE BUILDING HELPERS
// ============================================================================

const doorHt = MAP_CONFIG.doorHeight;

export default function App() {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const yaw = useRef<number>(Math.PI);
  const pitch = useRef<number>(0);
  const playerPos = useRef<THREE.Vector3>(new THREE.Vector3(0, PLAYER_EYE_HEIGHT, -30));
  const velocityY = useRef<number>(0);
  const keysPressed = useRef<Record<string, boolean>>({});
  const isGrounded = useRef<boolean>(true);
  const noclipRef = useRef<boolean>(false);
  const [isPointerLocked, setIsPointerLocked] = useState<boolean>(false);
  const [promptText, setPromptText] = useState<string>('');
  const [canInteract, setCanInteract] = useState<boolean>(false);
  
  // Map Validation Mode state
  const [validationModeEnabled, setValidationModeEnabled] = useState<boolean>(false);
  const [validationIssues, setValidationIssues] = useState<ValidationIssue[]>([]);
  const [currentIssueIndex, setCurrentIssueIndex] = useState<number>(-1);
  const mapValidatorRef = useRef(getRoomSealValidator());
  
  // Floor Debug Mode state
  const [floorDebugMode, setFloorDebugMode] = useState<boolean>(false);
  const [floorAuditIssues, setFloorAuditIssues] = useState<FloorIssue[]>([]);
  const [currentFloorIssueIndex, setCurrentFloorIssueIndex] = useState<number>(-1);
  const floorAuditorRef = useRef(getFloorAuditor());
  
  // Ref for doors array (to be accessible by helper functions)
  const doorsRef = useRef<RuntimeDoor[]>([]);
  
  // Map Connectivity Audit state
  const [connectivityDebugMode, setConnectivityDebugMode] = useState<boolean>(false);
  const [connectivityIssues, setConnectivityIssues] = useState<ConnectivityIssue[]>([]);
  const [currentConnectivityIssueIndex, setCurrentConnectivityIssueIndex] = useState<number>(-1);
  const connectivityAuditorRef = useRef(getConnectivityAuditor());
  const [connectivityReport, setConnectivityReport] = useState<any>(null);
  
  // Door Connectivity Audit state
  const doorAuditorRef = useRef(getDoorAuditor());
  const [doorAuditReport, setDoorAuditReport] = useState<DoorAuditReport | null>(null);
  
  // Geometry Inspector state
  const [geometryInspectorEnabled, setGeometryInspectorEnabled] = useState<boolean>(false);
  const geometryInspectorRef = useRef<GeometryInspector | null>(null);
  const [inspectedMeshInfo, setInspectedMeshInfo] = useState<{ meshName: string; roomId?: string; wallId?: string; floorId?: string } | null>(null);
  
  // Debug wireframe ref for DEBUG_FLOORS test
  const debugWireframeRef = useRef<THREE.LineSegments | null>(null);
  
  // Wall collider debug state
  const [showWallColliders, setShowWallColliders] = useState<boolean>(false);
  
  // Not Enough Points feedback state
  const [showNotEnoughPoints, setShowNotEnoughPoints] = useState<boolean>(false);
  
  // Debug overlay state
  const [debugOverlayOpen, setDebugOverlayOpen] = useState<boolean>(false);
  const [debugLightingEnabled, setDebugLightingEnabled] = useState<boolean>(false);
  const [debugLightingBrightness, setDebugLightingBrightness] = useState<number>(3.0);
  const [fps, setFps] = useState<number>(60);
  const [meshCount, setMeshCount] = useState<number>(0);
  const [drawCalls, setDrawCalls] = useState<number>(0);
  const [currentRoomName, setCurrentRoomName] = useState<string>('');
  const [roundState, setRoundState] = useState<{ round: number; zombiesAlive: number; spawnStatus: string }>({
    round: 1,
    zombiesAlive: 0,
    spawnStatus: 'idle'
  });
  
  // Stair debug state
  const [stairVisualDebugEnabled, setStairVisualDebugEnabled] = useState<boolean>(false);
  const [stairCollisionDebugEnabled, setStairCollisionDebugEnabled] = useState<boolean>(false);
  const [stairDebugData, setStairDebugData] = useState<any[]>([]);
  const [playerStairAnalysis, setPlayerStairAnalysis] = useState<any>(null);

  // Zombie debug state (throttled)
  const [zombieDebugData, setZombieDebugData] = useState<any>(null);

  // Refs for per-frame debug data to avoid re-renders
  const currentRoomNameRef = useRef<string>('');
  const playerStairAnalysisRef = useRef<any>(null);
  const lastZombieDebugUpdate = useRef<number>(0);

  // Refs to track latest debug issue arrays for hotkey cycling (avoid stale closures)
  const floorAuditIssuesRef = useLatestRef(floorAuditIssues);
  const connectivityIssuesRef = useLatestRef(connectivityIssues);
  const validationIssuesRef = useLatestRef(validationIssues);

  // Refs to track latest debug issue indexes for hotkey cycling (avoid stale closures)
  const currentFloorIssueIndexRef = useLatestRef(currentFloorIssueIndex);
  const currentConnectivityIssueIndexRef = useLatestRef(currentConnectivityIssueIndex);
  const currentIssueIndexRef = useLatestRef(currentIssueIndex);

  // Refs to track latest debug mode booleans for render loop (avoid stale closures)
  const validationModeEnabledRef = useLatestRef<boolean>(validationModeEnabled);
  const floorDebugModeRef = useLatestRef<boolean>(floorDebugMode);
  const geometryInspectorEnabledRef = useLatestRef<boolean>(geometryInspectorEnabled);

  // Refs to track latest debug lighting state (avoid stale closures in handlers)
  const debugLightingEnabledRef = useLatestRef<boolean>(debugLightingEnabled);
  const debugLightingBrightnessRef = useLatestRef<number>(debugLightingBrightness);

  // ==========================================================================
  // DEBUG/AUDIT HELPER FUNCTIONS (Extracted into hook)
  // ==========================================================================

  const {
    runFloorAudit,
    teleportToNextFloorIssue,
    runConnectivityAudit,
    teleportToNextConnectivityIssue,
    scanCurrentRoomForValidation,
    teleportToNextValidationIssue,
    toggleValidationMode,
  } = useDebugAuditHelpers({
    floorAuditorRef,
    connectivityAuditorRef,
    mapValidatorRef,
    floorAuditIssuesRef,
    connectivityIssuesRef,
    validationIssuesRef,
    currentFloorIssueIndexRef,
    currentConnectivityIssueIndexRef,
    currentIssueIndexRef,
    floorDebugModeRef,
    playerPos,
    yaw,
    doorsRef,
    setFloorAuditIssues,
    setFloorDebugMode,
    setCurrentFloorIssueIndex,
    setConnectivityIssues,
    setConnectivityReport,
    setConnectivityDebugMode,
    setCurrentConnectivityIssueIndex,
    setValidationIssues,
    setValidationModeEnabled,
    setCurrentIssueIndex,
  });

  // Zombie manager ref
  const zombieManagerRef = useRef<ZombieManager | null>(null);
  
  // Weapon manager ref
  const weaponManagerRef = useRef<WeaponManager | null>(null);

  // Debug lighting hook
  const { ambientLightRef, originalAmbientIntensityRef, toggleDebugLighting } = useDebugLighting({
    setDebugLightingEnabled,
    debugLightingEnabledRef,
    debugLightingBrightnessRef,
  });

  // Debug overlay actions hook
  const {
    addPlayerPoints,
    setPlayerPoints,
    startDebugRound,
    goToNextDebugRound,
    goToPreviousDebugRound,
    forceEndDebugRound,
    spawnCurrentDebugWave,
    killAllDebugZombies,
    spawnDebugZombies,
  } = useDebugOverlayActions({
    zombieManagerRef,
    setRoundState,
    roundState,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const mount = mountRef.current;
    if (!canvas || !mount) return;

    // Initialize doors system
    initializeDoors();
    
    // Set up door event listener for purchase attempts
    const doorManager = getDoorManager();
    const unsubscribePurchaseAttempt = doorManager.on('purchaseAttempt', (data) => {
      console.log('[App] Door purchase attempt failed:', data.doorName);
      setShowNotEnoughPoints(true);
      setTimeout(() => setShowNotEnoughPoints(false), 2000);
    });
    
    // Cleanup on unmount
    return () => {
      unsubscribePurchaseAttempt();
    };
  }, []);

  // Expose global command for running connectivity audit from console
  useEffect(() => {
    (window as any).runConnectivityAudit = () => {
      const auditor = connectivityAuditorRef.current;
      auditor.initialize(INITIAL_ROOMS, ROOM_GAPS, 'starter');
      const report = auditor.runAudit();
      const issues = auditor.getIssues();
      setConnectivityIssues(issues);
      setConnectivityReport(report);
      setConnectivityDebugMode(true);
      setCurrentConnectivityIssueIndex(-1);
      
      console.log('=== MAP CONNECTIVITY AUDIT REPORT ===');
      console.log(`Total Rooms Scanned: ${INITIAL_ROOMS.length}`);
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
    
    // Add teleport function for connectivity issues
    (window as any).teleportToAuditIssue = (index: number) => {
      const issues = connectivityAuditorRef.current.getIssues();
      if (issues[index]) {
        const issue = issues[index];
        playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
        yaw.current = Math.PI;
        noclipRef.current = true; // Enable noclip automatically
        setCurrentConnectivityIssueIndex(index);
        setConnectivityDebugMode(true);
        console.log(`Teleported to issue #${index + 1}: ${issue.type} in ${issue.roomName}`);
      } else {
        console.error(`Issue index ${index} not found. Total issues: ${issues.length}`);
      }
    };
    
    return () => {
      delete (window as any).runConnectivityAudit;
      delete (window as any).teleportToAuditIssue;
    };
  }, []);

  // Expose global command for running door audit from console
  useEffect(() => {
    (window as any).runDoorAudit = () => {
      const auditor = doorAuditorRef.current;
      auditor.initialize(INITIAL_ROOMS, ROOM_GAPS, DOORS_CONFIG);
      const report = auditor.runAudit();
      setDoorAuditReport(report);
      
      console.log("[DOOR AUDIT] Registered");
      console.log(typeof (window as any).runDoorAudit);
      console.log("[DOOR AUDIT] Room Source", INITIAL_ROOMS);
      console.log("[DOOR AUDIT] Room Count", INITIAL_ROOMS.length);
      
      console.log('=== DOOR AUDIT REPORT ===');
      console.log(`Total Rooms: ${report.totalRooms}`);
      console.log(`Rooms With Doors: ${report.roomsWithDoors}`);
      console.log(`Rooms Missing Doors: ${report.roomsMissingDoors}`);
      console.log(`Reachable Without Purchase: ${report.reachableWithoutPurchase.length}`);
      console.log(`Progression Breaks: ${report.progressionBreaks.length}`);
      if (report.progressionBreaks.length > 0) {
        report.progressionBreaks.forEach(name => console.log(`  - ${name}`));
      }
      console.log(`Total Door Connections: ${report.allConnections.length}`);
      console.log(`Total Recommendations: ${report.recommendations.length}`);
      
      // ========================================================================
      // COMPLETE PROGRESSION GRAPH - Print every room and every connection
      // ========================================================================
      console.log('\\n========================================');
      console.log('       COMPLETE ROOM CONNECTIVITY GRAPH');
      console.log('========================================\\n');
      
      report.roomData.forEach(room => {
        console.log(`┌─────────────────────────────────────────`);
        console.log(`│ ${room.name}`);
        console.log(`│ ID: ${room.id}`);
        console.log(`│ Reachable Without Purchase: ${room.reachableWithoutPurchase ? 'YES' : 'NO'}`);
        console.log(`│ Connected Rooms:`);
        
        if (room.doors.length === 0) {
          console.log(`│   (No connections)`);
        } else {
          room.doors.forEach(door => {
            const targetName = door.toRoomName || 'VOID (exterior)';
            const typeLabel = door.connectionType === 'None' ? 'Solid Wall' : door.connectionType;
            const costLabel = door.isPurchasable ? `$${door.cost}` : (door.connectionType === 'Open Passage' ? 'FREE' : 'N/A');
            console.log(`│   -> ${targetName}`);
            console.log(`│      Side: ${door.side}, Type: ${typeLabel}, Cost: ${costLabel}`);
          });
        }
        console.log(`└─────────────────────────────────────────\\n`);
      });
      
      // ========================================================================
      // CONNECTION TYPE SUMMARY
      // ========================================================================
      console.log('========================================');
      console.log('         CONNECTION TYPE SUMMARY');
      console.log('========================================\\n');
      
      const byType: Record<string, number> = {};
      report.allConnections.forEach(conn => {
        byType[conn.connectionType] = (byType[conn.connectionType] || 0) + 1;
      });
      
      Object.entries(byType).forEach(([type, count]) => {
        console.log(`${type}: ${count}`);
      });
      
      // ========================================================================
      // EXPLAIN: Rooms With Doors = 0 vs Total Door Connections = 43
      // ========================================================================
      console.log('\\n========================================');
      console.log('         CONTRADICTION EXPLANATION');
      console.log('========================================\\n');
      
      const roomsWithGaps = report.roomData.filter(r => r.doors.some(d => d.gapWidth > 0));
      const roomsWithPurchasable = report.roomData.filter(r => r.doors.some(d => d.isPurchasable));
      
      console.log(`"Rooms With Doors" metric counts rooms with PURCHASABLE doors configured.`);
      console.log(`Current DOORS_CONFIG has ${DOORS_CONFIG.length} entries.`);
      console.log(`Rooms with purchasable doors: ${roomsWithPurchasable.length}`);
      console.log(`Rooms with door gaps (openings): ${roomsWithGaps.length}`);
      console.log(`Total door gap connections: ${report.allConnections.length}\\n`);
      
      console.log(`The apparent contradiction occurs because:`);
      console.log(`1. There ARE ${report.allConnections.length} door gaps (physical openings)`);
      console.log(`2. But "Rooms With Doors" only counts rooms with CONFIGURED purchasable doors`);
      console.log(`3. If DOORS_CONFIG is empty or misconfigured, count will be 0\\n`);
      
      // ========================================================================
      // WHY NURSE'S OFFICE IS A PROGRESSION BREAK
      // ========================================================================
      console.log('========================================');
      console.log('     PROGRESSION BREAK ANALYSIS');
      console.log('========================================\\n');
      
      const nursesOffice = report.roomData.find(r => r.id === 'nurses_office');
      if (nursesOffice) {
        console.log(`Nurse's Office Analysis:`);
        console.log(`  Reachable Without Purchase: ${nursesOffice.reachableWithoutPurchase ? 'YES' : 'NO'}`);
        console.log(`  Connections:`);
        nursesOffice.doors.forEach(d => {
          const neighborReachable = report.roomData.find(r => r.id === d.toRoomId)?.reachableWithoutPurchase;
          console.log(`    -> ${d.toRoomName || 'VOID'} (${d.connectionType}, ${d.isPurchasable ? `$${d.cost}` : 'FREE'})`);
          console.log(`       Neighbor reachable: ${neighborReachable ? 'YES' : 'NO'}`);
        });
        
        if (!nursesOffice.reachableWithoutPurchase) {
          console.log(`\\n  REASON FOR PROGRESSION BREAK:`);
          console.log(`  All paths to Nurse's Office require purchasing a door.`);
          console.log(`  Check if adjacent rooms are reachable without purchase.\\n`);
        }
      }
      
      // ========================================================================
      // WHY 16 ROOMS ARE REACHABLE WITHOUT PURCHASES
      // ========================================================================
      console.log('========================================');
      console.log('    REACHABLE ROOMS ANALYSIS (16)');
      console.log('========================================\\n');
      
      const reachableRooms = report.roomData.filter(r => r.reachableWithoutPurchase);
      console.log(`Total reachable without purchase: ${reachableRooms.length} (including starter)\\n`);
      
      reachableRooms.forEach(room => {
        if (room.id === 'starter') {
          console.log(`✓ ${room.name} (STARTING ROOM)`);
        } else {
          // Find which door allows access
          const entryDoor = room.doors.find(d => {
            const neighbor = report.roomData.find(r => r.id === d.toRoomId);
            return neighbor?.reachableWithoutPurchase && (!d.isPurchasable || d.cost === 0 || d.connectionType === 'Open Passage');
          });
          
          if (entryDoor) {
            const fromRoom = report.roomData.find(r => r.id === entryDoor.toRoomId);
            console.log(`✓ ${room.name}`);
            console.log(`  Accessed via: ${fromRoom?.name} -> ${room.name} (${entryDoor.connectionType})`);
          } else {
            console.log(`✓ ${room.name} (path unclear - may be starter)`);
          }
        }
      });
      
      console.log('\\n========================================');
      console.log('              END OF REPORT');
      console.log('========================================\\n');
      
      console.log('=========================');
      
      // ========================================================================
      // CONNECTION VALIDATION - Check for bidirectional consistency
      // ========================================================================
      console.log('\\n========================================');
      console.log('         CONNECTION VALIDATION');
      console.log('========================================\\n');
      
      const validationErrors: string[] = [];
      const processedPairs = new Set<string>();
      
      for (const conn of report.allConnections) {
        if (!conn.toRoomId) {
          // Connection to VOID (exterior)
          validationErrors.push(`[INVALID] ${conn.fromRoomName} -> VOID (Connection leads to exterior)`);
          continue;
        }
        
        // Create a unique key for this room pair (sorted to avoid duplicates)
        const pairKey = [conn.fromRoomId, conn.toRoomId].sort().join('|');
        if (processedPairs.has(pairKey)) continue;
        processedPairs.add(pairKey);
        
        // Find the reverse connection
        const reverseConn = report.allConnections.find(
          c => c.fromRoomId === conn.toRoomId && c.toRoomId === conn.fromRoomId && c.side !== conn.side
        );
        
        if (!reverseConn) {
          validationErrors.push(`[INVALID] Missing reverse connection:`);
          validationErrors.push(`  ${conn.fromRoomName} (${conn.side}) -> ${conn.toRoomName}`);
          validationErrors.push(`  No corresponding ${getOppositeSide(conn.side)} connection from ${conn.toRoomName}`);
          continue;
        }
        
        // Check for type mismatches
        const typeMismatch = conn.connectionType !== reverseConn.connectionType;
        const costMismatch = conn.cost !== reverseConn.cost;
        const purchasableMismatch = conn.isPurchasable !== reverseConn.isPurchasable;
        
        if (typeMismatch || costMismatch || purchasableMismatch) {
          validationErrors.push(`[INVALID] Bidirectional mismatch:`);
          validationErrors.push(`  ${conn.fromRoomName} <-> ${conn.toRoomName}`);
          validationErrors.push(`  Side A (${conn.side}): Type=${conn.connectionType}, Cost=${conn.isPurchasable ? `$${conn.cost}` : 'FREE'}, Gap=${conn.gapWidth}`);
          validationErrors.push(`  Side B (${reverseConn.side}): Type=${reverseConn.connectionType}, Cost=${reverseConn.isPurchasable ? `$${reverseConn.cost}` : 'FREE'}, Gap=${reverseConn.gapWidth}`);
          
          if (typeMismatch) {
            const typePair = `${conn.connectionType}/${reverseConn.connectionType}`;
            if ((conn.connectionType === 'Door' && reverseConn.connectionType === 'Open Passage') ||
                (conn.connectionType === 'Open Passage' && reverseConn.connectionType === 'Door')) {
              validationErrors.push(`  >> MISMATCH: Door vs Open Passage`);
            } else if ((conn.connectionType === 'Door' && reverseConn.connectionType === 'Connector') ||
                       (conn.connectionType === 'Connector' && reverseConn.connectionType === 'Door')) {
              validationErrors.push(`  >> MISMATCH: Door vs Connector`);
            } else if ((conn.connectionType === 'Door' && reverseConn.connectionType === 'Stairwell') ||
                       (conn.connectionType === 'Stairwell' && reverseConn.connectionType === 'Door')) {
              validationErrors.push(`  >> MISMATCH: Door vs Stairwell`);
            } else {
              validationErrors.push(`  >> MISMATCH: ${typePair}`);
            }
          }
          if (costMismatch) {
            validationErrors.push(`  >> MISMATCH: Cost differs ($${conn.cost} vs $${reverseConn.cost})`);
          }
          if (purchasableMismatch) {
            validationErrors.push(`  >> MISMATCH: One side purchasable, other is not`);
          }
        }
      }
      
      // Check for duplicate connections
      const connectionSignatures = new Map<string, DoorConnection[]>();
      for (const conn of report.allConnections) {
        const sig = `${conn.fromRoomId}|${conn.toRoomId}|${conn.side}`;
        if (!connectionSignatures.has(sig)) {
          connectionSignatures.set(sig, []);
        }
        connectionSignatures.get(sig)!.push(conn);
      }
      
      for (const [sig, connections] of connectionSignatures.entries()) {
        if (connections.length > 1) {
          const [fromId, toId, side] = sig.split('|');
          const fromRoom = report.roomData.find(r => r.id === fromId);
          const toRoom = report.roomData.find(r => r.id === toId);
          validationErrors.push(`[DUPLICATE] Multiple connections on ${side} side:`);
          validationErrors.push(`  ${fromRoom?.name} -> ${toRoom?.name} (${connections.length} entries)`);
        }
      }
      
      if (validationErrors.length === 0) {
        console.log('All connections are valid and bidirectionally consistent.');
      } else {
        console.log(`Found ${validationErrors.length} validation issues:\\n`);
        validationErrors.forEach(err => console.log(err));
      }
      
      console.log('\\n========================================');
      console.log('           END OF VALIDATION');
      console.log('========================================\\n');
      
      console.log('=========================');
      
      return report;
    };
    
    function getOppositeSide(side: 'N' | 'S' | 'E' | 'W'): 'N' | 'S' | 'E' | 'W' {
      switch (side) {
        case 'N': return 'S';
        case 'S': return 'N';
        case 'E': return 'W';
        case 'W': return 'E';
      }
    }
    
    console.log("[DOOR AUDIT] Registered");
    console.log(typeof (window as any).runDoorAudit);
    
    return () => {
      delete (window as any).runDoorAudit;
    };
  }, []);

  useEffect(() => {
    console.log("DOOR EFFECT RUNNING");
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
    cameraRef.current = camera;

    // Initialize Zombie Manager
    zombieManagerRef.current = getZombieManager(scene);
    
    // Set up spawn points (starter room area) - safe positions away from walls
    zombieManagerRef.current.setSpawnPoints([
      { x: 10, y: 0, z: -40, roomId: 'starter' },
      { x: 25, y: 0, z: -45, roomId: 'starter' },
      { x: 17.5, y: 0, z: -55, roomId: 'starter' },
    ]);

    // Handle zombie spawn events
    zombieManagerRef.current.onSpawn((zombie) => {
      console.log('Zombie spawned:', zombie.id);
      setRoundState(prev => ({ ...prev, zombiesAlive: prev.zombiesAlive + 1 }));
    });

    // Handle zombie death events
    zombieManagerRef.current.onDeath((zombie, playerId) => {
      console.log('Zombie killed:', zombie.id, 'by player:', playerId);
      setRoundState(prev => ({ ...prev, zombiesAlive: Math.max(0, prev.zombiesAlive - 1) }));
    });

    // Handle player damage events
    zombieManagerRef.current.onPlayerDamage((damage, zombie) => {
      console.log('Player damaged:', damage, 'by zombie:', zombie.id);
      // Could add player health system here
    });

    // Subscribe to round start events for automatic zombie spawning
    const roundManager = getRoundManager();
    logger.rounds.debug('Subscribing to onRoundStart in App.tsx');
    roundManager.onRoundStart((roundNumber) => {
      logger.rounds.info('Round start event received in App.tsx for round', roundNumber);
      logger.rounds.debug('zombieManagerRef.current:', zombieManagerRef.current);
      const zombieManager = zombieManagerRef.current;
      if (zombieManager) {
        const totalZombies = RoundManager.calculateZombieCount(roundNumber);
        logger.rounds.info('Auto spawning zombies for round:', roundNumber, 'count:', totalZombies);
        for (let i = 0; i < totalZombies; i++) {
          zombieManager.spawnZombie();
          roundManager.registerZombieSpawn();
        }
        setRoundState(prev => ({
          round: roundNumber,
          zombiesAlive: totalZombies,
          spawnStatus: roundManager.getState(),
        }));
        logger.rounds.debug('Auto-spawn complete, setRoundState called');
      } else {
        console.warn('[ROUND TRACE] ZombieManager not available for auto-spawn');
      }
    });

    // Initialize Weapon Manager
    weaponManagerRef.current = getWeaponManager(scene);
    logger.weapon.info('WeaponManager initialized:', weaponManagerRef.current !== null);

    // Create door renderer to spawn visible meshes for all doors
    const doorRenderer = createDoorRenderer('default', scene);

    // Initialize Geometry Inspector
    const raycasterForInspector = new THREE.Raycaster();
    const geometryInspector = createGeometryInspector(scene, camera, raycasterForInspector);
    geometryInspectorRef.current = geometryInspector;
    
    // Expose global toggle function
    (window as any).toggleGeometryInspector = () => {
      geometryInspector.toggle();
      setGeometryInspectorEnabled(geometryInspector.isActive());
      console.log('[GeometryInspector] Toggled:', geometryInspector.isActive() ? 'ON' : 'OFF');
    };
    (window as any).enableGeometryInspector = () => {
      geometryInspector.enable();
      setGeometryInspectorEnabled(true);
    };
    (window as any).disableGeometryInspector = () => {
      geometryInspector.disable();
      setGeometryInspectorEnabled(false);
    };

    // ---- LIGHTING ----
    const ambientLight = new THREE.AmbientLight(0x222222, 1.0);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

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

    // Expose global toggle function
    (window as any).toggleDebugLighting = toggleDebugLighting;
    (window as any).setDebugLightingBrightness = (brightness: number) => {
      setDebugLightingBrightness(brightness);
      if (debugLightingEnabledRef.current && ambientLightRef.current) {
        ambientLightRef.current.intensity = brightness;
      }
      console.log('[DEBUG LIGHTING] Brightness set to:', brightness);
    };

    // ---- DOOR SYSTEM ----
    const doors: RuntimeDoor[] = [];
    doorsRef.current = doors;
    const doorColliderMap = new Map<THREE.Mesh, RuntimeDoor>();
    
    // Mapping from raycast doorway IDs to DoorManager IDs
    // This ensures the prompt system only shows purchasable doors that DoorManager recognizes
    const RAYCAST_TO_DOORMANAGER_ID: Record<string, string> = {
      'starter_N_0': 'starter_classroom_door',
      'science_lab_S_0': 'hallway_science_lab_door',
      'library_S_0': 'hallway_library_door',
      'cafeteria_E_0': 'hallway_cafeteria_door',
    };
    
    // Build runtime door objects from config
    DOORS_CONFIG.forEach((dc, idx) => {
      const gaps = ROOM_GAPS[dc.roomId] || [];
      const gap = gaps[dc.gapIndex];
      if (!gap) return;
      
      const room = INITIAL_ROOMS.find(r => r.id === dc.roomId);
      if (!room) return;
      
      // Calculate raycast doorway ID
      const raycastDoorId = `${dc.roomId}_${dc.side}_${dc.gapIndex}`;
      
      // Check if this doorway is a purchasable door (exists in mapping)
      const doorManagerId = RAYCAST_TO_DOORMANAGER_ID[raycastDoorId];
      
      // Skip non-purchasable doorways (they behave as normal map geometry)
      if (!doorManagerId) {
        return;  // Use return instead of continue in forEach
      }
      
      // Calculate door world position based on room and gap
      let doorX = 0, doorZ = 0, doorRotY = 0;
      const doorW = gap.width;
      const doorH = doorHt;
      const doorD = 0.3;
      
      if (gap.side === 'N') {
        doorX = gap.center;
        doorZ = room.d / 2;
        doorRotY = 0;
      } else if (gap.side === 'S') {
        doorX = gap.center;
        doorZ = -room.d / 2;
        doorRotY = 0;
      } else if (gap.side === 'E') {
        doorX = room.w / 2;
        doorZ = gap.center;
        doorRotY = Math.PI / 2;
      } else { // W
        doorX = -room.w / 2;
        doorZ = gap.center;
        doorRotY = Math.PI / 2;
      }
      
      // Convert to world coordinates
      const worldX = room.cx + doorX;
      const worldZ = room.cz + doorZ;
      
      const doorObj: RuntimeDoor = {
        id: doorManagerId,  // Use DoorManager ID, not raycast ID
        type: 'gap',
        axis: gap.side === 'N' || gap.side === 'S' ? 'z' : 'x',
        x: worldX,
        z: worldZ,
        w: doorW,
        h: doorH,
        d: doorD,
        cost: dc.cost,
        unlocked: false,
        name: raycastDoorId,  // Keep raycast ID for display purposes
        roomId: dc.roomId,
        side: gap.side,
        isOpen: false,
        isPurchased: false,
        doorManagerId: doorManagerId,  // Store the DoorManager ID for purchase logic
      };
      doors.push(doorObj);
    });

    // Create door meshes and colliders
    const doorMat = new THREE.MeshLambertMaterial({ color: 0x3d2817 });
    const doorFrameMat = new THREE.MeshLambertMaterial({ color: 0x2a1a0f });
    
    doors.forEach(door => {
      // Door mesh (visual)
      const doorThickness = door.d || 0.3;
      const doorGeom = new THREE.BoxGeometry(door.w, door.h, doorThickness);
      const doorMesh = new THREE.Mesh(doorGeom, doorMat);
      
      // Position door centered in gap at floor level
      doorMesh.position.set(door.x, door.h / 2, door.z);
      doorMesh.rotation.y = door.axis === 'x' ? Math.PI / 2 : 0;
      doorMesh.castShadow = true;
      doorMesh.receiveShadow = true;
      scene.add(doorMesh);
      door.mesh = doorMesh;
      
      // Door collider (invisible physics)
      const colliderGeom = new THREE.BoxGeometry(door.w, door.h, doorThickness + 0.1);
      const colliderMat = new THREE.MeshBasicMaterial({ visible: false });
      const collider = new THREE.Mesh(colliderGeom, colliderMat);
      collider.position.copy(doorMesh.position);
      collider.rotation.copy(doorMesh.rotation);
      scene.add(collider);
      collider.userData.colliderType = "door";
      collider.userData.isOpen = door.isOpen; // Sync open state to collider
      collider.userData.blocksZombies = false; // Open doors don't block zombies by default
      door.collider = collider;
      doorColliderMap.set(collider, door);
    });

    // ---- GEOMETRY BUILDER ----
    const wt = MAP_CONFIG.wallThickness;
    const ct = MAP_CONFIG.ceilingThickness;
    const ft = MAP_CONFIG.floorThickness;
    const doorH = MAP_CONFIG.doorHeight;

    // Collect all collidable map objects for zombie AI
    const collidableObjects: THREE.Object3D[] = [];
    
    // Track wall collider meshes for debug visualization
    const wallColliderMeshes: THREE.Mesh[] = [];
    
    const wallMat = new THREE.MeshLambertMaterial({ map: getProceduralTexture('wall_tiles') });
    const floorMatWood = new THREE.MeshLambertMaterial({ map: getProceduralTexture('wood_floor') });
    const ceilMat = new THREE.MeshLambertMaterial({ map: getProceduralTexture('ceiling_tiles') });

    const buildRoom = (r: Room) => {
      const gaps = ROOM_GAPS[r.id] || [];
      const roomColor = parseInt(r.color.replace('#', ''), 16);
      const customFloorMat = new THREE.MeshLambertMaterial({ color: roomColor });
      const floorMat = r.floorTexture === 'wood_floor.png' ? floorMatWood : customFloorMat;

      // Floor - handle carved floors for stairwells and other rooms with floor holes
      if (!r.disabledFloor) {
        if (r.carvedFloors && r.carvedFloors.length > 0) {
          // Build floor with carved out sections (for stairwell openings, etc.)
          const floorSegments: Array<{ x: number; z: number; w: number; d: number }> = [];
          const floorZMin = r.cz - r.d / 2;
          const floorZMax = r.cz + r.d / 2;
          const floorXMin = r.cx - r.w / 2;
          const floorXMax = r.cx + r.w / 2;
          
          // Parse carved floor definitions (format: "x:z:w:d" or use trapdoors/ceilingHoles from adjacent rooms)
          // For now, create a simple floor that avoids the carved areas
          // Check if this room has trapdoors defined (holes in floor)
          const trapdoors = r.trapdoors || [];
          
          if (trapdoors.length > 0) {
            // Build floor around trapdoors using segments
            // Simple approach: create full floor then subtract holes by building segments
            const holeFreeZones = trapdoors.map(t => ({
              xMin: t.cx - t.w / 2,
              xMax: t.cx + t.w / 2,
              zMin: t.cz - t.d / 2,
              zMax: t.cz + t.d / 2
            }));
            
            // Create floor segments avoiding holes - split into strips
            let currentZ = floorZMin;
            while (currentZ < floorZMax) {
              // Find next hole boundary in Z direction
              let nextZ = floorZMax;
              for (const hole of holeFreeZones) {
                if (hole.zMin > currentZ && hole.zMin < nextZ) nextZ = hole.zMin;
                if (hole.zMax > currentZ && hole.zMax < nextZ && hole.zMax > currentZ) {
                  // Skip to after this hole if we're at its start
                }
              }
              
              const stripDepth = nextZ - currentZ;
              if (stripDepth > 0.1) {
                // Check for holes in this strip
                const holesInStrip = holeFreeZones.filter(h => h.zMin <= nextZ && h.zMax >= currentZ);
                
                if (holesInStrip.length === 0) {
                  // No holes, create full strip
                  const floor = new THREE.Mesh(new THREE.BoxGeometry(r.w, ft, stripDepth), floorMat);
                  floor.position.set(r.cx, r.floorY - ft / 2, currentZ + stripDepth / 2);
                  floor.receiveShadow = true;
                  floor.userData.isCollidable = true;
                  floor.userData.colliderType = "floor";
                  collidableObjects.push(floor);
                  scene.add(floor);
                } else {
                  // Has holes, create segments around them
                  let currentX = floorXMin;
                  const sortedHoles = [...holesInStrip].sort((a, b) => a.xMin - b.xMin);
                  
                  for (const hole of sortedHoles) {
                    if (hole.xMin > currentX + 0.1) {
                      const segWidth = hole.xMin - currentX;
                      const floor = new THREE.Mesh(new THREE.BoxGeometry(segWidth, ft, stripDepth), floorMat);
                      floor.position.set(currentX + segWidth / 2, r.floorY - ft / 2, currentZ + stripDepth / 2);
                      floor.receiveShadow = true;
                      floor.userData.isCollidable = true;
                      floor.userData.colliderType = "floor";
                      collidableObjects.push(floor);
                      scene.add(floor);
                    }
                    currentX = Math.max(currentX, hole.xMax);
                  }
                  
                  // Final segment after last hole
                  if (currentX < floorXMax - 0.1) {
                    const segWidth = floorXMax - currentX;
                    const floor = new THREE.Mesh(new THREE.BoxGeometry(segWidth, ft, stripDepth), floorMat);
                    floor.position.set(currentX + segWidth / 2, r.floorY - ft / 2, currentZ + stripDepth / 2);
                    floor.receiveShadow = true;
                    floor.userData.isCollidable = true;
                    floor.userData.colliderType = "floor";
                    collidableObjects.push(floor);
                    scene.add(floor);
                  }
                }
              }
              
              // Move to next zone
              let minHoleZ = floorZMax;
              for (const hole of holeFreeZones) {
                if (hole.zMax > currentZ && hole.zMax < minHoleZ) minHoleZ = hole.zMax;
              }
              currentZ = minHoleZ;
            }
          } else {
            // No trapdoors, create simple full floor
            const floor = new THREE.Mesh(new THREE.BoxGeometry(r.w, ft, r.d), floorMat);
            floor.position.set(r.cx, r.floorY - ft / 2, r.cz);
            floor.receiveShadow = true;
            floor.userData.isCollidable = true;
            floor.userData.colliderType = "floor";
            collidableObjects.push(floor);
            scene.add(floor);
          }
        } else {
          // Standard floor without carvings
          const floor = new THREE.Mesh(new THREE.BoxGeometry(r.w, ft, r.d), floorMat);
          floor.position.set(r.cx, r.floorY - ft / 2, r.cz);
          floor.receiveShadow = true;
          floor.userData.isCollidable = true;
          floor.userData.colliderType = "floor";
          collidableObjects.push(floor);
          scene.add(floor);
        }
      }

      // Ceiling
      if (!r.disabledCeiling) {
        const ceil = new THREE.Mesh(new THREE.BoxGeometry(r.w, ct, r.d), ceilMat);
        ceil.position.set(r.cx, r.floorY + r.h + ct / 2, r.cz);
        ceil.userData.isCollidable = true;
        ceil.userData.colliderType = "ceiling";
        collidableObjects.push(ceil);
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
          below.userData.isCollidable = true;
          below.userData.colliderType = "wall";
          collidableObjects.push(below);
          wallColliderMeshes.push(below);
          scene.add(below);
          if (r.h > doorH) {
            const aboveH = r.h - doorH;
            const above = new THREE.Mesh(new THREE.BoxGeometry(segLen, aboveH, wt), wallMat);
            above.rotation.y = rotY;
            if (rotY === 0) above.position.set(px + segCenter, r.floorY + doorH + aboveH / 2, pz);
            else above.position.set(px, r.floorY + doorH + aboveH / 2, pz + segCenter);
            above.userData.isCollidable = true;
            above.userData.colliderType = "wall";
            collidableObjects.push(above);
            wallColliderMeshes.push(above);
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
        const climb = r.climbHeight ?? r.h;
        const dir = r.stairDirection || (r.w > r.d ? 'W_E' : 'N_S');
        
        // Calculate angle first
        let angle = 0;
        if (dir === 'W_E' || dir === 'E_W') {
          angle = (dir === 'W_E' ? 1 : -1) * Math.atan2(climb, r.w);
        } else {
          // N_S or S_N
          // For S_N: south (negative Z) is bottom, north (positive Z) is top → need negative rotation.x
          // For N_S: north (positive Z) is bottom, south (negative Z) is top → need positive rotation.x
          angle = (dir === 'N_S' ? 1 : -1) * Math.atan2(climb, r.d);
        }
        
        // Calculate offsets for proper pivot positioning
        // When rotating a box around its center, we need to offset position so the ramp sits correctly
        const hypotenuse = dir === 'W_E' || dir === 'E_W' 
          ? Math.sqrt(r.w * r.w + climb * climb) 
          : Math.sqrt(r.d * r.d + climb * climb);
        const yOffset = (hypotenuse - (dir === 'W_E' || dir === 'E_W' ? r.w : r.d)) / 2;
        
        // VISUAL stair mesh - bright BLUE
        const visualRamp = new THREE.Mesh(
          new THREE.BoxGeometry(r.w, 0.3, r.d),
          new THREE.MeshLambertMaterial({ color: 0x0000ff, side: THREE.DoubleSide })
        );
        visualRamp.position.set(r.cx, r.floorY + climb / 2 + yOffset, r.cz);
        
        if (dir === 'W_E' || dir === 'E_W') {
          visualRamp.rotation.z = angle;
        } else {
          visualRamp.rotation.x = angle;
        }
        
        scene.add(visualRamp);
        
        // COLLISION ramp - bright RED (invisible physics representation)
        const collisionRamp = new THREE.Mesh(
          new THREE.BoxGeometry(r.w, 0.3, r.d),
          new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
        );
        collisionRamp.position.set(r.cx, r.floorY + climb / 2 + yOffset, r.cz);
        
        if (dir === 'W_E' || dir === 'E_W') {
          collisionRamp.rotation.z = angle;
        } else {
          collisionRamp.rotation.x = angle;
        }
        
        collisionRamp.userData.isCollidable = true;
        collisionRamp.userData.colliderType = "ramp";
        collidableObjects.push(collisionRamp);
        scene.add(collisionRamp);
        
        // Calculate and log offsets between visual and collision
        const offsetX = visualRamp.position.x - collisionRamp.position.x;
        const offsetY = visualRamp.position.y - collisionRamp.position.y;
        const offsetZ = visualRamp.position.z - collisionRamp.position.z;
        
        // Add wireframe overlay to visualize actual ramp orientation
        const wireframe = new THREE.LineSegments(
          new THREE.WireframeGeometry(new THREE.BoxGeometry(r.w, 0.3, r.d)),
          new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 2 })
        );
        wireframe.position.copy(visualRamp.position);
        wireframe.rotation.copy(visualRamp.rotation);
        scene.add(wireframe);
        
        // Store stair debug data for the STAIRS tab
        const rotationDiffX = Math.abs(visualRamp.rotation.x - collisionRamp.rotation.x);
        const rotationDiffY = Math.abs(visualRamp.rotation.y - collisionRamp.rotation.y);
        const rotationDiffZ = Math.abs(visualRamp.rotation.z - collisionRamp.rotation.z);
        const isMisaligned = Math.abs(offsetX) > 0.01 || Math.abs(offsetY) > 0.01 || Math.abs(offsetZ) > 0.01 ||
                             rotationDiffX > 0.001 || rotationDiffY > 0.001 || rotationDiffZ > 0.001;
        
        // Calculate validation deltas
        const positionDelta = Math.sqrt(offsetX * offsetX + offsetY * offsetY + offsetZ * offsetZ);
        const rotationDelta = Math.sqrt(rotationDiffX * rotationDiffX + rotationDiffY * rotationDiffY + rotationDiffZ * rotationDiffZ);
        const heightDelta = Math.abs((visualRamp.position.y - r.floorY) - (collisionRamp.position.y - r.floorY));
        const validationPass = positionDelta < 0.01 && rotationDelta < 0.001 && heightDelta < 0.01;
        
        stairDebugDataArray.push({
          id: r.id,
          name: r.name,
          direction: dir,
          visualPosition: { x: visualRamp.position.x, y: visualRamp.position.y, z: visualRamp.position.z },
          visualRotation: { x: visualRamp.rotation.x, y: visualRamp.rotation.y, z: visualRamp.rotation.z },
          visualScale: { x: visualRamp.scale.x, y: visualRamp.scale.y, z: visualRamp.scale.z },
          collisionPosition: { x: collisionRamp.position.x, y: collisionRamp.position.y, z: collisionRamp.position.z },
          collisionRotation: { x: collisionRamp.rotation.x, y: collisionRamp.rotation.y, z: collisionRamp.rotation.z },
          collisionScale: { x: collisionRamp.scale.x, y: collisionRamp.scale.y, z: collisionRamp.scale.z },
          offsetX,
          offsetY,
          offsetZ,
          rotationDiffX,
          rotationDiffY,
          rotationDiffZ,
          width: r.w,
          depth: r.d,
          climbHeight: climb,
          isMisaligned,
          misalignmentWarning: isMisaligned ? `MISALIGNED STAIR DETECTED - Offset: (${offsetX.toFixed(4)}, ${offsetY.toFixed(4)}, ${offsetZ.toFixed(4)})` : undefined,
          // Validation data
          positionDelta,
          rotationDelta,
          heightDelta,
          validationPass,
        });
      }
    };

    // Reset stair debug data before building rooms
    const stairDebugDataArray: any[] = [];
    INITIAL_ROOMS.forEach(r => buildRoom(r));
    setStairDebugData(stairDebugDataArray);

    // Create wall collider debug visualization helpers (red wireframes)
    const wallColliderHelpers: THREE.Mesh[] = [];
    if (showWallColliders) {
      wallColliderMeshes.forEach(wallMesh => {
        const box = new THREE.Box3().setFromObject(wallMesh);
        const size = new THREE.Vector3();
        box.getSize(size);
        
        const boxGeo = new THREE.BoxGeometry(size.x, size.y, size.z);
        const edges = new THREE.EdgesGeometry(boxGeo);
        const lineMat = new THREE.LineBasicMaterial({ 
          color: 0xff0000, // Red for wall colliders
          transparent: true, 
          opacity: 0.6 
        });
        const helper = new THREE.LineSegments(edges, lineMat);
        
        // Position at center of the box
        box.getCenter(helper.position);
        helper.rotation.copy(wallMesh.rotation);
        
        scene.add(helper);
        wallColliderHelpers.push(helper);
      });
    }

    // Props
    MAP_PROPS.forEach(prop => {
      const ownerRoom = INITIAL_ROOMS.find(r => r.id === prop.roomId);
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(prop.w, prop.h, prop.d),
        new THREE.MeshLambertMaterial({ color: parseInt(prop.color.replace('#', ''), 16) })
      );
      mesh.position.set(prop.cx, (ownerRoom?.floorY ?? 0) + prop.h / 2, prop.cz);
      mesh.userData.isCollidable = true;
      mesh.userData.colliderType = "prop";
      collidableObjects.push(mesh);
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
    const handleClick = (e: MouseEvent) => { 
      logger.input.debug('Mouse click received', e.button);
      
      // Debug: Check actual pointer lock state at click time
      logger.input.debug('document.pointerLockElement:', document.pointerLockElement);
      logger.input.debug('canvas:', canvas);
      logger.input.debug('isPointerLocked (state):', isPointerLocked);
      logger.input.debug('Actual lock check (document.pointerLockElement === canvas):', document.pointerLockElement === canvas);
      
      if (document.pointerLockElement !== canvas) {
        logger.input.debug('Pointer not locked, requesting pointer lock');
        canvas?.requestPointerLock();
        return;
      }
      
      logger.input.debug('Pointer is locked, proceeding to fire');
      
      // Shooting - hitscan on left click when pointer locked
      // Use actual DOM check instead of stale state
      const isActuallyLocked = document.pointerLockElement === canvas;
      if (zombieManagerRef.current && weaponManagerRef.current && isActuallyLocked) {
        logger.input.debug('All conditions met, calling shootZombie');
        shootZombie();
      } else {
        logger.input.warn('Conditions not met:', {
          hasZombieManager: !!zombieManagerRef.current,
          hasWeaponManager: !!weaponManagerRef.current,
          isPointerLockedState: isPointerLocked,
          isActuallyLocked
        });
      }
    };
    
    const shootZombie = () => {
      logger.input.debug('shootZombie called');
      const zombieManager = zombieManagerRef.current;
      const weaponManager = weaponManagerRef.current;
      if (!zombieManager || !weaponManager || !cameraRef.current) {
        logger.input.warn('shootZombie aborted: missing dependencies', {
          hasZombieManager: !!zombieManager,
          hasWeaponManager: !!weaponManager,
          hasCamera: !!cameraRef.current
        });
        return;
      }
      logger.input.info('Attempting weapon fire');
      
      // Raycast from camera center
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(0, 0), cameraRef.current);
      
      // Use weapon manager to fire
      logger.input.info('Calling weaponManager.fire()');
      const result = weaponManager.fire(raycaster, zombieManager, 'player1');
      
      if (result.success && result.hitZombieId) {
        console.log('Hit zombie:', result.hitZombieId, 'Health:', zombieManager.getZombie(result.hitZombieId)?.health);
      }
    };
    const handleLockChange = () => { 
      const locked = document.pointerLockElement === canvas;
      logger.input.debug('Pointer lock changed:', locked);
      setIsPointerLocked(locked);
    };
    console.log('[INPUT] Registering click event listener on canvas');
    canvas.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('pointerlockchange', handleLockChange);

    // ---- KEYBOARD ----
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.code] = true;
      if (e.code === 'KeyV') noclipRef.current = !noclipRef.current;
      
      // Debug Overlay - F1 to toggle overlay visibility
      if (e.code === 'F1') {
        e.preventDefault();
        setDebugOverlayOpen(prev => !prev);
      }
      
      // Debug Lighting - F2 to toggle bright lighting mode
      if (e.code === 'F2') {
        e.preventDefault();
        toggleDebugLighting();
      }
      
      // Geometry Inspector - F4 to toggle geometry inspection mode
      if (e.code === 'F4') {
        e.preventDefault();
        if (geometryInspectorRef.current) {
          geometryInspectorRef.current.toggle();
          setGeometryInspectorEnabled(geometryInspectorRef.current.isActive());
          console.log('[GeometryInspector] Toggled:', geometryInspectorRef.current.isActive() ? 'ON' : 'OFF');
          console.log('[GeometryInspector] Call window.inspectGeometry() to print all meshes within 20 units');
        }
      }
      
      // Floor Debug Mode - F7 to toggle floor audit visualization
      if (e.code === 'F7') {
        e.preventDefault();
        runFloorAudit();
      }
      
      // Floor Debug Mode - F8 to teleport to next floor issue
      if (e.code === 'F8') {
        e.preventDefault();
        teleportToNextFloorIssue();
      }
      
      // Map Connectivity Audit - F6 to run full connectivity audit
      if (e.code === 'F6') {
        e.preventDefault();
        runConnectivityAudit();
      }
      
      // Map Connectivity Audit - F5 to teleport to next connectivity issue
      if (e.code === 'F5') {
        e.preventDefault();
        teleportToNextConnectivityIssue();
      }
      
      // Map Validation Mode - F9 to scan current room
      if (e.code === 'F9') {
        e.preventDefault();
        scanCurrentRoomForValidation();
      }
      
      // Map Validation Mode - F10 to teleport to next issue
      if (e.code === 'F10') {
        e.preventDefault();
        teleportToNextValidationIssue();
      }
      
      // Toggle validation mode with F11
      if (e.code === 'F11') {
        e.preventDefault();
        toggleValidationMode();
      }
      
      // Door interaction - Press E to purchase door (removed - handled by handleInteractionKey)
    };
    const handleKeyUp = (e: KeyboardEvent) => { keysPressed.current[e.code] = false; };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // ---- COLLISION ----
    const getRoomAtPos = (px: number, pz: number, py: number) => {
      for (const room of INITIAL_ROOMS) {
        const xMin = room.cx - room.w / 2;
        const xMax = room.cx + room.w / 2;
        const zMin = room.cz - room.d / 2;
        const zMax = room.cz + room.d / 2;
        
        // Player Y is eye height (~1.6 units above feet)
        const playerFeetY = py - 1.6;
        
        // Room height bounds: from floor to ceiling (floorY + h), with tolerances
        const roomMinY = room.floorY - 1;
        const roomMaxY = room.floorY + room.h + 2;
        
        const insideX = px >= xMin && px <= xMax;
        const insideZ = pz >= zMin && pz <= zMax;
        const insideY =
          playerFeetY >= roomMinY &&
          playerFeetY <= roomMaxY;
        
        if (insideX && insideZ && insideY) {
          return room;
        }
      }
      
      return undefined;
    };

    const canPassWall = (roomId: string, side: 'N' | 'S' | 'E' | 'W', offset: number): boolean =>
      (ROOM_GAPS[roomId] || []).filter(g => g.side === side).some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);

    // Door collision check - returns true if player can pass through this gap
    const canPassDoor = (roomId: string, side: 'N' | 'S' | 'E' | 'W', gapIndex: number): boolean => {
      const door = doors.find(d => d.roomId === roomId && d.side === side && DOORS_CONFIG.findIndex(dc => dc.roomId === roomId && dc.side === side && dc.gapIndex === gapIndex) >= 0);
      if (!door) return true; // No door here
      if (!door.isPurchased) return false; // Unpurchased door blocks passage
      if (door.isOpen) return true; // Open purchased door
      return false; // Closed purchased door blocks passage
    };

    const tryMove = (pos: THREE.Vector3, delta: THREE.Vector3): THREE.Vector3 => {
      const next = pos.clone().add(delta);
      const currentRoom = getRoomAtPos(pos.x, pos.z, pos.y);
      if (!currentRoom) return next;
      const xMin = currentRoom.cx - currentRoom.w / 2; const xMax = currentRoom.cx + currentRoom.w / 2;
      const zMin = currentRoom.cz - currentRoom.d / 2; const zMax = currentRoom.cz + currentRoom.d / 2;
      let nx = next.x; let nz = next.z;
      const pr = PLAYER_RADIUS;
      
      // Check wall gaps and door collisions
      const gaps = ROOM_GAPS[currentRoom.id] || [];
      
      // South wall
      if (nz - pr < zMin) {
        const southGaps = gaps.filter(g => g.side === 'S');
        const offset = pos.x - currentRoom.cx;
        const inGap = southGaps.some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
        if (!inGap) {
          nz = zMin + pr;
        } else {
          // Check if any door in this gap is closed
          const gapIdx = gaps.findIndex(g => g.side === 'S' && offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
          if (gapIdx >= 0) {
            const door = doors.find(d => d.roomId === currentRoom.id && d.side === 'S');
            if (door && !canPassDoor(currentRoom.id, 'S', gapIdx)) {
              nz = zMin + pr; // Blocked by closed door
            }
          }
        }
      }
      
      // North wall
      if (nz + pr > zMax) {
        const northGaps = gaps.filter(g => g.side === 'N');
        const offset = pos.x - currentRoom.cx;
        const inGap = northGaps.some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
        if (!inGap) {
          nz = zMax - pr;
        } else {
          const gapIdx = gaps.findIndex(g => g.side === 'N' && offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
          if (gapIdx >= 0) {
            const door = doors.find(d => d.roomId === currentRoom.id && d.side === 'N');
            if (door && !canPassDoor(currentRoom.id, 'N', gapIdx)) {
              nz = zMax - pr;
            }
          }
        }
      }
      
      // West wall
      if (nx - pr < xMin) {
        const westGaps = gaps.filter(g => g.side === 'W');
        const offset = pos.z - currentRoom.cz;
        const inGap = westGaps.some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
        if (!inGap) {
          nx = xMin + pr;
        } else {
          const gapIdx = gaps.findIndex(g => g.side === 'W' && offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
          if (gapIdx >= 0) {
            const door = doors.find(d => d.roomId === currentRoom.id && d.side === 'W');
            if (door && !canPassDoor(currentRoom.id, 'W', gapIdx)) {
              nx = xMin + pr;
            }
          }
        }
      }
      
      // East wall
      if (nx + pr > xMax) {
        const eastGaps = gaps.filter(g => g.side === 'E');
        const offset = pos.z - currentRoom.cz;
        const inGap = eastGaps.some(g => offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
        if (!inGap) {
          nx = xMax - pr;
        } else {
          const gapIdx = gaps.findIndex(g => g.side === 'E' && offset >= g.center - g.width / 2 && offset <= g.center + g.width / 2);
          if (gapIdx >= 0) {
            const door = doors.find(d => d.roomId === currentRoom.id && d.side === 'E');
            if (door && !canPassDoor(currentRoom.id, 'E', gapIdx)) {
              nx = xMax - pr;
            }
          }
        }
      }
      
      return new THREE.Vector3(nx, next.y, nz);
    };

    // ---- GAME LOOP ----
    let lastTime = performance.now();
    let animId: number;
    
    // Raycaster for door interaction
    const raycaster = new THREE.Raycaster();
    const doorInteractionRange = 8.0;
    let hoveredDoor: RuntimeDoor | null = null;
    
    // Handle door interaction (purchase/open)
    const handleDoorInteraction = () => {
      if (!hoveredDoor || !isPointerLocked) return;
      
      if (!hoveredDoor.isPurchased) {
        // Purchase the door
        hoveredDoor.isPurchased = true;
        hoveredDoor.isOpen = false;
        // Keep collider active (door is closed after purchase)
      } else if (!hoveredDoor.isOpen) {
        // Open the door
        hoveredDoor.isOpen = true;
        // Update collider to reflect open state
        if (hoveredDoor.collider) {
          hoveredDoor.collider.userData.isOpen = true;
        }
        if (hoveredDoor.mesh) {
          // Slide door open based on axis
          const openOffset = hoveredDoor.w * 0.6;
          if (hoveredDoor.axis === 'x') {
            hoveredDoor.mesh.position.z += openOffset;
          } else {
            hoveredDoor.mesh.position.x += openOffset;
          }
        }
        // Remove collider when opened
        if (hoveredDoor.collider) {
          scene.remove(hoveredDoor.collider);
          doorColliderMap.delete(hoveredDoor.collider);
          hoveredDoor.collider = undefined;
        }
      }
    };

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
        
        // TEMPORARY: Update room state directly from physics loop
        const detectedRoom = getRoomAtPos(
          playerPos.current.x,
          playerPos.current.z,
          playerPos.current.y
        );
        // Only update state if room name changed to avoid re-renders every frame
        const newRoomName = detectedRoom?.name || "None";
        if (newRoomName !== currentRoomNameRef.current) {
          currentRoomNameRef.current = newRoomName;
          setCurrentRoomName(newRoomName);
        }
        
        let groundY = currentRoom
          ? (currentRoom.isStaircase
            ? getStaircaseElevation(currentRoom, playerPos.current.x, playerPos.current.z) + PLAYER_EYE_HEIGHT
            : currentRoom.floorY + PLAYER_EYE_HEIGHT)
          : PLAYER_EYE_HEIGHT;
        
        // DEBUG: Log stair collision detection
        if (currentRoom?.isStaircase) {
          const stairHeight = getStaircaseElevation(currentRoom, playerPos.current.x, playerPos.current.z);
          
          // Update player stair analysis for the STAIRS tab - only if values changed
          const newStairAnalysis = {
            playerPosition: { x: playerPos.current.x, y: playerPos.current.y, z: playerPos.current.z },
            currentRoomId: currentRoom.id,
            expectedRampHeight: stairHeight,
            actualPlayerHeight: playerPos.current.y,
            heightDifference: playerPos.current.y - stairHeight,
            isInStairwell: true,
          };
          // Only update if significant change (avoid per-frame updates for minor position changes)
          const prevAnalysis = playerStairAnalysisRef.current;
          if (!prevAnalysis || 
              prevAnalysis.currentRoomId !== newStairAnalysis.currentRoomId ||
              Math.abs(prevAnalysis.expectedRampHeight! - newStairAnalysis.expectedRampHeight!) > 0.1 ||
              Math.abs(prevAnalysis.heightDifference - newStairAnalysis.heightDifference) > 0.1) {
            playerStairAnalysisRef.current = newStairAnalysis;
            setPlayerStairAnalysis(newStairAnalysis);
          }
        } else {
          // Not in a stairwell - clear or update player stair analysis
          const newStairAnalysis = {
            playerPosition: { x: playerPos.current.x, y: playerPos.current.y, z: playerPos.current.z },
            currentRoomId: currentRoom?.id || null,
            expectedRampHeight: null,
            actualPlayerHeight: playerPos.current.y,
            heightDifference: 0,
            isInStairwell: false,
          };
          const prevAnalysis = playerStairAnalysisRef.current;
          if (!prevAnalysis || prevAnalysis.isInStairwell !== false) {
            playerStairAnalysisRef.current = newStairAnalysis;
            setPlayerStairAnalysis(newStairAnalysis);
          }
        }
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

      // Update zombies AI
      if (zombieManagerRef.current) {
        zombieManagerRef.current.update(dt, playerPos.current, collidableObjects);
        
        // Throttled zombie debug data update (4 times per second = 250ms)
        if (now - lastZombieDebugUpdate.current > 250) {
          lastZombieDebugUpdate.current = now;
          const debugData = zombieManagerRef.current.getDebugData(playerPos.current);
          setZombieDebugData(debugData);
        }
      }

      camera.position.copy(playerPos.current);
      camera.rotation.order = 'YXZ';
      camera.rotation.y = yaw.current;
      camera.rotation.x = pitch.current;
      
      // Update validation mode highlights if enabled
      if (validationModeEnabledRef.current) {
        mapValidatorRef.current.updateHighlights(now / 1000);
      }
      
      // DEBUG_FLOORS: Render test wireframe box if enabled
      // This reads window.DEBUG_FLOORS every frame to verify connection to render loop
      if ((window as any).DEBUG_FLOORS === true) {
        if ((window as any).DEBUG_VERBOSE) {
          console.log('DEBUG WIREFRAMES ACTIVE');
          console.log("ROOM COUNT", INITIAL_ROOMS.length);
          INITIAL_ROOMS.forEach((room, idx) => {
            if (idx < 5) {
              console.log(
                "WIREFRAME ROOM",
                room.id,
                room.name,
                room.cx,
                room.cz,
                room.w,
                room.d,
                room.floorY
              );
            }
          });
        }
        
        // Create or update test wireframe box at world position 0,5,0
        if (!debugWireframeRef.current) {
          const geometry = new THREE.BoxGeometry(4, 4, 4);
          const edges = new THREE.EdgesGeometry(geometry);
          const material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 });
          const wireframe = new THREE.LineSegments(edges, material);
          wireframe.position.set(0, 5, 0);
          wireframe.renderOrder = 999;
          wireframe.frustumCulled = false;
          scene.add(wireframe);
          debugWireframeRef.current = wireframe;
          if ((window as any).DEBUG_VERBOSE) {
            console.log('[DEBUG] Red wireframe box created at (0, 5, 0)');
          }
        }
        
        // TEMPORARY TEST: Render every room as a solid magenta wireframe box
        // This verifies that room data is reaching the renderer
        const globalKey = '__ROOM_DEBUG_WIREFRAMES__';
        let roomWireframes: THREE.LineSegments[] = (window as any)[globalKey] || [];
        
        // Only recreate room wireframes if they don't exist yet (cache them)
        if (roomWireframes.length === 0) {
          // Create magenta wireframe for each room
          INITIAL_ROOMS.forEach(room => {
            const roomGeometry = new THREE.BoxGeometry(room.w, 1, room.d);
            const roomEdges = new THREE.EdgesGeometry(roomGeometry);
            const roomMaterial = new THREE.LineBasicMaterial({ color: 0xff00ff });
            const roomWireframe = new THREE.LineSegments(roomEdges, roomMaterial);
            roomWireframe.position.set(room.cx, room.floorY + 0.5, room.cz);
            roomWireframe.renderOrder = 998;
            roomWireframe.frustumCulled = false;
            scene.add(roomWireframe);
            roomWireframes.push(roomWireframe);
          });
          
          (window as any)[globalKey] = roomWireframes;
          if ((window as any).DEBUG_VERBOSE) {
            console.log("WIREFRAMES CREATED", roomWireframes.length);
          }
        }
      } else {
        // Cleanup wireframe when disabled
        if (debugWireframeRef.current) {
          debugWireframeRef.current.geometry.dispose();
          (debugWireframeRef.current.material as THREE.Material).dispose();
          scene.remove(debugWireframeRef.current);
          debugWireframeRef.current = null;
          if ((window as any).DEBUG_VERBOSE) {
            console.log('[DEBUG] Red wireframe box removed');
          }
        }
        
        // Cleanup room wireframes when disabled
        const globalKey = '__ROOM_DEBUG_WIREFRAMES__';
        let roomWireframes: THREE.LineSegments[] = (window as any)[globalKey] || [];
        roomWireframes.forEach(w => {
          scene.remove(w);
          w.geometry.dispose();
          (w.material as THREE.Material).dispose();
        });
        (window as any)[globalKey] = [];
      }
      
      // Render floor debug visualization if enabled
      if (floorDebugModeRef.current) {
        renderFloorDebug(scene, now / 1000);
      }
      
      // Geometry Inspector - highlight mesh under crosshair
      if (geometryInspectorEnabledRef.current && geometryInspectorRef.current) {
        const inspector = geometryInspectorRef.current;
        const hitMesh = inspector.inspectAtCrosshair();
        
        // DIAGNOSTIC LOGGING: Only run expensive traversal and logs when DEBUG_VERBOSE is true
        if ((window as any).DEBUG_VERBOSE) {
          const allSceneMeshes: THREE.Mesh[] = [];
          scene.traverse((obj) => {
            if (obj instanceof THREE.Mesh && 
                obj !== (inspector as any).highlightMesh && 
                obj !== (inspector as any).wireframeMesh &&
                !obj.name.includes('debug') &&
                !obj.name.includes('highlight')) {
              allSceneMeshes.push(obj);
            }
          });
          
          console.log('[DIAGNOSTIC] Geometry Inspector Scene Mesh Count:', allSceneMeshes.length);
          console.log('[DIAGNOSTIC] Connectivity Audit Room Count:', INITIAL_ROOMS.length);
          console.log('[DIAGNOSTIC] Connectivity Issues Array Length:', connectivityIssues.length);
          
          // Print room IDs scanned by each system
          const sceneMeshIds = allSceneMeshes.map(m => m.name || m.uuid).slice(0, 10);
          const roomIds = INITIAL_ROOMS.map(r => r.id);
          console.log('[DIAGNOSTIC] Sample Scene Mesh Names:', sceneMeshIds);
          console.log('[DIAGNOSTIC] Room IDs from INITIAL_ROOMS:', roomIds.slice(0, 10));
          console.log('[DIAGNOSTIC] Total Issues Before Rendering:', connectivityIssues.length);
          
          // Print issue marker coordinates
          if (connectivityIssues.length > 0) {
            console.log('[DIAGNOSTIC] Issue Marker Coordinates:');
            connectivityIssues.forEach((issue, idx) => {
              if (idx < 5) {
                console.log(`  #${idx + 1} ${issue.type}: [${issue.location[0].toFixed(1)}, ${issue.location[1].toFixed(1)}, ${issue.location[2].toFixed(1)}] in ${issue.roomName}`);
              }
            });
          }
        }
        
        if (hitMesh) {
          const bounds = new THREE.Box3().setFromObject(hitMesh);
          const size = new THREE.Vector3();
          const center = new THREE.Vector3();
          bounds.getSize(size);
          bounds.getCenter(center);
          
          // Calculate distance from camera to hit mesh
          const distance = camera.position.distanceTo(center);
          
          // Update highlight visual
          inspector.updateHighlight(hitMesh, distance);
          
          // Get mesh info for display
          const info = inspector.getInspectedMesh();
          if (info) {
            setInspectedMeshInfo({
              meshName: info.meshName,
              roomId: info.roomId,
              wallId: info.wallId,
              floorId: info.floorId,
            });
          }
        } else {
          inspector.updateHighlight(null, 0);
          setInspectedMeshInfo(null);
        }
      }
      
      // Door interaction raycast
      raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
      const doorColliders = Array.from(doorColliderMap.keys());
      const intersects = raycaster.intersectObjects(doorColliders);
      
      hoveredDoor = null;
      if (intersects.length > 0 && intersects[0].distance <= doorInteractionRange) {
        const hitCollider = intersects[0].object as THREE.Mesh;
        const door = doorColliderMap.get(hitCollider);
        if (door) {
          hoveredDoor = door;
          if (!door.isPurchased) {
            setPromptText(`Press E to buy ${door.name} (${door.cost})`);
            setCanInteract(true);
          } else if (!door.isOpen) {
            setPromptText('Press E to open');
            setCanInteract(true);
          } else {
            setPromptText('');
            setCanInteract(false);
          }
        } else {
          setPromptText('');
          setCanInteract(false);
        }
      } else {
        setPromptText('');
        setCanInteract(false);
      }
      
      // Sync with DoorManager for event handling
      const doorManager = getDoorManager();
      const playerPosVec = { x: playerPos.current.x, y: playerPos.current.y, z: playerPos.current.z };
      const playerDirVec = new THREE.Vector3(-Math.sin(yaw.current), 0, -Math.cos(yaw.current));
      doorManager.updateInteraction(playerPosVec, playerDirVec);
      
      renderer.render(scene, camera);
      
      // Update debug overlay stats every frame
      const frameCount = (window as any).__debugFrameCount || 0;
      const prevDebugTime = (window as any).__debugLastTime || now;
      (window as any).__debugFrameCount = frameCount + 1;
      
      if (now - prevDebugTime >= 500) {
        const calculatedFps = Math.round((frameCount + 1) * 1000 / (now - prevDebugTime));
        setFps(calculatedFps);
        (window as any).__debugFrameCount = 0;
        (window as any).__debugLastTime = now;
        
        // Count meshes and draw calls
        let meshCnt = 0;
        scene.traverse((obj) => {
          if (obj instanceof THREE.Mesh) meshCnt++;
        });
        setMeshCount(meshCnt);
        setDrawCalls(renderer.info.render.calls);
        
        // Get current room name
        const currentRoom = getRoomAtPos(playerPos.current.x, playerPos.current.z, playerPos.current.y);
        const newRoomName = currentRoom?.name || 'None';
        setCurrentRoomName(newRoomName);
        
        // Debug logging every 60 frames (~1 second) - gated behind DEBUG_VERBOSE flag
        if ((window as any).__debugFrameCount % 60 === 0 && (window as any).DEBUG_VERBOSE) {
          console.log(`[ROOM DEBUG] Pos: (${playerPos.current.x.toFixed(1)}, ${playerPos.current.y.toFixed(1)}, ${playerPos.current.z.toFixed(1)}) -> Room: ${newRoomName}`);
          if (newRoomName === 'None' && INITIAL_ROOMS.length > 0) {
            const firstRoom = INITIAL_ROOMS[0];
            console.log(`[ROOM DEBUG] First room '${firstRoom.name}' bounds: X[${firstRoom.cx - firstRoom.w/2}, ${firstRoom.cx + firstRoom.w/2}] Z[${firstRoom.cz - firstRoom.d/2}, ${firstRoom.cz + firstRoom.d/2}]`);
          }
        }
      }
      
      // Log every frame to verify render loop is running - gated behind DEBUG_VERBOSE flag
      if (frameCount % 60 === 0 && (window as any).DEBUG_VERBOSE) {
        console.log("[RENDER LOOP] Frame", frameCount, "Room state:", currentRoomName);
      }
    };
    loop();

    // Keyboard handler for door interaction (uses hoveredDoor from prompt system)
    const handleInteractionKey = (e: KeyboardEvent) => {
      const isCurrentlyPointerLocked = document.pointerLockElement !== null;
      if ((window as any).DEBUG_VERBOSE) {
        console.log("KEY EVENT", e.code, "isPointerLocked =", isCurrentlyPointerLocked);
        console.log('[DEBUG] Key event received:', e.key);
      }
      if (e.code === 'KeyE' && isCurrentlyPointerLocked) {
        if ((window as any).DEBUG_VERBOSE) {
          console.log("KEY_E_TEST");
          console.log("=== [E] key pressed ===");
          console.log("=== Key handler entered ===");
        }
        
        // Use the same door reference that drives the visible prompt
        const currentDoor = hoveredDoor;
        
        if (!currentDoor) {
          if ((window as any).DEBUG_VERBOSE) {
            console.log("Current door found: NO (null)");
          }
          return;
        }
        
        if ((window as any).DEBUG_VERBOSE) {
          console.log("Current door found: YES");
          console.log("Door ID:", currentDoor.id);
          console.log("purchaseDoor() called");
        }
        
        const doorManager = getDoorManager();
        const playerId = 'player1';
        
        // Always use the DoorManager ID for purchase logic
        // The door's id field now contains the DoorManager ID due to mapping
        const purchaseDoorId = currentDoor.doorManagerId || currentDoor.id;
        const result = doorManager.purchaseDoor(purchaseDoorId, playerId);
        
        if ((window as any).DEBUG_VERBOSE) {
          console.log("purchaseDoor() result:", result);
          console.log("Result.success:", result.success);
        }
        
        if (result.success) {
          if ((window as any).DEBUG_VERBOSE) {
            console.log('[App] Door purchased successfully:', currentDoor.name);
            console.log("DoorRenderer update called");
          }
          // Sync DoorRenderer state to ensure its mesh is also hidden/opened
          doorRenderer.updateDoorState(purchaseDoorId, true);
          // Hide the actual door mesh created in App.tsx (not DoorRenderer's separate mesh)
          if (currentDoor.mesh) {
            currentDoor.mesh.visible = false;
            if ((window as any).DEBUG_VERBOSE) {
              console.log(`[App] Door mesh hidden: ${currentDoor.id}`);
            }
          }
          // Also hide the collider to prevent any residual interaction
          if (currentDoor.collider) {
            currentDoor.collider.visible = false;
            if ((window as any).DEBUG_VERBOSE) {
              console.log(`[App] Door collider hidden: ${currentDoor.id}`);
            }
          }
          // Update door state
          currentDoor.isOpen = true;
          currentDoor.isPurchased = true;
        } else {
          if ((window as any).DEBUG_VERBOSE) {
            console.log('[App] Door purchase failed:', result.reason);
          }
          if (result.reason === "INSUFFICIENT_POINTS") {
            setShowNotEnoughPoints(true);
            setTimeout(() => setShowNotEnoughPoints(false), 2000);
          }
        }
      }
    };
    window.addEventListener('keydown', handleInteractionKey);

    return () => {
      cancelAnimationFrame(animId);
      resizeObs.disconnect();
      canvas.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('pointerlockchange', handleLockChange);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('keydown', handleInteractionKey);
      
      // Cleanup door renderer
      doorRenderer.destroy();
      
      // Cleanup debug wireframe if exists
      if (debugWireframeRef.current) {
        debugWireframeRef.current.geometry.dispose();
        (debugWireframeRef.current.material as THREE.Material).dispose();
        scene.remove(debugWireframeRef.current);
        debugWireframeRef.current = null;
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden select-none">
      {/* Points Display */}
      <div className="absolute top-4 right-4 z-[999998]" style={{ pointerEvents: 'none' }}>
        <PointsDisplay playerId="player1" />
      </div>

      {/* Crosshair */}
      {isPointerLocked && <Crosshair />}

      {/* Weapon UI */}
      {isPointerLocked && <WeaponUI />}

      <div ref={mountRef} className="absolute inset-0" style={{ pointerEvents: 'none' }}>
        <canvas ref={canvasRef} className="block w-full h-full" style={{ pointerEvents: 'auto' }} />
      </div>

      {/* Geometry Inspector Info Display */}
      {isPointerLocked && geometryInspectorEnabled && inspectedMeshInfo && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="bg-black/80 border border-yellow-500/70 px-4 py-3 rounded-lg text-xs font-mono tracking-wide text-yellow-300 whitespace-nowrap">
            <div className="font-bold text-yellow-200 mb-1">GEOMETRY INSPECTOR</div>
            <div>Mesh: <span className="text-white">{inspectedMeshInfo.meshName}</span></div>
            {inspectedMeshInfo.roomId && <div>Room ID: <span className="text-emerald-400">{inspectedMeshInfo.roomId}</span></div>}
            {inspectedMeshInfo.wallId && <div>Wall ID: <span className="text-blue-400">{inspectedMeshInfo.wallId}</span></div>}
            {inspectedMeshInfo.floorId && <div>Floor ID: <span className="text-purple-400">{inspectedMeshInfo.floorId}</span></div>}
            <div className="mt-2 text-yellow-500/70 text-[10px]">Press F4 to toggle · window.inspectGeometry() for details</div>
          </div>
        </div>
      )}

      {/* Door interaction prompt */}
      {isPointerLocked && canInteract && promptText && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="bg-black/70 border border-emerald-500/50 px-4 py-2 rounded-lg text-sm font-mono tracking-wide text-emerald-400 whitespace-nowrap">
            {promptText}
          </div>
        </div>
      )}

      {/* Click-to-play prompt */}
      {!isPointerLocked && (
        <div className="absolute inset-x-0 bottom-8 flex justify-center pointer-events-none z-10">
          <div className="bg-black/70 border border-white/10 px-5 py-2 rounded-full text-[11px] font-mono tracking-widest text-white/50 uppercase">
            Click to Play · WASD Move · Mouse Look · V Noclip · F4 Geometry Inspector · ESC Free Cursor
          </div>
        </div>
      )}

      {/* Map Validation Mode UI */}
      {validationModeEnabled && (
        <>
          {/* Validation mode indicator */}
          <div className="absolute top-4 left-4 pointer-events-none z-10">
            <div className="bg-red-900/80 border border-red-500 px-3 py-2 rounded-lg text-xs font-mono text-red-300">
              <div className="font-bold text-red-200 mb-1">MAP VALIDATION MODE</div>
              <div>Issues: {validationIssues.length}</div>
              {currentIssueIndex >= 0 && (
                <div className="text-yellow-300">Viewing: {currentIssueIndex + 1}/{validationIssues.length}</div>
              )}
              <div className="mt-2 text-gray-400 text-[10px]">
                F8: Scan · F9: Next Issue · F10: Toggle
              </div>
            </div>
          </div>

          {/* Issues list */}
          {validationIssues.length > 0 && (
            <div className="absolute top-4 right-4 max-w-md max-h-96 overflow-y-auto pointer-events-auto z-[999997]">
              <div className="bg-black/80 border border-red-500/50 rounded-lg p-3">
                <div className="text-xs font-mono text-red-300 font-bold mb-2">DETECTED ISSUES</div>
                <div className="space-y-1">
                  {validationIssues.map((issue, idx) => (
                    <div
                      key={issue.id}
                      className={`text-[10px] font-mono p-1.5 rounded cursor-pointer transition-colors ${
                        idx === currentIssueIndex
                          ? 'bg-yellow-900/50 text-yellow-200 border border-yellow-500/50'
                          : issue.severity === 'critical'
                            ? 'bg-red-950/50 text-red-300 hover:bg-red-900/30'
                            : issue.severity === 'high'
                              ? 'bg-orange-950/50 text-orange-300 hover:bg-orange-900/30'
                              : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800/50'
                      }`}
                      onClick={() => {
                        setCurrentIssueIndex(idx);
                        const validator = mapValidatorRef.current;
                        const issues = validator.getIssues();
                        if (issues[idx]) {
                          playerPos.current.set(issues[idx].location[0], issues[idx].location[1] + 2, issues[idx].location[2] + 5);
                          yaw.current = Math.PI;
                        }
                      }}
                    >
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                        issue.type === 'floor_gap' ? 'bg-red-500' :
                        issue.type === 'wall_gap' ? 'bg-yellow-500' :
                        issue.type === 'door_gap' ? 'bg-blue-500' :
                        issue.type === 'stair_gap' ? 'bg-orange-500' :
                        issue.type === 'corner_crack' ? 'bg-pink-500' :
                        'bg-gray-500'
                      }`} />
                      [{issue.severity.toUpperCase()}] {issue.roomName} - {issue.type.replace('_', ' ')}
                      <div className="text-gray-400 ml-4 truncate">{issue.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* No issues message */}
          {validationModeEnabled && validationIssues.length === 0 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
              <div className="bg-green-900/80 border border-green-500 px-6 py-4 rounded-lg text-sm font-mono text-green-300">
                <div className="font-bold text-green-200 mb-1">NO ISSUES DETECTED</div>
                <div className="text-green-400">Map geometry is clean!</div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Not Enough Points Feedback */}
      {showNotEnoughPoints && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
          <div className="bg-red-900/90 border-2 border-red-500 px-6 py-3 rounded-lg text-lg font-mono tracking-wide text-red-200 whitespace-nowrap animate-pulse">
            NOT ENOUGH POINTS
          </div>
        </div>
      )}

      {/* Debug Overlay - Collapsible F1 menu (RENDERED LAST TO BE ON TOP) */}
      <DebugOverlay
        data={{
          fps,
          meshCount,
          drawCalls,
          playerPos: playerPos.current,
          playerRot: cameraRef.current?.rotation || new THREE.Euler(0, 0, 0),
          currentRoom: currentRoomName,
          noclip: noclipRef.current,
          round: roundState.round,
          zombiesAlive: roundState.zombiesAlive,
          spawnStatus: roundState.spawnStatus,
          connectivityIssues: connectivityIssues,
          floorIntegrityIssues: floorAuditIssues,
          debugLightingEnabled,
          debugLightingBrightness,
          roomDetectorStatus: {
            playerPosition: { x: playerPos.current.x, y: playerPos.current.y, z: playerPos.current.z },
            roomCount: INITIAL_ROOMS.length,
            closestRoom: null,
            closestDistance: 0,
            currentRoom: currentRoomName,
            rejectionReason: currentRoomName === 'None' ? 'Player position does not fall within any room bounds. Check Y height (floorY) or X/Z coordinates.' : null,
          },
          stairDebugData,
          playerStairAnalysis,
          zombieDebugData,
        }}
        onToggleNoclip={() => { noclipRef.current = !noclipRef.current; }}
        onRunConnectivity={runConnectivityAudit}
        onRunFloorAudit={runFloorAudit}
        onTeleportToSpawn={() => {
          // Teleport to starter room spawn point
          playerPos.current.set(17.5, PLAYER_EYE_HEIGHT, -10);
          yaw.current = Math.PI;
          if ((window as any).DEBUG_VERBOSE) {
            console.log('[DebugOverlay] Teleported to starter room spawn');
          }
        }}
        onTeleportToIssue={(issue) => {
          playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
          yaw.current = Math.PI;
          noclipRef.current = true;
          if ((window as any).DEBUG_VERBOSE) {
            console.log(`[DebugOverlay] Teleported to issue: ${issue.type} in ${issue.roomName}`);
          }
        }}
        onToggleDebugLighting={toggleDebugLighting}
        onSetDebugLightingBrightness={(brightness: number) => {
          setDebugLightingBrightness(brightness);
          if (debugLightingEnabledRef.current && ambientLightRef.current) {
            ambientLightRef.current.intensity = brightness;
          }
        }}
        onStairVisualToggle={(enabled: boolean) => {
          setStairVisualDebugEnabled(enabled);
        }}
        onStairCollisionToggle={(enabled: boolean) => {
          setStairCollisionDebugEnabled(enabled);
        }}
        onAddPoints={addPlayerPoints}
        onSetPoints={setPlayerPoints}
        onRestoreHealth={() => {
          console.log('[APP] onRestoreHealth called - Health restoration not yet implemented');
        }}
        onToggleGodMode={() => {
          console.log('[APP] onToggleGodMode called - God mode not yet implemented');
        }}
        onTeleportToCurrentRoomSpawn={() => {
          console.log('[APP] onTeleportToCurrentRoomSpawn called - Room spawn teleport not yet implemented');
        }}
        onToggleInfiniteAmmo={() => {
          console.log('[APP] onToggleInfiniteAmmo called - Infinite ammo not yet implemented');
        }}
        onStartRound={startDebugRound}
        onNextRound={goToNextDebugRound}
        onPreviousRound={goToPreviousDebugRound}
        onForceEndRound={forceEndDebugRound}
        onSpawnCurrentWave={spawnCurrentDebugWave}
        onKillAllZombies={killAllDebugZombies}
        onSpawnZombie={spawnDebugZombies}
      />
    </div>
  );
}
