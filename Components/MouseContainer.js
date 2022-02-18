import React, { useState, useEffect } from 'react';
import UseEffectTwo from './UseEffectTwo';

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <center>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display && <UseEffectTwo />}
    </center>
  );
}

export default MouseContainer;
