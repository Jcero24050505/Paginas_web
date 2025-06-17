import React, { useEffect, useRef, useState } from 'react';

// Main App component that renders the EquipoHumanoPage
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased overflow-x-hidden">
      {/* Tailwind CSS is assumed to be available and linked in the environment */}
      <EquipoHumanoPage />
    </div>
  );
}

const teamMembers = [
  {
    name: 'Jose luis antón',
    position: 'Director Técnico', // This field will not be displayed in the compact view
    bio: 'Escalador desde hace más de 20 años y entrenador certificado. Ha participado en numerosas competiciones nacionales e internacionales.', // This field will not be displayed
    image: 'https://i.imgur.com/1UQZC1K.png'
  },
  {
    name: 'Pedro Mayor',
    position: 'Responsable de Cursos',
    bio: 'Especialista en escalada deportiva y técnicas de seguridad. Con más de 15 años de experiencia en formación.',
    image: 'https://i.imgur.com/bT0ll1s.png'
  },
  {
    name: 'David Ortega',
    position: 'Entrenador Principal',
    bio: 'Experto en preparación física y planificación de entrenamientos. Graduado en Ciencias del Deporte.',
    image: 'https://i.imgur.com/uue4fgN.png'
  },
  {
    name: 'Edu Carrasco',
    position: 'Coordinadora Escuela Juvenil',
    bio: 'Especializada en trabajo con niños y adolescentes. Tiene amplia experiencia en pedagogía y actividades de montaña.',
    image: 'https://i.imgur.com/b3H2A8W.png'
  },
  {
    name: 'Fernando Muniesa',
    position: 'Técnico de Equipamiento',
    bio: 'Responsable del diseño y mantenimiento de vías. Con formación específica en equipamiento de rutas.',
    image: 'https://i.imgur.com/sT62Ht8.png'
  },
  {
    name: 'Javi Sánchez',
    position: 'Instructora',
    bio: 'Especialista en escalada clásica y alpinismo. Ha realizado ascensiones en los principales macizos europeos.',
    image: 'https://i.imgur.com/6pQD5ek.png'
  },
  {
    name: 'Jorge Puigmal',
    position: 'Entrenadora de Bloque',
    bio: 'Apasionada del boulder, con un enfoque en la técnica y la resolución de problemas. Campeona regional de bloque.',
    image: 'https://i.imgur.com/0MeKrok.png'
  },
  {
    name: 'Mane Burrueco',
    position: 'Instructor de Iniciación',
    bio: 'Dedicado a introducir a los nuevos escaladores en el deporte, con énfasis en la seguridad y la diversión.',
    image: 'https://i.imgur.com/9SmVifm.png'
  },
  {
    name: 'Maribel Vara',
    position: 'Fisioterapeuta Deportiva',
    bio: 'Especializada en la prevención y recuperación de lesiones en escaladores. Ofrece asesoramiento personalizado.',
    image: 'https://i.imgur.com/sWGSB9U.png'
  },
  {
    name: 'Máximo Murcia',
    position: 'Guía de Montaña',
    bio: 'Con experiencia en expediciones de alta montaña y escalada en roca. Certificado como guía UIAGM.',
    image: 'https://i.imgur.com/ULRWZ6u.png'
  },
  {
    name: 'Pablo Zamora',
    position: 'Nutricionista Deportiva',
    bio: 'Asesora sobre dietas y suplementación para optimizar el rendimiento y la recuperación en escaladores.',
    image: 'https://i.imgur.com/3Gmkueo.png'
  },
  {
    name: 'Paco Murcia',
    position: 'Especialista en Psicología Deportiva',
    bio: 'Ayuda a los escaladores a desarrollar la fortaleza mental, la concentración y a superar el miedo.',
    image: 'https://i.imgur.com/gqDGaqc.png'
  },
  {
    name: 'Susana Sanchez',
    position: 'Instructora de Yoga para Escaladores',
    bio: 'Enfocada en mejorar la flexibilidad, el equilibrio y la conciencia corporal para el rendimiento en escalada.',
    image: 'https://i.imgur.com/6hZSpaR.png'
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

// Component to wrap elements for dynamic scroll animation
const AnimatedCard: React.FC<{ 
  children: React.ReactNode; 
  delay?: string; 
  initialX: string; 
  initialY: string; 
  initialRotate: string; 
  className?: string 
}> = ({ children, delay = 'delay-0', initialX, initialY, initialRotate, className }) => {
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

// Component for distinct text entry animations (simpler fade/slide)
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


const EquipoHumanoPage: React.FC = () => {
  // Define initial positions and rotations for each card to create a "disordered" entry
  const getInitialAnimationProps = (index: number) => {
    const directions = [
      { x: '-translate-x-20', y: '-translate-y-20', rotate: '-rotate-6' }, // Top-left
      { x: 'translate-x-20', y: '-translate-y-20', rotate: 'rotate-3' },  // Top-right
      { x: '-translate-x-20', y: 'translate-y-20', rotate: 'rotate-9' },  // Bottom-left
      { x: 'translate-x-20', y: 'translate-y-20', rotate: '-rotate-3' },  // Bottom-right
      { x: '-translate-x-40', y: 'translate-y-0', rotate: 'rotate-6' },   // Far-left
      { x: 'translate-x-40', y: 'translate-y-0', rotate: '-rotate-9' },   // Far-right
      { x: 'translate-x-0', y: '-translate-y-40', rotate: 'rotate-12' },  // Far-top
      { x: 'translate-x-0', y: 'translate-y-40', rotate: '-rotate-12' },  // Far-bottom
      { x: '-translate-x-10', y: '-translate-y-10', rotate: 'rotate-4' },
      { x: 'translate-x-10', y: '-translate-y-10', rotate: '-rotate-2' },
      { x: '-translate-x-10', y: 'translate-y-10', rotate: 'rotate-7' },
      { x: 'translate-x-10', y: 'translate-y-10', rotate: '-rotate-5' },
      { x: 'translate-x-0', y: 'translate-y-20', rotate: 'rotate-15' },
    ];
    return directions[index % directions.length]; // Cycle through directions
  };

  return (
    <div className="pt-16">
      {/* Hero Section: Displays a large background image and a title/subtitle for the team page */}
      <section className="relative h-80 bg-gray-800 overflow-hidden">
        <img 
          src="https://i.imgur.com/3Cd7INB.png" 
          alt="[Image of Equipo Humano]" 
          className="w-full h-full object-cover opacity-70"
          // Fallback for image loading errors
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/1260x750/cccccc/333333?text=Image+Not+Found";
            e.currentTarget.alt = "[Image of Equipo Humano]";
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EQUIPO HUMANO</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Conoce a los profesionales que forman Espacio Acción
            </p>
          </div>
        </div>
      </section>

      {/* Content Section: Introduces the team and lists individual members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedText delay="delay-100">
              <h2 className="text-3xl font-bold mb-8 text-center">Nuestro Equipo</h2>
            </AnimatedText>
            
            {/* Introduction text about the team */}
            <AnimatedText delay="delay-200">
              <div className="prose prose-lg max-w-none mb-12">
                <p>
                  En Espacio Acción contamos con un equipo de profesionales cualificados y apasionados por la escalada. Todos nuestros instructores y entrenadores poseen titulaciones oficiales y amplia experiencia, tanto en el ámbito deportivo como en el formativo.
                </p>
                
                <p>
                  Nos caracterizamos por nuestro trato cercano y personalizado, adaptándonos a las necesidades de cada usuario para ayudarle a conseguir sus objetivos.
                </p>
              </div>
            </AnimatedText>
            
            {/* Grid of team members */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"> {/* Adjusted grid for more columns and centered items */}
              {teamMembers.map((member, index) => {
                const { x, y, rotate } = getInitialAnimationProps(index);
                return (
                  <AnimatedCard 
                    key={index} 
                    delay={`delay-${300 + index * 50}`} // Staggered delay
                    initialX={x}
                    initialY={y}
                    initialRotate={rotate}
                  >
                    <div className="flex flex-col items-center text-center bg-gray-50 rounded-lg shadow-md p-4"> {/* Centered content */}
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-300"> {/* Circular image container */}
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                          // Fallback for image loading errors
                          onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/128x128/cccccc/333333?text=N/A";
                            e.currentTarget.alt = `[Image of ${member.name}]`;
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3> {/* Only name displayed */}
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
            
            {/* Continuous Training Section */}
            <AnimatedText delay={`delay-${300 + teamMembers.length * 50}`}> {/* Delay after all team members */}
              <div className="mt-16 bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4">Formación Continua</h3>
                <p className="mb-4">
                  Todos los miembros de nuestro equipo participan regularmente en cursos de actualización y especialización para garantizar que contamos con los conocimientos más actuales en técnicas de escalada, seguridad y metodologías de enseñanza.
                </p>
                <p>
                  Además, fomentamos la formación interna a través de sesiones periódicas de intercambio de conocimientos y experiencias entre los distintos especialistas que forman parte de Espacio Acción.
                </p>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>
    </div>
  );
};
