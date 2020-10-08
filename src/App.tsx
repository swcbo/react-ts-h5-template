import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import TabBarView from './layout/TabBarView';
import RouteRender from './routers/RouteRender';
function App() {
  return (
    <BrowserRouter>
      <RouteRender />
      <TabBarView />
    </BrowserRouter>
  );
}

export default App;
