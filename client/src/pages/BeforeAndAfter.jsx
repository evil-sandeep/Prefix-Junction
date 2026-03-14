import React from 'react';

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
              before: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1887&auto=format&fit=crop", 
              after: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" 
            },
            { 
              title: "Spa Treatment", 
              before: "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop", 
              after: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2068&auto=format&fit=crop" 
            },
            { 
              title: "Haircut & Style", 
              before: "https://images.unsplash.com/photo-1591768793355-74d7cab35171?q=80&w=2070&auto=format&fit=crop", 
              after: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop" 
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
