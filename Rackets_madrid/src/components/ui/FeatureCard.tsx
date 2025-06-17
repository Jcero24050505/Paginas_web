import { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  imageSrc?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  imageSrc 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="text-blue-600 mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;