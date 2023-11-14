import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial-at-tl': "radial-gradient(circle at 10% 50%, #00FFFF 0%, transparent 50%)",
      },
      
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif']
      },
      colors: {
        'gay-gray': '#2d2d2d',
        'cute-black':"#181818",
      },

    },
  },
  plugins: [],
} satisfies Config

