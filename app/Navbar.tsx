'use client';

import { useState, useEffect } from 'react';
import { FiSearch, FiPhone, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 z-50 transition-all 
        ${isMobile ? 'bg-white text-black' : 'bg-black/80 text-white'}`}>
        <h1 className="text-2xl font-bold">Papi's Place</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer hover:text-gray-300 transition">Instant Online Valuation</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Report a Maintenance Issue</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Online Payments</li>
          <li>
            <a
              href="https://wa.me/08143535266"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-green-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <FiSearch className="cursor-pointer text-xl" />
          <FiPhone className="cursor-pointer text-xl" />
          <button 
            className="md:hidden cursor-pointer text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <ul className="p-6 space-y-4">
          <li className="py-2 border-b text-lg cursor-pointer">Instant Online Valuation</li>
          <li className="py-2 border-b text-lg cursor-pointer">Report a Maintenance Issue</li>
          <li className="py-2 border-b text-lg cursor-pointer">Online Payments</li>
          <li>
            <a
              href="https://wa.me/08143535266"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 text-lg cursor-pointer text-green-600 font-semibold"
            >
              Contact via WhatsApp
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="absolute top-1/3 left-6 md:left-10 text-white z-10">
        <h1 className="text-5xl md:text-6xl font-bold">Find your dream home</h1>

        {/* Buy / Rent Toggle */}
        <div className="flex mt-4 space-x-4">
          <button 
            className="font-semibold underline"
          >
            Buy
          </button>
          <button 
            className="font-semibold opacity-70"
          >
            Rent
          </button>
        </div>

        {/* Search Bar */}
        <div className="mt-4 flex items-center bg-white p-2 rounded-lg w-72 md:w-96">
          <input
            type="text"
            placeholder="Street, Area, or Postcode"
            className="w-full px-3 py-2 outline-none text-black"
          />
          <button className="bg-red-500 p-2 rounded-lg">
            <FiSearch className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
