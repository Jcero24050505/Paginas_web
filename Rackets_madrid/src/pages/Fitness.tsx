import { Dumbbell, HeartPulse, Timer, Trophy } from 'lucide-react';
import HeroSection from '../components/ui/HeroSection';
import SectionTitle from '../components/ui/SectionTitle';
import FeatureCard from '../components/ui/FeatureCard';
import PricingTable from '../components/ui/PricingTable';
import InstagramSection from '../components/ui/InstagramSection';

const Fitness = () => {
  const fitnessPricingOptions = [
    {
      title: 'Acceso Diario',
      price: '€8,00',
      features: [
        'Acceso todo el día',
        'Sala de fitness completa',
        'Sin compromiso',
        'Pago único'
      ],
    },
    {
      title: 'Mensualidad',
      price: '€40,00',
      features: [
        'Acceso ilimitado',
        'Sala de fitness completa',
        'Asesoramiento básico',
        'Sin permanencia'
      ],
      highlighted: true,
    },
    {
      title: 'Trimestral',
      price: '€118,00',
      features: [
        'Acceso ilimitado',
        'Sala de fitness completa',
        'Asesoramiento personalizado',
        'Ahorro del 12%'
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="DISPONEMOS DE SALA DE FITNESS"
        subtitle="Ponte en forma en nuestro FIT Studio"
        imageSrc="https://i.imgur.com/6XgT1VT.jpeg"
      />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="FIT Studio"
                subtitle="El espacio de Rackets Madrid dedicado al Fitness no es un centro convencional ni tampoco un club exclusivo."
              />
              <p className="text-gray-600 mb-6">
                Se trata de una sala Fitness totalmente equipada en la que encontrarás lo que necesitas para realizar tus entrenamientos y conseguir los objetivos que te propongas.
              </p>
              <p className="text-gray-600 mb-6">
                En definitiva, FIT Studio es un concepto único que ofrece una zona exclusiva para el entrenamiento individual sin la obligación de horarios, en la que podrás realizar el entrenamiento de cualquier modalidad deportiva, ajustándose a tus necesidades.
              </p>
              <p className="text-gray-600">
                Hemos creado una zona exclusiva donde podrás encontrar modernos equipos de entrenamiento, cajones de pliometría, máquinas de cardio, puestos TRX, zona de arrastres y trabajo con Kettlebells, etc.
              </p>
            </div>
            <div>
              <img 
                src="https://i.imgur.com/GQeALUp.jpeg" 
                alt="FIT Studio" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Entreno funcional"
            subtitle=""
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <FeatureCard 
              title="Equipamiento completo"
              description="Contamos con maquinaria de última generación para ejercicios de fuerza y cardio."
              icon={<Dumbbell size={48} />}
            />
            <FeatureCard 
              title="Entrenamiento funcional"
              description="Zona específica para ejercicios funcionales con TRX, kettlebells y más."
              icon={<HeartPulse size={48} />}
            />
            <FeatureCard 
              title="Flexibilidad de horarios"
              description="Sin restricciones de horario. Entrena cuando mejor te convenga."
              icon={<Timer size={48} />}
            />
            <FeatureCard 
              title="Calidad y exclusividad"
              description="Ambiente tranquilo y exclusivo para entrenar sin aglomeraciones."
              icon={<Trophy size={48} />}
            />
          </div>
        </div>
      </section>
      
      {/* Equipments Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Sala multifuncional"
            subtitle="Hemos creado una zona exclusiva con todo el equipamiento necesario para tu entrenamiento"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Zona de Cardio</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cintas de correr profesionales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bicicletas estáticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Elípticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Remos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Escaladores</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Zona de Musculación</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Máquinas de musculación</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Zona de peso libre</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bancos multiposición</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Jaula de potencia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Área de estiramientos</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Entrenamiento Funcional</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>TRX</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Kettlebells</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Cajones pliométricos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bandas elásticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Battle ropes</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Extras</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Zona de arrastres</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Monitores para control de frecuencia cardíaca</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Asesoramiento personalizado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Planes de entrenamiento a medida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Ambiente exclusivo y tranquilo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <PricingTable 
        title="Tarifas FIT Studio"
        subtitle="Entrenamiento individual sin la obligación de horarios"
        options={fitnessPricingOptions}
      />    
    </div>
  );
};

export default Fitness;