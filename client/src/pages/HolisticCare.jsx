import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import vet from '../assets/aaa.jpg';


// The reusable section component
export const HolisticCareSection = () => {
  return (
    <section className="py-24 bg-[#fffaf5]" id="holistic-care">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h4 className="text-gray-400 font-medium text-lg mb-2 italic">Caring Beyond Grooming</h4>
          <Link to="/holistic-care" className="inline-block">
            <h2 className="text-[46px] font-bold text-primary hover:text-[#00b875] transition-colors uppercase tracking-tight">Simply the best for your pet</h2>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Curated by Vets Card */}
          <div className="bg-white rounded-[40px] p-12 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)] flex flex-col items-center text-center shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-white">
            <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-10 border-8 border-[#fef7f0] shadow-inner">
              <img
                src={vet}
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
  );
};

// The full page component
function HolisticCare() {
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Navbar />
      <HolisticCareSection />
      <Footer />
    </div>
  );
}

export default HolisticCare;
