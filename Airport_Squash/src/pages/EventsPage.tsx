import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import EventCard from '../components/events/EventCard';

const EventsPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState<null | {
    src: string;
    title: string;
    description: string;
    schedule: string;
  }>(null);

  const eventImages = [
    {
      src: "https://i.imgur.com/dw0hVG6.png",
      title: t('events.eventsList.social.title'),
      description: t('events.eventsList.social.description'),
      schedule: t('events.eventsList.social.schedule')
    },
    {
      src: "https://www.airportsquash.de/wp-content/uploads/Squash-Social-Airport-Abend-724x1024.png",
      title: t('events.eventsList.youth.title'),
      description: t('events.eventsList.youth.description'),
      schedule: t('events.eventsList.youth.schedule')
    },
    {
      src: "https://www.airportsquash.de/wp-content/uploads/we.are_.hiring-768x960.png",
      title: t('events.eventsList.inclusive.title'),
      description: t('events.eventsList.inclusive.description'),
      schedule: t('events.eventsList.inclusive.schedule')
    },
    {
      src: "https://i.imgur.com/7AK5s58.png",
      title: t('events.eventsList.friday.title'),
      description: t('events.eventsList.friday.description'),
      schedule: t('events.eventsList.friday.schedule')
    }
  ];

  return (
    <>
      <PageHeader 
        title={t('events.title')}
        description={t('events.description')}
        imageSrc="https://i.imgur.com/z5AAAHp.jpeg"
      />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('events.joinCommunity')}</h2>
            <p className="text-lg text-gray-600">{t('events.communityDescription')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventImages.map((event, index) => (
              <EventCard
                key={index}
                image={event.src}
                title={event.title}
                description={event.description}
                date={event.schedule}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>

          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedEvent(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors duration-200"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative">
                      <img
                        src={selectedEvent.src}
                        alt={selectedEvent.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-4">{selectedEvent.title}</h3>
                        
                        <div className="flex items-center text-gray-600 mb-6 space-x-6">
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>{selectedEvent.schedule}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2" />
                            <span>14:15 - 16:30</span>
                          </div>
                        </div>

                        <div className="prose prose-lg">
                          <p className="text-gray-600">{selectedEvent.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{t('events.getInvolved.title')}</h3>
            <p className="text-gray-600 mb-8">{t('events.getInvolved.description')}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                {t('events.getInvolved.contactButton')}
              </Link>
              <Link
                to="/booking"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200"
              >
                {t('events.getInvolved.bookButton')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default EventsPage;