import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-black text-primary mb-6 italic uppercase tracking-tighter">Privacy Policy</h1>
            <p className="text-gray-500 text-lg font-medium">Last Updated: March 25, 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">01</span>
                Introduction
              </h2>
              <p className="leading-relaxed">
                Welcome to Petflix Junction. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and use our grooming services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">02</span>
                Information We Collect
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed font-semibold text-gray-800">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Pet information (name, breed, age, medical history)</li>
                  <li>Booking and service preferences</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">03</span>
                How We Use Your Information
              </h2>
              <div className="space-y-4">
                <p className="leading-relaxed">We use the collected information for various purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To process your bookings and provide grooming services</li>
                  <li>To communicate with you about your appointments</li>
                  <li>To send you updates, newsletters, and promotional offers (if opted-in)</li>
                  <li>To improve our services and website user experience</li>
                  <li>To maintain the safety and health of your pet during sessions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">04</span>
                Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. However, please note that no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">05</span>
                Your Rights
              </h2>
              <p className="leading-relaxed">
                You have the right to access, update, or delete your personal information. If you wish to exercise any of these rights or have questions about our privacy practices, please contact us at support@petflixjunction.com.
              </p>
            </section>

            <section className="bg-gray-50 rounded-[32px] p-8 mt-16 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-widest text-center">Contact Us</h2>
              <p className="text-center text-gray-500 mb-6">If you have any questions about this Privacy Policy, please reach out to our team.</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="text-center">
                  <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:support@petflixjunction.com" className="text-primary font-bold hover:underline">support@petflixjunction.com</a>
                </div>
                <div className="h-10 w-px bg-gray-200 hidden md:block"></div>
                <div className="text-center">
                  <span className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Phone</span>
                  <p className="text-gray-900 font-bold">+91 98765 43210</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
