import React, { useReducer } from 'react';
import {initState, reducer} from './04-reducer';

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT"})}>
        +
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT"})}>
        -
      </button>
    </>
  );
}

export default UseReducer;