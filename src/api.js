export const fetchAPI = (date) => {
    // Mock: generate available times
    return ["17:00", "18:00", "19:00", "20:00"];
};

export const submitAPI = (formData) => {
    console.log("Form submitted:", formData);
    return true; // mock success
};
