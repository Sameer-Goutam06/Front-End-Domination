//useRef hook in react is used to access the DOM element directly. It is used to store the reference of the DOM element.
//useRef returns a mutable object whose .current property is initialized to the passed argument (initialValue).
//The returned object will persist for the full lifetime of the component.
//useRef returns the same object reference on every render.

import { useRef } from 'react';

function Part1UseRef() {
    //Use useRef to access the input value directly without state:
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted value: ${inputRef.current.value}`); // Access value directly from ref
    inputRef.current.value = ''; // Clear input field
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Understanding useRef in React</h1>
      <input type="text" ref={inputRef} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Part1UseRef;
