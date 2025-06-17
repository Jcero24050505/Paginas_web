import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const images = [
  "https://www.climbingpass.org/wp-content/uploads/2021/10/hau6o5lvf8kqni3b1swe9dxmzcgtrp4j-1024x683.jpg",
  "https://i.imgur.com/FUVD8jP.png",
  "https://i.imgur.com/53B1D3t.png",
  "https://i.imgur.com/EMtf5a3.png",
  "https://i.imgur.com/JbTnGz6.png",
  "https://www.climbingpass.org/wp-content/uploads/2021/10/qsk7go0jyezlvu94waxh2r31mfb65npc-scaled.jpg",
  "https://i.imgur.com/budBIdi.png",
];

const AnimatedImage: React.FC<{ src: string }> = ({ src }) => {
  return (
    <motion.div
      className="mx-4"
      whileHover={{ scale: 1.05, rotate: 2 }}
      animate={{
        y: [0, -5, 0],
        opacity: [0.9, 1, 0.9]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      <img 
        src={src} 
        alt="Climbing activity" 
        className="h-40 w-60 object-cover rounded-lg shadow-lg"
      />
    </motion.div>
  );
};

const AnimatedImageMarquee: React.FC = () => {
  return (
    <div className="py-8 bg-gray-50">
      <Marquee
        gradient={true}
        gradientColor={[249, 250, 251]}
        speed={40}
      >
        {images.map((image, index) => (
          <AnimatedImage key={index} src={image} />
        ))}
      </Marquee>
    </div>
  );
};

export default AnimatedImageMarquee;