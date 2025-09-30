import React, { useState } from "react";
import logo from "../assets/Home/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoUrl = "https://placehold.co/120x50/111827/FFFFFF?text=LiGHT"; // Placeholder for logo

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center space-x-2">
          <img src={logo} alt="LiGHT Logo" className="h-13 w-auto" />
            <a href="/" className="text-2xl font-bold hidden sm:block">LiGHT</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-gray-300 transition">Home</a>
            <a href="/about" className="hover:text-gray-300 transition">About Us</a>
            <a href="/centers" className="hover:text-gray-300 transition">Centers</a>
            <a href="/contact" className="hover:text-gray-300 transition">Contact Us</a>
            <a href="/initiatives" className="hover:text-gray-300 transition">Initiatives</a>
            <a href="/join" className="hover:text-gray-300 transition">Join Us</a>
            <a href="/members" className="hover:text-gray-300 transition">Members</a>
            <a href="https://www.gyws.org/donate" target="_blank" rel="noopener noreferrer" className="inline-block -mt-0.5 px-2 pb-1 pt-0.1  text-lg text-black bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105">
              Donate Now
            </a>
          </div>

          {/* Mobile Menu Button & Donate Button */}
          <div className="md:hidden flex items-center">
             <a href="https://www.gyws.org/donate" target="_blank" rel="noopener noreferrer" className="inline-block -mt-1 px-2 pb-0.2 pt-0 text-lg text-black bg-[rgb(230,197,37)] hover:bg-[rgb(200,167,20)] rounded-sm transition-all duration-300 hover:scale-105">
              Donate
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for hamburger menu */}
              {!isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                // Icon for close menu
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {/* Added transition for a smooth slide-down effect */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/about" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>
          <a href="/centers" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Centers</a>
          <a href="/contact" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          <a href="/initiatives" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Initiatives</a>
          <a href="/join" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Join Us</a>
          <a href="/members" className="text-gray-300 hover:bg-gray-800 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Members</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
