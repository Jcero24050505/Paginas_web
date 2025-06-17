import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ui/ImageCarousel';
import SectionTitle from '../components/ui/SectionTitle';
import ActivityCard from '../components/ui/ActivityCard';
import { carouselImages } from '../data/carousel';
import { outdoorActivities, kidsActivities } from '../data/activities';
import { MapPin, Calendar, Award, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Carousel */}
      <section className="relative">
        <ImageCarousel images={carouselImages} height="h-screen" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Vive la aventura con Yurok
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Escalada, barranquismo, vías ferratas y mucho más para todos los niveles
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/rocodromo/primer-dia"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Visita nuestro rocódromo
              </Link>
              <Link
                to="/naturaleza/escalada"
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Descubre actividades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Ubicación céntrica</h3>
              <p className="text-gray-600">Fácil acceso en pleno centro de la ciudad, con parking cercano.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Abierto todo el año</h3>
              <p className="text-gray-600">Escalada indoor todos los días sin importar la meteorología.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Guías certificados</h3>
              <p className="text-gray-600">Monitores profesionales con amplia experiencia y titulación oficial.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Para todas las edades</h3>
              <p className="text-gray-600">Actividades adaptadas para niños, jóvenes y adultos de todos los niveles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Actividades en la Naturaleza"
            subtitle="Descubre todas las experiencias que tenemos para ti"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outdoorActivities.slice(0, 3).map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                linkPath={`/naturaleza/${activity.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/naturaleza/escalada"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Ver todas las actividades
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Kids Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Para los más pequeños"
            subtitle="Actividades especiales para niños y jóvenes"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kidsActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                linkPath={`/actividades/ninos/${activity.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/escuela/infantil"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Descubre nuestra escuela infantil
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para vivir la aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ven a conocernos y disfruta de una experiencia única en nuestro rocódromo o en plena naturaleza.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/tarifas/bonos"
              className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-md transition-colors"
            >
              Ver tarifas
            </Link>
            <Link
              to="/contacto"
              className="bg-transparent hover:bg-blue-700 text-white border border-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;