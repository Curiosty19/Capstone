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
      className={`fixed top-0 left-0 w-full bg-[#284b63] text-white z-50 ${
        isScrolled ? "shadow-lg" : ""
      } transition-all`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        {/* Hamburger Menu (for Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-8 h-8 bg-[#3c6e71] rounded-full flex items-center justify-center"
        >
          <span className="material-icons">{isOpen ? "close" : "menu"}</span>
        </button>

        {/* Navigation Links (Hidden on mobile) */}
        <ul
          className={`hidden md:flex space-x-8 items-center transition-all ${
            isScrolled ? "text-base" : "text-lg"
          }`}
        >
          <li className="flex items-center space-x-2">
            <span className="material-icons">home</span>
            <Link to="/" className="hover:text-[#d9d9d9]">
              Home
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">construction</span>
            <Link to="/Service" className="hover:text-[#d9d9d9]">
              Services
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">info</span>
            <Link to="/About-Us" className="hover:text-[#d9d9d9]">
              About Us
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">group</span>
            <Link to="#team" className="hover:text-[#d9d9d9]">
              Our Team
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span className="material-icons">mail</span>
            <Link to="/Contact" className="hover:text-[#d9d9d9]">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (for small screens) */}
      {isOpen && (
        <div className="md:hidden bg-[#284b63] text-white px-6 py-4 space-y-4">
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <span className="material-icons">home</span>
              <Link to="/" className="hover:text-[#d9d9d9]">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons">construction</span>
              <Link to="/Service" className="hover:text-[#d9d9d9]">
                Services
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons">info</span>
              <Link to="/About-Us" className="hover:text-[#d9d9d9]">
                About Us
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons">group</span>
              <Link to="#team" className="hover:text-[#d9d9d9]">
                Our Team
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons">mail</span>
              <Link to="/Contact" className="hover:text-[#d9d9d9]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;