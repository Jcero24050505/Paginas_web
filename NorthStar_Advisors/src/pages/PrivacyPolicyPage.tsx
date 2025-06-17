import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Lock, 
  Mail, 
  Calendar,
  FileText,
  Users,
  Database
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        'Personal information you provide when contacting us (name, email, company, phone number)',
        'Information about your use of our website through cookies and analytics',
        'Professional information relevant to our consulting services',
        'Communication records and correspondence'
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our consulting services',
        'To communicate with you about our services and respond to inquiries',
        'To send relevant industry insights and updates (with your consent)',
        'To comply with legal obligations and protect our legitimate interests'
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist in our operations',
        'We may disclose information when required by law or to protect our rights',
        'Business transfers may include customer information as part of transferred assets'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational security measures',
        'Data is encrypted in transit and at rest where technically feasible',
        'Access to personal information is limited to authorized personnel only',
        'Regular security assessments and updates to our protection measures'
      ]
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
                  Privacy 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {' '}Policy
                  </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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

      {/* Policy Content */}
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
              NorthStar Advisors ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-lg">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 space-y-8"
          >
            
            {/* Your Rights */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-blue-600" />
                Your Rights
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing of your information</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                Contact Us
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@navigatewithnorthstar.com</p>
                  <p><strong>Phone:</strong> 973-294-1411</p>
                  <p><strong>Address:</strong> Boston, MA and San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Changes to This Policy
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
                  You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;