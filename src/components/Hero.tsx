interface HeroProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  description?: string;
}

const Hero = ({ imageUrl, title, subtitle, description }: HeroProps) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[50vh] md:min-h-[60vh] px-4 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-xl md:text-2xl mb-4">
            {subtitle}
          </h2>
        )}
        {description && (
          <p className="text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;