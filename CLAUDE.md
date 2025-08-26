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

- **EyeChart.astro**: Dynamic eye chart interface that extracts 5 letters from content titles, features chromatic aberration effects, proximity-based clearing, idle glitch animations
- **FloatingMenu.astro**: Fixed navigation menu with logmar scaling effect, dynamically sized numbered navigation (1-5), integrated archive section, and smooth page transitions with preloading
- **BottomDrawer.astro**: Dark-themed slide-up navigation with touch gestures
- **StickyFooter.astro**: Footer component with navigation and contact links
- **Layout.astro**: Base layout loading Roboto font family, PWA setup, simplified loading overlay

### Optimized Structure

- **Removed redundancies**: Deleted unused Header.astro component and duplicate index.css file
- **Consolidated styles**: CSS variables for chromatic effects and checkerboard pattern in global.css
- **Dynamic content**: Eye chart now pulls from content collections instead of hardcoded data
- **Simplified loading**: Removed complex number animation in favor of simple fade overlay
- **Reduced font loading**: Only loads necessary Material Icons variant

### Build Configuration

- Static site generation with directory URLs (`astro.config.mjs`)
- Tailwind CSS integration via @astrojs/tailwind
- CSS code splitting and custom asset naming in `_astro/` directory
- PWA support with service worker (`public/sw.js`)
- TypeScript path alias: `@/*` maps to `src/*`

## Critical Design Rules

### Theme Requirements

- Main site: Light theme with pink/white checkerboard background pattern (CSS variables: --checkerboard-color: #ffc0cb)
- Floating menu: Dark theme (rgba(25,19,20,0.95) background, white text, blur backdrop)
- Bottom drawer: Dark theme (rgba(15,15,15,0.98) background, white text)
- Eye chart letters: **MUST preserve chromatic aberration effect** (var(--chromatic-red) and var(--chromatic-cyan))
- Typography: Roboto family for all text (body, menu, eye chart)

### Component Behavior

- Eye chart uses fluid clamp() scaling for all dimensions
- Eye chart dynamically populated from content collections
- Floating menu features logmar scaling effect with active project highlighting
- Floating menu projects mapped to specific slugs: 1=future-design, 2=ux-patterns, 3=spatial-interfaces, 4=design-systems-scale, 5=micro-interactions
- Bottom drawer integrated with sticky footer navigation  
- All interactive components use vanilla JavaScript in `<script>` tags
- Loading overlay simplified to basic fade transition (500ms delay)
- Proximity-based clearing effect on eye chart (150px threshold)
- Idle glitch animations after 3 seconds of inactivity
- Consistent pointer cursor behavior enforced via global CSS for all interactive elements

### Performance Optimizations

- Single Material Icons font variant instead of five
- Simplified scroll restoration without multiple event handlers
- Consolidated duplicate email handling logic
- CSS custom properties for reusable patterns
- Dynamic content loading from collections instead of hardcoded data