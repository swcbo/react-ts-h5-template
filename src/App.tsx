/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-04 10:43:52
 * @LastEditors: 小白
 * @LastEditTime: 2021-11-13 18:57:57
 */
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TabBarView from './layout/TabBarView';
import RouteRender from './routers/RouteRender';
const App = () => {
  return (
    <Router>
      <RouteRender />
      <TabBarView />
    </Router>
  );
};
export default App;
