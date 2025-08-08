import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold">
            <Link to="/">LiGHT</Link>
          </div>
          <div className="space-x-6 hidden md:flex">
            <Link to="/" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition">About Us</Link>
            <Link to="/centers" className="hover:text-gray-300 transition">Centers</Link>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link>
            <Link to="/initiatives" className="hover:text-gray-300 transition">Initiatives</Link>
            <Link to="/join" className="hover:text-gray-300 transition">Join Us</Link>
            <Link to="/members" className="hover:text-gray-300 transition">Members</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
