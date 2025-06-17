import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin,
  ArrowRight,
  MapPin
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const services = [
    { name: 'PharmaLaunch™', id: 'pharma-launch' },
    { name: 'Fractional Legal Advisory', id: 'legal' },
    { name: 'Compliance Programs', id: 'compliance' },
    { name: 'Promotional Review Committee', id: 'promotional-staff' },
    { name: 'Biotech Startup Support', id: 'services' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', id: 'privacy-policy' },
    { name: 'Terms of Service', id: 'terms-of-service' },
    { name: 'Cookie Policy', id: 'cookie-policy' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dan@navigatewithnorthstar.com',
      href: 'dan@navigatewithnorthstar.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '973-294-1411',
      href: 'tel:973-294-1411'
    },
    
  ];

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/651c84d67c6e510c394db378/f8455742-dcf6-4eda-8db5-ad495e468687/Northstar_Logo-removebg-preview.png?format=1500w"
              alt="NorthStar Advisors Logo"
              className="h-20 w-auto filter brightness-0 invert"
            />
          </div>
        </motion.div>

        {/* Main Footer Grid - Updated to 3 columns */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          
          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavigation(service.id)}
                    className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group text-left"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {service.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start space-x-3 text-blue-200 hover:text-white transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                    <info.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{info.label}</div>
                    <div className="text-sm">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Stay Connected</h4>
            
            {/* Social Links */}
            <div className="mb-6">
              <a 
                href="https://www.linkedin.com/in/danielzavodnick/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 group w-full"
              >
                <div className="bg-blue-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Follow Us</div>
                  <div className="text-blue-200 text-sm">LinkedIn Updates</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="text-blue-200 text-sm text-center lg:text-left">
              © 2024 NorthStar Advisors. All rights reserved. | Transforming Life Sciences Operations
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.id)}
                  className="text-blue-200 hover:text-white transition-colors duration-300 hover:underline"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;