import React, { useState, useEffect } from 'react';

function UseEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('useEffect');
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <center>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </center>
  );
}

export default UseEffectOne;
