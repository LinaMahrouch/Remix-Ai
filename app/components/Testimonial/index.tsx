import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';
import Title from '../Title';
import cook from '../../../public/images/cook.png';
import notionImg from '../../../public/images/notion-avatar.png';
import tim from '../../../public/images/tim.png';

interface Feedback {
  name: string;
  position: string;
  img: string;
  content: string;
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Testimonial = () => {
  const feedbacks: Feedback[] = [
    {
      name: 'Mahrouch Lina',
      position: 'CTO - YourMom',
      img: notionImg,
      content: 'Actually it was a good thing discovering this template.'
    },
    {
      name: 'Letmi Cook',
      position: 'CEO - Sleep Agency',
      img: cook,
      content: 'It was a great experience using the app.'
    },
    {
      name: 'Tim Cook',
      position: 'CTO - WRizz',
      img: tim,
      content: 'It was a great experience using the app.'
    },
    // ...other feedbacks
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <Title
        title="Our lovely clients"
        caption="Feedbacks of some clients that tested our AI App"
      />
      <motion.div
        className="max-w-screen-xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center py-8 hover:scale-100">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.name} // It's better to use unique keys, if possible
              className="flex flex-col h-full bg-zinc-800 rounded-lg p-4 justify-between shadow-md "
              variants={itemVariants}
            >
              <TestimonialCard feedback={feedback} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonial;