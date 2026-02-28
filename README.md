# 💎 HD-EUI Core: The High-Density Enterprise UI Framework

[![NPM Version](https://img.shields.io/npm/v/@amafjarkasi/hd-eui-core?style=for-the-badge&color=2f3941&logo=npm)](https://www.npmjs.com/package/@amafjarkasi/hd-eui-core)
[![License](https://img.shields.io/npm/l/@amafjarkasi/hd-eui-core?style=for-the-badge&color=87929d)](LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@amafjarkasi/hd-eui-core?style=for-the-badge&color=1f73b7)](https://bundlephobia.com/package/@amafjarkasi/hd-eui-core)
[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://hd-eui-storybook.netlify.app)
[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**HD-EUI Core** is an elite-tier, TypeScript-native React component library engineered for high-stakes enterprise environments. While modern design trends favor excessive whitespace, HD-EUI Core is built for the **Power User**—providing a hyper-dense, data-rich experience inspired by the **Zendesk Compact Utilitarian** design system.

[**Explore the Interactive Documentation (Storybook) →**](https://hd-eui-storybook.netlify.app)

---

## 📐 The Philosophy of Hyper-Density

In complex B2B applications, admin panels, and real-time monitoring systems, "white space" is often wasted space. HD-EUI Core optimizes every pixel to maximize information throughput without compromising cognitive clarity.

### The Three Pillars:
1.  **Hyper-Density**: Standardized micro-spacing (`2px` - `4px` gaps) and tight padding (`p-1`) to maximize screen real estate.
2.  **Structured Boundaries**: Hard `1px` borders (`#d8dcde`) replace soft shadows, providing immediate visual sectioning for complex data sets.
3.  **Micro-Typography**: A precision-tuned typographic scale (`8px` to `11px`) designed for readability at small sizes.

---

## ✨ Key Features

*   🚀 **33+ Production-Ready Components**: A comprehensive suite covering Layout, Forms, Data Display, and Navigation.
*   🎨 **Tailwind CSS Native**: Fully integrated with Tailwind's utility-first engine for zero-overhead styling.
*   🛡️ **Strict TypeScript Excellence**: 100% type-safe with exported interfaces for every component, prop, and event handler.
*   ♿ **Enterprise Accessibility**: Built-in ARIA support, keyboard navigation, and high-contrast focus states.
*   📦 **Ultra-Lightweight**: ~20KB gzipped bundle size with full tree-shaking support.
*   🌓 **Professional Monochrome Palette**: A sophisticated slate-and-azure palette designed for long-duration focus.

---

## 🎨 Design System Specifications

### Color Palette (Strict Hex Codes)
| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Primary Text/Actions** | `#2f3941` | Main text, primary buttons, active states. |
| **Hover State** | `#1f252a` | Hover backgrounds for primary actions. |
| **Borders/Dividers** | `#d8dcde` | Hard 1px borders for sectioning. |
| **Brand/Focus/Active** | `#1f73b7` | Focus rings, links, brand accents. |
| **Muted/Secondary** | `#87929d` | Secondary text, disabled states, icons. |
| **Background (Light)** | `#ffffff` | Main workspace background. |
| **Background (Dark)** | `#f8f9fa` | Sidebar and header backgrounds. |

### Typographic Scale
| Level | Size | Weight | Line Height |
| :--- | :--- | :--- | :--- |
| **Header** | `11px` | Bold (700) | `1.2` |
| **Body** | `10px` | Regular (400) | `1.3` |
| **Muted** | `9px` | Regular (400) | `1.2` |
| **Micro** | `8px` | Regular (400) | `1.1` |
| **Mono** | `10px` | Monospace | `1.2` |

### Spacing System
| Token | Value | Usage |
| :--- | :--- | :--- |
| **Micro** | `1px` | Hairline separators. |
| **Tight** | `2px` | Internal component padding. |
| **Ultra** | `4px` | Gaps between related elements. |
| **Normal** | `8px` | Section padding. |

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

### 1. Basic Component Usage
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

### 2. Data-Dense Table with Sorting
```tsx
import { Table, Badge } from '@amafjarkasi/hd-eui-core';

const columns = [
  { key: 'id', header: 'ID', width: '60px' },
  { key: 'user', header: 'User', sortable: true },
  { key: 'role', header: 'Role', render: (val) => <Badge>{val}</Badge> }
];

const data = [
  { id: '001', user: 'Amaf J.', role: 'Admin' },
  { id: '002', user: 'John D.', role: 'Editor' }
];

<Table 
  data={data} 
  columns={columns} 
  striped 
  onSort={(key, dir) => console.log(`Sorting ${key} by ${dir}`)} 
/>
```

---

## 📚 Component Catalog

| Category | Components | Description |
| :--- | :--- | :--- |
| **Layout** | `Card`, `CardGrid`, `Modal`, `Sidebar`, `Accordion`, `Tabs` | Structural components for organizing complex views. |
| **Form** | `Button`, `Input`, `Form`, `Select`, `Checkbox`, `Radio`, `Slider`, `Dropdown` | High-density input controls with validation support. |
| **Data Display** | `Table`, `Tree`, `Badge`, `Avatar`, `List`, `CodeEditor`, `Calendar` | Optimized for high-throughput information visualization. |
| **Feedback** | `Alert`, `AlertDialog`, `Toast`, `Notification`, `Spinner`, `ProgressBar`, `Skeleton`, `Tooltip`, `Popover` | Contextual messaging and loading states. |
| **Navigation** | `Breadcrumb`, `Pagination`, `Stepper`, `Navbar` | Compact wayfinding for deep application hierarchies. |

---

## 🎨 Theming & Customization

HD-EUI Core is built on design tokens. You can import these tokens directly into your own custom components to maintain visual consistency across your entire application:

```tsx
import { colors, spacing, fontSize } from '@amafjarkasi/hd-eui-core';

const CustomPanel = () => (
  <div style={{ 
    backgroundColor: colors["bg-dark"], 
    padding: spacing.tight,
    border: `1px solid ${colors.border}`
  }}>
    <h1 style={{ fontSize: fontSize.header }}>Custom Header</h1>
    <p style={{ fontSize: fontSize.body }}>Integrated with HD-EUI tokens.</p>
  </div>
);
```

---

## 🧪 Development Workflow

If you wish to contribute or modify the library:

```bash
# Clone the repository
git clone https://github.com/amafjarkasi/hd-eui-core.git

# Install dependencies
npm install

# Start Storybook for interactive development
npm run storybook

# Build the library for production
npm run build

# Run unit tests with Jest
npm test
```

---

## 🤝 Contributing

We are building the future of high-density UI. We welcome all contributions!
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

## 📧 Support & Community

*   **Issues**: [GitHub Issue Tracker](https://github.com/amafjarkasi/hd-eui-core/issues)
*   **Discussions**: [GitHub Discussions](https://github.com/amafjarkasi/hd-eui-core/discussions)
*   **Security**: See [SECURITY.md](SECURITY.md) for reporting vulnerabilities.

Built with ❤️ by [amafjarkasi](https://github.com/amafjarkasi). If you find this library useful, please give it a ⭐ on GitHub!