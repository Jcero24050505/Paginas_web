import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Maximize } from 'lucide-react';

const Gallery: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Climber scaling a challenging boulder problem',
      span: 'md:col-span-2 md:row-span-2',
    },
    {
      src: 'https://images.pexels.com/photos/7499538/pexels-photo-7499538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Closeup of chalk-covered hands gripping a hold',
    },
    {
      src: 'https://images.pexels.com/photos/7499534/pexels-photo-7499534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Climber resting between routes',
    },
    {
      src: 'https://images.pexels.com/photos/6243644/pexels-photo-6243644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Wide view of our bouldering gym facility',
      span: 'md:col-span-2',
    },
    {
      src: 'https://images.pexels.com/photos/6311637/pexels-photo-6311637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Climber working on technique',
    },
    {
      src: 'https://images.pexels.com/photos/7499591/pexels-photo-7499591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'Friends enjoying climbing together',
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Our Facility</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Take a visual tour of our state-of-the-art climbing gym. With over 12,000 square feet
            of climbing surface and problems for all skill levels, there's always a new challenge waiting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-lg ${image.span || ''}`}
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-primary text-white p-2 rounded-full">
                  <Maximize className="h-6 w-6" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="mb-6 text-lg">
            Want to see more? Follow us on Instagram <span className="text-primary">@awesomeboulder</span> for
            daily updates, climber spotlights, and new route announcements.
          </p>
          <a href="#classes" className="btn-primary">
            Check Out Our Classes
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;