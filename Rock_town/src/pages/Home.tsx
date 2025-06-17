import React from 'react';
import Hero from '../components/Hero';
import ImageSection from '../components/ImageSection';
import ContactSection from '../components/ContactSection';
import { HERO_IMAGES } from '../utils/constants';

const Home: React.FC = () => {
  // Update title
  React.useEffect(() => {
    document.title = 'Home - RockTown Climbing';
  }, []);

  return (
    <div>
      <Hero 
        title="RockTown Climbing" 
        subtitle="Estamos en el corazón de Madrid 🗺️" 
        imageUrl={HERO_IMAGES[0].url}
        isHomepage={true}
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Descubre la emoción de la escalada en pleno centro de Madrid 🧗‍♂️
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-amber-600 mb-8">
            ¡Descubre nuestras dos salas de boulder, creadas para superarte cada día!
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            RockTown Climbing es un espacio diseñado para todos los amantes de la escalada, 
            desde principiantes hasta expertos. Nuestras instalaciones ofrecen desafíos 
            para todos los niveles, con paredes constantemente renovadas para mantenerte 
            motivado y superar tus límites.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-amber-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Instalaciones de Calidad</h4>
              <p className="text-gray-600">Paredes modernas, presas de alta calidad y zonas específicas para cada nivel.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Instructores Experimentados</h4>
              <p className="text-gray-600">Nuestro equipo de profesionales certificados te guiará en cada paso de tu progreso.</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow hover:shadow-md transition duration-300">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Comunidad Acogedora</h4>
              <p className="text-gray-600">Únete a una familia de escaladores apasionados que comparten tu amor por este deporte.</p>
            </div>
          </div>
        </div>
      </section>
      
      <ImageSection 
        imageUrl={HERO_IMAGES[1].url}
        alt="RockTown Climbing Facilities"
        title="Un espacio creado para los amantes de la escalada"
        description="Nuestras instalaciones están diseñadas para ofrecer una experiencia de escalada única. Con paredes de diferentes grados de dificultad, zonas especializadas para principiantes y rutas desafiantes para escaladores experimentados, tenemos algo para todos. Además, contamos con áreas de descanso, vestuarios modernos y un ambiente acogedor donde harás amigos que comparten tu pasión."
      />
      
      <ImageSection 
        imageUrl="https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/86ffb59c-3aac-3448-212f-0fc924ffd8d7.jpg"
        alt="RockTown Climbing Classes"
        title="Clases para todos los niveles"
        description="Tanto si es tu primera vez escalando como si ya tienes experiencia, nuestros instructores certificados te ayudarán a mejorar tu técnica y superar tus límites. Ofrecemos clases para niños, adultos, principiantes y avanzados, en grupos reducidos o personalizadas. Aprende los fundamentos de la escalada o perfecciona tus movimientos en un ambiente seguro y motivador."
        reverse={true}
      />
      
      <ContactSection />
    </div>
  );
};

export default Home;