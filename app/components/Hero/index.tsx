
import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export default function Hero() {
  const phrases = ["App", "SaaS 🚀"];
  const [[phrase, direction], setPhrase] = useState([0, 1]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPhrase([phrase + direction, direction * -1]);
    }, 2000); // Change the phrase every 2000ms
    return () => clearTimeout(timeoutId);
  }, [phrase, direction]);
  
    return (
      
        <section className="bg-gradient-to-bl from-zinc-900 to-black flex flex-col items-center  justify-center  text-white ">
        <main className="flex flex-col items-center justify-center min-h-screen pt-20 text-center  text-white">
          
            <h1 className="text-4xl md:text-6xl font-bold lg:text-7xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Welcome to <span className="text-blue-600">Your AI&nbsp;
            <AnimatePresence mode='wait'>
              <motion.span
                key={phrase}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {phrases[phrase % phrases.length]}
              </motion.span>
            </AnimatePresence>
          </span>
            </h1>
            <p className="mx-4 text-lg md:text-2xl lg:text-3xl font-thin mb-4 text-zinc-400">
              This is a starter template for your Remix AI app!
            </p>
           
              <Link to="/" className="mt-10 px-6 py-3 lg:px-8 lg:py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-800 transition duration-300">
                Get Started</Link>
        </main>
        </section>
       
    );
  } 
  