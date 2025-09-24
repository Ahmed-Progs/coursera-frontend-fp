import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./sections/landingPage";         // Hero, About, Specials sections included here
import BookingPage from "./reservaTable/bookingPage"; // wrapper for BookingForm
import ConfirmedBooking from "./reservaTable/confirmedBooking";
import Navbar from "./sections/header";
import Footer from "./sections/footer";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reserve" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer /> {/* Footer visible on all pages */}
    </Router>
  );
}

export default App;
