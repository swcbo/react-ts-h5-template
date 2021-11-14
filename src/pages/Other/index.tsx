/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 20:53:50
 * @LastEditors: 小白
 * @LastEditTime: 2021-11-13 17:07:45
 */
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
const Other = () => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav(-1);
      }}
      style={{ backgroundColor: 'red' }}>
      32132131
    </div>
  );
};
export default memo(Other);
