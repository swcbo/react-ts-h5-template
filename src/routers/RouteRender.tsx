import AnimatedSwitch from '@/components/AnimatedSwitch';
import { White } from '@/typings';
import { Suspense, useLayoutEffect, useMemo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from './index';
import useSwitch from './useSwitch';
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
let isStart = false;
const handler = (e: any) => {
  e.stopPropagation();
  e.preventDefault();
};
const RouteRender = () => {
  const { classNames, primaryKey, location } = useSwitch();
  const routesView = useMemo(() => {
    return routes.map((v) => generateRoute(v));
  }, []);
  useLayoutEffect(() => {
    document.removeEventListener('click', handler, true);
  }, []);
  return (
    <AnimatedSwitch
      classNames={classNames}
      primaryKey={primaryKey}
      onEnter={() => {
        if (!isStart) {
          document.addEventListener('click', handler, true);
          isStart = !isStart;
        }
      }}
      onExited={() => {
        if (isStart) {
          document.removeEventListener('click', handler, true);
          isStart = !isStart;
        }
      }}>
      <div className="fullPage">
        <Suspense fallback={<></>}>
          <Switch location={location}>{routesView}</Switch>
        </Suspense>
      </div>
    </AnimatedSwitch>
  );
};
export default RouteRender;
