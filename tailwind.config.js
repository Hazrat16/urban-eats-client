/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "signature-blue": "#197BFD",
      },
    },
  },
  plugins: [require("daisyui")],
};
