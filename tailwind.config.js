/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "app-gradient": "linear-gradient(180deg, #5EBEFE 0%, #2156F6 100%)",
        "sidebar-gradient":
          "linear-gradient(255.32deg, #5EBEFE -33.33%, #2156F6 103.37%)",
        "blue-gradient":
          "linear-gradient(168.44deg, #2156F6 -0.27%, #5EBEFE 156.73%)",
        "orange-gradient":
          "linear-gradient(180deg, #FF8D24 0%, #FFB258 115.25%)",
        "white-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 93.97%)",
        "category-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 64.79%, #000000 108.61%)",
      },
      colors: {
        "primary-blue": "#2156F6",
        "status-green": "rgba(13, 192, 63)",
        "status-red": "rgba(255, 61, 61)",
        "status-blue": "rgba(33, 86, 246)",
        "status-yellow": "rgba(255, 178, 72)",
        cyan: "#61C3FF",
        "light-gray": "#E4E4E4",
        "app-gray": "#7C7C7C",
        "star-yellow": "#FF8E00",
      },
      blur: {
        "app-blur": "100px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
