/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-10-04 10:43:52
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-13 23:39:13
 */
import ReactDOM from 'react-dom';
import React from 'react';
import '@/assets/css/common.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
document.getElementsByTagName('body')[0].style.setProperty('--height-primary', `${window.innerHeight}px`);
window.addEventListener('resize',()=>{
  document.getElementsByTagName('body')[0].style.setProperty('--height-primary', `${window.innerHeight}px`);
})
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
