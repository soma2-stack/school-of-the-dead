import { useRef, useCallback, MutableRefObject } from 'react';
import * as THREE from 'three';

/**
 * Hook that manages debug lighting functionality.
 * Provides refs and handlers for toggling and adjusting ambient light brightness.
 */
export interface UseDebugLightingResult {
  ambientLightRef: MutableRefObject<THREE.AmbientLight | null>;
  originalAmbientIntensityRef: MutableRefObject<number>;
  toggleDebugLighting: () => void;
}

export interface UseDebugLightingParams {
  setDebugLightingEnabled: (enabled: boolean) => void;
  debugLightingEnabledRef: MutableRefObject<boolean>;
  debugLightingBrightnessRef: MutableRefObject<number>;
}

export function useDebugLighting({
  setDebugLightingEnabled,
  debugLightingEnabledRef,
  debugLightingBrightnessRef,
}: UseDebugLightingParams): UseDebugLightingResult {
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const originalAmbientIntensityRef = useRef<number>(1.0);

  const toggleDebugLighting = useCallback(() => {
    const enabled = !debugLightingEnabledRef.current;
    setDebugLightingEnabled(enabled);
    if (ambientLightRef.current) {
      if (enabled) {
        originalAmbientIntensityRef.current = ambientLightRef.current.intensity;
        ambientLightRef.current.intensity = debugLightingBrightnessRef.current;
        console.log('[DEBUG LIGHTING] ON - Brightness:', debugLightingBrightnessRef.current);
      } else {
        ambientLightRef.current.intensity = originalAmbientIntensityRef.current;
        console.log('[DEBUG LIGHTING] OFF');
      }
    }
  }, [debugLightingEnabledRef, debugLightingBrightnessRef, setDebugLightingEnabled]);

  return {
    ambientLightRef,
    originalAmbientIntensityRef,
    toggleDebugLighting,
  };
}
