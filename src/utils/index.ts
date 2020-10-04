/*
 * @Descripttion: 工具类
 * @version: 
 * @Author: 小白
 * @Date: 2020-10-04 13:11:40
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-04 13:12:23
 */
export const setAuth = (auth: string) => {
	localStorage.setItem('auth', auth);
};

export const getAuth = () => {
	let auth = localStorage.getItem('auth');
	return auth ? auth : '';
};
export const getCode = () => {
	return window.location.search ? searchObj(window.location.search).code : window.location.pathname.split('/')[2];
};
/**
 * 获取url参数
 * @param search url参数 
 */
export const searchObj = (search: string) => {
	let body = JSON.parse(
		'{"'.concat(
			decodeURIComponent(search.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"'),
			'"}'
		)
	);
	return body;
};
