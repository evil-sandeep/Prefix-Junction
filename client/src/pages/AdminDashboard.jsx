import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { LayoutDashboard, Users, Calendar, Clock, ClipboardList, Loader2, AlertCircle, RefreshCw } from 'lucide-react';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [accessError, setAccessError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (secretKey === 'Sandeep2274') {
      setIsAuthenticated(true);
      setAccessError('');
    } else {
      setAccessError('Invalid Access Key');
    }
  };

  const fetchBookings = async () => {
    if (!isAuthenticated) return;
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/bookings');
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

  useEffect(() => {
    if (isAuthenticated) {
      fetchBookings();
      
      // Auto-poll for new bookings every 10 seconds
      const pollInterval = setInterval(fetchBookings, 10000);
      
      return () => clearInterval(pollInterval);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f8fafc] font-['Outfit'] flex flex-col transition-all duration-700">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="w-full max-w-[450px] bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] p-12 border border-white">
            <div className="w-20 h-20 bg-primary/10 rounded-[24px] flex items-center justify-center text-primary mx-auto mb-8 shadow-inner">
              <LayoutDashboard size={40} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 text-center mb-2 tracking-tight">Admin Access</h2>
            <p className="text-gray-500 text-center mb-10 font-medium">Please enter your secret key to continue.</p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              {accessError && (
                <div className="bg-red-50 border border-red-100 text-red-600 p-5 rounded-2xl flex items-center gap-4 text-sm font-bold animate-shake">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <AlertCircle size={18} />
                  </div>
                  {accessError}
                </div>
              )}
              <div className="relative group">
                <input 
                  type="password" 
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder="Enter Secret Key" 
                  className="w-full px-8 py-5 rounded-2xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-900 font-bold text-center tracking-widest"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-[#00b875] text-white font-black py-5 rounded-[20px] transition-all shadow-[0_20px_40px_rgba(0,173,111,0.2)] hover:shadow-[0_25px_50px_rgba(0,173,111,0.3)] hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 text-lg uppercase tracking-widest"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Outfit']">
      <Navbar />

      <main className="pt-32 pb-24 container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Live Queue
              </div>
            </div>
            <h1 className="text-5xl font-black text-gray-900 tracking-tighter mb-4">Booking Queue</h1>
            <p className="text-xl text-gray-500 font-medium">Real-time salon appointment management system.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Last Updated</div>
              <div className="text-gray-900 font-black">{new Date().toLocaleTimeString()}</div>
            </div>
            <button 
              onClick={fetchBookings}
              className="flex items-center gap-3 bg-white border-2 border-gray-100 p-4 rounded-2xl font-black text-gray-700 hover:border-primary hover:text-primary transition-all shadow-sm group active:scale-95"
            >
              <RefreshCw size={20} className={`${loading ? 'animate-spin text-primary' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            </button>
          </div>
        </div>

        {/* Status Tracker */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10">
              <div className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Total Waiting</div>
              <div className="text-4xl font-black text-gray-900">{bookings.length}</div>
            </div>
          </div>
        </div>

        {/* Queue Table */}
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
                    <th className="px-10 py-8 text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] text-right">Status</th>
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
                      <td className="px-10 py-8 text-right">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border ${
                          booking.status === 'confirmed' ? 'bg-green-50 text-green-600 border-green-100' :
                          booking.status === 'pending' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                          'bg-gray-50 text-gray-500 border-gray-100'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
