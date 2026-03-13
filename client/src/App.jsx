import React, { useState } from 'react';
import { ShoppingCart, Mail, Phone, Clock, ShieldCheck, Activity, Heart, Headset, Stethoscope, Scissors, Utensils } from 'lucide-react';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

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
          <div className="flex flex-col items-center">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
              <path d="M50 85C50 85 20 60 20 40C20 25 35 15 50 30C65 15 80 25 80 40C80 60 50 85 50 85Z" stroke="#ff6b6b" strokeWidth="4" fill="transparent"/>
              <path d="M40 45C40 45 45 55 50 55C55 55 60 45 60 45" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="35" cy="35" r="4" fill="#ff6b6b"/>
              <circle cx="65" cy="35" r="4" fill="#ff6b6b"/>
            </svg>
            <span className="text-[11px] font-bold tracking-[2px] text-[#ff6b6b]">PETFLIX JUNCTION</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {['HOME', 'SERVICES', 'OUR PRODUCTS', 'BOOKING', 'PRICING', 'ABOUT US'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-semibold text-gray-800 hover:text-primary transition-colors tracking-wide"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-700 hover:border-primary hover:text-primary transition-all bg-gray-50/50">
              <ShoppingCart size={20} />
            </button>
            <button className="bg-[#00d084] hover:bg-[#00b875] text-white px-7 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95">
              BOOK NOW
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" 
            alt="Happy dog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 bg-gradient-to-r from-black/50 via-black/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-[650px] text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-[1.1]">Door-Step Services</h1>
            <h2 className="text-2xl lg:text-3xl font-medium mb-6 opacity-95">Convenient Home Grooming</h2>
            <p className="text-lg mb-10 opacity-80 leading-relaxed font-light">
              We bring professional grooming services to your doorstep. No more stressful car rides for your pet!
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-[0_10px_30px_rgba(11,213,115,0.3)] hover:-translate-y-1">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {[0, 1, 2].map(i => (
            <div 
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${activeSlide === i ? 'bg-primary scale-125' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </section>

      {/* About Us & Booking Section */}
      <section className="py-24 bg-white" id="booking">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            {/* Booking Form Card */}
            <div className="w-full lg:w-[450px] bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-12 border border-gray-50">
              <h2 className="text-[32px] font-bold text-primary mb-10 tracking-tight">Book Your slot</h2>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700"
                  />
                </div>
                <div className="relative group">
                  <select className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-gray-700 appearance-none cursor-pointer">
                    <option>Select A Service</option>
                    <option>Full Grooming</option>
                    <option>Bath & Brush</option>
                    <option>Nail Trimming</option>
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
                  <select className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-gray-700 appearance-none cursor-pointer">
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

            {/* About Us Content */}
            <div className="flex-1 lg:pt-6">
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
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="font-bold text-[20px] text-gray-800 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#f8f9fa] overflow-hidden" id="why-us">
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
      {/* Our Services Section */}
      <section className="py-24 bg-white" id="services">
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
              <a href="#" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</a>
            </div>

            {/* Petflix Grooming Card */}
            <div className="bg-white rounded-[30px] p-12 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-red-50/50 flex flex-col items-center group text-center shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center text-[#ff6b6b] mb-8 group-hover:bg-[#ff6b6b] group-hover:text-white transition-all duration-300">
                <Scissors size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-[24px] font-bold text-gray-800 mb-8">Petflix Grooming Service</h3>
              <a href="#" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</a>
            </div>

            {/* Petflix Food Card */}
            <div className="bg-white rounded-[30px] p-12 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-purple-50/50 flex flex-col items-center group text-center shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Utensils size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-[24px] font-bold text-gray-800 mb-8">Petflix Food Service</h3>
              <a href="#" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</a>
            </div>
          </div>
        </div>
      </section>
      {/* Holistic Care Section */}
      <section className="py-24 bg-[#fffaf5]" id="holistic-care">
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
    </div>
  );
}

export default App;
