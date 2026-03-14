import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Scissors, Utensils } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

// The reusable section component
export const OurServicesSection = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gray-500 font-medium text-lg mb-2">Our Services</h4>
          <Link to="/our-services" className="inline-block">
            <h2 className="text-[42px] font-bold text-primary hover:text-[#00b875] transition-colors uppercase tracking-tight">Premium Pet Services</h2>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Petflix Doctor Card */}
          <div className="bg-white rounded-[30px] p-12 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-blue-50/50 flex flex-col items-center group text-center shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Stethoscope size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[24px] font-bold text-gray-800 mb-8">Petflix Doctor</h3>
            <Link to="/services" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</Link>
          </div>

          {/* Petflix Grooming Card */}
          <div className="bg-white rounded-[30px] p-12 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-red-50/50 flex flex-col items-center group text-center shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center text-[#ff6b6b] mb-8 group-hover:bg-[#ff6b6b] group-hover:text-white transition-all duration-300">
              <Scissors size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[24px] font-bold text-gray-800 mb-8">Petflix Grooming Service</h3>
            <Link to="/services" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</Link>
          </div>

          {/* Petflix Food Card */}
          <div className="bg-white rounded-[30px] p-12 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 border border-purple-50/50 flex flex-col items-center group text-center shadow-sm">
            <div className="w-20 h-20 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <Utensils size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-[24px] font-bold text-gray-800 mb-8">Petflix Food Service</h3>
            <Link to="/services" className="text-primary font-bold text-[18px] hover:underline transition-all">More Info</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// The full page component
function OurServices() {
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Navbar />
      <OurServicesSection />
      <Footer />
    </div>
  );
}

export default OurServices;
