import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, Clock, Star, CheckCircle2 } from 'lucide-react';

function AboutUs() {
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
            <Link to="/about" className="text-sm font-semibold text-primary transition-colors tracking-wide">ABOUT US</Link>
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

      {/* About Us Hero */}
      <section className="relative py-32 bg-[#0c0d10] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0c0d10]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight">Our Story</h1>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed mb-10 font-light">
            Founded with love, Petflix Junction is dedicated to making professional pet care accessible and stress-free for every pet parent in Kendujhar.
          </p>
          <div className="flex justify-center gap-8">
             <div className="flex flex-col items-center">
               <span className="text-primary text-4xl font-bold mb-1">2025</span>
               <span className="text-white/60 text-xs uppercase tracking-widest">Established</span>
             </div>
             <div className="h-12 w-px bg-white/10"></div>
             <div className="flex flex-col items-center">
               <span className="text-primary text-4xl font-bold mb-1">500+</span>
               <span className="text-white/60 text-xs uppercase tracking-widest">Happy Pets</span>
             </div>
             <div className="h-12 w-px bg-white/10"></div>
             <div className="flex flex-col items-center">
               <span className="text-primary text-4xl font-bold mb-1">100%</span>
               <span className="text-white/60 text-xs uppercase tracking-widest">Pet Safety</span>
             </div>
          </div>
        </div>
      </section>

      {/* Detailed Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-[38px] font-bold text-primary mb-2 leading-none uppercase tracking-tight">About Us</h2>
              <h3 className="text-[30px] font-bold text-gray-900 mb-10 leading-tight">Petflix Grooming Services</h3>
              
              <div className="space-y-8 text-[18px] text-gray-500 leading-relaxed font-normal">
                <p>
                  Founded on November 10, 2025, Petflix Junction – Pet Grooming Services has 
                  quickly established itself as a trusted and comprehensive pet care provider in 
                  Kendujhar. Our mission is to deliver top-quality grooming and wellness services 
                  that ensure every pet looks, feels, and lives their best.
                </p>
                <p>
                  We proudly offer doorstep grooming services across Kendujhar, along with a 
                  state-of-the-art Pet Grooming Salon located at Mandua, near Saras Road, 
                  Kendujhar. In addition to grooming, we regularly organize pet vaccination camps, 
                  and provide a wide range of pet essentials including premium pet food, grooming 
                  accessories, toys, and treats — all available online.
                </p>
                <p>
                  Very soon, our offline store and full-service pet care center will also be launched 
                  to serve you even better. For now, all our services are conveniently available 
                  online, ensuring your pets receive care at your doorstep with just a click!
                </p>
              </div>

              {/* Checklist */}
              <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-12">
                {[
                  "Expert Groomers", "Quality Products", 
                  "Affordable Prices", "Home Service", 
                  "Safe & Hygienic", "Pet Friendly"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-5 group">
                    <div className="w-7 h-7 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={24} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-[20px] text-gray-800 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
               <div className="relative">
                 <img 
                   src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
                   alt="Pet grooming" 
                   className="rounded-[40px] shadow-2xl relative z-10"
                 />
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-[#f8f9fa]" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-gray-400 font-medium text-lg mb-2 italic">Team Members</h4>
            <h2 className="text-[46px] font-bold text-primary">Meet Our Expert Team</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { name: "Sandeep Sahu", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
              { name: "Priya Sharma", role: "Expert Groomer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
              { name: "Rahul Das", role: "Pet Stylist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
              { name: "Ananya Ray", role: "Customer Care", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop" }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-[40px] mb-6 shadow-lg aspect-[4/5] bg-white">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                     <p className="text-white text-xs font-bold uppercase tracking-[3px]">{member.role}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-[22px] font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-gray-400 font-medium uppercase text-[10px] tracking-[4px]">{member.role}</p>
                </div>
              </div>
            ))}
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

export default AboutUs;
