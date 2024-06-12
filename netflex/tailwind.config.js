/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: { max: '1024px' },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

// 160 sm:w-[200px] md:w-[240px] lg:w-[320px] tablet:w-[200px]
