import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountUp from "react-countup";

const ServicePage = () => {
  // Values for the counters
  const stats = [
    { label: "Cases Won (%)", value: 95 }, // Changed to percentage
    { label: "Trusted Clients", value: 270 },
    { label: "Dedicated Lawyers", value: 10 },
    { label: "Cases Dismissed (%)", value: 25 }, // Changed to percentage
  ];

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#284b63] text-white py-12">
        <div className="max-w-7xl mx-auto text-center mt-10">
          <h1 className="text-4xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg">
            We provide high-quality legal services to help businesses and individuals achieve their goals.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">Corporate Law</h2>
          <p className="mt-4 text-gray-700">
            Expert legal advice for businesses, from startups to multinational corporations.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">Litigation</h2>
          <p className="mt-4 text-gray-700">
            Skilled representation for civil, criminal, and commercial disputes.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-blue-900">Family Law</h2>
          <p className="mt-4 text-gray-700">
            Compassionate guidance on family-related matters including divorce and custody.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-4xl font-bold text-blue-900">
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.label.includes("(%)") ? "%" : ""}
                </h3>
                <p className="mt-4 text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;