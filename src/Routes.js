import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage";
import ContactPage from "./pages/Contactpage";
import ServicePage from "./pages/Servicepage"; // Add more pages as needed

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Service" element={<ServicePage />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default Routing;