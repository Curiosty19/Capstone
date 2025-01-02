import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          {/* New Clients Button */}
          <li className="flex items-center space-x-2">
            <span className="material-icons">business</span>
            <Link to="/ClientsPage" className="hover:text-[#d9d9d9]">
              Clients
            </Link>
          </li>
          {/* Dropdown Menu */}
          <li
            className="relative group flex items-center space-x-2"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="material-icons">group</span>
            <span className="cursor-pointer hover:text-[#d9d9d9]">
              Our Team
            </span>
            <ul
              className={`absolute top-10 left-0 bg-[#3c6e71] text-white rounded-md shadow-lg py-2 w-40 transition-all ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <li className="px-4 py-2 hover:bg-[#d9d9d9] hover:text-[#284b63]">
                <Link to="/team/partners">Partner</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[#d9d9d9] hover:text-[#284b63]">
                <Link to="/team/associates">Associates</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[#d9d9d9] hover:text-[#284b63]">
                <Link to="/team/support">Support Teams</Link>
              </li>
            </ul>
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
            {/* New Clients Button in Mobile Menu */}
            <li className="flex items-center space-x-2">
              <span className="material-icons">business</span>
              <Link to="/Clients" className="hover:text-[#d9d9d9]">
                Clients
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <span className="material-icons">group</span>
              <div>
                <button
                  onClick={toggleDropdown}
                  className="hover:text-[#d9d9d9] flex items-center"
                >
                  Our Team
                  <span className="material-icons ml-2">
                    {isDropdownOpen ? "expand_less" : "expand_more"}
                  </span>
                </button>
                {isDropdownOpen && (
                  <ul className="bg-[#3c6e71] text-white rounded-md mt-2 py-2 w-40 space-y-2">
                    <li className="px-4 py-2 hover:bg-[#d9d9d9] hover:text-[#284b63]">
                      <Link to="/team/partners">Partner</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#d9d9d9] hover:text-[#284b63]">
                      <Link to="/team/associates">Associates</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-[#d9d9d9] hover:text-[#284b63]">
                      <Link to="/team/support">Support Teams</Link>
                    </li>
                  </ul>
                )}
              </div>
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