import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

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
  connectivityIssues: number;
  floorIntegrityIssues: number;
}

interface Props {
  data: DebugData;
  onToggleNoclip: () => void;
  onRunConnectivity: () => void;
  onRunFloorAudit: () => void;
  onTeleportToSpawn: () => void;
}

const DebugOverlay: React.FC<Props> = ({
  data,
  onToggleNoclip,
  onRunConnectivity,
  onRunFloorAudit,
  onTeleportToSpawn,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'audit' | 'player' | 'rounds' | 'perf'>('audit');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F1') {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    minWidth: '250px',
    maxWidth: '350px',
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

  return (
    <>
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
              <div style={rowStyle}>
                <span>Connectivity Issues:</span>
                <span style={{ color: data.connectivityIssues > 0 ? '#f00' : '#0f0' }}>
                  {data.connectivityIssues}
                </span>
              </div>
              <div style={rowStyle}>
                <span>Floor Integrity:</span>
                <span style={{ color: data.floorIntegrityIssues > 0 ? '#f00' : '#0f0' }}>
                  {data.floorIntegrityIssues}
                </span>
              </div>
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
