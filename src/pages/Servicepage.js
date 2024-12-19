import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <section className="bg-[#284b63] text-white py-12">
        <div className="max-w-7xl mx-auto text-center mt-10">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg">
            We provide high-quality legal services to help businesses and individuals achieve their goals.
          </p>
        </div>
      </section>
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">Corporate Law</h2>
          <p className="mt-4 text-gray-700">Expert legal advice for businesses, from startups to multinational corporations.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">Litigation</h2>
          <p className="mt-4 text-gray-700">Skilled representation for civil, criminal, and commercial disputes.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">Family Law</h2>
          <p className="mt-4 text-gray-700">Compassionate guidance on family-related matters including divorce and custody.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePage;