import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-3xl mx-auto">
          Confía en nuestra experiencia y encuentra el coche perfecto para ti al mejor precio.
        </h2>
        <button 
          className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-md font-medium transition-colors transform hover:scale-105 duration-200"
        >
          Descubre nuestras ofertas
        </button>
      </div>
    </section>
  );
};

export default CallToAction;