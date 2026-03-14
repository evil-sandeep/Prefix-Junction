import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Activity, Heart, Stethoscope, Scissors, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

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
      <Navbar />

      <section className="py-24 bg-[#fffaf5]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our wide range of professional pet care services designed to keep your furry friends happy and healthy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, idx) => (
              <div key={idx} className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  <span className="bg-primary text-white font-bold px-4 py-1 rounded-full text-sm">{service.price}</span>
                </div>
                <p className="text-gray-500 mb-8 font-light leading-relaxed">
                  {service.description}
                </p>
                <Link to="/booking" className="text-primary font-bold hover:underline">Book Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
