import { useState, useEffect } from 'react';

function Part2UseEffect() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    //useEffect runs only for single use because it has no dependencies
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Updates every 1 second and it is an infinite loop

    // Cleanup function to clear the interval when component unmounts but it would never execute if use is on that page.
    //it will only execute when the user leaves the page or navigates to another page
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div>
      <h1>Current Time: {time}</h1>
    </div>
  );
}

export default Part2UseEffect;
