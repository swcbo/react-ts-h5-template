/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-09 21:25:20
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 21:17:52
 */
import { White } from '@/typings';
import { memo, VFC } from 'react';
const icons = {
  info: 'white-RectangleCopy3',
  success: 'white-RectangleCopy1',
  warning: 'white-RectangleCopy2',
  fail: 'white-RectangleCopy',
  loading: 'white-loading',
};
const Notice: VFC<White.NoticeProps> = ({ type, content }) => {
  return (
    <div className={`toast-notice ${type} column_center`}>
      <i className={`${icons[type]} icon`} />
      <span>{content}</span>
    </div>
  );
};
export default memo(Notice);
