// src/components/bookingForm.test.js
import { render, screen } from "@testing-library/react";
import BookingForm from "./bookingForm";
import React from "react";

describe("BookingForm", () => {
    test("Renders the 'Choose date' label", () => {
        const availableTimes = ["17:00", "18:00", "19:00"];

        render(<BookingForm availableTimes={availableTimes} />);

        // Check for the date label
        const labelElement = screen.getByText(/Choose date/i);
        expect(labelElement).toBeInTheDocument();

        // Check for time dropdown options
        availableTimes.forEach((time) => {
            expect(screen.getByText(time)).toBeInTheDocument();
        });
    });
});
