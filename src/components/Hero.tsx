import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  isHomepage?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  imageUrl, 
  isHomepage = false 
}) => {
  return (
    <div className={`relative ${isHomepage ? 'h-[80vh]' : 'h-[40vh]'} overflow-hidden`}>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white max-w-3xl animate-fadeIn animation-delay-300">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;