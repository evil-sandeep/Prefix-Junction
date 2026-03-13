import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, Clock, Star } from 'lucide-react';

function BookYourSlot() {
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
            <Link to="/booking" className="text-sm font-semibold text-primary transition-colors tracking-wide">BOOKING</Link>
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

      {/* Booking Page Hero/Form Section */}
      <section className="py-24 bg-[#fffaf5] min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-[#0c0d10] mb-6 leading-tight">
                Ready to <span className="text-primary italic">Pamper</span> Your Pet?
              </h1>
              <p className="text-[#a0a0a0] text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
                Book your session now and give your furry friend the professional care they deserve. Our expert groomers are ready at your doorstep or in our salon.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { label: "Doorstep Service", icon: "🏠" },
                   { label: "Professional Groomers", icon: "⭐" },
                   { label: "Premium Products", icon: "✨" },
                   { label: "Safe & Hygienic", icon: "🧼" }
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                     <span className="text-2xl">{item.icon}</span>
                     <span className="font-bold text-gray-800">{item.label}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Booking Form Card */}
            <div className="w-full lg:w-[500px] bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-12 border border-white">
              <h2 className="text-[32px] font-bold text-primary mb-10 tracking-tight">Book Your slot</h2>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                  />
                </div>
                <div className="relative group">
                  <select className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-gray-700 appearance-none cursor-pointer font-medium">
                    <option>Select A Service</option>
                    <option>Teeth Brushing</option>
                    <option>Ear Cleaning</option>
                    <option>Deshedding / Dematting</option>
                    <option>Shampoo & Blow Drying</option>
                    <option>Hygiene Cut</option>
                    <option>Zero Hair Cut / Trimming</option>
                    <option>Tick & Flea Treatment</option>
                    <option>Cat Zero Hair Cut with Nail Cut</option>
                    <option>Dog Boarding 24 Hours</option>
                    <option>Cat Boarding</option>
                    <option>Dog Day Care</option>
                    <option>Swimming + Shampoo Bath</option>
                    <option>Normal Bath Pack</option>
                    <option>Full Grooming Bath Pack</option>
                    <option>Advance Full Grooming Bath Pack</option>
                    <option>Full Grooming Medicated Bath Pack</option>
                    <option>Pet Resort Pack</option>
                  </select>
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-gray-700 uppercase text-xs font-bold tracking-widest"
                  />
                </div>
                <div className="relative group">
                  <select className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-gray-700 appearance-none cursor-pointer font-medium">
                    <option>Select a slot</option>
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (1 PM - 4 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#00d084] hover:bg-[#00b875] text-white font-bold py-5 rounded-xl transition-all shadow-[0_15px_30px_rgba(0,208,132,0.25)] hover:shadow-[0_20px_40px_rgba(0,208,132,0.3)] hover:-translate-y-1 active:translate-y-0"
                >
                  Book Now
                </button>
              </form>
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
                  <li key={item}><Link to={item === 'Home' ? '/' : '#'} className="hover:text-primary transition-colors">→ {item}</Link></li>
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

export default BookYourSlot;
