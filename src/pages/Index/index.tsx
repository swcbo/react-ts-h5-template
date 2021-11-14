import KeepAlive from '@/components/KeepAlive';
import { FC, memo } from 'react';
import './index.scss';
const Index: FC = () => {
  return (
    <div className="tabbar_page">
      <KeepAlive />
    </div>
  );
};
export default memo(Index);
