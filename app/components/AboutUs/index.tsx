// AboutUs.tsx
import { motion } from 'framer-motion';
import React from 'react';
import Title from '../Title';

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
<div className=" flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl   from-zinc-900 to-black p-6 text-white">    
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center w-full max-w-6xl mx-auto "
      >
        <Title
        title="About Us"
        caption="We are dedicated to providing innovative solutions. Our team combines
        expertise in various fields to bring your ideas to life."
       
      />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through your card data here later :) */}
          <motion.div variants={cardVariants} className="bg-cute-black p-4 sm:p-2 hover:bg-zinc-950 text-white border border-gay-gray rounded-lg shadow-lg ">
            {/* Card Content */}
            <h1 className="text-lg md:text-xl font-semibold  text-blue-700">Our Mission</h1>
            <p>
              To deliver exceptional service and to enrich the lives of our clients through innovative design and technology.
              
            </p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-cute-black  p-6 sm:p-4 hover:bg-zinc-950 text-white border border-gay-gray rounded-lg shadow-lg">
            {/* Card Content */}
            <h1 className="text-lg md:text-xl font-semibold  text-blue-700">Our Mission</h1>
            <p>
              To deliver exceptional service and to enrich the lives of our clients through innovative design and technology.
            </p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-cute-black hover:bg-zinc-950 text-white border border-gay-gray p-6  sm:p-4 rounded-lg shadow-lg">
            {/* Card Content  TODO LATER dynamic cards*/}
            <h1 className="text-lg md:text-xl font-semibold  text-blue-700">Our Mission</h1>
            <p>
              To deliver exceptional service and to enrich the lives of our clients through innovative design and technology.
            </p>
          </motion.div>
        </div>
      
      </motion.div>
    </div>
 
  );
};

export default AboutUs;
