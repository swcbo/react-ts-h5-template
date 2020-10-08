/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-10-04 19:16:31
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-08 19:25:58
 */
import React from 'react';
import LoadingView from '../../components/LoadingView';
const Home = () => {
    return <div className="tabbar_page">home<LoadingView></LoadingView></div>
}
export default React.memo(Home);