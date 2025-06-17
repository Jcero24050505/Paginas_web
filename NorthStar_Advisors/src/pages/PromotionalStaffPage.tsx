import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ArrowRight,
  CheckCircle,
  Heart,
  Star,
  Award,
  Shield,
  Target,
  UserCheck,
  Eye,
  Clock,
  TrendingUp
} from 'lucide-react';

interface PromotionalStaffPageProps {
  setCurrentPage?: (page: string) => void;
}

const PromotionalStaffPage: React.FC<PromotionalStaffPageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: Heart,
      title: 'We are on your side',
      subtitle: 'Your trusted partners',
      description: 'In the face of complex and ever-changing regulations, it is more important than ever to have a team of experts on your side. Our team of highly experienced promotional advertising professionals, including coordinators, legal, medical, and regulatory reviewers, can cover all your review committee staffing needs. Bring on a complete team or any individual function based on your specific needs.'
    },
    {
      icon: Star,
      title: 'Your promotional advertising lifeline',
      description: 'We are characterized by our creativity, empathy, team spirit, and being the voice of reason. We bring our experience, knowledge, and expertise to every project.'
    },
    {
      icon: Award,
      title: 'We have been there',
      description: 'Throughout our decades of collective experience supporting promotional advertising review committees, we have helped launch countless products and product iterations across a wide range of disease states, and we have seen it all.'
    }
  ];

  const handleContactRedirect = () => {
    if (setCurrentPage) {
      setCurrentPage('contact');
      window.scrollTo(0, 0);
    }
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
                  Promotional Review 
                  <span className="bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                    {' '}Committee Staff
                  </span>
                </h1>
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-overlay-white-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100"
              >
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-xl w-fit mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  {feature.subtitle && (
                    <h4 className="text-xl font-semibold text-orange-600 mb-6">{feature.subtitle}</h4>
                  )}
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromotionalStaffPage;