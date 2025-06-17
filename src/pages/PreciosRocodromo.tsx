import PageHeader from '../components/PageHeader';
import Section from '../components/Section';
import Button from '../components/Button';

const PriceCard = ({ title, prices, highlight = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${highlight ? 'border-2 border-orange-500 relative' : ''}`}>
      {highlight && (
        <div className="absolute top-0 right-0 bg-orange-500 text-white py-1 px-3 text-sm font-bold">
          POPULAR
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <ul className="space-y-3 mb-6">
          {prices.map((price, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{price.name}</span>
              <span className="font-bold text-lg">{price.value}</span>
            </li>
          ))}
        </ul>
        <Button variant={highlight ? "primary" : "outline"} className="w-full">
          Comprar {highlight ? 'ahora' : ''}
        </Button>
      </div>
    </div>
  );
};

const PreciosRocodromo = () => {
  const dailyPrices = [
    { name: "Entrada general", value: "12€" },
    { name: "Con tarjeta joven", value: "10€" },
    { name: "Infantil (hasta 13 años)", value: "9€" },
    { name: "Grupos (min. 5 personas)", value: "9€/persona" },
  ];

  const bonoPrices = [
    { name: "Bono 5 accesos", value: "45€" },
    { name: "Bono 10 accesos", value: "80€" },
  ];

  const morningPrices = [
    { name: "Acceso de mañanas", value: "10€" },
    { name: "Bono de 10 accesos", value: "80€" },
    { name: "Mensualidad", value: "50€" },
  ];

  const membershipPrices = [
    { name: "Mensual", value: "65€" },
    { name: "Trimestral", value: "175€" },
    { name: "Anual", value: "625€" },
    { name: "Matrícula", value: "20€" },
  ];

  return (
    <>
      <PageHeader 
        title="Nuestras tarifas y precios en el rocódromo de Madrid"
        backgroundImage="https://www.uadibloc.com/img/precios-rocodromo-madrid.jpg"
      />
      
      <Section title="Tarifas y acceso">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <PriceCard title="ACCESO DIARIO" prices={dailyPrices} />
          <PriceCard title="BONOS" prices={bonoPrices} highlight={true} />
          <PriceCard title="TARIFAS MAÑANAS (10h a 15h)*" prices={morningPrices} />
          <PriceCard title="ABONOS" prices={membershipPrices} />
        </div>
        
        <div className="bg-gray-100 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">INFORMACIÓN GENERAL:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Todos los bonos tienen una validez de 6 meses desde la fecha de compra.</li>
                <li>Las entradas, bonos y abonos incluyen el acceso a todas las zonas: boulder, vías, kilter board, y sala de entrenamiento.</li>
                <li>Los menores de 14 años deben estar acompañados por un adulto responsable.</li>
                <li>Los precios incluyen IVA.</li>
              </ul>
            </div>
            <div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Abonos de mañana: Válidos de lunes a domingo de 10:00 a 15:00 horas.</li>
                <li>Para grupos, es necesario reservar con al menos 24 horas de antelación.</li>
                <li>La matrícula es un pago único que se realiza al adquirir cualquier abono mensual, trimestral o anual por primera vez.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <Section background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Alquiler de material</h2>
            <p className="text-gray-700 mb-4">
              Si no dispones del material necesario para escalar, no te preocupes. 
              En Uadibloc puedes alquilar todo lo que necesites:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex justify-between items-center">
                <span>Pies de gato</span>
                <span className="font-bold">3€</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Arnés</span>
                <span className="font-bold">2€</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Magnesio (bola)</span>
                <span className="font-bold">1€</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Set completo</span>
                <span className="font-bold">5€</span>
              </li>
            </ul>
            <p className="text-gray-700 text-sm italic">
              *El alquiler de material es para uso exclusivo en nuestras instalaciones.
            </p>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Descuentos especiales</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <div>
                    <span className="font-bold">Familias</span>
                    <p className="text-gray-700">10% de descuento en abonos para miembros de la misma unidad familiar.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <div>
                    <span className="font-bold">Estudiantes</span>
                    <p className="text-gray-700">5% de descuento en abonos presentando carnet estudiantil.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <div>
                    <span className="font-bold">Cumpleaños</span>
                    <p className="text-gray-700">Entrada gratuita el día de tu cumpleaños (presentando DNI).</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">✓</span>
                  <div>
                    <span className="font-bold">Federados</span>
                    <p className="text-gray-700">5% de descuento adicional para deportistas federados en escalada.</p>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">* Los descuentos no son acumulables entre sí y se aplicarán siempre sobre la tarifa general.</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">¿Quieres probar antes de decidirte?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Ofrecemos una clase de prueba gratuita para que puedas conocer nuestras instalaciones 
          y experimentar la escalada antes de elegir tu abono.
        </p>
        <Button to="/donde-estamos">Reservar clase de prueba</Button>
      </Section>
    </>
  );
};

export default PreciosRocodromo;