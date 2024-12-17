import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-40 h-screen bg-[#284b63] text-white transition-all z-50"
          : "w-full bg-[#284b63] text-white transition-all z-50"
      }`}
    >
      {/* Sidebar open/close button */}
      {isScrolled && (
        <div className="flex items-center p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 bg-[#3c6e71] rounded-full flex items-center justify-center z-50 mr-2"
          >
            <span className="material-icons">{isOpen ? "close" : "menu"}</span>
          </button>
          <div className="text-white text-2xl font-bold">
            <Link to="/">Logo</Link>
          </div>
        </div>
      )}

      {/* Navbar Content */}
      <div
        className={`${
          isScrolled ? "block p-4 space-y-4" : "hidden"
        }`}
      >
        <ul className="space-y-4">
          <li>
            <Link to="/" className="hover:text-[#d9d9d9]">
              Home
            </Link>
          </li>
          <li>
            <Link to="#services" className="hover:text-[#d9d9d9]">
              Services
            </Link>
          </li>
          <li>
            <Link to="#about" className="hover:text-[#d9d9d9]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="#team" className="hover:text-[#d9d9d9]">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="#contact" className="hover:text-[#d9d9d9]">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Horizontal Navbar Links */}
      {!isScrolled && (
        <ul className="flex space-x-6 px-6 py-4 items-center">
          <li>
            <Link to="/" className="hover:text-[#d9d9d9]">
              Home
            </Link>
          </li>
          <li>
            <Link to="#services" className="hover:text-[#d9d9d9]">
              Services
            </Link>
          </li>
          <li>
            <Link to="#about" className="hover:text-[#d9d9d9]">
              About Us
            </Link>
          </li>
          <li>
            <Link to="#team" className="hover:text-[#d9d9d9]">
              Our Team
            </Link>
          </li>
          <li>
            <Link to="#contact" className="hover:text-[#d9d9d9]">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;