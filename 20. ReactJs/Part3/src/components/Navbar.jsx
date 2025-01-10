import {Link} from "react-router-dom";
export const Navbar = () => (
    <nav style={{ padding: "10px", background: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/about" style={{ margin: "10px" }}>About</Link>
      <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      <Link to="/forms" style={{ margin: "10px" }}>Forms</Link>
    </nav>
  );