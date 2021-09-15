/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-04 10:43:52
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-15 22:16:36
 */
import 'lib-flexible';
import '@/assets/css/common.scss';
import { render } from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

document
  .getElementsByTagName('body')[0]
  .style.setProperty('--height-primary', `${window.innerHeight}px`);
window.addEventListener('resize', () => {
  document
    .getElementsByTagName('body')[0]
    .style.setProperty('--height-primary', `${window.innerHeight}px`);
});
console.log();
render(<App />, document.getElementById('root'));

serviceWorker.unregister();
