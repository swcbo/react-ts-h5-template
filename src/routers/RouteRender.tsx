/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-06 12:22:47
 * @LastEditors: 小白
 * @LastEditTime: 2021-10-23 14:48:58
 */
import AnimatedSwitch from '@/components/AnimatedSwitch';
import { White } from '@/typings';
import { FC, Suspense, useEffect, useMemo, useRef } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import routes, { TabBarList } from '.';
import '../components/AnimatedSwitch/index.scss';
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
  const [activeIndex, oldIndex] = TabBarList.reduce<number[]>(
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
      console.log('>>>>>))))))');
      className.current = `back-to-${oldMode.current?.mode || 'right'}`;
    }
  }

  useEffect(() => {
    oldMode.current = {
      mode: routeSceneMode,
      path: location.pathname,
    };
  }, [location, routeSceneMode]);
  const routesView = useMemo(() => {
    return routes.map((v) => generateRoute(v));
  }, []);

  return (
    <AnimatedSwitch
      classNames={className.current}
      primaryKey={location.pathname}>
      <div className="fullPage">
        <Suspense fallback={<></>}>
          <Switch location={location}>{routesView}</Switch>
        </Suspense>
      </div>
    </AnimatedSwitch>
  );
};
export default RouteRender;
