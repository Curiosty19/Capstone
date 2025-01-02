import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Make sure to use the correct image path

const SupportTeamsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Header (Navbar) */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-[#284b63] text-white py-12 text-center mt-7">
        <h1 className="text-4xl font-bold mb-4">Our Support Teams</h1>
        <p className="text-lg">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          → Our Support Teams
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Associates+Group+Photo"
              alt="Support Team"
              className="rounded-lg shadow-lg max-w-md mx-auto"
            />
          </div>

          {/* Text Content Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Support Teams</h2>
            <p className="mb-4">
              Using our services is a privilege, because clients can access all the expertise, resources,
              and work networks they have according to their needs. Clients can also explore our work experience
              in resolving problems, asking about the initial steps for resolution, before terminating the work contract.
              In terms of providing professional legal services, we always adhere to and uphold the ethical principles
              and professionalism regulated in Law no. 18 of 2003 concerning Advocates and the Indonesian Advocate Code
              of Ethics, so that it is guaranteed to provide a sense of security for clients against various counterproductive
              things in the subsequent legal services process.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SupportTeamsPage;