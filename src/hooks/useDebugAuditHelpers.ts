import type { Dispatch, SetStateAction } from 'react';
import type { MutableRefObject } from 'react';
import { FloorIssue } from '../utils/FloorIntegrityAudit';
import { ConnectivityIssue } from '../utils/MapConnectivityAudit';
import { ValidationIssue } from '../utils/MapValidator';
import { INITIAL_ROOMS, ROOM_GAPS } from '../game/mapConfig';
import * as THREE from 'three';

export interface DebugAuditHelpers {
  runFloorAudit: () => void;
  teleportToNextFloorIssue: () => void;
  runConnectivityAudit: () => void;
  teleportToNextConnectivityIssue: () => void;
  scanCurrentRoomForValidation: () => void;
  teleportToNextValidationIssue: () => void;
  toggleValidationMode: () => void;
}

export interface DebugAuditDeps {
  floorAuditorRef: MutableRefObject<any>;
  connectivityAuditorRef: MutableRefObject<any>;
  mapValidatorRef: MutableRefObject<any>;
  floorAuditIssuesRef: MutableRefObject<FloorIssue[]>;
  connectivityIssuesRef: MutableRefObject<ConnectivityIssue[]>;
  validationIssuesRef: MutableRefObject<ValidationIssue[]>;
  currentFloorIssueIndexRef: MutableRefObject<number>;
  currentConnectivityIssueIndexRef: MutableRefObject<number>;
  currentIssueIndexRef: MutableRefObject<number>;
  floorDebugModeRef: MutableRefObject<boolean>;
  playerPos: MutableRefObject<THREE.Vector3>;
  yaw: MutableRefObject<number>;
  doorsRef: MutableRefObject<any[]>;
  setFloorAuditIssues: (issues: FloorIssue[]) => void;
  setFloorDebugMode: Dispatch<SetStateAction<boolean>>;
  setCurrentFloorIssueIndex: (index: number) => void;
  setConnectivityIssues: (issues: ConnectivityIssue[]) => void;
  setConnectivityReport: (report: any) => void;
  setConnectivityDebugMode: (enabled: boolean) => void;
  setCurrentConnectivityIssueIndex: (index: number) => void;
  setValidationIssues: (issues: ValidationIssue[]) => void;
  setValidationModeEnabled: (enabled: boolean) => void;
  setCurrentIssueIndex: (index: number) => void;
}

/**
 * Hook that provides debug and audit helper functions for map validation,
 * floor integrity, and connectivity auditing.
 */
export function useDebugAuditHelpers(deps: DebugAuditDeps): DebugAuditHelpers {
  const {
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
  } = deps;

  const runFloorAudit = () => {
    const auditor = floorAuditorRef.current;
    auditor.initialize(INITIAL_ROOMS, ROOM_GAPS);
    const report = auditor.runAudit();
    setFloorAuditIssues(report.issues);
    setFloorDebugMode(prev => !prev);
    setCurrentFloorIssueIndex(-1);
    if ((window as any).DEBUG_VERBOSE) {
      console.log(`[FloorIntegrityAudit] Debug mode ${!floorDebugModeRef.current ? 'enabled' : 'disabled'}: ${report.totalIssuesFound} issues found`);
    }
  };

  const teleportToNextFloorIssue = () => {
    const issues = floorAuditIssuesRef.current;
    const currentIndex = currentFloorIssueIndexRef.current;
    if (issues.length > 0) {
      const nextIndex = (currentIndex + 1) % issues.length;
      const issue = issues[nextIndex];
      
      // Teleport player to issue location
      playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
      yaw.current = Math.PI; // Face the issue
      setCurrentFloorIssueIndex(nextIndex);
      if ((window as any).DEBUG_VERBOSE) {
        console.log(`[FloorIntegrityAudit] Teleported to issue ${nextIndex + 1}/${issues.length}: ${issue.cause} in ${issue.roomName}`);
      }
    }
  };

  const runConnectivityAudit = () => {
    const auditor = connectivityAuditorRef.current;
    auditor.initialize(INITIAL_ROOMS, ROOM_GAPS, 'starter');
    const report = auditor.runAudit();
    const issues = auditor.getIssues();
    setConnectivityIssues(issues);
    setConnectivityReport(report);
    setConnectivityDebugMode(true);
    setCurrentConnectivityIssueIndex(-1);
    if ((window as any).DEBUG_VERBOSE) {
      console.log(`[MapConnectivityAudit] Audit complete: ${report.totalIssues} issues found`);
      console.log(`  - Connected Rooms: ${report.totalConnectedRooms}`);
      console.log(`  - Disconnected Rooms: ${report.disconnectedRooms.length}`);
      console.log(`  - Void Exposures: ${report.voidExposures.length}`);
      console.log(`  - Missing Walls: ${report.missingWalls.length}`);
      console.log(`  - Missing Ceilings: ${report.missingCeilings.length}`);
      console.log(`  - Navigation Breaks: ${report.navigationBreaks.length}`);
    }
  };

  const teleportToNextConnectivityIssue = () => {
    const issues = connectivityIssuesRef.current;
    const currentIndex = currentConnectivityIssueIndexRef.current;
    if (issues.length > 0) {
      const nextIndex = (currentIndex + 1) % issues.length;
      const issue = issues[nextIndex];
      
      // Teleport player to issue location
      playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
      yaw.current = Math.PI; // Face the issue
      setCurrentConnectivityIssueIndex(nextIndex);
      if ((window as any).DEBUG_VERBOSE) {
        console.log(`[MapConnectivityAudit] Teleported to issue ${nextIndex + 1}/${issues.length}: ${issue.description} in ${issue.roomName}`);
      }
    }
  };

  const scanCurrentRoomForValidation = () => {
    const validator = mapValidatorRef.current;
    
    // Get current room name based on player position
    const px = playerPos.current.x;
    const pz = playerPos.current.z;
    let currentRoomName: string | undefined;
    
    for (const room of INITIAL_ROOMS) {
      const halfW = room.w / 2;
      const halfD = room.d / 2;
      if (px >= room.cx - halfW && px <= room.cx + halfW &&
          pz >= room.cz - halfD && pz <= room.cz + halfD) {
        currentRoomName = room.name;
        break;
      }
    }
    
    validator.setData(INITIAL_ROOMS, ROOM_GAPS, doorsRef.current);
    validator.enable(currentRoomName);
    const issues = validator.getIssues();
    setValidationIssues(issues);
    setValidationModeEnabled(true);
    setCurrentIssueIndex(-1);
    if ((window as any).DEBUG_VERBOSE) {
      console.log(`[RoomSealValidator] Scan complete: ${issues.length} issues found${currentRoomName ? ` in ${currentRoomName}` : ''}`);
    }
  };

  const teleportToNextValidationIssue = () => {
    const validator = mapValidatorRef.current;
    const issues = validationIssuesRef.current;
    const currentIndex = currentIssueIndexRef.current;
    
    if (issues.length > 0) {
      const nextIndex = (currentIndex + 1) % issues.length;
      const issue = issues[nextIndex];
      
      // Teleport player to issue location
      playerPos.current.set(issue.location[0], issue.location[1] + 2, issue.location[2] + 5);
      yaw.current = Math.PI; // Face the issue
      setCurrentIssueIndex(nextIndex);
      if ((window as any).DEBUG_VERBOSE) {
        console.log(`[RoomSealValidator] Teleported to issue ${nextIndex + 1}/${issues.length}: ${issue.description} in ${issue.roomName}`);
      }
    }
  };

  const toggleValidationMode = () => {
    const validator = mapValidatorRef.current;
    validator.setData(INITIAL_ROOMS, ROOM_GAPS, doorsRef.current);
    const enabled = validator.toggle();
    setValidationModeEnabled(enabled);
    if (enabled) {
      const issues = validator.getIssues();
      setValidationIssues(issues);
    } else {
      setValidationIssues([]);
      setCurrentIssueIndex(-1);
    }
    if ((window as any).DEBUG_VERBOSE) {
      console.log(`[MapValidator] Validation mode ${enabled ? 'enabled' : 'disabled'}`);
    }
  };

  return {
    runFloorAudit,
    teleportToNextFloorIssue,
    runConnectivityAudit,
    teleportToNextConnectivityIssue,
    scanCurrentRoomForValidation,
    teleportToNextValidationIssue,
    toggleValidationMode,
  };
}
