import React, { useState } from 'react';
import './App.css';
import useDebounce from './hooks/useDebounce';

function App() {
  const [state, setstate] = useState(1)
  const dis = useDebounce((args1: number, args2: number, args3: number, args4: number) => {
    console.log('state',state)
  }, 1000, [state])

  return (
    <div className="App">
      <div onClick={() => {
        dis(1, 2, 3, 4); setstate(state + 1)
      }}>buttn</div>
    </div>
  );
}

export default App;
