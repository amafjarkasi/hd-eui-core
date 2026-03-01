import type { Meta, StoryObj } from "@storybook/react";
import { CodeEditor } from "../components/CodeEditor";
import React, { useState } from "react";

const meta: Meta<typeof CodeEditor> = {
  title: "Data Display/CodeEditor",
  component: CodeEditor,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CodeEditor>;

const SAMPLE_CODE = `function initSystem() {
  const config = {
    density: 'hyper',
    theme: 'slate',
    version: '1.0.4'
  };

  console.log('HD-EUI Core Initialized', config);
  return true;
}`;

export const ReadOnly: Story = {
  args: {
    code: SAMPLE_CODE,
    language: "javascript",
    editable: false,
  },
};

export const Editable: Story = {
  render: (args) => {
    const [code, setCode] = useState(args.code || SAMPLE_CODE);
    return (
      <CodeEditor
        {...args}
        code={code}
        onChange={setCode}
        editable
        language="javascript"
      />
    );
  },
};

export const JSON: Story = {
  args: {
    code: `{
  "status": "success",
  "data": {
    "id": "001",
    "metrics": [1.2, 4.5, 9.1]
  }
}`,
    language: "json",
  },
};
