// AboutUs.tsx
import { motion } from 'framer-motion';
import React from 'react';

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};


const AboutUs= () => {
  return (

    <div className=" bg-gradient-to-r bg-black text-white flex items-center justify-center p-12">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl text-blue-800 font-bold mb-6">About Us</h2>
        <p className="mb-6 text-lg">
          We are dedicated to providing innovative solutions. Our team combines
          expertise in various fields to bring your ideas to life.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through your card data here later :) */}
          <motion.div variants={cardVariants} className="bg-white p-6 hover:bg-zinc-400 text-black border-black rounded-lg shadow-lg ">
            {/* Card Content */}
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p>
              To deliver exceptional service and to enrich the lives of our clients through innovative design and technology.
            </p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-white p-6 hover:bg-zinc-400 text-black border-black rounded-lg shadow-lg">
            {/* Card Content */}
            <h3 className="text-2xl font-semibold mb-3 ">Our Mission</h3>
            <p>
              To deliver exceptional service and to enrich the lives of our clients through innovative design and technology.
            </p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-white hover:bg-zinc-400 text-black border-black p-6 rounded-lg shadow-lg">
            {/* Card Content  TODO LATER dynamic cards*/}
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p>
              To deliver exceptional service and to enrich the lives of our clients through innovative design and technology.
            </p>
          </motion.div>
          {/* Repeat for other cards */}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
