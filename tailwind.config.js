/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bgPrimary: "#fff",
        bgSecondary: "#f0f2f5",
        bgThird: "#e4e6eb",
        bgForth: "#f0f2f5",
        colorPrimary: "#050505",
        colorSecondary: "#65676b",
        divider: "#ced0d4",
        darkBgPrimary: "#18191a",
        darkBgSecondary: "#242526",
        darkBgThird: "#3a3b3c",
        darkColorPrimary: "#242526",
        darkColorSecondary: "#b0b3b8",
        blueColor: "#1876f2",
        greenColor: "#42b72a",
        lightBlueColor: "#e7f3ff",
        borderColor: "#ccced2",
        shadow1: "rgba(0, 0, 0, 0.2)",
        shadow2: "rgba(0, 0, 0, 0.1)",
        shadow3: "rgba(0, 0, 0, 0.3)",
        shadowInset: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
