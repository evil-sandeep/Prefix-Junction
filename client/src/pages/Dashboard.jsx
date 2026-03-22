import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import axios from 'axios';
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
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        const { data } = await axios.get(`${API_BASE_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        // We could update Redux here, but for now we'll just let the middleware do its job 
        // and rely on the fact that if it changed, it's saved in DB.
        // Actually, let's update Redux to show the latest status.
        dispatch({ type: 'auth/login/fulfilled', payload: data });
      } catch (err) {
        console.error('Failed to fetch user', err);
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchUser();
  }, [user, token, dispatch]);

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
                <h2 className="text-2xl font-black text-slate-900 mb-1">{user.name}</h2>
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
                      {!user?.plan || user?.plan === 'Starter' ? 'Free Member' : `${user?.plan} Member`}
                    </h2>
                    {user?.plan && user?.plan !== 'Starter' && (
                      <span className="bg-emerald-100 text-emerald-600 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-widest border border-emerald-200">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-slate-500 font-medium max-w-md">
                      {user?.plan && user?.plan !== 'Starter'
                        ? `You are enjoying full access to all ${user?.plan} features and priority grooming.` 
                        : 'Upgrade to a premium plan to unlock exclusive grooming services and priority booking.'}
                    </p>
                    {user?.planExpiryDate && user?.plan !== 'Starter' && (
                      <div className="flex items-center gap-2 mt-2">
                        <Clock size={14} className="text-slate-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          Expires on: {new Date(user?.planExpiryDate).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {user?.paymentId ? (
                    <div className="text-left px-4">
                       <p className="text-xs font-black text-slate-400 uppercase mb-1">Last Payment</p>
                       <p className="text-sm font-bold text-slate-900">ID: {user.paymentId}</p>
                       <p className="text-[10px] text-emerald-500 font-bold uppercase mt-1">Status: Success</p>
                    </div>
                  ) : (
                    <p className="text-slate-400 font-bold text-sm">No recent activity</p>
                  )}
                </div>
              </div>

              <div className={`bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm relative overflow-hidden ${user?.plan !== 'Elite' ? 'group' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">Advanced Analytics</h3>
                </div>
                
                {user?.plan === 'Elite' ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Care Continuity</p>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary" />
                      </div>
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase text-center mt-4">More stats coming soon...</p>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="space-y-4 blur-[4px] select-none">
                      <div className="p-4 bg-slate-50 rounded-2xl">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1">Mock Stat</p>
                        <div className="h-2 bg-slate-200 rounded-full" />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                      <ShieldCheck size={32} className="text-primary mb-3" />
                      <p className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1">Elite Exclusive</p>
                      <Link to="/plans" className="text-[10px] font-black text-primary hover:underline uppercase">Upgrade Now</Link>
                    </div>
                  </div>
                )}
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
