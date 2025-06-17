import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'photoswipe/dist/photoswipe.css';

const images = [
  {
    src: "https://i.ibb.co/ycrGWmg1/foto-40.jpg",
    width: 1200,
    height: 800,
    alt: "Squash Court 1"
  },
  {
    src: "https://i.ibb.co/SXdSVjD7/foto-36.jpg",
    width: 1200,
    height: 800,
    alt: "Squash Court 2"
  },
  {
    src: "https://i.ibb.co/5CprmFk/foto-16.jpg",
    width: 1200,
    height: 800,
    alt: "Fitness Area"
  },
  {
    src: "https://i.ibb.co/FqYwdDHy/foto-5.jpg",
    width: 1200,
    height: 800,
    alt: "Training Session"
  },
  {
    src: "https://i.ibb.co/DJnycFq/foto-9.jpg",
    width: 1200,
    height: 800,
    alt: "Court Overview"
  },
  {
    src: "https://i.ibb.co/7JWBSst8/foto-14.jpg",
    width: 1200,
    height: 800,
    alt: "Training Equipment"
  },
  {
    src: "https://i.ibb.co/Vc954bhn/foto-30.jpg",
    width: 1200,
    height: 800,
    alt: "Facility Interior"
  },
  {
    src: "https://i.ibb.co/fV7WbBHF/foto-32.jpg",
    width: 1200,
    height: 800,
    alt: "Squash Tournament"
  },
  {
    src: "https://i.ibb.co/4Z8m3sm7/foto-27.jpg",
    width: 1200,
    height: 800,
    alt: "Professional Match"
  }
];

const ImageCarousel: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Gallery>
      <div className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
          thumbs={{ swiper: thumbsSwiper }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Item
                original={image.src}
                thumbnail={image.src}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <img
                    ref={ref as React.RefObject<HTMLImageElement>}
                    onClick={open}
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[500px] object-cover cursor-pointer"
                  />
                )}
              </Item>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight className="w-6 h-6" />
        </button>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mt-4"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-20 object-cover rounded cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Gallery>
  );
};

export default ImageCarousel;