# Copilot Instructions for Travel Gallery

A React travel destination gallery application built with Vite and styled with CSS.

## Build & Development Commands

### Development
- **Start dev server:** `npm run dev`
  - Runs Vite in watch mode at `http://localhost:5173` with HMR enabled
  - Changes to .jsx, .css, and .js files auto-refresh in browser

### Building & Preview
- **Build for production:** `npm run build`
  - Outputs to `/dist` directory
  - Creates optimized bundles suitable for deployment
- **Preview production build:** `npm run preview`
  - Serves built files locally to verify production output

### Linting
- **Lint all files:** `npm run lint`
  - Runs ESLint on all `.js` and `.jsx` files
  - Configured with React and React Hooks rules
  - Ignores `/dist` directory

## Architecture

### Technology Stack
- **React 19.2.4** - UI library with functional components
- **Vite 8.0.4** - Build tool and dev server
- **ESLint 9.39.4** - Code quality with React-specific rules
- **Modern ES modules** - All code uses `import`/`export` syntax

### Project Structure
```
src/
├── App.jsx          # Main component rendering gallery and content
├── main.jsx         # Entry point, bootstraps React app with StrictMode
└── index.css        # Global styles for layout, images, and hover effects

public/             # Static assets (if any)
vite.config.js      # Vite configuration with React plugin
eslint.config.js    # ESLint rules and config
```

### Component Architecture
- **Single-component design**: App.jsx is the only component
- **No state management**: Uses plain React (no Redux/Context)
- **External data**: Travel destination images are hardcoded with external URLs (imgur links)

## Key Conventions

### React & JSX
- Use **functional components** only (no class components)
- Component names use **PascalCase** (e.g., `App.jsx`)
- JSX returns single root element (typically a `<div>`)
- Store component images as JSX variables for organization before returning

### ESLint Rules
- Unused variables trigger errors UNLESS they follow pattern `[A-Z_]` (constants/constants)
- React Hooks rules enforced (dependency arrays checked)
- React Refresh compatibility required (fast refresh support)

### File Naming
- React components: `.jsx` extension
- Utility scripts: `.js` extension
- Styles: `.css` extension (one global index.css)

### CSS Styling
- Global styles in `src/index.css` using element and id selectors
- Use `object-fit: cover` for consistent image sizing
- Hover effects use CSS transitions (no JavaScript animations)
- Flexbox layout for gallery (ul with flex-wrap)
- Default color scheme supports light/dark mode via `color-scheme` property

### Development Practices
- Run `npm run lint` before committing to catch issues early
- Vite HMR handles live updates during development
- Always use `npm install` after pulling dependency changes
