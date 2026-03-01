import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";
import "../src/index.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", icon: "circlehollow", title: "Light" },
          { value: "dark", icon: "circle", title: "Dark" },
        ],
        showName: true,
      },
    },
    zoom: {
      name: "Zoom",
      description: "Zoom level for high-density components",
      defaultValue: "125%",
      toolbar: {
        icon: "zoom",
        items: [
          { value: "100%", title: "100% (Actual Size)" },
          { value: "125%", title: "125% (Recommended)" },
          { value: "150%", title: "150% (Large)" },
          { value: "200%", title: "200% (Extra Large)" },
        ],
        showName: true,
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
    layout: "padded",
    options: {
      storySort: {
        order: [
          "Components",
          "Layout",
          "Form",
          "Feedback",
          "Data Display",
          "Navigation",
          "Heavyweight",
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";
      const zoom = context.globals.zoom || "125%";

      useEffect(() => {
        const html = document.documentElement;
        if (theme === "dark") {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
      }, [theme]);

      return (
        <div
          className={`min-h-screen transition-colors duration-200 ${
            theme === "dark"
              ? "bg-[#1f252a] text-white"
              : "bg-hd-bg-light text-hd-primary"
          }`}
          style={{
            padding: "2rem",
            fontSize: "14px", // Increase base font for Storybook docs/wrapper
          }}
        >
          <div
            style={{
              transform: `scale(${parseFloat(zoom) / 100})`,
              transformOrigin: "top left",
              width: `${100 / (parseFloat(zoom) / 100)}%`,
            }}
          >
            <Story />
          </div>
        </div>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
