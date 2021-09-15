/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-06 12:22:47
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 21:17:14
 */
import { White } from '@/typings';
import { FC, Suspense, useMemo, useRef } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import routes, { TabBarList } from '.';
import AnimatedSwitch from '../components/AnimatedSwitch';

const generateRoute = ({
  redirect,
  routes,
  path,
  component: Component,
  exact,
  tabBars,
  ...other
}: White.RouteConfig) => {
  const realKey = Array.isArray(path) ? path[0] : path;
  const realPath = path instanceof Array ? path[0] : path;
  if (routes || tabBars) {
    return (
      <Route
        {...other}
        path={path}
        key={realKey}
        render={() => {
          if (other.title && document.location.pathname.includes(realPath))
            document.title = other.title;
          return (
            Component && (
              <Component tabBars={tabBars} {...other}>
                <Switch>
                  {(routes || tabBars)?.map((v) => generateRoute(v))}
                  <Redirect
                    to={redirect || ((routes || tabBars)!![0].path as string)}
                    exact
                    from={realKey}
                  />
                </Switch>
              </Component>
            )
          );
        }}
      />
    );
  }
  if (redirect) {
    return (
      <Redirect
        to={redirect}
        key={`redirect_${redirect}`}
        exact
        from={realKey}
      />
    );
  }
  return (
    <Route
      {...other}
      path={path}
      key={realKey}
      render={() => {
        if (other.title && document.location.pathname.includes(realPath))
          document.title = other.title;
        return Component && <Component tabBars={tabBars} {...other} />;
      }}
    />
  );
};

const RouteRender: FC = () => {
  const history = useHistory();
  const oldLocation = useRef<string>('');
  const location = useLocation();
  // check normal route
  let routeSceneMode = routes.find(
    (v) => v.path === location.pathname,
  )?.sceneMode;
  let classNames = '';
  if (history.action === 'PUSH') {
    classNames = `forward-from-${routeSceneMode ?? 'right'}`;
  } else if (history.action === 'POP' && oldLocation.current) {
    routeSceneMode = routes.find(
      (v) => v.path === oldLocation.current,
    )?.sceneMode;
    classNames = `back-to-${routeSceneMode ?? 'right'}`;
  }
  // check tabBar route
  const tabIndex = TabBarList.findIndex((v) => v.path === location.pathname);
  if (tabIndex !== -1) {
    const oldIndex = TabBarList.findIndex(
      (v) => v.path === oldLocation.current,
    );
    if (oldIndex !== -1) {
      classNames =
        tabIndex > oldIndex
          ? `forward-from-${TabBarList[tabIndex].sceneMode}`
          : `back-to-${TabBarList[tabIndex].sceneMode}`;
    }
  }
  oldLocation.current = location.pathname;
  const routesView = useMemo(() => {
    return routes.map((v) => generateRoute(v));
  }, []);
  return (
    <AnimatedSwitch classNames={classNames} primaryKey={location.pathname}>
      <div className="fullPage">
        <Suspense fallback={<></>}>
          <Switch location={location}> {routesView}</Switch>
        </Suspense>
      </div>
    </AnimatedSwitch>
  );
};
export default RouteRender;
