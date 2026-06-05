import React from 'react';
import { DoorAuditReport } from '../../utils/DoorConnectivityAudit';

interface Props {
  doorAuditReport: DoorAuditReport;
}

const DoorsTab: React.FC<Props> = ({ doorAuditReport }) => {
  const [clipboardFeedback, setClipboardFeedback] = React.useState<string | null>(null);

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

  const handleCopyReport = () => {
    const report = JSON.stringify({
      summary: {
        totalRooms: doorAuditReport.totalRooms,
        roomsWithDoors: doorAuditReport.roomsWithDoors,
        roomsMissingDoors: doorAuditReport.roomsMissingDoors,
        reachableWithoutPurchase: doorAuditReport.reachableWithoutPurchase,
        progressionBreaks: doorAuditReport.progressionBreaks,
      },
      connections: doorAuditReport.allConnections,
      recommendations: doorAuditReport.recommendations,
    }, null, 2);
    navigator.clipboard.writeText(report);
    setClipboardFeedback('Copied!');
    setTimeout(() => setClipboardFeedback(null), 2000);
  };

  return (
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
          <span>{doorAuditReport.totalRooms}</span>
          
          <span>Rooms With Doors:</span>
          <span style={{ color: '#0f0' }}>{doorAuditReport.roomsWithDoors}</span>
          
          <span>Rooms Missing Doors:</span>
          <span style={{ color: doorAuditReport.roomsMissingDoors > 0 ? '#f00' : '#0f0' }}>
            {doorAuditReport.roomsMissingDoors}
          </span>
          
          <span>Reachable Without Purchase:</span>
          <span style={{ color: doorAuditReport.reachableWithoutPurchase.length > 0 ? '#ff0' : '#0f0' }}>
            {doorAuditReport.reachableWithoutPurchase.length}
          </span>
        </div>
      </div>

      {/* Reachable Without Purchase Warning */}
      {doorAuditReport.reachableWithoutPurchase.length > 0 && (
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
            {doorAuditReport.reachableWithoutPurchase.map(room => (
              <li key={room}>{room}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Progression Breaks */}
      {doorAuditReport.progressionBreaks.length > 0 && (
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
            {doorAuditReport.progressionBreaks.map(room => (
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
        {doorAuditReport.roomData.map(room => (
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
                      {door.isPurchasable ? `$${door.cost}` : 'FREE'}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ fontSize: '9px', color: '#666', fontStyle: 'italic' }}>
                No valid door gaps detected
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Recommendations */}
      {doorAuditReport.recommendations.length > 0 && (
        <div style={{ 
          border: '1px solid #f0f', 
          backgroundColor: 'rgba(255, 0, 255, 0.1)', 
          padding: '8px', 
          marginBottom: '10px',
          borderRadius: '4px'
        }}>
          <strong style={{ color: '#f0f', display: 'block', marginBottom: '6px' }}>
            💡 RECOMMENDATIONS
          </strong>
          {doorAuditReport.recommendations.map((rec, idx) => (
            <div 
              key={idx}
              style={{
                border: '1px solid #333',
                borderRadius: '3px',
                padding: '6px',
                marginBottom: '6px',
                backgroundColor: 'transparent',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <strong style={{ color: '#f0f' }}>
                  {rec.recommendedType}
                </strong>
                <span style={{ fontSize: '9px', color: '#888' }}>Price: ${rec.recommendedPrice}</span>
              </div>
              <div style={{ fontSize: '9px', color: '#d8d' }}>{rec.reason}</div>
              <div style={{ fontSize: '9px', color: '#afa', marginTop: '4px' }}>
                → Location: [${rec.location[0].toFixed(1)}, ${rec.location[1].toFixed(1)}, ${rec.location[2].toFixed(1)}]
              </div>
            </div>
          ))}
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
        📋 COPY DOOR AUDIT REPORT {clipboardFeedback && `✓ ${clipboardFeedback}`}
      </button>
    </div>
  );
};

export default DoorsTab;
