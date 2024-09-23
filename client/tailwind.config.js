/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        comfortaa: ["comfortaa", "sans-serif"],
        manrope: ["manrope", "sans-serif"],
      },
      colors: {
        "cyan-bluish-gray": "#abb8c3",
        "pale-pink": "#f78da7",
        "vivid-red": "#cf2e2e",
        "luminous-vivid-orange": "#ff6900",
        "luminous-vivid-amber": "#fcb900",
        "light-green-cyan": "#7bdcb5",
        "vivid-green-cyan": "#00d084",
        "pale-cyan-blue": "#8ed1fc",
        "vivid-cyan-blue": "#0693e3",
        "vivid-purple": "#9b51e0",
      },
      boxShadow: {
        natural: "6px 6px 9px rgba(0,0,0,.2)",
        deep: "12px 12px 50px rgba(0,0,0,.4)",
        sharp: "6px 6px 0px rgba(0,0,0,.2)",
        outlined:
          "6px 6px 0px -3px rgba(255,255,255,1),6px 6px rgba(0,0,0,0.8)",
        crisp: "6px 6px 0px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        articleGradient:
          "linear-gradient(180deg, hsla(0, 0%, 100%, 0) 0%, hsla(0, 0%, 100%, 0.3) 80% , hsl(0, 0%, 100%) 100%)",
        scrollGradient:
          "linear-gradient(90deg,hsla(207, 17%, 72%, 0.5) 0%,hsla(207, 17%, 72%, 0) 5%,hsla(207, 17%, 72%, 0) 50%,hsla(207, 17%, 72%, 0) 95%,hsla(207, 17%, 72%, 0.5) 100%)",
      },
    },
  },
  plugins: [],
};
