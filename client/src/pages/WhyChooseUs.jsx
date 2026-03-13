import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, Clock, ShieldCheck, Activity, Heart, Headset } from 'lucide-react';

function WhyChooseUs() {
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

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] font-bold text-blue-600 mb-2 uppercase tracking-tight">Why Choose Us?</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-[32px] -rotate-3 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
                  alt="Happy family with dog at home" 
                  className="relative z-10 w-full rounded-[24px] shadow-2xl object-cover h-[450px]"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-[52px] font-extrabold mb-6 leading-tight">
                <span className="text-[#ff3d3d]">Special Care</span> <span className="text-gray-900">On Pets</span>
              </h3>
              
              <div className="space-y-6 text-gray-600">
                <p className="text-[20px] font-semibold text-gray-800 flex items-center gap-2">
                  Pamper Your Pet with Petflix Junction! 🐾
                </p>
                <p className="text-[18px] leading-relaxed">
                  Give your furry friend the ultimate spa experience with our professional pet grooming services! 
                  From refreshing baths and stylish haircuts to gentle nail trimming and ear cleaning — 
                  we make sure your pet looks, feels, and smells absolutely amazing.
                </p>
                <p className="text-[18px] leading-relaxed">
                  At Petflix Junction, you'll find everything your pet loves — Petflix Treats, Petflix Food, 
                  Petflix Grooming Accessories, Petflix Toys, and much more, all in one place!
                </p>
                <p className="text-[18px] leading-relaxed">
                  Enjoy the convenience of online delivery, now available across Kendujhar and throughout India. 
                  Because every pet deserves a touch of Petflix care and love.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform shadow-sm">
                    <ShieldCheck size={30} />
                  </div>
                  <span className="text-[20px] font-bold text-gray-900">Best In Industry</span>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform shadow-sm">
                    <Activity size={30} />
                  </div>
                  <span className="text-[20px] font-bold text-gray-900">Emergency Services</span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform shadow-sm">
                    <Heart size={30} />
                  </div>
                  <span className="text-[20px] font-bold text-gray-900">Special Care</span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform shadow-sm">
                    <Headset size={30} />
                  </div>
                  <span className="text-[20px] font-bold text-gray-900">Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Fidelity Footer */}
      <footer className="bg-[#0c0d10] text-[#a0a0a0] pt-24 pb-12 overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-8">
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl w-fit">
                <img src="https://i.ibb.co/vzNf5k0/petflix-logo.png" alt="Petflix" className="h-10" />
              </div>
              <div>
                <h4 className="text-white text-lg font-bold mb-6 italic">About Us</h4>
                <p className="leading-[1.8] text-[16px]">
                  At Petflix Junction, we ensure a calm, caring, and comfortable grooming experience every time.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-8 italic">Our Services</h4>
              <ul className="space-y-4">
                {['Pet Grooming', 'Pet Taxi', 'Dog Training', 'Dog Walking', 'Pet Boarding'].map((item) => (
                  <li key={item}><Link to="/services" className="hover:text-primary transition-colors">→ {item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-8 italic">About Links</h4>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Services', 'Gallery', 'Contact Us'].map((item) => (
                  <li key={item}><Link to={item === 'Home' ? '/' : (item === 'About Us' ? '/about' : '#')} className="hover:text-primary transition-colors">→ {item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-8 italic">Newsletter</h4>
              <p className="mb-6 leading-relaxed">Subscribe to get latest updates and offers.</p>
              <div className="space-y-3">
                <input type="email" placeholder="Your Email" className="w-full bg-[#1a1b1e] border-none rounded-xl p-5 text-white outline-none" />
                <button className="w-full bg-primary text-white font-bold py-5 rounded-xl hover:bg-primary-hover transition-all">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-medium tracking-wide">© 2024 Petflix Junction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WhyChooseUs;
