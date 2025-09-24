import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hamburgerIcon from "../assets/hamburgermenu.svg";
import logo from "../assets/logo.png";
import "./nav.css";

function Nav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);

    if (window.location.pathname !== "/") {
      // navigate home and pass sectionId in state
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // already on home, scroll immediately
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />
      </div>

      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li onClick={() => navigate("/")} className="nav-item">Home</li>
        <li onClick={() => handleNavClick("about")} className="nav-item">About</li>
        <li onClick={() => handleNavClick("specials")} className="nav-item">Menu</li>
        <li onClick={() => handleNavClick("hero")} className="nav-item">Reservations</li>
        <li onClick={() => handleNavClick("specials")} className="nav-item">Order Online</li>
        <li onClick={() => navigate("/login")} className="nav-item">Login</li>
      </ul>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src={hamburgerIcon} alt="Menu" />
      </div>
    </nav>
  );
}

export default Nav;
