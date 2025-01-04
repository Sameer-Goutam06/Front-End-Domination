//useCallback is a React hook that memoizes(caches) a function to prevent its recreation on every render, 
// improving performance by avoiding unnecessary re-renders of child components relying on it.

import React, { useState } from 'react';
import PropTypes from 'prop-types';


//Without use CallBack
const Child0 = React.memo(({ onClick }) => {
    console.log('Child rendered');
    //This line is getting rendered twice or this function is called twice because of the ReactStrictMode used for development
    return <button onClick={onClick}>Click Me</button>;
});

Child0.displayName = 'Child0';
Child0.propTypes = {
onClick: PropTypes.func.isRequired,
};


const Parent0 = () => {
  const [count, setCount] = useState(0);

  // Function recreated on every render
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
        <h1>without useCallBack</h1>
        <Child0 onClick={increment} />
        <p>Count: {count}</p>
    </div>
  );
};

export default Parent0;




