import { useState } from 'react';
import Hero from '../components/Hero';
import { Maximize2 } from 'lucide-react';

const VisitaVirtual = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (!iframe) return;

    if (!isFullscreen) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/imagen-banner/28/instalaciones NV 20.jpg"
        title="Explora RockTown con nuestro Tour Virtual 🧭"
        subtitle="Recorre nuestras salas en 360º desde donde estés"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative animate-[fadeIn_0.8s_ease-out]">
              <iframe 
                src="https://tour.keepeyeonball.com/Tour/280c384a-05fd-464e-b340-cbdb6a594bc6/4K?sc=12&y=594&p=-25&tz=100&r=0.00;0.00&l=0.00;0.00&mz=0.00&d=0&m=0" 
                width="100%" 
                height="600" 
                className="rounded-xl shadow-lg"
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy"
              />
              <button
                onClick={toggleFullscreen}
                className="absolute bottom-4 right-4 bg-black/70 hover:bg-black/80 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Maximize2 size={20} />
                <span>Ver en pantalla completa</span>
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700">
                Explora nuestras instalaciones como si estuvieras aquí. Navega por las diferentes salas, 
                descubre nuestros espacios de escalada y visualiza todos los detalles de nuestro centro.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisitaVirtual;