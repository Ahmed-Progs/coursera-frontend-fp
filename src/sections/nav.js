import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hamburgerIcon from "../assets/hamburgermenu.svg";
import logo from "../assets/logo.png";
import "./nav.css";

function Nav() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleNavClick = (sectionId) => {
        setIsOpen(false);
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollToSection(sectionId), 150);
        } else {
            scrollToSection(sectionId);
        }
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo" onClick={() => navigate("/")}>
                <img src={logo} alt="Logo" />
            </div>

            {/* Desktop nav items */}
            <ul className={`nav-list ${isOpen ? "open" : ""}`}>
                <li onClick={() => { setIsOpen(false); navigate("/"); }} className="nav-item">Home</li>
                <li onClick={() => handleNavClick("about")} className="nav-item">About</li>
                <li onClick={() => handleNavClick("specials")} className="nav-item">Menu</li>
                <li onClick={() => handleNavClick("hero")} className="nav-item">Reservations</li>
                <li onClick={() => handleNavClick("specials")} className="nav-item">Order Online</li>
                <li onClick={() => { setIsOpen(false); navigate("/login"); }} className="nav-item">Login</li>
            </ul>

            {/* Hamburger */}
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <img src={hamburgerIcon} alt="Menu" />
            </div>
        </nav>
    );
}

export default Nav;
