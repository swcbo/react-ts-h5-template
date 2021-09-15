/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 19:10:44
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 13:42:01
 */
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
const Search = () => {
  const history = useHistory();
  return (
    <div
      className="tabbar_page"
      style={{ backgroundColor: 'blue' }}
      onClick={() => history.push('/other1')}
    >
      Search
    </div>
  );
};
export default memo(Search);
