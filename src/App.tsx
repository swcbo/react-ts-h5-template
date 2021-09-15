/*
 * @Descripttion:
 * @version:
 * @Author: 小白
 * @Date: 2020-10-04 10:43:52
 * @LastEditors: 小白
 * @LastEditTime: 2021-09-14 21:17:06
 */

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TabBarView from './layout/TabBarView';
import RouteRender from './routers/RouteRender';
import Dispatcher from '@/helpers/dispatcher';
import Executor from '@/helpers/executor';
import { ModelList } from './constant';
import { createContext } from 'react';
export const WhiteContext = createContext({});
const dispatcher = new Dispatcher();
const Exe = Executor;
const App = () => {
  return (
    <WhiteContext.Provider value={dispatcher}>
      {Object.entries(ModelList).map((pair) => {
        return (
          <Exe
            key={pair[0]}
            namespace={pair[0]}
            hook={pair[1]}
            onUpdate={(val: any) => {
              const [ns] = pair as any;
              dispatcher.data[ns] = val;
              dispatcher.update(ns);
            }}
          />
        );
      })}
      <Router>
        <RouteRender />
        <TabBarView />
      </Router>
    </WhiteContext.Provider>
  );
};
export default App;
