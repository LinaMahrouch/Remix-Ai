// AboutUs.tsx
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const About= () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px', // Adjust this value based on when you want the animation to start
  });

  const variants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-indigo-600 text-white flex items-center justify-center p-12">
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ type: 'linear', duration: 1 }}
      
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg">
          We are a team of passionate individuals dedicated to providing top-notch solutions for your online business. With a blend of expertise in technology, design, and marketing, we empower our clients to achieve their goals and exceed expectations.
        </p>
        <p className="text-lg mt-4">
          Our journey began in [Year], and since then, we have been committed to excellence and innovation. We believe in building relationships, understanding your needs, and delivering results that speak for themselves.
        </p>
      </div>
    </motion.div>
    </div>
  );
};

export default About;
