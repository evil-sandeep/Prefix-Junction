import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, Clock } from 'lucide-react';

function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-[13px]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@petflixjunction.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>support@petflixjunction.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              <span>Mon - Sun: 9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white py-4 sticky top-0 z-[100] shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
              <path d="M50 85C50 85 20 60 20 40C20 25 35 15 50 30C65 15 80 25 80 40C80 60 50 85 50 85Z" stroke="#ff6b6b" strokeWidth="4" fill="transparent"/>
              <path d="M40 45C40 45 45 55 50 55C55 55 60 45 60 45" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="35" cy="35" r="4" fill="#ff6b6b"/>
              <circle cx="65" cy="35" r="4" fill="#ff6b6b"/>
            </svg>
            <span className="text-[11px] font-bold tracking-[2px] text-[#ff6b6b]">PETFLIX JUNCTION</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">HOME</Link>
            <Link to="/services" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">SERVICES</Link>
            <a href="/#our-products" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">OUR PRODUCTS</a>
            <Link to="/booking" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">BOOKING</Link>
            <a href="/#pricing" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">PRICING</a>
            <Link to="/about" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">ABOUT US</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-700 hover:border-primary hover:text-primary transition-all bg-gray-50/50">
              <ShoppingCart size={20} />
            </button>
            <Link to="/booking" className="bg-[#00d084] hover:bg-[#00b875] text-white px-7 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95">
              BOOK NOW
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
