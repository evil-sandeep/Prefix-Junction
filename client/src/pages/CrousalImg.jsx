import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CrousalImg() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
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
          <Link to="/booking" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-[0_10px_30px_rgba(11,213,115,0.3)] hover:-translate-y-1">
            Book Appointment
          </Link>
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
  );
}

export default CrousalImg;
