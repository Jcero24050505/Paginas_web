import React, { useEffect, useRef, useState } from 'react';

// Main App component that renders the CursosPage
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased overflow-x-hidden">
      {/* Tailwind CSS is assumed to be available and linked in the environment */}
      <CursosPage />
    </div>
  );
}

const courses = [
  {
    title: 'Bautismo de Escalada',
    duration: '1 H',
    level: 'A partir de 8 años.',
    description: 'Tendrás una primera toma de contacto con la escalada de forma divertida y verás las posibilidades de este deporte. Puedes hacerlo solo, con amigos o en familia.',
    includes: [
      'Técnico de escalada y equipo.'
    ],
    price: '20 € / persona',
    image: 'https://i.imgur.com/sTjabk0.png'
  },
  {
    title: 'CURSO ESCALADA NIVEL 1',
    duration: '4 h. (Dos sesiones de 2 h.)',
    level: 'A partir de 16 años.',
    description: 'Adquirir la técnica gestual de escalada necesaria, como base del aprendizaje deportivo, para cualquier modalidad de escalada y sobre el que poder evolucionar.',
    includes: [
      'Técnico de escalada y todo el equipo.'
    ],
    price: '60 € / persona',
    image: 'https://i.imgur.com/budBIdi.png'
  },
  {
    title: 'CURSO ESCALADA NIVEL 2',
    duration: '6 h. (Dos sesiones de 3 h.)',
    level: 'A partir de 16 años.',
    description: 'Aprender las técnicas y maniobras de cuerda, necesarias para escalar vías deportivas con seguridad y autonomía.',
    includes: [
      'Técnico de escalada y todo el equipo.'
    ],
    price: '90 € / persona',
    image: 'https://i.imgur.com/okXxaAv.png'
  }
];

// Custom hook for scroll-based animations
const useScrollAnimation = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when the element enters or exits the viewport
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin around the root
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return { elementRef, isInView };
};

// Component for a versatile animated block (for images, text, buttons)
const AnimatedBlock: React.FC<{ 
  children: React.ReactNode; 
  delay?: string; 
  initialX?: string; 
  initialY?: string; 
  initialRotate?: string; 
  className?: string 
}> = ({ children, delay = 'delay-0', initialX = 'translate-x-0', initialY = 'translate-y-0', initialRotate = 'rotate-0', className }) => {
  const { elementRef, isInView } = useScrollAnimation();
  return (
    <div
      ref={elementRef}
      className={`
        transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] transform
        ${isInView ? 'opacity-100 translate-x-0 translate-y-0 rotate-0' : `opacity-0 ${initialX} ${initialY} ${initialRotate}`}
        ${delay} ${className}
      `}
    >
      {children}
    </div>
  );
};


const CursosPage: React.FC = () => {
  // Define initial positions and rotations for course images and text blocks
  const getImageAnimationProps = (index: number) => {
    const directions = [
      { x: '-translate-x-40', y: '-translate-y-20', rotate: '-rotate-6' }, // From top-left
      { x: 'translate-x-40', y: '-translate-y-20', rotate: 'rotate-3' },  // From top-right
      { x: '-translate-x-40', y: 'translate-y-20', rotate: 'rotate-9' },  // From bottom-left
      { x: 'translate-x-40', y: 'translate-y-20', rotate: '-rotate-3' },  // From bottom-right
    ];
    return directions[index % directions.length];
  };

  const getTextAnimationProps = (index: number) => {
    const directions = [
      { x: 'translate-x-20', y: 'translate-y-20', rotate: 'rotate-5' },   // From bottom-right
      { x: '-translate-x-20', y: 'translate-y-20', rotate: '-rotate-2' }, // From bottom-left
      { x: 'translate-x-20', y: '-translate-y-20', rotate: 'rotate-7' },  // From top-right
      { x: '-translate-x-20', y: '-translate-y-20', rotate: '-rotate-4' },// From top-left
    ];
    return directions[index % directions.length];
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-80 bg-gray-800">
        <img 
          src="https://i.imgur.com/3Cd7INB.png" 
          alt="[Image of Cursos]" 
          className="w-full h-full object-cover opacity-70"
          // Fallback for image loading errors
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/1260x750/cccccc/333333?text=Image+Not+Found";
            e.currentTarget.alt = "[Image of Cursos]";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CURSOS</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Aprende y mejora con nuestros cursos especializados
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedBlock delay="delay-100" initialY="translate-y-10" initialX="translate-x-0" initialRotate="rotate-0">
              <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Cursos</h2>
            </AnimatedBlock>
            
            <AnimatedBlock delay="delay-200" initialY="translate-y-10" initialX="translate-x-0" initialRotate="rotate-0">
              <div className="prose prose-lg max-w-none mb-12">
                <p>
                  En Espacio Acción ofrecemos una amplia variedad de cursos impartidos por profesionales cualificados, diseñados para adaptarse a diferentes niveles y objetivos. Todos nuestros cursos combinan teoría y práctica, con un enfoque participativo que garantiza un aprendizaje efectivo.
                </p>
              </div>
            </AnimatedBlock>
            
            <div className="space-y-12">
              {courses.map((course, index) => {
                const imageProps = getImageAnimationProps(index);
                const textProps = getTextAnimationProps(index);
                const baseDelay = 300 + index * 200; // Increased delay for more distinct puzzle effect

                return (
                  <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md relative"> {/* Added relative for absolute positioning if needed later */}
                    <div className="md:flex">
                      {/* Animated Image Section */}
                      <div className="md:w-2/5">
                        <AnimatedBlock 
                          initialX={imageProps.x}
                          initialY={imageProps.y}
                          initialRotate={imageProps.rotate}
                          delay={`delay-${baseDelay}`} 
                          className="h-full"
                        >
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover rounded-lg"
                            // Fallback for image loading errors
                            onError={(e) => {
                              e.currentTarget.src = "https://placehold.co/1260x750/cccccc/333333?text=Image+Not+Found";
                              e.currentTarget.alt = `[Image of ${course.title}]`;
                            }}
                          />
                        </AnimatedBlock>
                      </div>
                      {/* Animated Text Content Section */}
                      <div className="p-6 md:w-3/5">
                        <AnimatedBlock 
                          initialX={textProps.x}
                          initialY={textProps.y}
                          initialRotate={textProps.rotate}
                          delay={`delay-${baseDelay + 100}`} // Text appears slightly after image
                        >
                          <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
                          
                          <div className="flex flex-wrap mb-4">
                            <div className="mr-6 mb-2">
                              <span className="font-semibold text-gray-700">Duración:</span> {course.duration}
                            </div>
                            <div>
                              <span className="font-semibold text-gray-700">Nivel:</span> {course.level}
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{course.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-700 mb-2">El curso incluye:</h4>
                            <ul className="list-disc pl-5 text-gray-600">
                              {course.includes.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                            {/* Specific content for "Qué necesito" */}
                            {(course.title === 'Bautismo de Escalada' || course.title === 'CURSO ESCALADA NIVEL 1' || course.title === 'CURSO ESCALADA NIVEL 2') && (
                              <div className="mt-2">
                                <h4 className="font-semibold text-gray-700 mb-1">¿Qué necesito?</h4>
                                <p className="text-gray-600">Ropa cómoda</p>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-[#50aed9]">{course.price}</div>
                            <a 
                              href="/contacto" 
                              className="bg-[#50aed9] hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
                            >
                              Inscribirse
                            </a>
                          </div>
                        </AnimatedBlock>
                      </div>
                    </div> {/* This closes the md:flex div */}
                  </div>
                );
              })}
            </div>
            
            <AnimatedBlock delay={`delay-${300 + courses.length * 200}`} initialY="translate-y-10" initialX="translate-x-0" initialRotate="rotate-0"> {/* Delay after all course blocks */}
              <div className="mt-16 bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Información Adicional</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Grupos reducidos</h4>
                    <p className="text-gray-600">
                      Todos nuestros cursos se imparten en grupos reducidos (máximo 6 personas por instructor) para garantizar una atención personalizada.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Cursos a medida</h4>
                    <p className="text-gray-600">
                      Si tienes necesidades específicas o prefieres un horario diferente, podemos diseñar un curso a medida para ti o tu grupo. Consúltanos sin compromiso.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Calendario</h4>
                    <p className="text-gray-600">
                      Consulta nuestro calendario de cursos para conocer las próximas fechas disponibles. También organizamos cursos adicionales bajo demanda.
                    </p>
                  </div> 
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Certificaciones</h4>
                    <p className="text-gray-600">
                      Algunos de nuestros cursos ofrecen certificaciones reconocidas por federaciones deportivas. Pregunta por esta opción si te interesa.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="/contacto" 
                    className="inline-block bg-[#50aed9] hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors duration-300"
                  >
                    Solicitar más información
                  </a>
                </div>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </section>
    </div>
  );
};
