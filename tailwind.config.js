/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // './node_modules/flowbite-react/**/*.js', // 👈 Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin'), // 👈 Add this line
  ],
};
