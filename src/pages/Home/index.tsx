/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-04 19:16:31
 * @LastEditors: 小白
 * @LastEditTime: 2022-01-22 19:22:26
 */
import { memo } from 'react';
import LoadingView from '../../components/LoadingView';

const Home = () => {
  return (
    <div>
      <div className="bg-red-500 hover:bg-blue-400 mt-[10px] w-[100px]">
        home1
      </div>
      <LoadingView />
    </div>
  );
};
export default memo(Home);
