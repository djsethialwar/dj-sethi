/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        neon: {
          '0%, 100%': {
            textShadow:
              '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff',
            color: '#ff4bd8',
          },
          '50%': {
            textShadow:
              '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 80px #00ffff',
            color: '#a8ffff',
          },
        },
        glowPulse: {
          '0%, 100%': { textShadow: '0 0 10px #ff00ff, 0 0 30px #ff00ff' },
          '50%': { textShadow: '0 0 20px #00ffff, 0 0 60px #00ffff' },
        },
      },
      animation: {
        neon: 'neon 2s ease-in-out infinite alternate',
        glowPulse: 'glowPulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
