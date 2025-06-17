import React from 'react';

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImage, children }) => {
  return (
    <div 
      className="relative pt-28 pb-16 md:pt-32 md:pb-24 px-4 mb-12"
      style={{
        backgroundImage: backgroundImage ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` : '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto">
        <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${backgroundImage ? 'text-white' : 'text-gray-800'} mb-4`}>
          {title}
        </h1>
        {children && 
          <div className={`mt-4 ${backgroundImage ? 'text-white' : 'text-gray-600'}`}>
            {children}
          </div>
        }
      </div>
    </div>
  );
};

export default PageHeader;