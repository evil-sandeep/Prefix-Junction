import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      setLoading(false);
      setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
      form.current.reset();
    }, (error) => {
      setLoading(false);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
      console.error('EmailJS Error:', error);
    });
  };

  return (
    <section className="py-24 bg-[#f8f9fa]" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gray-400 font-medium text-lg mb-2">Contact Us</h4>
          <h2 className="text-[46px] font-bold text-primary uppercase">Contact For Any Query</h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white">
          <div className="md:w-1/2 p-12 bg-primary text-white">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <p className="mb-10 text-white/80 leading-relaxed">Have questions? We're here to help you and your furry friends with anything you need.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold">Our Location</h5>
                  <p className="text-sm text-white/70">JJFC+PQ, Keonjhar, Odisha 758014</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold">Phone Number</h5>
                  <p className="text-sm text-white/70">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold">Email Address</h5>
                  <p className="text-sm text-white/70">care@petflixjunction.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-12">
            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 gap-6">
                <input required name="from_name" type="text" placeholder="Your Name" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-gray-800 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                <input required name="reply_to" type="email" placeholder="Your Email" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-gray-800 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                <input name="subject" type="text" placeholder="Subject" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-gray-800 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                <textarea required name="message" placeholder="Message" rows="4" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-gray-800 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"></textarea>
              </div>

              {status.type && (
                <div className={`p-4 rounded-xl flex items-center gap-3 text-sm font-bold ${
                  status.type === 'success' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                  {status.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  {status.message}
                </div>
              )}

              <button 
                disabled={loading}
                className="w-full bg-primary text-white font-bold py-5 rounded-2xl transition-all hover:bg-[#00b875] shadow-lg hover:shadow-primary/30 active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
