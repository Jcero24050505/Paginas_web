interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  className = '' 
}) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-blue-600 mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;