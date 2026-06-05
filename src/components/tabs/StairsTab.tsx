import React from 'react';
import { StairDebugData, PlayerStairAnalysis } from '../DebugOverlay';

interface Props {
  stairDebugData?: StairDebugData[];
  playerStairAnalysis?: PlayerStairAnalysis;
  stairVisualEnabled: boolean;
  stairCollisionEnabled: boolean;
  onStairVisualToggle: (enabled: boolean) => void;
  onStairCollisionToggle: (enabled: boolean) => void;
}

const StairsTab: React.FC<Props> = ({
  stairDebugData,
  playerStairAnalysis,
  stairVisualEnabled,
  stairCollisionEnabled,
  onStairVisualToggle,
  onStairCollisionToggle,
}) => {
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

  const [clipboardFeedback, setClipboardFeedback] = React.useState<string | null>(null);

  const handleCopyReport = () => {
    if (!stairDebugData) return;
    const report = {
      timestamp: new Date().toISOString(),
      stairs: stairDebugData.map(s => ({
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
      playerAnalysis: playerStairAnalysis,
      toggles: {
        visualEnabled: stairVisualEnabled,
        collisionEnabled: stairCollisionEnabled,
      },
    };
    navigator.clipboard.writeText(JSON.stringify(report, null, 2));
    setClipboardFeedback('Copied!');
    setTimeout(() => setClipboardFeedback(null), 2000);
  };

  return (
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
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={() => onStairVisualToggle(!stairVisualEnabled)}
            style={{
              ...buttonStyle,
              marginTop: 0,
              backgroundColor: stairVisualEnabled ? '#00ffff' : '#003333',
              color: stairVisualEnabled ? '#000' : '#0ff',
              flex: '0 1 auto',
              fontSize: '9px',
              padding: '4px 6px',
            }}
          >
            VISUAL MESH (BLUE): {stairVisualEnabled ? 'ON' : 'OFF'}
          </button>
          <button
            onClick={() => onStairCollisionToggle(!stairCollisionEnabled)}
            style={{
              ...buttonStyle,
              marginTop: 0,
              backgroundColor: stairCollisionEnabled ? '#ff0000' : '#330000',
              color: stairCollisionEnabled ? '#000' : '#f00',
              flex: '0 1 auto',
              fontSize: '9px',
              padding: '4px 6px',
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
      {stairDebugData && stairDebugData.length > 0 && (
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
          {stairDebugData.map((stair, idx) => (
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
      {playerStairAnalysis && (
        <div style={{ 
          border: playerStairAnalysis.isInStairwell ? '1px solid #0f0' : '1px solid #333', 
          backgroundColor: playerStairAnalysis.isInStairwell ? 'rgba(0, 255, 0, 0.1)' : 'transparent', 
          padding: '8px', 
          marginBottom: '10px',
          borderRadius: '4px'
        }}>
          <strong style={{ color: playerStairAnalysis.isInStairwell ? '#0f0' : '#888', display: 'block', marginBottom: '6px' }}>
            PLAYER STAIR ANALYSIS {playerStairAnalysis.isInStairwell ? '✓ IN STAIRWELL' : '(not in stairwell)'}
          </strong>
          
          <div style={{ fontSize: '10px' }}>
            <div style={rowStyle}>
              <span>Player Position:</span>
              <span>[{playerStairAnalysis.playerPosition.x.toFixed(2)}, {playerStairAnalysis.playerPosition.y.toFixed(2)}, {playerStairAnalysis.playerPosition.z.toFixed(2)}]</span>
            </div>
            <div style={rowStyle}>
              <span>Current Room:</span>
              <span>{playerStairAnalysis.currentRoomId || 'None'}</span>
            </div>
            
            {playerStairAnalysis.isInStairwell && (
              <>
                <div style={rowStyle}>
                  <span>Expected Ramp Height:</span>
                  <span>{playerStairAnalysis.expectedRampHeight?.toFixed(2) ?? 'N/A'}</span>
                </div>
                <div style={rowStyle}>
                  <span>Actual Player Height (Y):</span>
                  <span>{playerStairAnalysis.actualPlayerHeight.toFixed(2)}</span>
                </div>
                <div style={{
                  ...rowStyle,
                  marginTop: '4px',
                  paddingTop: '4px',
                  borderTop: '1px dashed #555',
                }}>
                  <span>Height Difference:</span>
                  <span style={{ 
                    color: Math.abs(playerStairAnalysis.heightDifference) > 0.5 ? '#f00' : '#0f0',
                    fontWeight: 'bold',
                  }}>
                    {playerStairAnalysis.heightDifference.toFixed(2)} 
                    {Math.abs(playerStairAnalysis.heightDifference) > 0.5 ? ' ⚠️ FLOATING/FALLING' : ' ✓ ALIGNED'}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Copy Report Button */}
      <button
        onClick={handleCopyReport}
        style={{
          ...buttonStyle,
          marginTop: '10px',
          backgroundColor: clipboardFeedback ? '#006600' : '#004400',
          borderColor: '#0f0',
        }}
      >
        📋 COPY STAIR DEBUG REPORT {clipboardFeedback && `✓ ${clipboardFeedback}`}
      </button>
    </div>
  );
};

export default StairsTab;
