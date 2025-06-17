
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section min-h-[80vh] flex items-center justify-center text-rocktown-off-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-title mb-6">RockTown Climbing</h1>
        <h2 className="text-2xl md:text-3xl mb-8 font-body font-semibold">
          Descubre la emoción de la escalada en pleno centro de Madrid 🧗‍♂️
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body">
          Ofrecemos las mejores clases de escalada, adaptadas a todas las edades y niveles,
          desde principiantes hasta expertos. ¿Quieres probar? ¡Te invitamos a tu 
          <span className="font-bold"> primera clase gratis</span>!
        </p>
        
        <div className="mt-10">
          <Button className="bg-rocktown-electric-blue hover:bg-opacity-90 text-rocktown-carbon text-xl font-bold py-4 px-10 rounded-md transition-all transform hover:scale-105 h-auto grip-button">
            Contáctanos
          </Button>
          <p className="mt-4 text-rocktown-off-white/80">
            y empieza a escalar con nosotros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
