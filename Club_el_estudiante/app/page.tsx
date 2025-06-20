import Image from 'next/image';
import { Calendar, Users, Coffee, MapPin, Clock, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import FacilityCard from '@/components/FacilityCard';
import Gallery from '@/components/Gallery';
import Schedule from '@/components/Schedule';
import Prices from '@/components/Prices';
import Footer from '@/components/Footer';

const socialLinks = {
  facebook: 'https://www.facebook.com/clubelestudiante', // Reemplaza con el enlace real
  twitter: 'https://x.com/EstudianteClub',       // Reemplaza con el enlace real
  youtube: 'https://www.youtube.com/@ElEstudianteClub', // Reemplaza con el enlace real
  instagram: 'https://www.instagram.com/estudianteclub/',   // Reemplaza con el enlace real
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://i.imgur.com/WzMw6m9.png" 
            alt="Club panorama" 
            fill 
            style={{objectFit: 'cover'}} 
            priority
            className="brightness-[0.6]"
          />
        </div>
        <div className="z-10 text-center px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">CONOCE NUESTRO CLUB</h1>
          <p className="text-xl text-white font-light italic">
            En el Club El Estudiante llevamos desde 1977 ofreciéndote las mejores experiencias deportivas. 
            Ponemos las mejores instalaciones a tu disposición, con 40 pistas de pádel, 12 pistas de tenis y 
            80 puestos de golf, en un entorno muy especial.
          </p>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">TOUR VIRTUAL</h2>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-5xl mx-auto">
            <iframe 
              src="https://tour.keepeyeonball.com/Tour/afbb30db-ea6b-4777-a419-bc6b0c0d5efe/Source?sc=186&y=946&p=11&tz=100&r=0;0&l=0;0&mz=0&d=0&m=0"
              className="w-full h-[600px] rounded-lg shadow-lg"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="instalaciones" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">NUESTRAS INSTALACIONES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FacilityCard 
              icon="padel" 
              title="40 PISTAS DE PÁDEL" 
              description="Pistas de última generación para todos los niveles" 
            />
            <FacilityCard 
              icon="tennis" 
              title="12 PISTAS DE TENIS" 
              description="Superficie de tierra batida y quick" 
            />
            <FacilityCard 
              icon="golf" 
              title="80 PUESTOS DE GOLF" 
              description="Zona de práctica con las mejores vistas" 
            />
            <FacilityCard 
              icon="gym" 
              title="INSTALACIONES DE CROSSFIT" 
              description="Zona dedicada para entrenamientos funcionales" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <FacilityCard 
              icon="landscape" 
              title="ZONAS VERDES" 
              description="Más de 100.000m² y más de un millar de pinos, un pulmón a solo 10 minutos de Madrid." 
            />
            <FacilityCard 
              icon="restaurant" 
              title="RESTAURANTES" 
              description="Una amplia selección gastronómica te espera en nuestros dos restaurantes con terraza." 
            />
            <FacilityCard 
              icon="shower" 
              title="VESTUARIOS MASC/FEM" 
              description="Ponemos las mejores instalaciones a tu disposición en un entorno muy especial." 
            />
            <FacilityCard 
              icon="parking" 
              title="PARKING PRIVADO" 
              description="Más de 500 plazas de aparcamiento divididas en dos complejos con vigilancia." 
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Gallery />
        </div>
      </section>

      {/* Schedule Section */}
      <section id="apertura" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">APERTURA Y FESTIVOS</h2>
            <p className="text-gray-600 mt-2">Horario de apertura y calendario de festivos</p>
          </div>
          
          <Schedule />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Quieres venir a jugar con nosotros?</h2>
          <p className="text-white text-xl mb-8">¡RESERVA YA UNA PISTA!</p>
          <a href="#" className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            RESERVA TU PISTA
          </a>
        </div>
      </section>

      {/* Prices Section */}
      <section id="precios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">PRECIOS</h2>
          <Prices />
        </div>
      </section>

      {/* Restaurants Section */}
      <section id="restaurantes" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">RESTAURANTES</h2>
            <p className="mt-2">Comida de calidad en un entorno inmejorable. ¡Disfrútalo!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="https://i.imgur.com/3FtYqHZ.jpeg" 
                  alt="Restaurante El Estudiante" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Restaurante El Estudiante</h3>
                <p className="text-gray-300 font-bold">916 546 707</p>
                <p className="mt-4">Nada mejor para reponer fuerzas después de tu partido de pádel o tenis.</p>
              </div>
            </div>
            
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="h-64 relative">
                <Image 
                  src="https://i.imgur.com/SMsfrwL.jpeg" 
                  alt="Restaurante Jose Luis El Estudiante Golf" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Rest. Jose Luis El Estudiante Golf</h3>
                <p className="text-gray-300 font-bold">917 049 256</p>
                <p className="mt-4">En un ambiente cuidado y refinado te ofrecemos una carta variada y de alta calidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">¡SÍGUENOS EN NUESTRAS REDES SOCIALES!</h2>
          <div className="flex justify-center space-x-6">
            <a href="" aria-label="Facebook" className="text-slate-700 hover:text-blue-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-700 hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-slate-700 hover:text-red-600 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-700 hover:text-pink-500 transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}