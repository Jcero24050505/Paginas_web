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

const SuzukiModels = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const models: Model[] = [
    {
      id: 1,
      name: "Suzuki Swift",
      imageUrl: "https://images.coches.com/_vn_/suzuki/Swift/72b0c7c557cf4e49f0f70249b9642d32.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.2 DualJet Hybrid",
        power: "83 CV",
        transmission: "Manual 5 velocidades",
        fuel: "Híbrido",
        consumption: "4.7 l/100km",
        emissions: "106 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 2,
      name: "Suzuki Vitara",
      imageUrl: "https://images.coches.com/_vn_/suzuki/Vitara/ce728063ac5083bf195a5ea77cc626c2.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.4 Boosterjet Hybrid",
        power: "129 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Híbrido",
        consumption: "5.6 l/100km",
        emissions: "127 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 3,
      name: "Suzuki Jimny",
      imageUrl: "https://navarracapital.es/wp-content/uploads/2018/10/Suzuki-All-New-Jimny-01-e1540287710382.jpg",
      price: "",
      specs: {
        engine: "1.2 DualJet Hybrid",
        power: "83 CV",
        transmission: "Manual 5 velocidades",
        fuel: "Híbrido",
        consumption: "4.9 l/100km",
        emissions: "112 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 4,
      name: "Suzuki Ignis",
      imageUrl: "https://images.coches.com/_vn_/suzuki/Ignis/d28dc7e41074b194db2c63147859ae52.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.4 Boosterjet Hybrid",
        power: "129 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Híbrido",
        consumption: "5.8 l/100km",
        emissions: "132 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 5,
      name: "Suzuki S-Cross",
      imageUrl: "https://images.coches.com/_vn_/suzuki/S-Cross/5124d78bc52b635c84e15b3330acd702.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.4 Boosterjet Hybrid",
        power: "129 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Híbrido",
        consumption: "5.7 l/100km",
        emissions: "130 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 6,
      name: "Suzuki Across",
      imageUrl: "https://auto.suzuki.es/storage/images/cdhl7x1y0tpidgqmdqierpoceegwpv02gheanpnl.jpg",
      price: "",
      specs: {
        engine: "2.5 Plug-in Hybrid",
        power: "306 CV",
        transmission: "Automático CVT",
        fuel: "Híbrido Enchufable",
        consumption: "1.0 l/100km",
        emissions: "22 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 7,
      name: "Suzuki Swace",
      imageUrl: "https://images.coches.com/_vn_/suzuki/Swace/3769548e5e8de2a7f7dc7ae7d6d3a0ce.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "1.8 Hybrid",
        power: "122 CV",
        transmission: "Automático CVT",
        fuel: "Híbrido",
        consumption: "4.5 l/100km",
        emissions: "103 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 8,
      name: "Suzuki Swift Sport",
      imageUrl: "https://auto.suzuki.es/storage/images/izbsqylpjta8vbrbdmzxhgz1fxddokg1syxirxmx.jpg",
      price: "",
      specs: {
        engine: "1.5 VVT",
        power: "102 CV",
        transmission: "Manual 5 velocidades",
        fuel: "Gasolina",
        consumption: "7.7 l/100km",
        emissions: "174 g/km",
        doors: 3,
        seats: 4
      }
    },
    {
      id: 9,
      name: "Suzuki Baleno",
      imageUrl: "https://cdn.motor1.com/images/mgl/wloGOo/s1/2022-suzuki-baleno.jpg",
      price: "",
      specs: {
        engine: "1.2 DualJet Hybrid",
        power: "83 CV",
        transmission: "Automático CVT",
        fuel: "Híbrido",
        consumption: "4.9 l/100km",
        emissions: "112 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 10,
      name: "Suzuki Celerio",
      imageUrl: "https://fotos.quecochemecompro.com/suzuki-celerio/13847.jpg?size=750x400",
      price: "",
      specs: {
        engine: "1.2 DualJet Hybrid",
        power: "83 CV",
        transmission: "Automático CVT",
        fuel: "Híbrido",
        consumption: "5.1 l/100km",
        emissions: "116 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 11,
      name: "Suzuki Kizashi",
      imageUrl: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2022/08/suzuki-kizashi-2787801.jpg?tf=3840x",
      price: "",
      specs: {
        engine: "1.4 Boosterjet Hybrid",
        power: "129 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Híbrido",
        consumption: "6.1 l/100km",
        emissions: "139 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 12,
      name: "Suzuki Liana",
      imageUrl: "https://espirituracer.com/archivos/2018/11/Suzuki-Liana-Sedan-1.jpg",
      price: "",
      specs: {
        engine: "1.4 Boosterjet Hybrid",
        power: "129 CV",
        transmission: "Automático 6 velocidades",
        fuel: "Híbrido",
        consumption: "6.0 l/100km",
        emissions: "136 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 13,
      name: "Suzuki SX4",
      imageUrl: "https://www.autofacil.es/wp-content/uploads/2021/05/suzukisx4scross-1.jpg",
      price: "",
      specs: {
        engine: "1.8 Hybrid",
        power: "122 CV",
        transmission: "Automático CVT",
        fuel: "Híbrido",
        consumption: "4.7 l/100km",
        emissions: "107 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 14,
      name: "Suzuki Alto",
      imageUrl: "https://static.motor.es/fotos-noticias/2021/11/suzuki-alto-2022-japon-202183120-1638297054_1.jpg",
      price: "",
      specs: {
        engine: "1.5 VVT",
        power: "102 CV",
        transmission: "Manual 5 velocidades",
        fuel: "Gasolina",
        consumption: "7.7 l/100km",
        emissions: "174 g/km",
        doors: 3,
        seats: 2
      }
    },
    {
      id: 15,
      name: "Suzuki Wagon R",
      imageUrl: "https://espirituracer.com/archivos/2019/02/Suzuki-Wagon-R-EM-1.jpg",
      price: "",
      specs: {
        engine: "2.5 Plug-in Hybrid",
        power: "306 CV",
        transmission: "Automático CVT",
        fuel: "Híbrido Enchufable",
        consumption: "1.0 l/100km",
        emissions: "22 g/km",
        doors: 5,
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
            src="https://wallpapers.com/images/hd/suzuki-logo-csqy51lcjgwepn4e.jpg"
            alt="Suzuki Models"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modelos Suzuki
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre toda la gama de vehículos Suzuki
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
            Nuestros asesores están disponibles para ayudarte a elegir el Suzuki que mejor se adapte a tus necesidades.
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

export default SuzukiModels;