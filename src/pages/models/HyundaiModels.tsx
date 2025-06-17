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

const HyundaiModels = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const models: Model[] = [
    {
      id: 1,
      name: "BAYON Híbrido 48v y gasolina",
      imageUrl: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2021/09/prueba-hyundai-bayon-2467687.jpg?tf=3840x",
      price: "",
      specs: {
        engine: "1.0 T-GDi 48V",
        power: "100 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina Híbrido ligero",
        consumption: "5.5 l/100km",
        emissions: "125 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 2,
      name: "IONIQ 5",
      imageUrl: "https://images.coches.com/_vn_/hyundai/IONIQ-5/fad2f9a62825dec61a5b58ee7660dae8.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.0 T-GDi",
        power: "120 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "5.7 l/100km",
        emissions: "129 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 3,
      name: "IONIQ 6",
      imageUrl: "https://images.prismic.io/carwow/69e04321-4856-40ba-b000-54082f4dca41_LHD+Hyundai+IONIQ+6+Star-05.jpg",
      price: "",
      specs: {
        engine: "1.6 T-GDi HEV",
        power: "230 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Híbrido",
        consumption: "5.9 l/100km",
        emissions: "134 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 4,
      name: "KONA Eléctrico",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/new-hyundai-kona-electric-5-1605094022.jpg",
      price: "",
      specs: {
        engine: "1.6 T-GDi PHEV",
        power: "265 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.6 l/100km",
        emissions: "37 g/km",
        doors: 5,
        seats: 7
      }
    },
    {
      id: 5,
      name: "NUEVO KONA Híbrido 48v y gasolina",
      imageUrl: "https://www.hyundai.es/zonaeco/image/catalog/articulos/ecodrive/modelos/nuevo-kona-hev/konahev-rojo.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "170 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "16.7 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 6,
      name: "KONA Híbrido, híbrido 48V y gasolina",
      imageUrl: "https://images.ecestaticos.com/LOOWKwqkkYqX_q8ZM5Wmtqr8k4s=/0x0:2272x1515/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F269%2Fbda%2Fcfc%2F269bdacfcb102b9ac68b2a5df8316d04.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "229 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "16.9 kWh/100km",
        emissions: "0 g/km",
        doors: 4,
        seats: 5
      }
    },
    {
      id: 7,
      name: "KONA N Gasolina",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/hyundaikonan-8-1631703652.jpg?crop=0.9998222222222223xw:1xh;center,top&resize=1200:*",
      price: "",
      specs: {
        engine: "1.0 T-GDi",
        power: "100 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "5.3 l/100km",
        emissions: "120 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 8,
      name: "Nuevo i10 Gasolina",
      imageUrl: "https://images.coches.com/_vn_/hyundai/i10/e94db9b56c118eaf1789f9871abc2865.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.0 T-GDi",
        power: "120 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "5.5 l/100km",
        emissions: "125 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 9,
      name: "Nuevo i20 Gasolina e híbrido 48v",
      imageUrl: "https://images.prismic.io/carwow/66b9fe21-7fa8-41d0-b6d0-548ada100c43_LHD+Hyundai+i20+2023+Exterior-6.jpg",
      price: "",
      specs: {
        engine: "2.0 T-GDi",
        power: "280 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "8.5 l/100km",
        emissions: "193 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 10,
      name: "i20 N Gasolina",
      imageUrl: "https://fotos.quecochemecompro.com/hyundai-i20-n/hyundai-i20-n-perfil-dinamico.jpeg?size=750x400",
      price: "",
      specs: {
        engine: "2.0 T-GDi",
        power: "280 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Gasolina",
        consumption: "8.8 l/100km",
        emissions: "199 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 11,
      name: "i30 Híbrido 48v y gasolina",
      imageUrl: "https://assets.maxterauto.com/gamas/images/h-21-58-2789-15198-1625217399.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "136 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "14.3 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 12,
      name: "i30 CW Gasolina e híbrido 48v",
      imageUrl: "https://www.movilidadhoy.com/wp-content/gallery/hyundai-i30-48v-contacto/hyundai-i30-movilidadhoy_1.jpg",
      price: "",
      specs: {
        engine: "1.6 T-GDi HEV",
        power: "230 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Híbrido",
        consumption: "5.9 l/100km",
        emissions: "134 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 13,
      name: "i30 Fastback Gasolina e híbrido 48v",
      imageUrl: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/Hyundai-i30_Fastback_N-2019-C01.jpg?tf=1200x",
      price: "",
      specs: {
        engine: "1.6 T-GDi PHEV",
        power: "265 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.4 l/100km",
        emissions: "31 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 14,
      name: "i30 N Gasolina",
      imageUrl: "https://fotos.quecochemecompro.com/hyundai-i30-n/hyundai-i30-n-vista-dinamica-delantera.jpeg?size=750x400",
      price: "",
      specs: {
        engine: "1.6 T-GDi HEV",
        power: "230 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Híbrido",
        consumption: "6.4 l/100km",
        emissions: "145 g/km",
        doors: 5,
        seats: 7
      }
    },
    {
      id: 15,
      name: "i30 Fastback N Gasolina",
      imageUrl: "https://fotos.quecochemecompro.com/hyundai-i30-n-fastback/hyundai-i30-n-fastback-vista-delantera-lateral.jpeg?size=750x400",
      price: "",
      specs: {
        engine: "1.6 T-GDi PHEV",
        power: "265 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.6 l/100km",
        emissions: "37 g/km",
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
            src="https://wallpapers.com/images/hd/white-hyundai-logo-a4k1tqhya8s2njam.jpg"
            alt="Hyundai Models"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modelos Hyundai
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre toda la gama de vehículos Hyundai
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
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer **flex flex-col min-h-[350px]**"
                onClick={() => setSelectedModel(model)}
              >
                <img
                  src={model.imageUrl}
                  alt={model.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 **flex-grow flex flex-col justify-end** h-20">
                  <h3 className="text-xl font-semibold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">{model.name}</h3>
                  <p className="text-blue-600 font-bold overflow-hidden text-ellipsis whitespace-nowrap">{model.price}</p>
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
            Nuestros asesores están disponibles para ayudarte a elegir el Hyundai que mejor se adapte a tus necesidades.
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

export default HyundaiModels;