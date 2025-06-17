import React, { useRef, useEffect, useState } from 'react';

// Hero Component
const Hero = ({ videoUrl, title, subtitle, description }) => {
  return (
    <div className="relative h-[50vh] flex items-center justify-center text-white rounded-lg overflow-hidden shadow-lg">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => { e.target.onerror = null; e.target.parentNode.style.backgroundImage = 'url(https://placehold.co/1200x600/000000/FFFFFF?text=Video+Fallback)'; e.target.remove(); }} // Fallback to image if video fails
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Superposición para mejorar la legibilidad del texto */}
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-2 leading-tight rounded-lg animate-fadeInDown">
          {title}
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-4 rounded-lg animate-fadeInUp delay-1s">
          {subtitle}
        </h2>
        <p className="text-md md:text-lg max-w-xl mx-auto rounded-lg animate-fadeIn delay-2s">
          {description}
        </p>
      </div>
    </div>
  );
};

// Componente para animar elementos al hacer scroll
const AnimatedOnScroll = ({ children, animationClass, delay = 0 }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // Si el elemento está visible
      if (entries[0].isIntersecting) {
        setVisible(true);
        // Desconectar el observador una vez que el elemento es visible para que la animación no se repita
        observer.unobserve(domRef.current);
      }
    }, {
      threshold: 0.1 // Porcentaje del elemento que debe estar visible para activar
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`${isVisible ? animationClass : 'opacity-0 transform translate-y-5'} transition-all duration-300 ease-out`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// ActivityCard Component
const ActivityCard = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/FF7F50/FFFFFF?text=Activity+Image'; }} // Fallback image
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-800 mb-2">
          {activity.title}
        </h3>
        <p className="text-zinc-600 text-sm mb-4 line-clamp-3">
          {activity.excerpt}
        </p>
        <Link to={activity.path} className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
          Más información
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

// NewsCard Component
const NewsCard = ({ news }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover rounded-t-lg"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x200/FF7F50/FFFFFF?text=News+Image'; }} // Fallback image
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-zinc-800 mb-2">
          {news.title}
        </h3>
        <p className="text-zinc-600 text-sm mb-4 line-clamp-3">
          {news.excerpt}
        </p>
        <p className="text-zinc-500 text-xs mb-4">
          Fecha: {new Date(news.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <Link to={`/noticias/${news.id}`} className="text-orange-500 hover:text-orange-600 font-medium flex items-center">
          Leer más
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

// Simple Link component to simulate react-router-dom Link
// In a real application, you would use 'react-router-dom' for routing.
const Link = ({ to, className, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    // In a real app, this would use react-router-dom's history.push(to)
    console.log(`Navigating to: ${to}`);
    // For demonstration, we'll just scroll to the top or simulate a page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Sample news data
const featuredNews = [
  {
    id: '93',
    title: '¡AHORA O NUNCA! Salamandra te necesita!!!',
    image: 'https://www.salamandra-bc.com/imagen-blog/93/IMG_20220418_124621.jpg',
    excerpt: 'Estamos en la recta final!!! Aun no te has enterado!! Salamandra Boulder Café, después de mas de 20 años abiertos al publico...',
    date: '2024-04-15'
  },
  {
    id: '91',
    title: 'Tarifas 2025!! Ofertas!!',
    image: 'https://www.salamandra-bc.com/imagen-blog/91/DSCF1603.jpg',
    excerpt: 'Nuevas tarifas y ofertas para el año 2025. Aprovecha nuestras promociones especiales...',
    date: '2024-04-01'
  },
  {
    id: '90',
    title: '¡Es un placer anunciar que Salamandra reabrirá sus puertas el lunes 2 de septiembre!',
    image: 'https://www.salamandra-bc.com/imagen-blog/90/DSCF1720.jpg',
    excerpt: 'Retomamos el horario habitual de lunes a viernes y volveremos al formato de clases previo...',
    date: '2024-03-28'
  }
];

// Sample activities data
const featuredActivities = [
  {
    id: '17',
    title: 'Clases de mañana / mediodía',
    image: 'https://www.salamandra-bc.com/imagen-blog/17/Clasesmañana780x422.jpg',
    excerpt: 'Tanto si eres iniciado en la escalada como si eres escalador avanzado, dispones de tiempo por las mañanas...',
    path: '/actividades-indoor/17'
  },
  {
    id: '1',
    title: 'Clases de tarde / noche',
    image: 'https://www.salamandra-bc.com/imagen-blog/1/clases_grupales_de_escalada.jpg',
    excerpt: 'Dirigidas para aquellos que se quieren iniciar en este deporte, o creen que aún les falta mucha técnica por pulir...',
    path: '/actividades-indoor/1'
  },
  {
    id: '8',
    title: 'Clases juvenil (+11 años)',
    image: 'https://www.salamandra-bc.com/imagen-blog/8/escaldainfantiljuvenil.jpg',
    excerpt: 'Los niños son una fuente inagotable de energía que necesita ser bien canalizada...',
    path: '/actividades-indoor/8'
  },
  {
    id: '16',
    title: 'Grupos de entrenamiento tarde',
    image: 'https://www.salamandra-bc.com/imagen-blog/16/Entrenamientos780x422.jpg',
    excerpt: 'Tras años viendo como cientos de practicantes se proponen tablas durísimas de entrenamiento...',
    path: '/actividades-indoor/16'
  }
];

const Home = () => {
  return (
    <div className="font-sans antialiased text-zinc-800">
      {/* Hero Section */}
      <Hero
        videoUrl="https://res.cloudinary.com/dyezalonb/video/upload/v1747842447/lyemh6ca3nezmihhaf3n.mp4"
        title="Salamandra Boulder Café"
        subtitle="Centro de escalada en Madrid"
        description="Desde el 2005 en el centro de Madrid"
      />

      {/* Featured Activities Section */}
      <AnimatedOnScroll animationClass="animate-fadeInUp" delay={0.1}>
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4 sm:mb-0">Actividades destacadas</h2>
              <Link to="/actividades-indoor" className="text-orange-500 hover:text-orange-600 font-medium">
                Ver todas
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* Latest News Section */}
      <AnimatedOnScroll animationClass="animate-fadeInUp" delay={0.2}>
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-800 mb-4 sm:mb-0">Últimas noticias</h2>
              <Link to="/noticias" className="text-orange-500 hover:text-orange-600 font-medium">
                Ver todas
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredNews.map((news) => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* CTA Section */}
      <AnimatedOnScroll animationClass="animate-fadeInUp" delay={0.3}>
        <section className="py-16 text-white rounded-lg mx-4 my-8 shadow-xl" style={{ backgroundColor: '#c2924a' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para empezar a escalar?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Descubre todo lo que Salamandra Boulder Café tiene para ofrecerte. Desde clases para principiantes hasta entrenamientos avanzados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mi-primer-dia" className="bg-white text-orange-500 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors shadow-md">
                Mi primer día
              </Link>
              <Link to="/tarifas" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-6 py-3 rounded-md font-medium transition-colors shadow-md">
                Ver tarifas
              </Link>
            </div>
          </div>
        </section>
      </AnimatedOnScroll>

      {/* App Install Banner */}
      <AnimatedOnScroll animationClass="animate-fadeInUp" delay={0.4}>
        <section className="py-8 bg-zinc-800 text-white rounded-lg mx-4 mb-8 shadow-xl">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg mb-2">
              Instala la aplicación de Salamandra Boulder Café en tu dispositivo para poder realizar todas las gestiones de manera cómoda.
            </p>
            <p className="text-sm text-zinc-300">
              Presiona en el botón compartir de Safari y selecciona: Añadir a la pantalla de inicio.
            </p>
          </div>
        </section>
      </AnimatedOnScroll>
    </div>
  );
};

// Main App component
export default function App() {
  return (
    <>
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }

          /* Keyframe animations for text */
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fadeInDown {
            animation: fadeInDown 1s ease-out forwards;
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.3s ease-out forwards; /* Velocidad ajustada a 0.3s */
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          /* Delay utilities */
          .delay-1s {
            animation-delay: 1s;
          }
          .delay-2s {
            animation-delay: 2s;
          }
        `}
      </style>
      <Home />
    </>
  );
}
