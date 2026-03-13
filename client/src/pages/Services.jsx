import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, Clock, ShieldCheck, Activity, Heart, Headset, Stethoscope, Scissors, Utensils, Star, MapPin, CheckCircle2 } from 'lucide-react';

function Services() {
  const allServices = [
    { name: "Teeth Brushing", price: "₹299", icon: <Activity size={24} />, description: "Professional dental cleaning for your pets." },
    { name: "Ear Cleaning", price: "₹199", icon: <Heart size={24} />, description: "Gentle and thorough ear hygiene." },
    { name: "Deshedding / Dematting", price: "₹499", icon: <Scissors size={24} />, description: "Remove excess fur and painful mats." },
    { name: "Shampoo & Blow Drying", price: "₹399", icon: <Activity size={24} />, description: "Refreshing bath and professional drying." },
    { name: "Hygiene Cut", price: "₹349", icon: <Scissors size={24} />, description: "Essential sanitary grooming for comfort." },
    { name: "Zero Hair Cut / Trimming", price: "₹599", icon: <Scissors size={24} />, description: "Full body trim or close shave." },
    { name: "Tick & Flea Treatment", price: "₹699", icon: <ShieldCheck size={24} />, description: "Effective pest elimination and prevention." },
    { name: "Cat Zero Hair Cut", price: "₹799", icon: <Scissors size={24} />, description: "Specialized grooming for feline friends." },
    { name: "Dog Boarding (24h)", price: "₹999", icon: <Heart size={24} />, description: "Safe and cozy stay for your dogs." },
    { name: "Cat Boarding", price: "₹599", icon: <Heart size={24} />, description: "Stress-free environment for cats." },
    { name: "Dog Day Care", price: "₹499", icon: <Activity size={24} />, description: "Supervised play and socialization." },
    { name: "Swimming + Shampoo", price: "₹899", icon: <Activity size={24} />, description: "Hydrotherapy and refreshing bath." },
    { name: "Normal Bath Pack", price: "₹499", icon: <Stethoscope size={24} />, description: "Standard cleaning and drying." },
    { name: "Full Grooming Pack", price: "₹1299", icon: <Scissors size={24} />, description: "Comprehensive beauty treatment." },
    { name: "Advance Full Grooming", price: "₹1599", icon: <Star size={24} />, description: "Premium styling and extra care." },
    { name: "Medicated Bath Pack", price: "₹1899", icon: <Stethoscope size={24} />, description: "Treatment for skin conditions." },
    { name: "Pet Resort Pack", price: "₹2499", icon: <Star size={24} />, description: "The ultimate luxury pet experience." }
  ];

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
            <Link to="/services" className="text-sm font-semibold text-primary transition-colors tracking-wide">SERVICES</Link>
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
            <Link to="/#booking" className="bg-[#00d084] hover:bg-[#00b875] text-white px-7 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95">
              BOOK NOW
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 bg-[#0c0d10] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale"
            alt="Background"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">Our Services</h1>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg leading-relaxed mb-10">
            From professional grooming to luxury boarding, we provide everything your pet needs to thrive. Experience the Petflix Junction difference today.
          </p>
          <div className="flex justify-center gap-4">
             <div className="flex items-center gap-2 text-primary font-bold">
               <CheckCircle2 size={20} />
               <span>Professional Care</span>
             </div>
             <div className="flex items-center gap-2 text-primary font-bold">
               <CheckCircle2 size={20} />
               <span>Safe & Hygienic</span>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                  <span className="text-primary font-bold text-lg">{service.price}</span>
                  <Link to="/booking" className="text-gray-400 hover:text-primary font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2">
                    Book Now <span className="text-xl">→</span>
                  </Link>
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

export default Services;
