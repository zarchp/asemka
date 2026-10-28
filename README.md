# Asemka

Marketing site for [Asemka](https://asemka.com): custom procurement, inventory and wholesale commerce systems.

One page in two languages (English at `/`, Indonesian at `/id/`), built with [Astro](https://astro.build) as a fully static site, so it runs on ordinary shared hosting with no Node runtime. First contact goes through WhatsApp: the hero has a composer that writes the visitor's first message and opens `wa.me` with it filled in.

## Requirements

- Node 24 (see `.nvmrc`; Astro 7 needs 22.23.4 or newer)
- pnpm 12

## Getting started

```bash
nvm use
pnpm install
pnpm dev          # http://localhost:4321
```

## Scripts

| Command        | What it does                                         |
| -------------- | ---------------------------------------------------- |
| `pnpm dev`     | Development server with hot reload                   |
| `pnpm build`   | Builds the static site into `dist/`                  |
| `pnpm preview` | Serves the production build at http://localhost:4321 |

## Editing content

All copy lives in two files, one per language. Change text there, not in the components.

| File                | Contains                         |
| ------------------- | -------------------------------- |
| `src/i18n/en.ts`    | English copy                     |
| `src/i18n/id.ts`    | Indonesian copy                  |
| `src/i18n/types.ts` | The shape both files must follow |
| `src/i18n/site.ts`  | WhatsApp number, email, site URL |

Change the WhatsApp number or email only in `site.ts`; every link, the structured data and the footer read from it.

## Project structure

```
public/                  Static files copied as is (logo, icons, og.png, robots.txt, .htaccess)
src/
  components/
    Landing.astro        Composes the page from the sections below
    Nav.astro            Sticky header
    Hero.astro           Headline, trust points and the WhatsApp composer
    Work.astro           The three project bands
    screens/             Project screens rebuilt in HTML, with working demos and sample data
    Services.astro
    Testimonial.astro
    Process.astro
    Faq.astro
    Contact.astro
    Footer.astro
  i18n/                  Copy and site settings (see above)
  layouts/Base.astro     <head>: meta, Open Graph, hreflang, JSON-LD
  pages/                 index (en), id/index, privacy, 404
  scripts/motion.ts      Scroll entrances and the hero opening
  styles/global.css      Design tokens: colours, type sizes, spacing, motion
```

## Deploying to shared hosting

1. Build: `pnpm build`
2. Upload the **contents** of `dist/` (not the folder itself) to `public_html`, including the hidden `.htaccess` file. Use cPanel File Manager (upload a zip and extract it), FTP/SFTP, or `rsync -avz --delete dist/ USER@HOST:~/public_html/` if you have SSH.
3. Turn on SSL in your hosting panel. `.htaccess` redirects every request to `https://asemka.com`.
4. Open `/`, `/id/`, `/privacy/` and a made-up path (it should show the 404 page), then test the WhatsApp button on a phone.
5. Submit `https://asemka.com/sitemap-index.xml` in Google Search Console.

If the domain changes, update `site` in `astro.config.mjs`, `SITE_URL` in `src/i18n/site.ts`, the redirect in `public/.htaccess` and the sitemap line in `public/robots.txt`, then rebuild.

If the host returns a 500 error, it doesn't support one of the `.htaccess` rules: remove the `<IfModule mod_headers.c>` block first.

## Checks before shipping

The design checks come from the `design-taste-frontend` skill in `.agents/skills/`.

```bash
node .agents/skills/design-taste-frontend/scripts/lint.mjs src
pnpm build && pnpm preview
# in another shell:
node .agents/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:4321/
node .agents/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:4321/id/ --out .taste-skill/inspect-id
```

The inspector needs Chrome, Edge, Chromium or Brave (set `CHROME_PATH` if it isn't found) and saves screenshots to `.taste-skill/`. Aim for 0 FAIL at every width.

If you change the hero, regenerate the share image `public/og.png` (a 1200×630 screenshot of the hero).
