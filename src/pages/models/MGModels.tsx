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

const MGModels = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const models: Model[] = [
    {
      id: 1,
      name: "MG Midget",
      imageUrl: "https://handh.blob.core.windows.net/stock/20053775-20.jpg?v=63760732744490",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "170 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "16.6 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 2,
      name: "MG TD Midget",
      imageUrl: "https://www.tradeclassics.com/wp-content/uploads/2021/05/1951-MG-TD-Midget-Green-Main-Hero.jpg",
      price: "",
      specs: {
        engine: "Eléctrico Dual Motor",
        power: "435 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "18.7 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 3,
      name: "MG TF",
      imageUrl: "https://espirituracer.com/archivos/2019/06/mg-tf-160-2.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "156 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "17.3 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 4,
      name: "MG A",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/60/MG_A_1500_%281956%29_-_15838588582.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "288 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "19.4 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 5,
      name: "MG B",
      imageUrl: "https://cdn.classic-trader.com/I/images/1920_1920_inset/vehicle_ad_standard_image_c8771345048c50a248626f42b7364158.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "156 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "17.8 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 6,
      name: "MG C",
      imageUrl: "https://cdn.classic-trader.com/I/images/1920_1920_inset/vehicle_ad_standard_image_273a413a93455de16ddaece975291ed2.jpg",
      price: "",
      specs: {
        engine: "1.5 TGI PHEV",
        power: "258 CV",
        transmission: "Automático 10 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.8 l/100km",
        emissions: "43 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 7,
      name: "MG MGB GT",
      imageUrl: "https://cdn.classic-trader.com/I/images/1920_1920_inset/vehicle_ad_standard_image_b9836fcbfcb067031b498d370466135a.jpg",
      price: "",
      specs: {
        engine: "1.5 TGI",
        power: "162 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "7.4 l/100km",
        emissions: "168 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 8,
      name: "MG Magnette",
      imageUrl: "https://www.mgcc.co.uk/owninganmg/wp-content/uploads/sites/59/2020/04/Magnette-scaled.jpg",
      price: "",
      specs: {
        engine: "1.5 VTi",
        power: "106 CV",
        transmission: "Manual 5 velocidades",
        fuel: "Gasolina",
        consumption: "6.3 l/100km",
        emissions: "140 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 9,
      name: "MG 1100/1300",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Austin_1300GT_registered_June_1972_1380cc_%28sic_DVLA%29.JPG",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "204 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "16.8 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 10,
      name: "MG Metro",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Metro6r4.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "156 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "17.5 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 11,
      name: "MG ZS",
      imageUrl: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2VzL29yaWdpbmFsL01HL1pTLUhFVi80ODgwMl9TVVYtNS1ET09SUy9tZy16cy1oeWJyaWQtZnJvbnQtdmlldy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwMjQsImhlaWdodCI6bnVsbCwiZml0IjoiY292ZXIifX19",
      price: "",
      specs: {
        engine: "Eléctrico Tri-Motor",
        power: "288 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "19.9 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 12,
      name: "MG HS",
      imageUrl: "https://carnovo.com/wp-content/uploads/2024/09/mg-hs-2025.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "156 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "18.1 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 13,
      name: "MG EHS",
      imageUrl: "https://images.prismic.io/carwow/d6275030-b866-49dc-8103-1fce86bce20a_LHD+MG+EHS+2021+Exterior-7.jpg",
      price: "",
      specs: {
        engine: "1.5 TGI PHEV",
        power: "258 CV",
        transmission: "Automático 10 velocidades",
        fuel: "Híbrido Enchufable",
        consumption: "1.8 l/100km",
        emissions: "43 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 14,
      name: "MG5 Electric",
      imageUrl: "https://forococheselectricos.com/wp-content/uploads/2021/03/mg5-electric-202176235-1615802256_4.jpg",
      price: "",
      specs: {
        engine: "1.5 TGI",
        power: "162 CV",
        transmission: "Automático 7 velocidades",
        fuel: "Gasolina",
        consumption: "7.8 l/100km",
        emissions: "175 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 15,
      name: "MG4 Electric",
      imageUrl: "https://i.blogs.es/b66c23/mg-4_ev-2023-1600-01/1366_2000.jpg",
      price: "",
      specs: {
        engine: "1.5 VTi",
        power: "106 CV",
        transmission: "Manual 5 velocidades",
        fuel: "Gasolina",
        consumption: "6.3 l/100km",
        emissions: "140 g/km",
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
            src="https://wallpapers.com/images/hd/mg-5871-x-3811-wallpaper-iet63ckzts8ttkp9.jpg"
            alt="MG Models"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modelos MG
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre toda la gama de vehículos MG
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
            Nuestros asesores están disponibles para ayudarte a elegir el MG que mejor se adapte a tus necesidades.
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

export default MGModels;