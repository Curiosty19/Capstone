import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      {/* Header (Navbar) */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-[#284b63] text-white py-12 text-center mt-5">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">
          We're here to help. Reach out to us using the information below or
          book an appointment.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p>
            Whether you have questions or need legal advice, feel free to
            contact us. We're here to assist you.
          </p>
          <div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p>info@lawfirm.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Address</h3>
            <p>123 Legal Lane, Suite 456, Cityville, USA</p>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full h-72">
            <iframe
                className="w-full h-full rounded-md shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d513.4115510479977!2d106.8116661894784!3d-6.214002913068771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6ac7470d3db%3A0xd60c4b031f89dc71!2sNasution%2C%20Dananto%20%26%20Rekan!5e0!3m2!1sen!2sid!4v1734584368570!5m2!1sen!2sid"
                title="Google Maps"
                allowFullScreen=""
                loading="lazy"
            />
        </div>
      </div>

      {/* Appointment Booking */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            Book an Appointment
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#284b63]"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#284b63]"
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-semibold">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#284b63]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#284b63]"
                rows="4"
                placeholder="Briefly describe your legal issue"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#284b63] text-white py-2 px-4 rounded-md hover:bg-[#3c6e71] transition"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;