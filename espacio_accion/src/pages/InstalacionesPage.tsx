import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Importa useLocation

// Main App component (este no necesita cambios si ya lo tienes separado)
// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 font-sans antialiased overflow-x-hidden">
//       <InstalacionesPage />
//     </div>
//   );
// }

// Custom hook for scroll-based animations (sin cambios)
const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { elementRef, isInView };
};

// Component for exaggerated image entry animations (sin cambios)
const AnimatedImage: React.FC<{ src: string; alt: string; delay?: string; className?: string; direction?: 'left' | 'right' | 'top' | 'bottom' | 'none'; rotate?: string; zIndex?: string }> = ({ src, alt, delay = 'delay-0', className, direction = 'bottom', rotate = 'rotate-0', zIndex = 'z-10' }) => {
  const { elementRef, isInView } = useScrollAnimation();

  const getInitialTransformClass = () => {
    switch (direction) {
      case 'left': return '-translate-x-40';
      case 'right': return 'translate-x-40';
      case 'top': return '-translate-y-40';
      case 'bottom': return 'translate-y-40';
      case 'none': return '';
      default: return 'translate-y-40';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`
        transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] transform
        ${isInView ? `opacity-100 translate-x-0 translate-y-0 scale-100 ${rotate}` : `opacity-0 ${getInitialTransformClass()} scale-50`}
        ${delay} ${className} ${zIndex}
      `}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-lg shadow-lg"
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/${e.currentTarget.naturalWidth || 600}x${e.currentTarget.naturalHeight || 400}/cccccc/333333?text=Image+Not+Found`;
          e.currentTarget.alt = `Placeholder image for ${alt}`;
        }}
      />
    </div>
  );
};

// Component for distinct text entry animations (sin cambios)
const AnimatedText: React.FC<{ children: React.ReactNode; delay?: string; className?: string }> = ({ children, delay = 'delay-0', className }) => {
  const { elementRef, isInView } = useScrollAnimation();
  return (
    <div
      ref={elementRef}
      className={`
        transition-all duration-700 ease-out transform
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        ${delay} ${className}
      `}
    >
      {children}
    </div>
  );
};


const InstalacionesPage: React.FC = () => {
  const location = useLocation(); // Obtener el objeto de localización de React Router

  // Función para manejar el scroll suave a una sección
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajuste para la barra de navegación pegajosa
      const navHeight = 80; // Altura aproximada de tu nav sticky. Ajusta si es necesario.
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  // useEffect para manejar el scroll inicial si la URL ya tiene un hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // Eliminar el '#'
      // Usar un pequeño retardo para asegurar que el DOM esté renderizado
      // después de la navegación de React Router.
      setTimeout(() => scrollToSection(id), 100);
    }
  }, [location.hash]); // Se ejecuta cada vez que el hash de la URL cambia

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-80 bg-gray-800 overflow-hidden">
        <img
          src="https://www.climbingpass.org/wp-content/uploads/2021/10/hau6o5lvf8kqni3b1swe9dxmzcgtrp4j-1024x683.jpg"
          alt="Instalaciones"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/1260x750/cccccc/333333?text=Image+Not+Found";
            e.currentTarget.alt = "Placeholder image for Instalaciones";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 rounded-lg p-2">INSTALACIONES</h1>
            <p className="text-xl max-w-2xl mx-auto px-4 rounded-lg p-2">
              Descubre nuestros espacios diseñados para la práctica de la escalada
            </p>
          </div>
        </div>
      </section>

      {/* Navigation for quick access */}
      {/* Los botones aquí solo funcionarán si ya estás en esta página. */}
      {/* Si tu navegación principal está en Layout, necesitarás un enfoque diferente */}
      <nav className="bg-gray-200 py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 flex justify-center space-x-8">
          {/* Usamos window.location.hash directamente en los botones para que el navegador maneje el hash */}
          <a href="#rocódromo" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Rocódromo
          </a>
          <a href="#sala-de-boulder" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Sala de Boulder
          </a>
          <a href="#zona-de-entrenamiento" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Zona de Entrenamiento
          </a>
          <a href="#servicios-adicionales" className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200">
            Servicios Adicionales
          </a>
        </div>
      </nav>

      {/* Content Section: Details about each facility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText delay="delay-100">
              <h2 className="text-3xl font-bold mb-8 text-center rounded-lg p-2">Nuestras Instalaciones</h2>
            </AnimatedText>

            <div className="space-y-24">
              {/* Rocódromo (Climbing Wall) Section */}
              {/* Añade scroll-mt-[altura_nav] para compensar la barra pegajosa */}
              <div id="rocódromo" className="relative mb-12 min-h-[450px] md:min-h-[550px] lg:min-h-[600px] flex flex-col md:flex-row items-center justify-center scroll-mt-[80px]">
                {/* ... content ... */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
                  <AnimatedImage
                    src="https://i.imgur.com/Nr6MpWJ.png"
                    alt="Rocódromo 1"
                    delay="delay-200"
                    direction="left"
                    rotate="-rotate-6"
                    zIndex="z-20"
                    className="absolute top-10 left-0 w-56 h-56 md:w-64 md:h-64"
                  />
                  <AnimatedImage
                    src="https://i.imgur.com/rH7Yq0R.png"
                    alt="Rocódromo 2"
                    delay="delay-300"
                    direction="right"
                    rotate="rotate-3"
                    zIndex="z-10"
                    className="absolute top-20 right-0 w-64 h-64 md:w-72 md:h-72"
                  />
                  <AnimatedImage
                    src="https://i.imgur.com/OCvzg3k.png"
                    alt="Rocódromo 3"
                    delay="delay-400"
                    direction="top"
                    rotate="rotate-12"
                    zIndex="z-30"
                    className="absolute bottom-10 left-1/3 w-48 h-48 md:w-56 md:h-56"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                  <AnimatedText delay="delay-600">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 rounded-lg p-2">Rocódromo</h3>
                  </AnimatedText>
                  <AnimatedText delay="delay-700">
                    <div className="prose prose-lg max-w-none text-gray-700">
                      <p>Nuestro rocódromo principal cuenta con más de 500m² de superficie escalable, con paredes de hasta 15 metros de altura. Disponemos de más de 100 vías equipadas, con diferentes niveles de dificultad, desde iniciación (III grado) hasta niveles avanzados (8b).</p>
                      <p>Las vías se renuevan periódicamente para ofrecer nuevos retos a nuestros usuarios. Todas están equipadas con anclajes de seguridad homologados y revisados regularmente.</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Más de 100 vías de todos los niveles</li>
                        <li>Paredes de hasta 15 metros de altura</li>
                        <li>Diferentes perfiles: placas, desplomes, techos, diedros</li>
                        <li>Zona específica para principiantes</li>
                        <li>Sistema de auto-aseguramiento en algunas vías</li>
                      </ul>
                    </div>
                  </AnimatedText>
                </div>
              </div>

              {/* Boulder Room Section */}
              <div id="sala-de-boulder" className="relative mb-12 min-h-[450px] md:min-h-[550px] lg:min-h-[600px] flex flex-col md:flex-row-reverse items-center justify-center scroll-mt-[80px]">
                {/* ... content ... */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
                  <AnimatedImage
                    src="https://i.imgur.com/uaznbuV.png"
                    alt="Sala de Boulder 1"
                    delay="delay-200"
                    direction="right"
                    rotate="rotate-7"
                    zIndex="z-20"
                    className="absolute top-10 right-0 w-56 h-56 md:w-64 md:h-64"
                  />
                  <AnimatedImage
                    src="https://i.imgur.com/6cYRC5Y.jpeg"
                    alt="Sala de Boulder 2"
                    delay="delay-300"
                    direction="left"
                    rotate="-rotate-4"
                    zIndex="z-10"
                    className="absolute top-20 left-0 w-64 h-64 md:w-72 md:h-72"
                  />
                   <AnimatedImage
                    src="https://i.imgur.com/n1AQZfI.png"
                    alt="Sala de Boulder 3"
                    delay="delay-400"
                    direction="bottom"
                    rotate="rotate-10"
                    zIndex="z-30"
                    className="absolute bottom-10 right-1/3 w-48 h-48 md:w-56 md:h-56"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pr-8 mt-8 md:mt-0">
                  <AnimatedText delay="delay-600">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 rounded-lg p-2">Sala de Boulder</h3>
                  </AnimatedText>
                  <AnimatedText delay="delay-700">
                    <div className="prose prose-lg max-w-none text-gray-700">
                      <p>Nuestra sala de boulder ofrece 300m² dedicados exclusivamente a esta modalidad de escalada sin cuerda. Cuenta con zonas de diferentes inclinaciones y más de 200 problemas marcados, que se renuevan mensualmente.</p>
                      <p>El suelo está totalmente cubierto con colchonetas de seguridad de gran espesor, proporcionando la máxima protección en las caídas. La altura máxima de las paredes es de 4,5 metros.</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Más de 200 problemas de todos los niveles</li>
                        <li>Diferentes perfiles: placas, desplomes, techos, aristas</li>
                        <li>Sistema de marcaje por colores según dificultad</li>
                        <li>Colchonetas de seguridad de alta densidad</li>
                        <li>Zona de calentamiento y estiramientos</li>
                      </ul>
                    </div>
                  </AnimatedText>
                </div>
              </div>

              {/* Training Zone Section */}
              <div id="zona-de-entrenamiento" className="relative mb-12 min-h-[450px] md:min-h-[550px] lg:min-h-[600px] flex flex-col md:flex-row items-center justify-center scroll-mt-[80px]">
                {/* ... content ... */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
                  <AnimatedImage
                    src="https://madridfilmoffice.com/wp-content/uploads/2018/07/00_espacio-accion_resultado_05-808x600.jpg"
                    alt="Zona de Entrenamiento 1"
                    delay="delay-200"
                    direction="top"
                    rotate="rotate-5"
                    zIndex="z-20"
                    className="absolute top-10 left-0 w-56 h-56 md:w-64 md:h-64"
                  />
                  <AnimatedImage
                    src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqZ_e_u-0iHO6eqhzRTwkCRrm9S-1WGrVcW2KC4DF5suopSMEfJFTjyPAXdZ0NNYkT1vScYiH91J4YmX6Qtr9fYi3phfgx9wqnxmnoVgPggqlyhCmCHYCk5YlzBRykaxMhLHeifyg=w203-h152-k-no"
                    alt="Zona de Entrenamiento 2"
                    delay="delay-300"
                    direction="bottom"
                    rotate="-rotate-7"
                    zIndex="z-10"
                    className="absolute top-20 right-0 w-64 h-64 md:w-72 md:h-72"
                  />
                  <AnimatedImage
                    src="https://www.climbingpass.org/wp-content/uploads/2021/10/nsgdar83ujmt4kzoqp970bywciv51x6e-scaled.jpg"
                    alt="Zona de Entrenamiento 3"
                    delay="delay-400"
                    direction="left"
                    rotate="rotate-11"
                    zIndex="z-30"
                    className="absolute bottom-10 left-1/3 w-48 h-48 md:w-56 md:h-56"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0">
                  <AnimatedText delay="delay-600">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 rounded-lg p-2">Zona de Entrenamiento</h3>
                  </AnimatedText>
                  <AnimatedText delay="delay-700">
                    <div className="prose prose-lg max-w-none text-gray-700">
                      <p>Contamos con una zona específica para el entrenamiento de fuerza y resistencia orientado a la escalada. Este espacio está equipado con diferentes elementos diseñados para trabajar los grupos musculares más importantes para los escaladores.</p>
                      <p>Además, disponemos de un espacio multiuso para realizar actividades de preparación física general, estiramientos y clases dirigidas.</p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Tablas de multiagarre y campus board</li>
                        <li>Sistema de entrenamiento TRX</li>
                        <li>Pesas, kettlebells y material para entrenamiento funcional</li>
                        <li>Espacio para yoga y estiramientos</li>
                        <li>Máquinas específicas para trabajar la musculatura implicada en la escalada</li>
                      </ul>
                    </div>
                  </AnimatedText>
                </div>
              </div>

              {/* Additional Services Section (no collage, just text) */}
              <div id="servicios-adicionales" className="relative mb-12 flex flex-col items-center justify-center scroll-mt-[80px]">
                <AnimatedText delay="delay-200">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 rounded-lg p-2">Servicios Adicionales</h3>
                </AnimatedText>
                <AnimatedText delay="delay-300">
                  <div className="prose prose-lg max-w-none text-gray-700">
                    <p>Para hacer tu experiencia más cómoda, en Espacio Acción disponemos de:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Vestuarios amplios con duchas y taquillas</li>
                      <li>Zona de descanso con cafetería</li>
                      <li>Tienda especializada con material de escalada</li>
                      <li>Alquiler de material (pies de gato, arneses, cuerdas, etc.)</li>
                      <li>Parking gratuito para clientes</li>
                      <li>WiFi gratuito en todo el centro</li>
                    </ul>
                  </div>
                </AnimatedText>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstalacionesPage; // Asegúrate de que esta línea esté presente