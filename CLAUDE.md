# Project Instructions - farleir.github.com

## Tech Stack
- **Framework**: Astro 6.x (configured with Tailwind CSS and Sitemap integrations)
- **Styling**: Tailwind CSS (CDN in legacy pages, Tailwind package in Astro pages)
- **Deployment**:
  - **GitHub Pages**: Serves `master` branch at `farleir.com` / `www.farleir.com` (Legacy portfolio)
  - **Cloudflare Pages**: Serves `gh-pages` branch at `dev.farleir.com` / `farleir-github-com.pages.dev`
- **Asset/Routing Override**: Static legacy files placed in `public/` (e.g. `public/index.html`, `public/images/`) take precedence over compiled Astro routes in `src/pages/` during the Astro build step.

## Branch Strategy & Environment Setup
- **`master` branch**: Contains the legacy single-page portfolio. Hosted on GitHub Pages.
- **`gh-pages` branch**: Contains the Astro-based hub project. Hosted on Cloudflare Pages.
- **Testing Copy**: To test SEO changes, WhatsApp link previews, and metadata updates before modifying `master` (production), we copy files from the `legacy/` directory to the Astro `public/` directory on the `gh-pages` branch. This makes `dev.farleir.com` render a copy of the portfolio page.
- **Local Paths Note**: Avoid running heavy Node operations or builds inside virtual directories (like Google Drive). Instead, clone/work on the local SSD path `C:\Repos\Pessoal\farleir.github.com\` if needed, or run light git operations in `i:\Meu Drive\Antigravity\farleir.github.com`.

## Code Style & SEO Guidelines
- **Open Graph Previews**: Ensure all metadata uses standard high-quality Open Graph tags:
  ```html
  <meta property="og:image" content="https://www.farleir.com/images/og-image.png">
  <meta property="twitter:image" content="https://www.farleir.com/images/og-image.png">
  ```
  Avoid placing standard portrait/avatar images (like `farleir.jpg` or `avatar.png`) in the root or header in a way that indexers/scrapers (like WhatsApp's link preview generator) pick them up instead of the dedicated banner.
- **Asset Paths**: Use relative paths (e.g., `images/og-image.png`) for local assets loaded within HTML templates to maintain compatibility across different domains (`dev.farleir.com` and `farleir.com`).

## Common Tasks
- **Run dev server**: `npm run dev` (run inside repository directory)
- **Build Astro site**: `npm run build`
- **Synchronize legacy content**:
  `Copy-Item -Path "legacy/index.html" -Destination "public/index.html" -Force`
  `Copy-Item -Path "legacy/images/*" -Destination "public/images/" -Force`
