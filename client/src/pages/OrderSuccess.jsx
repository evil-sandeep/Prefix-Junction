import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle, ShoppingBag, ArrowRight, Download } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const { paymentId, amount } = location.state || { paymentId: 'N/A', amount: 0 };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit'] flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full scale-150 animate-pulse" />
          <div className="relative w-32 h-32 bg-emerald-500 rounded-[40px] flex items-center justify-center text-white shadow-2xl shadow-emerald-500/40 rotate-12">
            <CheckCircle size={64} strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Order Placed!</h1>
        <p className="text-xl text-slate-500 mb-12 max-w-xl font-medium leading-relaxed">
          Thank you for choosing Petflix Junction. Your premium pet products are being prepared for delivery.
        </p>

        <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm max-w-md w-full mb-12">
          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold uppercase tracking-widest">Payment ID</span>
              <span className="text-slate-900 font-black font-mono">{paymentId}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold uppercase tracking-widest">Amount Paid</span>
              <span className="text-2xl font-black text-[#38BDF8]">₹{amount}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold uppercase tracking-widest">Status</span>
              <span className="bg-emerald-100 text-emerald-600 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest">Success</span>
            </div>
          </div>

          <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border border-slate-100">
            <Download size={16} />
            Download Invoice
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/our-product" className="bg-[#0F172A] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl flex items-center gap-3">
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>
          <Link to="/" className="text-slate-900 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center gap-3">
            Back to Home
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OrderSuccess;
