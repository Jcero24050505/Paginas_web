import React from 'react';

interface ImageSectionProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const ImageSection: React.FC<ImageSectionProps> = ({ 
  imageUrl, 
  alt, 
  title, 
  description, 
  reverse = false 
}) => {
  return (
    <div className="py-12 px-4">
      <div className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
        <div className="w-full md:w-1/2">
          <img 
            src={imageUrl} 
            alt={alt} 
            className="w-full h-auto rounded-lg shadow-md object-cover hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;