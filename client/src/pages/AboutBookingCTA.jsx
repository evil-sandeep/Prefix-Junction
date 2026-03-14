import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { jsPDF } from 'jspdf';

const AboutBookingCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    slot: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
    bookingId: null,
    bookingData: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name || e.target.id]: e.target.value
    });
  };

  const handleDownloadReceipt = () => {
    if (!status.bookingId || !status.bookingData) return;
    
    const { name, email, phone, service, date, slot } = status.bookingData;
    const bookingId = status.bookingId;
    
    const doc = new jsPDF();

    // Add Logo or Brand Name
    doc.setFontSize(22);
    doc.setTextColor(0, 173, 111); // Primary color
    doc.text('PETFLIX JUNCTION', 105, 20, { align: 'center' });
    doc.setFontSize(14);
    doc.setTextColor(100);
    doc.text('Pet Grooming Services Confirmation', 105, 30, { align: 'center' });

    // Draw Line
    doc.setDrawColor(200);
    doc.line(20, 35, 190, 35);

    // Booking ID Highlight
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Booking ID:`, 20, 50);
    doc.setFont(undefined, 'bold');
    doc.text(bookingId.toUpperCase(), 50, 50);
    doc.setFont(undefined, 'normal');

    // Customer Details Section
    doc.setFontSize(14);
    doc.setTextColor(0, 173, 111);
    doc.text('Customer Details', 20, 65);
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text(`Name:`, 20, 75);
    doc.text(name, 50, 75);
    doc.text(`Phone:`, 20, 82);
    doc.text(phone, 50, 82);
    doc.text(`Email:`, 20, 89);
    doc.text(email, 50, 89);

    // Appointment Details Section
    doc.setFontSize(14);
    doc.setTextColor(0, 173, 111);
    doc.text('Appointment Details', 20, 105);
    doc.setFontSize(11);
    doc.setTextColor(0);
    doc.text(`Service:`, 20, 115);
    doc.text(service, 50, 115);
    doc.text(`Date:`, 20, 122);
    doc.text(date, 50, 122);
    doc.text(`Slot:`, 20, 129);
    doc.text(slot, 50, 129);

    // Footer
    doc.setDrawColor(200);
    doc.line(20, 145, 190, 145);
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text('Thank you for choosing Petflix Junction!', 105, 155, { align: 'center' });
    doc.text('We look forward to pampering your pet.', 105, 162, { align: 'center' });
    doc.setFontSize(8);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 105, 175, { align: 'center' });

    doc.save(`Petflix-Receipt-${bookingId}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null, bookingId: null, bookingData: null });

    try {
      const response = await fetch('http://localhost:5000/api/book-slot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          bookingId: data.booking.bookingId,
          bookingData: { ...formData }
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          slot: ''
        });
      } else {
        throw new Error(data.message || 'Failed to book slot');
      }
    } catch (err) {
      console.error('Booking Error:', err);
      setStatus({
        loading: false,
        success: false,
        error: err.message,
        bookingId: null,
        bookingData: null
      });
    }
  };

  return (
    <section className="py-24 bg-white" id="booking">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Booking Form Card (Left Side) */}
          <div className="w-full lg:w-[500px] bg-white rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-12 border border-white">
            <h2 className="text-[32px] font-bold text-primary mb-10 tracking-tight">Book Your slot</h2>
            
            {status.success ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Successful!</h3>
                <p className="text-gray-600 mb-6">Your slot has been reserved.</p>
                <div className="bg-white border-2 border-dashed border-green-200 rounded-xl p-4 mb-8">
                  <span className="text-sm text-gray-400 block mb-1">Your Booking ID</span>
                  <span className="text-2xl font-black text-primary tracking-wider uppercase">{status.bookingId}</span>
                </div>
                
                <div className="flex flex-col gap-4">
                  <button 
                    onClick={handleDownloadReceipt}
                    className="w-full bg-primary hover:bg-[#00b875] text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Receipt
                  </button>
                  <button 
                    onClick={() => setStatus({ ...status, success: false })}
                    className="text-primary font-bold hover:underline"
                  >
                    Book another slot
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status.error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl flex items-center gap-3 text-sm font-medium">
                    <AlertCircle size={18} />
                    {status.error}
                  </div>
                )}
                <div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all placeholder:text-gray-400 text-gray-700 font-medium"
                  />
                </div>
                <div className="relative group">
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-gray-700 appearance-none cursor-pointer font-medium"
                  >
                    <option value="">Select A Service</option>
                    <option>Teeth Brushing</option>
                    <option>Ear Cleaning</option>
                    <option>Deshedding / Dematting</option>
                    <option>Shampoo & Blow Drying</option>
                    <option>Hygiene Cut</option>
                    <option>Zero Hair Cut / Trimming</option>
                    <option>Tick & Flea Treatment</option>
                    <option>Cat Zero Hair Cut with Nail Cut</option>
                    <option>Dog Boarding 24 Hours</option>
                    <option>Cat Boarding</option>
                    <option>Dog Day Care</option>
                    <option>Swimming + Shampoo Bath</option>
                    <option>Normal Bath Pack</option>
                    <option>Full Grooming Bath Pack</option>
                    <option>Advance Full Grooming Bath Pack</option>
                    <option>Full Grooming Medicated Bath Pack</option>
                    <option>Pet Resort Pack</option>
                  </select>
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
                <div className="relative">
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-gray-700 uppercase text-xs font-bold tracking-widest"
                  />
                </div>
                <div className="relative group">
                  <select 
                    name="slot"
                    required
                    value={formData.slot}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-gray-50/50 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all text-gray-700 appearance-none cursor-pointer font-medium"
                  >
                    <option value="">Select a slot</option>
                    <option>Morning (9 AM - 12 PM)</option>
                    <option>Afternoon (1 PM - 4 PM)</option>
                    <option>Evening (5 PM - 8 PM)</option>
                  </select>
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={status.loading}
                  className="w-full bg-primary hover:bg-[#00b875] text-white font-bold py-5 rounded-xl transition-all shadow-[0_15px_30px_rgba(0,173,111,0.25)] hover:shadow-[0_20px_40px_rgba(0,173,111,0.3)] hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Processing...
                    </>
                  ) : 'Book Now'}
                </button>
              </form>
            )}
          </div>

          {/* About Us Content (Right Side) */}
          <div className="flex-1">
            <h2 className="text-[38px] font-bold text-primary mb-2 leading-none uppercase tracking-tight">About Us</h2>
            <h3 className="text-[30px] font-bold text-gray-900 mb-10 leading-tight">Petflix Grooming Services</h3>
            
            <div className="space-y-8 text-[18px] text-gray-500 leading-relaxed font-normal">
              <p>
                Founded on November 10, 2025, Petflix Junction – Pet Grooming Services has 
                quickly established itself as a trusted and comprehensive pet care provider in 
                Kendujhar. Our mission is to deliver top-quality grooming and wellness services 
                that ensure every pet looks, feels, and lives their best.
              </p>
              <p>
                We proudly offer doorstep grooming services across Kendujhar, along with a 
                state-of-the-art Pet Grooming Salon located at Mandua, near Saras Road, 
                Kendujhar. In addition to grooming, we regularly organize pet vaccination camps, 
                and provide a wide range of pet essentials including premium pet food, grooming 
                accessories, toys, and treats — all available online.
              </p>
              <p>
                Very soon, our offline store and full-service pet care center will also be launched 
                to serve you even better. For now, all our services are conveniently available 
                online, ensuring your pets receive care at your doorstep with just a click!
              </p>
            </div>

            {/* Checklist */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-12">
              {[
                "Expert Groomers", "Quality Products", 
                "Affordable Prices", "Home Service", 
                "Safe & Hygienic", "Pet Friendly"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-5 group">
                  <div className="w-7 h-7 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <CheckCircle2 size={24} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-[20px] text-gray-800 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutBookingCTA;
