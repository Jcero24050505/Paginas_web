import { useState } from 'react';
import Hero from '../components/Hero';

interface FacilityItemProps {
  title: string;
  image: string;
  description: string;
}

const FacilityItem = ({ title, image, description }: FacilityItemProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-2xl font-bold mb-4 text-zinc-800">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <div className="order-1 md:order-2">
        <img src={image} alt={title} className="rounded-lg shadow-md w-full h-auto" />
      </div>
    </div>
  );
};

const FacilityItemAlt = ({ title, image, description }: FacilityItemProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 items-center">
      <div>
        <img src={image} alt={title} className="rounded-lg shadow-md w-full h-auto" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-zinc-800">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

interface GalleryItemProps {
  image: string;
  onClick: () => void;
}

const GalleryItem = ({ image, onClick }: GalleryItemProps) => {
  return (
    <div className="overflow-hidden rounded-lg cursor-pointer" onClick={onClick}>
      <img 
        src={image} 
        alt="Instalaciones" 
        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
};

interface LightboxProps {
  image: string;
  onClose: () => void;
}

const Lightbox = ({ image, onClose }: LightboxProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl max-h-[90vh]">
        <button 
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          onClick={onClose}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          src={image} 
          alt="Instalaciones" 
          className="max-w-full max-h-[80vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

const Instalaciones = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const galleryImages = [
    'https://www.salamandra-bc.com/imagen-banner/95/fotos intalaciones 10.jpg',
    'https://www.salamandra-bc.com/imagen-banner/28/instalaciones NV 20.jpg',
    'https://www.salamandra-bc.com/imagen-banner/29/roco 8 metros.jpg',
    'https://www.salamandra-bc.com/imagen-banner/30/cafeteriainstalaciones.jpg',
    'https://www.salamandra-bc.com/imagen2-blog/67/nv instalaciones 2.jpg',
    'https://www.salamandra-bc.com/imagen-banner/48/inicio-video-salamandra.jpg',
  ];

  return (
    <div>
      <Hero 
        imageUrl="https://www.salamandra-bc.com/imagen-banner/28/instalaciones NV 20.jpg"
        title="Instalaciones"
        subtitle="Conoce nuestros espacios para la escalada"
      />

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <FacilityItem 
            title="Rocódromo en panel 3D"
            image="https://www.salamandra-bc.com/imagen-banner/28/instalaciones NV 20.jpg"
            description="Rocodromo de Alta densidad en fibra 3D con el máximo realismo y adherencia. Un lugar donde podrás sacarle todo el rendimiento a tus entrenamientos o clases de escalada. Gracias a este tipo de panel conseguirás mayor transferencia en tu aprendizaje y técnica gestual para escalar en roca. Un panel único en Madrid. Además contamos con un espacio para entrenar físico y adecuar el tono muscular."
          />

          <FacilityItemAlt 
            title="Rocódromo de 8 metros para bautismos de escalada"
            image="https://www.salamandra-bc.com/imagen-banner/29/roco 8 metros.jpg"
            description="Rocódromo construido en panel 3D ideal para practicar o aprender maniobras de escalada, ya que su altura de 8m permite una experiencia vertical antes de adentrarse en las vías de escalada en roca. Ideal para los mas pequeños, los que quieran probar un bautismo de escalada con monitor o aquellos que quieran practicar cualquier maniobra o técnica de escalada, dentro de un ambiente muy confortable. Siempre con asesoramiento de nuestros Técnicos."
          />

          <FacilityItem 
            title="Cafetería - Cervecería"
            image="https://www.salamandra-bc.com/imagen-banner/30/cafeteriainstalaciones.jpg"
            description="Un lugar agradable donde porder tomarte una cervecita con los amigos, ver o proyectar las mejores actividades de montaña o programar proximas aventuras. un sitio donde compartir y celebrar. Disponemos de Libreria de consulta y wifi."
          />

          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Mira más fotos de nuestras instalaciones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <GalleryItem 
                  key={index}
                  image={image}
                  onClick={() => openLightbox(image)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <Lightbox 
          image={lightboxImage}
          onClose={closeLightbox}
        />
      )}

      {/* Equipment Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Equipamiento y material</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-zinc-800">Disponemos de material para alquiler</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium text-zinc-800">Pies de gato</span>
                    <p className="text-gray-600">Disponibles en todas las tallas</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium text-zinc-800">Magneseras</span>
                    <p className="text-gray-600">Para un mejor agarre durante la escalada</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium text-zinc-800">Arneses, cuerdas y equipos de seguridad</span>
                    <p className="text-gray-600">Incluidos en todas las clases y actividades guiadas</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 border-t border-orange-100">
              <h3 className="text-xl font-semibold mb-4 text-zinc-800">¿Qué debes traer?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Ropa cómoda deportiva</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Botella de agua</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Toalla pequeña (opcional)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Muchas ganas de disfrutar y aprender</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instalaciones;