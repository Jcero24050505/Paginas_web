import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Location: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Address',
      details: ['123 Climbing Street', 'Boulder, CO 80302'],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      details: ['+1 (303) 555-1234'],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      details: ['info@awesomeboulder.com'],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Hours',
      details: ['Mon-Fri: 6am - 11pm', 'Sat: 8am - 10pm', 'Sun: 8am - 8pm'],
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="h-6 w-6" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="h-6 w-6" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="h-6 w-6" />, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Find Us</h2>
          <p className="max-w-3xl mx-auto text-lg">
            We're conveniently located in downtown Boulder, with ample parking and easy access
            to public transportation. Come visit us or get in touch with any questions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="p-4 bg-background-alt rounded-lg">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <h3 className="font-bold ml-2">{item.title}</h3>
                  </div>
                  <div>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-300">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background-alt p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <p className="mb-4">
                Follow us on social media for the latest updates, events, and climbing inspiration.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="p-3 bg-background rounded-full hover:bg-primary hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-96 rounded-lg overflow-hidden relative"
          >
            <iframe
              title="Awesome Boulder Center Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24316.079904063045!2d-105.2885021255925!3d40.01473957899683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bec28362c4509%3A0x9d7c2d2e9d5cc780!2sBoulder%2C%20CO!5e0!3m2!1sen!2sus!4v1673982693767!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 p-8 bg-primary bg-opacity-10 rounded-lg max-w-3xl mx-auto border border-primary"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Ready to Start Climbing?</h3>
          <p className="text-center mb-6">
            Come by during our operating hours for a day pass, or book a class to get started with expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#classes" className="btn-primary text-center">
              Book a Class
            </a>
            <a href="#pricing" className="btn-outline text-center">
              Get a Day Pass
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;