import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all static images from client/src/assets/HappyPets
import img1 from '../assets/HappyPets/WhatsApp Image 2026-06-07 at 3.45.02 PM (1).jpeg';
import img2 from '../assets/HappyPets/WhatsApp Image 2026-06-07 at 3.45.02 PM.jpeg';
import img3 from '../assets/HappyPets/WhatsApp Image 2026-06-07 at 3.45.03 PM (1).jpeg';
import img4 from '../assets/HappyPets/WhatsApp Image 2026-06-07 at 3.45.03 PM.jpeg';
import img5 from '../assets/HappyPets/WhatsApp Image 2026-06-07 at 3.45.04 PM (1).jpeg';
import img6 from '../assets/HappyPets/WhatsApp Image 2026-06-07 at 3.45.04 PM.jpeg';
import img7 from '../assets/HappyPets/WhatsApp Image 2026-06-07 at 3.45.05 PM.jpeg';

const staticImages = [
  { url: img1, name: 'Happy Pet 1' },
  { url: img2, name: 'Happy Pet 2' },
  { url: img3, name: 'Happy Pet 3' },
  { url: img4, name: 'Happy Pet 4' },
  { url: img5, name: 'Happy Pet 5' },
  { url: img6, name: 'Happy Pet 6' },
  { url: img7, name: 'Happy Pet 7' },
];

const OurHappyPets = () => {
  // Use a carousel state to manage the sliding window of images.
  const [startIndex, setStartIndex] = useState(0);

  // Determine how many items to show at once based on screen width.
  // We'll show 4 images on large screens, 3 on md, 2 on sm, 1 on xs.
  // Since Tailwind grid classes will be used, we'll shift the startIndex window.
  const itemsToShow = 4;

  const handlePrev = () => {
    setStartIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, staticImages.length - itemsToShow) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => 
      prevIndex >= staticImages.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  // Extract the visible subset of images
  const visibleImages = staticImages.slice(startIndex, startIndex + itemsToShow);

  // If there aren't enough images to fill the view, we can wrap around
  const displayImages = [...visibleImages];
  if (displayImages.length < itemsToShow && staticImages.length > itemsToShow) {
    const remaining = itemsToShow - displayImages.length;
    displayImages.push(...staticImages.slice(0, remaining));
  }

  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden" id="our-happy-pets">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[42px] font-bold text-primary italic">Our Happy Pets</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Meet the adorable, happy pets pampered at our salon! Click the navigation arrows to see more.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-3 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 hover:bg-primary hover:text-white transition duration-300 transform -translate-x-1/2 md:translate-x-0"
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-8 md:px-12 transition-all duration-500 ease-in-out">
            {displayImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative overflow-hidden rounded-[20px] shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 h-80"
              >
                <img 
                  src={img.url} 
                  alt={img.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-3 bg-white text-gray-800 rounded-full shadow-lg border border-gray-200 hover:bg-primary hover:text-white transition duration-300 transform translate-x-1/2 md:translate-x-0"
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurHappyPets;
