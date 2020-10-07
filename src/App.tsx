import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router';
import './App.css';
import RouteRender from './routers/RouteRender';
function App() {
  return (
    <Router history={createBrowserHistory()}>
      <RouteRender />
    </Router>
  );
}

export default App;
