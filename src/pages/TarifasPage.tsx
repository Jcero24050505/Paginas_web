import React, { useEffect, useRef, useState, useCallback } from 'react';

// Componente principal de la aplicación que renderiza la página de Tarifas
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
          scroll-behavior: smooth; /* Habilita el desplazamiento suave para los anclajes */
        }

        /* Animaciones Keyframe */
        @keyframes slideInFromLeft {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInFromRight {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInFromTop {
          0% { transform: translateY(-50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInFromBottom {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        /* Animación de volteo y escala para imágenes */
        @keyframes flipScaleInY {
          0% { transform: perspective(400px) rotateY(180deg) scale(0.5); opacity: 0; }
          100% { transform: perspective(400px) rotateY(0deg) scale(1); opacity: 1; }
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
      <TarifasPage />
    </>
  );
}

// Componente de la página de Tarifas
const TarifasPage: React.FC = () => {
  // Estados para controlar la visibilidad de cada elemento animado
  const [heroTextVisible, setHeroTextVisible] = useState(false);
  const [tarifasTitleVisible, setTarifasTitleVisible] = useState(false);
  const [introTextVisible, setIntroTextVisible] = useState(false);
  const [indexVisible, setIndexVisible] = useState(false); // Estado para el índice
  const [entradasDiaVisible, setEntradasDiaVisible] = useState(false);
  const [bonosEntradasVisible, setBonosEntradasVisible] = useState(false);
  const [abonosSocioVisible, setAbonosSocioVisible] = useState(false);
  const [entrenamientoVisible, setEntrenamientoVisible] = useState(false);
  const [clasesVisible, setClasesVisible] = useState(false);
  const [cursosVisible, setCursosVisible] = useState(false);
  const [alquilerMaterialVisible, setAlquilerMaterialVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);

  // Refs para cada elemento a observar
  const heroTextRef = useRef(null);
  const tarifasTitleRef = useRef(null);
  const introTextRef = useRef(null);
  const indexRef = useRef(null); // Ref para el índice
  const entradasDiaRef = useRef(null);
  const bonosEntradasRef = useRef(null);
  const abonosSocioRef = useRef(null);
  const entrenamientoRef = useRef(null);
  const clasesRef = useRef(null);
  const cursosRef = useRef(null);
  const alquilerMaterialRef = useRef(null);
  const ctaRef = useRef(null);

  // Refs para las tarjetas de abonos y entrenamiento para animaciones escalonadas
  const abonoCardsRefs = useRef([]);
  const [abonoCardsVisibles, setAbonoCardsVisibles] = useState({});

  const entrenamientoCardsRefs = useRef([]);
  const [entrenamientoCardsVisibles, setEntrenamientoCardsVisibles] = useState({});

  const clasesCardsRefs = useRef([]);
  const [clasesCardsVisibles, setClasesCardsVisibles] = useState({});

  const cursosCardsRefs = useRef([]);
  const [cursosCardsVisibles, setCursosCardsVisibles] = useState({});

  // Efecto para configurar los Intersection Observers para todos los elementos
  useEffect(() => {
    const observers = [];

    const createObserver = (ref, setVisibility, options = {}) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibility(true);
          observer.unobserve(entry.target);
        }
      }, options);
      observer.observe(ref.current);
      observers.push(observer);
    };

    // Configurar observadores para los elementos principales
    createObserver(heroTextRef, setHeroTextVisible, { threshold: 0.1 });
    createObserver(tarifasTitleRef, setTarifasTitleVisible, { threshold: 0.1 });
    createObserver(introTextRef, setIntroTextVisible, { threshold: 0.1 });
    createObserver(indexRef, setIndexVisible, { threshold: 0.1 }); // Observador para el índice
    createObserver(entradasDiaRef, setEntradasDiaVisible, { threshold: 0.1 });
    createObserver(bonosEntradasRef, setBonosEntradasVisible, { threshold: 0.1 });
    createObserver(abonosSocioRef, setAbonosSocioVisible, { threshold: 0.1 });
    createObserver(entrenamientoRef, setEntrenamientoVisible, { threshold: 0.1 });
    createObserver(clasesRef, setClasesVisible, { threshold: 0.1 });
    createObserver(cursosRef, setCursosVisible, { threshold: 0.1 });
    createObserver(alquilerMaterialRef, setAlquilerMaterialVisible, { threshold: 0.1 });
    createObserver(ctaRef, setCtaVisible, { threshold: 0.1 });

    // Configurar observadores para las tarjetas de abonos (animación escalonada)
    abonoCardsRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setAbonoCardsVisibles(prev => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        }, { threshold: 0.1 });
        observer.observe(ref);
        observers.push(observer);
      }
    });

    // Configurar observadores para las tarjetas de entrenamiento (animación escalonada)
    entrenamientoCardsRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setEntrenamientoCardsVisibles(prev => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        }, { threshold: 0.1 });
        observer.observe(ref);
        observers.push(observer);
      }
    });

    // Configurar observadores para las tarjetas de clases (animación escalonada)
    clasesCardsRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setClasesCardsVisibles(prev => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        }, { threshold: 0.1 });
        observer.observe(ref);
        observers.push(observer);
      }
    });

    // Configurar observadores para las tarjetas de cursos (animación escalonada)
    cursosCardsRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setCursosCardsVisibles(prev => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        }, { threshold: 0.1 });
        observer.observe(ref);
        observers.push(observer);
      }
    });


    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Funciones para añadir refs a las tarjetas
  const addAbonoCardRef = useCallback((el, index) => {
    if (el) abonoCardsRefs.current[index] = el;
  }, []);

  const addEntrenamientoCardRef = useCallback((el, index) => {
    if (el) entrenamientoCardsRefs.current[index] = el;
  }, []);

  const addClasesCardRef = useCallback((el, index) => {
    if (el) clasesCardsRefs.current[index] = el;
  }, []);

  const addCursosCardRef = useCallback((el, index) => {
    if (el) cursosCardsRefs.current[index] = el;
  }, []);


  return (
    <div className="pt-16 font-inter overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-80 bg-gray-800 rounded-b-lg overflow-hidden shadow-lg">
        <img
          src="https://i.imgur.com/3Cd7INB.png"
          alt="Tarifas"
          className="w-full h-full object-cover opacity-70"
          onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x320/333333/FFFFFF?text=Tarifas"; }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={heroTextRef}
            className={`text-center text-white animated-element ${heroTextVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TARIFAS</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Conoce nuestros precios y modalidades de acceso
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Título de la sección */}
            <h2
              ref={tarifasTitleRef}
              className={`text-3xl font-bold mb-8 text-center text-gray-800 animated-element ${tarifasTitleVisible ? 'animate-slide-top' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >Nuestras Tarifas</h2>

            {/* Texto introductorio - Precio Reducido */}
            <div
              ref={introTextRef}
              className={`bg-gray-100 rounded-xl p-6 mb-12 shadow-md animated-element ${introTextVisible ? 'animate-slide-left' : ''}`}
              style={{ animationDelay: '0.6s' }}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Precio Reducido</h3>
              <p className="text-gray-700 mb-4">
                Cumplir y acreditar alguna de las siguientes condiciones:
                (válido para entradas día, bonos, abonos y entrenamiento)
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Carné estudiante &lt;25 años.</li>
                <li>Menor de 16 años.</li>
                <li>Cliente VIP.</li>
                <li>Parado.</li>
                <li>Acuerdos especiales.</li>
                <li>Entrada de mañana.</li>
              </ul>
            </div>

            {/* Índice de Navegación */}
            <div
              ref={indexRef}
              className={`
                bg-[#e0f2f7] rounded-xl p-4 shadow-lg animated-element z-50
                ${indexVisible ? 'animate-fade-in' : ''}
                fixed bottom-4 left-4 right-4 /* Posición fija para móvil */
                md:top-20 md:right-4 md:bottom-auto md:left-auto md:w-auto md:max-w-xs /* Posición fija para escritorio */
              `}
              style={{ animationDelay: '0.8s' }}
            >
              <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Explora Nuestras Tarifas</h3>
              <div className="grid grid-cols-1 gap-4">
                <a href="#entradas-dia" className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-3 px-4 rounded-full transition-colors duration-300 shadow-md">
                  Entradas de Día
                </a>
                <a href="#bonos-entradas" className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-3 px-4 rounded-full transition-colors duration-300 shadow-md">
                  Bonos de Entradas
                </a>
                <a href="#abonos-socio" className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-3 px-4 rounded-full transition-colors duration-300 shadow-md">
                  Abonos de Socio
                </a>
                <a href="#entrenamiento" className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-3 px-4 rounded-full transition-colors duration-300 shadow-md">
                  Entrenamiento
                </a>
                <a href="#clases" className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-3 px-4 rounded-full transition-colors duration-300 shadow-md">
                  Clases
                </a>
                <a href="#cursos" className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-3 px-4 rounded-full transition-colors duration-300 shadow-md">
                  Cursos
                </a>
                <a href="#alquiler-material" className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-3 px-4 rounded-full transition-colors duration-300 shadow-md">
                  Alquiler de Material
                </a>
              </div>
            </div>


            {/* Entradas de Día */}
            <div
              id="entradas-dia" // ID para el anclaje
              ref={entradasDiaRef}
              className={`bg-gray-50 rounded-xl p-8 mb-10 shadow-lg animated-element ${entradasDiaVisible ? 'animate-slide-right' : ''}`}
              style={{ animationDelay: '1.0s' }} /* Ajustado el delay */
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Entradas de Día</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Entrada de día */}
                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#50aed9]">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Entrada de día</h4>
                  <p className="text-4xl font-bold text-[#50aed9] mb-4">11,5€ <span className="text-base text-gray-500">/ día</span></p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Acceso completo a nuestras instalaciones</li>
                    <li>Precio reducido 9 €</li>
                    <li>Todos los viernes precio reducido 9 €</li>
                  </ul>
                </div>
                {/* Entrada de mañanas (12:30h) */}
                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#50aed9]">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Entrada de mañanas</h4>
                  <p className="text-4xl font-bold text-[#50aed9] mb-4">9€ <span className="text-base text-gray-500">/ día</span></p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Acceso completo a nuestras instalaciones</li>
                    <li>Entrando antes de las 12:30 h.</li>
                    <li>Solo laborables</li>
                  </ul>
                </div>
                {/* Entrada de mañanas (10:30h) - Nueva tarjeta */}
                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#50aed9] md:col-span-2">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Entrada de mañanas</h4>
                  <p className="text-4xl font-bold text-[#50aed9] mb-4">6€ <span className="text-base text-gray-500">/ día</span></p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Acceso completo a nuestras instalaciones</li>
                    <li>Entrando antes de las 10:30 h.</li>
                    <li>Solo laborables</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bonos de Entradas */}
            <div
              id="bonos-entradas" // ID para el anclaje
              ref={bonosEntradasRef}
              className={`bg-gray-50 rounded-xl p-8 mb-10 shadow-lg animated-element ${bonosEntradasVisible ? 'animate-slide-left' : ''}`}
              style={{ animationDelay: '1.2s' }} /* Ajustado el delay */
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Bonos de Entradas</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bono 5 días */}
                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#50aed9]">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Bono 5 días</h4>
                  <p className="text-4xl font-bold text-[#50aed9] mb-4">52€ <span className="text-base text-gray-500">/ 5 días</span></p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Acceso completo a nuestras instalaciones</li>
                    <li>No caducan</li>
                    <li>Se pueden compartir</li>
                    <li>Precio reducido 41 €</li>
                  </ul>
                </div>
                {/* Bono 10 días */}
                <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#50aed9]">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Bono 10 días</h4>
                  <p className="text-4xl font-bold text-[#50aed9] mb-4">92€ <span className="text-base text-gray-500">/ 10 días</span></p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    <li>Acceso completo a nuestras instalaciones</li>
                    <li>No caducan</li>
                    <li>Se pueden compartir</li>
                    <li>Precio reducido 72 €</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Abonos de Socio */}
            <div
              id="abonos-socio" // ID para el anclaje
              ref={abonosSocioRef}
              className={`bg-gray-50 rounded-xl p-8 mb-10 shadow-lg animated-element ${abonosSocioVisible ? 'animate-slide-bottom' : ''}`}
              style={{ animationDelay: '1.4s' }} /* Ajustado el delay */
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Abonos de Socio</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Abono Mensual */}
                <div
                  ref={el => addAbonoCardRef(el, 0)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${abonoCardsVisibles[0] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Abono Mensual</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">59,5€</span>
                      <span className="text-gray-500">/ mes</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Sin límite de días</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Precio reducido 56 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Suscribirse
                    </a>
                  </div>
                </div>

                {/* Abono Mensual Mañanas */}
                <div
                  ref={el => addAbonoCardRef(el, 1)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${abonoCardsVisibles[1] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Abono Mensual Mañanas</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">41,5€</span>
                      <span className="text-gray-500">/ mes</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Sin límite de días</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Suscribirse
                    </a>
                  </div>
                </div>

                {/* Abono Trimestral */}
                <div
                  ref={el => addAbonoCardRef(el, 2)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${abonoCardsVisibles[2] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Abono Trimestral</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">154€</span>
                      <span className="text-gray-500">/ trimestre</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Sin límite de días</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Precio reducido 144 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Suscribirse
                    </a>
                  </div>
                </div>

                {/* Abono Semestral */}
                <div
                  ref={el => addAbonoCardRef(el, 3)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${abonoCardsVisibles[3] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Abono Semestral</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">277€</span>
                      <span className="text-gray-500">/ semestre</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Sin límite de días</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Precio reducido 259 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Suscribirse
                    </a>
                  </div>
                </div>

                {/* Abono Anual */}
                <div
                  ref={el => addAbonoCardRef(el, 4)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${abonoCardsVisibles[4] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Abono Anual</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">492€</span>
                      <span className="text-gray-500">/ año</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Sin límite de días</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Precio reducido 460 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Suscribirse
                    </a>
                  </div>
                </div>

                {/* Descuento Familiar */}
                <div
                  ref={el => addAbonoCardRef(el, 5)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${abonoCardsVisibles[5] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.7s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Descuento Familiar</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">25%</span>
                      <span className="text-gray-500"> Dto.</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>A partir del 2º familiar</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Sin límite de días</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Entrenamiento */}
            <div
              id="entrenamiento" // ID para el anclaje
              ref={entrenamientoRef}
              className={`bg-gray-50 rounded-xl p-8 mb-10 shadow-lg animated-element ${entrenamientoVisible ? 'animate-slide-right' : ''}`}
              style={{ animationDelay: '1.4s' }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Entrenamiento</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Escuela juvenil */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 0)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[0] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Escuela Juvenil</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">45€</span>
                      <span className="text-gray-500">/ mes</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>De 11 a 17 años</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Una clase semanal</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Grupos reducidos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Extensión a socio 26,50 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>

                {/* Entrenamiento Mensual (2 días/semana) */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 1)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[1] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Entrenamiento Mensual</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">99€</span>
                      <span className="text-gray-500">/ mes</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Clases 2 días semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Acceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reducido 92,5 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>

                {/* Entrenamiento Mensual (1 día/semana) */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 2)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[2] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Entrenamiento Mensual (1 día)</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">80€</span>
                      <span className="text-gray-500">/ mes</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Clases 1 día semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Acceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reducido 74 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>

                {/* Entrenamiento Trimestral (2 días/semana) */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 3)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[3] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Entrenamiento Trimestral</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">254€</span>
                      <span className="text-gray-500">/ trimestre</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Clases 2 días semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Acceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reducido 237 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>

                {/* Entrenamiento Trimestral (1 día/semana) */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 4)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[4] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.6s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Entrenamiento Trimestral (1 día)</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">205€</span>
                      <span className="text-gray-500">/ trimestre</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Clases 1 día semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Acceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reducido 190 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>

                {/* Entrenamiento Semestral (2 días/semana) */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 5)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[5] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.7s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Entrenamiento Semestral</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">490€</span>
                      <span className="text-gray-500">/ semestre</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Clases 2 días semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Acceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reducido 458 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>

                {/* Entrenamiento Semestral (1 día/semana) */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 6)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[6] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.8s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Entrenamiento Semestral (1 día)</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">396€</span>
                      <span className="text-gray-500">/ semestre</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Clases 1 día semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Acceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reducido 366 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>

                {/* Entrenamiento Anual (2 días/semana) */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 7)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[7] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.9s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Entrenamiento Anual</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">926€</span>
                      <span className="text-gray-500">/ año</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Clases 2 días semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Acceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reducido 866 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>

                {/* Entrenamiento Anual (1 día/semana) */}
                <div
                  ref={el => addEntrenamientoCardRef(el, 8)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${entrenamientoCardsVisibles[8] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '1.0s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Entrenamiento Anual (1 día)</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">749€</span>
                      <span className="text-gray-500">/ año</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Clases 1 día semana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5% Dto. en tienda</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Acceso completo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Reducido 693 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Más información
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Clases */}
            <div
              id="clases" // ID para el anclaje
              ref={clasesRef}
              className={`bg-gray-50 rounded-xl p-8 mb-10 shadow-lg animated-element ${clasesVisible ? 'animate-slide-left' : ''}`}
              style={{ animationDelay: '1.6s' }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Clases</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Clase Personal (1 participante) */}
                <div
                  ref={el => addClasesCardRef(el, 0)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${clasesCardsVisibles[0] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Clase Personal</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">26€</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>1 participante</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>60 minutos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>No socio 34 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Reservar
                    </a>
                  </div>
                </div>

                {/* Clase Personal (2 participantes) */}
                <div
                  ref={el => addClasesCardRef(el, 1)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${clasesCardsVisibles[1] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Clase Personal (2 participantes)</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">42€</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>2 participantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>60 minutos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>No socios 54 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Reservar
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center mb-8">Consulta para más participantes</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bono 5h (1 participante) */}
                <div
                  ref={el => addClasesCardRef(el, 2)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${clasesCardsVisibles[2] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Bono 5h (1 participante)</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">114€</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>1 participante</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5 h.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>No socio 153 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Comprar
                    </a>
                  </div>
                </div>

                {/* Bono 5h (2 participantes) */}
                <div
                  ref={el => addClasesCardRef(el, 3)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${clasesCardsVisibles[3] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Bono 5h (2 participantes)</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">170€</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>2 participantes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>5 h.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>No socios 217 €</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center mt-8">Consulta para más participantes</p>
            </div>

            {/* Cursos */}
            <div
              id="cursos" // ID para el anclaje
              ref={cursosRef}
              className={`bg-gray-50 rounded-xl p-8 mb-10 shadow-lg animated-element ${cursosVisible ? 'animate-slide-right' : ''}`}
              style={{ animationDelay: '1.8s' }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Cursos</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Bautismo de escalada */}
                <div
                  ref={el => addCursosCardRef(el, 0)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${cursosCardsVisibles[0] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.2s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Bautismo de Escalada</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">20€</span>
                      <span className="text-gray-500">/ persona</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>A partir de 8 años</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Desde una persona</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>60 minutos</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      + info
                    </a>
                  </div>
                </div>

                {/* Curso Escalada Nivel 1 */}
                <div
                  ref={el => addCursosCardRef(el, 1)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${cursosCardsVisibles[1] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.3s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Curso Escalada Nivel 1</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">60€</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>A partir de 16 años</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>4 h (Dos sesiones de 2 h.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Promoción para seguir entrenando</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      + info
                    </a>
                  </div>
                </div>

                {/* Curso Escalada Nivel 2 */}
                <div
                  ref={el => addCursosCardRef(el, 2)}
                  className={`bg-white rounded-xl shadow-md overflow-hidden animated-element ${cursosCardsVisibles[2] ? 'animate-slide-bottom' : ''}`}
                  style={{ animationDelay: '0.4s' }}
                >
                  <div className="bg-[#50aed9] text-white p-4 text-center">
                    <h4 className="text-xl font-bold">Curso Escalada Nivel 2</h4>
                  </div>
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#50aed9]">90€</span>
                    </div>
                    <ul className="space-y-2 mb-6 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>A partir de 16 años</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>6 h (Dos sesiones de 3 h.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span>Promoción para seguir entrenando</span>
                      </li>
                    </ul>
                    <a
                      href="/contacto"
                      className="block text-center bg-[#50aed9] hover:bg-blue-600 text-white py-2 rounded-full transition-colors duration-300 shadow-md"
                    >
                      + info
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Alquiler de Material */}
            <div
              id="alquiler-material" // ID para el anclaje
              ref={alquilerMaterialRef}
              className={`bg-gray-50 rounded-xl p-8 mb-10 shadow-lg animated-element ${alquilerMaterialVisible ? 'animate-slide-left' : ''}`}
              style={{ animationDelay: '2.0s' }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Alquiler de Material</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-gray-700">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 px-2">Material</th>
                      <th className="text-right py-3 px-2">Precio/día</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-2">Pies de gato</td>
                      <td className="text-right font-semibold px-2">3€</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-2">Arnés</td>
                      <td className="text-right font-semibold px-2">3€</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-2">Cuerda</td>
                      <td className="text-right font-semibold px-2">5€</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-2">Dispositivo de aseguramiento</td>
                      <td className="text-right font-semibold px-2">2€</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2">Pack completo (arnés + pies de gato + dispositivo)</td>
                      <td className="text-right font-semibold px-2">7€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div
              ref={ctaRef}
              className={`mt-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 text-center shadow-lg animated-element ${ctaVisible ? 'animate-slide-bottom' : ''}`}
              style={{ animationDelay: '2.2s' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">¡Te esperamos!</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                Si tienes cualquier duda sobre nuestras tarifas o necesitas ayuda para elegir la opción que mejor se adapte a ti, no dudes en contactar con nosotros.
              </p>
              <a
                href="/contacto"
                className="inline-block bg-[#50aed9] hover:bg-blue-600 text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contacta con nosotros
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
