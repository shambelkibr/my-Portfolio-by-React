import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/global.css";
import Home from "./Home";

function Navbar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="navbar">
      <h1 className="logo">Sham Dev</h1>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        className={menuOpen ? "hamburger open" : "hamburger"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <button className="theme-btn" onClick={() => setDark(!dark)}>
        {dark ? "☀" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
