import React from 'react';

interface CarOffer {
  id: number;
  name: string;
  image: string;
  kilometers: number;
  year: number;
  fuel: string;
  transmission: string;
  power: string;
  color: string;
  price: number;
}

const carOffers: CarOffer[] = [
  {
    id: 1,
    name: 'MG MG4',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    kilometers: 10500,
    year: 2023,
    fuel: 'Eléctrico',
    transmission: 'Automático',
    power: '170 CV',
    color: 'Azul',
    price: 22900
  },
  {
    id: 2,
    name: 'Hyundai Tucson',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    kilometers: 25000,
    year: 2022,
    fuel: 'Híbrido',
    transmission: 'Automático',
    power: '150 CV',
    color: 'Gris Plateado',
    price: 27500
  },
  {
    id: 3,
    name: 'Kia Picanto',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    kilometers: 15000,
    year: 2022,
    fuel: 'Gasolina',
    transmission: 'Manual',
    power: '85 CV',
    color: 'Rojo',
    price: 13900
  }
];

const SpecialOffers: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Ofertas especiales</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {carOffers.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-8px]">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{car.name}</h3>
                
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                  <div>
                    <span className="text-sm text-gray-500">Kilómetros</span>
                    <p className="font-medium">{car.kilometers.toLocaleString()} km</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Año</span>
                    <p className="font-medium">{car.year}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Combustible</span>
                    <p className="font-medium">{car.fuel}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Cambio</span>
                    <p className="font-medium">{car.transmission}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Potencia</span>
                    <p className="font-medium">{car.power}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Color</span>
                    <p className="font-medium">{car.color}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-sm text-gray-500">Precio</span>
                    <p className="text-2xl font-bold text-blue-600">{car.price.toLocaleString()} €</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors">
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
            Encuentra la mejor oferta
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;