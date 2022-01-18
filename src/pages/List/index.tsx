/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-05 20:44:54
 * @LastEditors: 小白
 * @LastEditTime: 2022-01-19 00:23:48
 */
import useAxios from '@/hooks/useAxios';
import { Space, Badge, NoticeBar } from 'antd-mobile';
import Axios from 'axios';
import { FC, memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';
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

  return (
    <div>
      {state}
      <Space style={{ '--gap': '24px', marginTop: 100 }}>
        <Badge content="5">
          <div className={styles.box} />
        </Badge>

        <Badge content="新">
          <div className={styles.box} />
        </Badge>
        <Badge content="更新啦">
          <div className={styles.box} />
        </Badge>
        <Badge>
          <div className={styles.box} />
        </Badge>
      </Space>
      <Space block direction="vertical">
        <NoticeBar content="默认" color="default" />
        <NoticeBar content="警告" color="alert" />
        <NoticeBar content="错误" color="error" />
        <NoticeBar content="信息" color="info" />
      </Space>
      <button
        onClick={(e) => {
          setstate((state) => state + 1);
        }}>
        点击
      </button>
      <button
        onClick={() => {
          nva('/other');
        }}>
        去oher
      </button>
    </div>
  );
};
export default memo(List);
