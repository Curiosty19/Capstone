import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Landingpage";
import ContactPage from "./pages/Contactpage"; 
import ServicePage from "./pages/Servicepage"; 
import AboutPage from "./pages/AboutUs-Page";
import ClientsPage from "./pages/Clients-Page.js";
import AssociatesPage from "./pages/AssociatesPage";
import PartnerPage from "./pages/PartnerPage";
import SupportTeamsPage from "./pages/SupportTeamsPage"; // Ensure this import is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Service" element={<ServicePage />} />
        <Route path="/About-Us" element={<AboutPage />} />
        <Route path="/Clients" element={<ClientsPage />} />
        <Route path="/OurTeam/Associates" element={<AssociatesPage />} />
        <Route path="/OurTeam/Partner" element={<PartnerPage />} />
        <Route path="/OurTeam/SupportTeam" element={<SupportTeamsPage />} />
      </Routes>
    </Router>
  );
};

export default App;