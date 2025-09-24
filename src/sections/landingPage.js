import React, { useEffect } from "react";
import Hero from "./hero";
import Specials from "./specials";
import Testimonials from "./testimonials";
import About from "./about";

const LandingPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="landing-page">
            <section id="home">
                <Hero />
            </section>
            <section id="specials">
                <Specials />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="about">
                <About />
            </section>
        </div>
    );
};

export default LandingPage;
