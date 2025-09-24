import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hamburgerIcon from "../assets/hamburgermenu.svg";
import logo from "../assets/logo.png";
import "./nav.css";

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Click handler for nav links that scroll to sections
  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    navigate("/"); // navigate to home first
    setTimeout(() => scrollToSection(sectionId), 200); // delay ensures the section exists
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Nav links */}
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li onClick={() => navigate("/")} className="nav-item">Home</li>
        <li onClick={() => handleNavClick("about")} className="nav-item">About</li>
        <li onClick={() => handleNavClick("specials")} className="nav-item">Menu</li>
        <li onClick={() => handleNavClick("hero")} className="nav-item">Reservations</li>
        <li onClick={() => handleNavClick("specials")} className="nav-item">Order Online</li>
        <li onClick={() => navigate("/login")} className="nav-item">Login</li>
      </ul>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src={hamburgerIcon} alt="Menu" />
      </div>
    </nav>
  );
}

export default Nav;
