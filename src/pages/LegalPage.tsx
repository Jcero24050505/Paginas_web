import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  Users,
  Award,
  Handshake,
  Building,
  Clock
} from 'lucide-react';

interface LegalPageProps {
  setCurrentPage?: (page: string) => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: Handshake,
      title: 'Your trusted advisor',
      description: 'Empower your business and drive success with a highly experienced, cost-effective, in-house general counsel providing comprehensive legal support for your daily operational needs. We handle your general agreements, day-to-day legal, and corporate governance, while managing value-based relationships with outside counsel, serving as a single point of contact to optimize legal support on high-leverage matters.'
    },
    {
      icon: Zap,
      title: 'Legal made easy',
      description: 'In the fast-paced world of early-stage pharma and biotech, a strong team is your greatest advantage. To identify and capitalize on opportunities, navigate challenges and setbacks, and make the most of your limited resources, you need a team that is agile, adaptable, and innovative.'
    },
    {
      icon: Building,
      title: 'Enter NorthStar',
      description: 'We provide a highly experienced, cost-effective, in-house general counsel as an alternative to traditional firms. We add significant value by efficiently addressing your day-to-day legal needs, empowering your business, and significantly reducing turnaround time and spend.'
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
                  GC on demand
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Fractional legal and 
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent">
                    {' '}general counsel support
                  </span>
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-overlay-gray-soft">
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
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-xl w-fit mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  {feature.description}
                </p>

                {/* Special savings highlight for middle section */}
                {index === 1 && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 mb-8 border border-green-200">
                    <div className="text-center">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl w-fit mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-6xl font-bold text-green-600 mb-2">38%</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">AVG. CLIENT SAVINGS</h4>
                      <p className="text-green-700 font-semibold">ON LEGAL FEES</p>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <motion.button
                    onClick={handleContactRedirect}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index === 0 ? "Let's Talk" : index === 1 ? 'Contact Us' : 'Get Started'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;