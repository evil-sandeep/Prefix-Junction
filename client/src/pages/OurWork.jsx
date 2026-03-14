import React from 'react';

const OurWork = () => {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold mb-2 uppercase">500+</div>
            <div className="text-white/80 text-sm uppercase tracking-widest font-bold">Happy Pets</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 uppercase">10+</div>
            <div className="text-white/80 text-sm uppercase tracking-widest font-bold">Expert Groomers</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 uppercase">24/7</div>
            <div className="text-white/80 text-sm uppercase tracking-widest font-bold">Premium Care</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2 uppercase">100%</div>
            <div className="text-white/80 text-sm uppercase tracking-widest font-bold">Safety Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
