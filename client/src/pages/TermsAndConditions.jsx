import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../components/SEO';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <SEO 
        title="Terms & Conditions" 
        description="Review the terms and conditions for using Petflix Junction's website and grooming services. Information on bookings, cancellations, and pet health policies."
        path="/terms-and-conditions"
      />
      <Navbar />
      
      <main className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="text-5xl font-black text-primary mb-6 italic uppercase tracking-tighter">Terms & Conditions</h1>
            <p className="text-gray-500 text-lg font-medium tracking-wide">Agreement between you and Petflix Junction</p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shadow-sm ring-4 ring-white">01</span>
                Introduction
              </h2>
              <p className="leading-relaxed">
                By accessing this website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shadow-sm ring-4 ring-white">02</span>
                Service Provision
              </h2>
              <p className="leading-relaxed">
                Petflix Junction provides pet grooming, bathing, and related care services. We reserve the right to refuse service to any pet that poses a risk to our staff or other animals. All pets must be up-to-date with vaccinations as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shadow-sm ring-4 ring-white">03</span>
                Booking and Cancellations
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>Appointments are subject to availability and must be booked in advance.</li>
                <li>Cancellations should be made at least 24 hours prior to the scheduled session.</li>
                <li>Failure to show up or late cancellations may result in a cancellation fee.</li>
                <li>Refunds for prepaid sessions are subject to our refund policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shadow-sm ring-4 ring-white">04</span>
                Pet Health and Safety
              </h2>
              <p className="leading-relaxed">
                Owners must disclose any known medical conditions, allergies, or behavioral issues before the grooming session. Petflix Junction is not liable for complications arising from undisclosed conditions. We prioritize the health and comfort of every pet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shadow-sm ring-4 ring-white">05</span>
                Pricing and Payments
              </h2>
              <p className="leading-relaxed">
                Service pricing depends on pet breed, size, and coat condition. We provide estimates prior to the session, but final costs may vary based on specific requirements. Payments are due upon completion of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shadow-sm ring-4 ring-white">06</span>
                Limitation of Liability
              </h2>
              <p className="leading-relaxed">
                Petflix Junction strives for the highest quality of care. However, we are not liable for any indirect, incidental, or consequential damages resulting from the use of our website or services.
              </p>
            </section>

            <section className="bg-primary/5 rounded-[40px] p-10 border-2 border-primary/10 shadow-xl shadow-primary/5">
              <h2 className="text-2xl font-black text-primary mb-6 uppercase tracking-tighter text-center italic underline underline-offset-8 decoration-4 decoration-primary/20">Acknowledge Agreement</h2>
              <p className="text-center text-gray-600 mb-8 font-medium leading-relaxed">By continuing to use our services and website, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>
              <div className="flex justify-center">
                <a href="mailto:support@petflixjunction.com" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-2xl text-sm font-black tracking-[2px] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 uppercase italic">Questions? Contact Us</a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
