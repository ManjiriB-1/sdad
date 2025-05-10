import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import WhyChooseUsSection from './sections/WhyChooseUsSection';
import PortfolioSection from './sections/PortfolioSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;