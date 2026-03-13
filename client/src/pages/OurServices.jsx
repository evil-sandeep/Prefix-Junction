import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, Clock, Stethoscope, Scissors, Utensils } from 'lucide-react';

function OurServices() {
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-[13px]">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@petflixjunction.com</span>
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
          <Link to="/" className="flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
              <path d="M50 85C50 85 20 60 20 40C20 25 35 15 50 30C65 15 80 25 80 40C80 60 50 85 50 85Z" stroke="#ff6b6b" strokeWidth="4" fill="transparent"/>
              <path d="M40 45C40 45 45 55 50 55C55 55 60 45 60 45" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="35" cy="35" r="4" fill="#ff6b6b"/>
              <circle cx="65" cy="35" r="4" fill="#ff6b6b"/>
            </svg>
            <span className="text-[11px] font-bold tracking-[2px] text-[#ff6b6b]">PETFLIX JUNCTION</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">HOME</Link>
            <Link to="/services" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">SERVICES</Link>
            <Link to="/booking" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">BOOKING</Link>
            <Link to="/about" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">ABOUT US</Link>
            <Link to="/why-choose-us" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">WHY US</Link>
          </nav>
          <div className="flex items-center gap-5">
            <Link to="/booking" className="bg-[#00d084] hover:bg-[#00b875] text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">
              BOOK NOW
            </Link>
          </div>
        </div>
      </header>

      {/* Our Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-gray-500 font-medium text-lg mb-2">Our Services</h4>
            <h2 className="text-[42px] font-bold text-primary">Premium Pet Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Petflix Doctor Card */}
            <div className="bg-white rounded-[30px] p-12 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-blue-50/50 flex flex-col items-center group text-center shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Stethoscope size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-[24px] font-bold text-gray-800 mb-8">Petflix Doctor</h3>
              <Link to="/services" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</Link>
            </div>

            {/* Petflix Grooming Card */}
            <div className="bg-white rounded-[30px] p-12 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-red-50/50 flex flex-col items-center group text-center shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center text-[#ff6b6b] mb-8 group-hover:bg-[#ff6b6b] group-hover:text-white transition-all duration-300">
                <Scissors size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-[24px] font-bold text-gray-800 mb-8">Petflix Grooming Service</h3>
              <Link to="/services" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</Link>
            </div>

            {/* Petflix Food Card */}
            <div className="bg-white rounded-[30px] p-12 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-purple-50/50 flex flex-col items-center group text-center shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Utensils size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-[24px] font-bold text-gray-800 mb-8">Petflix Food Service</h3>
              <Link to="/services" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0c0d10] text-[#a0a0a0] py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2024 Petflix Junction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default OurServices;
