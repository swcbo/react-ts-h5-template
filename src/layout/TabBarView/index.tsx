/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-07 22:21:02
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-15 22:38:56
 */
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import routers from '../../routers';
import styles from './index.module.scss';
const TabBarView: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const tabBars = useRef(routers.find((v) => v.tabBars)?.tabBars);
  const [state, setstate] = useState(
    tabBars.current?.findIndex((v) => v.path === history.location.pathname),
  );
  const OnTabClick = useCallback(
    (index, path) => {
      setstate(index);
      history.push(path);
    },
    [history],
  );
  useEffect(() => {
    setstate(tabBars.current?.findIndex((v) => v.path === location.pathname));
  }, [location]);
  const isTabBar =
    tabBars.current?.findIndex((v) => v.path === history.location.pathname) !==
    -1;
  return (
    <div
      className={`${styles.tabBar} row_center ${
        isTabBar ? styles.in_page : styles.out_page
      }`}>
      {tabBars.current?.map(({ title, path, icon }, index) => (
        <div
          className={`column_center ${styles.tabBarItem} ${
            state === index ? styles.chooseed : ''
          }`}
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
