import { NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navWrapper text-xs">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "selected" : "")}
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
