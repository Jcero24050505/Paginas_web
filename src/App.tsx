import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutTabs from './components/AboutTabs';
import SpecialOffers from './components/SpecialOffers';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import PurchaseProcess from './components/PurchaseProcess';
import FAQ from './components/FAQ';
import BrandLogos from './components/BrandLogos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        <AboutTabs />
        <SpecialOffers />
        <Testimonials />
        <CallToAction />
        <PurchaseProcess />
        <FAQ />
        <BrandLogos />
      </main>
      <Footer />
    </div>
  );
}

export default App;