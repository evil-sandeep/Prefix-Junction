import React from 'react';

const GlimpseOfOurSalon = () => {
  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gray-400 font-medium text-lg mb-2">Glimpse Of Our Salon</h4>
          <h2 className="text-[46px] font-bold text-primary">Petflix Juntion</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=2068&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1887&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1591768793355-74d7cab35171?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop"
          ].map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-[24px] shadow-lg aspect-square group">
              <img 
                src={img} 
                alt={`Salon glimpse ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlimpseOfOurSalon;
