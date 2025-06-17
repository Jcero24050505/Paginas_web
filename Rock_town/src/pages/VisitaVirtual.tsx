import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Maximize2, Minimize2 } from 'lucide-react';

const VisitaVirtual: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Update title
  React.useEffect(() => {
    document.title = 'Visita Virtual - RockTown Climbing';
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div>
      <Hero 
        title="Explora RockTown con nuestro Tour Virtual 🧭" 
        subtitle="Recorre nuestras salas en 360º desde donde estés."
        imageUrl="https://mcusercontent.com/6bb17cf10d815a4eb3ca03956/images/86ffb59c-3aac-3448-212f-0fc924ffd8d7.jpg"
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="relative animate-fadeIn">
              <iframe 
                src="https://tour.keepeyeonball.com/Tour/280c384a-05fd-464e-b340-cbdb6a594bc6/4K?sc=12&y=594&p=-25&tz=100&r=0.00;0.00&l=0.00;0.00&mz=0.00&d=0&m=0" 
                className="w-full h-[600px] rounded-xl shadow-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md transition duration-300 flex items-center gap-2"
              >
                {isFullscreen ? (
                  <>
                    <Minimize2 size={20} />
                    <span>Salir de pantalla completa</span>
                  </>
                ) : (
                  <>
                    <Maximize2 size={20} />
                    <span>Ver en pantalla completa</span>
                  </>
                )}
              </button>
            </div>
            
            <div className="mt-12 text-center text-gray-600">
              <p className="max-w-2xl mx-auto">
                Explora nuestras instalaciones en detalle con este tour virtual interactivo. 
                Navega por las diferentes salas, descubre nuestros muros de escalada y 
                familiarízate con nuestro espacio antes de tu primera visita.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitaVirtual;