/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./storybook-static/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        hd: {
          primary: "#2f3941",
          "primary-hover": "#1f252a",
          border: "#d8dcde",
          focus: "#1f73b7",
          muted: "#87929d",
          "bg-light": "#ffffff",
          "bg-dark": "#f8f9fa",
        },
      },
      fontSize: {
        header: ["11px", { lineHeight: "1.2", fontWeight: "700" }],
        body: ["10px", { lineHeight: "1.3" }],
        muted: ["9px", { lineHeight: "1.2" }],
        mono: ["10px", { fontFamily: "monospace", lineHeight: "1.2" }],
      },
      spacing: {
        tight: "2px",
        ultra: "4px",
        micro: "1px",
      },
      borderRadius: {
        sm: "2px",
        md: "3px",
      },
    },
  },
  plugins: [],
};
