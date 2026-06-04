import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { ConnectivityIssue, FloorIssue } from '../utils/MapConnectivityAudit';

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
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'audit' | 'player' | 'rounds' | 'perf'>('audit');
  const [expandedIssues, setExpandedIssues] = useState<Set<string>>(new Set());
  const [filterType, setFilterType] = useState<'all' | 'connectivity' | 'floor' | 'open'>('all');

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
            <div style={tabStyle(activeTab === 'player')} onClick={() => setActiveTab('player')}>
              PLAYER
            </div>
            <div style={tabStyle(activeTab === 'rounds')} onClick={() => setActiveTab('rounds')}>
              ROUNDS
            </div>
            <div style={tabStyle(activeTab === 'perf')} onClick={() => setActiveTab('perf')}>
              PERF
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
        </div>
      </div>
    </>
  );
};

export default DebugOverlay;
