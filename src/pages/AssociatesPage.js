import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AssociatesPage = () => {
  // List of associates
  const associates = [
    "Associate 1",
    "Associate 2",
    "Associate 3",
    "Associate 4",
    "Associate 5",
    "Associate 6",
    "Associate 7",
    "Associate 8",
  ];

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#284b63] text-white py-12">
        <div className="max-w-7xl mx-auto text-center mt-10">
          <h1 className="text-4xl font-bold">Our Associates</h1>
          <p className="mt-4 text-lg">
            Meet our skilled and professional associates who provide top-tier legal expertise.
          </p>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="py-12 px-6 flex items-center justify-between">
        <div className="w-full lg:w-1/2">
          <img
            src="https://via.placeholder.com/800x400?text=Associates+Group+Photo" // Replace with actual group photo URL
            alt="Associates Group"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2 ml-8">
          <p className="text-lg text-gray-700">
            Using our services is a privilege, because clients can access all the expertise, resources and work networks they have according to their needs. Clients can also explore our work experience in resolving problems, asking about the initial steps for resolution, before terminating the work contract. In terms of providing professional legal services, we always adhere to and uphold the ethical principles and professionalism regulated in Law no. 18 of 2003 concerning Advocates and the Indonesian Advocate Code of Ethics, so that it is guaranteed to provide a sense of security for clients against various counterproductive things in the subsequent legal services process.
          </p>
        </div>
      </section>

      {/* Associates Profile Cards */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {associates.map((associate, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center"
            >
              <img
                src="https://via.placeholder.com/150" // Placeholder image, replace with associate photos
                alt={associate}
                className="w-32 h-32 rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-[#284b63]">{associate}</h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssociatesPage;