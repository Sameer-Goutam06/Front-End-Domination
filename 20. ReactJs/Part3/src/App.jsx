/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Forms } from "./components/Forms";
import {User} from "./components/User";
import {NotFound} from "./components/Notfound";
// Components for pages

const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const Home =()=> {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>Click on a user to visit their page:</p>
      <ul>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
        <li><Link to="/user/3">User 3</Link></li>
      </ul>
    </div>
  );
}
// Navbar component
const Navbar = () => (
  <nav style={{ padding: "10px", background: "#f0f0f0" }}>
    <Link to="/" style={{ margin: "10px" }}>Home</Link>
    <Link to="/about" style={{ margin: "10px" }}>About</Link>
    <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
    <Link to="/forms" style={{ margin: "10px" }}>Forms</Link>
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
        <Route path="/forms" element={<Forms />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
