import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

interface Model {
  id: number;
  name: string;
  imageUrl: string;
  price: string;
  specs: {
    engine: string;
    power: string;
    transmission: string;
    fuel: string;
    consumption: string;
    emissions: string;
    doors: number;
    seats: number;
  };
}

const PeugeotModels = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const models: Model[] = [
    {
      id: 1,
      name: "Peugeot 208",
      imageUrl: "https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/208/2024-09-october-window-evolution-208-wl/new-208---hybrid-page---wl/PEUGEOT_208_HYBRID_STYLE_2410STYP_001_FR_632x632.jpg",
      price: "",
      specs: {
        engine: "1.2 PureTech",
        power: "100 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "5.4 l/100km",
        emissions: "122 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 2,
      name: "Peugot Nuevo SUV 2008",
      imageUrl: "https://images.prismic.io/carwow/206947e7-2b66-4659-84a4-7ff4d9b1ce73_LHD+Peugeot+2008+2023+Exterior-2-2.jpg",
      price: "",
      specs: {
        engine: "1.2 PureTech",
        power: "130 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Gasolina",
        consumption: "5.9 l/100km",
        emissions: "133 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 3,
      name: "Peugeot 308",
      imageUrl: "https://images.prismic.io/carwow/Z0BXza8jQArT1LEZ_peugeot-308-1.jpg",
      price: "",
      specs: {
        engine: "1.2 PureTech",
        power: "130 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "5.7 l/100km",
        emissions: "129 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 4,
      name: "Peugeot 308 SW",
      imageUrl: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/Peugeot-308_SW-2018-C01.jpg?tf=3840x",
      price: "",
      specs: {
        engine: "1.5 BlueHDi",
        power: "130 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Diésel",
        consumption: "4.6 l/100km",
        emissions: "120 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 5,
      name: "Nuevo Peugeot 3008",
      imageUrl: "https://images.coches.com/_vn_/peugeot/3008/5c9af7e150702e9dd953f0a52f989778.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.6 PureTech PHEV",
        power: "225 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.4 l/100km",
        emissions: "32 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 6,
      name: "Peugeot 408",
      imageUrl: "https://s03.s3c.es/imag/_v0/1200x655/6/3/4/PEUGEOT_408PHEV_01.jpg",
      price: "",
      specs: {
        engine: "1.5 BlueHDi",
        power: "130 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Diésel",
        consumption: "5.0 l/100km",
        emissions: "131 g/km",
        doors: 5,
        seats: 7
      }
    },
    {
      id: 7,
      name: "Peugeot Nuevo 508",
      imageUrl: "https://images.coches.com/_vn_/peugeot/508/385a5eeb3655f682a7b36d9e5e36f34a.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.2 PureTech",
        power: "130 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Gasolina",
        consumption: "5.8 l/100km",
        emissions: "131 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 8,
      name: "Peugot Nuevo 508 SW",
      imageUrl: "https://fotos.quecochemecompro.com/peugeot-508-sw/peugeot-508-sw-vista-dinamica.jpeg?size=750x400",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "136 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "16.1 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 9,
      name: "Peugot Nuevo 508 Sport Engineered",
      imageUrl: "https://www.peugeot.es/content/dam/peugeot/master/b2c/our-range/showroom/new-508-pse/mobile/Showroom_508_PSE_M_Excellence_3.jpg?imwidth=768",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "136 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "17.8 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 10,
      name: "Peugot Nuevo 508 SW Sport Engineered",
      imageUrl: "https://www.bonillamotor.com/wp-content/uploads/2021/10/Carrusel-Nuevo-508-SW-SPORT-ENGINEERED-1.jpg",
      price: "",
      specs: {
        engine: "1.6 PureTech PHEV",
        power: "180 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.1 l/100km",
        emissions: "25 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 11,
      name: "SUV 5008",
      imageUrl: "https://images.coches.com/_vn_/peugeot/5008/100a5a8cb8d4a64d0582d4f7736e05c6.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.6 PureTech PHEV",
        power: "180 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.1 l/100km",
        emissions: "26 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 12,
      name: "Rifter & e-Rifter",
      imageUrl: "https://cdn-datak.motork.net/configurator-imgs/cars/es/800/PEUGEOT/E-RIFTER-XL/44055_MINIVAN-5-DOORS/peugeot-erifter-front-view.jpg",
      price: "",
      specs: {
        engine: "1.6 PureTech PHEV",
        power: "225 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.2 l/100km",
        emissions: "26 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 13,
      name: "e-Traveller",
      imageUrl: "https://images.prismic.io/carwow/134e5808-6432-4b83-bcfc-7e52143162ac_LHD+Peugeot+e-Traveller+gris+oscuro+exterior-1.jpg?auto=format&cs=tinysrgb&fit=crop&q=60&w=750",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "156 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "15.5 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 14,
      name: "Nuevo e-Partner",
      imageUrl: "https://noticias.pro.pvt.coches.com/wp-content/uploads/2023/10/Peugeot-Partner-2024-1.jpeg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "156 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "15.7 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 15,
      name: "Expert Furgón",
      imageUrl: "https://cdn.motor1.com/images/mgl/Ervk3/s1/peugeot-expert-pro-standard-2.0-bluehdi-150-s-s-manual.webp",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "136 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "18.0 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 7
      }
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://wallpapercat.com/w/full/6/4/0/3204-1920x1080-desktop-full-hd-peugeot-background.jpg"
            alt="Peugeot Models"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modelos Peugeot
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre toda la gama de vehículos Peugeot
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/marcas-relacionadas" className="inline-flex items-center text-blue-600 hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Volver a marcas
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => (
              <div 
                key={model.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedModel(model)}
              >
                <img 
                  src={model.imageUrl} 
                  alt={model.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                  <p className="text-blue-600 font-bold">{model.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Details Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedModel(null)}
              >
                <X size={24} />
              </button>
              
              <img 
                src={selectedModel.imageUrl} 
                alt={selectedModel.name}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2">{selectedModel.name}</h2>
                <p className="text-2xl text-blue-600 font-bold mb-6">{selectedModel.price}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p><span className="font-semibold">Motor:</span> {selectedModel.specs.engine}</p>
                    <p><span className="font-semibold">Potencia:</span> {selectedModel.specs.power}</p>
                    <p><span className="font-semibold">Transmisión:</span> {selectedModel.specs.transmission}</p>
                    <p><span className="font-semibold">Combustible:</span> {selectedModel.specs.fuel}</p>
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-semibold">Consumo:</span> {selectedModel.specs.consumption}</p>
                    <p><span className="font-semibold">Emisiones CO2:</span> {selectedModel.specs.emissions}</p>
                    <p><span className="font-semibold">Puertas:</span> {selectedModel.specs.doors}</p>
                    <p><span className="font-semibold">Plazas:</span> {selectedModel.specs.seats}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  <Link 
                    to="/contacto" 
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Solicitar información
                  </Link>
                  <Link 
                    to="/contacto" 
                    className="flex-1 border-2 border-blue-600 text-blue-600 text-center py-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Reservar prueba
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas más información?</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Nuestros asesores están disponibles para ayudarte a elegir el Peugeot que mejor se adapte a tus necesidades.
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contactar con un asesor
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PeugeotModels;