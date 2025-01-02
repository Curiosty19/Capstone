import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Partner_Profile from '../asset/Partner_Profile.jpg';
import { FaHandshake } from "react-icons/fa"; // You can use a handshake icon for Partners

const PartnerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Header (Navbar) */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[#284b63] text-white py-12 text-center mt-7">
        <h1 className="text-4xl font-bold mb-4">Our Partners</h1>
        <p className="text-lg">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          → Our Partners
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <img
              src={Partner_Profile} 
              alt="Our Partner Team"
              className="rounded-lg shadow-lg max-w-md mx-auto"
            />
          </div>

          {/* Text Content Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Nasution Dananto & Partners</h2>
            <p className="mb-4">
              Founded by Mr. Amir Hood Nasution, S.H., on October 30, 1970,
              Nasution Dananto & Partners has represented foreign, multinational,
              national, and individual clients to this day. We are committed to
              providing exceptional legal services and fostering strong partnerships.
            </p>
          </div>
        </div>

        {/* Partners Overview Section */}
        <div className="mt-12 bg-white shadow-lg rounded-lg p-6 text-center">
          <FaHandshake className="text-5xl text-[#284b63] mx-auto" />
          <h3 className="text-xl font-bold mt-4 text-[#284b63]">Our Partner Commitment</h3>
          <p className="mt-4 text-gray-700">
            Working with our partners is a privilege. Our clients benefit from
            a network of experts who provide valuable resources and solutions.
            We prioritize professionalism and ethical standards, ensuring a
            seamless collaboration for success.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PartnerPage;