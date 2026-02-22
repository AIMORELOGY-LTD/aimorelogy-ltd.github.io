# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript site. Entry points are `index.tsx` and `App.tsx` (route wiring). Keep feature code close to its domain:
- `pages/`: route-level screens (for example `ProductDetail_STM.tsx`).
- `components/`: reusable UI/layout blocks (`Header.tsx`, `Seo.tsx`).
- `data/`: product/content datasets used by pages.
- `locales/`: translation dictionaries (`en.json`, `zh.json`, `ru.json`).
- `utils/`: integrations/helpers (for example `utils/emailjs.ts`).
- `scripts/`: build-time Node scripts (`generate-sitemap.mjs`, `prerender.mjs`).
- `public/`: static assets and SEO files; `dist/` is generated output.

## Build, Test, and Development Commands
Use npm with the committed lockfile:
- `npm ci`: install exact dependencies.
- `npm run dev`: start local Vite dev server.
- `npm run build`: production build (runs `prebuild` sitemap generation first).
- `npm run sitemap`: regenerate `public/sitemap.xml` manually.
- `npm run prerender`: render route HTML into `dist/` (requires Chrome; set `CHROME_BIN` if needed).
- `npm run preview`: serve built output for local verification.

## Coding Style & Naming Conventions
Follow existing TypeScript/React conventions:
- 2-space indentation, single quotes, semicolons.
- PascalCase for React files/components (`SolutionDetail_AICamera.tsx`).
- camelCase for variables/functions; UPPER_SNAKE_CASE for constants.
- Keep language routing and translations in sync when adding locales: update `App.tsx`, `i18n-routing.ts`, and `locales/*.json`.
- Prefer small, focused components and keep route-specific logic in `pages/`.

## Testing Guidelines
There is currently no dedicated unit-test framework or `npm test` script. Baseline validation is smoke testing:
- Run `npm run build` and `npm run prerender` before opening a PR.
- Run `npm run preview` and verify `/en`, `/zh`, and `/ru` routes, core navigation, and SEO-critical pages.
- If introducing tests, use `*.test.ts` / `*.test.tsx` naming and place tests near the code they cover.

## Commit & Pull Request Guidelines
Recent commits use concise imperative subjects (for example: `Add Instagram link to footer socials`, `Fix Chinese partner name in LLM data`).
- Format commit subjects as `Verb + target + outcome`.
- Keep subject lines short and specific.
- PRs should include: change summary, affected routes/locales, screenshots for UI edits, and linked issue/ticket when available.
- Call out SEO/deploy-impacting changes explicitly (sitemap, prerender, metadata, robots files).
