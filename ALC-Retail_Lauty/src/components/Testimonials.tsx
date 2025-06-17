import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Compré mi Hyundai Tucson seminuevo y ha sido una experiencia excepcional. El coche está como nuevo y el precio fue muy competitivo. Recomiendo completamente este concesionario.",
    author: "Luis López"
  },
  {
    id: 2,
    quote: "El servicio fue impecable. Me explicaron todas las opciones disponibles y encontré un kilómetro 0 que se adaptaba perfectamente a mi presupuesto. ¡Muy satisfecha con mi compra!",
    author: "María García"
  },
  {
    id: 3,
    quote: "Después de buscar en varios concesionarios, aquí encontré el mejor precio para un coche de ocasión. El proceso fue rápido y sin complicaciones. Volveré para futuras compras.",
    author: "Carlos Rodríguez"
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideTimerRef = useRef<number | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    slideTimerRef.current = window.setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (slideTimerRef.current) {
        clearInterval(slideTimerRef.current);
      }
    };
  }, [currentSlide, isAnimating]);

  return (
    <section className="py-16 px-4 bg-blue-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">¿Qué dicen nuestros clientes?</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto text-center">
                    <Quote className="mx-auto mb-6 text-blue-300" size={48} />
                    <p className="text-xl md:text-2xl mb-8 italic">"{testimonial.quote}"</p>
                    <p className="text-lg font-medium">- {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;