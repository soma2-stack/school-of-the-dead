import React from 'react';

interface RoundBannerProps {
  message: string;
  countdown?: number;
  color?: string;
}

export const RoundBanner: React.FC<RoundBannerProps> = ({ message, countdown, color = '#ffffff' }) => {
  return (
    <div
      className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999998]"
      style={{ pointerEvents: 'none', textAlign: 'center' }}
    >
      <div
        className="bg-black/80 px-8 py-4 rounded-lg border-2 font-mono font-bold text-3xl"
        style={{
          color: color,
          borderColor: color,
          minWidth: '300px',
        }}
      >
        {message}
        {countdown !== undefined && (
          <div className="text-2xl mt-2">{countdown}</div>
        )}
      </div>
    </div>
  );
};
