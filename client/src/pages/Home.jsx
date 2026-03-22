import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, Clock, ShieldCheck, Activity, Heart, Headset, Stethoscope, Scissors, Utensils, Star, MapPin } from 'lucide-react';
import Navbar from './Navbar';
import CrousalImg from './CrousalImg';
import Footer from './Footer';
import AboutBookingCTA from './AboutBookingCTA';
import { WhyChooseUsSection } from './WhyChooseUs';
import { OurServicesSection } from './OurServices';
import { HolisticCareSection } from './HolisticCare';
import GlimpseOfOurSalon from './GlimpseOfOurSalon';
import BeforeAndAfter from './BeforeAndAfter';
import OurWork from './OurWork';
import ClientsReview from './ClientsReview';
import ContactUs from './ContactUs';
import { PricingSection } from './Pricing';
import Map from './Map';

function Home() {
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Navbar />
      <CrousalImg />
      <AboutBookingCTA />
      <WhyChooseUsSection />
      <OurServicesSection />
      <HolisticCareSection />
      <GlimpseOfOurSalon />
      <BeforeAndAfter />
      <OurWork />
      <PricingSection />
      <ClientsReview />
      <ContactUs />
      <Map />

      <Footer />
    </div>
  );
}

export default Home;
