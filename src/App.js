import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Landingpage";
import ContactPage from "./pages/Contactpage"; 
import ServicePage from "./pages/Servicepage"; // Ensure this import is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Service" element={<ServicePage />} />
      </Routes>
    </Router>
  );
};

export default App;