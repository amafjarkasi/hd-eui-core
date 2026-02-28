# HD-EUI Core: Hyper-Dense Enterprise UI Library

![NPM Version](https://img.shields.io/npm/v/@amafjarkasi/hd-eui-core?style=flat-square)
![License](https://img.shields.io/npm/l/@amafjarkasi/hd-eui-core?style=flat-square)
![Build Status](https://img.shields.io/github/actions/workflow/status/amafjarkasi/hd-eui-core/ci.yml?style=flat-square)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white)

**HD-EUI Core** is a high-performance, TypeScript-first React component library engineered specifically for data-dense enterprise applications. Inspired by the **Zendesk Compact Utilitarian** design system, it prioritizes information density, professional aesthetics, and extreme efficiency in constrained layouts.

[View Live Storybook Documentation](https://hd-eui-storybook.netlify.app)

---

## 📐 Design Philosophy

In enterprise B2B environments, information density is a feature, not a bug. HD-EUI Core is built on three pillars:

1.  **Hyper-Density**: Minimal whitespace, tight gaps (`2px` - `4px`), and micro-padding to maximize screen real estate.
2.  **Structured Layouts**: Heavy reliance on hard `1px` borders (`#d8dcde`) for sectioning instead of shadows or large margins.
3.  **Micro-Typography**: Optimized for readability at small scales (`8px` - `11px`) using a strict monochrome-first color palette.

---

## ✨ Key Features

- 🚀 **33+ Production-Ready Components**: From basic buttons to complex hierarchical trees and validated forms.
- 🎨 **Tailwind CSS Powered**: Fully customizable through Tailwind tokens and standard utility classes.
- 🛡️ **TypeScript Native**: Robust type definitions for every prop, ensuring a seamless developer experience.
- ♿ **Accessibility**: Built-in ARIA support, keyboard navigation, and high-contrast focus states.
- 📦 **Ultra-Lightweight**: ~20KB gzipped bundle size with full tree-shaking support.
- 🧩 **Contextual Sizing**: Specifically designed for sidebars (300px-380px) and complex multi-panel dashboards.

---

## 📦 Installation

```bash
npm install @amafjarkasi/hd-eui-core
```

### Peer Dependencies
Ensure your project has the following installed:
```bash
npm install react react-dom tailwindcss lucide-react clsx
```

---

## 🛠️ Configuration

To apply the HD-EUI theme, update your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@amafjarkasi/hd-eui-core/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hd: {
          primary: "#2f3941", // Slate
          "primary-hover": "#1f252a",
          border: "#d8dcde", // Gainsboro
          focus: "#1f73b7", // Azure
          muted: "#87929d",
          "bg-light": "#ffffff",
          "bg-dark": "#f8f9fa",
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
    },
  },
  plugins: [],
};
```

---

## 🚀 Quick Start

```tsx
import React from 'react';
import { Button, Card, Table, Badge } from '@amafjarkasi/hd-eui-core';

const Dashboard = () => {
  const columns = [
    { key: 'id', header: 'ID', width: '50px' },
    { key: 'status', header: 'Status', render: (val) => <Badge variant="primary">{val}</Badge> },
    { key: 'desc', header: 'Description' }
  ];

  const data = [
    { id: '001', status: 'Active', desc: 'System core initialized' },
    { id: '002', status: 'Pending', desc: 'Awaiting user input' }
  ];

  return (
    <Card title="System Overview" footer="Last sync: 1m ago">
      <Table data={data} columns={columns} striped />
      <div className="flex gap-1 mt-2">
        <Button variant="primary" size="sm">Refresh</Button>
        <Button variant="outline" size="sm">Export CSV</Button>
      </div>
    </Card>
  );
};
```

---

## 📚 Component Catalog

### Layout & Containers
*   **Card**: Structured containers with header/footer support.
*   **CardGrid**: Responsive grid system with `auto-fit` capabilities.
*   **Modal**: Lightweight overlays with backdrop blur.
*   **Sidebar**: Collapsible navigation optimized for 300px constraints.
*   **Accordion**: Space-saving collapsible content sections.

### Form Elements
*   **Button**: 4 variants, 3 sizes, loading states, and icon integration.
*   **Input**: High-density text fields with micro-labels.
*   **Form**: Validation-ready wrapper using React Context.
*   **Select/Dropdown**: Compact selection menus with keyboard navigation.
*   **Checkbox/Radio/Slider**: Minimalist inputs for dense data entry.

### Data Display
*   **Table**: Sortable, striped, and paginated data grids.
*   **Tree**: Hierarchical data navigation with collapsible nodes.
*   **Badge**: Status indicators with 3 density variants.
*   **Avatar**: Initials-based or image-based user identifiers.
*   **List**: Divided or dense list views.

### Feedback & Navigation
*   **Alert/AlertDialog**: Contextual feedback and confirmation dialogs.
*   **ProgressBar/Spinner**: Smooth, non-intrusive loading indicators.
*   **Skeleton**: Shimmering placeholders for async data.
*   **Breadcrumb/Pagination/Stepper**: Compact navigation trails and multi-step flows.
*   **Tooltip/Popover**: Non-blocking contextual information.

---

## 🧪 Development & Testing

```bash
# Run Storybook for component development
npm run storybook

# Build the library for production
npm run build

# Run unit tests
npm test
```

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [amafjarkasi](https://github.com/amafjarkasi).