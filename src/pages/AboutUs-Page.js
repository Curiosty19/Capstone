import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Partner_Profile from '../asset/Partner_Profile.jpg';
import { FaEye, FaHandsHelping } from "react-icons/fa"; // Importing icons

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Header (Navbar) */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[#284b63] text-white py-12 text-center mt-7">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          → About Us
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <img
              src={Partner_Profile} 
              alt="Team of Nasution Dananto & Partners"
              className="rounded-lg shadow-lg max-w-md mx-auto"
            />
          </div>

          {/* Text Content Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Nasution Dananto & Partners</h2>
            <p className="mb-4">
              Founded by Mr. Amir Hood Nasution, S.H., on October 30, 1970,
              Nasution Dananto & Partners has represented foreign, multinational,
              national, and individual clients to this day.
            </p>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaEye className="text-5xl text-[#284b63] mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-[#284b63]">Vision</h3>
            <p className="mt-4 text-gray-700">
              Recognized as an internationally standard law firm, with
              excellence, competence, professionalism, innovation, and
              trustworthiness, focusing on human potential.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaHandsHelping className="text-5xl text-[#284b63] mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-[#284b63]">Mission</h3>
            <p className="mt-4 text-gray-700">
              Providing high-quality legal services through consultations and
              legal assistance for businesses, government agencies, and
              individuals, with a focus on the regulations, laws, and legal
              frameworks applicable in the Republic of Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;