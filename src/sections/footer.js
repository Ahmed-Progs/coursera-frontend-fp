import React from "react";
import logo from "../assets/footerlogo.png";
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="foot">
                <div className="footer-logo">
                    <img src={logo} alt="Little Lemon Logo" />
                </div>

                <div className="footer-nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <p>Adress</p>
                    <p>phone number</p>
                    <p>email</p>
                </div>

                <div className="footer-contact">
                    <p>Adress</p>
                    <p>phone number</p>
                    <p>email</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
