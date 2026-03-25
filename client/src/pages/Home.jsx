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
import SEO from '../components/SEO';

function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "PetGroomingService",
    "name": "Petflix Junction",
    "image": "https://www.petflixjunction.com/logo.jpg",
    "description": "Professional pet grooming, bathing, and spa services at your doorstep. We take care of your furry friends with love and care.",
    "url": "https://www.petflixjunction.com",
    "telephone": "+91 98765 43210",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Keonjhar",
      "addressRegion": "Odisha",
      "postalCode": "758014",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Su 09:00-20:00"
  };

  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <SEO 
        title="Professional Pet Grooming & Spa Services" 
        description="Petflix Junction is your one-stop destination for premium pet grooming, bathing, and spa services. We offer doorstep sessions and professional care for your pets."
        path="/"
        schema={homeSchema}
      />
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
