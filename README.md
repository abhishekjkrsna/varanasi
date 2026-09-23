# Varanasi

A small travel website for exploring Varanasi, with sections for the city, places to visit, and a slow-travel itinerary experience. The project is built as a responsive React app with Vite and Tailwind CSS.

## Features

- Responsive landing page and city guide layout
- About page for the history and feel of Varanasi
- Places-to-visit section with curated recommendations
- Optimized local image assets for a lighter static build
- Prerendered static output for deployment-friendly performance

## Tech Stack

- React
- React Router
- Vite
- Tailwind CSS
- Sharp for asset optimization

## Project Structure

- `src/` — application source code and page components
- `public/images/` — static and optimized image assets
- `scripts/` — build-time asset and prerender utilities
- `site.config.js` — base site configuration
- `vite.config.js` — Vite configuration

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the local development server:

   ```bash
   pnpm dev
   ```

3. Open the local URL shown in the terminal (typically Vite's default local preview URL).

## Available Scripts

```bash
pnpm dev       # run the Vite development server
pnpm build     # produce the optimized static site and prerendered output
pnpm preview   # preview the production build locally
pnpm assets    # optimize images before build/dev
```

## Build Notes

This project includes a production build pipeline that:

- optimizes images,
- bundles the frontend,
- generates server-rendered output,
- verifies the static site output before finishing the build.

## License

This project does not currently include a license file. If you plan to publish or share it publicly, add a license that matches your intended usage.
