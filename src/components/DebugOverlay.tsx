import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { ConnectivityIssue, FloorIssue } from '../utils/MapConnectivityAudit';
import { DoorAuditReport, RoomDoorData, MissingDoorRecommendation } from '../utils/DoorConnectivityAudit';
import AuditTab from './tabs/AuditTab';
import DoorsTab from './tabs/DoorsTab';
import ZombiesTab from './tabs/ZombiesTab';
import StairsTab from './tabs/StairsTab';

export interface StairDebugData {
  id: string;
  name: string;
  direction: string;
  visualPosition: { x: number; y: number; z: number };
  visualRotation: { x: number; y: number; z: number };
  visualScale: { x: number; y: number; z: number };
  collisionPosition: { x: number; y: number; z: number };
  collisionRotation: { x: number; y: number; z: number };
  collisionScale: { x: number; y: number; z: number };
  offsetX: number;
  offsetY: number;
  offsetZ: number;
  rotationDiffX: number;
  rotationDiffY: number;
  rotationDiffZ: number;
  width: number;
  depth: number;
  climbHeight: number;
  isMisaligned: boolean;
  misalignmentWarning?: string;
  // Validation data
  positionDelta: number;
  rotationDelta: number;
  heightDelta: number;
  validationPass: boolean;
}

export interface PlayerStairAnalysis {
  playerPosition: { x: number; y: number; z: number };
  currentRoomId: string | null;
  expectedRampHeight: number | null;
  actualPlayerHeight: number;
  heightDifference: number;
  isInStairwell: boolean;
}

export interface DebugData {
  fps: number;
  meshCount: number;
  drawCalls: number;
  playerPos: THREE.Vector3;
  playerRot: THREE.Euler;
  currentRoom: string | null;
  noclip: boolean;
  round: number;
  zombiesAlive: number;
  spawnStatus: string;
  connectivityIssues: ConnectivityIssue[];
  floorIntegrityIssues: FloorIssue[];
  debugLightingEnabled?: boolean;
  debugLightingBrightness?: number;
  // Room detector diagnostics
  roomDetectorStatus?: {
    playerPosition: { x: number; y: number; z: number };
    roomCount: number;
    closestRoom: string | null;
    closestDistance: number;
    currentRoom: string | null;
    rejectionReason: string | null;
    testedRooms?: Array<{
      roomName: string;
      bounds: { x: [number, number]; z: [number, number]; y: [number, number] };
      insideX: boolean;
      insideZ: boolean;
      insideY: boolean;
      insideRoom: boolean;
    }>;
  };
  // Stair debugging data
  stairDebugData?: StairDebugData[];
  playerStairAnalysis?: PlayerStairAnalysis;
  // Door audit data
  doorAuditReport?: DoorAuditReport | null;
  // Zombie debug data
  zombieDebugData?: ZombieDebugData;
}

export interface ZombieDebugData {
  aliveCount: number;
  deadCount: number;
  currentRound: number;
  expectedZombiesThisRound: number;
  killsThisRound: number;
  zombies: ZombieDebugEntry[];
}

export interface ZombieDebugEntry {
  id: string;
  health: number;
  maxHealth: number;
  position: { x: number; y: number; z: number };
  distanceToPlayer: number;
  state: 'alive' | 'dying' | 'dead';
}

interface Props {
  data: DebugData;
  onToggleNoclip: () => void;
  onRunConnectivity: () => void;
  onRunFloorAudit: () => void;
  onTeleportToSpawn: () => void;
  onTeleportToIssue?: (issue: ConnectivityIssue | FloorIssue) => void;
  onToggleDebugLighting?: () => void;
  onSetDebugLightingBrightness?: (brightness: number) => void;
  onStairVisualToggle?: (enabled: boolean) => void;
  onStairCollisionToggle?: (enabled: boolean) => void;
  onAddPoints?: (amount: number) => void;
  onSetPoints?: (amount: number) => void;
  onRestoreHealth?: () => void;
  onToggleGodMode?: () => void;
  onTeleportToCurrentRoomSpawn?: () => void;
  onToggleInfiniteAmmo?: () => void;
  onStartRound?: (round: number) => void;
  onNextRound?: () => void;
  onPreviousRound?: () => void;
  onForceEndRound?: () => void;
  onSpawnCurrentWave?: () => void;
  onKillAllZombies?: () => void;
  onSpawnZombie?: (count: number) => void;
}

const DebugOverlay: React.FC<Props> = ({
  data,
  onToggleNoclip,
  onRunConnectivity,
  onRunFloorAudit,
  onTeleportToSpawn,
  onTeleportToIssue,
  onToggleDebugLighting,
  onSetDebugLightingBrightness,
  onStairVisualToggle,
  onStairCollisionToggle,
  onAddPoints,
  onSetPoints,
  onRestoreHealth,
  onToggleGodMode,
  onTeleportToCurrentRoomSpawn,
  onToggleInfiniteAmmo,
  onStartRound,
  onNextRound,
  onPreviousRound,
  onForceEndRound,
  onSpawnCurrentWave,
  onKillAllZombies,
  onSpawnZombie,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'audit' | 'doors' | 'player' | 'rounds' | 'zombies' | 'perf' | 'stairs'>('audit');
  const [expandedIssues, setExpandedIssues] = useState<Set<string>>(new Set());
  const [filterType, setFilterType] = useState<'all' | 'connectivity' | 'floor' | 'open'>('all');
  const [stairVisualEnabled, setStairVisualEnabled] = useState(false);
  const [stairCollisionEnabled, setStairCollisionEnabled] = useState(false);
  const [customPointsAmount, setCustomPointsAmount] = useState<number>(1000);
  const [godModeEnabled, setGodModeEnabled] = useState(false);
  const [infiniteAmmoEnabled, setInfiniteAmmoEnabled] = useState(false);
  const [clipboardFeedback, setClipboardFeedback] = useState<string | null>(null);

  // Notify parent when toggles change
  useEffect(() => {
    onStairVisualToggle?.(stairVisualEnabled);
  }, [stairVisualEnabled, onStairVisualToggle]);

  useEffect(() => {
    onStairCollisionToggle?.(stairCollisionEnabled);
  }, [stairCollisionEnabled, onStairCollisionToggle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F1') {
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'F2') {
        onToggleDebugLighting?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleDebugLighting]);

  // Combine all issues with source tracking
  const allIssues = [
    ...data.connectivityIssues.map(i => ({ ...i, source: 'connectivity' as const })),
    ...data.floorIntegrityIssues.map(i => ({ ...i, source: 'floor' as const }))
  ];

  // Apply filter
  const filteredIssues = allIssues.filter(issue => {
    if (filterType === 'connectivity') return issue.source === 'connectivity';
    if (filterType === 'floor') return issue.source === 'floor';
    if (filterType === 'open') return true; // All issues are considered "open" until fixed
    return true;
  });

  const toggleIssueExpand = (issueId: string) => {
    const newSet = new Set(expandedIssues);
    if (newSet.has(issueId)) {
      newSet.delete(issueId);
    } else {
      newSet.add(issueId);
    };
    setExpandedIssues(newSet);
  };

  const getSuggestedFix = (issue: any): string => {
    switch (issue.type) {
      case 'void_exposure':
        return 'Add wall, barrier, or intentional opening marker.';
      case 'missing_wall':
        return 'Add missing wall geometry or mark as intentional opening.';
      case 'missing_ceiling':
        return 'Add ceiling geometry or verify if intentional (outdoor area).';
      case 'disconnected_room':
        return 'Add connecting doorway or teleport trigger.';
      case 'gap':
      case 'missing_tile':
        return 'Fill floor gap with matching tile geometry.';
      case 'height_mismatch':
        return 'Adjust floor height to match adjacent sections.';
      case 'crack':
        return 'Repair crack or add decorative cover.';
      default:
        return 'Review and fix geometry alignment.';
    }
  };

  const getSeverityColor = (severity: string): string => {
    switch (severity) {
      case 'critical': return '#f00';
      case 'high': return '#ff6600';
      case 'medium': return '#ff0';
      case 'low': return '#0f0';
      default: return '#fff';
    }
  };

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 999999,
    fontFamily: 'monospace',
    fontSize: '12px',
    color: '#0f0',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    border: '1px solid #0f0',
    borderRadius: '4px',
    padding: '10px',
    minWidth: '280px',
    maxWidth: '450px',
    userSelect: 'none',
    pointerEvents: 'auto',
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    borderBottom: '1px solid #333',
    paddingBottom: '5px',
    cursor: 'pointer',
  };

  const tabsStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    marginBottom: '10px',
    borderBottom: '1px solid #333',
    gap: '2px',
  };

  const tabStyle = (isActive: boolean): React.CSSProperties => ({
    flex: '0 1 auto',
    textAlign: 'center',
    padding: '4px 6px',
    cursor: 'pointer',
    backgroundColor: isActive ? '#0f0' : 'transparent',
    color: isActive ? '#000' : '#0f0',
    fontWeight: 'bold',
    fontSize: '9px',
    minWidth: '50px',
  });

  const sectionStyle: React.CSSProperties = {
    display: isOpen ? 'block' : 'none',
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '2px',
  };

  const buttonStyle: React.CSSProperties = {
    background: '#003300',
    color: '#0f0',
    border: '1px solid #0f0',
    padding: '4px 8px',
    cursor: 'pointer',
    fontSize: '10px',
    marginTop: '5px',
    width: '100%',
    textAlign: 'center',
  };

  const miniHudStyle: React.CSSProperties = {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 999,
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px 10px',
    borderRadius: '4px',
    pointerEvents: 'none',
  };

  const debugLightingIndicatorStyle: React.CSSProperties = {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 998,
    fontFamily: 'monospace',
    fontSize: '12px',
    color: data.debugLightingEnabled ? '#ff0' : '#666',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '5px 10px',
    borderRadius: '4px',
    pointerEvents: 'none',
  };

  return (
    <>
      {/* Debug Lighting Indicator */}
      {data.debugLightingEnabled && (
        <div style={debugLightingIndicatorStyle}>
          DEBUG LIGHTING: ON ({data.debugLightingBrightness?.toFixed(1)}x)
        </div>
      )}

      {/* Mini HUD (Always Visible) */}
      <div style={miniHudStyle}>
        <span>FPS: {Math.round(data.fps)}</span>
        {data.currentRoom && (
          <span style={{ marginLeft: '10px' }}>Room: {data.currentRoom}</span>
        )}
      </div>

      {/* Main Debug Overlay */}
      <div style={containerStyle}>
        <div style={headerStyle} onClick={() => setIsOpen(!isOpen)}>
          <strong>DEBUG CONSOLE [F1]</strong>
          <span>{isOpen ? '▼' : '▶'}</span>
        </div>

        {isOpen && (
          <div style={tabsStyle} data-testid="debug-tabs">
            <div 
              style={tabStyle(activeTab === 'audit')} 
              onClick={() => { console.log("CLICK TEST - AUDIT TAB"); setActiveTab('audit'); }}
              data-testid="tab-audit"
            >AUDIT</div>
            <div 
              style={tabStyle(activeTab === 'doors')} 
              onClick={() => { console.log("CLICK TEST - DOORS TAB"); setActiveTab('doors'); }}
              data-testid="tab-doors"
            >DOORS</div>
            <div 
              style={tabStyle(activeTab === 'player')} 
              onClick={() => { console.log("CLICK TEST - PLAYER TAB"); setActiveTab('player'); }}
              data-testid="tab-player"
            >PLAYER</div>
            <div 
              style={tabStyle(activeTab === 'rounds')} 
              onClick={() => { console.log("CLICK TEST - ROUNDS TAB"); setActiveTab('rounds'); }}
              data-testid="tab-rounds"
            >ROUNDS</div>
            <div 
              style={tabStyle(activeTab === 'zombies')} 
              onClick={() => { console.log("CLICK TEST - ZOMBIES TAB"); setActiveTab('zombies'); }}
              data-testid="tab-zombies"
            >ZOMBIES</div>
            <div 
              style={tabStyle(activeTab === 'perf')} 
              onClick={() => { console.log("CLICK TEST - PERF TAB"); setActiveTab('perf'); }}
              data-testid="tab-perf"
            >PERF</div>
            <div 
              style={tabStyle(activeTab === 'stairs')} 
              onClick={() => { console.log("CLICK TEST - STAIRS TAB"); setActiveTab('stairs'); }}
              data-testid="tab-stairs"
            >STAIRS</div>
          </div>
        )}

        <div style={sectionStyle}>
          {activeTab === 'audit' && (
            <AuditTab
              connectivityIssues={data.connectivityIssues}
              floorIntegrityIssues={data.floorIntegrityIssues}
              onRunConnectivity={onRunConnectivity}
              onRunFloorAudit={onRunFloorAudit}
              onTeleportToSpawn={onTeleportToSpawn}
              onTeleportToIssue={onTeleportToIssue}
            />
          )}

          {activeTab === 'player' && (
            <div>
              {/* Room Detector Status Section */}
              {data.roomDetectorStatus && (
                <div style={{ 
                  border: '1px solid #f00', 
                  backgroundColor: 'rgba(255, 0, 0, 0.1)', 
                  padding: '8px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <strong style={{ color: '#f00', display: 'block', marginBottom: '6px' }}>
                    ROOM DETECTOR STATUS
                  </strong>
                  
                  <div style={rowStyle}>
                    <span>Player Position:</span>
                    <span>[{data.roomDetectorStatus.playerPosition.x.toFixed(1)}, {data.roomDetectorStatus.playerPosition.y.toFixed(1)}, {data.roomDetectorStatus.playerPosition.z.toFixed(1)}]</span>
                  </div>
                  <div style={rowStyle}>
                    <span>Room Count:</span>
                    <span>{data.roomDetectorStatus.roomCount}</span>
                  </div>
                  <div style={rowStyle}>
                    <span>Current Room:</span>
                    <span style={{ color: data.roomDetectorStatus.currentRoom ? '#0f0' : '#f00' }}>
                      {data.roomDetectorStatus.currentRoom || 'None'}
                    </span>
                  </div>
                  <div style={rowStyle}>
                    <span>Closest Room:</span>
                    <span>{data.roomDetectorStatus.closestRoom || 'N/A'}</span>
                  </div>
                  <div style={rowStyle}>
                    <span>Distance:</span>
                    <span>{data.roomDetectorStatus.closestDistance.toFixed(2)}</span>
                  </div>
                  {data.roomDetectorStatus.rejectionReason && (
                    <div style={{ 
                      marginTop: '6px', 
                      padding: '4px', 
                      backgroundColor: 'rgba(255, 0, 0, 0.2)',
                      borderLeft: '2px solid #f00',
                      fontSize: '10px'
                    }}>
                      <span style={{ color: '#f00' }}>Reason: </span>
                      <span>{data.roomDetectorStatus.rejectionReason}</span>
                    </div>
                  )}
                </div>
              )}

              <div style={rowStyle}>
                <span>Pos X:</span>
                <span>{data.playerPos.x.toFixed(2)}</span>
              </div>
              <div style={rowStyle}>
                <span>Pos Y:</span>
                <span>{data.playerPos.y.toFixed(2)}</span>
              </div>
              <div style={rowStyle}>
                <span>Pos Z:</span>
                <span>{data.playerPos.z.toFixed(2)}</span>
              </div>
              <div style={rowStyle}>
                <span>Rot Y:</span>
                <span>{THREE.MathUtils.radToDeg(data.playerRot.y).toFixed(1)}°</span>
              </div>
              <div style={rowStyle}>
                <span>Room:</span>
                <span>{data.currentRoom || 'None'}</span>
              </div>
              <div style={rowStyle}>
                <span>Noclip:</span>
                <span
                  style={{
                    color: data.noclip ? '#0ff' : '#f00',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={onToggleNoclip}
                >
                  {data.noclip ? 'ON' : 'OFF'} (Click)
                </span>
              </div>
              <div style={{ ...rowStyle, marginTop: '8px', borderTop: '1px dashed #333', paddingTop: '8px' }}>
                <span>Debug Lighting:</span>
                <span
                  style={{
                    color: data.debugLightingEnabled ? '#ff0' : '#f00',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={onToggleDebugLighting}
                >
                  {data.debugLightingEnabled ? 'ON' : 'OFF'} (Click)
                </span>
              </div>
              {onSetDebugLightingBrightness && (
                <div style={{ marginTop: '8px' }}>
                  <div style={rowStyle}>
                    <span>Brightness:</span>
                    <span>{data.debugLightingBrightness?.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="5.0"
                    step="0.1"
                    value={data.debugLightingBrightness || 3.0}
                    onChange={(e) => onSetDebugLightingBrightness?.(parseFloat(e.target.value))}
                    style={{ width: '100%', marginTop: '4px', cursor: 'pointer' }}
                  />
                  <div style={{ fontSize: '9px', color: '#888', marginTop: '2px' }}>Range: 1.0x - 5.0x</div>
                </div>
              )}

              {/* Player Cheats Section */}
              <div style={{ marginTop: '12px', borderTop: '1px dashed #333', paddingTop: '8px' }}>
                <strong style={{ color: '#0ff', fontSize: '10px', display: 'block', marginBottom: '6px' }}>PLAYER CHEATS</strong>
                
                {/* Points Controls */}
                <div style={{ marginBottom: '8px' }}>
                  <div style={{ fontSize: '9px', color: '#888', marginBottom: '4px' }}>POINTS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {[500, 1000, 5000, 10000].map(amt => (
                      <button
                        key={amt}
                        onClick={() => { console.log("PLAYER BUTTON CLICKED - ADD POINTS:", amt); onAddPoints?.(amt); }}
                        style={{
                          ...buttonStyle,
                          marginTop: 0,
                          backgroundColor: '#059669',
                          flex: '0 1 auto',
                          padding: '4px 8px',
                          fontSize: '9px',
                        }}
                        data-testid={`add-points-${amt}`}
                      >
                        +{amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '4px', marginTop: '4px', alignItems: 'center' }}>
                    <input
                      type="number"
                      value={customPointsAmount}
                      onChange={(e) => setCustomPointsAmount(parseInt(e.target.value) || 0)}
                      style={{
                        flex: 1,
                        backgroundColor: '#111',
                        border: '1px solid #0f0',
                        color: '#0f0',
                        padding: '4px',
                        fontSize: '10px',
                        fontFamily: 'monospace',
                      }}
                    />
                    <button
                      onClick={() => onSetPoints?.(customPointsAmount)}
                      style={{ ...buttonStyle, marginTop: 0, padding: '4px 8px', fontSize: '9px' }}
                    >
                      SET
                    </button>
                  </div>
                </div>

                {/* Toggle Cheats */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                  <button
                    onClick={() => { setGodModeEnabled(!godModeEnabled); onToggleGodMode?.(); }}
                    style={{
                      ...buttonStyle,
                      marginTop: 0,
                      flex: 1,
                      backgroundColor: godModeEnabled ? '#dc2626' : '#4b5563',
                      borderColor: godModeEnabled ? '#f00' : '#888',
                    }}
                  >
                    GOD MODE {godModeEnabled ? 'ON' : 'OFF'}
                  </button>
                  <button
                    onClick={() => { setInfiniteAmmoEnabled(!infiniteAmmoEnabled); onToggleInfiniteAmmo?.(); }}
                    style={{
                      ...buttonStyle,
                      marginTop: 0,
                      flex: 1,
                      backgroundColor: infiniteAmmoEnabled ? '#059669' : '#4b5563',
                      borderColor: infiniteAmmoEnabled ? '#0f0' : '#888',
                    }}
                  >
                    INF AMMO {infiniteAmmoEnabled ? 'ON' : 'OFF'}
                  </button>
                </div>

                {/* Health & Teleport */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                  <button
                    onClick={() => onRestoreHealth?.()}
                    style={{ ...buttonStyle, marginTop: 0, flex: 1, backgroundColor: '#059669' }}
                  >
                    ❤ RESTORE HEALTH
                  </button>
                  <button
                    onClick={() => onTeleportToSpawn?.()}
                    style={{ ...buttonStyle, marginTop: 0, flex: 1, backgroundColor: '#1e3a8a' }}
                  >
                    📍 TELEPORT TO SPAWN
                  </button>
                </div>
                <button
                  onClick={() => onTeleportToCurrentRoomSpawn?.()}
                  style={{ ...buttonStyle, width: '100%', backgroundColor: '#1e3a8a' }}
                >
                  📍 TELEPORT TO ROOM SPAWN
                </button>
              </div>
            </div>
          )}

          {activeTab === 'rounds' && (
            <div>
              {/* Round Stats */}
              <div style={{ marginBottom: '10px', border: '1px solid #ff0', padding: '8px', borderRadius: '4px', backgroundColor: 'rgba(255, 255, 0, 0.05)' }}>
                <strong style={{ color: '#ff0', display: 'block', marginBottom: '6px' }}>ROUND STATUS</strong>
                <div style={rowStyle}>
                  <span>Current Round:</span>
                  <span style={{ color: '#ff0', fontWeight: 'bold' }}>{data.round}</span>
                </div>
                <div style={rowStyle}>
                  <span>Zombies Remaining:</span>
                  <span>{data.zombiesAlive}</span>
                </div>
                <div style={rowStyle}>
                  <span>Spawn Status:</span>
                  <span>{data.spawnStatus}</span>
                </div>
              </div>

              {/* Quick Start Round Buttons */}
              <div style={{ marginBottom: '10px' }}>
                <strong style={{ fontSize: '10px', color: '#888' }}>START ROUND</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '4px' }}>
                  {[1, 5, 10, 20, 50].map(r => (
                    <button
                      key={r}
                      onClick={() => { 
                        console.log("[ROUND TRACE] R{r} button clicked in DebugOverlay");
                        console.log("[ROUND TRACE] Calling onStartRound with round:", r);
                        onStartRound?.(r); 
                      }}
                      style={{
                        ...buttonStyle,
                        marginTop: 0,
                        backgroundColor: '#1e3a8a',
                        borderColor: '#00f',
                        flex: '0 1 auto',
                        padding: '4px 8px',
                        fontSize: '9px',
                      }}
                    >
                      R{r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Round Navigation */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    onClick={() => { console.log("ROUND BUTTON CLICKED - Previous Round"); onPreviousRound?.(); }}
                    style={{ ...buttonStyle, marginTop: 0, flex: 1, backgroundColor: '#4b5563' }}
                  >
                    ◀ Previous
                  </button>
                  <button
                    onClick={() => { console.log("ROUND BUTTON CLICKED - Next Round"); onNextRound?.(); }}
                    style={{ ...buttonStyle, marginTop: 0, flex: 1, backgroundColor: '#1e3a8a' }}
                  >
                    Next ▶
                  </button>
                </div>
                <button
                  onClick={() => onForceEndRound?.()}
                  style={{ ...buttonStyle, marginTop: '4px', backgroundColor: '#991b1b', borderColor: '#f00' }}
                >
                  ⚠ FORCE END ROUND
                </button>
                <button
                  onClick={() => { 
                    console.log('[ROUND FLOW] SPAWN CURRENT WAVE button clicked');
                    onSpawnCurrentWave?.();
                  }}
                  style={{ ...buttonStyle, marginTop: '4px', backgroundColor: '#166534', borderColor: '#0f0' }}
                >
                  🧟 SPAWN CURRENT WAVE
                </button>
              </div>
            </div>
          )}

          {activeTab === 'zombies' && data.zombieDebugData && (
            <div>
              {/* Summary Stats */}
              <div style={{
                border: '1px solid #f00',
                backgroundColor: 'rgba(255, 0, 0, 0.1)',
                padding: '8px',
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <strong style={{ color: '#f00', display: 'block', marginBottom: '6px' }}>
                  ZOMBIE STATUS
                </strong>
                <div style={{ fontSize: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                  <span>Alive Zombies:</span>
                  <span style={{ color: '#0f0' }}>{data.zombieDebugData.aliveCount}</span>

                  <span>Dead Zombies:</span>
                  <span style={{ color: '#888' }}>{data.zombieDebugData.deadCount}</span>

                  <span>Current Round:</span>
                  <span style={{ color: '#ff0' }}>{data.zombieDebugData.currentRound}</span>

                  <span>Expected This Round:</span>
                  <span>{data.zombieDebugData.expectedZombiesThisRound}</span>

                  <span>Kills This Round:</span>
                  <span style={{ color: '#0ff' }}>{data.zombieDebugData.killsThisRound}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => { console.log("KILL BUTTON CLICKED"); onKillAllZombies?.(); }}
                  style={{
                    ...buttonStyle,
                    backgroundColor: '#991b1b',
                    borderColor: '#f00',
                    marginBottom: '4px',
                  }}
                  data-testid="kill-all-zombies-button"
                >
                  💀 KILL ALL ZOMBIES
                </button>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button
                    onClick={() => onSpawnZombie?.(1)}
                    style={{
                      ...buttonStyle,
                      marginTop: 0,
                      backgroundColor: '#166534',
                      borderColor: '#0f0',
                      flex: 1,
                    }}
                  >
                    🧟 SPAWN 1 ZOMBIE
                  </button>
                  <button
                    onClick={() => onSpawnZombie?.(10)}
                    style={{
                      ...buttonStyle,
                      marginTop: 0,
                      backgroundColor: '#166534',
                      borderColor: '#0f0',
                      flex: 1,
                    }}
                  >
                    🧟🧟 SPAWN 10 ZOMBIES
                  </button>
                </div>
                <button
                  onClick={() => onNextRound?.()}
                  style={{
                    ...buttonStyle,
                    backgroundColor: '#1e3a8a',
                    borderColor: '#00f',
                    marginTop: '4px',
                  }}
                >
                  🔄 START NEXT ROUND
                </button>
              </div>

              {/* Zombie List */}
              <div style={{
                border: '1px solid #333',
                borderRadius: '4px',
                maxHeight: '300px',
                overflowY: 'auto',
              }}>
                <strong style={{ color: '#f88', display: 'block', padding: '6px', borderBottom: '1px solid #333' }}>
                  ZOMBIE DETAILS ({data.zombieDebugData.zombies.length})
                </strong>
                {data.zombieDebugData.zombies.map((zombie, idx) => (
                  <div
                    key={zombie.id}
                    style={{
                      padding: '6px',
                      borderBottom: '1px solid #222',
                      backgroundColor: zombie.state === 'alive' ? 'rgba(0, 255, 0, 0.05)' : 'rgba(255, 0, 0, 0.05)',
                      fontSize: '9px',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <strong style={{ color: zombie.state === 'alive' ? '#0f0' : '#f00' }}>
                        #{idx + 1} - {zombie.id.slice(-8)}
                      </strong>
                      <span style={{ 
                        color: zombie.state === 'alive' ? '#0f0' : zombie.state === 'dying' ? '#ff0' : '#f00',
                        fontWeight: 'bold',
                      }}>
                        [{zombie.state.toUpperCase()}]
                      </span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                      <span>Health: {zombie.health}/{zombie.maxHealth}</span>
                      <span>Dist: {zombie.distanceToPlayer.toFixed(1)}</span>
                      <span>X: {zombie.position.x.toFixed(1)}</span>
                      <span>Z: {zombie.position.z.toFixed(1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'zombies' && !data.zombieDebugData && (
            <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
              No zombie data available. Start a round to see zombie debug info.
            </div>
          )}

          {activeTab === 'perf' && (
            <div>
              <div style={rowStyle}>
                <span>FPS:</span>
                <span style={{ color: data.fps > 50 ? '#0f0' : data.fps > 30 ? '#ff0' : '#f00' }}>
                  {Math.round(data.fps)}
                </span>
              </div>
              <div style={rowStyle}>
                <span>Draw Calls:</span>
                <span>{data.drawCalls}</span>
              </div>
              <div style={rowStyle}>
                <span>Mesh Count:</span>
                <span>{data.meshCount}</span>
              </div>
            </div>
          )}

          {activeTab === 'stairs' && (
            <div>
              {/* Stair Debug Toggles */}
              <div style={{ 
                border: '1px solid #0ff', 
                backgroundColor: 'rgba(0, 255, 255, 0.1)', 
                padding: '8px', 
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <strong style={{ color: '#0ff', display: 'block', marginBottom: '6px' }}>
                  STAIR VISUALIZATION TOGGLES
                </strong>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                  <button
                    onClick={() => setStairVisualEnabled(!stairVisualEnabled)}
                    style={{
                      ...buttonStyle,
                      marginTop: 0,
                      backgroundColor: stairVisualEnabled ? '#00ffff' : '#003333',
                      color: stairVisualEnabled ? '#000' : '#0ff',
                      flex: 1,
                      fontSize: '9px',
                      padding: '4px 2px',
                    }}
                  >
                    VISUAL MESH (BLUE): {stairVisualEnabled ? 'ON' : 'OFF'}
                  </button>
                  <button
                    onClick={() => setStairCollisionEnabled(!stairCollisionEnabled)}
                    style={{
                      ...buttonStyle,
                      marginTop: 0,
                      backgroundColor: stairCollisionEnabled ? '#ff0000' : '#330000',
                      color: stairCollisionEnabled ? '#000' : '#f00',
                      flex: 1,
                      fontSize: '9px',
                      padding: '4px 2px',
                    }}
                  >
                    COLLISION (RED): {stairCollisionEnabled ? 'ON' : 'OFF'}
                  </button>
                </div>
                <div style={{ fontSize: '9px', color: '#888' }}>
                  Note: Enable toggles above to see wireframe overlays in the 3D scene.
                </div>
              </div>

              {/* Stair Alignment Analysis */}
              {data.stairDebugData && data.stairDebugData.length > 0 && (
                <div style={{ 
                  border: '1px solid #ff0', 
                  backgroundColor: 'rgba(255, 255, 0, 0.1)', 
                  padding: '8px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <strong style={{ color: '#ff0', display: 'block', marginBottom: '6px' }}>
                    STAIR ALIGNMENT ANALYSIS
                  </strong>
                  {data.stairDebugData.map((stair, idx) => (
                    <div 
                      key={stair.id}
                      style={{
                        border: stair.isMisaligned ? '1px solid #f00' : '1px solid #333',
                        backgroundColor: !stair.validationPass ? 'rgba(255, 0, 0, 0.15)' : 'transparent',
                        borderRadius: '3px',
                        padding: '6px',
                        marginBottom: '6px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                        <strong style={{ color: stair.validationPass ? '#0f0' : '#f00' }}>
                          [{stair.id}] {stair.name}
                        </strong>
                        <span style={{ 
                          color: stair.validationPass ? '#0f0' : '#f00', 
                          fontSize: '9px', 
                          fontWeight: 'bold' 
                        }}>
                          {stair.validationPass ? '✓ PASS' : '⚠️ FAIL'}
                        </span>
                      </div>
                      
                      <div style={{ fontSize: '9px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                        <span style={{ color: '#888' }}>Direction:</span>
                        <span>{stair.direction}</span>
                        
                        <span style={{ color: '#888' }}>Dimensions:</span>
                        <span>{stair.width} x {stair.depth} (climb: {stair.climbHeight})</span>
                        
                        <span style={{ color: '#0af' }}>Visual Pos:</span>
                        <span>[{stair.visualPosition.x.toFixed(2)}, {stair.visualPosition.y.toFixed(2)}, {stair.visualPosition.z.toFixed(2)}]</span>
                        
                        <span style={{ color: '#f00' }}>Collision Pos:</span>
                        <span>[{stair.collisionPosition.x.toFixed(2)}, {stair.collisionPosition.y.toFixed(2)}, {stair.collisionPosition.z.toFixed(2)}]</span>
                        
                        <span style={{ color: '#0af' }}>Visual Rot:</span>
                        <span>[{stair.visualRotation.x.toFixed(3)}, {stair.visualRotation.y.toFixed(3)}, {stair.visualRotation.z.toFixed(3)}]</span>
                        
                        <span style={{ color: '#f00' }}>Collision Rot:</span>
                        <span>[{stair.collisionRotation.x.toFixed(3)}, {stair.collisionRotation.y.toFixed(3)}, {stair.collisionRotation.z.toFixed(3)}]</span>
                        
                        <span style={{ color: '#ff0' }}>Offset (V-C):</span>
                        <span style={{ color: Math.abs(stair.offsetX) > 0.01 || Math.abs(stair.offsetY) > 0.01 || Math.abs(stair.offsetZ) > 0.01 ? '#f00' : '#0f0' }}>
                          X:{stair.offsetX.toFixed(4)} Y:{stair.offsetY.toFixed(4)} Z:{stair.offsetZ.toFixed(4)}
                        </span>
                        
                        <span style={{ color: '#ff0' }}>Rot Diff:</span>
                        <span style={{ color: Math.abs(stair.rotationDiffX) > 0.001 || Math.abs(stair.rotationDiffY) > 0.001 || Math.abs(stair.rotationDiffZ) > 0.001 ? '#f00' : '#0f0' }}>
                          X:{stair.rotationDiffX.toFixed(4)} Y:{stair.rotationDiffY.toFixed(4)} Z:{stair.rotationDiffZ.toFixed(4)}
                        </span>
                        
                        {/* Validation Summary */}
                        <span style={{ color: '#0ff' }}>Position Delta:</span>
                        <span style={{ color: stair.positionDelta < 0.01 ? '#0f0' : '#f00' }}>{stair.positionDelta.toFixed(4)}</span>
                        
                        <span style={{ color: '#0ff' }}>Rotation Delta:</span>
                        <span style={{ color: stair.rotationDelta < 0.001 ? '#0f0' : '#f00' }}>{stair.rotationDelta.toFixed(4)}</span>
                        
                        <span style={{ color: '#0ff' }}>Height Delta:</span>
                        <span style={{ color: stair.heightDelta < 0.01 ? '#0f0' : '#f00' }}>{stair.heightDelta.toFixed(4)}</span>
                      </div>
                      
                      {!stair.validationPass && stair.misalignmentWarning && (
                        <div style={{
                          marginTop: '4px',
                          padding: '4px',
                          backgroundColor: 'rgba(255, 0, 0, 0.3)',
                          borderLeft: '2px solid #f00',
                          fontSize: '9px',
                          color: '#f00',
                          fontWeight: 'bold',
                        }}>
                          {stair.misalignmentWarning}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Player Stair Analysis */}
              {data.playerStairAnalysis && (
                <div style={{ 
                  border: data.playerStairAnalysis.isInStairwell ? '1px solid #0f0' : '1px solid #333', 
                  backgroundColor: data.playerStairAnalysis.isInStairwell ? 'rgba(0, 255, 0, 0.1)' : 'transparent', 
                  padding: '8px', 
                  marginBottom: '10px',
                  borderRadius: '4px'
                }}>
                  <strong style={{ color: data.playerStairAnalysis.isInStairwell ? '#0f0' : '#888', display: 'block', marginBottom: '6px' }}>
                    PLAYER STAIR ANALYSIS {data.playerStairAnalysis.isInStairwell ? '✓ IN STAIRWELL' : '(not in stairwell)'}
                  </strong>
                  
                  <div style={{ fontSize: '10px' }}>
                    <div style={rowStyle}>
                      <span>Player Position:</span>
                      <span>[{data.playerStairAnalysis.playerPosition.x.toFixed(2)}, {data.playerStairAnalysis.playerPosition.y.toFixed(2)}, {data.playerStairAnalysis.playerPosition.z.toFixed(2)}]</span>
                    </div>
                    <div style={rowStyle}>
                      <span>Current Room:</span>
                      <span>{data.playerStairAnalysis.currentRoomId || 'None'}</span>
                    </div>
                    
                    {data.playerStairAnalysis.isInStairwell && (
                      <>
                        <div style={rowStyle}>
                          <span>Expected Ramp Height:</span>
                          <span>{data.playerStairAnalysis.expectedRampHeight?.toFixed(2) ?? 'N/A'}</span>
                        </div>
                        <div style={rowStyle}>
                          <span>Actual Player Height (Y):</span>
                          <span>{data.playerStairAnalysis.actualPlayerHeight.toFixed(2)}</span>
                        </div>
                        <div style={{
                          ...rowStyle,
                          marginTop: '4px',
                          paddingTop: '4px',
                          borderTop: '1px dashed #555',
                        }}>
                          <span>Height Difference:</span>
                          <span style={{ 
                            color: Math.abs(data.playerStairAnalysis.heightDifference) > 0.5 ? '#f00' : '#0f0',
                            fontWeight: 'bold',
                          }}>
                            {data.playerStairAnalysis.heightDifference.toFixed(2)} 
                            {Math.abs(data.playerStairAnalysis.heightDifference) > 0.5 ? ' ⚠️ FLOATING/FALLING' : ' ✓ ALIGNED'}
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Copy Report Button */}
              <button
                onClick={() => {
                  const report = {
                    timestamp: new Date().toISOString(),
                    stairs: data.stairDebugData?.map(s => ({
                      id: s.id,
                      name: s.name,
                      direction: s.direction,
                      dimensions: `${s.width}x${s.depth} (climb: ${s.climbHeight})`,
                      visualPos: s.visualPosition,
                      collisionPos: s.collisionPosition,
                      offset: { x: s.offsetX, y: s.offsetY, z: s.offsetZ },
                      rotationDiff: { x: s.rotationDiffX, y: s.rotationDiffY, z: s.rotationDiffZ },
                      isMisaligned: s.isMisaligned,
                      warning: s.misalignmentWarning,
                    })),
                    playerAnalysis: data.playerStairAnalysis,
                    toggles: {
                      visualEnabled: stairVisualEnabled,
                      collisionEnabled: stairCollisionEnabled,
                    },
                  };
                  navigator.clipboard.writeText(JSON.stringify(report, null, 2));
                  alert('Stair debug report copied to clipboard!');
                }}
                style={{
                  ...buttonStyle,
                  marginTop: '10px',
                  backgroundColor: '#004400',
                  borderColor: '#0f0',
                }}
              >
                📋 COPY STAIR DEBUG REPORT
              </button>
            </div>
          )}
        </div>

        {/* DOORS Tab */}
        {activeTab === 'doors' && data.doorAuditReport && (
          <div>
            {/* Summary Stats */}
            <div style={{ 
              border: '1px solid #ff0', 
              backgroundColor: 'rgba(255, 255, 0, 0.1)', 
              padding: '8px', 
              marginBottom: '10px',
              borderRadius: '4px'
            }}>
              <strong style={{ color: '#ff0', display: 'block', marginBottom: '6px' }}>
                DOOR CONNECTIVITY SUMMARY
              </strong>
              <div style={{ fontSize: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                <span>Total Rooms:</span>
                <span>{data.doorAuditReport.totalRooms}</span>
                
                <span>Rooms With Doors:</span>
                <span style={{ color: '#0f0' }}>{data.doorAuditReport.roomsWithDoors}</span>
                
                <span>Rooms Missing Doors:</span>
                <span style={{ color: data.doorAuditReport.roomsMissingDoors > 0 ? '#f00' : '#0f0' }}>
                  {data.doorAuditReport.roomsMissingDoors}
                </span>
                
                <span>Reachable Without Purchase:</span>
                <span style={{ color: data.doorAuditReport.reachableWithoutPurchase.length > 0 ? '#ff0' : '#0f0' }}>
                  {data.doorAuditReport.reachableWithoutPurchase.length}
                </span>
              </div>
            </div>

            {/* Reachable Without Purchase Warning */}
            {data.doorAuditReport.reachableWithoutPurchase.length > 0 && (
              <div style={{ 
                border: '1px solid #f00', 
                backgroundColor: 'rgba(255, 0, 0, 0.15)', 
                padding: '8px', 
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <strong style={{ color: '#f00', display: 'block', marginBottom: '4px' }}>
                  ⚠️ ROOMS REACHABLE WITHOUT PURCHASE
                </strong>
                <div style={{ fontSize: '9px', color: '#f88' }}>
                  These rooms can be reached from starter without buying any doors:
                </div>
                <ul style={{ fontSize: '9px', color: '#faa', margin: '4px 0', paddingLeft: '16px' }}>
                  {data.doorAuditReport.reachableWithoutPurchase.map(room => (
                    <li key={room}>{room}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Progression Breaks */}
            {data.doorAuditReport.progressionBreaks.length > 0 && (
              <div style={{ 
                border: '1px solid #ff0', 
                backgroundColor: 'rgba(255, 255, 0, 0.1)', 
                padding: '8px', 
                marginBottom: '10px',
                borderRadius: '4px'
              }}>
                <strong style={{ color: '#ff0', display: 'block', marginBottom: '4px' }}>
                  🔗 PROGRESSION BREAKS DETECTED
                </strong>
                <div style={{ fontSize: '9px', color: '#ff8' }}>
                  Rooms that should be reachable but have no free path:
                </div>
                <ul style={{ fontSize: '9px', color: '#ffa', margin: '4px 0', paddingLeft: '16px' }}>
                  {data.doorAuditReport.progressionBreaks.map(room => (
                    <li key={room}>{room}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Room Connections */}
            <div style={{ 
              border: '1px solid #0ff', 
              backgroundColor: 'rgba(0, 255, 255, 0.1)', 
              padding: '8px', 
              marginBottom: '10px',
              borderRadius: '4px',
              maxHeight: '400px',
              overflowY: 'auto'
            }}>
              <strong style={{ color: '#0ff', display: 'block', marginBottom: '6px' }}>
                ROOM CONNECTIONS GRAPH
              </strong>
              {data.doorAuditReport.roomData.map(room => (
                <div 
                  key={room.id}
                  style={{
                    border: '1px solid #333',
                    backgroundColor: room.reachableWithoutPurchase ? 'rgba(0, 255, 0, 0.1)' : 'transparent',
                    borderRadius: '3px',
                    padding: '6px',
                    marginBottom: '6px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <strong style={{ color: room.reachableWithoutPurchase ? '#0f0' : '#888' }}>
                      {room.name}
                    </strong>
                    {room.isStaircase && <span style={{ fontSize: '8px', color: '#0af' }}>🪜 STAIR</span>}
                    {room.isHallway && <span style={{ fontSize: '8px', color: '#a0f' }}> corridor</span>}
                  </div>
                  
                  {room.doors.filter(d => d.gapWidth > 0).length > 0 ? (
                    <div style={{ fontSize: '9px' }}>
                      {room.doors.filter(d => d.gapWidth > 0).map((door, idx) => (
                        <div 
                          key={idx}
                          style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between',
                            paddingLeft: '8px',
                            borderLeft: door.isPurchasable ? '2px solid #ff0' : '2px solid #0f0',
                            marginBottom: '2px',
                          }}
                        >
                          <span>
                            {door.side} → {door.toRoomName || 'VOID'}
                          </span>
                          <span style={{ color: door.isPurchasable ? '#ff0' : '#0f0' }}>
                            {door.connectionType} {door.isPurchasable ? `$${door.cost}` : 'FREE'}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ fontSize: '9px', color: '#666', fontStyle: 'italic' }}>
                      No door connections
                    </div>
                  )}
                  
                  {room.missingDoors.length > 0 && (
                    <div style={{ 
                      marginTop: '4px', 
                      padding: '4px', 
                      backgroundColor: 'rgba(255, 100, 0, 0.2)',
                      borderLeft: '2px solid #f80',
                      fontSize: '9px'
                    }}>
                      <strong style={{ color: '#f80' }}>Missing Doors:</strong>
                      {room.missingDoors.map((m, idx) => (
                        <div key={idx} style={{ marginLeft: '8px', color: '#fa8' }}>
                          {m.side}: {m.recommendedType} (${m.recommendedPrice}) - {m.reason}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Copy Report Button */}
            <button
              onClick={() => {
                const report = JSON.stringify({
                  summary: {
                    totalRooms: data.doorAuditReport!.totalRooms,
                    roomsWithDoors: data.doorAuditReport!.roomsWithDoors,
                    roomsMissingDoors: data.doorAuditReport!.roomsMissingDoors,
                    reachableWithoutPurchase: data.doorAuditReport!.reachableWithoutPurchase,
                    progressionBreaks: data.doorAuditReport!.progressionBreaks,
                  },
                  connections: data.doorAuditReport!.allConnections,
                  recommendations: data.doorAuditReport!.recommendations,
                }, null, 2);
                navigator.clipboard.writeText(report);
                alert('Door audit report copied to clipboard!');
              }}
              style={{
                ...buttonStyle,
                marginTop: '10px',
                backgroundColor: '#004400',
                borderColor: '#0f0',
              }}
            >
              📋 COPY DOOR AUDIT REPORT
            </button>
          </div>
        )}

        {activeTab === 'doors' && !data.doorAuditReport && (
          <div style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
            Run door audit from console with: window.runDoorAudit()
          </div>
        )}
      </div>
    </>
  );
};

export default DebugOverlay;
