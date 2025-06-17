
import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-rocktown-dark-gray text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-8">
              ¡Descubre nuestras dos salas de boulder, creadas para superarte cada día!
            </h2>
            
            <ul className="space-y-6 text-lg">
              <li className="flex gap-3">
                <span className="text-2xl">🧗</span>
                <span>
                  <span className="font-semibold">Nuevos bloques cada semana:</span> Siempre tendrás retos frescos 
                  y emocionantes, sin importar tu nivel.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🪨</span>
                <span>
                  <span className="font-semibold">Ambiente seguro y divertido:</span> Nuestros instructores 
                  te acompañan y asesoran para que disfrutes al máximo.
                </span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-12 mb-6">¿Te animas a probar?</h3>
            
            <ul className="space-y-6 text-lg">
              <li className="flex gap-3">
                <span className="text-2xl">🔥</span>
                <span>
                  <span className="font-semibold">Primera toma de contacto:</span> Ven a escalar, siente la adrenalina 
                  y comprueba lo emocionante que puede ser.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🏆</span>
                <span>
                  <span className="font-semibold">Clases de escalada:</span> Si te enganchas (¡que lo harás!), apúntate 
                  a nuestras clases y descubre técnicas, trucos y todo el entrenamiento que necesitas para 
                  convertirte en un auténtico escalador.
                </span>
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 flex flex-col gap-6">
            <div className="bg-gray-400 h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566836610593-62a64888a216" 
                alt="Boulder wall" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-400 h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0" 
                alt="Climbing training" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
