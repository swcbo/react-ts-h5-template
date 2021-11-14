/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 19:10:44
 * @LastEditors: 小白
 * @LastEditTime: 2021-11-13 13:37:47
 */
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const nav = useNavigate();
  return (
    <div
      className="tabbar_page"
      style={{ backgroundColor: 'blue' }}
      onClick={() => nav('/other1')}>
      Search
    </div>
  );
};
export default memo(Search);
