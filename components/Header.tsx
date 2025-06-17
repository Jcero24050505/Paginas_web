'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-2 relative w-16 h-16">
            <Image 
              src="https://i.imgur.com/HAV0QnP.png" 
              alt="Club El Estudiante" 
              fill 
              style={{objectFit: 'contain'}}
              priority
            />
          </div>
          <h1 className="text-white text-xl font-bold">Club El Estudiante</h1>
        </div>

        <Navigation />
      </div>
    </header>
  );
}