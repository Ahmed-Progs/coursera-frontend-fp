import React from 'react';
import customer1 from '../assets/customer1.jpeg';
import customer2 from '../assets/customer2.jpeg';
import customer3 from  '../assets/customer3.jpeg';
import './testimonials.css';


function Testimonials() {
    return (
        <section className="testimonials">
            <div>
            <h2>Testimonials</h2>
            <div className="testimonial-cards">
                <article className="articles">
                    <p className='title'>"Best Taste!"</p>
                    <div className="description">
                    <img src={customer1} alt="Customer 1" className="customers"/>
                    <div>
                    <span>Sarah</span>
                    <p>This restaurant have the best taste i’ve ever tasted</p>
                    </div>
                    </div>
                </article>
                <article className="articles">
                    <p className='title'>"Best Service!"</p>
                    <div className="description">
                    <img src={customer2} alt="Customer 2" className="customers" />
                    <div>
                    <span>Mary</span>
                    <p>They are best in their timing and the presentation of food</p>
                    </div>
                    </div>
                </article>
                <article className="articles">
                    <p className='title'>"Best Website!"</p>
                    <div className="description">
                    <img src={customer3} alt="Customer 3" className="customers"/>
                    <div>
                    <span>Alexy</span>
                    <p>The website is very easy to use and  user friendly</p>
                    </div>
                    </div>
                </article>
            </div>
            </div>
        </section>
    );
}

export default Testimonials;
