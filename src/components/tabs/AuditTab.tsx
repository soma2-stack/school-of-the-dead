import React from 'react';
import { ConnectivityIssue, FloorIssue } from '../../utils/MapConnectivityAudit';

interface Props {
  connectivityIssues: ConnectivityIssue[];
  floorIntegrityIssues: FloorIssue[];
  onRunConnectivity: () => void;
  onRunFloorAudit: () => void;
  onTeleportToSpawn: () => void;
  onTeleportToIssue?: (issue: ConnectivityIssue | FloorIssue) => void;
}

const AuditTab: React.FC<Props> = ({
  connectivityIssues,
  floorIntegrityIssues,
  onRunConnectivity,
  onRunFloorAudit,
  onTeleportToSpawn,
  onTeleportToIssue,
}) => {
  const [expandedIssues, setExpandedIssues] = React.useState<Set<string>>(new Set());
  const [filterType, setFilterType] = React.useState<'all' | 'connectivity' | 'floor' | 'open'>('all');

  const allIssues = [
    ...connectivityIssues.map(i => ({ ...i, source: 'connectivity' as const })),
    ...floorIntegrityIssues.map(i => ({ ...i, source: 'floor' as const }))
  ];

  const filteredIssues = allIssues.filter(issue => {
    if (filterType === 'connectivity') return issue.source === 'connectivity';
    if (filterType === 'floor') return issue.source === 'floor';
    if (filterType === 'open') return true;
    return true;
  });

  const toggleIssueExpand = (issueId: string) => {
    const newSet = new Set(expandedIssues);
    if (newSet.has(issueId)) {
      newSet.delete(issueId);
    } else {
      newSet.add(issueId);
    }
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

  return (
    <div>
      <div style={rowStyle}>
        <span>Connectivity Issues:</span>
        <span style={{ color: connectivityIssues.length > 0 ? '#f00' : '#0f0' }}>
          {connectivityIssues.length}
        </span>
      </div>
      <div style={rowStyle}>
        <span>Floor Integrity:</span>
        <span style={{ color: floorIntegrityIssues.length > 0 ? '#f00' : '#0f0' }}>
          {floorIntegrityIssues.length}
        </span>
      </div>
      
      <div style={{ marginTop: '10px', borderTop: '1px dashed #333', paddingTop: '5px' }}>
        <div style={{ display: 'flex', gap: '4px', marginBottom: '8px', flexWrap: 'wrap' }}>
          {(['all', 'connectivity', 'floor', 'open'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setFilterType(filter)}
              style={{
                ...buttonStyle,
                marginTop: 0,
                backgroundColor: filterType === filter ? '#0f0' : '#003300',
                color: filterType === filter ? '#000' : '#0f0',
                flex: '0 1 auto',
                fontSize: '9px',
                padding: '3px 6px',
              }}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>
        
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
                
                {isExpanded && (
                  <div style={{ 
                    padding: '6px', 
                    borderTop: '1px dashed #333',
                    fontSize: '10px',
                  }}>
                    <div><strong>Position:</strong> ({issue.location[0].toFixed(2)}, {issue.location[1].toFixed(2)}, {issue.location[2].toFixed(2)})</div>
                    <div><strong>Severity:</strong> <span style={{ color: getSeverityColor(issue.severity) }}>{issue.severity.toUpperCase()}</span></div>
                    <div><strong>Description:</strong> {'description' in issue ? issue.description : issue.cause}</div>
                    <div><strong>Suggested Fix:</strong> {getSuggestedFix(issue)}</div>
                    {onTeleportToIssue && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onTeleportToIssue(issue);
                        }}
                        style={{
                          ...buttonStyle,
                          marginTop: '6px',
                          width: 'auto',
                          padding: '3px 8px',
                        }}
                      >
                        TELEPORT TO ISSUE
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: '10px', borderTop: '1px dashed #333', paddingTop: '5px' }}>
        <button onClick={onRunConnectivity} style={buttonStyle}>
          RUN CONNECTIVITY AUDIT
        </button>
        <button onClick={onRunFloorAudit} style={{ ...buttonStyle, marginTop: '5px' }}>
          RUN FLOOR INTEGRITY AUDIT
        </button>
        <button onClick={onTeleportToSpawn} style={{ ...buttonStyle, marginTop: '5px' }}>
          TELEPORT TO SPAWN
        </button>
      </div>
    </div>
  );
};

export default AuditTab;
