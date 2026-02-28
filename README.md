# HD-EUI Core

Apx',
      },
    },
  }, lightweight
  plugins: [],
}
```

## Usage, high-density UI

```tsx
import component library for React, { Button, Input, Card built on the } from '@hd-eui/core'; Zendesk Compact Utilitarian design system.

function App() {
  return ( Designed for data
    <div>
      <Button variant-dense applications="primary">Click me</Button> requiring ultra-compact layouts
      <Input label="Name" />
      <Card, tight typography title="Hello (">9-11px), and a strictWorld monochrome</Card>
    </div> color palette.

## Features

- **
  );
}
```

## Components

- Button22 Ready-to-Use
- Input
- Card
- Components**: Buttons Modal
- Spinner, inputs, mod
- Alert
- Toastals, tables, charts
- ProgressBar
- CodeEditor, and more—
- Calendar
- Slider
- all Checkbox
- Radio
- Select optimized for compact
- Tooltip
- Popover
-, efficient Table
- Badge
- Navbar UIs.
- **React
- List
- Avatar
- Notification + Type

## Contributing

PleaseScript + Tailwind CSS see the**: Built with [contributing guidelines modern tools](CONTRIBUTING.md) for type for details.

## License safety,

MIT styling
```
, and performance.
- **Lucide Icons Integration**: Seamless icon support across components.
- **Highly Customizable**: Extend themes, override styles, or integrate with existing Tailwind configs.
- **Framework Agnostic Design**: The design tokens can adapt to other frameworks like Vue or Angular.

## Installation

```bash
npm install @hd-eui/core
```

Add to your `tailwind.config.js`:

```js
module.exports = {
  // ...
  content: [
    // ... your paths
    './node_modules/@hd-eui/core/dist/**/*.{js,ts,jsx,tsx}',
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
        header: ['11px', { lineHeight: '1.2', fontWeight: '700' }],
        body: ['10px', { lineHeight: '1.3' }],
        muted: ['9px', { lineHeight: '1.2' }],
        mono: ['10px', { fontFamily: 'monospace', lineHeight: '1.2' }],
      },
      spacing: {
        tight: '2px',
        ultra: '4px',
        micro: '1px',
      },
      borderRadius: {
        sm: '2px',
        md: '3px',
      },
    },
  },
  // ...
};
```

Ensure peer dependencies are installed:

```bash
npm install react react-dom tailwindcss lucide-react
```

## Quick Start

```tsx
import { Button, Input, Card } from '@hd-eui/core';

function App() {
  return (
    <Card title="Welcome">
      <Input label="Name" />
      <Button>Submit</Button>
    </Card>
  );
}
```

## Components

### Layout & Containers
- **Card**: Compact container with optional title, body, footer.
- **Modal**: Overlay modal with size variants and dismissible functionality.
- **Navbar**: Horizontal navigation bar with links and optional search.
- **List**: Ordered/unordered lists with dividers.
- **Table**: Data table with sorting, striping, and pagination support.

### Form Elements
- **Button**: Variants (primary, secondary, outline, ghost), sizes (sm/md/lg), icon support.
- **Input**: Text inputs with labels, sizes, and validation states.
- **Checkbox**: Custom checkboxes with labels.
- **Radio**: Radio buttons group.
- **Select**: Dropdown selects with options.
- **Slider**: Range inputs with min/max values.

### Feedback & Notification
- **Alert**: Dismissible alerts with variants (info/success/warning/error).
- **Toast**: Auto-hiding notifications positioned in the UI.
- **Notification**: Inline notifications similar to alerts.
- **Spinner**: Loading indicators with size/color variants.
- **ProgressBar**: Linear progress bars with determinate/indeterminate modes.

### Data Display
- **Badge**: Small inline labels.
- **Avatar**: User avatars with images/fallback initials.
- **Calendar**: Monthly calendar view with date selection.
- **CodeEditor**: Simple monospace code display (expandable to full editor).
- **Tooltip**: Hover tooltips with position options.
- **Popover**: Click-triggered popovers with content overlay.

## API Reference

Each component exports TypeScript interfaces for props. Import them for type safety:

```tsx
import { Button, ButtonProps } from '@hd-eui/core';
```

Full API docs coming soon—check component sources or use IntelliSense in your IDE.

## Theme Customization

Override the default theme in your Tailwind config or use CSS variables:

- Colors: `hd-primary`, `hd-focus`, etc.
- Typography: `text-header`, `text-body`, `text-mono`.
- Spacing: `tight`, `ultra`, `micro`.

For advanced theming, import tokens directly:

```tsx
import { colors, spacing } from '@hd-eui/core';
// Use in custom components
```

## Contributing

1. Fork the repo.
2. Create a feature branch: `git checkout -b my-feature`.
3. Run tests: `npm test`.
4. Submit a PR.

## License

MIT License. See LICENSE file.

## Repository

[GitHub: your-org/hd-eui](https://github.com/your-org/hd-eui)

For questions, open an issue or visit our docs (coming soon).
```
<file_path>my-hd-eui-library\README.md</file_path>  
<edit_description>
Create README for the library
</edit_description>