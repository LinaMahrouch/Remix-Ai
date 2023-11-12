
export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <main className="flex flex-col items-center justify-center min-h-screen pt-20 text-center bg-black text-white">
          
            <h1 className="text-6xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Welcome to <span className="text-blue-600">Your AI App</span>
            </h1>
            <p className="mt-3 text-2xl mb-4">
              This is a starter template for your Remix AI app!
            </p>
           
              <a href="#" className="px-6 py-3 bg-blue-500 rounded-md text-white font-bold hover:bg-blue-700 transition duration-300">
                Get Started
              </a>
           
          
        </main>
        </section>
    );
  }
  