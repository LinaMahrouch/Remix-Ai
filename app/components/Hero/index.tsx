import { Link } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { ArrowRight } from 'lucide-react';
import { SpotlightPreview } from './hero-demo';
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

    <section className="flex flex-col items-center justify-center text-white min-h-screen">
    <main className="flex flex-col items-center justify-center text-center">
      <SpotlightPreview />
      <Link to="/signin" className='m-3'>
        <HoverBorderGradient as="button" containerClassName="rounded-full" className="bg-black text-zinc-300 flex items-center p-3">
          <span>Discover More</span>
          <ArrowRight size={20} />
        </HoverBorderGradient>
      </Link>
    </main>
  </section>

  );
}
