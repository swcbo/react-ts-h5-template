import AnimatedSwitch from '@/components/AnimatedSwitch';
import { White } from '@/typings';
import { Suspense, useLayoutEffect, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './index';
import useSwitch from './useSwitch';
const generateRoute = ({
  routes,
  path,
  component: Component,
  tabBars,
  ...other
}: White.RouteConfig) => (
  <Route path={path} key={path} element={<Component />} {...other}>
    {(routes || tabBars)?.map((v) => generateRoute(v))}
  </Route>
);
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
          <Routes location={location}>{routesView}</Routes>
        </Suspense>
      </div>
    </AnimatedSwitch>
  );
};
export default RouteRender;
