/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Components for pages
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

// Navbar component
const Navbar = () => (
  <nav style={{ padding: "10px", background: "#f0f0f0" }}>
    <Link to="/" style={{ margin: "10px" }}>Home</Link>
    <Link to="/about" style={{ margin: "10px" }}>About</Link>
    <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
  </nav>
);

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
