# AGENTS.md

Static portfolio site. `src/` is the editable source; the repo root is the generated, minified deploy copy served by GitHub Pages. No framework, tests, lint, or CI.

## Commands (run from the repo root)

- `npm install`
- `npm run build` — minifies `src/` into the root at identical paths and copies `src/pictures/` byte-for-byte. It deletes and recreates the generated root entries (`index.html`, `js/`, `pages/`, `pictures/`, `style/`).
- `npm run compile:scss` — compiles `src/style/style.scss` to `src/style/style.css`. Run this before `npm run build` whenever SCSS changes; the build itself does not compile SCSS.
- `npm run preview` or `python3 -m http.server 8000` — serve the repo root, not `src/`. Subpages use root-absolute paths (`/style/style.css`).

## Source vs generated output

- Edit code only under `src/`. Never edit the generated root copies of `index.html`, `js/`, `pages/`, `pictures/`, or `style/`; the next build overwrites them.
- Generated files keep the same paths and names as before; there are no `.min.*` filenames. Root `style/` contains only the minified `style.css`; SCSS and source maps live only in `src/style/`.
- Root-only files such as `README.md`, `CNAME`, `robots.txt`, `sitemap.xml`, `package.json`, and `scripts/` are not generated and are safe to edit in place.
- Commit the `src/` changes and the regenerated root output together. GitHub Pages serves the repo root from `main`; no build step runs there.

## App quirks

- Desktop nav is injected by `src/js/navBar.js/`: root page uses `NavBarLanding.js`, subpages use `NavBarPages.js`, with different relative paths. Update both for nav changes.
- Mobile nav markup and handlers are duplicated in each page, and `src/js/script.js` (mobile menu, "Remember me") is loaded only by the root page. Update every copy when changing the menu.
- New pages must load `src/js/structuredData.js`; it selects the JSON-LD type from the URL (`about`, `portfolio`, `contact`, default profile). See `STRUCTURED_DATA_GUIDE.md`.
- The contact form posts directly to Formspree from `src/pages/contact/index.html`; there is no backend.
- `sitemap.xml` includes sibling subdomain/project URLs not present in this repo; do not remove them as dead links.
- `README.md` is UTF-16LE with CRLF line endings. Preserve that encoding if editing it.
