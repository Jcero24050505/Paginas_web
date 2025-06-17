import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import PricingTable from '../components/ui/PricingTable';
import InstagramSection from '../components/ui/InstagramSection';

const Padel = () => {
  const padelPricingOptions = [
    {
      title: 'Alquiler de Pista',
      price: 'Desde €16,00',
      features: [
        'Lunes a Viernes',
        'Diferentes franjas horarias',
        'Pistas de cristal',
        'Reserva online'
      ],
    },
    {
      title: 'Bono 10 horas',
      price: '€150,00',
      features: [
        'Válido para 3 meses',
        'Uso en cualquier horario',
        'Reserva con antelación',
        'Ahorro significativo'
      ],
      highlighted: true,
    },
    {
      title: 'Fin de Semana',
      price: 'Desde €20,00',
      features: [
        'Sábados y domingos',
        'Reserva online',
        'Pistas de cristal',
        'Equipamiento disponible'
      ],
    },
  ];

  const classesPricingOptions = [
    {
      title: 'Clase individual',
      price: '€35,00',
      features: [
        '60 minutos',
        'Monitor titulado',
        'Personalizada',
        'Todos los niveles'
      ],
    },
    {
      title: 'Clase grupal',
      price: '€12,00 / persona',
      features: [
        'Grupos de 3-4 personas',
        '60 minutos',
        'Monitor titulado',
        'Todos los niveles'
      ],
      highlighted: true,
    },
    {
      title: 'Bono 5 clases',
      price: '€160,00',
      features: [
        '60 minutos por sesión',
        'Válido para 2 meses',
        'Monitor titulado',
        'Ahorro del 10%'
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="TENEMOS pistas de pÁdel"
        subtitle="2 pistas exteriores de pádel de cristal"
        imageSrc="https://i.imgur.com/lVXGEFA.jpeg"
      />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="El Club"
                subtitle="Rackets Madrid es un club deportivo ubicado en Las Rozas de Madrid, con 4 pistas de squash, 2 pistas de cristal de pádel y una espaciosa sala dedicada a actividades de fitness."
              />
              <p className="text-gray-600 mb-6">
                Las instalaciones incluyen un amplio parking privado, tienda deportiva, zona de cafetería y saunas en los vestuarios. Además, tenemos servicio de fisioterapia.
              </p>
              <p className="text-gray-600 mb-6">
                Gracias a la tecnología KeepEyeOnBall.com puedes visitar Rackets Madrid como si estuvieras allí mismo.
              </p>
              <p className="text-gray-600">
                Disfruta de tu otro deporte de raqueta favorito en nuestras modernas instalaciones.
              </p>
            </div>
            <div>
              <img 
                src="https://racketsmadrid.com/wp-content/uploads/2019/04/PADEL-Imagen-02.jpg" 
                alt="Rackets Madrid Club" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Sections */}
      <PricingTable 
        title="Tarifas de alquiler de pistas de pádel"
        subtitle="Diferentes opciones adaptadas a tus necesidades"
        options={padelPricingOptions}
      />
      
      <PricingTable 
        title="Tarifas de clases particulares y entrenamientos"
        subtitle="Aprende o mejora tu técnica con nuestros monitores titulados"
        options={classesPricingOptions}
      />
      
      {/* School Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://racketsmadrid.com/wp-content/uploads/2019/04/PADEL-Imagen-1.jpg" 
                alt="Escuela Infantil" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle 
                title="Escuela Infantil"
                subtitle="Rackets Madrid también tiene una escuela infantil de pádel, caracterizada por su metodología de enseñanza basada en la técnica y el concepto de juego."
              />
              <p className="text-gray-600 mb-6">
                Fomentamos la cultura deportiva cimentada en el respeto, compañerismo y educación dentro (y fuera) de la pista, valores que consideramos muy importantes a la hora de practicar cualquier deporte y que se aplican a cualquier ámbito de la vida diaria.
              </p>
              <p className="text-gray-600 mb-6">
                Nuestra escuela cuenta con diferentes programas adaptados tanto a los que quieren iniciarse en el pádel como a los que quieren competir al más alto nivel.
              </p>
              <p className="text-gray-600">
                Pide información en hola@racketsmadrid.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Instagram Section */}
      <InstagramSection />
      
    </div>
  );
};

export default Padel;