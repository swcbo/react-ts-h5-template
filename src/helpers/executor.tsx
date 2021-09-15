/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-17 19:12:29
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 13:42:54
 */
import { useEffect, useMemo, useRef } from 'react';

interface ExecutorProps {
  hook: () => any;
  onUpdate: (val: any) => void;
  namespace: string;
}

export default (props: ExecutorProps) => {
  const { hook, onUpdate, namespace } = props;

  const updateRef = useRef(onUpdate);
  updateRef.current = onUpdate;
  const initialLoad = useRef(false);

  let data: any;
  try {
    data = hook();
    if (
      process.env.NODE_ENV === 'development' &&
      typeof document !== 'undefined'
    ) {
      const count = Object.keys(
        ((window as any)._white_useModel_dev_tool_log || {})[namespace] || {},
      ).length;
      (window as any)._white_useModel_dev_tool = {
        ...(window as any)._white_useModel_dev_tool,
        [namespace]: data,
      };
      (window as any)._white_useModel_dev_tool_log = {
        ...(window as any)._white_useModel_dev_tool_log,
        [namespace]: {
          ...((window as any)._white_useModel_dev_tool_log || {})[namespace],
          [count]: data,
        },
      };
      // window.dispatchEvent(
      // // @ts-ignore
      // new CustomEvent('_white_useModel_update', {
      //   detail: {
      //     namespace,
      //     time: Date.now(),
      //     data,
      //     index: count,
      //   },
      // }),
      // );
    }
  } catch (e) {
    console.error(
      `model: Invoking '${namespace || 'unknown'}' model failed:`,
      e,
    );
  }

  // 首次执行时立刻返回初始值
  useMemo(() => {
    updateRef.current(data);
    initialLoad.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React 16.13 后 update 函数用 useEffect 包裹
  useEffect(() => {
    if (initialLoad.current) {
      updateRef.current(data);
    } else {
      initialLoad.current = true;
    }
  });

  return <></>;
};
