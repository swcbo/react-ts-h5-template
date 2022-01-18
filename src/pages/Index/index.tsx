import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
import './index.less';
const Index: FC = () => {
  return (
    <div className="tabbar_page">
      <Outlet />
    </div>
  );
};
export default memo(Index);
