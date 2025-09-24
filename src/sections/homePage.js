// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <section style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Welcome to Little Lemon 🍋</h1>
            <p>Enjoy authentic Mediterranean dishes with a modern twist.</p>
            <Link to="/booking">
                <button>Reserve a Table</button>
            </Link>
        </section>
    );
};

export default HomePage;
