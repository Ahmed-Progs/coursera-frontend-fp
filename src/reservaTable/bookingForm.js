import React, { useState } from "react";

const BookingForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        date: "",
        time: "",
        guests: 1,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); // Pass the form data to submitForm function
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                required
            />
            <button type="submit">Book Table</button>
        </form>
    );
};

export default BookingForm;
