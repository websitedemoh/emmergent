import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import MyTrips from "./pages/MyTrips";
import CheckIn from "./pages/CheckIn";
import FlightStatus from "./pages/FlightStatus";
import SkyMiles from "./pages/SkyMiles";
import { Toaster } from "./components/ui/toaster";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Navigate to="/book/flights" replace />} />
          <Route path="/book/:type" element={<Book />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/flight-status" element={<FlightStatus />} />
          <Route path="/skymiles" element={<Navigate to="/skymiles/overview" replace />} />
          <Route path="/skymiles/:section" element={<SkyMiles />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
