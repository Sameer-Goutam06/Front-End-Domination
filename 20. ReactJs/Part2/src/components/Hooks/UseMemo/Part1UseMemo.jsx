/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';

const FactorialCalculator = () => {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // Memoizing the factorial computation
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    const computeFactorial = (n) => {
      if (n <= 0) return 1;
      return n * computeFactorial(n - 1);
    };
    return computeFactorial(number);
  }, [number]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <h2>Factorial of {number}: {factorial}</h2>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase Number</button>
      <button onClick={() => setNumber((prev) => prev - 1)} disabled={number <= 1}>
        Decrease Number
      </button>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Increment Counter: {counter}</button>
    </div>
  );
};

export default FactorialCalculator;
