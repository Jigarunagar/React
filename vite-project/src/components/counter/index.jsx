import React, { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setCounter(0);
  };

  return (
    <div className="App bg-gray-500 w-fit mx-auto p-10 rounded-2xl">
      <div
        id="counter"
        className=" border-2 border-black w-fit text-white font-black mx-auto px-10 rounded-3xl"
      >
        {counter}
      </div>
      <button
        onClick={start}
        className="border-black border-2 rounded-2xl bg-black text-white font-black text-3xl shadow-2xl"
      >
        Start
      </button>
      <button
        onClick={stop}
        className="border-black border-2 rounded-2xl bg-black text-white font-black text-3xl shadow-2xl"
      >
        Stop
      </button>
      <button
        onClick={reset}
        className="border-black border-2 rounded-2xl bg-black text-white font-black text-3xl shadow-2xl"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
