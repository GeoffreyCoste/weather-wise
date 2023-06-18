import { useEffect, useCallback } from 'react'

enum Key {Name = 'Escape', EventType = 'keyup' }

export const useEscapeKey = (cb: () => void) => {
  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === Key.Name) {
        cb();
    }
  }, [cb]);

  useEffect(() => {
    document.addEventListener(Key.EventType, handleEscKey);

    return () => {
        document.removeEventListener(Key.EventType, handleEscKey)
    }
  }, [handleEscKey]);
}
