import React, { useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);

  return (
    <div>
      <p>{time}</p>
      <button
        disabled={time > 0}
        onClick={() => {
          setTimer(
            setInterval(() => {
              setTime((prev) => ++prev);
            }, 1000)
          );
        }}
      >
        Start
      </button>
      <button
        disabled={time === 0}
        onClick={() => {
          clearInterval(timer);
        }}
      >
        Pause
      </button>
      <button
        disabled={time === 0}
        onClick={() => {
          clearInterval(timer);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
