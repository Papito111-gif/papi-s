import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold">papi's place</h2>
          <p className="text-gray-400 mt-2">Delivering quality content since 2024.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link href="/https://www.instagram.com" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Papi's Place. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
