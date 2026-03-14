import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactUs = () => {
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
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6">
                <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-gray-800 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-gray-800 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                <input type="text" placeholder="Subject" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-gray-800 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                <textarea placeholder="Message" rows="4" className="w-full bg-gray-50 border-none rounded-2xl p-5 text-gray-800 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"></textarea>
              </div>
              <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl transition-all hover:bg-primary-hover shadow-lg hover:shadow-primary/30 active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
