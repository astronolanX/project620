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

## Tech Stack

- Astro - Static site generator with component-based architecture
- Tailwind CSS - Utility-first CSS framework
- PostCSS - CSS processing with Autoprefixer

## Architecture

The project uses Astro's component-based architecture with a unique
dual-interface design:

### Core Components

- **EyeChart.astro** - Main interface component featuring an eye chart layout
  with chromatic aberration effects
- **BottomDrawer.astro** - Slide-up navigation drawer with dark theme and
  touch gesture support
- **Layout.astro** - Base layout loading Google Fonts (Neue Haas Grotesk, Evolve Sans)
  and global styles

### File Structure

- **Pages** (`src/pages/`) - Route definitions including index and blog posts
- **Components** (`src/components/`) - Reusable Astro components (EyeChart,
  BottomDrawer)
- **Layouts** (`src/layouts/`) - Layout template with font loading and global
  styles
- **Styles** (`src/styles/`) - Tailwind imports and custom utilities

### Key Architectural Patterns

- Static site generation with directory-based URLs (`astro.config.mjs`)
- Component-scoped CSS with global font declarations in Layout.astro
- Interactive drawer system with vanilla JavaScript touch/swipe handling
- Responsive eye chart scaling using CSS clamp() functions

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
