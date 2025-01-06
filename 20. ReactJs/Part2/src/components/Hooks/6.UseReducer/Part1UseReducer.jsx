/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';

const toggleReducer = (state, action) => {
  if (action.type === 'toggle') {
    return { isToggled: !state.isToggled };
  }
  return state;
};

const ToggleButton = () => {
  // Initial state and useReducer setup
  const [state, dispatch] = useReducer(toggleReducer, { isToggled: false });

  return (
    <div>
        <h1>useReducer Examples</h1>
        <h2>{state.isToggled ? 'ON' : 'OFF'}</h2>
        <button onClick={() => dispatch({ type: 'toggle' })}>Toggle</button>
    </div>
  );
};

export default ToggleButton;
