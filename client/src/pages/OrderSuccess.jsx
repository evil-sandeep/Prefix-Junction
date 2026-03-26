import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCheckoutAddress } from '../redux/checkoutSlice';
import Navbar from './Navbar';
import Footer from './Footer';
import { CheckCircle, ShoppingBag, ArrowRight, Download, MapPin, Package, CreditCard, ShieldCheck, Calendar } from 'lucide-react';
import { jsPDF } from 'jspdf';

const OrderSuccess = () => {
  const location = useLocation();
  const address = useSelector(selectCheckoutAddress);

  // Destructuring with defaults for development/testing
  const { paymentId, orderId, amount, plan, bookingData } = location.state || {
    paymentId: 'PAY' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    orderId: 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    amount: 0,
    plan: null,
    bookingData: null
  };

  const handleDownloadReceipt = () => {
    if (!orderId) return;

    const doc = new jsPDF();
    const primaryColor = [0, 173, 111]; // #00AD6F

    // Brand Header
    doc.setFontSize(24);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setFont(undefined, 'bold');
    doc.text('PETFLIX JUNCTION', 105, 25, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.setFont(undefined, 'normal');
    doc.text('PREMIUM PET GROOMING & CARE', 105, 32, { align: 'center' });

    // Decorative Line
    doc.setDrawColor(240);
    doc.setLineWidth(0.5);
    doc.line(20, 40, 190, 40);

    // Document Title
    doc.setFontSize(16);
    doc.setTextColor(30);
    doc.setFont(undefined, 'bold');
    doc.text(plan ? 'SUBSCRIPTION RECEIPT' : 'BOOKING CONFIRMATION', 20, 55);

    // Order/Booking Info
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.setFont(undefined, 'normal');
    doc.text(`Booking Number:`, 20, 65);
    doc.setTextColor(0);
    doc.setFont(undefined, 'bold');
    doc.text(orderId.toUpperCase(), 60, 65);

    doc.setTextColor(100);
    doc.setFont(undefined, 'normal');
    doc.text(`Date:`, 20, 72);
    doc.setTextColor(0);
    doc.text(new Date().toLocaleDateString(), 60, 72);

    doc.setTextColor(100);
    doc.text(`Payment ID:`, 20, 79);
    doc.setTextColor(0);
    doc.text(paymentId || 'PRE-PAID', 60, 79);

    // Content Section
    doc.setFillColor(250, 250, 250);
    doc.roundedRect(20, 90, 170, 60, 5, 5, 'F');

    if (bookingData) {
      doc.setFontSize(12);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text('Service Details', 30, 100);

      doc.setFontSize(10);
      doc.setTextColor(0);
      doc.setFont(undefined, 'normal');
      doc.text(`Customer Name:`, 30, 110);
      doc.setFont(undefined, 'bold');
      doc.text(bookingData.name || 'N/A', 70, 110);

      doc.setFont(undefined, 'normal');
      doc.text(`Email:`, 30, 117);
      doc.text(bookingData.email || 'N/A', 70, 117);

      doc.text(`Phone:`, 30, 124);
      doc.text(bookingData.phone || 'N/A', 70, 124);

      doc.text(`Service:`, 30, 131);
      doc.setFont(undefined, 'bold');
      doc.text(bookingData.service || 'N/A', 70, 131);

      doc.setFont(undefined, 'normal');
      doc.text(`Appointment:`, 30, 138);
      doc.text(`${bookingData.date || 'N/A'} at ${bookingData.slot || 'N/A'}`, 70, 138);
    } else if (plan) {
      doc.setFontSize(12);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text('Subscription Details', 30, 105);

      doc.setFontSize(10);
      doc.setTextColor(0);
      doc.text(`Tier:`, 30, 115);
      doc.setFont(undefined, 'bold');
      doc.text(`${plan} Member`, 70, 115);

      doc.setFont(undefined, 'normal');
      doc.text(`Status:`, 30, 122);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      doc.text('ACTIVE', 70, 122);

      doc.setTextColor(0);
      doc.text(`Amount Paid:`, 30, 129);
      doc.text(`Rs. ${amount || 0}`, 70, 129);
    } else {
      // Support for direct orders if any
      doc.text('Your order has been confirmed and is being processed.', 30, 115);
    }

    // Footer
    doc.setFontSize(9);
    doc.setTextColor(150);
    doc.setFont(undefined, 'italic');
    doc.text('Thank you for being part of the Petflix family!', 105, 170, { align: 'center' });

    doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.setLineWidth(1);
    doc.line(85, 175, 125, 175);

    doc.setFontSize(8);
    doc.setTextColor(180);
    doc.setFont(undefined, 'normal');
    doc.text('This is a computer-generated receipt.', 105, 185, { align: 'center' });

    doc.save(`Petflix-Receipt-${orderId}.pdf`);
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
              {plan ? `Subscription Activated! 🎉` : 'Booking Successful! 🎉'}
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-md mx-auto">
              {plan
                ? `Welcome to the ${plan} tier! Your premium benefits are now active.`
                : "Your order has been confirmed. We're getting your pet's favorites ready!"}
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
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{plan ? 'Transaction ID' : 'Booking / Order ID'}</p>
                  <p className="text-sm font-black text-slate-900 font-mono tracking-wider">{orderId}</p>
                </div>
              </div>

              {/* <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50/80 border border-slate-100/50 hover:bg-white transition-all hover:shadow-sm">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-500 shadow-sm">
                  <CreditCard size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Razorpay Payment ID</p>
                  <p className="text-sm font-black text-slate-900 font-mono tracking-wider">{paymentId}</p>
                </div>
              </div> */}
            </div>

            {!plan ? (
              bookingData ? (
                <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50/80 border border-slate-100/50 hover:bg-white transition-all hover:shadow-sm h-full">
                  <div className="w-10 h-10 bg-white rounded-xl flex-shrink-0 flex items-center justify-center text-primary shadow-sm">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Service Appointment</p>
                    <div className="text-sm font-black text-slate-900 leading-relaxed">
                      <p className="mb-0.5">{bookingData.service}</p>
                      <p className="text-[13px] font-bold text-slate-600 leading-snug">
                        {bookingData.date} at {bookingData.slot}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50/80 border border-slate-100/50 hover:bg-white transition-all hover:shadow-sm h-full">
                  <div className="w-10 h-10 bg-white rounded-xl flex-shrink-0 flex items-center justify-center text-rose-500 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Delivery Address</p>
                    <div className="text-sm font-black text-slate-900 leading-relaxed">
                      <p className="mb-0.5">{address?.fullName || 'Customer'}</p>
                      <p className="text-[13px] font-bold text-slate-600 leading-snug">
                        {address?.addressLine}, {address?.city}, {address?.state} - {address?.pincode}
                      </p>
                    </div>
                  </div>
                </div>
              )
            ) : (
              <div className="flex items-start gap-4 p-5 rounded-3xl bg-slate-50/80 border border-slate-100/50 hover:bg-white transition-all hover:shadow-sm h-full">
                <div className="w-10 h-10 bg-white rounded-xl flex-shrink-0 flex items-center justify-center text-primary shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Subscription Tier</p>
                  <div className="text-sm font-black text-slate-900 leading-relaxed">
                    <p className="mb-0.5 text-lg">{plan} Member</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-emerald-500">Premium Access Enabled</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dynamic Action Buttons based on context */}
          <div className="flex flex-col gap-6">
            {!plan && bookingData ? (
              <>
                {/* Primary Action for Bookings: Download Receipt */}
                <button
                  onClick={handleDownloadReceipt}
                  className="w-full bg-[#0F172A] hover:bg-slate-800 text-white py-6 rounded-[32px] font-black text-sm uppercase tracking-[0.2em] transition-all active:scale-95 shadow-2xl shadow-slate-200 flex items-center justify-center gap-4 group"
                >
                  <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
                  Download Booking Receipt
                </button>

                {/* Secondary Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/dashboard"
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 text-center"
                  >
                    View in Dashboard
                  </Link>
                  <Link
                    to="/booking"
                    className="flex-1 border-2 border-slate-100 hover:border-slate-200 text-slate-500 py-5 rounded-3xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 text-center"
                  >
                    Book another slot
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex flex-col sm:flex-row gap-5">
                <Link
                  to={plan ? "/dashboard" : "/track"}
                  state={!plan ? { order: { _id: orderId, address, totalAmount: amount, deliveryStatus: 'processing', createdAt: new Date() } } : {}}
                  className="flex-1 bg-[#0F172A] hover:bg-slate-800 text-white py-5 rounded-3xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl flex items-center justify-center gap-3 group text-center"
                >
                  {plan ? "Go to Dashboard" : "Track Order"}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to={plan ? "/services" : "/products"} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-900 py-5 rounded-3xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 text-center">
                  {plan ? <ShieldCheck size={18} /> : <ShoppingBag size={18} />}
                  {plan ? "Explore Premium Services" : "Continue Shopping"}
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={handleDownloadReceipt}
            className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer w-full group"
          >
            <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Download Receipt</span>
          </button>
        </div>
      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
      `}} />
    </div>
  );
};

export default OrderSuccess;
