import Hero from '../components/Hero';

interface TarifaProps {
  title: string;
  description: string[];
  price: string;
  isHighlighted?: boolean;
}

const TarifaCard = ({ title, description, price, isHighlighted = false }: TarifaProps) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden h-full flex flex-col ${isHighlighted ? 'border-2 border-orange-500 transform hover:-translate-y-1' : 'border border-gray-200 hover:shadow-lg'} transition-all duration-300`}>
      <div className={`p-6 ${isHighlighted ? 'bg-orange-500 text-white' : 'bg-white text-zinc-800'}`}>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="p-6 bg-white flex-grow">
        <ul className="mb-6 text-gray-700 min-h-[160px]">
          {description.map((item, index) => (
            <li key={index} className="mb-2 flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <span className="block text-3xl font-bold text-zinc-800 mb-2">{price}</span>
          <span className="block text-sm text-gray-500">No incluye gatos - Alquiler 2€</span>
        </div>
      </div>
      <div className="p-6 bg-gray-50 text-center">
        <button className={`py-2 px-6 rounded-md font-medium ${isHighlighted ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-zinc-800 text-white hover:bg-zinc-700'} transition-colors`}>
          Seleccionar
        </button>
      </div>
    </div>
  );
};

const Tarifas = () => {
  const tarifas = [
    {
      title: "Acceso libre mañana/Noche",
      description: [
        "De lunes a jueves antes de las 18.00h",
        "Viernes cualquier hora",
        "Ultimo acceso mañana 16.30h",
        "Noche desde las 21.00"
      ],
      price: "10€",
      isHighlighted: true
    },
    {
      title: "Acceso libre tarde",
      description: [
        "De lunes a viernes desde las 18.00h",
        "Acceso a todas las instalaciones",
        "Ideal para practicar en horario de tarde"
      ],
      price: "12€"
    },
    {
      title: "Clase de prueba",
      description: [
        "Cualquier horario de clases disponible",
        "Incluido material de clase (arnés, cuerdas, etc)",
        "Ideal para iniciarse en la escalada"
      ],
      price: "15€"
    },
    {
      title: "Mensual libre mañanas",
      description: [
        "De lunes a viernes antes de las 18.00h",
        "Sábados antes de las 15.00h",
        "Acceso ilimitado en horario de mañana"
      ],
      price: "45€",
      isHighlighted: true
    }
  ];

  const tarifasMensuales = [
    {
      title: "Mensual libre",
      description: [
        "De lunes a viernes todo día",
        "Sábados antes de las 15.00h",
        "Acceso ilimitado"
      ],
      price: "55€",
      isHighlighted: true
    },
    {
      title: "Mensual + 2 clases mañana",
      description: [
        "Acceso libre en horario de mañana",
        "Incluye 2 clases semanales",
        "Ideal para aprender y practicar"
      ],
      price: "65€"
    },
    {
      title: "Mensual libre + 2 clases",
      description: [
        "Acceso libre todo el día",
        "Incluye 2 clases semanales",
        "Perfecto para mejorar tu técnica"
      ],
      price: "75€"
    },
    {
      title: "Mensual noche + 2 clases",
      description: [
        "Acceso en horario nocturno",
        "Incluye 2 clases semanales",
        "Para los que prefieren escalar de noche"
      ],
      price: "60€"
    }
  ];

  const bonos = [
    {
      title: "Clase Particular",
      description: [
        "Atención personalizada",
        "Horarios flexibles",
        "Adaptado a tu nivel"
      ],
      price: "30€"
    },
    {
      title: "Bono 5 clases",
      description: [
        "5 clases grupales",
        "Validez de 2 meses",
        "Reserva previa"
      ],
      price: "65€"
    },
    {
      title: "Bono 10 pases",
      description: [
        "10 accesos libres",
        "Validez de 3 meses",
        "Sin restricción de horario"
      ],
      price: "100€",
      isHighlighted: true
    },
    {
      title: "Bono 11 clases",
      description: [
        "11 clases grupales",
        "Validez de 4 meses",
        "Flexibilidad de horarios"
      ],
      price: "130€"
    }
  ];

  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/fotos/erp_salamandra/logo/logo-salamandra-escalador.png"
        title="Tarifas"
        subtitle="Elige el plan que mejor se adapte a tus necesidades"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Accesos diarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tarifas.map((tarifa, index) => (
              <TarifaCard 
                key={index}
                title={tarifa.title}
                description={tarifa.description}
                price={tarifa.price}
                isHighlighted={tarifa.isHighlighted}
              />
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Planes mensuales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tarifasMensuales.map((tarifa, index) => (
              <TarifaCard 
                key={index}
                title={tarifa.title}
                description={tarifa.description}
                price={tarifa.price}
                isHighlighted={tarifa.isHighlighted}
              />
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Bonos y packs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonos.map((bono, index) => (
              <TarifaCard 
                key={index}
                title={bono.title}
                description={bono.description}
                price={bono.price}
                isHighlighted={bono.isHighlighted}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-zinc-800">Información adicional</h2>
            
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-zinc-800">Material de alquiler</h3>
              <p className="text-gray-700 mb-4">
                Disponemos de material de alquiler para que puedas disfrutar de la escalada sin necesidad de comprar tu propio equipamiento.
              </p>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-700">Pies de gato</span>
                  <span className="font-medium text-zinc-800">2€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Magnesera</span>
                  <span className="font-medium text-zinc-800">1€</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Arnés</span>
                  <span className="font-medium text-zinc-800">Incluido en clases</span>
                </li>
              </ul>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-zinc-800">Descuentos especiales</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>10% de descuento para estudiantes con carnet</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Descuentos familiares: 15% a partir del segundo miembro</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ofertas especiales para grupos y empresas</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-zinc-800">Promociones temporales</h3>
              <div className="bg-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
                <p className="text-gray-800 font-medium">
                  ¡OFERTA LIMITADA! 20% de descuento en planes trimestrales para nuevos socios hasta el 31 de julio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tarifas;