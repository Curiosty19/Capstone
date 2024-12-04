import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className="text-lg font-bold">NASUTION DANANTO</div>
        <ul className="flex space-x-6">
          <li><Link to="#home" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="#services" className="hover:text-yellow-400">Services</Link></li>
          <li><Link to="#about" className="hover:text-yellow-400">About Us</Link></li>
          <li><Link to="#team" className="hover:text-yellow-400">Our Team</Link></li>
          <li><Link to="#contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;