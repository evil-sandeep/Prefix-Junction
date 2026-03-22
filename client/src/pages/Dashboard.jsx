import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  User, 
  CreditCard, 
  Calendar, 
  Settings, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  TrendingUp,
  Package,
  ShieldCheck
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <Navbar />
      
      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 space-y-8">
            <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-6 shadow-inner">
                  <User size={48} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-1">{user.fullName}</h2>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{user.email}</p>
                
                <div className="mt-8 w-full pt-8 border-t border-slate-50 space-y-2">
                  <button className="w-full flex items-center gap-4 p-4 rounded-2xl bg-slate-50 text-slate-900 font-bold transition-all">
                    <TrendingUp size={20} className="text-primary" />
                    Overview
                  </button>
                  <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-slate-400 font-bold hover:bg-slate-50 hover:text-slate-900 transition-all">
                    <Calendar size={20} />
                    My Bookings
                  </button>
                  <Link to="/products" className="w-full flex items-center gap-4 p-4 rounded-2xl text-slate-400 font-bold hover:bg-slate-50 hover:text-slate-900 transition-all">
                    <Package size={20} />
                    My Orders
                  </Link>
                  <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-slate-400 font-bold hover:bg-slate-50 hover:text-slate-900 transition-all text-left">
                    <Settings size={20} />
                    Settings
                  </button>
                </div>

                <button 
                  onClick={onLogout}
                  className="mt-8 w-full flex items-center justify-center gap-4 p-5 rounded-2xl bg-red-50 text-red-600 font-black text-xs uppercase tracking-widest hover:bg-red-100 transition-all"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            </div>
            
            <div className="bg-[#0F172A] rounded-[40px] p-8 text-white">
              <h3 className="text-lg font-black mb-4">Support</h3>
              <p className="text-sm text-slate-400 font-medium mb-6">Need help with your pet? Our experts are here 24/7.</p>
              <button className="w-full py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all text-sm">
                Chat with Us
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow space-y-8">
            {/* Subscription Card */}
            <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-700">
                <ShieldCheck size={200} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">Current Subscription</h4>
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight">
                      {user.subscription?.status === 'active' ? 'Elite Plan' : 'Free Member'}
                    </h2>
                    {user.subscription?.status === 'active' && (
                      <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest border border-emerald-200">
                        Active
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 font-medium max-w-md">
                    {user.subscription?.status === 'active' 
                      ? 'You are enjoying full access to all premium services and priority grooming.' 
                      : 'Upgrade to a premium plan to unlock exclusive grooming services and priority booking.'}
                  </p>
                </div>
                
                <Link 
                  to="/pricing"
                  className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-hover transition-all shadow-xl shadow-primary/20 flex-shrink-0 text-center"
                >
                  {user.subscription?.status === 'active' ? 'Manage Subscription' : 'Upgrade Plan'}
                </Link>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                    <Calendar size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Upcoming Appointments</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center py-10 text-center flex-col border-2 border-dashed border-slate-50 rounded-3xl">
                    <p className="text-slate-400 font-bold text-sm mb-4">No upcoming bookings</p>
                    <Link to="/booking" className="text-primary font-black text-xs uppercase tracking-widest hover:underline">
                      Book Now <ChevronRight size={14} className="inline mb-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
                    <CreditCard size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Recent Transactions</h3>
                </div>
                <div className="space-y-4 text-center py-10 border-2 border-dashed border-slate-50 rounded-3xl">
                  <p className="text-slate-400 font-bold text-sm">No recent activity</p>
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

export default Dashboard;
