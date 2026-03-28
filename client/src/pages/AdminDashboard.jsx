import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset } from '../redux/authSlice';
import { LayoutDashboard, Users, Calendar, Clock, ClipboardList, Loader2, AlertCircle, RefreshCw, Plus, Minus, TrendingUp, Award, ShieldCheck, Heart, ShoppingBag, Truck, CheckCircle, XCircle, Package, LogOut } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const STATUS_CONFIG = {
  processing:       { label: 'Processing',       color: 'bg-amber-50 text-amber-600 border-amber-200' },
  out_for_delivery: { label: 'Out for Delivery',  color: 'bg-blue-50 text-blue-600 border-blue-200' },
  delivered:        { label: 'Delivered',         color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  cancelled:        { label: 'Cancelled',         color: 'bg-red-50 text-red-600 border-red-200' },
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [orders, setOrders] = useState([]);
  const [siteStats, setSiteStats] = useState({
    happyPets: 500,
    expertGroomers: 10,
    premiumCare: "24/7",
    safetyRate: 100
  });
  const [loading, setLoading] = useState(true);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/login');
  };

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/bookings`);
      const data = await response.json();
      if (data.success) {
        setBookings(data.bookings);
        setError(null);
      } else {
        throw new Error(data.message || 'Failed to load bookings');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    setOrdersLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/all`);
      const data = await response.json();
      if (data.status === 'success') {
        setOrders(data.orders);
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      setOrdersLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/stats`);
      const data = await response.json();
      if (data.success) {
        setSiteStats(data.stats);
      }
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  const handleStatUpdate = async (field, action) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/stats/update`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ field, action })
      });
      const data = await response.json();
      if (data.success) {
        setSiteStats(data.stats);
      }
    } catch (err) {
      console.error('Error updating stat:', err);
    }
  };

  const updateOrderStatus = async (id, deliveryStatus) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deliveryStatus })
      });
      const data = await response.json();
      if (data.status === 'success') {
        setOrders(prev => prev.map(o => o._id === id ? { ...o, deliveryStatus } : o));
      } else {
        alert(data.message || 'Failed to update status');
      }
    } catch (err) {
      console.error('Order status update error:', err);
      alert('Error updating status');
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchOrders();
    fetchStats();
    const pollInterval = setInterval(() => {
      fetchBookings();
      fetchOrders();
    }, 15000);
    return () => clearInterval(pollInterval);
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await response.json();
      if (data.success) {
        setBookings(prev => prev.map(b => b._id === id ? { ...b, status: newStatus } : b));
        if (newStatus === 'completed') fetchStats();
      } else {
        alert(data.message || 'Failed to update status');
      }
    } catch (err) {
      console.error('Status update error:', err);
      alert('Error updating status');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <main className="pt-12 pb-24 container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Live Queue
              </div>
            </div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-4">Admin Dashboard</h1>
            <p className="text-xl text-gray-500 font-medium">Manage bookings, orders, and site statistics.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Last Updated</div>
              <div className="text-gray-900 font-black">{new Date().toLocaleTimeString()}</div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => { fetchBookings(); fetchOrders(); fetchStats(); }}
                className="flex items-center gap-3 bg-white border-2 border-slate-100 p-4 rounded-2xl font-black text-slate-700 hover:border-primary hover:text-primary transition-all shadow-sm group active:scale-95"
                title="Refresh Data"
              >
                <RefreshCw size={20} className={`${loading || ordersLoading ? 'animate-spin text-primary' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              </button>

              <button 
                onClick={handleLogout}
                className="flex items-center gap-3 bg-red-50 hover:bg-red-500 border-2 border-red-100 hover:border-red-500 p-4 rounded-2xl font-black text-red-500 hover:text-white transition-all shadow-sm group active:scale-95"
                title="Logout Admin"
              >
                <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="hidden md:block">Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Our Work Stats Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-10 bg-primary rounded-full"></div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Our Work Stats</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'happyPets', label: 'Happy Pets', value: siteStats.happyPets, icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50' },
              { id: 'expertGroomers', label: 'Expert Groomers', value: siteStats.expertGroomers, icon: Award, color: 'text-primary', bg: 'bg-primary/10' },
              { id: 'premiumCare', label: 'Premium Care', value: siteStats.premiumCare, icon: ShieldCheck, color: 'text-blue-500', bg: 'bg-blue-50', isStatic: true },
              { id: 'safetyRate', label: 'Safety Rate', value: siteStats.safetyRate, icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-50' }
            ].map((stat) => (
              <div key={stat.id} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm group hover:shadow-xl transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                    <stat.icon size={28} />
                  </div>
                  <div className="flex items-center gap-2">
                    {!stat.isStatic && (
                      <>
                        <button 
                          onClick={() => handleStatUpdate(stat.id, 'decrement')}
                          className="w-10 h-10 bg-gray-50 text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-xl flex items-center justify-center transition-all active:scale-90"
                        >
                          <Minus size={18} />
                        </button>
                        <button 
                          onClick={() => handleStatUpdate(stat.id, 'increment')}
                          className="w-10 h-10 bg-gray-50 text-gray-400 hover:bg-primary/10 hover:text-primary rounded-xl flex items-center justify-center transition-all active:scale-90"
                        >
                          <Plus size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-4xl font-black text-gray-900 tracking-tighter">
                  {stat.value}{stat.id === 'safetyRate' ? '%' : (stat.id === 'premiumCare' ? '' : '+')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
              activeTab === 'bookings' 
                ? 'bg-[#0F172A] text-white shadow-xl' 
                : 'bg-white text-slate-500 border border-slate-100 hover:border-slate-300'
            }`}
          >
            <Calendar size={16} />
            Booking Queue
            <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'bookings' ? 'bg-white/20' : 'bg-slate-100'}`}>
              {bookings.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
              activeTab === 'orders' 
                ? 'bg-[#0F172A] text-white shadow-xl' 
                : 'bg-white text-slate-500 border border-slate-100 hover:border-slate-300'
            }`}
          >
            <ShoppingBag size={16} />
            Product Orders
            <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'orders' ? 'bg-white/20' : 'bg-slate-100'}`}>
              {orders.length}
            </span>
          </button>
        </div>

        {/* ───── BOOKING QUEUE TAB ───── */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.03)] overflow-hidden">
            {loading && bookings.length === 0 ? (
              <div className="py-32 flex flex-col items-center justify-center text-gray-400 gap-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center animate-pulse">
                  <Loader2 className="animate-spin text-primary" size={32} />
                </div>
                <p className="text-lg font-bold tracking-tight">Accessing Queue Data...</p>
              </div>
            ) : error ? (
              <div className="py-32 flex flex-col items-center justify-center text-red-500 gap-6">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center">
                  <AlertCircle size={32} />
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold mb-2">{error}</p>
                  <button onClick={fetchBookings} className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-600 transition-all">Re-sync Queue</button>
                </div>
              </div>
            ) : bookings.length === 0 ? (
              <div className="py-32 flex flex-col items-center justify-center text-gray-300 gap-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                  <ClipboardList size={32} />
                </div>
                <p className="text-lg font-bold tracking-tight">Queue is currently empty.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="px-10 py-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Queue ID</th>
                      <th className="px-10 py-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Customer Details</th>
                      <th className="px-10 py-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Service</th>
                      <th className="px-10 py-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Appointment</th>
                      <th className="px-10 py-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Status</th>
                      <th className="px-10 py-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {bookings.map((booking, index) => (
                      <tr key={booking._id} className="group hover:bg-primary/[0.02] transition-colors">
                        <td className="px-10 py-8">
                          <div className="flex items-center gap-4">
                            <span className="text-xs font-black text-gray-300">#{index + 1}</span>
                            <span className="font-black text-primary text-sm tracking-tighter bg-primary/5 px-4 py-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                              {booking.bookingId}
                            </span>
                          </div>
                        </td>
                        <td className="px-10 py-8">
                          <span className="text-lg font-black text-gray-900 block group-hover:translate-x-1 transition-transform">{booking.name}</span>
                          <span className="text-sm font-bold text-gray-400">Verified Client</span>
                        </td>
                        <td className="px-10 py-8">
                          <div className="inline-flex items-center gap-2 text-gray-700 font-bold bg-gray-100 px-4 py-2 rounded-xl text-sm">
                            {booking.service}
                          </div>
                        </td>
                        <td className="px-10 py-8">
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-black text-gray-900">{booking.date}</span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{booking.slot}</span>
                          </div>
                        </td>
                        <td className="px-10 py-8">
                          <span className={`inline-flex items-center px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border ${
                            booking.status === 'confirmed' ? 'bg-green-50 text-green-600 border-green-100' :
                            booking.status === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                            booking.status === 'completed' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                            booking.status === 'cancelled' ? 'bg-red-50 text-red-600 border-red-100' :
                            'bg-gray-50 text-gray-500 border-gray-100'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-10 py-8 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {booking.status !== 'completed' && booking.status !== 'cancelled' && (
                              <>
                                <button 
                                  onClick={() => updateStatus(booking._id, 'completed')}
                                  className="bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-2 rounded-lg text-xs font-bold transition-all active:scale-95"
                                >
                                  Mark Completed
                                </button>
                                <button 
                                  onClick={() => updateStatus(booking._id, 'cancelled')}
                                  className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-3 py-2 rounded-lg text-xs font-bold transition-all active:scale-95"
                                >
                                  Cancel
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ───── PRODUCT ORDERS TAB ───── */}
        {activeTab === 'orders' && (
          <div className="bg-white rounded-[40px] border border-gray-100 shadow-[0_30px_80px_rgba(0,0,0,0.03)] overflow-hidden">
            {ordersLoading && orders.length === 0 ? (
              <div className="py-32 flex flex-col items-center justify-center text-gray-400 gap-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center animate-pulse">
                  <Loader2 className="animate-spin text-[#38BDF8]" size={32} />
                </div>
                <p className="text-lg font-bold tracking-tight">Loading Orders...</p>
              </div>
            ) : orders.length === 0 ? (
              <div className="py-32 flex flex-col items-center justify-center text-gray-300 gap-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                  <Package size={32} />
                </div>
                <p className="text-lg font-bold tracking-tight">No orders placed yet.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-50">
                {orders.map((order, index) => (
                  <div key={order._id} className="p-8 hover:bg-slate-50/50 transition-colors">
                    {/* Order Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-black text-gray-300">#{index + 1}</span>
                        <div>
                          <p className="font-black text-slate-900 text-lg">{order.userId?.name || 'Unknown Customer'}</p>
                          <p className="text-sm text-slate-400 font-medium">{order.userId?.email} · {order.userId?.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 flex-wrap">
                        <div className="text-right">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Order Total</p>
                          <p className="text-2xl font-black text-slate-900">₹{order.totalAmount}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Transaction ID</p>
                          <p className="text-sm font-bold text-slate-700 bg-slate-50 px-2 py-0.5 rounded">{order.razorpay_payment_id || 'N/A'}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Date</p>
                          <p className="text-sm font-bold text-slate-700">{new Date(order.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {order.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-2xl px-4 py-3 border border-slate-100">
                          {item.image && <img src={item.image} alt={item.name} className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />}
                          <div>
                            <p className="text-sm font-bold text-slate-900">{item.name}</p>
                            <p className="text-xs text-slate-400 font-medium">Qty: {item.quantity} · ₹{item.price * item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Address & Status */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                      <div className="text-sm text-slate-500 font-medium">
                        <span className="font-bold text-slate-700">📍 {order.address?.fullName}</span>
                        {' · '}{order.address?.addressLine}, {order.address?.city}, {order.address?.state} - {order.address?.pincode}
                      </div>

                      <div className="flex items-center gap-3 flex-wrap">
                        {/* Current Status Badge */}
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest border ${STATUS_CONFIG[order.deliveryStatus]?.color || 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                          {order.deliveryStatus === 'processing' && <Clock size={12} />}
                          {order.deliveryStatus === 'out_for_delivery' && <Truck size={12} />}
                          {order.deliveryStatus === 'delivered' && <CheckCircle size={12} />}
                          {order.deliveryStatus === 'cancelled' && <XCircle size={12} />}
                          {STATUS_CONFIG[order.deliveryStatus]?.label || order.deliveryStatus}
                        </span>

                        {/* Status Update Dropdown */}
                        {order.deliveryStatus !== 'delivered' && order.deliveryStatus !== 'cancelled' && (
                          <select
                            value={order.deliveryStatus}
                            onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                            className="text-xs font-bold rounded-xl border border-slate-200 px-4 py-2 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/30 focus:border-[#38BDF8] transition-all"
                          >
                            <option value="processing">🔄 Processing</option>
                            <option value="out_for_delivery">🚚 Out for Delivery</option>
                            <option value="delivered">✅ Delivered</option>
                            <option value="cancelled">❌ Cancel Order</option>
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
