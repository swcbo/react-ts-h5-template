import useKeepAlive from '@/model/useKeepAlive';
import { memo, ReactElement, useRef } from 'react';
import { matchPath, useLocation, useOutlet } from 'react-router';

const KeepAlive = () => {
  const { keepElements, isKeepPath } = useKeepAlive();
  const location = useLocation();
  const initPath = useRef(location.pathname);
  const element = useOutlet();
  const isKeep = isKeepPath(location.pathname);
  if (element && !keepElements.current[location.pathname] && isKeep) {
    keepElements.current[location.pathname] = element;
  }
  const currentPage = matchPath(location.pathname, initPath.current);
  return (
    <>
      {!currentPage || !isKeep
        ? element
        : Object.entries(keepElements.current).map(
            ([pathname, element]: [string, ReactElement]) => (
              <div
                key={pathname}
                hidden={
                  !currentPage || !matchPath(location.pathname, pathname)
                }>
                {element}
              </div>
            ),
          )}
    </>
  );
};

export default memo(KeepAlive);
