import React from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./reservaTable/bookingForm";
import { submitAPI } from "./api"; // Make sure this is the API function from previous exercises

const Main = () => {
    const navigate = useNavigate();

    const submitForm = async (formData) => {
        const success = await submitAPI(formData);
        if (success) {
            navigate("/confirmed"); // Navigate to booking confirmation page
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <h1>Book Your Table</h1>
            <BookingForm onSubmit={submitForm} />
        </div>
    );
};

export default Main;
