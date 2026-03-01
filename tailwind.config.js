/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hd: {
          // Primary Palette
          primary: "#2f3941",
          "primary-hover": "#1f252a",
          border: "#d8dcde",
          focus: "#1f73b7",
          muted: "#87929d",
          "bg-light": "#ffffff",
          "bg-dark": "#f8f9fa",

          // Dark Mode Specific
          "dark-bg": "#1f252a",
          "dark-bg-alt": "#2f3941",
          "dark-border": "#3e4b55",
          "dark-text": "#d1d5db",
          "dark-text-muted": "#9ca3af",

          // Semantic Colors
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
          info: "#3b82f6",
        },
      },
      fontSize: {
        header: ["11px", { lineHeight: "1.2", fontWeight: "700" }],
        body: ["10px", { lineHeight: "1.3" }],
        muted: ["9px", { lineHeight: "1.2" }],
        micro: ["8px", { lineHeight: "1.1" }],
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
      boxShadow: {
        "hd-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "hd-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      animation: {
        shimmer: "shimmer 2s infinite linear",
        "fade-in": "fadeIn 0.2s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
