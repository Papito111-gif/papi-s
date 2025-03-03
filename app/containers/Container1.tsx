'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Container1() {
  return (
    <section 
      className="bg-white flex flex-col md:flex-row items-center justify-between px-6 py-12 md:px-12 gap-6 w-full max-w-7xl mx-auto"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 space-y-4 text-left">
        <h4 className="text-sm font-semibold text-gray-500">WHAT WE DO</h4>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          Helping you on your property journey
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-lg">
          papi's place is an award-winning estate agency, established in 1989, with 10 offices across the South East and South London.
          We offer our clients a unique approach to Sales, Lettings, and Investments, combined with industry-leading products,
          unrivaled customer service, and a commitment to excellence. Our outlook is innovative, professional yet friendly, with
          highly trained and motivated staff. Contact us today to begin your property journey.
        </p>
        <div className="flex justify-start">
          <Link href="#">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition">
              Find out more
            </button>
          </Link>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image 
            src="/image 2.jpg" 
            alt="Property Journey Comic" 
            width={400} 
            height={200} 
            layout="responsive" 
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
