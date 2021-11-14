/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-08 21:06:24
 * @LastEditors: 小白
 * @LastEditTime: 2021-11-13 11:36:44
 */
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
const Other = () => {
  const nav = useNavigate();
  return (
    <div onClick={() => nav(-1)} style={{ backgroundColor: 'yellow' }}>
      Other1
    </div>
  );
};
export default memo(Other);
