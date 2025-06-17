import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'orange';
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  className = '',
  id,
  background = 'white',
  children,
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-100',
    orange: 'bg-orange-50',
  };

  return (
    <section id={id} className={`py-12 md:py-16 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-10 md:mb-16">
            {title && <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{title}</h2>}
            {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;