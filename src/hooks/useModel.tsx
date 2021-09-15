import { WhiteContext } from '@/App';
import { White } from '@/typings';
import isEqual from 'fast-deep-equal';
import { useContext, useEffect, useRef, useState } from 'react';
export function useModel<T extends White.ModelKeys, U>(
  namespace: T,
  updater?: (model: White.ModelsReturnTypes<T>) => U,
): typeof updater extends undefined
  ? [T]
  : ReturnType<NonNullable<typeof updater>> {
  type RetState = typeof updater extends undefined
    ? [T]
    : ReturnType<NonNullable<typeof updater>>;
  const dispatcher = useContext<any>(WhiteContext);
  const updaterRef = useRef(updater);
  updaterRef.current = updater;
  const [state, setState] = useState<RetState>(() =>
    updaterRef.current
      ? updaterRef.current(dispatcher.data![namespace])
      : dispatcher.data![namespace],
  );
  const stateRef = useRef<any>(state);
  stateRef.current = state;

  const isMount = useRef(false);
  useEffect(() => {
    isMount.current = true;
    return () => {
      isMount.current = false;
    };
  }, []);

  useEffect(() => {
    const handler = (e: any) => {
      if (!isMount.current) {
        // 如果 handler 执行过程中，组件被卸载了，则强制更新全局 data
        setTimeout(() => {
          dispatcher.data![namespace] = e;
          dispatcher.update(namespace);
        });
      } else {
        if (updater && updaterRef.current) {
          const currentState = updaterRef.current(e);
          const previousState = stateRef.current;
          if (!isEqual(currentState, previousState)) {
            setState(currentState);
          }
        } else {
          setState(e);
        }
      }
    };

    try {
      dispatcher.callbacks![namespace]!.add(handler);
      dispatcher.update(namespace);
    } catch (e) {
      dispatcher.callbacks![namespace] = new Set();
      dispatcher.callbacks![namespace]!.add(handler);
      dispatcher.update(namespace);
    }
    return () => {
      // 保证组件卸载前，还能最后一次触发 handler
      setTimeout(() => {
        dispatcher.callbacks![namespace]!.delete(handler);
      });
    };
  }, [namespace]);
  return state;
}
