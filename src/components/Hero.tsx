import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://masiatous.es/wp-content/uploads/2020/04/Bouldering-Indoor-Masia-Tous-I-1080x675.jpg')"
      }}>
        <div className="absolute inset-0 bg-hero-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display font-extrabold mb-6 tracking-tight leading-tight">
            <span className="text-white">ESCALA MÁS ALTO.</span>
            <br />
            <span className="text-primary">LLEGA MÁS LEJOS.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Experimenta la emoción del boulder en nuestras instalaciones de escalada de última generación.
            Para todos los niveles, desde principiantes hasta expertos.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#classes" className="btn-primary w-full sm:w-auto">
              Reserva una Sesión
            </a>
            <a href="#pricing" className="btn-outline w-full sm:w-auto">
              Ver Precios
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a href="#about" aria-label="Desplazarse hacia abajo">
          <ArrowDownCircle size={40} className="text-white hover:text-primary transition-colors" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;