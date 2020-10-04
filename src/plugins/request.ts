import { Toast } from 'antd-mobile';
/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-10-04 13:11:29
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-04 14:02:00
 */
import { getAuth, setAuth } from './../utils/index';
import axios, { AxiosRequestConfig } from 'axios'

axios.defaults.timeout = 1000 * 10
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://my.huangb.top/api' : ''
interface AxiosErrorInterface {
  message: string;
  config: any;
  response: any;
}

axios.interceptors.request.use((config: any) => {
  return config;
}, (error: AxiosErrorInterface) => {
  return Promise.reject(error);
});

axios.interceptors.response.use((response: any) => {
  return response;
}, (error: AxiosErrorInterface) => {
  return Promise.reject(error);
});

const baseRequest = (config: any):Promise<any> => {
  config = {
    ...config, headers: { Authorization: `Beara ${getAuth()}` }
  }
  return axios.request(config)
    .then(response => {
      if (!response.data.success) {
        response.data.message && Toast.fail(response.data.message)
        return Promise.reject(response)
      }
      return Promise.resolve(response.data.data)
    })
    .catch(error => {
      if (~`${error.message}`.indexOf('timeout')) {
        Toast.fail('网络超时')
      }
      error.response && error.response.data.message && Toast.fail(error.response.data.message)
      if (error.response && error.response.status === 401) {
        setAuth('')
        window.location.assign(`${window.location.origin}/login`)
      } else {
        error.response && error.response.statusText && Toast.fail(error.response.statusText)
      }

      return Promise.reject(error)
    })
}

export default {
  get(url: string, params?: object, config?: AxiosRequestConfig) {
    return baseRequest({
      method: 'get',
      params,
      url,
      ...config
    })
  },
  post(url: string, data: object, config?: AxiosRequestConfig) {
    return baseRequest({
      data,
      method: 'post',
      url,
      ...config
    })
  },
  patch(url: string, data: object, config?: AxiosRequestConfig) {
    return baseRequest({
      data,
      method: 'patch',
      url,
      ...config
    })
  },
  put(url: string, data?: object, config?: AxiosRequestConfig) {
    return baseRequest({
      data,
      method: 'put',
      url,
      ...config
    })
  },
  delete(url: string, data?: object, config?: AxiosRequestConfig) {
    return baseRequest({
      data,
      method: 'delete',
      url,
      ...config
    })
  }
}
