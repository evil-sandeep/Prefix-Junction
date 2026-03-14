import React from 'react';

const Map = () => {
  return (
    <section className="h-[500px] relative w-full overflow-hidden" id="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.840798604313!2d85.60275583626288!3d21.183756317789396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19391694f29135%3A0xb3bc28889c19d453!2sKeonjhar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1710355412431!5m2!1sen!2sin" 
        className="w-full h-full grayscale-[0.2] contrast-[1.1]" 
        style={{ border: 0 }} 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;
