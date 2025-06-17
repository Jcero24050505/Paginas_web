import React, { useEffect, useRef, useState, useCallback } from 'react';

// Componente principal de la aplicación que renderiza la página de Entrenamiento
function App() {
  return (
    <>
      {/* Carga de Tailwind CSS para el estilo */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Configuración de la fuente Inter para una tipografía consistente */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }

        /* Animaciones Keyframe */
        /* Animación para elementos que se deslizan desde la izquierda */
        @keyframes slideInFromLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        /* Animación para elementos que se deslizan desde la derecha */
        @keyframes slideInFromRight {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        /* Animación para elementos que se deslizan desde arriba */
        @keyframes slideInFromTop {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        /* Animación para elementos que se deslizan desde abajo */
        @keyframes slideInFromBottom {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        /* Animación simple de aparición (fade-in) */
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        /* Animación para imágenes que giran y escalan en el eje Y */
        @keyframes flipScaleInY {
          0% { transform: perspective(400px) rotateY(180deg) scale(0.5); opacity: 0; } /* Empieza volteada, pequeña e invisible */
          100% { transform: perspective(400px) rotateY(0deg) scale(1); opacity: 1; }   /* Termina normal, tamaño completo y visible */
        }

        /* Clases de utilidad de animación personalizadas */
        .animate-slide-left { animation: slideInFromLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInFromRight 0.8s ease-out forwards; }
        .animate-slide-top { animation: slideInFromTop 0.8s ease-out forwards; }
        .animate-slide-bottom { animation: slideInFromBottom 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-flip-scale-in-y { animation: flipScaleInY 1s ease-out forwards; }

        /* Estado inicial oculto para todos los elementos animados antes de que comience la animación */
        .animated-element { opacity: 0; }
        `}
      </style>
      <EntrenamientoPage />
    </>
  );
}

// Componente de la página de Entrenamiento
const EntrenamientoPage: React.FC = () => {
  // Estados para controlar la visibilidad de cada elemento animado
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [servicesTitleVisible, setServicesTitleVisible] = useState(false);
  const [introTextVisible, setIntroTextVisible] = useState(false);
  const [individualCardVisible, setIndividualCardVisible] = useState(false);
  const [groupCardVisible, setGroupCardVisible] = useState(false);
  const [onlineCardVisible, setOnlineCardVisible] = useState(false);
  const [areasTitleVisible, setAreasTitleVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Refs para cada elemento a observar
  const heroTextRef = useRef(null);
  const servicesTitleRef = useRef(null);
  const introTextRef = useRef(null);
  const individualCardRef = useRef(null);
  const groupCardRef = useRef(null);
  const onlineCardRef = useRef(null);
  const areasTitleRef = useRef(null);
  const ctaRef = useRef(null);

  // Array para guardar las refs de las tarjetas de áreas de entrenamiento para animaciones escalonadas
  const trainingAreaRefs = useRef([]);
  const [trainingAreaVisibles, setTrainingAreaVisibles] = useState({});

  // Efecto para configurar los Intersection Observers para todos los elementos
  useEffect(() => {
    const observers = []; // Array para almacenar todos los observadores y limpiarlos después

    // Función auxiliar para crear y observar un elemento
    const createObserver = (ref, setVisibility, options = {}) => {
      if (!ref.current) return; // Si la ref no está disponible, salir
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) { // Si el elemento está en el viewport
          setVisibility(true); // Establecer su estado de visibilidad a true
          observer.unobserve(entry.target); // Dejar de observar una vez que la animación se ha disparado
        }
      }, options);
      observer.observe(ref.current); // Empezar a observar el elemento
      observers.push(observer); // Añadir el observador al array
    };

    // Configurar observadores para los elementos principales
    createObserver(heroTextRef, setHeroTextVisible, { threshold: 0.1 });
    createObserver(servicesTitleRef, setServicesTitleVisible, { threshold: 0.1 });
    createObserver(introTextRef, setIntroTextVisible, { threshold: 0.1 });
    createObserver(individualCardRef, setIndividualCardVisible, { threshold: 0.1 });
    createObserver(groupCardRef, setGroupCardVisible, { threshold: 0.1 });
    createObserver(onlineCardRef, setOnlineCardVisible, { threshold: 0.1 });
    createObserver(areasTitleRef, setAreasTitleVisible, { threshold: 0.1 });
    createObserver(ctaRef, setCtaVisible, { threshold: 0.1 });

    // Configurar observadores para las tarjetas de áreas de entrenamiento (animación escalonada)
    trainingAreaRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setTrainingAreaVisibles(prev => ({ ...prev, [index]: true })); // Establecer la visibilidad para la tarjeta específica
            observer.unobserve(entry.target);
          }
        }, { threshold: 0.1 });
        observer.observe(ref);
        observers.push(observer);
      }
    });

    // Función de limpieza: desconectar todos los observadores cuando el componente se desmonte
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []); // El array de dependencias vacío asegura que este efecto se ejecute solo una vez al montar

  // Función para añadir refs a las tarjetas de áreas de entrenamiento
  const addTrainingAreaRef = useCallback((el, index) => {
    if (el) {
      trainingAreaRefs.current[index] = el;
    }
  }, []);

  return (
    // Contenedor principal con fuente y overflow-x-hidden para evitar barras de desplazamiento horizontales durante las animaciones
    <div className="pt-16 font-inter overflow-x-hidden">
      {/* Sección Hero - Ancho completo, altura responsiva, con imagen de fondo y texto superpuesto */}
      <section className="relative h-80 bg-gray-800 rounded-b-lg overflow-hidden shadow-lg">
        {/* Imagen de fondo con fallback */}
        <img
          src="https://i.imgur.com/3Cd7INB.png"
          alt="Entrenamiento"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x320/333333/FFFFFF?text=Entrenamiento"; }}
        />
        {/* Texto superpuesto para la sección hero, animado para aparecer */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            ref={heroTextRef}
            className={`text-center text-white animated-element ${heroTextVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">ENTRENAMIENTO</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4 drop-shadow-md">
              Programas personalizados para mejorar tu rendimiento
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contenido - Área principal para los detalles del programa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Título de la sección, animado para deslizarse desde arriba */}
            <h2
              ref={servicesTitleRef}
              className={`text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 animated-element ${servicesTitleVisible ? 'animate-slide-top' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >GRUPOS DE ENTRENAMIENTO</h2>

            {/* Texto introductorio, animado para deslizarse desde la izquierda */}
            <div
              ref={introTextRef}
              className={`prose prose-lg max-w-none mb-12 text-gray-700 leading-relaxed animated-element ${introTextVisible ? 'animate-slide-left' : ''}`}
              style={{ animationDelay: '0.6s' }}
            >
              <p className="mb-4">
                Estos grupos están diseñados para el desarrollo técnico, táctico y físico de la escalada.
              </p>
              <p>
                Dirigidos por técnicos cualificados y divididos por niveles, desde iniciación a tecnificación.
              </p>
            </div>

            {/* Sección de Programas - Muestra las diferentes opciones de entrenamiento */}
            <div className="space-y-12">
              {/* Tarjeta de Entrenamiento Individual, animada para deslizarse desde la izquierda */}
              <div
                ref={individualCardRef}
                className={`bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animated-element ${individualCardVisible ? 'animate-slide-left' : ''}`}
                style={{ animationDelay: '0.8s' }}
              >
                <div className="md:flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    {/* Imagen para entrenamiento individual con fallback, animada para voltear y escalar */}
                    <img
                      src="https://i.imgur.com/6cYRC5Y.jpeg"
                      alt="Entrenamiento Individual"
                      className={`w-full h-64 md:h-full object-cover animated-element ${individualCardVisible ? 'animate-flip-scale-in-y' : ''}`}
                      style={{ animationDelay: '0.2s' }} /* Retraso para la imagen dentro de la tarjeta */
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/333333?text=Individual"; }}
                    />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Grupos de 2 días</h3>
                      <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                        <li>Dos sesiones semanales.</li>
                        <li>Lunes y miércoles o martes y jueves.</li>
                        <li>Horarios de mañana o tarde.</li>
                        <li>Duración: 90 min / sesión</li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
                      <div>
                        <span className="text-3xl font-bold text-[#50aed9]">Consultar precios</span>
                      </div>
                      <a
                        href="/contacto"
                        className="mt-4 sm:mt-0 bg-[#50aed9] hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                      >
                        Solicitar info
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta de Entrenamiento en Grupo, animada para deslizarse desde la derecha */}
              <div
                ref={groupCardRef}
                className={`bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animated-element ${groupCardVisible ? 'animate-slide-right' : ''}`}
                style={{ animationDelay: '1s' }}
              >
                <div className="md:flex flex-col md:flex-row-reverse">
                  <div className="md:w-2/5">
                    {/* Imagen para entrenamiento en grupo con fallback, animada para voltear y escalar */}
                    <img
                      src="https://i.imgur.com/53B1D3t.png"
                      alt="Entrenamiento en Grupo"
                      className={`w-full h-64 md:h-full object-cover animated-element ${groupCardVisible ? 'animate-flip-scale-in-y' : ''}`}
                      style={{ animationDelay: '0.2s' }} /* Retraso para la imagen dentro de la tarjeta */
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/333333?text=Grupo"; }}
                    />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Grupos de 1 día</h3>
                      <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                        <li>Una sesión semanal.</li>
                        <li>Viernes. Horarios de tarde.</li>
                        <li>Lunes o miércoles o sábados. Horarios de mañana.</li>
                        <li>Duración: 90 min / sesión</li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
                      <div>
                        <span className="text-3xl font-bold text-[#50aed9]">Consultar precios</span>
                      </div>
                      <a
                        href="/contacto"
                        className="mt-4 sm:mt-0 bg-[#50aed9] hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                      >
                        Solicitar info
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta de Entrenamiento Online, animada para deslizarse desde la izquierda */}
              <div
                ref={onlineCardRef}
                className={`bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animated-element ${onlineCardVisible ? 'animate-slide-left' : ''}`}
                style={{ animationDelay: '1.2s' }}
              >
                <div className="md:flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    {/* Imagen para entrenamiento online con fallback, animada para voltear y escalar */}
                    <img
                      src="https://i.imgur.com/OMEo8JN.png"
                      alt="Entrenamiento Online"
                      className={`w-full h-64 md:h-full object-cover animated-element ${onlineCardVisible ? 'animate-flip-scale-in-y' : ''}`}
                      style={{ animationDelay: '0.2s' }} /* Retraso para la imagen dentro de la tarjeta */
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/333333?text=Online"; }}
                    />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Escuela Juvenil</h3>
                      <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-1">
                        <li>Una sesión semanal.</li>
                        <li>Lunes, martes, miércoles, viernes, sábado o domingo.</li>
                        <li>Horarios de mañana o tarde.</li>
                        <li>Duración: 90 min / sesión</li>
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
                      <div>
                        <span className="text-3xl font-bold text-[#50aed9]">Consultar precios</span>
                      </div>
                      <a
                        href="/contacto"
                        className="mt-4 sm:mt-0 bg-[#50aed9] hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                      >
                        Solicitar info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección de Áreas de Entrenamiento */}
            <div className="mt-16">
              {/* Título de las áreas de entrenamiento, animado para deslizarse desde arriba */}
              <h3
                ref={areasTitleRef}
                className={`text-2xl md:text-3xl font-semibold mb-8 text-center text-gray-800 animated-element ${areasTitleVisible ? 'animate-slide-top' : ''}`}
                style={{ animationDelay: '0.2s' }}
              >Áreas de Entrenamiento</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Contenido de las tarjetas de áreas de entrenamiento (datos simulados) */}
                {[
                  { title: "Fuerza y Potencia", description: "Entrenamiento específico para mejorar la fuerza de dedos, brazos y core, esencial para progresar en escalada." },
                  { title: "Resistencia", description: "Programas para aumentar tu capacidad de mantener el esfuerzo durante más tiempo, evitando la fatiga prematura." },
                  { title: "Técnica", description: "Perfeccionamiento de movimientos, posiciones y estrategias para escalar de forma más eficiente y con menos esfuerzo." },
                  { title: "Flexibilidad", description: "Ejercicios para mejorar tu rango de movimiento, fundamental para alcanzar posiciones difíciles y prevenir lesiones." },
                  { title: "Prevención de Lesiones", description: "Trabajo específico para fortalecer zonas vulnerables y aprender a entrenar de forma segura y sostenible." },
                  { title: "Aspectos Mentales", description: "Estrategias para mejorar la concentración, gestionar el miedo y potenciar la confianza en tus capacidades." },
                ].map((area, index) => (
                  <div
                    key={index}
                    ref={el => addTrainingAreaRef(el, index)} // Asigna la ref a cada tarjeta
                    className={`bg-gray-50 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 animated-element ${trainingAreaVisibles[index] ? 'animate-slide-bottom' : ''}`}
                    style={{ animationDelay: `${0.1 * index}s` }} // Retraso escalonado para cada tarjeta
                  >
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">{area.title}</h4>
                    <p className="text-gray-600">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sección de Llamada a la Acción (CTA), animada para deslizarse desde abajo */}
            <div
              ref={ctaRef}
              className={`mt-16 bg-gradient-to-r from-[#50aed9] to-blue-100 rounded-xl p-8 text-center shadow-lg animated-element ${ctaVisible ? 'animate-slide-bottom' : ''}`}
              style={{ animationDelay: '0.2s' }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">¿Listo para mejorar tu nivel?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                Nuestros entrenadores están preparados para ayudarte a alcanzar tus objetivos, sea cual sea tu nivel actual. Contacta con nosotros para una consulta inicial sin compromiso.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-[#50aed9] hover:bg-blue-700 text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contactar con un entrenador
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
