import React from 'react';
import marioA from '../assets/Mario and Adrian A.jpg';
import marioB from '../assets/Mario and Adrian b.jpg';
import './about.css';


function About() {
    return (
        <section className="about">
            <div className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a proud family-owned Mediterranean restaurant dedicated to preserving the rich traditions of our culture while sharing them with our community. Our focus has always been on creating dishes that stay true to authentic recipes, passed down through generations, while adding a modern twist that keeps every meal fresh and exciting. Each plate we serve is carefully crafted using the finest ingredients, bringing together bold flavors, vibrant colors, and time-honored techniques. Whether you’re here for a casual meal or a special occasion, our warm and welcoming atmosphere makes every visit feel like dining with family. At the heart of everything we do is a passion for Mediterranean cuisine, where tradition and innovation meet to create an unforgettable experience.
                </p>
            </div>
            <div className="about-images">
                <img src={marioA} alt="Mario and Adrian"  className='aboutimage1'/>
                <img src={marioB} alt="Mario and Adrian" className='aboutimage2'/>
            </div>
        </section>
    );
}

export default About;
