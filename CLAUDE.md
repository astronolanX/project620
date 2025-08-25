# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working
with code in this repository.

## Project Overview

This is an Astro-based portfolio and blog website using Tailwind CSS for
styling. The site showcases projects, blog posts, case studies, and creative
explorations built around a unique eye chart interface design.

## Commands

- `npm run dev` - Start the Astro development server
- `npm run build` - Build the static site for production
- `npm run preview` - Preview the production build locally
- `npx @astrojs/check` - Run TypeScript type checking (no test framework configured)
- `npx markdownlint-cli2 "src/content/**/*.md"` - Lint markdown files in content collections

## Tech Stack

- Astro - Static site generator with component-based architecture
- Tailwind CSS - Utility-first CSS framework
- PostCSS - CSS processing with Autoprefixer

## Architecture

The project uses Astro's content collections system with dynamic routing and a unique dual-interface design:

### Content Collections & Dynamic Routing

The site is built around Astro's content collections (`src/content/config.ts`) with type-safe schemas:
- **Blog** (`src/content/blog/`) - Articles with title, description, pubDate, tags, heroImage, and author
- **Projects** (`src/content/projects/`) - Portfolio items with year, type, featured flag
- **Case Studies** (`src/content/case-studies/`) - Detailed breakdowns with client, timeline, role, team info

Dynamic routes handle content rendering:
- `src/pages/blog/[...slug].astro` - Blog post pages using BlogPost layout
- `src/pages/projects/[...slug].astro` - Project pages using ProjectPost layout  
- `src/pages/case-studies/[...slug].astro` - Case study pages using CaseStudy layout

### Core Components & Layouts

- **EyeChart.astro** - Main interface component with chromatic aberration effects and content-driven letter extraction
- **BottomDrawer.astro** - Slide-up navigation drawer with dark theme and touch gestures
- **Header.astro** & **StickyFooter.astro** - Navigation components
- **Layout.astro** - Base layout with Google Fonts (Neue Haas Grotesk, Evolve Sans) and global styles
- **BlogPost.astro**, **ProjectPost.astro**, **CaseStudy.astro** - Content-specific layouts

### Key Architectural Patterns

- Content collections with Zod schema validation for type safety
- Dynamic slug-based routing for all content types
- Static site generation with directory-based URLs (`astro.config.mjs`)
- Content-driven eye chart: Extracts 5 letters from collection titles to populate chart rows
- Component-scoped CSS with global font declarations
- Interactive drawer system with vanilla JavaScript touch/swipe handling
- Build optimization: CSS code splitting, custom asset naming, inlined stylesheets

## Design System Rules

**IMPORTANT: These theming rules must be maintained unless explicitly
overridden:**

### Theme Guidelines

- **Main site/eye chart**: Always light theme with subtle pink checkerboard
  pattern background
- **Bottom drawer menu**: Always dark theme (dark background
  ~rgba(15,15,15,0.98), white text)
- **Eye chart letters**: ALWAYS include chromatic aberration effect (red/cyan
  text shadows for double vision aesthetic) - THIS IS PERSISTENT AND MUST NEVER
  BE REMOVED
- **Eye chart font**: Must use 'Neue Haas Grotesk' font (Bold weight) from Google Fonts for clean,
  modern aesthetic
- **Body copy font**: Must use 'Evolve Sans' font for all body text,
  interactive elements, and UI components
- **Background pattern**: Subtle pink/white checkered pattern using CSS
  gradients with responsive scaling
- **Aspect ratio**: Dynamic - always taller than wide, adapts to orientation
- **Bottom row**: "SEE MORE" black button serves as drawer trigger

### Component Integrity

- Eye chart maintains fluid responsive scaling using clamp() for all dimensions
- Bottom drawer slides up with smooth animations and touch gestures
- No side measurements on eye chart (removed for cleaner appearance)  
- Drawer includes navigation (Blog) and contact links with hover effects

## Development Guidelines

- TypeScript checking: Use `@astrojs/check` for type validation (included in devDependencies)
- Component structure: All interactive components use vanilla JavaScript/TypeScript within `<script>` tags
- Astro static generation: Site uses `output: 'static'` with directory-based URLs
- Font loading: Google Fonts (Neue Haas Grotesk, Evolve Sans) loaded through `Layout.astro`
- Content linting: markdownlint-cli2 available for markdown validation
- Static assets and resume stored in `public/assets/`
- PWA features: Service worker (sw.js) and web manifest configured
- Build optimization: CSS code splitting enabled with custom asset naming patterns in astro.config.mjs
