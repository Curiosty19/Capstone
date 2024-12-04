import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AnotherPage from "./AnotherPage"; // Add more pages as needed

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/another-page" element={<AnotherPage />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default Routing;