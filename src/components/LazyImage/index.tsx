/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-09 11:35:02
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 21:17:21
 */
import { FC, memo, useState } from 'react';
import LoadingView from '../LoadingView';
import './index.scss';
import LazyLoad from 'react-lazyload';
export interface LazyImageProps {
  src: string; //
  height?: number;
  width?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}
const LazyImage: FC<LazyImageProps> = ({ src, objectFit, ...other }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  return (
    <LazyLoad height={other.height ?? 64}>
      <div
        className="image_Bg"
        style={{ height: other.height ?? 64, width: other.width ?? 64 }}
      >
        {!error && (
          <img
            src={src}
            alt=""
            style={{ objectFit: objectFit ?? 'cover' }}
            onLoad={() => {
              setLoading(false);
            }}
            onError={() => {
              setLoading(false);
              setError('加载失败');
            }}
          />
        )}
        {loading && (
          <LoadingView
            className="loading_bg"
            {...other}
            height={50}
            width={50}
          />
        )}
        {error && <div className="error_div column_center">{error}</div>}
      </div>
    </LazyLoad>
  );
};
export default memo(LazyImage);
