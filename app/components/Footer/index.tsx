
export default function Footer() {
  return (
    <section className="bg-black text-white">
    <footer className="flex items-center justify-center w-full h-16 border-t border-gray-700 text-center">
      <p>
        Powered by <a href="https://www.yourcompany.com" target="_blank" rel="noopener noreferrer" className="font-semibold">Your AI Company</a>
      </p>
      <span className="mx-2">|</span> {/* This adds a visual separator between the two pieces of text */}
      <p>
        Developed by <a href="https://remix-portfolio-template.vercel.app/Contactme" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700">Lina Mh</a>
      </p>
    </footer>
  </section>
  );
}
  