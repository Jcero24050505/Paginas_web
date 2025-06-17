import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveIndex(null);
    document.body.style.overflow = '';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (activeIndex === null) return;
    
    if (direction === 'prev') {
      setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    } else {
      setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    }
  };

  // Capture keyboard events for navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (activeIndex === null) return;
    
    if (e.key === 'ArrowLeft') {
      navigateLightbox('prev');
    } else if (e.key === 'ArrowRight') {
      navigateLightbox('next');
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div 
            key={index}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => openLightbox(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover"
            />
            {image.caption && (
              <div className="p-3 bg-white">
                <p className="text-gray-700 text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {activeIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div 
            className="max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[activeIndex].src} 
              alt={images[activeIndex].alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
          
          <button 
            className="absolute right-4 text-white p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
          
          {images[activeIndex].caption && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white p-2 rounded">
              <p>{images[activeIndex].caption}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGallery;