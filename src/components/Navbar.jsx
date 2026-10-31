
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Home Decor", path: "/home-decor" },
    { name: "Organization", path: "/organization" },
    { name: "Fashion", path: "/fashion" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-name">CalmNest Maison</span>
        <span className="brand-tagline">A BEAUTIFUL WAY OF LIVING</span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
