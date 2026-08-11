/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',  // Custom screen size for extra small devices
        'sm': '640px',  // Small devices (default in Tailwind)
        'md': '768px',  // Medium devices (default in Tailwind)
        'lg': '1024px', // Large devices (default in Tailwind)
        'xl': '1280px', // Extra large devices (default in Tailwind)
        '2xl': '1536px', // 2X large devices (default in Tailwind)
        '3xl': '1920px', // Custom screen size for very large screens
      },
    },
  },
  plugins: [],
};
