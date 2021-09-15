/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 20:53:50
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 13:42:07
 */
import { memo } from 'react';
import { useHistory } from 'react-router-dom';
const Other = () => {
  const history = useHistory();
  return (
    <div onClick={() => history.goBack()} style={{ backgroundColor: 'red' }}>
      Other
    </div>
  );
};
export default memo(Other);
