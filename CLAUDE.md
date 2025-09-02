# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based portfolio website featuring a classified document aesthetic with microblog homepage, project showcase pages, and fixed left navigation.

## Commands

```bash
npm run dev       # Start Astro development server at http://localhost:4321
npm run build     # Build static site for production  
npm run preview   # Preview production build locally

npx astro check                              # TypeScript type checking
npx markdownlint-cli2 "src/content/**/*.md"  # Lint markdown content files
```

Note: No test framework configured - TypeScript checking via `astro check` only.

## Architecture

### Content Collections (`src/content/config.ts`)

- **projects**: Classified document format with fields:
  - classification, department, subject, date, reference
  - number (1-3) for navigation mapping
  - distributionList (optional)
  
- **microblog**: Homepage blog posts with title, date, optional tags

### Navigation System

**LeftNav.astro** - Fixed left sidebar (88px wide, 72px mobile):

- Home link: "N/N" initials with active state highlighting (#c6ff00 background when active)
- Project numbers (1-3) mapped to specific slugs:
  1. `future-design`
  2. `ux-patterns`
  3. `spatial-interfaces`
- Archive folder icon linking to `/archive`
- Footer toggle (info icon) controlling StickyFooter visibility
- Persistent state management across page transitions via `window.menuState`
- Loading indicator during navigation
- Click animations: `scaleIn`, `clickPulse`, `shrink`

### Page Routing

- `/` - Homepage with microblog entries
- `/archive` - All projects listing
- `/projects/[...slug]` - Individual project pages with:
  - Classified document header styling
  - Declassify/classify toggle functionality
  - Bento grid content layout
  - Page number indicator (e.g., /1, /2, /3)

### State Management

- Global `window.menuState` object maintains footer visibility across SPA navigation
- View Transitions API for smooth page changes
- Service worker (`public/sw.js`) with caching strategies:
  - Network-first for pages
  - Cache-first for static assets (images, fonts)
  - Stale-while-revalidate for JS/CSS

### Styling Architecture

- Tailwind CSS for utility classes
- Global styles in `src/styles/global.css`
- CSS custom properties for theming and viewport height (`--vh`)
- Responsive scaling with breakpoint at 768px
- Animation classes: `scaleIn`, `clickPulse`, `shrink`
- Z-index layers: Navigation (1000), Loading bar (10001)

### JavaScript Patterns

- Vanilla JavaScript in Astro `<script>` tags
- Event-driven architecture with custom events (e.g., 'footer-close')
- Astro lifecycle hooks: `astro:page-load`, `astro:before-swap`, `astro:after-swap`
- iOS viewport height fixes with custom `--vh` property calculated on resize

## Critical Implementation Details

### Build Configuration

```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name].[hash][extname]',
          chunkFileNames: '_astro/[name].[hash].js',
          entryFileNames: '_astro/[name].[hash].js'
        }
      }
    }
  }
});
```

### TypeScript Configuration

- Strict mode enabled via Astro's strict config
- Path alias `@/*` mapped to `src/*` directory
- TypeScript 5.9.2 for type checking

### Performance Optimizations

- Single consolidated Google Fonts request (Roboto family)
- LineIcons from CDN for icon library
- PWA with offline support via service worker
- View Transitions for instant navigation
- Navigation preloading in service worker
- GPU acceleration for navigation elements via `translateZ(0)`

## Component Structure

### Core Components
- `src/components/LeftNav.astro` - Fixed navigation sidebar
- `src/components/StickyFooter.astro` - Toggleable footer section
- `src/layouts/Layout.astro` - Base layout wrapper
- `src/pages/index.astro` - Homepage with microblog
- `src/pages/archive.astro` - Projects archive
- `src/pages/projects/[...slug].astro` - Dynamic project pages
