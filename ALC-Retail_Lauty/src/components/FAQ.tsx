import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: '¿Es seguro comprar un coche de ocasión?',
    answer: 'Al comprar un coche de segunda mano, es clave verificar que haya pasado una inspección técnica. En nuestros concesionarios, todos los vehículos de ocasión son revisados por expertos para garantizar su óptimo funcionamiento.'
  },
  {
    id: 2,
    question: '¿Qué ventajas tiene comprar un coche de ocasión?',
    answer: 'Comprar un coche de segunda mano ofrece grandes ventajas, destacando el ahorro en comparación con uno nuevo. Además, hay múltiples opciones para encontrar el vehículo ideal según tu presupuesto y necesidades.'
  },
  {
    id: 3,
    question: '¿Cómo saber si un coche de segunda mano está en buen estado?',
    answer: 'Para garantizar el buen estado de un coche de ocasión, revisa su historial y realiza una inspección. Nuestros concesionarios ofrecen vehículos certificados, verificados en motor, frenos, suspensión y sistema eléctrico.'
  },
  {
    id: 4,
    question: '¿Los vehículos disponen de garantía?',
    answer: 'Ofrecemos 3 años de garantía en nuestros coches de ocasión, seminuevos y km 0. Lo que te brindará mayor seguridad y tranquilidad. Además, tendrás acceso a toda la documentación, incluido el historial de mantenimiento y kilometraje, para que tengas una compra informada.'
  }
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          ¡La mejor opción para tu bolsillo!
        </h2>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(item.id)}
              >
                <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                {openItem === item.id ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-blue-600 flex-shrink-0" />
                )}
              </button>

              <div 
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openItem === item.id ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 mb-4">{item.answer}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors">
                  Encuentra tu coche ideal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;