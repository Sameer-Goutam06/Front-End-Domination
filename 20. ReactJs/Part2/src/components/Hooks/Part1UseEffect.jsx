import { useState, useEffect } from 'react';

function Part1UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted or count changed:", count);

    // Cleanup function (runs on component unmount or before the next effect)
    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]); // Effect runs when 'count' changes

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Part1UseEffect;
