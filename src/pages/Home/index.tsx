/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-04 19:16:31
 * @LastEditors: 小白
 * @LastEditTime: 2022-02-16 22:43:05
 */
import { memo, useState } from 'react';
import LoadingView from '../../components/LoadingView';

const Home = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div
        className="bg-red-500 hover:bg-blue-400 mt-[10px] w-[100px]"
        onClick={() => setCount((count) => count + 1)}>
        home5434
      </div>
      <div className="bg-green-200 font-$30">{count}</div>
      <LoadingView />
    </div>
  );
};
export default memo(Home);
