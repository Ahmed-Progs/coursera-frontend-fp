import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./hero";
import Specials from "./specials";
import Testimonials from "./testimonials";
import About from "./about";

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <div className="landing-page">
      <section id="home"><Hero /></section>
      <section id="specials"><Specials /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="about"><About /></section>
    </div>
  );
};

export default LandingPage;
