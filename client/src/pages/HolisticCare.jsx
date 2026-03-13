import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Clock, ShoppingCart } from 'lucide-react';

function HolisticCare() {
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
            <Link to="/our-services" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">OUR SERVICES</Link>
            <Link to="/booking" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">BOOKING</Link>
            <Link to="/about" className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide">ABOUT US</Link>
          </nav>
          <div className="flex items-center gap-5">
            <Link to="/booking" className="bg-[#00d084] hover:bg-[#00b875] text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">
              BOOK NOW
            </Link>
          </div>
        </div>
      </header>

      {/* Holistic Care Section */}
      <section className="py-24 bg-[#fffaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h4 className="text-gray-400 font-medium text-lg mb-2">Caring Beyond Grooming</h4>
            <h2 className="text-[46px] font-bold text-primary">Simply the best for your pet</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Curated by Vets Card */}
            <div className="bg-white rounded-[40px] p-12 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-white">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-10 border-8 border-[#fef7f0] shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?q=80&w=2070&auto=format&fit=crop" 
                  alt="Curated by Vets" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[26px] font-bold text-gray-900 mb-6">Curated by Vets</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">
                Resident veterinarians validate every tool, product, and comfort ritual so treatments stay clinically safe and pet approved.
              </p>
            </div>

            {/* Clean & Transparent Card */}
            <div className="bg-white rounded-[40px] p-12 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-white">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-10 border-8 border-[#fef7f0] shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Clean & Transparent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[26px] font-bold text-gray-900 mb-6">Clean & Transparent</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">
                Sanitized tools, clean ingredients, and real-time updates mean you always know exactly what touches your companion.
              </p>
            </div>

            {/* Holistic Care Card */}
            <div className="bg-white rounded-[40px] p-12 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-white">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-10 border-8 border-[#fef7f0] shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" 
                  alt="Holistic Care" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[26px] font-bold text-gray-900 mb-6">Holistic Care</h3>
              <p className="text-gray-500 text-[17px] leading-relaxed">
                We nurture the emotional, physical, and social needs of every pet with calming techniques and post-care coaching.
              </p>
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

export default HolisticCare;
