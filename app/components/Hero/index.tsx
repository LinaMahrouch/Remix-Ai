
import { Link } from '@remix-run/react';
export default function Hero() {
    return (
      
        <section className="bg-gradient-to-bl from-zinc-900 to-black flex flex-col items-center  justify-center  text-white ">
        <main className="flex flex-col items-center justify-center min-h-screen pt-20 text-center  text-white">
          
            <h1 className="text-3xl md:text-6xl font-bold lg:text-7xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Welcome to <span className="text-blue-600">Your AI App</span>
            </h1>
            <p className=" mx-4 text-lg md:text-2xl lg:text-3xl mb-4 text-zinc-400">
              This is a starter template for your Remix AI app!
            </p>
           
              <Link to="/" className="px-4 py-3 lg:px-6 bg-indigo-800 rounded-lg text-white font-semibold hover:bg-blue-800 transition duration-300">
                Get Started</Link>
        </main>
        </section>
       
    );
  } 
  