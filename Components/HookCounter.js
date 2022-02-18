import React, { useState } from 'react';

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <center>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </center>
  );
}

export default HookCounter;
