import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { logout, setUser } from '../redux/authSlice';

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
  ChevronRight,
  TrendingUp,
  Package,
  ShieldCheck,
  Download,
  Clock,
  Loader2,
  Truck
} from 'lucide-react';

const Dashboard = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [myBookings, setMyBookings] = useState([]);
  const [bookingsLoading, setBookingsLoading] = useState(false);
  const [hasFetchedBookings, setHasFetchedBookings] = useState(false);
  const [myOrders, setMyOrders] = useState([]);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [hasFetchedOrders, setHasFetchedOrders] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        const { data } = await axios.get(`${API_BASE_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        // We could update Redux here, but for now we'll just let the middleware do its job 
        // and rely on the fact that if it changed, it's saved in DB.
        // Pass the existing token back in the payload, otherwise authSlice WILL wipe it out
        // because the getMe API route only returns user data, not the JWT token.
        dispatch(setUser(data.data.user));

      } catch (err) {
        console.error('Failed to fetch user', err);
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchUser();
  }, [user, token, dispatch]);

  useEffect(() => {
    if (token && !hasFetchedBookings) {
      const fetchBookings = async () => {
        setBookingsLoading(true);
        try {
          const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
          const { data } = await axios.get(`${API_BASE_URL}/api/my-bookings`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (data.success) {
            setMyBookings(data.bookings);
            setHasFetchedBookings(true);
          }
        } catch (err) {
          console.error('Failed to fetch bookings', err);
        } finally {
          setBookingsLoading(false);
        }
      };
      fetchBookings();
    }
    
    if (token && !hasFetchedOrders) {
      const fetchOrders = async () => {
        setOrdersLoading(true);
        try {
          const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
          const { data } = await axios.get(`${API_BASE_URL}/api/orders/my-orders`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (data.status === 'success') {
            setMyOrders(data.orders);
            setHasFetchedOrders(true);
          }
        } catch (err) {
          console.error('Failed to fetch orders', err);
        } finally {
          setOrdersLoading(false);
        }
      };
      fetchOrders();
    }
  }, [token, hasFetchedBookings, hasFetchedOrders]);

  const handleDownloadReceipt = (booking) => {
    const receiptHTML = `
      <html>
        <head>
          <title>Booking Receipt - ${booking.bookingId}</title>
          <style>
            body { font-family: 'Arial', sans-serif; padding: 40px; color: #333; }
            .receipt-container { max-width: 600px; margin: 0 auto; border: 2px dashed #ccc; padding: 30px; border-radius: 12px; }
            .header { text-align: center; border-bottom: 2px solid #38BDF8; padding-bottom: 20px; margin-bottom: 20px; }
            .logo { font-size: 28px; font-weight: 900; color: #38BDF8; margin: 0; }
            .title { font-size: 14px; color: #666; letter-spacing: 2px; text-transform: uppercase; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 30px; }
            .detail-item p { margin: 5px 0; }
            .label { font-size: 11px; text-transform: uppercase; color: #999; font-weight: bold; }
            .value { font-size: 16px; font-weight: bold; }
            .service { background: #f8fafc; padding: 20px; border-radius: 8px; text-align: center; font-size: 20px; font-weight: bold; border: 1px solid #e2e8f0; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #999; }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <div class="header">
              <h1 class="logo">Petflix Junction</h1>
              <p class="title">Official Appointment Receipt</p>
            </div>
            <div class="details">
              <div class="detail-item">
                <p class="label">Booking ID</p>
                <p class="value">${booking.bookingId}</p>
              </div>
              <div class="detail-item">
                <p class="label">Date & Time</p>
                <p class="value">${booking.date} | ${booking.slot}</p>
              </div>
              <div class="detail-item">
                <p class="label">Customer Name</p>
                <p class="value">${booking.name}</p>
              </div>
              <div class="detail-item">
                <p class="label">Status</p>
                <p class="value" style="color: #38BDF8; text-transform: uppercase;">${booking.status}</p>
              </div>
            </div>
            <div class="service">
              <p class="label" style="text-align: left; margin-bottom: 10px;">Service Booked</p>
              ${booking.service}
            </div>
            <div class="footer">
              <p>Thank you for choosing Petflix Junction! Please show this receipt at the front desk.</p>
              <p>Printed on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
          <script>
            window.onload = () => { window.print(); };
          </script>
        </body>
      </html>
    `;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(receiptHTML);
    printWindow.document.close();
  };

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
                  <button 
                    onClick={() => setActiveTab('overview')}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === 'overview' ? 'bg-slate-50 text-slate-900' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    <TrendingUp size={20} className={activeTab === 'overview' ? 'text-primary' : ''} />
                    Overview
                  </button>
                  <button 
                    onClick={() => setActiveTab('bookings')}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl font-bold transition-all ${activeTab === 'bookings' ? 'bg-slate-50 text-slate-900' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    <div className="flex items-center gap-4">
                      <Calendar size={20} className={activeTab === 'bookings' ? 'text-primary' : ''} />
                      My Bookings
                    </div>
                    {myBookings.length > 0 && (
                      <span className="bg-primary/10 text-primary text-[10px] uppercase font-black px-2 py-0.5 rounded-full tracking-widest">
                        {myBookings.length}
                      </span>
                    )}
                  </button>
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl font-bold transition-all ${activeTab === 'orders' ? 'bg-slate-50 text-slate-900' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}
                  >
                    <div className="flex items-center gap-4">
                      <Package size={20} className={activeTab === 'orders' ? 'text-primary' : ''} />
                      My Orders
                    </div>
                    {myOrders.length > 0 && (
                      <span className="bg-primary/10 text-primary text-[10px] uppercase font-black px-2 py-0.5 rounded-full tracking-widest">
                        {myOrders.length}
                      </span>
                    )}
                  </button>
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
            {activeTab === 'overview' && (
              <>
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
                      {bookingsLoading ? (
                        <p className="text-slate-400 font-bold text-sm">Fetching status...</p>
                      ) : myBookings.length > 0 ? (
                        <>
                          <div className="text-5xl font-black text-primary mb-2 tracking-tighter flex items-center gap-2">
                             {myBookings.length}
                          </div>
                          <p className="text-slate-600 font-bold text-sm mb-4">Total Reservations Made</p>
                          <button onClick={() => setActiveTab('bookings')} className="text-primary font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                            View Bookings <ChevronRight size={14} className="mb-0.5" />
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-slate-400 font-bold text-sm mb-4">No upcoming bookings</p>
                          <Link to="/booking" className="text-primary font-black text-xs uppercase tracking-widest hover:underline flex items-center justify-center">
                            Book Now <ChevronRight size={14} className="inline mb-0.5" />
                          </Link>
                        </>
                      )}
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
                      {ordersLoading ? (
                        <p className="text-slate-400 font-bold text-sm">Loading orders...</p>
                      ) : myOrders.length > 0 ? (
                        <div className="flex flex-col items-center justify-center">
                          <div className="text-5xl font-black text-amber-500 mb-2 tracking-tighter flex items-center gap-2">
                             {myOrders.length}
                          </div>
                          <p className="text-slate-600 font-bold text-sm mb-4">Total Product Orders</p>
                          <button onClick={() => setActiveTab('orders')} className="text-amber-500 font-black text-xs uppercase tracking-widest hover:underline flex items-center gap-1">
                            Track Orders <ChevronRight size={14} className="mb-0.5" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <p className="text-slate-400 font-bold text-sm mb-4">No recent activity</p>
                          <Link to="/products" className="text-amber-500 font-black text-xs uppercase tracking-widest hover:underline flex items-center justify-center">
                            Shop Now <ChevronRight size={14} className="inline mb-0.5" />
                          </Link>
                        </>
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
              </>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-black text-slate-900 mb-8">My Bookings</h2>
                
                {bookingsLoading ? (
                  <p className="text-slate-500 font-bold text-center py-10">Loading bookings...</p>
                ) : myBookings.length === 0 ? (
                  <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                    <Calendar size={48} className="mx-auto text-slate-300 mb-4" />
                    <p className="text-slate-500 font-bold mb-4">You haven't made any bookings yet.</p>
                    <Link to="/booking" className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm hover:opacity-90 transition-all shadow-lg inline-block">
                      Make an Appointment
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {myBookings.map((booking) => (
                      <div key={booking._id} className="border border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row justify-between md:items-center gap-6 hover:shadow-lg hover:border-primary/20 transition-all">
                        <div>
                          <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">{booking.bookingId}</p>
                          <h3 className="text-xl font-bold text-slate-900 mb-1">{booking.service}</h3>
                          <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                            <Calendar size={14} /> <span>{booking.date}</span>
                            <span className="mx-1">•</span>
                            <Clock size={14} /> <span>{booking.slot}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                           <div>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                             <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest
                               ${booking.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                                 booking.status === 'pending' ? 'bg-amber-100 text-amber-600' :
                                 booking.status === 'completed' ? 'bg-blue-100 text-blue-600' :
                                 'bg-red-100 text-red-600'}`
                             }>
                               {booking.status}
                             </span>
                           </div>
                           
                           <button 
                             onClick={() => handleDownloadReceipt(booking)}
                             className="ml-auto w-10 h-10 flex items-center justify-center bg-slate-50 hover:bg-primary/10 hover:text-primary text-slate-400 rounded-xl transition-all"
                             title="Download Receipt"
                           >
                              <Download size={18} />
                           </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'orders' && (
               <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-black text-slate-900 mb-8">My Orders</h2>
                
                {ordersLoading ? (
                  <p className="text-slate-500 font-bold text-center py-10">Loading orders...</p>
                ) : myOrders.length === 0 ? (
                  <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                    <Package size={48} className="mx-auto text-slate-300 mb-4" />
                    <p className="text-slate-500 font-bold mb-4">You haven't ordered any products yet.</p>
                    <Link to="/products" className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm hover:opacity-90 transition-all shadow-lg inline-block">
                      Browse Shop
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {myOrders.map((order) => (
                      <div key={order._id} className="border border-slate-100 rounded-3xl p-6 flex flex-col md:flex-row justify-between md:items-center gap-6 hover:shadow-lg hover:border-primary/20 transition-all overflow-hidden relative">
                        {/* Status Badge Background Decal */}
                        <div className={`absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none
                           ${order.deliveryStatus === 'delivered' ? 'text-green-500' :
                             order.deliveryStatus === 'processing' ? 'text-amber-500' :
                             order.deliveryStatus === 'shipped' ? 'text-blue-500' :
                             order.deliveryStatus === 'cancelled' ? 'text-red-500' : 'text-purple-500'
                           }`}
                        >
                          <Package size={150} className="rotate-12 translate-x-10 -translate-y-10" />
                        </div>

                        <div className="z-10 w-full md:w-auto">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex justify-between md:justify-start gap-4">
                            <span>Order #{order._id.slice(-6).toUpperCase()}</span>
                            <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                          </p>
                          <h3 className="text-lg font-bold text-slate-900 mb-3">
                            {order.items.length} {order.items.length === 1 ? 'Item' : 'Items'} <span className="text-slate-300 mx-2">|</span> <span className="text-primary font-black">₹{order.totalAmount}</span>
                          </h3>
                          <div className="space-y-1">
                            {order.items.map((item, idx) => (
                               <p key={idx} className="text-xs font-bold text-slate-500 flex items-center gap-2">
                                 <span className="w-1.5 h-1.5 rounded-full bg-slate-300 block"></span> 
                                 <span className="text-slate-700">{item.name}</span> x{item.quantity}
                               </p>
                            ))}
                          </div>
                        </div>
                        
                        <div className="z-10 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-8 text-left md:text-right min-w-[200px]">
                           <div>
                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 md:text-right">Tracking Status</p>
                             <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest
                               ${order.deliveryStatus === 'delivered' ? 'bg-green-100 text-green-700 border border-green-200' :
                                 order.deliveryStatus === 'processing' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                                 order.deliveryStatus === 'shipped' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                                 order.deliveryStatus === 'out_for_delivery' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                                 'bg-red-100 text-red-700 border border-red-200'}`
                             }>
                               {order.deliveryStatus === 'delivered' ? <CheckCircle2 size={14} /> : <Loader2 size={14} className={order.deliveryStatus === 'cancelled' ? '' : 'animate-spin'} />}
                               {order.deliveryStatus.replace('_', ' ')}
                             </span>
                           </div>
                           
                           {order.deliveryStatus === 'delivered' && (
                             <p className="text-xs font-black text-emerald-500 mt-auto md:text-right">✓ Package Arrived</p>
                           )}
                           {order.deliveryStatus !== 'delivered' && order.deliveryStatus !== 'cancelled' && (
                             <p className="text-xs font-bold text-slate-400 mt-auto md:text-right">In Transit to {order.address.city}</p>
                           )}

                           <Link
                             to="/track"
                             state={{ order }}
                             className="mt-4 md:mt-auto bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 w-full md:w-auto active:scale-95"
                           >
                             <Truck size={14} />
                             Live Tracking
                           </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
