import { useState } from 'react';

function usePersistentState<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const storedState = localStorage.getItem(key);

  const [state, setState] = useState<T>(
    storedState ? JSON.parse(storedState) : defaultValue
  );

  function setPersistentState(value: T) {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  }

  return [state, setPersistentState];
}

export { usePersistentState };
