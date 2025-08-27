# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based portfolio website featuring a microblog-style homepage with project showcase and floating navigation menu with logmar scaling.

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

### Content System

Two content collections defined in `src/content/config.ts`:
- **projects**: Portfolio items with title, subtitle, year, type, number (1-3), and color variations
- **microblog**: Blog posts with title, date, and optional tags for the homepage

Dynamic routing:
- `src/pages/projects/[...slug].astro` → Renders individual project pages with bento grid layout

### Core Components

- **LeftNav.astro**: Fixed left-side navigation with:
  - Home link with initials "NLN"
  - Numbered project links (1-3) mapped to specific slugs
  - Archive folder icon
  - Footer toggle with copyright icon
  - Active state highlighting based on current route

- **StickyFooter.astro**: Footer triggered by LeftNav toggle

- **Layout.astro**: Base layout providing:
  - Roboto font family (normal, mono, and Material Icons)
  - PWA with service worker
  - Loading overlay with fade transition
  - Scroll restoration management

### Page Structure

- **index.astro**: Homepage with title, intro text, and reverse-chronological microblog list
- **archive.astro**: Archive page listing all projects
- **projects/[...slug].astro**: Individual project pages with bento grid layout

### Build Configuration

- Static site generation with directory URLs
- Tailwind CSS integration
- CSS code splitting with assets in `_astro/` directory
- PWA support via `public/sw.js` service worker
- TypeScript path alias: `@/*` → `src/*`

## Critical Implementation Details

### Project Number Mapping

LeftNav numbers correspond to specific project slugs:
1. future-design
2. ux-patterns
3. spatial-interfaces

### Styling Approach

- Global styles in `src/styles/global.css`
- CSS custom properties for colors and consistent theming
- Chromatic aberration effects via text-shadow and color offsets
- Logmar scaling effect on LeftNav hover states

### JavaScript Patterns

- All interactive behavior uses vanilla JavaScript in Astro `<script>` tags
- Service worker handles offline caching with network-first strategy for pages
- Navigation preloading for smooth transitions between project pages

### Performance Considerations

- Single Google Fonts request consolidating all font families
- Optimized Material Icons usage (single variant)
- CSS code splitting enabled in Vite configuration
- Inline critical styles for faster initial paint