import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";
import "./hero.css";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family-owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>
                <button onClick={() => navigate("/reserve")}>
                    Reserve a Table
                </button>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt="Delicious Mediterranean food" />
            </div>
        </section>
    );
}

export default Hero;
