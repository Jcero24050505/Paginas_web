import Layout from '@/components/Layout';
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CSSProperties } from 'react';

// Define una interfaz para las propiedades del componente Image
interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  style?: CSSProperties;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

// Componente Image simulado para entornos que no son Next.js
const Image = ({ src, alt, width, height, style, className }: ImageProps) => {
  const imgStyle: CSSProperties = {
    ...style,
    display: 'block',
    objectFit: 'cover',
    width: typeof width === 'number' ? `${width}px` : width || '100%',
    height: typeof height === 'number' ? `${height}px` : height || 'auto',
  };

  return (
    <img
      src={src}
      alt={alt}
      style={imgStyle}
      className={className}
    />
  );
};

export default function DisciplinasPage() {
  const containerColor = '#0f1629'; // Color de fondo para los contenedores

  return (
    <div className="min-h-screen bg-gray-50 pt-20 font-montserrat text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden" style={{ backgroundColor: containerColor }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.imgur.com/S2aTmz3.jpeg"
            alt="Banner de disciplinas"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-[0.4]"
          />
        </div>
        <div className="z-10 text-center px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold  mb-4">NUESTRAS DISCIPLINAS</h1>
          <p className="text-xl md:text-2xl font-light italic">
            Descubre un mundo de actividades deportivas en nuestro club
          </p>
        </div>
      </section>

      {/* Padel Section */}
      <section id="padel" className="py-16" style={{ backgroundColor: containerColor }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold  mb-4">PÁDEL</h2>
                <p className="text-lg mb-6">
                  Disfruta del pádel en nuestras <span className="font-semibold">40 pistas de última generación</span>. Contamos con instalaciones de primera, tanto cubiertas como al aire libre.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    40 pistas de última generación
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Escuela de pádel para todas las edades
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Torneos y competiciones regulares
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Ranking
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg
                                      hover:bg-blue-800"
                  >
                    <a href="/reservas">Reservar Pista</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors text-lg
                                      hover:bg-green-800"
                  >
                    <a href="/precios">Consultar Precios</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors text-lg
                                      hover:bg-purple-800"
                  >
                    <a href="/escuela-padel">Escuela de Pádel</a>
                  </Button>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold  mb-2"></h3>

                </div>
              </div>
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.imgur.com/iYYrLON.jpeg"
                  alt="Pista de pádel"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tennis Section */}
      <section id="tenis" className="py-16 bg-gray-50" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.imgur.com/eS8Q4RN.jpeg"
                  alt="Pista de tenis"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
              <div className="order-1 md:order-2 text-black">
                <h2 className="text-3xl md:text-4xl font-extrabold  mb-4">TENIS</h2>
                <p className="text-lg mb-6">
                  Disponemos de <span className="font-semibold ">12 pistas de tenis</span> de la más alta calidad, con diferentes superficies. Instalaciones para todos los niveles.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    12 pistas de tenis profesionales
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Superficie de tierra batida y rápida
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Clases particulares y grupales
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Ranking
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg
                                      hover:bg-blue-800"
                  >
                    <a href="/reservas">Reservar Pista</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors text-lg"
                  >
                    <a href="/precios">Consultar Precios</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors text-lg"
                  >
                    <a href="/escuela-tenis">Tennisset Academy</a>
                  </Button>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold  mb-2">Tennisset Academy</h3>
                  <p className="text-lg">
                    La academia de tenis de referencia en nuestro club.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golf Section */}
      <section id="golf" className="py-16" style={{ backgroundColor: containerColor }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold  mb-4">GOLF</h2>
                <p className="text-lg mb-6">
                  Nuestra zona de práctica de golf cuenta con <span className="font-semibold">80 puestos</span> equipados con la última tecnología. Un espacio ideal para mejorar tu swing.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    80 puestos de práctica
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Profesores certificados
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Tecnología de análisis de swing
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg"
                  >
                    <a href="/reservas">Reservar Puesto</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors text-lg"
                  >
                    <a href="/precios">Consultar Precios</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors text-lg"
                  >
                    <a href="/escuela-golf">Kibel Golf</a>
                  </Button>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold  mb-2">Kibel Golf</h3>
                  <p className="text-lg">
                    La escuela de golf de referencia en nuestro club.
                  </p>
                </div>
              </div>
              <div className="relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.imgur.com/whM3CL0.jpeg"
                  alt="Campo de golf"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Box Section */}
      <section id="box" className="py-16 bg-gray-50" style={{ backgroundColor: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-[450px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://i.imgur.com/ebCqQNo.jpeg"
                  alt="Zona de entrenamiento"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
              <div className="order-1 md:order-2 text-black">
                <h2 className="text-3xl md:text-4xl font-extrabold  mb-4">BOX ARISTO</h2>
                <p className="text-lg mb-6">
                  Nuestro box de entrenamiento funcional está equipado con todo lo necesario. Entrenamientos personalizados y clases grupales.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Equipamiento de última generación
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Entrenadores especializados
                  </li>
                  <li className="flex items-center gap-3 text-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Clases grupales e individuales
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg"
                  >
                    <a href="/contacto">Más Información</a>
                  </Button>
                  <Button
                    asChild
                    className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition-colors text-lg"
                  >
                    <a href="/precios">Consultar Precios</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

DisciplinasPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
