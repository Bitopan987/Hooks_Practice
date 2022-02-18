import React, { useReducer } from 'react';
import ContextReducerA from './ContextReducerA';
import ContextReducerB from './ContextReducerB';
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
      break;
    case 'decrement':
      return state - 1;
      break;
    case 'reset':
      return initialState;
      break;
    default:
      return state;
  }
};

function ContextReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>Count - {count}</div>
      <ContextReducerA />
      <ContextReducerB />
    </CountContext.Provider>
  );
}

export default ContextReducer;
