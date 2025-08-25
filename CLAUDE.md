# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro-based portfolio and blog website with unique eye chart interface design, showcasing projects, blog posts, and case studies with chromatic aberration effects.

## Commands

```bash
npm run dev       # Start Astro development server
npm run build     # Build static site for production  
npm run preview   # Preview production build locally

npx @astrojs/check                           # Run TypeScript type checking
npx markdownlint-cli2 "src/content/**/*.md"  # Lint markdown content files
```

Note: No test framework configured - TypeScript checking via @astrojs/check only.

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

- **EyeChart.astro**: Main interface extracting 5 letters from content titles, chromatic aberration effects (red/cyan shadows)
- **BottomDrawer.astro**: Dark-themed slide-up navigation with touch gestures
- **Layout.astro**: Base layout loading Google Fonts (Neue Haas Grotesk Bold, Evolve Sans)

### Build Configuration

- Static site generation with directory URLs (`astro.config.mjs`)
- Tailwind CSS integration via @astrojs/tailwind
- CSS code splitting and custom asset naming in `_astro/` directory
- PWA support with service worker (`public/sw.js`)

## Critical Design Rules

### Theme Requirements

- Main site: Light theme with pink/white checkerboard background pattern
- Bottom drawer: Dark theme (rgba(15,15,15,0.98) background, white text)
- Eye chart letters: **MUST preserve chromatic aberration effect** (red/cyan text shadows)
- Typography: Neue Haas Grotesk Bold for eye chart, Evolve Sans for body text

### Component Behavior

- Eye chart uses fluid clamp() scaling for all dimensions
- Bottom drawer integrated with sticky footer navigation
- All interactive components use vanilla JavaScript in `<script>` tags
- Content-driven: Eye chart dynamically populated from collection titles
