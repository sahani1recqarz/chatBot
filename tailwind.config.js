/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#3490dc', // Light mode primary color
        'primary-dark': '#1d4ed8',  // Dark mode primary color
        'bg-light': '#f9fafb',      // Light mode background color
        'bg-dark': '#1a202c',       // Dark mode background color
        'text-light': '#2d3748',    // Light mode text color
        'text-dark': '#e2e8f0',     // Dark mode text color
      },
    },
  },
  plugins: [],
}