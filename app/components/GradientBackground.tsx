import { motion } from 'framer-motion';
import React from 'react';

// Define the type for your component's props
type GradientBackgroundProps = {
  children: React.ReactNode; // This types the 'children' prop
};

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-black  bg-radial-gradient-animation min-h-screen flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

export default GradientBackground;
