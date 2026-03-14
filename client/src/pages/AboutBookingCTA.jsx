import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const AboutBookingCTA = () => {
  return (
    <section className="py-24 bg-white" id="booking">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Booking Form Card (Left Side) */}
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
                className="w-full bg-primary hover:bg-[#00b875] text-white font-bold py-5 rounded-xl transition-all shadow-[0_15px_30px_rgba(0,173,111,0.25)] hover:shadow-[0_20px_40px_rgba(0,173,111,0.3)] hover:-translate-y-1 active:translate-y-0"
              >
                Book Now
              </button>
            </form>
          </div>

          {/* About Us Content (Right Side) */}
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

        </div>
      </div>
    </section>
  );
};

export default AboutBookingCTA;
