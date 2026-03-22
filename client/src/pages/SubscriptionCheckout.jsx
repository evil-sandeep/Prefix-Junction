import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setAddress } from '../redux/checkoutSlice';
import { selectSelectedPlan, selectPlanPrice } from '../redux/planSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronLeft, User, Mail, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const SubscriptionCheckout = () => {
  const selectedPlan = useSelector(selectSelectedPlan);
  const planPrice = useSelector(selectPlanPrice);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must be 10 digits';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(setAddress(formData));
      navigate('/payment');
    }
  };

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
        <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
           <ShieldCheck className="mx-auto text-slate-200 mb-6" size={80} />
           <h2 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">No Plan Selected</h2>
           <p className="text-slate-500 font-medium mb-8">Please choose a subscription plan first to continue.</p>
           <Link to="/plans" className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-primary/20 hover:bg-primary-hover active:scale-95 transition-all">Go to Plans</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <Navbar />

      <main className="container mx-auto px-6 py-12 lg:py-20 h-full flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <div className="flex items-center gap-4 mb-12">
            <Link to="/plans" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 hover:bg-slate-50 transition-all">
              <ChevronLeft size={20} />
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Subscription <span className="text-slate-400">Checkout</span></h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-[48px] p-8 md:p-12 border border-slate-100 shadow-sm">
                <div className="mb-10">
                  <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Contact Information</h2>
                  <p className="text-slate-500 font-medium text-sm">We'll use these details for your premium account and billing.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-2 ml-1">
                      <User size={12} className="text-primary" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-8 py-5 rounded-2xl bg-slate-50 border ${errors.fullName ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-slate-900 shadow-inner`}
                    />
                    {errors.fullName && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest pl-4 mt-2">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-2 ml-1">
                        <Mail size={12} className="text-primary" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-8 py-5 rounded-2xl bg-slate-50 border ${errors.email ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-slate-900 shadow-inner`}
                      />
                      {errors.email && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest pl-4 mt-2">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2 mb-2 ml-1">
                        <Phone size={12} className="text-primary" />
                        Phone Number
                      </label>
                      <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 font-bold">+91</span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="00000 00000"
                          className={`w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border ${errors.phone ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-primary focus:bg-white transition-all font-bold text-slate-900 shadow-inner`}
                        />
                      </div>
                      {errors.phone && <p className="text-rose-500 text-[10px] font-black uppercase tracking-widest pl-4 mt-2">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="pt-10">
                    <button
                      type="submit"
                      className="group w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-3xl font-black text-xs uppercase tracking-[0.3em] transition-all active:scale-95 shadow-xl shadow-slate-200 flex items-center justify-center gap-4"
                    >
                      Continue to Payment
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-8 font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      100% Secure Checkout via SSL Encryption
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Plan Display */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-900 rounded-[48px] p-10 text-white shadow-2xl shadow-slate-900/10">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-2">Selected Plan</h3>
                    <h2 className="text-4xl font-black tracking-tight">{selectedPlan}</h2>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center ${selectedPlan === 'Premium' ? 'text-primary' : 'text-purple-400'}`}>
                    <CheckCircle2 size={28} />
                  </div>
                </div>

                <div className="space-y-5 mb-12">
                   <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-4">Features included:</p>
                   {/* We could fetch features, but for now we show a few core ones */}
                   <div className="flex items-center gap-4">
                     <div className="w-5 h-5 bg-primary/20 rounded-md flex items-center justify-center text-primary">
                       <CheckCircle2 size={12} />
                     </div>
                     <span className="text-sm font-bold text-white/80">Premium Care & Grooming</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-5 h-5 bg-primary/20 rounded-md flex items-center justify-center text-primary">
                       <CheckCircle2 size={12} />
                     </div>
                     <span className="text-sm font-bold text-white/80">24/7 Priority Support</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-5 h-5 bg-primary/20 rounded-md flex items-center justify-center text-primary">
                       <CheckCircle2 size={12} />
                     </div>
                     <span className="text-sm font-bold text-white/80">Health & Activity Tracking</span>
                   </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/40 font-black uppercase tracking-widest text-[10px] mb-1">Billing Amount</p>
                      <p className="text-4xl font-black tracking-tighter text-primary">₹{planPrice}</p>
                    </div>
                    <span className="text-white/40 font-bold text-xs mb-1 uppercase tracking-widest">/ billed now</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">Need help?</h4>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">support@petflixjunction.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SubscriptionCheckout;
