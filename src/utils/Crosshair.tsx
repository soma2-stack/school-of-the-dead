/**
 * School of the Dead - Simple Crosshair Component
 * Minimal center-screen crosshair for FPS
 */

import React from 'react';

export const Crosshair: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {/* Simple + crosshair */}
      <div
        style={{
          position: 'relative',
          width: '20px',
          height: '20px',
        }}
      >
        {/* Horizontal line */}
        <div
          style={{
            position: 'absolute',
            top: '9px',
            left: '0',
            width: '20px',
            height: '2px',
            backgroundColor: 'white',
          }}
        />
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: '9px',
            top: '0',
            width: '2px',
            height: '20px',
            backgroundColor: 'white',
          }}
        />
      </div>
    </div>
  );
};

export default Crosshair;
