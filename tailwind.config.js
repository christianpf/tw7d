/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-secondary': '#fffeff',
        'bg-primary': '#9cd1cf',
        'primary': '#0e1323',
        'accent': '#c04d3c'
      },
      boxShadow:{
        'custom': '0px 0px 1px 1px rgba(0,0,0,0.75)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero_bg': 'url(/hero_bg.jpg)',
      },
      gridTemplateColumns: {
        'servicios': 'repeat(auto-fit, minmax(350px, 1fr))'
      }
    },
  },
  plugins: [],
}
