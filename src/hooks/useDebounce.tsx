import { useCallback, useRef } from 'react';

/**
 * 防抖hooks
 * @param fun 方法
 * @param delay 时间(毫秒)
 * @param deps
 */
const useDebounce = (fun: Function, delay: number, deps: any[]) => {
  const timer = useRef<NodeJS.Timeout | null>();
  return useCallback(
    (...args) => {
      timer.current && clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        fun.apply(fun, args);
        timer.current && clearTimeout(timer.current);
        timer.current = null;
      }, delay);
      return () => {
        timer.current && clearTimeout(timer.current);
        timer.current = null;
      };
    },
    [...deps, fun, delay],
  );
};
export default useDebounce;
