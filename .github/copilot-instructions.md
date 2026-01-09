## Repo snapshot (big picture)

- Vite + React + TypeScript single-page app scaffolded with shadcn-ui and Tailwind.
- UI primitives/components live under `src/components/ui/*` (e.g. `toaster.tsx`, `sonner.tsx`, `tooltip.tsx`).
- Pages are in `src/pages/*` and wired in `src/App.tsx` via `react-router-dom`.
- Sanity dataset and related config live in `fernando-dataset/` (schemas in `fernando-dataset/schemaTypes`).

## Quick dev / build commands (exact)
- Install: `npm i`
- Dev server: `npm run dev` (Vite serves on port 8080 per `vite.config.ts`)
- Build: `npm run build` (also `npm run build:dev` for development-mode build)
- Preview a production build locally: `npm run preview`
- Lint: `npm run lint`

When running locally expect imports using the alias `@` to resolve to `./src` (see `vite.config.ts`).

## Key patterns and conventions for edits
- Components: add presentational or small stateful UI in `src/components/`. Put reusable primitives in `src/components/ui/`.
  - Example: `src/components/ui/toaster.tsx` is the app's toast wrapper; other pages import `@/components/ui/toaster`.
- Pages & routes: update `src/pages/*` and add a route in `src/App.tsx`. Keep the comment ordering: "ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL '*' ROUTE".
  - Example: to add `/contato`, add `src/pages/Contato.tsx` and in `App.tsx` add <Route path="/contato" element={<Contato/>} /> above the `*` route.
- Styling: Tailwind is used. Global CSS lives in `src/index.css` and Tailwind config is `tailwind.config.ts`.

## Integrations and side-effects to be aware of
- `lovable-tagger` is enabled as a Vite plugin only in development (see `vite.config.ts`). Avoid removing it unless necessary; it tags components for the Lovable platform.
- `@sanity/client` and the `fernando-dataset/` folder indicate a headless CMS integration. Schema files are under `fernando-dataset/schemaTypes/`.
- React Query is used globally (`src/App.tsx` wraps the app with `QueryClientProvider`). Use `@tanstack/react-query` patterns for server state and caching.

## File import & module resolution
- Code uses the alias `@` for `src` (e.g. `@/components/ui/toaster`). Prefer this alias for consistency.
- Files use `.tsx` extension explicitly in some imports (e.g. `import App from './App.tsx'`); keep the same style when adding new top-level imports to avoid cross-platform path resolution quirks.

## Safe edit checklist for AI changes
1. Update or add files under `src/` only. If you must change `index.html` (SEO/meta), confirm with a human — it contains deliberate Portuguese SEO content.
2. Keep `@` alias imports consistent. If you rename a file, update all imports under `src/`.
3. When adding routes: modify `src/pages/*` and `src/App.tsx` and ensure route is above the `*` catch-all.
4. Run `npm run dev` after changes to validate the Vite dev server compiles and HMR works.

## Examples to reference in edits
- Add a toast: check `src/components/ui/toaster.tsx` and `src/components/ui/sonner.tsx`.
- Router pattern: `src/App.tsx` (routes + note about catch-all order).
- Vite plugin and alias: `vite.config.ts`.

## What NOT to change without confirmation
- Do not change the `fernando-dataset/` Sanity schemas or `sanity.config.ts` without discussing CMS changes.
- Avoid mass reformatting or renaming UI primitives inside `src/components/ui/` — many files import those directly.

## If tests or linting are needed
- There are no test scripts in `package.json`. Linting is available (`npm run lint`) — run it after changes.

---
If anything in this guidance is unclear or you'd like the AI to follow stricter rules (e.g., always open a PR, include unit tests, or run a local build), tell me which sections to expand or tighten and I'll update this file.
