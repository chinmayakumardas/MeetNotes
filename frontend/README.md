# React + Vite

✅npm create vite@latest frontend --template react
cd frontend
<br>
✅npm install tailwindcss postcss autoprefixer react-redux @reduxjs/toolkit axios
npx tailwindcss init
<br>
update tailwind config file 
module.exports = {
  darkMode: 'class', // Enables dark mode with class-based toggle
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c',
        lightBackground: '#ffffff',
      },
    },
  },
  plugins: [],
};
<br>
@tailwind base;
@tailwind components;
@tailwind utilities;
<br>
✅Create a postcss.config.js file with the following
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
<br>
<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>✅<br>
