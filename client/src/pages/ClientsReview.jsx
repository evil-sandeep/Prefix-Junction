import React from 'react';
import { Star } from 'lucide-react';

const ClientsReview = () => {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gray-400 font-medium text-lg mb-2">Client's Review</h4>
          <h2 className="text-[46px] font-bold text-primary">Our Client Says</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Renu Devi", 
              text: "Excellent service! My dog looks absolutely adorable after the grooming session. The staff is very professional and caring. They handled my pet with so much love and patience. Highly recommended!", 
              stars: 5 
            },
            { 
              name: "Ashik Pillani", 
              text: "Best pet grooming service in the city! The home service is super convenient and the groomers are highly skilled. My Golden Retriever loves the experience. Great value for money!", 
              stars: 5 
            },
            { 
              name: "Siddhant Saxena", 
              text: "Amazing experience! The team is punctual, professional, and genuinely cares about pets. My dog was nervous at first but they made him feel comfortable. Will definitely use their services again!", 
              stars: 5 
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white rounded-[30px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <Star size={20} fill="#FFB800" stroke="#FFB800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={14} fill="#FFB800" stroke="#FFB800" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed text-[16px]">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsReview;
