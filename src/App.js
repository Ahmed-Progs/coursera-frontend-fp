import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./sections/landingPage";
import BookingPage from "./reservaTable/bookingPage";
import ConfirmedBooking from "./reservaTable/confirmedBooking";
import Nav from "./sections/nav";  // renamed for clarity
import Footer from "./sections/footer";

function App() {
  return (
    <Router>
      <Nav />
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
