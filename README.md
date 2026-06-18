# Day One Movement

Website for the Day One Movement — built with React, Vite, Tailwind CSS, and deployed on Cloudflare Pages.

## Getting started

```bash
git clone git@github.com:dayonemovement/dayonemovement.github.io.git
cd dayonemovement.github.io
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build for production to `dist/` |
| `npm run preview` | Build and preview with Wrangler locally |
| `npm run deploy` | Build and deploy manually to Cloudflare Pages |
| `npm run lint` | Run ESLint |

## Deployment

Pushes to `main` trigger automatic deployments via the Cloudflare Pages Git integration. Manual deploys can be triggered with `npm run deploy`.

## Stack

- [React 19](https://react.dev) — UI
- [Vite](https://vite.dev) — build tool
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Framer Motion](https://motion.dev) — animations
- [React Router v7](https://reactrouter.com) — routing
- [React Leaflet](https://react-leaflet.js.org) — events map
- [Cloudflare Pages](https://pages.cloudflare.com) — hosting

## Project structure

**Pages** live in `src/pages/` — one file per route, keep them thin. Pages import components and pass data down; they don't contain layout or animation logic directly.

**Components** live in `src/components/` — reusable, single-responsibility. If a component is only ever used in one page it can still live here; the goal is to keep pages readable at a glance.

**Data** lives in `src/data/` as plain JS files exporting arrays or objects. No API calls at the data layer — if that changes, introduce a `src/services/` folder rather than putting fetch logic inside components.

**Hooks** live in `src/hooks/` — custom React hooks only, prefixed with `use`.

**Assets** (images, icons) live in `src/assets/` and are imported directly in components. Optimize images before committing — large files slow down builds and page loads.

## Contributing

Changes are deployed automatically when merged into `main`. The workflow is:

1. Fork the repo on GitHub — click **Fork** at the top right of the repo page
2. Clone your fork
```bash
git clone git@github.com:your-username/dayonemovement.github.io.git
cd dayonemovement.github.io
npm install
```
3. Make your changes and commit
```bash
git add .
git commit -m "describe what you changed"
git push origin main
```
4. Open a pull request — go to the original repo on GitHub, click **Compare & pull request**, add a description of what you changed and why, then submit.
5. Once the PR is reviewed and merged, Cloudflare Pages automatically builds and deploys the site within a minute or two.

## Conventions

- Dark editorial aesthetic — maintain the existing color palette and typography. Avoid introducing new colors or font weights without a clear reason.
- Animations use Framer Motion. Avoid `vh` units for fixed-height elements on mobile — use `window.innerHeight` locked on mount via a CSS custom property instead.
- Tailwind v4 only — no arbitrary CSS files outside `index.css` unless there's a strong reason.
- Component filenames are PascalCase. Everything else is camelCase.
- Keep commits scoped — one logical change per commit, written as an imperative (`add events map`, not `added events map`).