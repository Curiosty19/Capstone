import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicePage = () => {
  // Data for services
  const services = [
    {
      title: "Corporate Law",
      description:
        "Corporate law focuses on the legal frameworks that govern businesses, from startups to multinational corporations. Our corporate law practice provides comprehensive services to help businesses thrive while maintaining compliance with regulations. We assist with company formation, drafting shareholder agreements, and structuring partnerships. Our team advises on mergers and acquisitions, contract negotiations, and corporate governance to ensure your business operations run smoothly. We also provide legal counsel on intellectual property, employment law, and regulatory compliance, safeguarding your company’s interests. In an ever-changing business environment, proactive legal planning is essential. Whether you’re seeking to expand globally or protect your assets, our corporate law expertise ensures your business is legally secure and well-positioned for growth.",
      image: "https://via.placeholder.com/600x400?text=Corporate+Law", // Placeholder image
    },
    {
      title: "Litigation",
      description:
        "Litigation law encompasses the process of taking legal action to resolve disputes in court. Whether you’re facing a civil, criminal, or commercial matter, our expert litigators are here to represent you at every stage of the process. We handle a wide range of disputes, including breach of contract, property disputes, shareholder disagreements, and fraud cases. In criminal litigation, we provide robust defense strategies for individuals or organizations accused of crimes, ensuring your rights are upheld. Our commercial litigation services help businesses navigate conflicts related to mergers, acquisitions, intellectual property, and more. Litigation can be complex and time-consuming, but our experienced team ensures that you receive personalized attention and practical advice. We aim to achieve favorable outcomes through meticulous preparation, negotiation, and advocacy, whether in trial courts, appellate courts, or arbitration settings.",
      image: "https://via.placeholder.com/600x400?text=Litigation", // Placeholder image
    },
    {
      title: "Family Law",
      description:
        "Family law deals with sensitive issues that affect the most personal aspects of life. Our compassionate team provides guidance and legal support for a variety of family-related matters, ensuring that you are protected and well-represented during challenging times. We assist clients with divorce proceedings, child custody and visitation arrangements, spousal support, and property division. Additionally, we handle prenuptial and postnuptial agreements to help couples plan for their future. In cases involving children, we prioritize their welfare and strive for resolutions that promote their best interests. Beyond disputes, we also provide legal support for adoption, guardianship, and estate planning. Family law requires not only a deep understanding of legal complexities but also empathy and discretion. Our goal is to help you navigate these emotional situations with confidence and clarity.",
      image: "https://via.placeholder.com/600x400?text=Family+Law", // Placeholder image
    },
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

      <Footer />
    </div>
  );
};

export default ServicePage;