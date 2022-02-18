import React, { useState, useEffect } from 'react';

function UseEffectTwo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('Mouse Event');
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('mousemove', logMousePosition);
    return () => {
      console.log('unmount');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);
  return (
    <center>
      Hooks X-{x} Y-{y}
    </center>
  );
}

export default UseEffectTwo;
