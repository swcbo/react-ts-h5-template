/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 20:44:54
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 21:17:57
 */
import useAxios from '@/hooks/useAxios';
import Axios from 'axios';
import { FC, memo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';
const List: FC = () => {
  const history = useHistory();
  const { doAxios } = useAxios<any>(
    () => Axios.get<any>('https://csdnxiaofu.huangb.top/iconfont.json'),
    [],
  );
  useEffect(() => {
    doAxios();
  }, [doAxios]);

  return <div onClick={() => history.push('/other')} />;
};
export default memo(List);
