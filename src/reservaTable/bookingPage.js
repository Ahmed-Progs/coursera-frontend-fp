import React from "react";
import BookingForm from "./bookingForm";
import { useNavigate } from "react-router-dom";
import "./bookingPage.css"; // Import the CSS file

const BookingPage = () => {
    const navigate = useNavigate();

    const handleBookingSubmit = (formData) => {
        console.log("Booking data:", formData);
        navigate("/confirmed"); // redirect after booking
    };

    return (
        <section className="booking-page-container">
            <h1 className="booking-page-title">Book a Table</h1>
            <div className="booking-page-form-wrapper">
                <BookingForm onSubmit={handleBookingSubmit} />
            </div>
        </section>
    );
};

export default BookingPage;
