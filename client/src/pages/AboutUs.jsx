import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from '../components/SEO';
import FounderImg from '../assets/abhinas.jpg';

function AboutUs() {
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <SEO
        title="About Us"
        description="Learn about Petflix Junction's journey, our mission to provide elite pet care in Kendujhar, and meet our team of expert groomers and pet stylists."
        path="/about"
      />
      <Navbar />

      {/* About Us Hero */}
      <section className="relative py-32 bg-[#0c0d10] overflow-hidden text-center">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0c0d10]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight">Our Story</h1>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed mb-10 font-light">
            Founded with love, Petflix Junction is dedicated to making professional pet care accessible and stress-free for every pet parent in Kendujhar.
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-primary text-4xl font-bold mb-1">2025</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">Established</span>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-primary text-4xl font-bold mb-1">500+</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">Happy Pets</span>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-primary text-4xl font-bold mb-1">100%</span>
              <span className="text-white/60 text-xs uppercase tracking-widest">Pet Safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-[38px] font-bold text-primary mb-2 leading-none uppercase tracking-tight">About Us</h2>
              <h3 className="text-[30px] font-bold text-gray-900 mb-10 leading-tight">Petflix Grooming Services</h3>

              <div className="space-y-8 text-[18px] text-gray-500 leading-relaxed font-normal">
                <p>
                  Founded on 19th April 2026, Petflix Junction – Pet Grooming Services has
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

            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop"
                  alt="Pet grooming"
                  className="rounded-[40px] shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="py-24 bg-[#0c0d10] text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="flex-1">
              <h2 className="text-[38px] font-bold text-primary mb-2 leading-none uppercase tracking-tight">About Founder</h2>
              <h3 className="text-[30px] font-bold text-white mb-10 leading-tight">Abinash Rout</h3>

              <div className="space-y-6 text-[18px] text-gray-400 leading-relaxed font-light">
                <p>
                  <span className="text-primary font-bold">Petflix Junction</span> was founded by <span className="text-white font-medium">Abinash Rout</span>, a successful, young, and dynamic entrepreneur who has established his presence across multiple business sectors. With a passion for innovation and community impact, he has expanded his entrepreneurial journey into the pet care industry by launching Petflix Junction—an initiative dedicated to enhancing the lives of pets and their families.
                </p>
                <p>
                  Petflix Junction is a comprehensive pet care destination designed to provide professional grooming and wellness services. From bathing and styling to complete parlour care, every pet receives expert attention in a safe and friendly environment. In addition, the brand offers its own line of high-quality pet food, treats, and accessories under the Petflix Junction label, ensuring both quality and trust. The organization is also <span className="text-primary">ISO 9001:2015 certified</span>, reflecting its commitment to maintaining high standards of service and customer satisfaction.
                </p>
                <p className="italic border-l-4 border-primary pl-6 py-2">
                  "Beyond business, Abinash Rout envisions Petflix Junction as a platform for compassion and social responsibility. For the first time in Keonjhar, he has introduced a facility where pets are cared for with love and understanding."
                </p>
                <p>
                  Moreover, he has pledged to provide <span className="text-white font-medium">free medical treatment and care for stray dogs</span> in the region, reinforcing his dedication to animal welfare and community service.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative group">
                <div className="absolute -inset-4 border border-primary/20 rounded-[40px] z-0 group-hover:inset-0 transition-all duration-500"></div>
                <img
                  src={FounderImg}
                  alt="Abinash Rout - Founder"
                  className="rounded-[40px] shadow-2xl relative z-10 w-full object-cover aspect-[4/5] filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-0 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      {/* <section className="py-24 bg-[#f8f9fa]" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-gray-400 font-medium text-lg mb-2 italic">Company Leadership</h4>
            <h2 className="text-[46px] font-bold text-primary">Meet Our Founder</h2>
          </div>

          <div className="flex justify-center mt-10">
            {[
              { name: "Abinash Rout", role: "CEO & Founder", img: FounderImg }
            ].map((member, idx) => (
              <div key={idx} className="group max-w-sm w-full">
                <div className="relative overflow-hidden rounded-[40px] mb-6 shadow-lg aspect-[4/5] bg-white">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <p className="text-white text-xs font-bold uppercase tracking-[3px]">{member.role}</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-[22px] font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-gray-400 font-medium uppercase text-[10px] tracking-[4px]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}

export default AboutUs;
