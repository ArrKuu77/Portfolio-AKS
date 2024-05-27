/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "crazy-gradient":
          "linear-gradient(350deg, #FFD900, #FFD700, #FF4500, #FF6347, #FF69B4)",
      },
    },
  },
  plugins: [],
};
