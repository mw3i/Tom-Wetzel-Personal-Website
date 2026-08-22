# Tom Wetzel — Website

Static Next.js site. Content lives in `data/` JSON files; the site rebuilds
and deploys on push to GitHub.

## Quick start

```bash
make install
make dev
```

Open http://localhost:3000

## Common commands

| Command | Description |
|---------|-------------|
| `make dev` | Local dev server with hot reload |
| `make build` | Production static export → `out/` |
| `make preview` | Build and serve `out/` locally |
| `make lint` | Run ESLint |

## Updating content

Edit JSON files in `data/`:

| File | Contents |
|------|----------|
| `site.json` | Name, title, tagline, contact email, social links |
| `book.json` | Book title, description, buy link, pull quote |
| `bio.json` | Bio summary, community policing philosophy, career timeline |
| `articles.json` | Articles written by/about Tom |
| `media.json` | News, podcast, and interview appearances |
| `images.json` | Image key → path map (place files in `public/`) |

Anything still marked `[PLACEHOLDER — ...]` in the JSON is a stand-in and
should be replaced with real copy before launch.

Images: drop files in `public/images/`, then point the matching key in
`images.json` at the path (e.g. `"/images/book-cover.jpg"`). Until a key has
a real path, the site renders a designed placeholder instead of a broken
image.

## Contact form

The contact form posts straight to a Google Form (no backend, no database —
same pattern used across this project family). It is **not wired up yet**.
To finish it:

1. Create a Google Form with three short-answer fields: Name, Email, Message.
2. Grab the form ID from its share link (`.../forms/d/e/<ID>/viewform`).
3. Grab each field's `entry.XXXXXXX` ID (inspect the live form, or use the
   prefilled-link option in the form's "⋮" menu).
4. Fill in `GOOGLE_FORM` at the top of `src/lib/contact.ts`.

Until then, the form renders a small notice instead of silently failing.

## Deploying to GitHub Pages

1. Push this `repo/` folder to a GitHub repository.
2. In repo **Settings → Pages**, set source to **GitHub Actions**.
3. Push to `master`/`main` — `.github/workflows/deploy.yml` builds and
   publishes `out/`.

No custom domain yet, so the workflow builds the site for
`https://<owner>.github.io/<repo-name>/` automatically (`NEXT_PUBLIC_BASE_PATH`
and `NEXT_PUBLIC_SITE_URL` are set in CI). Once a real domain is ready:

1. Add `public/CNAME` containing the domain.
2. Remove `NEXT_PUBLIC_BASE_PATH` from `.github/workflows/deploy.yml` (the
   site becomes root-served, no path prefix).
3. Point `NEXT_PUBLIC_SITE_URL` at the new domain.
4. Point the domain's DNS at GitHub Pages and enable the custom domain in
   repo settings.

Local dev never needs either variable — `make dev` always behaves as if
root-served at `/`.

## Project structure

```
data/           Content JSON
public/         Static assets
src/app/        Pages
src/components/ Layout and UI
src/lib/        Data loaders, formatting, site config
```
