import React from 'react';
import { SOCIAL_LINKS } from '../utils/constants';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map((link) => (
        <a 
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-110 duration-300"
          aria-label={`Síguenos en ${link.name}`}
        >
          <img src={link.icon} alt={link.name} className="h-8 w-8" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;