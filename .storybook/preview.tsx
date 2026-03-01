import type { Preview } from "@storybook/react";
import React, { useEffect } from "react";
import "../src/index";
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
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";

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
          className={`p-4 min-h-screen ${
            theme === "dark"
              ? "bg-[#1f252a] text-white"
              : "bg-hd-bg-light text-hd-primary"
          }`}
        >
          <Story />
        </div>
      );
    },
  ],
  tags: ["autodocs"],
};

export default preview;
