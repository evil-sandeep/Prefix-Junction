import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { setAddress } from '../redux/checkoutSlice';
import { selectCartItems, selectCartTotalAmount } from '../redux/cartSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { ChevronLeft, MapPin, Phone, User, Home, City, Landmark, ArrowRight, ShieldCheck } from 'lucide-react';

const Address = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    addressLine: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must be 10 digits';
    }
    if (!formData.addressLine.trim()) newErrors.addressLine = 'Address Line is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d+$/.test(formData.pincode)) {
      newErrors.pincode = 'Pincode must be numeric';
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

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <Navbar />

      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/cart" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 hover:bg-slate-50 transition-all">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Shipping Details</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Address Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <User size={14} className="text-[#38BDF8]" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.fullName ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-[#38BDF8] focus:bg-white transition-all font-medium`}
                    />
                    {errors.fullName && <p className="text-rose-500 text-xs font-bold pl-2">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Phone size={14} className="text-[#38BDF8]" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.phone ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-[#38BDF8] focus:bg-white transition-all font-medium`}
                    />
                    {errors.phone && <p className="text-rose-500 text-xs font-bold pl-2">{errors.phone}</p>}
                  </div>
                </div>

                {/* Address Line */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Home size={14} className="text-[#38BDF8]" />
                    Address Line
                  </label>
                  <input
                    type="text"
                    name="addressLine"
                    value={formData.addressLine}
                    onChange={handleChange}
                    placeholder="Street, Apartment, Suite, etc."
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.addressLine ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-[#38BDF8] focus:bg-white transition-all font-medium`}
                  />
                  {errors.addressLine && <p className="text-rose-500 text-xs font-bold pl-2">{errors.addressLine}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* City */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <City size={14} className="text-[#38BDF8]" />
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.city ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-[#38BDF8] focus:bg-white transition-all font-medium`}
                    />
                    {errors.city && <p className="text-rose-500 text-xs font-bold pl-2">{errors.city}</p>}
                  </div>

                  {/* State */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <Landmark size={14} className="text-[#38BDF8]" />
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.state ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-[#38BDF8] focus:bg-white transition-all font-medium`}
                    />
                    {errors.state && <p className="text-rose-500 text-xs font-bold pl-2">{errors.state}</p>}
                  </div>

                  {/* Pincode */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <MapPin size={14} className="text-[#38BDF8]" />
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Enter pincode"
                      className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.pincode ? 'border-rose-500' : 'border-slate-100'} focus:outline-none focus:border-[#38BDF8] focus:bg-white transition-all font-medium`}
                    />
                    {errors.pincode && <p className="text-rose-500 text-xs font-bold pl-2">{errors.pincode}</p>}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="submit"
                    className="w-full bg-[#0F172A] hover:bg-slate-800 text-white py-5 rounded-[24px] font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-2xl flex items-center justify-center gap-3"
                  >
                    Continue to Payment
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Cart Summary Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm sticky top-24">
              <h2 className="text-2xl font-black mb-8 tracking-tight text-slate-900">Order Summary</h2>
              
              <div className="max-h-[300px] overflow-y-auto mb-8 pr-2 space-y-4 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.productId} className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-400 font-medium tracking-wide">Qty: {item.quantity}</span>
                        <span className="text-sm font-black text-slate-900 tracking-tight">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-50 mb-8">
                <div className="flex justify-between text-slate-400 font-bold text-xs uppercase tracking-widest">
                  <span>Subtotal</span>
                  <span className="text-slate-900">₹{totalAmount}</span>
                </div>
                <div className="flex justify-between text-slate-400 font-bold text-xs uppercase tracking-widest">
                  <span>Shipping</span>
                  <span className="text-[#38BDF8]">FREE</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-900 mb-8 flex justify-between items-end">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Total Amount</span>
                <span className="text-3xl font-black text-slate-900 tracking-tighter">₹{totalAmount}</span>
              </div>

              <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase tracking-widest bg-emerald-50 px-4 py-2 rounded-lg">
                <ShieldCheck size={14} />
                <span>Secure Checkout Process</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f8fafc; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
    </div>
  );
};

export default Address;
