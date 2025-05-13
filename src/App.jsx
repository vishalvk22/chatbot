import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ChatbotWidget from './components/ChatbotWidget';

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <UseCases />
      <Testimonials />
      <FAQSection />
      <ChatbotWidget />
      <Footer />
    </div>
  );
}

export default App;
