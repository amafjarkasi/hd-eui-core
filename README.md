# HD-EUI Core: Hyper-Dense Enterprise UI Library

![NPM Version](https://img.shields.io/npm/v/@amafjarkasi/hd-eui-core.svg?style=flat-square)
![License](https://img.shields.io/npm/l/@amafjarkasi/hd-eui-core.svg?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/@amafjarkasi/hd-eui-core.svg?style=flat-square)
![GitHub Stars](https://img.shields.io/github/stars/amafjarkasi/hd-eui-core?style=flat-square)
![GitHub Issues](https://img.shields.io/github/issues/amafjarkasi/hd-eui-core?style=flat-square)

HD-EUI Core is a high-performance, TypeScript-based UI component library for React, designed specifically for data-dense enterprise and B2B applications. Inspired by Zendesk's Compact Utilitarian design system, it emphasizes hyper-density, minimal whitespace, structured layouts with hard borders, and a strict monochrome color palette. This library is optimized for constrained environments like sidebars (300-380px wide) and complex dashboards, ensuring maximum information packing without sacrificing usability or accessibility.

With 33+ components, HD-EUI Core provides a complete toolkit for building professional interfaces that prioritize efficiency, scalability, and ease of customization. It's lightweight (~20KB gzipped), fully typed, and integrates seamlessly with Tailwind CSS and Lucide icons.

## Key Features

- **Hyper-Density Focus**: Tight spacing (e.g., `gap-0.5`, `p-1`), micro-typography (8-11px fonts), and hard 1px borders (`#d8dcde`) for data-rich UIs without clutter.
- **Strict Color Palette**: Primary `#2f3941` (slate), hover `#1f252a`, borders `#d8dcde` (gainsboro), focus `#1f73b7` (azure), muted `#87929d`, backgrounds `#f8f9fa`/`#ffffff`.
- **Contextual Sizing**: Components adapt to constrained layouts (e.g., sidebars, dashboards) with responsive modes and min-widths.
- **Accessibility Built-In**: ARIA attributes, keyboard navigation, focus rings, and high contrast for WCAG compliance.
- **Customization**: Extendable theme tokens for colors, spacing, typography, and borders via Tailwind config.
- **Performance**: Lightweight, tree-shakable, with smooth animations (pulse, shimmer, transitions) for loading and interactions.
- **Developer Tools**: Storybook integration for interactive docs, Jest tests, ESLint configs, and GitHub workflows for CI/CD, linting, testing, building, and NPM publishing.
- **Framework-Agnostic Design**: Core tokens can be adapted to Vue, Angular, or plain CSS.
- **Enterprise-Ready**: Supports hierarchical data (Tree, Accordion), multi-step processes (Stepper), forms with validation, and dense tables with sorting/pagination.

## Installation

Install via NPM:

```bash
npm install @amafjarkasi/hd-eui-core
```

Add to your `tailwind.config.js` for theme integration:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@amafjarkasi/hd-eui-core/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hd: {
          primary: '#2f3941',
          'primary-hover': '#1f252a',
          border: '#d8dcde',
          focus: '#1f73b7',
          muted: '#87929d',
          'bg-light': '#ffffff',
          'bg-dark': '#f8f9fa',
        },
      },
      fontSize: {
        'header': ['11px', { lineHeight: '1.2', fontWeight: '700' }],
        'body': ['10px', { lineHeight: '1.1' }],
        'muted': ['9px', { lineHeight: '1.0' }],
        'micro': ['8px', { lineHeight: '1.0' }],
        'mono': ['10px', { fontFamily: 'monospace', lineHeight: '1.1' }],
      },
      spacing: {
        'tight': '2px',
        'ultra': '4px',
        'micro': '1px',
      },
      borderRadius: {
        'sm': '2px',
        'md': '3px',
      },
    },
  },
  plugins: [],
};
```

Ensure peer dependencies are installed:

```bash
npm install react react-dom tailwindcss lucide-react clsx
```

## Quick Start

Import and use components in your React app:

```tsx
import React from 'react';
import { Button, Card, Table } from '@amafjarkasi/hd-eui-core';

function App() {
  const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
  const columns = [{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }];

  return (
    <Card title="Dashboard" footer="Updated now">
      <Table data={data} columns={columns} />
      <Button variant="primary" size="sm">Action</Button>
    </Card>
  );
}

export default App;
```

Run your app and see the hyper-dense UI in action!

## Component List

HD-EUI Core provides 33+ components, all optimized for density and enterprise use. Each supports TypeScript props, variants, and theming.

### Layout & Containers
- **Card**: Compact container with title, body, footer (denser padding, min-height).
- **CardGrid**: Responsive grid for dashboards (auto-fit columns, tight gaps).
- **Modal**: Overlay dialog with sizes, footer (backdrop blur, dense actions).
- **Accordion**: Collapsible sections (icon animations, ARIA support).
- **Tabs**: Tab navigation (dense tabs, smooth transitions).
- **Sidebar**: Collapsible nav for constrained spaces (nested items, toggle animation).
- **CardGrid**: Grid layout for cards (responsive auto-fit).

### Form Elements
- **Button**: Action buttons (denser sizes, loading state, icons).
- **Input**: Text inputs (tighter layout, small labels).
- **Form**: Form wrapper with validation context (dense fields, error display).
- **Checkbox**: Compact checkboxes.
- **Radio**: Inline radio groups.
- **Select**: Dense dropdowns.
- **Slider**: Range inputs with labels.

### Feedback & Notification
- **Alert**: Dismissible alerts (auto-dismiss, icons, denser layout).
- **Spinner**: Loading indicators (multi-animation/color variants).
- **ProgressBar**: Linear progress (smoother animation, labels, variants).
- **Skeleton**: Loading placeholders (wave/pulse, paragraph shapes).
- **Toast**: Positioned notifications.
- **Notification**: Inline alerts.
- **AlertDialog**: Confirmation dialogs (dense layout).

### Data Display & Navigation
- **Table**: Dense tables (sortable, skeleton loading, tighter rows).
- **Badge**: Inline labels (multi-variant, denser padding).
- **Avatar**: User avatars (initials, multi-sizes).
- **List**: Lists (density variants, dividers).
- **Breadcrumb**: Navigation trails (denser gaps, active state).
- **Pagination**: Page controls (ellipsis, denser buttons).
- **Stepper**: Multi-step wizards (denser steps, vertical mode).
- **Dropdown**: Menus (keyboard nav, denser options).
- **Tree**: Hierarchical data (denser nodes, icons, indentation).
- **Navbar**: Horizontal nav (collapsible).

All components are customizable via props and theme extensions.

## Advanced Usage & Examples

### Theme Customization
Override tokens in `tailwind.config.js` or import from `theme.ts`:

```tsx
import { colors } from '@amafjarkasi/hd-eui-core';

const CustomButton = () => <button style={{ color: colors.primary }}>Custom</button>;
```

### Form with Validation Example
```tsx
import { Form, Input, Button } from '@amafjarkasi/hd-eui-core';

function MyForm() {
  return (
    <Form onSubmit={(data) => console.log(data)} validationSchema={{ email: { required: true, pattern: /\S+@\S+\.\S+/, message: 'Invalid email' } }}>
      <Input name="email" label="Email" />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

### Dense Table Example
```tsx
import { Table } from '@amafjarkasi/hd-eui-core';

const columns = [{ key: 'name', header: 'Name', sortable: true }, { key: 'value', header: 'Value' }];
const data = [{ name: 'Item 1', value: '100' }, { name: 'Item 2', value: '200' }];

<Table data={data} columns={columns} onSort={(key, dir) => console.log(key, dir)} />
```

For more examples, run Storybook: `npm run storybook` – interactive demos for every component!

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Report issues or submit PRs on GitHub.

## License

MIT License. See [LICENSE](LICENSE) for details.

## Security

See [SECURITY.md](SECURITY.md) for vulnerability reporting.

## Support

- **Issues**: [GitHub Issues](https://github.com/amafjarkasi/hd-eui-core/issues)
- **Funding**: Support via [FUNDING.yml](.github/FUNDING.yml)

Built with ❤️ by [amafjarkasi](https://github.com/amafjarkasi). Star the repo if you find it useful!