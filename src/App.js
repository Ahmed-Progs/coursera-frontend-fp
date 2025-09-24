import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./sections/landingPage";
import BookingPage from "./reservaTable/bookingPage";
import ConfirmedBooking from "./reservaTable/confirmedBooking";
import Navbar from "./sections/header";
import Footer from "./sections/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reserve" element={<BookingPage />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
