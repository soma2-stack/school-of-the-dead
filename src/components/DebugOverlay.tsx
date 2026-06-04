import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { ConnectivityIssue, FloorIssue } from '../utils/MapConnectivityAudit';
import { DoorAuditReport, RoomDoorData, MissingDoorRecommendation } from '../utils/DoorConnectivityAudit';

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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'audit' | 'player' | 'rounds' | 'perf' | 'stairs'>('audit');
  const [expandedIssues, setExpandedIssues] = useState<Set<string>>(new Set());
  const [filterType, setFilterType] = useState<'all' | 'connectivity' | 'floor' | 'open'>('all');
  const [stairVisualEnabled, setStairVisualEnabled] = useState(false);
  const [stairCollisionEnabled, setStairCollisionEnabled] = useState(false);

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
    zIndex: 1000,
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
    marginBottom: '10px',
    borderBottom: '1px solid #333',
  };

  const tabStyle = (isActive: boolean): React.CSSProperties => ({
    flex: 1,
    textAlign: 'center',
    padding: '4px 2px',
    cursor: 'pointer',
    backgroundColor: isActive ? '#0f0' : 'transparent',
    color: isActive ? '#000' : '#0f0',
    fontWeight: 'bold',
    fontSize: '10px',
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
          <div style={tabsStyle}>
            <div style={tabStyle(activeTab === 'audit')} onClick={() => setActiveTab('audit')}>
              AUDIT
            </div>
            <div style={tabStyle(activeTab === 'doors')} onClick={() => setActiveTab('doors')}>
              DOORS
            </div>
            <div style={tabStyle(activeTab === 'player')} onClick={() => setActiveTab('player')}>
              PLAYER
            </div>
            <div style={tabStyle(activeTab === 'rounds')} onClick={() => setActiveTab('rounds')}>
              ROUNDS
            </div>
            <div style={tabStyle(activeTab === 'perf')} onClick={() => setActiveTab('perf')}>
              PERF
            </div>
            <div style={tabStyle(activeTab === 'stairs')} onClick={() => setActiveTab('stairs')}>
              STAIRS
            </div>
          </div>
        )}

        <div style={sectionStyle}>
          {activeTab === 'audit' && (
            <div>
              {/* Issue Counts Summary */}
              <div style={rowStyle}>
                <span>Connectivity Issues:</span>
                <span style={{ color: data.connectivityIssues.length > 0 ? '#f00' : '#0f0' }}>
                  {data.connectivityIssues.length}
                </span>
              </div>
              <div style={rowStyle}>
                <span>Floor Integrity:</span>
                <span style={{ color: data.floorIntegrityIssues.length > 0 ? '#f00' : '#0f0' }}>
                  {data.floorIntegrityIssues.length}
                </span>
              </div>
              
              {/* Filter Buttons */}
              <div style={{ marginTop: '10px', borderTop: '1px dashed #333', paddingTop: '5px' }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                  {(['all', 'connectivity', 'floor', 'open'] as const).map(filter => (
                    <button
                      key={filter}
                      onClick={() => setFilterType(filter)}
                      style={{
                        ...buttonStyle,
                        marginTop: 0,
                        backgroundColor: filterType === filter ? '#0f0' : '#003300',
                        color: filterType === filter ? '#000' : '#0f0',
                        flex: 1,
                        fontSize: '9px',
                        padding: '3px 2px',
                      }}
                    >
                      {filter.toUpperCase()}
                    </button>
                  ))}
                </div>
                
                {/* Expand/Collapse All */}
                <div style={{ ...buttonStyle, marginTop: '2px' }} onClick={() => {
                  if (expandedIssues.size === filteredIssues.length) {
                    setExpandedIssues(new Set());
                  } else {
                    setExpandedIssues(new Set(filteredIssues.map(i => i.id)));
                  }
                }}>
                  {expandedIssues.size === filteredIssues.length ? 'Collapse All' : 'Expand All'}
                </div>
              </div>

              {/* Issue List */}
              {filteredIssues.length > 0 && (
                <div style={{ marginTop: '10px', maxHeight: '300px', overflowY: 'auto' }}>
                  {filteredIssues.map((issue, idx) => {
                    const isExpanded = expandedIssues.has(issue.id);
                    return (
                      <div
                        key={issue.id}
                        style={{
                          border: '1px solid #333',
                          borderRadius: '3px',
                          marginBottom: '6px',
                          backgroundColor: isExpanded ? 'rgba(0, 255, 0, 0.1)' : 'transparent',
                        }}
                      >
                        {/* Issue Header */}
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '4px 6px',
                            cursor: 'pointer',
                          }}
                          onClick={() => toggleIssueExpand(issue.id)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '10px', color: '#888' }}>#{idx + 1}</span>
                            <span style={{ 
                              fontSize: '10px', 
                              fontWeight: 'bold',
                              color: getSeverityColor(issue.severity),
                            }}>
                              [{issue.type.toUpperCase()}]
                            </span>
                            <span style={{ fontSize: '10px', color: '#aaa' }}>{issue.roomName}</span>
                          </div>
                          <span style={{ fontSize: '10px' }}>{isExpanded ? '▼' : '▶'}</span>
                        </div>
                        
                        {/* Expanded Details */}
                        {isExpanded && (
                          <div style={{ 
                            padding: '6px', 
                            borderTop: '1px solid #333',
                            fontSize: '10px',
                          }}>
                            <div style={rowStyle}>
                              <span>Position:</span>
                              <span>[{issue.location[0].toFixed(1)}, {issue.location[1].toFixed(1)}, {issue.location[2].toFixed(1)}]</span>
                            </div>
                            <div style={rowStyle}>
                              <span>Severity:</span>
                              <span style={{ color: getSeverityColor(issue.severity) }}>{issue.severity.toUpperCase()}</span>
                            </div>
                            <div style={{ marginTop: '4px' }}>
                              <span style={{ color: '#888' }}>Reason: </span>
                              <span>{'description' in issue ? issue.description : issue.cause}</span>
                            </div>
                            {'details' in issue && issue.details && (
                              <div style={{ marginTop: '2px' }}>
                                <span style={{ color: '#888' }}>Details: </span>
                                <span>{issue.details}</span>
                              </div>
                            )}
                            <div style={{ 
                              marginTop: '6px', 
                              padding: '4px', 
                              backgroundColor: 'rgba(255, 255, 0, 0.1)',
                              borderLeft: '2px solid #ff0',
                            }}>
                              <span style={{ color: '#ff0' }}>Suggested Fix: </span>
                              <span>{getSuggestedFix(issue)}</span>
                            </div>
                            {onTeleportToIssue && (
                              <button
                                style={{ ...buttonStyle, marginTop: '6px' }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onTeleportToIssue(issue);
                                }}
                              >
                                Teleport To Issue
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              
              {/* Audit Action Buttons */}
              <div style={{ marginTop: '10px', borderTop: '1px dashed #333', paddingTop: '5px' }}>
                <div style={buttonStyle} onClick={onRunConnectivity}>
                  Run Connectivity Audit
                </div>
                <div style={{ ...buttonStyle, marginTop: '2px' }} onClick={onRunFloorAudit}>
                  Run Floor Integrity
                </div>
                <div style={{ ...buttonStyle, marginTop: '2px' }} onClick={onTeleportToSpawn}>
                  Teleport to Spawn
                </div>
              </div>
            </div>
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
            </div>
          )}

          {activeTab === 'rounds' && (
            <div>
              <div style={rowStyle}>
                <span>Current Round:</span>
                <span>{data.round}</span>
              </div>
              <div style={rowStyle}>
                <span>Zombies Alive:</span>
                <span>{data.zombiesAlive}</span>
              </div>
              <div style={rowStyle}>
                <span>Spawn Status:</span>
                <span>{data.spawnStatus}</span>
              </div>
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
