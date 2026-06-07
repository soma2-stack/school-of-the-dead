import { useRef, useEffect } from 'react';

/**
 * Hook that returns a ref that always holds the latest value.
 * Useful for avoiding stale closures in callbacks.
 */
export function useLatestRef<T>(value: T) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
