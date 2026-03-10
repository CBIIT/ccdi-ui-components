# CCDI UI Components Library

A comprehensive UI component library built with **React**, **TypeScript**, and **Storybook**, following the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) guidelines. This project demonstrates modern, accessible, and government-compliant web components.

🎯 **Now available as a shadcn-compatible registry!** Install individual components directly into your projects. See [REGISTRY_USAGE.md](./REGISTRY_USAGE.md) for details.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
# Start Storybook development server
npm run dev
# Opens http://localhost:6006
```

### Testing

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Run a specific component test
npm run test -- src/test/icon.test.tsx

# Run Storybook interaction tests
npm run test:storybook
```

### Building

```bash
# Build Storybook for production
npm run build

# Build component registry for sharing
npm run registry:build
```

## 📖 Documentation

- **Live Storybook**: [https://cbiit.github.io/ccdi-ui-components/](https://cbiit.github.io/ccdi-ui-components/) - Production component documentation (latest from `main`)
- **Storybook UI**: [http://localhost:6006](http://localhost:6006) - Interactive component documentation
- **Registry Guide**: See [REGISTRY_USAGE.md](./REGISTRY_USAGE.md) for using components as a registry
- **Setup Guide**: See [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md) for detailed Storybook usage

**Versioning:** The site serves the latest version at the root and older versions under version paths (e.g. `/v1.0.0/` for the `v1.0.0` branch). Consumers can pin a version by using a versioned registry URL in `components.json` (see the Installation section in Storybook).

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # Basic UI components
│   │   ├── accordion.tsx      # Expandable content panels
│   │   ├── alert.tsx          # Status notifications
│   │   ├── badge.tsx          # Status indicators
│   │   ├── button.tsx         # 8 button variants
│   │   ├── card.tsx           # Content containers
│   │   ├── checkbox.tsx       # Form checkboxes
│   │   ├── dialog.tsx         # Modal dialogs
│   │   ├── form.tsx           # Form components
│   │   ├── icon.tsx           # SVG icon system
│   │   ├── input.tsx          # Text inputs
│   │   ├── label.tsx          # Form labels
│   │   ├── pagination.tsx     # Page navigation
│   │   ├── radio-group.tsx    # Radio button groups
│   │   ├── search.tsx         # Search inputs
│   │   ├── select.tsx         # Dropdown selects
│   │   ├── separator.tsx      # Visual dividers
│   │   └── table.tsx          # Data tables
│   └── blocks/                # Complex layout components
│       ├── footer.tsx         # Site footer
│       ├── header.tsx         # Navigation header
│       └── in-page-navigation.tsx  # Section navigation
├── stories/                   # Storybook documentation
├── styles/
│   └── globals.css           # USWDS-compliant styles
├── test/                      # Unit tests
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Components Overview

### UI Components

#### Form Components
- **Button** - 8 variants (primary, secondary, outline, success, warning, danger, ghost, link)
- **Input** - Text inputs with validation and accessibility
- **Select** - Dropdown selectors with keyboard navigation
- **Checkbox** - Accessible checkbox inputs
- **Radio Group** - Radio button groups with proper ARIA
- **Label** - Form labels with proper associations
- **Search** - Search input with icon and submit button

#### Display Components
- **Alert** - Status notifications (info, success, warning, error)
- **Badge** - Status indicators and labels
- **Card** - Content containers with header/footer
- **Icon** - SVG icon system with USWDS icons
- **Separator** - Visual dividers and section breaks
- **Table** - Data tables with sorting and styling

#### Interactive Components
- **Accordion** - Expandable/collapsible content panels
- **Dialog** - Modal dialogs and popups
- **Pagination** - Page navigation controls

#### Layout Components
- **Form** - Form wrapper with proper structure

### Block Components (3 Complex Components)
- **Header** - Full navigation header with dropdown menus, search, and mobile support
- **Footer** - Site footer with multi-column layout
- **In-Page Navigation** - Sticky section navigation for long pages

## ♿ Accessibility Features

✅ **WCAG 2.1 AA Compliance** - All components tested with Storybook's a11y addon  
✅ **Keyboard Navigation** - Full keyboard support (Tab, Enter, Arrow keys, Escape)  
✅ **ARIA Labels** - Proper semantic markup and screen reader support  
✅ **Focus Management** - Visible focus indicators and logical tab order  
✅ **Color Contrast** - USWDS-compliant color palette for accessibility  

## 🧪 Testing Strategy

- **Unit Tests** - Component logic and props with Vitest
- **Accessibility Tests** - Automated a11y testing with `@storybook/addon-a11y`
- **Visual Regression** - Story-based visual testing support

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript 5** - Full type safety
- **Storybook 9.1** - Component development environment
- **Tailwind CSS 4** - USWDS-compliant utility-first styling
- **Radix UI** - Accessible component primitives
- **Vitest** - Fast unit testing
- **Class Variance Authority** - Type-safe variant styling

## 📚 USWDS Compliance

This project follows USWDS standards for:
- **Typography** - Public Sans, Open Sans, Source Sans 3, Merriweather, Roboto Mono
- **Color System** - Government-approved color palette
- **Spacing** - Consistent 8px grid system
- **Components** - Pattern library based on USWDS components
- **Accessibility** - Section 508 and WCAG 2.1 AA compliance

## 🚀 Getting Started for Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ccdi-ui-components
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **Open Storybook**
   Navigate to [http://localhost:6006](http://localhost:6006)

## 📝 Adding New Components

1. Create component in appropriate directory (`/ui` or `/blocks`)
2. Add TypeScript interfaces and variants using `class-variance-authority`
3. Create comprehensive `.stories.tsx` file with:
   - All variants and states
   - Accessibility tests
   - Documentation
4. Add unit tests if needed
5. Ensure USWDS compliance

See [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md) for detailed component development workflow.

## 🤝 Contributing

This project serves as a reference implementation for USWDS-compliant React components. Contributions should maintain:
- Accessibility standards (WCAG 2.1 AA)
- USWDS design compliance
- TypeScript type safety
- Comprehensive testing
- Clear documentation

## 📄 License

This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).