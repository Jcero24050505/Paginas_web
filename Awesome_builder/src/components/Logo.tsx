import React from 'react';
import { Mountain } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <a href="#" className="flex items-center space-x-2">
      <Mountain className="text-primary h-8 w-8" />
      <span className="text-white font-display font-bold text-xl">
        <span className="text-primary">AWESOME</span> BOULDER
      </span>
    </a>
  );
};

export default Logo;