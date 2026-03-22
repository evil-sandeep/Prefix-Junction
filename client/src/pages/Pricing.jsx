import React, { useState } from 'react';
import { Check, Shield, Star, Zap, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for a quick refresh and maintenance.",
      price: isYearly ? 799 : 999,
      icon: <Zap size={24} />,
      features: [
        "Basic Bath & Brush",
        "Nail Trimming",
        "Ear Cleaning",
        "Standard Shampoo",
        "15 min Consultation"
      ],
      color: "bg-blue-50 text-blue-600",
      buttonStyle: "bg-slate-100 text-slate-900 hover:bg-slate-200"
    },
    {
      name: "Premium",
      description: "Our most popular choice for ultimate care.",
      price: isYearly ? 1499 : 1899,
      icon: <Shield size={24} />,
      popular: true,
      features: [
        "Full Styling & Haircut",
        "Deep Conditioning",
        "Teeth Brushing",
        "Medicated Shampoo",
        "30 min Expert Grooming",
        "Free Pet Taxi (5km)"
      ],
      color: "bg-primary/10 text-primary",
      buttonStyle: "bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/20"
    },
    {
      name: "Elite",
      description: "The VIP experience for your furry family.",
      price: isYearly ? 2499 : 2999,
      icon: <Crown size={24} />,
      features: [
        "Full Body Pampering",
        "Skin & Coat Treatment",
        "Paw Pad Therapy",
        "Luxury Spa Aromatherapy",
        "Priority Booking",
        "Monthly Health Report",
        "Unlimited Consultations"
      ],
      color: "bg-purple-50 text-purple-600",
      buttonStyle: "bg-slate-900 text-white hover:bg-slate-800"
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]" id="pricing">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h4 className="text-[#38BDF8] font-bold uppercase tracking-[0.2em] mb-4 text-sm">Service Plans</h4>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Premium Packages for <br />
            <span className="text-slate-400">Exceptional Pet Care</span>
          </h2>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-bold ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-slate-200 rounded-full relative transition-all p-1"
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-all transform ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly</span>
            <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase px-2 py-1 rounded-md tracking-widest">Save 20%</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-[48px] p-10 border border-slate-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] flex flex-col ${plan.popular ? 'scale-105 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-10 flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl ${plan.color} flex items-center justify-center mb-6`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-center font-medium text-sm leading-relaxed px-4">{plan.description}</p>
              </div>

              <div className="mb-10 text-center">
                <div className="flex items-end justify-center gap-1">
                  <span className="text-2xl font-black text-slate-400 mb-2">₹</span>
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                  <span className="text-slate-400 font-bold mb-2">/mo</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm font-bold text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/booking"
                className={`w-full py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all text-center ${plan.buttonStyle}`}
              >
                Choose {plan.name}
              </Link>
              
              <p className="text-center text-[10px] text-slate-400 mt-6 font-bold uppercase tracking-widest">
                Cancel Anytime • No hidden fees
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <PricingSection />
            <Footer />
        </div>
    )
}

export default Pricing;
