import React from 'react';
import beforeGrooming from '../assets/beforecat.png';
import afterGrooming from '../assets/aftercat.png';
import afterspa from '../assets/afterspa.png';
import beforeSpa from '../assets/beforespa.png';
import beforeHaircut from '../assets/beforehaircut.png';
import afterHaircut from '../assets/afterhaircut.png';

const BeforeAndAfter = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]" id="before-after">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[42px] font-bold text-primary italic">Before & After</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Full Grooming Package",
              before: beforeGrooming,
              after: afterGrooming
            },
            {
              title: "Spa Treatment",
              before: beforeSpa,
              after: afterspa
            },
            {
              title: "Haircut & Style",
              before: beforeHaircut,
              after: afterHaircut
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-[24px] overflow-hidden shadow-lg border border-white hover:shadow-2xl transition-all duration-300">
              <div className="flex h-[250px]">
                <div className="w-1/2 relative overflow-hidden group">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest backdrop-blur-sm">Before</div>
                </div>
                <div className="w-1/2 relative overflow-hidden group">
                  <img src={item.after} alt="After" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-primary/80 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-widest backdrop-blur-sm">After</div>
                </div>
              </div>
              <div className="py-5 text-center bg-white">
                <span className="text-[17px] font-bold text-gray-800 tracking-tight">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAndAfter;
