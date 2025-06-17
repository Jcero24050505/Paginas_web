import React from 'react';
import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const linkSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Classes', href: '#classes' },
      ],
    },
    {
      title: 'Membership',
      links: [
        { name: 'Join Now', href: '#pricing' },
        { name: 'Day Passes', href: '#pricing' },
        { name: 'Special Offers', href: '#pricing' },
        { name: 'Gift Cards', href: '#contact' },
        { name: 'Group Events', href: '#classes' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { name: 'Location', href: '#contact' },
        { name: 'Hours', href: '#pricing' },
        { name: 'Email Us', href: 'mailto:info@awesomeboulder.com' },
        { name: 'Careers', href: '#contact' },
        { name: 'FAQs', href: '#contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-background-alt text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="text-primary h-8 w-8" />
              <span className="text-white font-display font-bold text-xl">
                <span className="text-primary">AWESOME</span> BOULDER
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Founded in 2015, Awesome Boulder Center has grown to become the premier
              destination for indoor climbing enthusiasts. Our 12,000 sq ft facility features
              walls designed by professional climbers.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin size={16} className="text-primary mr-2" />
                <span>123 Climbing Street, Boulder, CO 80302</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-primary mr-2" />
                <span>+1 (303) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-primary mr-2" />
                <span>info@awesomeboulder.com</span>
              </div>
            </div>
          </div>

          {/* Link Sections */}
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-display font-bold text-white text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Awesome Boulder Center. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="p-2 text-gray-400 hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;