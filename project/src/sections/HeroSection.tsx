import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2736139/pexels-photo-2736139.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white max-w-5xl">
        <div className="md:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Transform Your Building's Exterior with Cutting-Edge Envelope Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Expert architectural systems designed for durability, sustainability, and aesthetic excellence. Elevate your buildings to new heights.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg">
            Start Your Project Today
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;