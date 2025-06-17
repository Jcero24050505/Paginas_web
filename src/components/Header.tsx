import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Pharmaceutical Launch', id: 'pharma-launch' },
    { name: 'Promotional Review Staff', id: 'promotional-staff' },
    { name: 'Legal', id: 'legal' },
    { name: 'Compliance', id: 'compliance' },
    { name: 'Promotional Advertising', id: 'promotional-advertising' }
  ];

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleConsultationClick = () => {
    setCurrentPage('contact');
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-white shadow-lg border-b border-gray-100"
      style={{ zIndex: 100 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Left Side */}
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handleNavigation('home')}
          >
            <img 
              src="https://images.squarespace-cdn.com/content/v1/651c84d67c6e510c394db378/f8455742-dcf6-4eda-8db5-ad495e468687/Northstar_Logo-removebg-preview.png?format=1500w"
              alt="NorthStar Advisors Logo"
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden lg:flex items-center space-x-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleNavigation(service.id)}
                className={`font-medium transition-colors text-sm ${
                  currentPage === service.id 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {service.name}
              </button>
            ))}
          </nav>

          {/* CTA Button - Right Side */}
          <div className="hidden lg:block">
            <motion.button
              onClick={handleConsultationClick}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-100 py-4 bg-white rounded-b-lg"
            >
              <div className="flex flex-col space-y-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-900 mb-2 px-4">Services</p>
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleNavigation(service.id)}
                      className={`block w-full text-left px-4 py-2 text-sm rounded transition-colors ${
                        currentPage === service.id
                          ? 'text-blue-600 bg-blue-50 font-semibold'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
                <div className="px-4">
                  <button
                    onClick={handleConsultationClick}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold text-center"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;