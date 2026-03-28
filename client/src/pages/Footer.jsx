import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import logo from '../assets/logo.jpg';

function Footer() {
  return (
    <footer className="bg-[#0c0d10] text-[#a0a0a0] pt-24 pb-12 overflow-hidden relative" id="footer">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* About Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl w-fit group shadow-xl shadow-black/20 hover:scale-105 transition-all">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-gray-900 leading-none tracking-tight">PETFLIX</span>
                <span className="text-[8px] font-bold text-primary tracking-[2px] italic">JUNCTION</span>
              </div>
            </Link>
            <div>
              <h4 className="text-white text-lg font-bold mb-6 relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary italic">About Us</h4>
              <p className="leading-[1.8] text-[16px]">
                Grooming can sometimes be stressful for both pets and their owners – but that's where we come in! At Petflix Junction, we ensure a calm, caring, and comfortable grooming experience every time. "Because your furry friend deserves nothing but the best —"
              </p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white text-lg font-bold mb-8 relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary italic">Our Services</h4>
            <ul className="space-y-4">
              {['Pet Grooming', 'Pet Taxi', 'Dog Training', 'Dog Walking', 'Pet Boarding'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="hover:text-primary transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-primary">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white text-lg font-bold mb-8 relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary italic">About Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Gallery', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : (item === 'Services' ? '/services' : (item === 'About Us' ? '/about' : (item === 'Gallery' ? '/#gallery' : (item === 'Contact Us' ? '/#contact' : '#'))))} 
                    className="hover:text-primary transition-all duration-300 flex items-center group"
                    onClick={(e) => {
                      if ((item === 'Gallery' || item === 'Contact Us') && window.location.pathname === '/') {
                        e.preventDefault();
                        const id = item === 'Gallery' ? 'gallery' : 'contact';
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-primary">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <a 
                href="https://www.facebook.com/share/1C8yWhc6zv/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 border border-white/10"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://www.instagram.com/petflixjunction28?igsh=MWFpc2VkNnBtc3d6Zg==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:text-white transition-all duration-300 border border-white/10"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white text-lg font-bold mb-8 relative w-fit after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary italic">Newsletter</h4>
            <p className="mb-6 leading-relaxed">Subscribe to get latest updates and offers.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1a1b1e] border-none rounded-xl p-5 text-white focus:ring-2 focus:ring-primary/50 outline-none placeholder:text-gray-600 transition-all font-medium"
              />
              <button className="w-full bg-primary text-white font-bold py-5 rounded-xl hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20 active:scale-[0.98]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium tracking-wide">© 2026 Petflix Junction. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-medium">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
