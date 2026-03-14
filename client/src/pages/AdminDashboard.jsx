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
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f8fafc] font-['Outfit'] flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="w-full max-w-[450px] bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-12 border border-white">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
              <LayoutDashboard size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Admin Access</h2>
            <p className="text-gray-500 text-center mb-10">Please enter your secret key to continue.</p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              {accessError && (
                <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium animate-shake">
                  <AlertCircle size={18} />
                  {accessError}
                </div>
              )}
              <div className="relative">
                <input 
                  type="password" 
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder="Enter Secret Key" 
                  className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-[#00b875] text-white font-bold py-5 rounded-xl transition-all shadow-[0_15px_30px_rgba(0,173,111,0.25)] hover:shadow-[0_20px_40px_rgba(0,173,111,0.3)] hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3"
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-primary font-bold mb-2">
              <LayoutDashboard size={20} />
              <span className="uppercase tracking-widest text-sm">Administration</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Booking Dashboard</h1>
          </div>
          <button 
            onClick={fetchBookings}
            className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            Refresh Data
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
              <ClipboardList size={24} />
            </div>
            <div className="text-3xl font-black text-gray-900 mb-1">{bookings.length}</div>
            <div className="text-gray-500 font-medium">Total Bookings</div>
          </div>
          {/* Add more stats if needed */}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center text-gray-400 gap-4">
              <Loader2 className="animate-spin text-primary" size={40} />
              <p className="font-medium">Loading bookings...</p>
            </div>
          ) : error ? (
            <div className="py-24 flex flex-col items-center justify-center text-red-500 gap-4">
              <AlertCircle size={40} />
              <p className="font-medium">{error}</p>
              <button onClick={fetchBookings} className="text-primary underline font-bold">Try again</button>
            </div>
          ) : bookings.length === 0 ? (
            <div className="py-24 flex flex-col items-center justify-center text-gray-400 gap-4">
              <ClipboardList size={40} />
              <p className="font-medium">No bookings found yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Booking ID</th>
                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Service</th>
                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest">Appointment</th>
                    <th className="px-8 py-6 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {bookings.map((booking) => (
                    <tr key={booking._id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <span className="font-black text-primary text-sm uppercase tracking-tight bg-primary/5 px-3 py-1 rounded-lg">
                          {booking.bookingId}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900">{booking.name}</span>
                          <span className="text-sm text-gray-400">{booking.phone}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="font-medium text-gray-700">{booking.service}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-gray-900 font-bold mb-1 text-sm">
                            <Calendar size={14} className="text-gray-400" />
                            {booking.date}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-xs">
                            <Clock size={14} />
                            {booking.slot}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-600' :
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-gray-100 text-gray-600'
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
