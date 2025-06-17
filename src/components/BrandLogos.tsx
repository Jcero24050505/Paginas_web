import React, { useEffect, useRef } from 'react';

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { id: 1, name: 'Volkswagen', logo: 'https://images.pexels.com/photos/18118835/pexels-photo-18118835/free-photo-of-volkswagen-volkswagon-vw-badge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: 'Hyundai', logo: 'https://images.pexels.com/photos/18151726/pexels-photo-18151726/free-photo-of-hyundai-logo-on-a-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, name: 'Peugeot', logo: 'https://images.pexels.com/photos/9121761/pexels-photo-9121761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 4, name: 'Citroen', logo: 'https://images.pexels.com/photos/19136404/pexels-photo-19136404/free-photo-of-car-retro-old-historic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 5, name: 'Opel', logo: 'https://images.pexels.com/photos/5394238/pexels-photo-5394238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 6, name: 'Jeep', logo: 'https://images.pexels.com/photos/6037425/pexels-photo-6037425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const BrandLogos: React.FC = () => {
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const logoContainer = logoContainerRef.current;
    if (!logoContainer) return;
    
    let position = 0;
    const speed = 0.5;
    
    const animate = () => {
      position -= speed;
      
      // Reset position when all logos have scrolled
      if (position <= -logoContainer.scrollWidth / 2) {
        position = 0;
      }
      
      if (logoContainer) {
        logoContainer.style.transform = `translateX(${position}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="overflow-hidden relative">
          {/* Gradient masks for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent"></div>
          
          <div className="py-4 flex whitespace-nowrap" ref={logoContainerRef}>
            {/* Double the logos for seamless looping */}
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={`${brand.id}-${index}`} 
                className="inline-block mx-8 w-24 h-24"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;