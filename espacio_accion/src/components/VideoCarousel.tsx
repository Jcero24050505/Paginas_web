import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselSlide {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const carouselData: CarouselSlide[] = [
  {
    title: 'BIENVENIDOS A ESPACIO ACCIÓN',
    subtitle: 'Un lugar para disfrutar de la escalada y otras actividades deportivas',
    buttonText: 'Descubre el centro',
    buttonLink: '/el-centro'
  },
  {
    title: 'ACTIVIDADES PARA TODAS LAS EDADES',
    subtitle: 'Desde principiantes hasta escaladores experimentados',
    buttonText: 'Ver actividades',
    buttonLink: '/actividades'
  },
  {
    title: 'CURSOS ESPECIALIZADOS',
    subtitle: 'Aprende con nuestros expertos y mejora tu técnica',
    buttonText: 'Inscríbete ahora',
    buttonLink: '/actividades/cursos'
  }
];

const VideoCarousel: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigationPrevRef = useRef<HTMLDivElement>(null);
  const navigationNextRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const swiperRef = useRef<any>(null); // Ref para la instancia de Swiper

  useEffect(() => {
    if (videoRef.current) {
      const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
      };
      videoRef.current.addEventListener('loadeddata', handleVideoLoaded);

      return () => {
        videoRef.current?.removeEventListener('loadeddata', handleVideoLoaded);
      };
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.navigation && navigationPrevRef.current && navigationNextRef.current) {
      swiperRef.current.navigation.prevEl = navigationPrevRef.current;
      swiperRef.current.navigation.nextEl = navigationNextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [isVideoLoaded]); 

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          // **Asegúrate de que la línea `poster="..."` no esté aquí.**
          // Si la tenías, quítala para que no haya una imagen gris de previsualización.
        >
          <source src="https://res.cloudinary.com/dyezalonb/video/upload/v1747817474/satqohtz7qn7vxywvyw8.mp4" type="video/mp4" />
        </video>
        {/* Overlay con mejor visibilidad para el texto del carrusel */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Carousel */}
      <div className={`relative z-10 h-full ${isVideoLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            prevEl: navigationPrevRef.current, 
            nextEl: navigationNextRef.current,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full"
        >
          {carouselData.map((slide, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 text-center text-white"
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold mb-4"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {slide.subtitle}
                </motion.p>
                {slide.buttonText && slide.buttonLink && (
                  <motion.a 
                    href={slide.buttonLink} 
                    className="inline-block bg-[#50aed9] hover:bg-[#50aed9]-800 text-white py-3 px-8 rounded-md text-lg font-semibold transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.buttonText}
                  </motion.a>
                )}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <motion.div 
          ref={navigationPrevRef} 
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 cursor-pointer transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft size={24} className="text-white" />
        </motion.div>
        <motion.div 
          ref={navigationNextRef} 
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 cursor-pointer transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight size={24} className="text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default VideoCarousel;