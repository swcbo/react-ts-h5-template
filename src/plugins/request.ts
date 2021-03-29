import Toast from '@/layout/Toast';
import axios, { AxiosRequestConfig } from 'axios';
/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-04 13:11:29
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-10 22:39:02
 */
import { getAuth, setAuth } from './../utils/index';

axios.defaults.timeout = 1000 * 10;
interface AxiosErrorInterface {
	message: string;
	config: any;
	response: any;
}

axios.interceptors.request.use(
	(config: any) => {
		return config;
	},
	(error: AxiosErrorInterface) => {
		return error;
	}
);

axios.interceptors.response.use(
	(response: any) => {
		if (response.status !== 200) {
			response.data.message && Toast.fail(response.data.message);
			return Promise.reject(response);
		}
		return Promise.resolve(response.data.data);
	},
	(error: AxiosErrorInterface) => {
		if (~`${error.message}`.indexOf('timeout')) {
			Toast.fail('网络超时');
		}
		error.response && error.response.data.message && Toast.fail(error.response.data.message);
		if (error.response && error.response.status === 401) {
			setAuth('');
			window.location.assign(`${window.location.origin}/login`);
		} else {
			error.response && error.response.statusText && Toast.fail(error.response.statusText);
		}

		return Promise.reject(error);
	}
);

const baseRequest = (config: any): Promise<any> => {
	config = {
		...config,
		headers: {
			Authorization: `Bearer ${getAuth()}`
		},
		url: `${process.env.REACT_APP_HTTPBASEURL}${config.url}`
	};
	return axios.request(config);
};

export default {
	get: (url: string, params?: object, config?: AxiosRequestConfig) => () => {
		return baseRequest({
			method: 'get',
			params,
			url,
			...config
		});
	},
	post: (url: string, data: object, config?: AxiosRequestConfig) => () => {
		return baseRequest({
			data,
			method: 'post',
			url,
			...config
		});
	},
	patch: (url: string, data: object, config?: AxiosRequestConfig) => () => {
		return baseRequest({
			data,
			method: 'patch',
			url,
			...config
		});
	},
	put: (url: string, data?: object, config?: AxiosRequestConfig) => () => {
		return baseRequest({
			data,
			method: 'put',
			url,
			...config
		});
	},
	delete: (url: string, data?: object, config?: AxiosRequestConfig) => () => {
		return baseRequest({
			data,
			method: 'delete',
			url,
			...config
		});
	}
};
