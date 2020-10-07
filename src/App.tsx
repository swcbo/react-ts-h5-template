import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import RouteRender from './routers/RouteRender';
function App() {
  return (
    <BrowserRouter>
      <RouteRender />
    </BrowserRouter>
  );
}

export default App;
