import { memo } from 'react';
import { useNavigate } from 'react-router';
import './index.less';
import image from '@/assets/images/common/404.png';
const NoFound = () => {
  const nav = useNavigate();
  return (
    <div className="column_center fullPage">
      <img src={image} alt="" />
      <p>Sorry,您访问的页面丢了~</p>
      <div
        className="back_btn"
        onClick={() => {
          nav('/', { replace: true });
        }}>
        返回首页
      </div>
    </div>
  );
};
export default memo(NoFound);
