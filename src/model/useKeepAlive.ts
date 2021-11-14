import { useRef, ReactElement, useCallback } from 'react';
import { createModel } from 'rmox';

const useKeepAlive = () => {
  const keepElements = useRef<Record<string, ReactElement>>({});
  const isKeepPath = useCallback((path: string) => {
    return ['/list'].includes(path);
  }, []);
  return {
    keepElements,
    isKeepPath,
  };
};
export default createModel(useKeepAlive, { global: true });
