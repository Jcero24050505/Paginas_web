import React, { useEffect, useRef, useState, useCallback } from 'react';

// Componente principal de la aplicación que renderiza la página de la Escuela Juvenil
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

        /* Nueva animación: Zoom con tambaleo para la imagen */
        @keyframes zoomWobbleIn {
          0% { transform: scale(0.2) rotateZ(-30deg); opacity: 0; }
          60% { transform: scale(1.1) rotateZ(5deg); opacity: 1; }
          80% { transform: scale(0.95) rotateZ(-2deg); }
          100% { transform: scale(1) rotateZ(0deg); opacity: 1; }
        }

        /* Nueva animación: Pop-out con rotación para el botón */
        @keyframes popRotateIn {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          70% { transform: scale(1.2) rotate(10deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }


        /* Clases de utilidad de animación personalizadas */
        .animate-slide-left { animation: slideInFromLeft 0.8s ease-out forwards; }
        .animate-slide-right { animation: slideInFromRight 0.8s ease-out forwards; }
        .animate-slide-top { animation: slideInFromTop 0.8s ease-out forwards; }
        .animate-slide-bottom { animation: slideInFromBottom 0.8s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-flip-scale-in-y { animation: flipScaleInY 1s ease-out forwards; }
        .animate-zoom-wobble-in { animation: zoomWobbleIn 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; } /* Curva elástica */
        .animate-pop-rotate-in { animation: popRotateIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; } /* Curva elástica */


        /* Estado inicial oculto para todos los elementos animados antes de que comience la animación */
        .animated-element { opacity: 0; }
        `}
      </style>
      <EscuelaJuvenilPage />
    </>
  );
}

// Componente de la página de la Escuela Juvenil
const EscuelaJuvenilPage: React.FC = () => {
  // Estados para controlar la visibilidad de cada elemento animado
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [schoolTitleVisible, setSchoolTitleVisible] = useState(false);
  const [introTextVisible, setIntroTextVisible] = useState(false);
  // Estados de visibilidad para los elementos separados del bloque "Pequeños Escaladores"
  const [pequenosImageVisible, setPequenosImageVisible] = useState(false);
  const [pequenosButtonVisible, setPequenosButtonVisible] = useState(false);

  // Refs para cada elemento a observar
  const heroTextRef = useRef(null);
  const schoolTitleRef = useRef(null);
  const introTextRef = useRef(null);
  // Refs para los elementos separados
  const pequenosImageRef = useRef(null);
  const pequenosButtonRef = useRef(null);

  // Array para guardar las refs de las tarjetas de actividades especiales para animaciones escalonadas
  const specialActivitiesRefs = useRef([]);
  const [specialActivitiesVisibles, setSpecialActivitiesVisibles] = useState({});

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
    createObserver(schoolTitleRef, setSchoolTitleVisible, { threshold: 0.1 });
    createObserver(introTextRef, setIntroTextVisible, { threshold: 0.1 });
    // Configurar observadores para los elementos separados de "Pequeños Escaladores"
    createObserver(pequenosImageRef, setPequenosImageVisible, { threshold: 0.1 });
    createObserver(pequenosButtonRef, setPequenosButtonVisible, { threshold: 0.1 });

    // Configurar observadores para las tarjetas de actividades especiales (animación escalonada)
    specialActivitiesRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setSpecialActivitiesVisibles(prev => ({ ...prev, [index]: true })); // Establecer la visibilidad para la tarjeta específica
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

  // Función para añadir refs a las tarjetas de actividades especiales
  const addSpecialActivityRef = useCallback((el, index) => {
    if (el) {
      specialActivitiesRefs.current[index] = el;
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
          alt="Escuela Juvenil"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x320/333333/FFFFFF?text=Escuela+Juvenil"; }}
        />
        {/* Texto superpuesto para la sección hero, animado para aparecer */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div
            ref={heroTextRef}
            className={`text-center text-white animated-element ${heroTextVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ESCUELA JUVENIL</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              
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
              ref={schoolTitleRef}
              className={`text-3xl font-bold mb-8 text-center text-gray-800 animated-element ${schoolTitleVisible ? 'animate-slide-top' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >¡Arranca con nosotros!</h2>

            {/* Texto introductorio, animado para deslizarse desde la izquierda */}
            <div
              ref={introTextRef}
              className={`prose prose-lg max-w-none mb-12 text-gray-700 leading-relaxed animated-element ${introTextVisible ? 'animate-slide-left' : ''}`}
              style={{ animationDelay: '0.6s' }}
            >
              <p className="mb-4">
                Descubre la escalada de forma divertida y como esta puede potenciar la solidaridad, el trabajo en común y la autosuperación, siempre dentro del espíritu de equipo que favorece este deporte.
              </p>
              <p>
                Nuestro profesorado se encargará de transmitir nuestros conocimientos y nuestra pasión a los más jóvenes.
              </p>
            </div>

            {/* Sección de Grupos - Muestra las diferentes opciones de edad */}
            <div className="space-y-12">
              {/* Elementos separados del bloque "Pequeños Escaladores" */}
              <div className="flex flex-col items-center justify-center space-y-8 py-8 px-4 bg-gray-50 rounded-xl shadow-lg">
                {/* Imagen de Pequeños Escaladores, animada con el nuevo efecto "zoomWobbleIn" */}
                <img
                  ref={pequenosImageRef}
                  src="https://i.imgur.com/OMEo8JN.png"
                  alt="Pequeños Escaladores"
                  className={`w-full max-w-md h-64 object-cover rounded-lg animated-element ${pequenosImageVisible ? 'animate-zoom-wobble-in' : ''}`}
                  style={{ animationDelay: '0.8s' }}
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/400x300/CCCCCC/333333?text=Pequeños+Escaladores"; }}
                />
                {/* Botón de Pequeños Escaladores, animado con el nuevo efecto "popRotateIn" */}
                <a
                  ref={pequenosButtonRef}
                  href="/contacto"
                  className={`mt-4 bg-[#50aed9] hover:bg-blue-600 text-white py-2 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg animated-element ${pequenosButtonVisible ? 'animate-pop-rotate-in' : ''}`}
                  style={{ animationDelay: '1.0s' }} /* Ajustado el delay */
                >
                  Inscribirse
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
