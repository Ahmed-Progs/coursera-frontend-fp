import React from 'react';
import motorbike from '../assets/motorbike.png';
import greekSalad from '../assets/greek salad.jpg';
import lemonDessert from '../assets/lemon dessert.jpg';
import restaurant from '../assets/restaurant.jpg';
import './specials.css';


function Specials() {
    return (
        <section className="specials">
            <div>
            <div className='heads'>
            <h2>This Week's Specials!</h2>
            <button>Online Menu</button>
            </div>
            <div className="specials-cards">

                <article>
                    <img src={greekSalad} alt="Greek Salad" />
                    <h3>Greek Salad</h3>
                    <span className="price">$12.99</span>
                    <p>
                        The famous greek salad of crispy lettuce, peppers, olives and our
                        Chicago style feta cheese, garnished with crunchy garlic and rosemary
                        croutons.
                    </p>
                    <a href="#" className="order-link">
                        Order a delivery <img src={motorbike} alt="Delivery" className="delivery-icon" />

                    </a>
                </article>

                <article>
                    <img src={restaurant} alt="Bruschetta" />
                    <h3>Bruschetta</h3>
                    <span className="price">$5.99</span>
                    <p>
                        Our Bruschetta is made from grilled bread that has been smeared with
                        garlic and seasoned with salt and olive oil.
                    </p>
                    <a href="#" className="order-link">
                        Order a delivery <img src={motorbike} alt="Delivery" className="delivery-icon" />

                    </a>
                </article>

                <article>
                    <img src={lemonDessert} alt="Lemon Dessert" />
                    <h3>Lemon Dessert</h3>
                    <span className="price">$5.00</span>
                    <p>
                        This comes straight from grandma's recipe book, every last ingredient
                        has been sourced and is as authentic as can be imagined.
                    </p>
                    <a href="#" className="order-link">
                        Order a delivery <img src={motorbike} alt="Delivery" className="delivery-icon" />

                    </a>
                </article>

            </div>
            </div>
        </section>
    );
}

export default Specials;
