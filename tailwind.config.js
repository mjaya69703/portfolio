/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Earth theme colors
        earth: {
          sky: '#87CEEB',
          grass: '#32CD32',
          forest: '#228B22',
          soil: '#8B4513',
          ocean: '#4682B4',
          mountain: '#696969',
          sun: '#FFD700',
          cloud: '#FFFFFF',
        },
        // Space theme colors
        space: {
          void: '#000000',
          nebula: '#8B5CF6',
          star: '#FFFFFF',
          planet: '#4169E1',
          cosmic: '#FF69B4',
          galaxy: '#6366F1',
          aurora: '#00FF7F',
          meteor: '#FF4500',
        }
      },
      backgroundImage: {
        'earth-gradient': 'linear-gradient(135deg, #87CEEB 0%, #98FB98 40%, #32CD32 100%)',
        'space-gradient': 'radial-gradient(ellipse at center, #1a1a3e 0%, #0d0d1f 70%, #000000 100%)',
        'grass-gradient': 'linear-gradient(to top, #1a4a1a 0%, #228B22 50%, #7CFC00 100%)',
        'sky-gradient': 'linear-gradient(to bottom, #87CEEB 0%, #98FB98 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-in',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'rocket-float': 'rocketFloat 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        rocketFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0deg)' },
          '75%': { transform: 'translateY(-5px) rotate(-1deg)' }
        }
      },
      fontFamily: {
        'space': ['Orbitron', 'monospace'],
        'earth': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
