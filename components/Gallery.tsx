'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  {
    src: "https://i.imgur.com/eS8Q4RN.jpeg",
    alt: "Pista de tenis"
  },
  {
    src: "https://i.imgur.com/whM3CL0.jpeg",
    alt: "Campo de Golf"
  },
  {
    src: "https://i.imgur.com/S2aTmz3.jpeg",
    alt: "Instalaciones de Padel"
  },
  {
    src: "https://i.imgur.com/iYYrLON.jpeg",
    alt: "Pista de padel"
  },
  {
    src: "https://i.imgur.com/m0W82yZ.jpeg",
    alt: "Zona infantil"
  },
  {
    src: "https://i.imgur.com/NNwQIGH.png",
    alt: "Restaurante"
  },
  {
    src: "https://i.imgur.com/2aFspZi.jpeg",
    alt: "Pista de Tenis"
  },
  {
    src: "https://i.imgur.com/zRfqkUB.jpeg",
    alt: "Gimnasio"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">GALERÍA</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="aspect-square relative overflow-hidden rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image 
              src={image.src} 
              alt={image.alt} 
              fill 
              style={{objectFit: 'cover'}}
              className="transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Modal for viewing images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl max-h-[90vh] w-full h-full relative">
            <Image 
              src={selectedImage} 
              alt="Enlarged view" 
              fill 
              style={{objectFit: 'contain'}}
            />
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}