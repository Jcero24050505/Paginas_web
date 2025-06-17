import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';

interface TabContent {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  listItems: string[];
  description: string;
}

const tabs: TabContent[] = [
  {
    id: 'company',
    title: 'Nuestra Empresa',
    image: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtitle: 'Ofrecemos coches de:',
    listItems: ['Seminuevos', 'Ocasión', 'Kilómetro 0'],
    description: 'Nuestra misión: Brindar vehículos Km0, seminuevos y de ocasión con la mejor calidad-precio, asegurando confianza, transparencia y una compra segura y sencilla para nuestros clientes.'
  },
  {
    id: 'seminuevos',
    title: 'Seminuevos',
    image: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtitle: 'Nuestras marcas:',
    listItems: [
      'Volkswagen, Hyundai, MG, Peugeot, Citroen',
      'Suzuki, KGM, Opel, Jeep, y muchas más…'
    ],
    description: 'Diferencia de seminuevo y ocasión: Un vehículo seminuevo tiene una edad máxima de 24 meses y pocos kilómetros. Mientras que un coche de ocasión ha recorrido más kilómetros, más tiempo y dispone de precios más asequibles.'
  },
  {
    id: 'ocasion',
    title: 'Ocasión',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtitle: 'Nuestras marcas:',
    listItems: [
      'Volkswagen, Hyundai, MG, Peugeot, Citroen',
      'Suzuki, KGM, Opel, Jeep, y muchas más…'
    ],
    description: 'Gran variedad de modelos: Queremos brindar a nuestros clientes una amplia variedad de marcas y modelos asegurando calidad, confianza y una compra segura.'
  },
  {
    id: 'km0',
    title: 'Kilómetro 0',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    subtitle: 'Nuestras marcas:',
    listItems: [
      'Volkswagen, Hyundai, MG, Peugeot, Citroen',
      'Suzuki, KGM, Opel, Jeep, y muchas más…'
    ],
    description: '¿Qué es un Kilómetro 0? Un Km0 es un coche matriculado por el concesionario, con muy pocos kilómetros (menos de 1.000 km) y sin uso real. Se vende como nuevo, pero más barato, con garantía oficial y entrega inmediata.'
  }
];

const AboutTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeContent = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tab Headers */}
          <div className="flex flex-wrap md:flex-nowrap border-b">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={activeContent.image}
                  alt={activeContent.title}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{activeContent.subtitle}</h3>
                <ul className="mb-4 space-y-1">
                  {activeContent.listItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 mb-6">{activeContent.description}</p>
                <div className="flex items-center text-gray-700 mb-6">
                  <PhoneCall size={20} className="mr-2 text-blue-600" />
                  <span>Puedes llamarnos a: +34 123 45 67 89</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Encuentra tu coche ideal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTabs;