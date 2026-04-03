import { useState, useEffect } from "react";
import "../styles/navbar.css";
import "../styles/global.css";
import logoImage from "../assets/Logo.jpg";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const section = sections[index];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="brand">
        <a href="#home"className="Logo1">
        <img  src={logoImage} alt="Shanbel Kibre logo" className="logo-image" />
          <h1 className="logo">Sham Dev</h1>
        </a>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={activeSection === item.id ? "active-link" : ""}
              onClick={() => {
                setMenuOpen(false);
                setActiveSection(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
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
