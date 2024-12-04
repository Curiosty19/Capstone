import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      
      {/* Main Banner Section */}
      <section id="hero" className="relative">
        <img
          src="your-image-url.jpg" 
          alt="Main Banner"
          className="w-full h-80 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Nasution Dananto & Rekan</h1>
          <p className="mt-4 text-lg">Your trusted legal partner since 1970.</p>
          <a href="#contact" className="mt-6 inline-block bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-900">About Us</h2>
        <p className="mt-4 text-gray-700">
          We are a professional law firm providing comprehensive legal services, committed to delivering exceptional solutions for businesses and individuals.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;