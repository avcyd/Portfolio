import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import "./Navbar.css";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navWrapper glass text-xs">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `navLink${isActive ? " selected" : ""}`
            }
          >
            {link.label}
            <span className="glow-line" aria-hidden="true" />
          </NavLink>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
