import {
  DumbbellIcon,
  HeartPulse,
  BrainCircuit,
  Trophy
} from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';
import PricingTable from '../components/ui/PricingTable';
import InstagramSection from '../components/ui/InstagramSection';
import React, { useState, useEffect } from 'react';

const ClubInfoComponent: React.FC = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloque 1: El Club */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <div className="aspect-video mb-4">
              <img
                src="https://i.imgur.com/jzS7ad3.jpeg"
                alt="El Club"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">El Club</h3>
            <p className="text-gray-700">
              Rackets Madrid es un club deportivo ubicado en Las Rozas de Madrid, con 4 pistas de squash, 2 pistas de cristal de pádel y una espaciosa sala dedicada a actividades de fitness. Las instalaciones incluyen un amplio parking privado, tienda deportiva, zona de cafetería y saunas en los vestuarios. Además, tenemos servicio de fisioterapia.
            </p>
          </div>

          {/* Bloque 2: Escuela Infantil */}
<div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
  <div className="aspect-video mb-4">
    <img
      src="https://racketsmadrid.com/wp-content/uploads/2019/04/DSC0027.jpg"
      alt="Escuela Infantil"
      className="w-full h-full object-cover rounded"
    />
  </div>
  <h3 className="text-2xl font-semibold mb-2">Escuela Infantil</h3>
  
  <p className="text-gray-700 mb-2">
    El squash es un deporte que desarrolla no sólo las capacidades físicas, motoras y de coordinación, sino también habilidades cognitivas y sociales. Por ello, está especialmente recomendado a partir de los 6 años de edad.
  </p>

  <p className="text-gray-700 mb-2">
    Rackets Madrid cuenta con una consolidada escuela infantil en la que participan semanalmente más de 40 niños y niñas de entre 7 y 18 años, adaptando los objetivos y metodologías según la edad.
  </p>

  <p className="text-gray-700 mb-2">
    <strong>De 7 a 9 años:</strong> a través de una variedad de actividades físicas, los niños aprenden movimientos básicos como correr, saltar, lanzar y golpear la pelota.
  </p>

  <p className="text-gray-700 mb-2">
    <strong>De 10 a 13 años:</strong> se consolidan los fundamentos del juego mediante entrenamientos estructurados que desarrollan habilidades específicas del squash.
  </p>

  <p className="text-gray-700 mb-4">
    <strong>De 14 a 18 años:</strong> los adolescentes perfeccionan sus capacidades técnicas y pueden alcanzar niveles de alto rendimiento.
  </p>

  <p className="text-gray-700">
    Pide información en <a href="mailto:hola@racketsmadrid.com" className="text-blue-600 underline">hola@racketsmadrid.com</a>
  </p>
</div>


          {/* Bloque 3: Colegios e Institutos */}
<div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
  <div className="aspect-video mb-4">
    <img
      src="https://i.imgur.com/hCpBPtQ.jpeg"
      alt="Colegios e Institutos"
      className="w-full h-full object-cover object-center rounded"
    />
  </div>
  <h3 className="text-2xl font-semibold mb-2">Colegios e Institutos</h3>

  <p className="text-gray-700 mb-2">
    En colaboración con colegios e institutos, Rackets Madrid ofrece distintas actividades de squash para grupos de estudiantes, tanto en horario escolar como extraescolar.
  </p>

  <p className="text-gray-700 mb-4">
    Estas actividades se adaptan a diferentes niveles: desde sesiones de iniciación para quienes nunca han practicado el deporte, hasta clases avanzadas orientadas a la competición.
  </p>

  <p className="text-gray-700">
    Pide información en <a href="mailto:hola@racketsmadrid.com" className="text-blue-600 underline">hola@racketsmadrid.com</a>
  </p>
</div>



          {/* Bloque 4: Monitores titulados */}
<div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
  <div className="aspect-video mb-4">
    <img
      src="https://res.cloudinary.com/playtomic/image/upload/c_limit,w_1600/v1/pro/tenants/cfb85c37-550d-40f8-b35e-f91d5f2dc052/racketsmadrid_0001"
      alt="Monitor"
      className="w-full h-full object-cover rounded"
    />
  </div>
  <h3 className="text-2xl font-semibold mb-2">Monitores titulados</h3>

  <p className="text-gray-700 mb-2">
    Rackets Madrid ofrece clases individuales o en grupos (de 2 a 4 jugadores) todos los días de la semana, impartidas por profesores titulados y federados.
  </p>

  <p className="text-gray-700 mb-2">
    La filosofía del club se basa en ofrecer clases de alta calidad, adaptadas a cada nivel, donde cada jugador reciba atención personalizada. Para ello, se elabora una planificación específica y se establecen objetivos concretos que permiten consolidar los aspectos técnicos trabajados.
  </p>

  <p className="text-gray-700 mb-4">
    Se ofrece un horario flexible, siempre sujeto a disponibilidad.
  </p>

  <p className="text-gray-700">
    Pide información en <a href="mailto:hola@racketsmadrid.com" className="text-blue-600 underline">hola@racketsmadrid.com</a>
  </p>
</div>

        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const slides = [
    {
      id: 1,
      imageUrl: 'https://i.imgur.com/fFaeQO7.jpeg',
      title: 'Rackets Madrid',
      subtitle: 'Club de Squash y Padel en Las Rozas',
    },
    {
      id: 2,
      imageUrl: 'https://i.imgur.com/qr3BuDv.jpeg',
      title: 'Las mejores instalaciones',
      subtitle: 'Para disfrutar del deporte',
    },
  ];

  const squashPricingOptions = [
    {
      title: 'Alquiler de Pista',
      price: 'Desde €8,00',
      features: ['Lunes a Viernes', 'Diferentes franjas horarias', 'Reserva online', 'Pago en el club'],
    },
    {
      title: 'Bono 10 horas',
      price: '€75,00',
      features: ['Válido para 3 meses', 'Uso en cualquier horario', 'Reserva con antelación', 'Ahorro significativo'],
      highlighted: true,
    },
    {
      title: 'Clase Particular',
      price: 'Desde €25,00',
      features: ['Monitor titulado', 'Duración: 45 minutos', 'Técnica y táctica', 'Todos los niveles'],
    },
  ];

  const classesPricingOptions = [
    {
      title: 'Clase individual',
      price: '€25,00',
      features: ['45 minutos', 'Monitor titulado', 'Personalizada', 'Reserva previa'],
    },
    {
      title: 'Bono 5 clases',
      price: '€112,00',
      features: ['45 minutos por sesión', 'Válido para 2 meses', 'Monitor titulado', 'Ahorro del 10%'],
      highlighted: true,
    },
    {
      title: 'Clase compartida',
      price: '€15,00 / persona',
      features: ['Mínimo 2 personas', '45 minutos', 'Monitor titulado', 'Reserva previa'],
    },
  ];

  // HeroSlider logic
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">{slide.title}</h1>
                <p className="text-xl md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Club Info Section */}
      <ClubInfoComponent />

      {/* Liga de Squash */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://racketsmadrid.com/wp-content/uploads/2020/01/TORNEO-VI-ANIVERSARIO-800x800.jpg"
                alt="Liga de Squash"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <SectionTitle
                title="Liga de Squash"
                subtitle="Rackets Madrid organiza la Liga Madrid-Noroeste..."
              />
              <p className="text-gray-600 mb-6">
                En esta liga han participado más de 125 jugadores en sus más de 15 temporadas desde su creación.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                <Trophy size={20} className="mr-2" />
                RESULTADOS Y CLASIFICACIÓN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <PricingTable
        title="Tarifas de alquiler de pistas de squash"
        subtitle="Diferentes opciones adaptadas a tus necesidades"
        options={squashPricingOptions}
      />

      <PricingTable
        title="Tarifas de clases particulares y entrenamientos"
        subtitle="Aprende o mejora tu técnica con nuestros monitores titulados"
        options={classesPricingOptions}
      />

      {/* Instagram Section */}
      <InstagramSection />
    </div>
  );
};

export default Home;