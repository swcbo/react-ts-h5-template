import { White } from '@/typings';
import { useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import routes, { TabBarList } from './index';

const useSwitch = () => {
  const history = useHistory();
  const oldMode = useRef<{
    mode: White.SwitchType | undefined;
    path?: string;
    isTab?: boolean;
  }>();
  const location = useLocation();
  const className = useRef('');
  const routeSceneMode = routes.find(
    (v) => v.path === location.pathname,
  )?.sceneMode;
  const [activeIndex, oldIndex] = TabBarList.reduce(
    (pre, { path }, index) => {
      if (path === location.pathname) {
        pre[0] = index;
      }
      if (path === oldMode.current?.path) {
        pre[1] = index;
      }
      return pre;
    },
    [-1, -1],
  );
  if (activeIndex !== -1 && oldIndex !== -1) {
    className.current =
      activeIndex > oldIndex
        ? `forward-from-${TabBarList[activeIndex].sceneMode || 'right'}`
        : `back-to-${TabBarList[oldIndex].sceneMode || 'right'}`;
  } else {
    if (history.action === 'PUSH') {
      className.current = `forward-from-${routeSceneMode || 'right'}`;
    } else if (history.action === 'POP') {
      className.current = `back-to-${oldMode.current?.mode || 'right'}`;
    }
  }

  useEffect(() => {
    oldMode.current = {
      mode: routeSceneMode,
      path: location.pathname,
    };
  }, [location, routeSceneMode]);

  return {
    classNames: className.current,
    primaryKey: location.pathname,
    location,
  };
};

export default useSwitch;
