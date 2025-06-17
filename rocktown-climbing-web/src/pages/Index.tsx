
import React from 'react';
import RocktownHeader from '../components/RocktownHeader';
import HeroSection from '../components/HeroSection';
import ImageCarousel from '../components/ImageCarousel';
import LocationSection from '../components/LocationSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactSection from '../components/ContactSection';
import RocktownFooter from '../components/RocktownFooter';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <RocktownHeader />
      <main>
        <HeroSection />
        <ImageCarousel />
        <LocationSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <RocktownFooter />
    </div>
  );
};

export default Index;
