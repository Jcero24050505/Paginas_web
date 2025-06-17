import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cookie, 
  Settings, 
  BarChart, 
  Shield, 
  Calendar,
  Mail,
  Eye,
  Zap
} from 'lucide-react';

const CookiePolicyPage = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems.',
      examples: [
        'Session management cookies',
        'Security cookies',
        'Load balancing cookies',
        'Accessibility cookies'
      ],
      required: true
    },
    {
      icon: BarChart,
      title: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information.',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      required: false
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: [
        'Language preferences',
        'Region selection',
        'User interface customization',
        'Form data retention'
      ],
      required: false
    },
    {
      icon: Eye,
      title: 'Marketing Cookies',
      description: 'These cookies track visitors across websites to display relevant and engaging advertisements.',
      examples: [
        'Advertising network cookies',
        'Social media tracking',
        'Retargeting pixels',
        'Conversion tracking'
      ],
      required: false
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://i.imgur.com/67J8yqt.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-white"
            >
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Cookie 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {' '}Policy
                  </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Learn about how we use cookies and similar technologies on our website.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

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

      {/* Cookie Policy Content */}
      <section className="py-20 bg-overlay-white-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              Last Updated: January 1, 2024
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              This Cookie Policy explains how NorthStar Advisors uses cookies and similar technologies 
              when you visit our website. It explains what these technologies are and why we use them, 
              as well as your rights to control our use of them.
            </p>
          </motion.div>

          {/* What Are Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
              </div>
              
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p>
                  Cookies allow websites to remember your actions and preferences (such as login, language, font size, 
                  and other display preferences) over a period of time, so you don't have to keep re-entering them 
                  whenever you come back to the site or browse from one page to another.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cookie Types */}
          <div className="space-y-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            </motion.div>

            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                      {type.required && (
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full mt-1">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">{type.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-600 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            
            {/* Managing Cookies */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-blue-600" />
                Managing Your Cookie Preferences
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights 
                  by setting your preferences in your browser settings.
                </p>
                <p>
                  Most web browsers allow you to control cookies through their settings preferences. However, 
                  if you limit the ability of websites to set cookies, you may worsen your overall user experience, 
                  since it will no longer be personalized to you.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Browser Settings:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Chrome: Settings → Privacy and Security → Cookies and other site data</li>
                    <li>• Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                    <li>• Safari: Preferences → Privacy → Cookies and website data</li>
                    <li>• Edge: Settings → Cookies and site permissions → Cookies and site data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-blue-600" />
                Third-Party Services
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  We may use third-party services that place cookies on your device. These services include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Content Delivery Networks:</strong> For improved website performance</li>
                </ul>
                <p>
                  These third parties have their own privacy policies and cookie policies. We recommend 
                  reviewing their policies to understand how they use cookies.
                </p>
              </div>
            </div>

            {/* Updates to Policy */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                Updates to This Policy
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or for other operational, legal, or regulatory reasons. We will notify you of any material 
                  changes by posting the updated policy on our website and updating the "Last Updated" date.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;