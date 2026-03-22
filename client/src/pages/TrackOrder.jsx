import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems, selectCartTotalAmount } from '../redux/cartSlice';
import { selectCheckoutAddress } from '../redux/checkoutSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  CheckCircle, 
  Package, 
  Truck, 
  Home, 
  ChevronLeft, 
  Clock, 
  MapPin, 
  CreditCard,
  ShoppingBag
} from 'lucide-react';

const TrackOrder = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);
  const address = useSelector(selectCheckoutAddress);

  const steps = [
    { title: 'Order Placed', date: 'March 22, 2024 - 05:30 PM', icon: <Package size={20} />, status: 'completed' },
    { title: 'Confirmed', date: 'March 22, 2024 - 06:15 PM', icon: <CheckCircle size={20} />, status: 'completed' },
    { title: 'Shipped', date: 'March 23, 2024 - 10:00 AM', icon: <Truck size={20} />, status: 'current' },
    { title: 'Out for Delivery', date: 'Expected tomorrow', icon: <Truck size={20} />, status: 'pending' },
    { title: 'Delivered', date: 'Expected March 25', icon: <Home size={20} />, status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <Navbar />

      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <Link to="/our-product" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 hover:bg-slate-50 transition-all">
              <ChevronLeft size={20} />
            </Link>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Track Order</h1>
          </div>
          <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
            <Clock size={18} className="text-[#38BDF8]" />
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Est. Delivery:</span>
            <span className="text-sm font-black text-slate-900">March 25, 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Tracking Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-sm">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-100 rounded-full" />
                
                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <div key={index} className="relative flex gap-8 group">
                      {/* Icon Node */}
                      <div className={`z-10 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        step.status === 'completed' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 
                        step.status === 'current' ? 'bg-[#38BDF8] text-white shadow-lg shadow-sky-500/20 animate-pulse' : 
                        'bg-slate-100 text-slate-400'
                      }`}>
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="pt-1">
                        <h3 className={`text-xl font-black tracking-tight mb-1 ${
                          step.status === 'pending' ? 'text-slate-400' : 'text-slate-900'
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm font-bold uppercase tracking-widest ${
                          step.status === 'pending' ? 'text-slate-300' : 'text-slate-400'
                        }`}>
                          {step.date}
                        </p>
                      </div>

                      {/* Progress Line (Completed side) */}
                      {step.status === 'completed' && index < steps.length - 1 && (
                        <div className="absolute left-[22px] top-12 h-12 w-1 bg-emerald-500 rounded-full z-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Snapshot & Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#0F172A] rounded-[40px] p-8 text-white shadow-2xl shadow-slate-900/20">
              <h2 className="text-2xl font-black mb-8 tracking-tight">Order Snapshot</h2>
              
              <div className="space-y-6 mb-8 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.productId} className="flex gap-4 items-center">
                    <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-white/10 p-1">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-white leading-tight mb-1 line-clamp-1">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-black text-[#38BDF8]">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Total Paid</span>
                <span className="text-3xl font-black text-white tracking-tighter">₹{totalAmount}</span>
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm space-y-8">
              <div>
                <h3 className="text-xs font-black text-slate-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <MapPin size={14} className="text-[#38BDF8]" />
                  Shipping Address
                </h3>
                <div className="text-sm font-bold text-slate-900 leading-relaxed">
                  <p>{address.fullName}</p>
                  <p className="text-slate-500">{address.addressLine}</p>
                  <p className="text-slate-500">{address.city}, {address.state} - {address.pincode}</p>
                  <p className="mt-2 text-[#38BDF8]">+91 {address.phone}</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-50">
                <Link to="/our-product" className="w-full bg-slate-50 hover:bg-slate-100 text-slate-900 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border border-slate-100">
                  <ShoppingBag size={16} />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}} />
    </div>
  );
};

export default TrackOrder;
