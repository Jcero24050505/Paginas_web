import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselImage } from '../../types';

interface ImageCarouselProps {
  images: CarouselImage[];
  autoplaySpeed?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  height?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoplaySpeed = 5000,
  showIndicators = true,
  showArrows = true,
  height = 'h-[500px]',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (autoplaySpeed > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [autoplaySpeed, images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`relative overflow-hidden w-full ${height}`}>
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={image.id} className="w-full flex-shrink-0 h-full">
            <div 
              className="w-full h-full bg-cover bg-center flex items-end"
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                {image.title && (
                  <h2 className="text-white text-3xl font-bold mb-2">{image.title}</h2>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            onClick={goToPrevSlide}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            onClick={goToNextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;