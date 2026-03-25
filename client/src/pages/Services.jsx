import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShieldCheck, Activity, Heart, Stethoscope, Scissors, Star, ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../components/SEO';

function Services() {
  const { user } = useSelector((state) => state.auth);
  
  const hasAccess = (servicePlan) => {
    if (servicePlan === 'Starter') return true;
    if (servicePlan === 'Premium') return user?.plan === 'Premium' || user?.plan === 'Elite';
    if (servicePlan === 'Elite') return user?.plan === 'Elite';
    return false;
  };

  const allServices = [
    { name: "Teeth Brushing", price: "Free", icon: <Activity size={24} />, description: "Professional dental cleaning for your pets.", plan: 'Starter' },
    { name: "Ear Cleaning", price: "₹199", icon: <Heart size={24} />, description: "Gentle and thorough ear hygiene.", plan: 'Starter' },
    { name: "Deshedding / Dematting", price: "₹499", icon: <Scissors size={24} />, description: "Remove excess fur and painful mats.", plan: 'Starter' },
    { name: "Shampoo & Blow Drying", price: "₹399", icon: <Activity size={24} />, description: "Refreshing bath and professional drying.", plan: 'Starter' },
    { name: "Hygiene Cut", price: "₹349", icon: <Scissors size={24} />, description: "Essential sanitary grooming for comfort.", plan: 'Starter' },
    { name: "Zero Hair Cut / Trimming", price: "₹599", icon: <Scissors size={24} />, description: "Full body trim or close shave.", plan: 'Starter' },
    { name: "Tick & Flea Treatment", price: "₹699", icon: <ShieldCheck size={24} />, description: "Effective pest elimination and prevention.", plan: 'Starter' },
    { name: "Cat Zero Hair Cut", price: "₹799", icon: <Scissors size={24} />, description: "Specialized grooming for feline friends.", plan: 'Starter' },
    { name: "Dog Boarding (24h)", price: "₹999", icon: <Heart size={24} />, description: "Safe and cozy stay for your dogs.", plan: 'Starter' },
    { name: "Cat Boarding", price: "₹599", icon: <Heart size={24} />, description: "Stress-free environment for cats.", plan: 'Starter' },
    { name: "Dog Day Care", price: "₹499", icon: <Activity size={24} />, description: "Supervised play and socialization.", plan: 'Starter' },
    { name: "Swimming + Shampoo", price: "₹899", icon: <Activity size={24} />, description: "Hydrotherapy and refreshing bath.", plan: 'Starter' },
    { name: "Normal Bath Pack", price: "₹499", icon: <Stethoscope size={24} />, description: "Standard cleaning and drying.", plan: 'Starter' },
    { name: "Full Grooming Pack", price: "₹1299", icon: <Scissors size={24} />, description: "Comprehensive beauty treatment.", plan: 'Starter' },
    { name: "Advance Full Grooming", price: "Free", icon: <Star size={24} />, description: "Premium styling and extra care.", plan: 'Premium' },
    { name: "Medicated Bath Pack", price: "₹1899", icon: <Stethoscope size={24} />, description: "Treatment for skin conditions.", plan: 'Starter' },
    { name: "Pet Resort Pack", price: "Free", icon: <Star size={24} />, description: "The ultimate luxury pet experience.", plan: 'Elite' }
  ];

  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <SEO 
        title="Our Services" 
        description="Explore our wide range of professional pet care services including grooming, taxi, training, walking, and boarding. Professional care for your furry friends."
        path="/services"
      />
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
            {allServices.map((service, idx) => {
              const access = hasAccess(service.plan);
              return (
                <div key={idx} className={`bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 transition-all group relative overflow-hidden ${!access ? 'opacity-90' : 'hover:shadow-xl hover:-translate-y-2'}`}>
                  {!access && (
                    <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 px-4 py-2 rounded-bl-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                       Locked <Star size={12} />
                    </div>
                  )}
                  {service.plan !== 'Starter' && access && (
                    <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-600 px-4 py-2 rounded-bl-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                       {service.plan} Benefit <Star size={12} fill="currentColor" />
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all ${!access ? 'bg-slate-100 text-slate-300' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                    {service.icon}
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                    <span className={`font-bold px-4 py-1 rounded-full text-sm ${service.price === 'Free' ? 'bg-emerald-500 text-white' : 'bg-primary text-white'}`}>{service.price}</span>
                  </div>
                  <p className="text-gray-500 mb-8 font-light leading-relaxed">
                    {service.description}
                  </p>
                  {access ? (
                    <Link to="/booking" className="text-primary font-bold hover:underline flex items-center gap-2">
                      Book Now <ArrowRight size={16} />
                    </Link>
                  ) : (
                    <Link to="/plans" className="text-slate-400 font-bold hover:text-primary transition-colors flex items-center gap-2">
                      Upgrade to Unlock <Star size={16} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Services;
