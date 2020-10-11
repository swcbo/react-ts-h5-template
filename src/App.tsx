import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import TabBarView from './layout/TabBarView';
import RouteRender from './routers/RouteRender';
function App() {
  return (
    <Router basename="/test">
      <RouteRender />
      <TabBarView />
    </Router>
  );
}
export default App;
