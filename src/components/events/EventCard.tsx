import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface EventCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  onClick: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ image, title, description, date, onClick }) => {
  return (
    <motion.div
      className="group bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{title}</h3>
            <div className="flex items-center text-sm text-white/80 mb-2">
              <Clock className="w-4 h-4 mr-1" />
              <span>{date}</span>
            </div>
            <p className="text-sm text-white/70 line-clamp-3">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;