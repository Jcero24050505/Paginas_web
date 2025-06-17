import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, TrendingUp, ShieldCheck } from 'lucide-react';
import FeatureCard from './FeatureCard';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Community',
      description: 'Join our passionate community of climbers who support and motivate each other every day.',
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: 'Challenge',
      description: 'Push your limits with 200+ boulder problems ranging from beginner to competition level.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Safety',
      description: 'State-of-the-art facilities with premium safety equipment and trained staff always present.',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mx-auto">About Our Center</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Founded in 2015, Awesome Boulder Center has grown to become the premier
            destination for indoor climbing enthusiasts. Our 12,000 sq ft facility features
            walls designed by professional climbers, offering challenges for all skill levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">World-Class Facility</h3>
            <p className="mb-4">
              Our center boasts over 12,000 square feet of climbing surface with problems that
              change regularly to keep your sessions fresh and challenging. We have areas
              dedicated to beginners, intermediate climbers, and advanced athletes.
            </p>
            <p>
              Beyond climbing, we offer a fitness area, yoga studio, and a lounge where
              you can relax and connect with fellow climbers. Our shop provides all the
              gear you need, from climbing shoes to chalk and accessories.
            </p>
            <a href="#gallery" className="mt-6 inline-block btn-primary">
              Take a Tour
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative h-80 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/9397803/pexels-photo-9397803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Our bouldering facility" 
              className="w-full h-full object-cover"
            />
            <div className="img-overlay"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;