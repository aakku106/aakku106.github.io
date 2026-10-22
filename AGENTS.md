# AGENTS.md

Static portfolio site (vanilla HTML/SCSS/JS) deployed by GitHub Pages from the repo root. No framework, bundler, tests, lint, or CI.

## Commands

- Preview: `python3 -m http.server 8000` from the **repo root**, then open `http://localhost:8000`. Subpages use root-absolute paths (`/style/style.css`), so opening files via `file://` or serving from `style/` breaks assets.
- Compile styles: `npx sass style/style.scss style/style.css`. `sass` is not a devDependency and no npm script compiles SCSS; `npm run build:css` only minifies the already-compiled CSS.
- `npm run build:css|js|html` / `npm run build` produce `.min.*` files. No live HTML references them, so they are optional and not part of deployment.

## Where to edit

- Work at the repo root. `src/` is a tracked but stale snapshot of the site; build scripts and GitHub Pages use the root copies. Do not edit or sync `src/` unless asked.
- Styles: edit `style/*.scss`, compile to the checked-in `style/style.css`, and commit both. Every page links `style/style.css`; `style.min.css` is unused.
- Desktop nav is injected by JS in `js/navBar.js/`: root page uses `NavBarLanding.js`, subpages use `NavBarPages.js`, with different relative paths. Update both for nav changes.
- Mobile nav markup is duplicated in each `index.html`; there is no HTML templating step.
- `js/script.js` (mobile menu, "Remember me" localStorage) is loaded only by the root `index.html`. Subpages inline their own copies of the mobile-menu handlers, so update every copy when changing the menu.
- New pages should include `js/structuredData.js`; it selects JSON-LD type from the URL (`about`, `portfolio`, `contact`, default profile). See `STRUCTURED_DATA_GUIDE.md`.
- Contact form posts directly to Formspree from `pages/contact/index.html`; there is no backend.
- `sitemap.xml` includes URLs for sibling subdomains/projects not present in this repo (e.g. `archive.`, `medfree.`); do not remove them as dead links.

## Deploy

- Push to `main`; GitHub Pages serves the repo root (`.nojekyll`, `CNAME` → `www.adarashagaihre.com.np`). No build step is required.
- `README.md` is UTF-16LE with CRLF line endings. Preserve that encoding if editing it.
