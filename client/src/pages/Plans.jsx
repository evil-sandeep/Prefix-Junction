import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Check, Shield, Star, Zap, Crown, Loader2, ArrowRight } from 'lucide-react';
import { setSelectedPlan } from '../redux/planSlice';
import Navbar from './Navbar';
import Footer from './Footer';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/plans`);
        setPlans(data.data.plans);
      } catch (err) {
        console.error('Failed to fetch plans', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const handleChoosePlan = (plan) => {
    const price = isYearly ? plan.priceYearly : plan.priceMonthly;
    dispatch(setSelectedPlan({ planId: plan._id, name: plan.name, price }));
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Navbar />

      <main className="py-24 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-4 text-xs">Pricing Plans</h4>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              Ready to Upgrade Your <br />
              <span className="text-slate-400 font-medium">Pet's Experience?</span>
            </h1>
            <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10">
              Choose the perfect plan for your furry friend. Get access to premium grooming, health tracking, and priority booking.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-6 mt-8 p-1.5 bg-white rounded-2xl w-fit mx-auto shadow-sm border border-slate-100">
              <button 
                onClick={() => setIsYearly(false)}
                className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${!isYearly ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsYearly(true)}
                className={`px-8 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all flex items-center gap-2 ${isYearly ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Yearly
                <span className="bg-emerald-500 text-[10px] text-white px-2 py-0.5 rounded-md">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {loading ? (
              <div className="col-span-full py-20 flex flex-col items-center gap-4">
                <Loader2 className="animate-spin text-primary" size={48} />
                <p className="text-slate-400 font-black text-xs uppercase tracking-[0.2em]">Loading premium plans...</p>
              </div>
            ) : plans.map((plan) => (
              <div 
                key={plan._id}
                className={`group relative bg-white rounded-[48px] p-10 border border-slate-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] flex flex-col ${plan.name === 'Premium' ? 'scale-105 z-10 border-primary/20 shadow-xl shadow-slate-200/50' : ''}`}
              >
                {plan.name === 'Premium' && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] px-8 py-2.5 rounded-full shadow-xl shadow-primary/20">
                    Recommended
                  </div>
                )}

                <div className="mb-10 text-center">
                  <div className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-8 border transition-all duration-500 group-hover:scale-110 ${
                    plan.name === 'Starter' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
                    plan.name === 'Premium' ? 'bg-primary/10 text-primary border-primary/20' : 'bg-purple-50 text-purple-600 border-purple-100'
                  }`}>
                    {plan.name === 'Starter' ? <Zap size={32} /> : plan.name === 'Premium' ? <Shield size={32} /> : <Crown size={32} />}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{plan.description}</p>
                </div>

                <div className="mb-10 text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-black text-slate-400 tracking-tight">₹</span>
                    <span className="text-7xl font-black text-slate-900 tracking-tighter">
                      {isYearly ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    <span className="text-slate-400 font-black text-sm uppercase tracking-widest ml-1">/mo</span>
                  </div>
                </div>

                <div className="flex-grow space-y-5 mb-12">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Included in {plan.name}:</p>
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-4 group/item">
                      <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-500 flex-shrink-0 transition-all group-hover/item:scale-110 group-hover/item:bg-emerald-500 group-hover/item:text-white">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-bold text-slate-600 group-hover/item:text-slate-900 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleChoosePlan(plan)}
                  className={`group/btn w-full py-6 rounded-3xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                    plan.name === 'Premium' ? 'bg-primary text-white shadow-2xl shadow-primary/30 hover:bg-primary-hover active:scale-95' :
                    plan.name === 'Elite' ? 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95' :
                    'bg-slate-50 text-slate-900 border border-slate-100 hover:bg-slate-100 active:scale-95'
                  }`}
                >
                  Choose {plan.name}
                  <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
                
                <p className="text-center text-[10px] text-slate-400 mt-8 font-black uppercase tracking-widest">
                  Secure Checkout • No hidden fees
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Plans;
