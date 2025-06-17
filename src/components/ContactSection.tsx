
import React from 'react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section className="py-16 bg-rocktown-carbon rock-texture">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-title mb-6 text-rocktown-off-white">Contact Us</h2>
        <p className="text-lg mb-6 text-rocktown-off-white/90">
          Puedes contactarnos aquí:
        </p>
        <div className="space-y-2 mb-8">
          <p className="text-rocktown-off-white/90">
            <span className="font-semibold">Correo:</span> rocktown@rocktownclimb.com
          </p>
          <p className="text-rocktown-off-white/90">
            <span className="font-semibold">Teléfono (WhatsApp):</span> +34 613 19 70 87
          </p>
        </div>
        <Button className="bg-rocktown-neon-yellow hover:bg-opacity-90 text-rocktown-carbon text-xl font-bold py-4 px-10 transition-all transform hover:scale-105 h-auto grip-button">
          CONTACTAR
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
