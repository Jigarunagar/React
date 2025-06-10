import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 100);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setCounter(0);
  };

  return (
    <div className="App">
      <div id="counter">{counter}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
