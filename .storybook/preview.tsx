import type { Preview } from "@storybook/react";
import React from "react";
import "../src/index";
import "../src/index.css";

const preview: Preview = {
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
    (Story) => (
      <div className="p-4 bg-hd-bg-light">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
