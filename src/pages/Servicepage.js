import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CountUp from "react-countup";

const ServicePage = () => {
  // Data for services
  const services = [
    {
      title: "Corporate Law",
      description:
        "Expert legal advice for businesses, from startups to multinational corporations. We assist with company formation, compliance, mergers, and acquisitions.",
      image: "https://via.placeholder.com/600x400?text=Corporate+Law", // Placeholder image
    },
    {
      title: "Litigation",
      description:
        "Skilled representation for civil, criminal, and commercial disputes. Our experienced litigators advocate for you in every step of the process.",
      image: "https://via.placeholder.com/600x400?text=Litigation", // Placeholder image
    },
    {
      title: "Family Law",
      description:
        "Compassionate guidance on family-related matters including divorce, child custody, and estate planning. We ensure your rights are protected.",
      image: "https://via.placeholder.com/600x400?text=Family+Law", // Placeholder image
    },
  ];

  // Values for the counters
  const stats = [
    { label: "Cases Won (%)", value: 95 },
    { label: "Trusted Clients", value: 270 },
    { label: "Dedicated Lawyers", value: 10 },
    { label: "Cases Dismissed (%)", value: 25 },
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

      {/* Dedicated Service Sections */}
      <section className="py-12 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center mb-12`}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 md:px-8 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#284b63]">{service.title}</h2>
              <p className="mt-4 text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
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