/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f97d61",
        
"secondary": "#f25cae",
        
"accent": "#cfed6d",
        
"neutral": "#16171D",
        
"base-100": "#FDFCFD",
        
"info": "#7CC9F3",
        
"success": "#18C39B",
        
"warning": "#CE7312",
        
"error": "#EE4469",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
