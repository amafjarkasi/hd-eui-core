# 💎 HD-EUI Core: High-Density Enterprise UI

[![NPM Version](https://img.shields.io/npm/v/@amafjarkasi/hd-eui-core?style=for-the-badge&color=2f3941&logo=npm)](https://www.npmjs.com/package/@amafjarkasi/hd-eui-core)
[![License](https://img.shields.io/npm/l/@amafjarkasi/hd-eui-core?style=for-the-badge&color=87929d)](LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@amafjarkasi/hd-eui-core?style=for-the-badge&color=1f73b7)](https://bundlephobia.com/package/@amafjarkasi/hd-eui-core)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://hd-eui-storybook.netlify.app)

**HD-EUI Core** is a world-class, TypeScript-first React component library engineered for high-stakes enterprise environments. Inspired by the **Zendesk Compact Utilitarian** design system, it is purpose-built for data-dense interfaces where every pixel counts.

[**Explore the Docs (Storybook) →**](https://hd-eui-storybook.netlify.app)

---

## 📐 The Philosophy of Hyper-Density

In complex B2B applications, admin panels, and real-time dashboards, "white space" is often wasted space. HD-EUI Core flips the script on modern "airy" design by prioritizing **Information Density** without sacrificing **Cognitive Clarity**.

*   **Micro-Spacing**: Standardized `2px` (tight) and `4px` (ultra) gaps.
*   **Precision Typography**: Optimized readability for `8px` to `11px` font scales.
*   **Hard Boundaries**: 1px structured borders (`#d8dcde`) replace soft shadows for immediate sectioning.
*   **Contextual Sizing**: Built for constrained layouts like 300px sidebars and multi-pane dashboards.

---

## ✨ Key Features

*   🚀 **33+ Production-Ready Components**: A comprehensive suite covering Layout, Forms, Data Display, and Navigation.
*   🎨 **Tailwind CSS Native**: Fully integrated with Tailwind's utility-first engine for zero-overhead styling.
*   🛡️ **TypeScript Excellence**: 100% type-safe with exported interfaces for every component and prop.
*   ♿ **Enterprise Accessibility**: Built-in ARIA support, keyboard navigation, and high-contrast focus states.
*   📦 **Tree-Shakable & Lightweight**: Only ~20KB gzipped, ensuring your enterprise app stays fast.
*   🌓 **Strict Monochrome Palette**: Professional slate-and-azure palette designed for long-duration focus.

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

To unlock the full power of the HD-EUI design system, update your `tailwind.config.js`:

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
          primary: "#2f3941",       // Slate
          "primary-hover": "#1f252a",
          border: "#d8dcde",        // Gainsboro
          focus: "#1f73b7",         // Azure
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

### Basic Usage
```tsx
import { Button, Card, Badge } from '@amafjarkasi/hd-eui-core';

const App = () => (
  <Card title="System Status" footer="v1.0.4">
    <div className="flex items-center gap-ultra">
      <Badge variant="success">Online</Badge>
      <span className="text-body text-hd-primary">Core Engine Active</span>
    </div>
    <Button variant="primary" size="sm" className="mt-2">Reboot</Button>
  </Card>
);
```

### Data-Dense Table
```tsx
import { Table } from '@amafjarkasi/hd-eui-core';

const columns = [
  { key: 'id', header: 'ID', width: '60px' },
  { key: 'user', header: 'User', sortable: true },
  { key: 'role', header: 'Role', render: (val) => <Badge>{val}</Badge> }
];

const data = [
  { id: '001', user: 'Amaf J.', role: 'Admin' },
  { id: '002', user: 'John D.', role: 'Editor' }
];

<Table data={data} columns={columns} striped onSort={(key, dir) => handleSort(key, dir)} />
```

---

## 📚 Component Catalog

| Category | Components |
| :--- | :--- |
| **Layout** | `Card`, `CardGrid`, `Modal`, `Sidebar`, `Accordion`, `Tabs` |
| **Form** | `Button`, `Input`, `Form`, `Select`, `Checkbox`, `Radio`, `Slider`, `Dropdown` |
| **Data Display** | `Table`, `Tree`, `Badge`, `Avatar`, `List`, `CodeEditor`, `Calendar` |
| **Feedback** | `Alert`, `AlertDialog`, `Toast`, `Notification`, `Spinner`, `ProgressBar`, `Skeleton`, `Tooltip`, `Popover` |
| **Navigation** | `Breadcrumb`, `Pagination`, `Stepper`, `Navbar` |

---

## 🎨 Theming & Customization

HD-EUI Core is built on design tokens. You can import these tokens directly into your own custom components to maintain visual consistency:

```tsx
import { colors, spacing, fontSize } from '@amafjarkasi/hd-eui-core';

const CustomPanel = () => (
  <div style={{ 
    backgroundColor: colors["bg-dark"], 
    padding: spacing.tight,
    border: `1px solid ${colors.border}`
  }}>
    <h1 style={{ fontSize: fontSize.header }}>Custom Header</h1>
  </div>
);
```

---

## 🧪 Development

```bash
# Clone the repo
git clone https://github.com/amafjarkasi/hd-eui-core.git

# Install dependencies
npm install

# Start Storybook for interactive development
npm run storybook

# Build for production
npm run build

# Run tests
npm test
```

---

## 🤝 Contributing

We are building the future of high-density UI. If you want to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/amazing-component`).
3. Commit your changes (`git commit -m 'Add some amazing component'`).
4. Push to the branch (`git push origin feature/amazing-component`).
5. Open a Pull Request.

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📧 Support

*   **Issues**: [GitHub Issue Tracker](https://github.com/amafjarkasi/hd-eui-core/issues)
*   **Discussions**: [GitHub Discussions](https://github.com/amafjarkasi/hd-eui-core/discussions)

Built with ❤️ by [amafjarkasi](https://github.com/amafjarkasi). If you find this library useful, please give it a ⭐ on GitHub!