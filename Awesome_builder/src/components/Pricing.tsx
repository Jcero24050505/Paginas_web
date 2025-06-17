import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tag, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pricingPlans = [
    {
      title: 'Day Pass',
      price: '$22',
      period: 'per day',
      features: [
        'Full day access',
        'Gear rental available',
        'Access to all areas',
        'Locker usage',
      ],
      cta: 'Get Pass',
      popular: false,
    },
    {
      title: 'Membership',
      price: '$89',
      period: 'per month',
      features: [
        'Unlimited access',
        'Free intro class',
        'Free gear rental',
        '10% off on shop items',
        'Access to member events',
      ],
      cta: 'Join Now',
      popular: true,
    },
    {
      title: '10-Pack',
      price: '$180',
      period: 'for 10 visits',
      features: [
        'Access for 10 visits',
        'No expiration date',
        'Transferable',
        'Gear rental discount',
      ],
      cta: 'Buy Pack',
      popular: false,
    },
  ];

  const operatingHours = [
    { day: 'Monday - Friday', hours: '6am - 11pm' },
    { day: 'Saturday', hours: '8am - 10pm' },
    { day: 'Sunday', hours: '8am - 8pm' },
  ];

  return (
    <section id="pricing" className="section-padding texture-bg">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Pricing & Hours</h2>
          <p className="max-w-3xl mx-auto text-lg">
            We offer flexible options to fit your schedule and budget. From single day passes
            to membership plans, find what works best for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`card p-6 relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <Tag className="text-primary" />
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-accent mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-md font-bold transition-colors ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-dark text-white'
                    : 'bg-background hover:bg-gray-800 text-white border border-gray-700'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-background-alt rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Operating Hours</h3>
          <div className="max-w-md mx-auto">
            {operatingHours.map((schedule, index) => (
              <div
                key={index}
                className="flex justify-between py-3 border-b border-gray-700 last:border-0"
              >
                <span className="font-medium">{schedule.day}</span>
                <span className="text-primary font-bold">{schedule.hours}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-gray-400">
            Holiday hours may vary. Check our social media for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;