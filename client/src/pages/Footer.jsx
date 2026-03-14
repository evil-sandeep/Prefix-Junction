import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0c0d10] text-[#a0a0a0] pt-24 pb-12 overflow-hidden relative" id="footer">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* About Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl w-fit">
              <img src="https://i.ibb.co/vzNf5k0/petflix-logo.png" alt="Petflix" className="h-10" />
            </div>
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
                  <Link to={item === 'Home' ? '/' : (item === 'Services' ? '/services' : (item === 'About Us' ? '/about' : '#'))} className="hover:text-primary transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-primary">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
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
          <p className="text-sm font-medium tracking-wide">© 2024 Petflix Junction. All rights reserved.</p>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
