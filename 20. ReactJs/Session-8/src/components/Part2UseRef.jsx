import  { useRef } from 'react';

function Part2UseRef() {
    //Automatically focus on the first invalid field during form validation:
    // Reset All Input Fields
    // Clear all input fields after submission

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameRef.current.value) {
        alert('Name is required');
        nameRef.current.focus(); // Focus the name field if it's empty
        return;
      }
      if (!emailRef.current.value) {
        alert('Email is required');
        emailRef.current.focus(); // Focus the email field if it's empty
        return;
      }
      alert('Form submitted successfully!');
    // Clear input fields
    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Name" />
      <input type="email" ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Part2UseRef;