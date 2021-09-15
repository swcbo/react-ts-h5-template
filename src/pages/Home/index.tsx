/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-04 19:16:31
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 21:20:18
 */
import { memo } from 'react';
import LoadingView from '../../components/LoadingView';

const Home = () => {
  return (
    <div>
      home1
      <LoadingView />
    </div>
  );
};
export default memo(Home);
