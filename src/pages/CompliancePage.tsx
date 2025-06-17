import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  ArrowRight,
  CheckCircle,
  Target,
  Users,
  BookOpen,
  Heart,
  FileText,
  UserCheck,
  Award,
  Calendar,
  Building
} from 'lucide-react';

interface CompliancePageProps {
  setCurrentPage?: (page: string) => void;
}

const CompliancePage: React.FC<CompliancePageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: Heart,
      title: 'A Culture of Compliance',
      description: 'NorthStar understands the life sciences industry\'s intricate compliance landscape. We develop and implement tailored compliance programs in line with HHS-OIG guidelines, ensuring your organization operates ethically and within regulatory boundaries. Your compliance journey is not just a checklist or a stack of policies - it\'s a strategic approach to business integrity and a deeply rooted culture of compliance.'
    },
    {
      icon: FileText,
      title: 'Bespoke Policy Suites',
      description: 'Crafting over 50 compliance policies, handbooks, SOPs, work instructions, learning modules, trainings, and more, we don\'t just provide templates; we design bespoke policy suites tailored to your company\'s unique needs. Our phased roll-out strategy ensures seamless integration into your operations, safeguarding your business while promoting a culture of compliance.'
    },
    {
      icon: UserCheck,
      title: 'Fractional Chief Compliance Officers',
      description: 'Need expert oversight without the full-time commitment? Our fractional Chief Compliance Officers step in to lead your compliance efforts, bringing years of industry experience to the table. From chairing compliance committees to developing compliance strategies, we are your dedicated compliance partners.'
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
                  Compliance
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
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl w-fit mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  {feature.description}
                </p>

                <div className="text-center">
                  <motion.button
                    onClick={handleContactRedirect}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index === 0 ? 'Schedule a Consult' : index === 1 ? 'Learn More' : 'Get Started'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Value Section */}
      <section className="py-20 bg-overlay-gray-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-xl w-fit mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">HHS-OIG Compliant</h4>
                  <p className="text-gray-600">Programs aligned with federal guidelines</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-xl w-fit mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">50+ Policies</h4>
                  <p className="text-gray-600">Comprehensive policy suites and SOPs</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-xl w-fit mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Leadership</h4>
                  <p className="text-gray-600">Fractional CCOs with industry experience</p>
                </div>
              </div>
              
              <motion.button
                onClick={handleContactRedirect}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Compliance Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;