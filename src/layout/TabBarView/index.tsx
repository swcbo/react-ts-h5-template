import history from '@/utils/history';
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import routers from '../../routers';
import styles from './index.module.less';
const TabBarView: FC = () => {
  const location = useLocation();
  const tabBars = useRef(routers.find((v) => v.tabBars)?.tabBars);
  const [state, setstate] = useState(
    tabBars.current?.findIndex((v) => v.path === window.location.pathname),
  );
  const OnTabClick = useCallback(
    (index, path) => {
      if (state === index) return;
      setstate(index);
      history.push(path);
    },
    [state],
  );
  useEffect(() => {
    setstate(
      tabBars.current?.findIndex((v) => matchPath(v.path, location.pathname)),
    );
  }, [location]);
  const isTabBar =
    tabBars.current?.findIndex((v) => matchPath(v.path, location.pathname)) !==
    -1;
  return (
    <div
      className={`${styles.tabBar} flex  justify-center items-center ${
        isTabBar ? styles.in_page : styles.out_page
      }`}>
      {tabBars.current?.map(({ title, path, icon }, index) => (
        <div
          className={`flex flex-col justify-center items-center ${
            styles.tabBarItem
          } ${state === index ? styles.chooseed : ''}`}
          key={title}
          onClick={() => {
            OnTabClick(index, path);
          }}>
          <i className={icon} />
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};
export default memo(TabBarView);
