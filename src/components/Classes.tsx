import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Trophy, GraduationCap, Clock } from 'lucide-react';

const Classes: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const classOptions = [
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      title: 'Intro to Bouldering',
      description: 'Perfect for first-timers. Learn the basics of climbing movement, safety, and gym etiquette.',
      details: [
        'No experience necessary',
        '90 minute session',
        'All gear included',
        'Ages 14+'
      ],
      price: '$35',
      color: 'primary',
    },
    {
      icon: <Users className="h-10 w-10 text-secondary" />,
      title: 'Technique Clinic',
      description: 'Refine your climbing skills with focused technique training for intermediate climbers.',
      details: [
        'Some experience required',
        '2 hour session',
        'Personalized feedback',
        'Small group size'
      ],
      price: '$45',
      color: 'secondary',
    },
    {
      icon: <Trophy className="h-10 w-10 text-accent" />,
      title: 'Advanced Training',
      description: 'Targeted strength and technique training for experienced climbers looking to push their grades.',
      details: [
        'V4+ climbing level',
        '2 hour session',
        'Performance assessment',
        'Custom training plan'
      ],
      price: '$55',
      color: 'accent',
    },
    {
      icon: <Clock className="h-10 w-10 text-warning" />,
      title: 'Private Coaching',
      description: 'One-on-one instruction tailored to your specific goals and climbing style.',
      details: [
        'All levels welcome',
        '1 hour session',
        'Focused attention',
        'Flexible scheduling'
      ],
      price: '$75',
      color: 'warning',
    },
  ];

  return (
    <section id="classes" className="section-padding texture-bg">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">Climbing Classes</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Whether you're a first-timer or looking to level up your skills, our expert instructors
            are here to help you reach new heights. Join one of our classes designed for all skill levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 relative border-t-4"
              style={{ borderColor: `var(--color-${option.color})` }}
            >
              <div className="flex justify-center mb-4">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{option.title}</h3>
              <p className="mb-4 text-gray-300">{option.description}</p>
              
              <ul className="space-y-2 mb-6">
                {option.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <span className={`mr-2 text-${option.color} text-lg`}>•</span>
                    {detail}
                  </li>
                ))}
              </ul>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-white">{option.price}</span>
                <span className="text-gray-400">per person</span>
              </div>
              
              <a
                href="#contact"
                className={`block text-center py-3 px-4 rounded-md font-bold transition-colors bg-${option.color} hover:bg-${option.color}-dark text-white`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-background-alt rounded-lg p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Group & Corporate Events</h3>
          <p className="mb-6 text-center">
            Looking for a unique team-building activity or a fun birthday celebration?
            Our group packages are perfect for parties, corporate events, and special occasions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="btn-primary text-center">
              Inquire About Groups
            </a>
            <a href="#pricing" className="btn-outline text-center">
              View All Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Classes;