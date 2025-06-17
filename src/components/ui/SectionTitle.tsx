import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  withLine?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  withLine = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
      {withLine && (
        <div className={`h-1 w-20 bg-blue-600 rounded mb-4 ${centered ? 'mx-auto' : ''}`}></div>
      )}
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;