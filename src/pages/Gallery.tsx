import { useState } from 'react';
import { Search } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
  {
    src: "https://i.imgur.com/b5jmw3P.jpeg",
    alt: "Gimnasio Rackets Madrid",
    title: "Gimnasio"
  },
  {
    src: "https://i.imgur.com/T68pMnd.jpeg",
    alt: "Bar Rackets Madrid",
    title: "Bar"
  },
  {
    src: "https://i.imgur.com/b9GlOEO.jpeg",
    alt: "Parking Rackets Madrid",
    title: "Parking"
  },
  {
    src: "https://i.imgur.com/YBm6jCb.jpeg",
    alt: "Terraza Rackets Madrid",
    title: "Terraza"
  },
  {
    src: "https://i.imgur.com/VLOv8Uk.png",
    alt: "Pista de Squash",
    title: "Squash"
  },
  {
    src: "https://i.imgur.com/SCZdZXg.jpeg",
    alt: "Instalaciones del club",
    title: "Instalaciones"
  },
  {
    src: "https://i.imgur.com/lVXGEFA.jpeg",
    alt: "Pistas de Pádel",
    title: "Pádel"
  },
  {
    src: "https://i.imgur.com/jzS7ad3.jpeg",
    alt: "Club Rackets Madrid",
    title: "Club"
  }
];

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Galería</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras instalaciones
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, idx) => (
            <div
              key={image.src}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => setIndex(idx)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={galleryImages}
        />
      </div>
    </div>
  );
};

export default Gallery;