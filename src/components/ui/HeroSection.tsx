interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  overlay?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  imageSrc,
  overlay = true 
}) => {
  return (
    <div className="relative bg-cover bg-center h-[60vh] flex items-center justify-center" 
      style={{ backgroundImage: `url(${imageSrc})` }}>
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      )}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroSection;