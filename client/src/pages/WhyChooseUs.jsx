import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Heart, Headset } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// The reusable section component
export const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden" id="why-us">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Link to="/why-choose-us" className="inline-block">
            <h2 className="text-[36px] font-bold text-blue-600 mb-2 uppercase tracking-tight hover:text-primary transition-colors">Why Choose Us?</h2>
          </Link>
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
  );
};

// The full page component
const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Navbar />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
