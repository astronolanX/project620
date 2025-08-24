# Portfolio & Blog

A modern, responsive portfolio website built with Astro, showcasing projects,
blog posts, case studies, and creative explorations with a unique eye chart
interface design.

## Features

- Unique eye chart homepage design with chromatic aberration effects
- Slide-up bottom drawer navigation with dark theme
- Responsive design with fluid scaling using CSS clamp()
- Touch gesture support for mobile interactions
- Static site generation with fast loading times
- Blog with modern typography and code syntax highlighting

## Tech Stack

- **Astro** - Static site generator with component-based architecture
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing with Autoprefixer

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```text
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── EyeChart.astro
│   │   └── BottomDrawer.astro
│   ├── layouts/         # Layout templates
│   │   └── Layout.astro
│   ├── pages/           # Route definitions
│   │   ├── blog/
│   │   └── index.astro
│   └── styles/          # Global CSS and Tailwind imports
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind configuration
└── postcss.config.js    # PostCSS configuration
```

## License

ISC
