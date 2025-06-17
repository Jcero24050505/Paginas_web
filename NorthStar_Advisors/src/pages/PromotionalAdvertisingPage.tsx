import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  Users,
  Award,
  Star,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react';

interface PromotionalAdvertisingPageProps {
  setCurrentPage?: (page: string) => void;
}

const PromotionalAdvertisingPage: React.FC<PromotionalAdvertisingPageProps> = ({ setCurrentPage }) => {
  const thoughtLeadershipEvents = [
    {
      title: '4th PRC Performance Optimization Summit',
      role: 'Panelist',
      topic: 'When Simple is Hard: PRC Challenges for Patient-Centric Materials',
      date: 'June 2024 (scheduled)',
      location: 'Philadelphia, PA',
      status: 'upcoming'
    },
    {
      title: 'Fierce Promotional Review Committee West',
      role: 'Keynote Panel Moderator',
      topic: 'Optimizing MLR Operations Through Cross-Functional Open Dialogue',
      date: 'September 2022',
      location: 'San Diego, CA',
      status: 'completed'
    },
    {
      title: 'Fierce Promotional Review Committee East',
      role: 'Presenter',
      topic: 'Training New Marketers in Pharmaceutical Advertising',
      date: 'April 2022',
      location: 'New Brunswick, NJ',
      status: 'completed'
    },
    {
      title: 'Association of Corporate Counsel (ACC) 2019 Annual Meeting',
      role: 'Panelist',
      topic: 'Practical Application of Design Thinking in the Legal Department',
      date: 'October 2019',
      location: 'Phoenix, AZ',
      status: 'completed'
    },
    {
      title: 'Promotional Review Committee Compliance and Best Practices',
      role: 'Panelist',
      topic: 'PRC Best Practices',
      date: 'September 2019',
      location: 'Morristown, NJ',
      status: 'completed'
    },
    {
      title: 'Promotional Review Committee Compliance and Best Practices',
      role: 'Presenter',
      topic: 'Organized Chaos: A PRC Survival Guide',
      date: 'October 2017',
      location: 'Florham Park, NJ',
      status: 'completed'
    },
    {
      title: '4th Annual Promotional Review Summit',
      role: 'Panelist',
      topic: 'MLR/PRC Interactive Q&A Session',
      date: 'September 2023',
      location: 'Philadelphia, PA',
      status: 'completed'
    },
    {
      title: 'Promotional Review Committee Compliance and Best Practices',
      role: 'Keynote Presenter',
      topic: 'Characteristics of a Successful PRC Meeting',
      date: 'June 2014',
      location: 'San Diego, CA',
      status: 'completed'
    },
    {
      title: '8th Annual Porzio Life Sciences Compliance Forum, Seton Hall Law School',
      role: 'Panelist',
      topic: 'Promotional Review Panel, Challenges and Ideas for Implementing Efficiencies in the Promotional Review Process',
      date: 'October 2013',
      location: 'Newark, NJ',
      status: 'completed'
    }
  ];

  const handleContactRedirect = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
      window.scrollTo(0, 0);
    }
  };

  const getRoleIcon = (role: string) => {
    if (role.includes('Moderator')) return Users;
    if (role.includes('Presenter')) return Lightbulb;
    return Target;
  };

  const getTypeColor = (status: string) => {
    return status === 'upcoming' ? 'from-green-500 to-emerald-500' : 'from-blue-500 to-indigo-500';
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section - WITH DARK OVERLAY */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/67J8yqt.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-12">
            
            {/* Main Content - SIMPLIFIED */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-white"
            >
              {/* Main Headline Only */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  NorthStar 
                  <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                    {' '}Promotional Advertising
                  </span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Thought Leadership
                </h2>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-overlay-white-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Conference and Event Participation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experts have shared insights and led discussions 
              at leading pharmaceutical and biotechnology industry conferences.
            </p>
          </motion.div>

          <div className="space-y-8">
            {thoughtLeadershipEvents.map((event, index) => {
              const RoleIcon = getRoleIcon(event.role);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-r ${getTypeColor(event.status)} p-3 rounded-xl`}>
                          <RoleIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              event.status === 'upcoming' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {event.role}
                            </span>
                            {event.status === 'upcoming' && (
                              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                                Upcoming
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Presentation Topic:</h4>
                      <p className="text-lg text-gray-700 leading-relaxed">{event.topic}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-blue-600" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                          {event.location}
                        </div>
                      </div>
                      
                      {event.status === 'upcoming' && (
                        <motion.button
                          onClick={handleContactRedirect}
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          More Information
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionalAdvertisingPage;