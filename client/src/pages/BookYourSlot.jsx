import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function BookYourSlot() {
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Navbar />

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

      <Footer />
    </div>
  );
}

export default BookYourSlot;
