
import React from 'react';

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1522163182402-834f871fd851',
    alt: 'Climbing wall'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1516592673884-4a382d1124c7',
    alt: 'Bouldering'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e',
    alt: 'Indoor climbing'
  }
];

const ImageCarousel = () => {
  return (
    <section className="py-16 bg-rocktown-dark-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Nuestras Instalaciones</h2>
        
        <div className="image-carousel">
          {images.map((image) => (
            <div key={image.id} className="carousel-item px-2">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-72 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {images.map((image) => (
            <button 
              key={image.id}
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
              aria-label={`View image ${image.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
