import React, { useState, useEffect } from 'react';

function UseEffectThree() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // function doSomething() {
    //   console.log(someProp);
    // }
    // doSomething()
    const interVal = setInterval(tick, 1000);
    return () => {
      clearInterval(interVal);
    };
  }, []);
  return <h1>{count}</h1>;
}

export default UseEffectThree;
