import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import mainBanner from './asset/Main_banner_captsone.jpg';

const LandingPage = () => {
  return (
    <div className="font-sans">
      <Navbar />
      
      {/* Main Banner Section */}
      <section id="hero" className="relative">
        <img
          src={mainBanner}
          alt="Main Banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-[#3c6e71] bg-opacity-40 p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-[#ffffff]">
            Welcome to Nasution Dananto & Rekan
          </h1>
          <p className="mt-4 text-lg text-[#d9d9d9]">
            Your trusted legal partner since 1970.
          </p>
          <a href="#contact" className="mt-6 inline-block bg-[#284b63] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3c6e71]">
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 px-6 max-w-7xl mx-auto text-center bg-[#d9d9d9]">
        <h2 className="text-3xl font-bold text-[#353535]">About Us</h2>
        <p className="mt-4 text-[#353535] leading-relaxed">
          At Nasution Dananto & Rekan, we pride ourselves on delivering 
          tailored legal solutions to meet our clients' unique needs. 
          Our seasoned professionals bring decades of experience, ensuring 
          excellence and reliability in every case we handle.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#353535]">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-[#3c6e71]">Corporate Law</h3>
            <p className="mt-2 text-[#353535]">
              Expert legal advice for businesses, from startups to multinational corporations.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-[#3c6e71]">Litigation</h3>
            <p className="mt-2 text-[#353535]">
              Skilled representation for civil, criminal, and commercial disputes.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-[#3c6e71]">Family Law</h3>
            <p className="mt-2 text-[#353535]">
              Compassionate guidance on family-related matters including divorce and custody.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 px-6 bg-[#284b63] text-white">
        <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
        <div className="mt-8 overflow-x-auto scroll-smooth snap-x snap-mandatory">
          <div className="flex space-x-6">
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Professional, reliable, and effective. Highly recommend Nasution Dananto & Rekan!"
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- John Doe</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "They resolved our corporate issues with efficiency and skill."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Jane Smith</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
            <div className="flex-shrink-0 w-80 p-6 bg-white bg-opacity-10 rounded-lg snap-center">
              <p className="italic text-[#d9d9d9]">
                "Exceptional service from a team of true professionals."
              </p>
              <h3 className="mt-4 text-[#ffffff] font-semibold">- Richard Lee</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-6 max-w-7xl mx-auto bg-[#d9d9d9]">
        <h2 className="text-3xl font-bold text-center text-[#353535]">Contact Us</h2>
        <p className="mt-4 text-center text-[#353535]">
          Reach out to us for inquiries or consultations.
        </p>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#353535]">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#3c6e71]"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#353535]">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#3c6e71]"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-[#353535]">Message</label>
            <textarea
              id="message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-[#3c6e71]"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#284b63] text-white py-2 px-4 rounded-lg hover:bg-[#3c6e71]"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;