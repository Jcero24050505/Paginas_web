import React from 'react';

interface CardProps {
  title?: string;
  image?: string;
  imageAlt?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  imageAlt = '',
  children,
  className = '',
  contentClassName = '',
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border border-primary-100 ${className}`}>
      {image && (
        <div className="overflow-hidden">
          <img 
            src={image} 
            alt={imageAlt} 
            className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      <div className={`p-5 ${contentClassName}`}>
        {title && <h3 className="text-xl font-bold text-primary-800 mb-3">{title}</h3>}
        {children}
      </div>
    </div>
  );
};

export default Card;