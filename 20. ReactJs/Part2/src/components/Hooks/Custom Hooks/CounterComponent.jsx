// CounterComponent.jsx
import useCounter from './useCounter';

const CounterComponent = () => {
  // Using the custom hook
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="text-center">
        <h1>Custom Hook</h1>
        <h2>Counter: {count}</h2>
        <button
            onClick={increment}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
        >
            Increment
        </button>
        <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded">
            Decrement
        </button>
    </div>
  );
};

export default CounterComponent;
