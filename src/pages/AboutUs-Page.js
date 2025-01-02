import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaBuilding, FaGavel, FaUsers, FaHandsHelping } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[#284b63] text-white py-28 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-extrabold leading-tight">Trusted Legal Advisors in Indonesia</h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            With over 50 years of dedication, Nasution Dananto & Partners provides innovative legal solutions with
            integrity, professionalism, and unwavering client commitment.
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold text-[#284b63] mb-6">A Legacy of Legal Excellence</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Established in 1970, Nasution Dananto & Partners stands as a pillar of legal expertise in Indonesia.
              Over the decades, our firm has guided businesses, individuals, and multinational corporations through
              complex legal frameworks, ensuring their continued growth and success.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Our mission is simple – to deliver strategic, results-driven legal services that empower our clients
              to make informed decisions with confidence.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/firm-overview.jpg"
              alt="Nasution Dananto Office"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#284b63]">Our Expertise</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            Our comprehensive legal services cover corporate law, dispute resolution, intellectual property, and more,
            enabling clients to thrive in dynamic environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <FaGavel className="text-5xl text-[#284b63] mx-auto mb-6" />
            <h4 className="text-xl font-semibold text-[#284b63]">Corporate Law</h4>
            <p className="mt-4 text-gray-700">
              Expertise in mergers, governance, and regulatory compliance to support business growth.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <FaUsers className="text-5xl text-[#284b63] mx-auto mb-6" />
            <h4 className="text-xl font-semibold text-[#284b63]">Dispute Resolution</h4>
            <p className="mt-4 text-gray-700">
              Resolving commercial and civil disputes efficiently to protect client interests.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <FaHandsHelping className="text-5xl text-[#284b63] mx-auto mb-6" />
            <h4 className="text-xl font-semibold text-[#284b63]">Intellectual Property</h4>
            <p className="mt-4 text-gray-700">
              Safeguarding ideas and innovations with comprehensive IP services.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-lg shadow-md text-center">
            <FaBuilding className="text-5xl text-[#284b63] mx-auto mb-6" />
            <h4 className="text-xl font-semibold text-[#284b63]">Real Estate Law</h4>
            <p className="mt-4 text-gray-700">
              Assisting with transactions, land acquisitions, and development projects.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#284b63]">Our Core Values</h2>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
            We are driven by integrity, dedication to clients, and a deep respect for the legal system.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-[#284b63]">Integrity</h3>
            <p className="mt-4 text-gray-700">Upholding the highest ethical standards in all we do.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-[#284b63]">Client Focus</h3>
            <p className="mt-4 text-gray-700">
              Building long-term relationships by understanding client needs deeply.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-[#284b63]">Excellence</h3>
            <p className="mt-4 text-gray-700">Delivering superior results through experience and innovation.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#284b63] text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold">Looking for Legal Expertise?</h2>
          <p className="text-lg mt-6 max-w-3xl mx-auto">
            Let our team of experienced attorneys guide you to success. Contact us today to schedule a consultation.
          </p>
          <a href="/contact" className="mt-8 inline-block bg-white text-[#284b63] font-semibold py-3 px-8 rounded-lg">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;