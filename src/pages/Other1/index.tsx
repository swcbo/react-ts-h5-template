/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-08 21:06:24
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 13:43:56
 */
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
const Other = () => {
  const history = useHistory();
  return (
    <div onClick={() => history.goBack()} style={{ backgroundColor: 'yellow' }}>
      Other1
    </div>
  );
};
export default memo(Other);
