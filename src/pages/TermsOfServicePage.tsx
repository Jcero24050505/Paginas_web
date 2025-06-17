import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle, 
  Calendar,
  Mail,
  CheckCircle,
  XCircle
} from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our website and services, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you may not access or use our services',
        'These terms apply to all visitors, users, and others who access or use our services',
        'We reserve the right to modify these terms at any time with notice'
      ]
    },
    {
      icon: FileText,
      title: 'Description of Services',
      content: [
        'NorthStar Advisors provides legal and strategic consulting services for life sciences companies',
        'Our services include fractional legal counsel, compliance programs, and pharmaceutical launch strategies',
        'We provide promotional review committee staffing and regulatory advisory services',
        'All services are provided on a professional consulting basis'
      ]
    },
    {
      icon: Scale,
      title: 'Professional Relationship',
      content: [
        'Our services create a professional consulting relationship, not an attorney-client relationship unless specifically agreed',
        'All advice and recommendations are provided for informational purposes',
        'Clients are responsible for making their own business and legal decisions',
        'We do not guarantee specific outcomes or results from our consulting services'
      ]
    },
    {
      icon: Shield,
      title: 'Confidentiality',
      content: [
        'We maintain strict confidentiality regarding all client information and proprietary data',
        'Non-disclosure agreements may be executed for additional protection of sensitive information',
        'We implement appropriate security measures to protect confidential information',
        'Confidentiality obligations survive termination of our professional relationship'
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
                  Terms of 
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    {' '}Service
                  </span>
                </h1>
                <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                  Please read these terms carefully before using our services or website.
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

      {/* Terms Content */}
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
              These Terms of Service ("Terms") govern your use of the NorthStar Advisors website 
              and services. By using our services, you agree to these terms.
            </p>
          </motion.div>

          {/* Terms Sections */}
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
            
            {/* Limitation of Liability */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-yellow-600" />
                Limitation of Liability
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  To the fullest extent permitted by law, NorthStar Advisors shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability for any claims arising from or related to our services shall not exceed 
                  the amount paid by you for the specific services giving rise to the claim.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-blue-600" />
                Intellectual Property
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  All content, materials, and intellectual property on our website and in our services 
                  are owned by NorthStar Advisors or our licensors and are protected by copyright, 
                  trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works of our content 
                  without our express written permission.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <XCircle className="w-6 h-6 mr-3 text-red-600" />
                Termination
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice, 
                  for any reason, including breach of these Terms.
                </p>
                <p>
                  Upon termination, your right to use our services will cease immediately, but provisions 
                  regarding confidentiality, intellectual property, and limitation of liability will survive.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-blue-600" />
                Governing Law
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  State of Massachusetts, without regard to its conflict of law provisions. Any disputes 
                  arising from these Terms or our services shall be resolved in the courts of Massachusetts.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-blue-600" />
                Contact Us
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@navigatewithnorthstar.com</p>
                  <p><strong>Phone:</strong> 973-294-1411</p>
                  <p><strong>Address:</strong> Boston, MA and San Francisco, CA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;