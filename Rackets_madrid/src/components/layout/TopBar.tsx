import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[#003924] text-white text-sm py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>+34 916 36 99 29</span>
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:info@racketsmadrid.com" className="hover:text-blue-300">
                info@racketsmadrid.com
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>Lun-Vie: 7:00-23:00 | Sáb-Dom: 8:00-22:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;