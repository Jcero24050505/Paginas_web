import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';

const HomePage = () => {
  const sliderImages = [
    {
      src: "https://i.imgur.com/2XLRD6b.jpeg",
      title: "Bautismo de Escalada",
      description: "Iníciate en la escalada con nuestros bautismos en roca o rocódromo",
      link: "/bautismo-escalada-madrid"
    },
    {
      src: "https://www.uadibloc.com/img/slider/clases-escalada-madrid.jpg",
      title: "Clases de Escalada",
      description: "Aprende y mejora con nuestros profesionales",
      link: "/clases-escalada-madrid"
    },
    {
      src: "https://www.uadibloc.com/img/slider/instalaciones.jpg",
      title: "Instalaciones",
      description: "Conoce nuestro moderno rocódromo en Madrid centro",
      link: "/fotos-instalaciones-rocodromo"
    },
    {
      src: "https://www.uadibloc.com/img/slider/tarifas.jpg",
      title: "Tarifas",
      description: "Descubre nuestros precios y bonos",
      link: "/precios-rocodromo-madrid"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0">
          <div 
            className="absolute inset-0 z-[-1]"
            style={{
              backgroundImage: `url(${sliderImages[0].src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="container mx-auto px-4 pt-24 z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Uadibloc es tu nuevo rocódromo en Madrid Centro
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              #Escalada para Tod_s
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/fotos-instalaciones-rocodromo" size="lg">
                Ver Instalaciones
              </Button>
              <Button to="/precios-rocodromo-madrid" variant="outline" size="lg" className="bg-black/30 text-white hover:bg-black/50 border-white">
                Ver Precios
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <Section background="white">
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            400m² de pura diversión para escalar y compartir tiempo de ocio con familia y amig_s.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-bold mb-3">Instalaciones Modernas</h3>
            <p className="text-gray-600 mb-4">
              Una instalación moderna que cuenta con dos salas de bloque, muro de vías con autoaseguradores, kilter board, gimnasio, zona de escalada infantil, aula polivalente y una terraza.
            </p>
            <Link to="/fotos-instalaciones-rocodromo" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
              Descubre más <ArrowRight size={16} className="ml-1" />
            </Link>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-3">Re-equipamiento Constante</h3>
            <p className="text-gray-600 mb-4">
              Somos el primer rocódromo urbano con instalaciones modernas y re-equipamiento constante para que puedas disfrutar de nuevos bloques y vías todas las semanas.
            </p>
            <Link to="/clases-escalada-madrid" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
              Clases de escalada <ArrowRight size={16} className="ml-1" />
            </Link>
          </Card>
          
          <Card>
            <h3 className="text-xl font-bold mb-3">Actividades Complementarias</h3>
            <p className="text-gray-600 mb-4">
              Además ofrecemos actividades complementarias como yoga y acondicionamiento físico para mejorar tu rendimiento en la escalada.
            </p>
            <Link to="/clases-yoga-madrid" className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium">
              Clases de yoga <ArrowRight size={16} className="ml-1" />
            </Link>
          </Card>
        </div>
      </Section>
      
      {/* Services Preview */}
      <Section background="gray" title="Nuestros Servicios">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sliderImages.map((item, index) => (
            <Link to={item.link} key={index} className="group">
              <div className="relative h-80 overflow-hidden rounded-lg shadow-md">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-20">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                  <div className="mt-3 inline-flex items-center font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Saber más <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section 
        className="bg-[#2494e3] text-white"
        background="white"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para la aventura?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white/90">
            Uadibloc es el primer rocódromo de Madrid donde todos los detalles están cuidados al máximo 
            y que hará tu experiencia en nuestras instalaciones inolvidable.
          </p>
          <Button 
            to="/donde-estamos" 
            variant="secondary" 
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100"
          >
            Visítanos
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;