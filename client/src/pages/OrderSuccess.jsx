import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCheckoutAddress } from '../redux/checkoutSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle, ShoppingBag, ArrowRight, Download, MapPin, Package, CreditCard } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const address = useSelector(selectCheckoutAddress);
  
  // Destructuring with defaults for development/testing
  const { paymentId, orderId, amount } = location.state || { 
    paymentId: 'PAY' + Math.random().toString(36).substr(2, 9).toUpperCase(), 
    orderId: 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase(), 
    amount: 0 
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit'] flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-20 flex flex-col items-center justify-center">
        {/* Success Card */}
        <div className="w-full max-w-2xl bg-white rounded-[50px] p-10 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden transition-all hover:shadow-3xl hover:-translate-y-1">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/5 rounded-full -ml-32 -mb-32 blur-3xl" />

          {/* Success Animation/Icon */}
          <div className="relative flex justify-center mb-10">
            <div className="absolute inset-0 bg-emerald-500/20 blur-[40px] rounded-full scale-150 animate-pulse" />
            <div className="relative w-28 h-28 bg-emerald-500 rounded-[35px] flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 transform transition-transform animate-[bounce_2s_infinite]">
              <CheckCircle size={56} strokeWidth={3} />
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
              Your Order has been placed successfully 🎉
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-md mx-auto">
              We've received your order and we're getting it ready for your furry friend!
            </p>
          </div>

          {/* Detailed Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50/80 border border-slate-100/50 hover:bg-white transition-all hover:shadow-sm">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#38BDF8] shadow-sm">
                  <Package size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Order ID</p>
                  <p className="text-sm font-black text-slate-900 font-mono">{orderId}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50/80 border border-slate-100/50 hover:bg-white transition-all hover:shadow-sm">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-500 shadow-sm">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Payment ID</p>
                  <p className="text-sm font-black text-slate-900 font-mono">{paymentId}</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50/80 border border-slate-100/50 hover:bg-white transition-all hover:shadow-sm h-full">
              <div className="w-10 h-10 bg-white rounded-xl flex-shrink-0 flex items-center justify-center text-rose-500 shadow-sm">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Delivery Address</p>
                <div className="text-sm font-black text-slate-900 leading-relaxed">
                  <p className="mb-0.5">{address.fullName}</p>
                  <p className="text-[13px] font-bold text-slate-600 leading-snug">
                    {address.addressLine}, {address.city}, {address.state} - {address.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex-1 bg-[#0F172A] hover:bg-slate-800 text-white py-5 rounded-3xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl flex items-center justify-center gap-3 group">
              Track Order
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link to="/our-product" className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-5 rounded-3xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3">
              <ShoppingBag size={18} />
              Continue Shopping
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
            <Download size={16} />
            <span className="text-xs font-black uppercase tracking-widest">Download Invoice</span>
          </div>
        </div>
      </main>

      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
      `}} />
    </div>
  );
};

export default OrderSuccess;
