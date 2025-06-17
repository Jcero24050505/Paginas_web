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

const SsangYongModels = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const models: Model[] = [
    {
      id: 1,
      name: "SsangYong Musso",
      imageUrl: "https://static1.ara.cat/clip/ab261481-3f18-4a3f-ad7f-e0e259f1c27c_16-9-aspect-ratio_default_0.jpg",
      price: "",
      specs: {
        engine: "1.5 T-GDI",
        power: "163 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "6.9 l/100km",
        emissions: "157 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 2,
      name: "SsangYong Korando",
      imageUrl: "https://carwow-es-wp-0.imgix.net/Korando-1.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "190 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "17.5 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 3,
      name: "SsangYong Rexton",
      imageUrl: "https://cdn.motor1.com/images/mgl/jqXA6/s3/ssangyong-rexton-2021.jpg",
      price: "",
      specs: {
        engine: "1.5 T-GDI",
        power: "163 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Gasolina",
        consumption: "7.2 l/100km",
        emissions: "164 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 4,
      name: "SsangYong Kyron",
      imageUrl: "https://www.automoli.com/common/vehicles/_assets/img/gallery/f56/ssangyong-kyron.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "204 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "18.2 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 5,
      name: "SsangYong Actyon",
      imageUrl: "https://cdn.motor1.com/images/mgl/rKZgrE/s1/ssangyong-actyon.jpg",
      price: "",
      specs: {
        engine: "2.2 e-XDi",
        power: "202 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Diésel",
        consumption: "8.9 l/100km",
        emissions: "235 g/km",
        doors: 4,
        seats: 5
      }
    },
    {
      id: 6,
      name: "SsangYong Actyon Sports",
      imageUrl: "https://www.autonocion.com/wp-content/uploads/2016/07/actyons.jpg",
      price: "",
      specs: {
        engine: "2.2 e-XDi",
        power: "202 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Diésel",
        consumption: "7.8 l/100km",
        emissions: "205 g/km",
        doors: 5,
        seats: 7
      }
    },
    {
      id: 7,
      name: "SsangYong Rodius",
      imageUrl: "https://cdn.topgear.es/sites/navi.axelspringer.es/public/bdc/dc/fotos/ssangyong_rodius.jpg",
      price: "",
      specs: {
        engine: "1.2 T-GDI",
        power: "128 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "6.3 l/100km",
        emissions: "143 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 8,
      name: "SsangYong Tivoli",
      imageUrl: "https://images.coches.com/_vn_/ssangyong/Tivoli/ca3ca8f19428fefe7f201ae2e95f70c7.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.5 T-GDI",
        power: "163 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "6.8 l/100km",
        emissions: "154 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 9,
      name: "SsangYong XLV",
      imageUrl: "https://s3-eu-west-1.amazonaws.com/carnovo-images/review-models/812421db-1cd1-4b81-8b9e-ab59e7c7e091.jpg",
      price: "",
      specs: {
        engine: "1.5 T-GDI",
        power: "163 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Gasolina",
        consumption: "7.1 l/100km",
        emissions: "161 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 10,
      name: "SsangYong Chairman",
      imageUrl: "https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2023/08/SsangYong-Chairman-1.jpg",
      price: "",
      specs: {
        engine: "1.5 T-GDI",
        power: "163 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Gasolina",
        consumption: "7.4 l/100km",
        emissions: "168 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 11,
      name: "SsangYong Family",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Ssangyong_Korando_Family_RX_2.6i_1994_%2841986297941%29.jpg",
      price: "",
      specs: {
        engine: "2.2 e-XDi",
        power: "202 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Diésel",
        consumption: "8.6 l/100km",
        emissions: "226 g/km",
        doors: 4,
        seats: 5
      }
    },
    {
      id: 12,
      name: "SsangYong Korando Family",
      imageUrl: "https://live.staticflickr.com/8033/28168158250_21cf96aa5f_h.jpg",
      price: "",
      specs: {
        engine: "2.2 e-XDi",
        power: "202 CV",
        transmission: "Automático 8 velocidades",
        fuel: "Diésel",
        consumption: "8.0 l/100km",
        emissions: "211 g/km",
        doors: 5,
        seats: 7
      }
    },
    {
      id: 13,
      name: "SsangYong Istana",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c7/00_SsangYong_istana_1.jpg",
      price: "",
      specs: {
        engine: "1.2 T-GDI",
        power: "128 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Gasolina",
        consumption: "6.5 l/100km",
        emissions: "147 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 14,
      name: "SsangYong Rexton Sports",
      imageUrl: "https://www.elcarrocolombiano.com/wp-content/uploads/2023/11/20231112-KGM-SSANGYONG-REXTON-SPORTS-2024-PICK-UP-COLOMBIA-PRECIO-DATOS-02.jpg",
      price: "",
      specs: {
        engine: "1.5 T-GDI",
        power: "163 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Gasolina",
        consumption: "7.0 l/100km",
        emissions: "159 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 15,
      name: "SsangYong Torres",
      imageUrl: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/08/22/16927224193277.jpg",
      price: "",
      specs: {
        engine: "2.2 e-XDi",
        power: "202 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Diésel",
        consumption: "9.1 l/100km",
        emissions: "239 g/km",
        doors: 4,
        seats: 5
      }
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://m.media-amazon.com/images/I/61JpzEPTU9L.jpg"
            alt="SsangYong Models"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modelos SsangYong
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre toda la gama de vehículos SsangYong
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
            Nuestros asesores están disponibles para ayudarte a elegir el SsangYong que mejor se adapte a tus necesidades.
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

export default SsangYongModels;