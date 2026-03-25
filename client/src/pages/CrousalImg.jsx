import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/a.jpg';

import img2 from '../assets/aa.webp';


function CrousalImg() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop",
      title: "Door-Step Services",
      subtitle: "Convenient Home Grooming",
      desc: "We bring professional grooming services to your doorstep. No more stressful car rides for your pet!"
    },
    {
      img: img2,
      title: "Premium Care",
      subtitle: "Expert Grooming Experts",
      desc: "Our certified professionals use only the highest quality products for your furry friends."
    },
    {
      img: img1,
      title: "Healthy & Happy",
      subtitle: "Nutritional Excellence",
      desc: "Discover our premium selection of organic treats and supplements for a vibrant pet life."
    }
  ];

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Hero Backgrounds */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.img}
            alt={slide.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${activeSlide === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-[650px] text-white animate-in slide-in-from-left duration-700">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-[1.1] transition-all duration-500">
            {slides[activeSlide].title}
          </h1>
          <h2 className="text-2xl lg:text-3xl font-medium mb-6 opacity-95 transition-all duration-500">
            {slides[activeSlide].subtitle}
          </h2>
          <p className="text-lg mb-10 opacity-80 leading-relaxed font-light transition-all duration-500">
            {slides[activeSlide].desc}
          </p>
          <Link to="/booking" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full text-lg font-bold transition-all shadow-[0_10px_30px_rgba(11,213,115,0.3)] hover:-translate-y-1 inline-block">
            Book Appointment
          </Link>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${activeSlide === i ? 'bg-primary scale-125' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CrousalImg;
