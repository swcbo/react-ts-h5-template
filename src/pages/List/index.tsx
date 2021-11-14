/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 20:44:54
 * @LastEditors: 小白
 * @LastEditTime: 2021-11-14 01:18:46
 */
import useAxios from '@/hooks/useAxios';
import Axios from 'axios';
import { FC, memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';
const List: FC = () => {
  const [state, setstate] = useState(0);
  const nva = useNavigate();
  const { doAxios } = useAxios<any>(
    () => Axios.get<any>('https://csdnxiaofu.huangb.top/iconfont.json'),
    [],
  );
  useEffect(() => {
    doAxios();
  }, [doAxios]);
  useEffect(() => {
    console.log('>>_--');
    return () => {
      console.log('>>_--321321');
    };
  }, []);

  return (
    <div>
      {state}
      <button
        onClick={(e) => {
          setstate((state) => state + 1);
        }}>
        点击
      </button>
      <button
        onClick={() => {
          console.log('>>>');
          nva('/other');
        }}>
        去oher
      </button>
    </div>
  );
};
export default memo(List);
