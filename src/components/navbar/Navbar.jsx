import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navWrapper text-xs">
        <NavLink to="/" className="selected">
          Home
        </NavLink>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
