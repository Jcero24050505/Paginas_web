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

const SubaruModels = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const models: Model[] = [
    {
      id: 1,
      name: "Subaru Impreza",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/subaru-wrx-sti-type-r-subasta-1640893491.jpg",
      price: "",
      specs: {
        engine: "2.0i e-BOXER",
        power: "150 CV",
        transmission: "Lineartronic CVT",
        fuel: "Híbrido",
        consumption: "7.1 l/100km",
        emissions: "161 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 2,
      name: "Subaru Legacy",
      imageUrl: "https://www.autofacil.es/wp-content/uploads/2022/07/subaru-legacy-2023-6.jpg",
      price: "",
      specs: {
        engine: "2.0i e-BOXER",
        power: "150 CV",
        transmission: "Lineartronic CVT",
        fuel: "Híbrido",
        consumption: "7.3 l/100km",
        emissions: "166 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 3,
      name: "Subaru Outback",
      imageUrl: "https://static.motor.es/fotos-jato/subaru/uploads/subaru-outback-64cbfaf35453a.jpg",
      price: "",
      specs: {
        engine: "2.0i e-BOXER",
        power: "150 CV",
        transmission: "Lineartronic CVT",
        fuel: "Híbrido",
        consumption: "7.4 l/100km",
        emissions: "168 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 4,
      name: "Subaru Forester",
      imageUrl: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2023/11/subaru-forester-2024-3225480.jpg?tf=3840x",
      price: "",
      specs: {
        engine: "2.5i",
        power: "169 CV",
        transmission: "Lineartronic CVT",
        fuel: "Gasolina",
        consumption: "8.2 l/100km",
        emissions: "186 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 5,
      name: "Subaru Crosstrek",
      imageUrl: "https://carnovo.com/wp-content/uploads/2024/01/subaru-crosstrek-2024.jpg",
      price: "",
      specs: {
        engine: "Eléctrico",
        power: "218 CV",
        transmission: "Automático 1 velocidad",
        fuel: "Eléctrico",
        consumption: "16.9 kWh/100km",
        emissions: "0 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 6,
      name: "Subaru Ascent",
      imageUrl: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2017/11/subaru-ascent-2019.jpg?tf=3840x",
      price: "",
      specs: {
        engine: "2.4 Boxer",
        power: "234 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "8.8 l/100km",
        emissions: "198 g/km",
        doors: 2,
        seats: 4
      }
    },
    {
      id: 7,
      name: "Subaru BRZ",
      imageUrl: "https://images.coches.com/_vn_/subaru/BRZ/36a62803e0c45869bcb6f0f40e765b47.jpg?w=1920&ar=16:9",
      price: "",
      specs: {
        engine: "2.4 Turbo",
        power: "275 CV",
        transmission: "Manual 6 velocidades",
        fuel: "Gasolina",
        consumption: "9.9 l/100km",
        emissions: "224 g/km",
        doors: 4,
        seats: 5
      }
    },
    {
      id: 8,
      name: "Subaru WRX",
      imageUrl: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2021/08/historia-subaru-impreza-wrx-2453129.jpg?tf=3840x",
      price: "",
      specs: {
        engine: "2.0i e-BOXER",
        power: "150 CV",
        transmission: "Lineartronic CVT",
        fuel: "Híbrido",
        consumption: "7.6 l/100km",
        emissions: "172 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 9,
      name: "Subaru WRX STI",
      imageUrl: "https://cdn.motor1.com/images/mgl/G3Al41/s1/subaru-wrx-sti-s210.jpg",
      price: "",
      specs: {
        engine: "2.4 Turbo",
        power: "260 CV",
        transmission: "Lineartronic CVT",
        fuel: "Gasolina",
        consumption: "9.0 l/100km",
        emissions: "204 g/km",
        doors: 5,
        seats: 7
      }
    },
    {
      id: 10,
      name: "Subaru Baja",
      imageUrl: "https://di-uploads-pod47.dealerinspire.com/subaruoftwinfalls/uploads/2024/02/subaru-baja-turbo_blog-1024x626.webp",
      price: "",
      specs: {
        engine: "2.5i",
        power: "175 CV",
        transmission: "Lineartronic CVT",
        fuel: "Gasolina",
        consumption: "7.8 l/100km",
        emissions: "177 g/km",
        doors: 4,
        seats: 5
      }
    },
    {
      id: 11,
      name: "Subaru Tribeca",
      imageUrl: "https://media.ed.edmunds-media.com/subaru/b9-tribeca/2007/oem/2007_subaru_b9-tribeca_4dr-suv_limited-7-passenger_fq_oem_3_1600.jpg",
      price: "",
      specs: {
        engine: "2.0i e-BOXER",
        power: "150 CV",
        transmission: "Lineartronic CVT",
        fuel: "Híbrido",
        consumption: "7.3 l/100km",
        emissions: "166 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 12,
      name: "Subaru SVX",
      imageUrl: "https://cdn.prod.website-files.com/5f366822b2ae3f218cd8428d/622a1620a767678aca11edcb_subaru_svx_16%20copia.jpg",
      price: "",
      specs: {
        engine: "2.0i e-BOXER",
        power: "150 CV",
        transmission: "Lineartronic CVT",
        fuel: "Híbrido",
        consumption: "7.5 l/100km",
        emissions: "170 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 13,
      name: "Subaru Justy",
      imageUrl: "https://espirituracer.com/archivos/2021/01/subaru-g3x-justy-mhy-2.jpg",
      price: "",
      specs: {
        engine: "2.5i",
        power: "169 CV",
        transmission: "Lineartronic CVT",
        fuel: "Gasolina",
        consumption: "8.4 l/100km",
        emissions: "190 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 14,
      name: "Subaru Rex",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/subaru-rex-01-1668440265.jpg",
      price: "",
      specs: {
        engine: "2.0i e-BOXER",
        power: "150 CV",
        transmission: "Lineartronic CVT",
        fuel: "Híbrido",
        consumption: "7.4 l/100km",
        emissions: "168 g/km",
        doors: 5,
        seats: 5
      }
    },
    {
      id: 15,
      name: "Subaru Leone",
      imageUrl: "https://www.autonocion.com/wp-content/uploads/2021/02/Leone-subaru.jpg",
      price: "",
      specs: {
        engine: "2.0i e-BOXER",
        power: "150 CV",
        transmission: "Lineartronic CVT",
        fuel: "Híbrido",
        consumption: "7.2 l/100km",
        emissions: "163 g/km",
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
            src="https://wallpapers.com/images/hd/subaru-logo-in-textured-blue-c01jz1ui6uwtmmdw.jpg"
            alt="Subaru Models"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Modelos Subaru
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Descubre toda la gama de vehículos Subaru
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
            Nuestros asesores están disponibles para ayudarte a elegir el Subaru que mejor se adapte a tus necesidades.
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

export default SubaruModels;