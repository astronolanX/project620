# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based portfolio and blog website using Tailwind CSS for styling. The site showcases projects, blog posts, case studies, and creative explorations.

## Commands

- `npm run dev` - Start the Astro development server
- `npm run build` - Build the static site for production
- `npm run preview` - Preview the production build locally

## Tech Stack

- Astro - Static site generator with component-based architecture
- Tailwind CSS - Utility-first CSS framework
- PostCSS - CSS processing with Autoprefixer

## Architecture

The project uses Astro's component-based architecture:

- **Pages** (`src/pages/`) - Astro page components that define routes
- **Components** (`src/components/`) - Reusable Astro components (Navigation, Hero, Footer, etc.)
- **Layouts** (`src/layouts/`) - Layout templates wrapping page content
- **Styles** (`src/styles/`) - Global CSS and Tailwind imports

The site is configured for static output with directory-based URLs (see `astro.config.mjs`).

## Design System Rules

**IMPORTANT: These theming rules must be maintained unless explicitly overridden:**

### Theme Guidelines
- **Main site/eye chart**: Always light theme (white background, black text)
- **Bottom drawer menu**: Always dark theme (dark background ~rgba(15,15,15,0.98), white text)
- **Eye chart letters**: ALWAYS include chromatic aberration effect (red/cyan text shadows for double vision aesthetic) - THIS IS PERSISTENT AND MUST NEVER BE REMOVED
- **Eye chart font**: Must use 'Silkscreen' font from Google Fonts for the pixel/tech aesthetic
- **Aspect ratio**: Dynamic - always taller than wide, adapts to orientation
- **Bottom row**: "SEE MORE" black button serves as drawer trigger

### Component Integrity
- Eye chart maintains fluid responsive scaling using clamp() for all dimensions
- Bottom drawer slides up with smooth animations and touch gestures
- No side measurements on eye chart (removed for cleaner appearance)
- Drawer includes navigation (Blog, About, Contact) and contact links with hover effects
