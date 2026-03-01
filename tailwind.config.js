/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./.storybook/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        hd: {
          // Primary Palette
          primary: "var(--hd-primary)",
          "primary-hover": "var(--hd-primary-hover)",
          border: "var(--hd-border)",
          focus: "var(--hd-focus)",
          muted: "var(--hd-muted)",
          "bg-light": "var(--hd-bg-light)",
          "bg-dark": "var(--hd-bg-dark)",

          // Dark Mode Specific
          "dark-bg": "var(--hd-dark-bg)",
          "dark-bg-alt": "var(--hd-dark-bg-alt)",
          "dark-border": "var(--hd-dark-border)",
          "dark-text": "var(--hd-dark-text)",
          "dark-text-muted": "var(--hd-dark-text-muted)",

          // Semantic Colors
          success: "var(--hd-success)",
          warning: "var(--hd-warning)",
          error: "var(--hd-error)",
          info: "var(--hd-info)",
        },
      },
      fontSize: {
        header: [
          "var(--hd-font-header)",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        body: ["var(--hd-font-body)", { lineHeight: "1.3" }],
        muted: ["var(--hd-font-muted)", { lineHeight: "1.2" }],
        micro: ["var(--hd-font-micro)", { lineHeight: "1.1" }],
        mono: [
          "var(--hd-font-mono)",
          { fontFamily: "monospace", lineHeight: "1.2" },
        ],
      },
      spacing: {
        tight: "var(--hd-spacing-tight)",
        ultra: "var(--hd-spacing-ultra)",
        micro: "var(--hd-spacing-micro)",
      },
      borderRadius: {
        sm: "var(--hd-radius-sm)",
        md: "var(--hd-radius-md)",
      },
      boxShadow: {
        "hd-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        "hd-md":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "hd-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        shimmer: "shimmer 2s infinite linear",
        "fade-in": "fadeIn 0.2s ease-out",
        "slide-in": "slideIn 0.3s ease-out",
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
        slideIn: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
