# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based portfolio website featuring a classified document aesthetic with microblog homepage, project showcase pages, and fixed left navigation with logmar scaling effects.

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

**LeftNav.astro** - Fixed left sidebar (80px wide, 64px mobile):
- Home link: "NLN" initials with active state highlighting
- Project numbers (1-3) mapped to specific slugs:
  1. `future-design`
  2. `ux-patterns` 
  3. `spatial-interfaces`
- Archive folder icon linking to `/archive`
- Footer toggle (© icon) controlling StickyFooter visibility
- Persistent state management across page transitions
- Loading indicator during navigation

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
  - Cache-first for static assets
  - Stale-while-revalidate for JS/CSS

### Styling Architecture

- Tailwind CSS for utility classes
- Global styles in `src/styles/global.css`
- CSS custom properties for theming
- Chromatic aberration effects via text shadows
- Responsive scaling (80% on mobile via CSS)
- Animation classes: `scaleIn`, `clickPulse`, `shrink`

### JavaScript Patterns

- Vanilla JavaScript in Astro `<script>` tags
- Event-driven architecture with custom events (e.g., 'footer-close')
- Astro lifecycle hooks: `astro:page-load`, `astro:before-swap`, `astro:after-swap`
- iOS viewport height fixes with custom `--vh` property

## Critical Implementation Details

### Build Configuration

```javascript
// astro.config.mjs
- Static output with directory format URLs
- Tailwind integration
- CSS code splitting enabled
- Assets output to `_astro/` directory
```

### Performance Optimizations

- Single consolidated Google Fonts request (Roboto family)
- Font Awesome icons loaded from CDN
- PWA with offline support via service worker
- View Transitions for instant navigation
- Navigation preloading in service worker