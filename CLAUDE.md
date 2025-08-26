# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based portfolio and blog website with unique eye chart interface design, showcasing projects, blog posts, and case studies with chromatic aberration effects.

## Commands

```bash
npm run dev       # Start Astro development server
npm run build     # Build static site for production  
npm run preview   # Preview production build locally

npx astro check                              # Run TypeScript type checking
npx markdownlint-cli2 "src/content/**/*.md"  # Lint markdown content files
```

Note: No test framework configured - TypeScript checking via `astro check` only.

## Architecture

### Content Collections System

Three content collections defined in `src/content/config.ts` with Zod schemas:

- **blog**: Articles with title, description, pubDate, tags, heroImage, author
- **projects**: Portfolio items with year, type, featured flag
- **case-studies**: Detailed work with client, timeline, role, team metadata

Dynamic routing via:

- `src/pages/blog/[...slug].astro` → BlogPost layout
- `src/pages/projects/[...slug].astro` → ProjectPost layout
- `src/pages/case-studies/[...slug].astro` → CaseStudy layout

### Core Components

- **FloatingMenu.astro**: Fixed navigation menu with logmar scaling effect, dynamically sized numbered navigation (1-5), integrated archive section, and smooth page transitions with preloading
- **StickyFooter.astro**: Footer component with navigation and contact links
- **Layout.astro**: Base layout loading Roboto font family, PWA setup, simplified loading overlay

### Optimized Structure

- **Removed redundancies**: Deleted unused EyeChart.astro, BottomDrawer.astro, Header.astro components and duplicate index.css file
- **Consolidated styles**: Streamlined CSS selectors and removed unused style classes
- **Simplified loading**: Clean loading overlay with fade transition
- **Optimized font loading**: Single consolidated Google Fonts request for all font families

### Build Configuration

- Static site generation with directory URLs (`astro.config.mjs`)
- Tailwind CSS integration via @astrojs/tailwind
- CSS code splitting and custom asset naming in `_astro/` directory
- PWA support with service worker (`public/sw.js`)
- TypeScript path alias: `@/*` maps to `src/*`

## Critical Design Rules

### Theme Requirements

- Main site: Light theme with gray background pattern (CSS variables: --gray-100)
- Floating menu: Light theme with chromatic aberration effects on interactive elements
- Typography: Roboto family for all text, Roboto Mono for headings and code

### Component Behavior

- Floating menu features logmar scaling effect with active project highlighting
- Floating menu projects mapped to specific slugs: 1=future-design, 2=ux-patterns, 3=spatial-interfaces, 4=design-systems-scale, 5=micro-interactions
- SPA-style navigation with smooth content transitions on home page
- All interactive components use vanilla JavaScript in `<script>` tags
- Loading overlay simplified to basic fade transition (500ms delay)
- Consistent pointer cursor behavior enforced via global CSS for all interactive elements

### Performance Optimizations

- Single Material Icons font variant instead of five
- Simplified scroll restoration without multiple event handlers
- Consolidated duplicate email handling logic
- CSS custom properties for reusable patterns
- Dynamic content loading from collections instead of hardcoded data