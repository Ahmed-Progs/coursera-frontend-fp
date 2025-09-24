// src/components/LandingPage.js
import React from "react";
import Hero from "./hero";         // hero section
import Specials from "./specials"; // specials section
import Testimonials from "./testimonials"; // customer reviews
import About from "./about";       // about us section

const LandingPage = () => {
    return (
        <div className="landing-page">

            {/* Hero section */}
            <section id="home">
                <Hero />
            </section>

            {/* Weekly specials */}
            <section id="specials">
                <Specials />
            </section>

            {/* Customer testimonials */}
            <section id="testimonials">
                <Testimonials />
            </section>

            {/* About section */}
            <section id="about">
                <About />
            </section>

        </div>
    );
};

export default LandingPage;
