'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiSearch, FiPhone, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/image1.jpg')" }}>
      <nav className="sticky top-0 left-0 w-full flex justify-between items-center px-10 py-5 text-white bg-black  ">
        <h1 className="text-2xl font-bold text-white ">papi's Place</h1>
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer">Instant Online Valuation</li>
          <li className="cursor-pointer">Report a Maintenance Issue</li>
          <li className="cursor-pointer">Online Payments</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex items-center space-x-4">
          <FiSearch className="cursor-pointer text-xl" />
          <FiPhone className="cursor-pointer text-xl" />
          <FiMenu className="md:hidden cursor-pointer text-xl" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-48 bg-white text-black shadow-lg p-4 md:hidden">
          <ul>
            <li className="py-2 border-b text-6xl">Instant Online Valuation</li>
            <li className="py-2 border-b text-6xl">Report a Maintenance Issue</li>
            <li className="py-2 border-b text-3xl">Online Payments</li>
            <li className="py-2 text-3xl">Contact</li>
          </ul>
        </div>
      )}

      <div className="absolute top-1/3 left-10 text-white">
        <h1 className="text-6xl font-bold text-white ">Find your dream home</h1>
        <div className="flex mt-4 space-x-4">
          <span className="font-semibold underline">Buy</span>
          <span className="font-semibold">Rent</span>
        </div>
        <div className="mt-4 flex items-center bg-white p-2 rounded-lg w-96">
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
