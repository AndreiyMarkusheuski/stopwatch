import React, { useState, useEffect } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isPause, setPause] = useState(true);

  useEffect(() => {
    let time;
    if (!isPause) {
      time = setInterval(() => {
        setCounter((prevValue) => ++prevValue);
      }, 1000);
    }
    return () => {
      clearInterval(time);
    };
  }, [isPause]);

  const reserCounter = () => {
    setPause(true);
    setCounter(0);
  };

  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={() => setPause(false)}>Start</button>
        <button onClick={() => setPause(true)}>Pause</button>
        <button onClick={reserCounter}>Reset</button>
      </div>
    </div>
  );
};

export default App;
