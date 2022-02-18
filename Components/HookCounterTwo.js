import React, { useState } from 'react';

function HookCounterTwo() {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <center>
      Count: {count}
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <br></br>
      <button onClick={() => incrementFive()}>increment5</button>
    </center>
  );
}

export default HookCounterTwo;
