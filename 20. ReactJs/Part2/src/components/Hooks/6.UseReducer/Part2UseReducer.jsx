/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';

// Reducer function to handle state changes
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // Initial state and useReducer setup
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
// How It Works
// The counterReducer function determines how the state changes based on the action.type (either increment or decrement).
// useReducer initializes the state ({ count: 0 }) and provides a dispatch function to trigger state changes.
// The dispatch function sends an action (e.g., { type: 'increment' }) to update the state.