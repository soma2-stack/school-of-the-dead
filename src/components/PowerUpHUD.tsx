import React, { useEffect, useState } from 'react';
import { getPowerUpManager } from '../utils/powerups';

interface ActivePowerUp {
  type: string;
  label: string;
  remainingSeconds: number;
}

export const PowerUpHUD: React.FC = () => {
  const [activePowerUps, setActivePowerUps] = useState<ActivePowerUp[]>([]);

  useEffect(() => {
    const powerUpManager = getPowerUpManager();

    const updatePowerUps = () => {
      const powerUps = powerUpManager.getActivePowerUps();
      setActivePowerUps(powerUps);
    };

    // Initial update
    updatePowerUps();

    // Update every second
    const intervalId = setInterval(updatePowerUps, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (activePowerUps.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[999997]"
      style={{ pointerEvents: 'none' }}
    >
      <div className="flex flex-col items-center gap-2">
        {activePowerUps.map((powerUp) => (
          <div
            key={powerUp.type}
            className="bg-black/80 px-4 py-2 rounded-lg border-2 font-mono font-bold text-xl"
            style={{
              color: powerUp.type === 'insta_kill' ? '#ff4444' : '#ffd700',
              borderColor: powerUp.type === 'insta_kill' ? '#ff4444' : '#ffd700',
            }}
          >
            {powerUp.label}: {powerUp.remainingSeconds}s
          </div>
        ))}
      </div>
    </div>
  );
};
