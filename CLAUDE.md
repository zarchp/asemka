# Asemka

Marketing landing page for Asemka, a Jakarta software studio (procurement, warehouse and wholesale commerce systems). One page in two languages: English at `/`, Indonesian at `/id/`. Built with Astro 7 as a fully static site, with scoped CSS on shared tokens (no Tailwind, no UI framework).

## Commands

```bash
nvm use          # Node 24 (.nvmrc); Astro 7 needs >= 22.23.4
pnpm install     # pnpm v12; build scripts approved in pnpm-workspace.yaml (allowBuilds)
pnpm dev
pnpm build       # outputs dist/
pnpm preview     # serve the production build at :4321
```

## Structure

- `src/i18n/en.ts`, `src/i18n/id.ts`: **all copy** for both languages, typed by `types.ts`. Edit copy here, not in components.
- `src/i18n/site.ts`: WhatsApp number, email, site URL, `waLink()`.
- `src/components/Landing.astro`: composes the page. Sections: Hero (with Nav and the WhatsApp composer), Work, Services, Testimonial, Process, Faq, Contact, Footer.
- `src/components/screens/`: project screens rebuilt in HTML (`data-ui`), with sample data and no client names.
- `src/layouts/Base.astro`: head, meta, Open Graph, hreflang, JSON-LD (ProfessionalService and FAQPage).
- `src/styles/global.css`: tokens (palette, five type steps, margins, motion), field classes, button.
- `src/scripts/motion.ts`: one-time entrances (`data-reveal`, `data-stagger`) and the hero shutter (`data-shutter`).
- `public/.htaccess`: Apache rules for shared hosting (404, HTTPS, compression, caching).

## Hosting

Shared hosting with no Node runtime. Upload the **contents** of `dist/` (including `.htaccess`) to `public_html`. Keep it static: no SSR adapter, API routes, or server actions. The contact path is WhatsApp (`wa.me` links) and `mailto:`, so there is no form backend.

## Design system (from the skills)

- Direction: **Colour chapters**, dealt by `design-taste-frontend` (sheet in `.taste-skill/direction.json`; reprint with `node .agents/skills/design-taste-frontend/scripts/draw.mjs --show`). Redraws: work section is `work-stacked-folders-tabs` (only 3 projects); services section is `features-capabilities-at-poster-scale` (one interactive feature per page).
- Idea: the visitor's first WhatsApp message becomes the hero. The composer builds the message, and every `[data-wa-link]` is updated to match. Top right of the hero is the Asemka bag drawn large from the logo (inline SVG, back sheet sways); bottom left lists three promises (`hero.promises`).
- Header (`Nav.astro`) is sticky and solid, height `--nav-h`; anything else sticky must offset by it. Project screens are small working demos (approve, pick, filter and add to cart) with their own scripts; on phones they scroll sideways at true size. FAQ items open independently (no shared `name`).
- Palette: paper `#F4F4F2`, ink `#161616`, Asemka orange `#FF3D00`, ember `#D43100`, peach `#FFE9E0`, logo grey `#404040`, WhatsApp green `#075E54`. The owner dislikes black text on orange: bright orange (`field-orange`) carries no running text; sections with text on orange use `field-ember` with white text (4.9:1). Exception: the procurement band is bright orange at the owner's request, so all its text is white at 19px bold or larger (the large-text contrast level). One flat field per section; neighbouring fields must differ in lightness.
- Type: Albert Sans 400/500/600 (self-hosted via @fontsource). Sizes resolve to the five tokens: `--step-small`, `--step-body`, `--step-lead`, `--step-display`, `--step-poster`.
- Shapes: square buttons, and the folder-tab `clip-path` (from the logo's back sheet) is the one motif. No gradients, shadows, hairlines, eyebrows, or monospace outside `data-ui` fragments.

## Checks before shipping a change

```bash
node .agents/skills/design-taste-frontend/scripts/lint.mjs src
pnpm build && pnpm preview   # then, in another shell:
node .agents/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:4321/
node .agents/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:4321/id/ --out .taste-skill/inspect-id
```

Inspect the served preview, not `dist/index.html` directly (absolute asset paths break). Target 0 FAIL at 1440, 768 and 390. Open the screenshots in `.taste-skill/inspect/` afterwards.

## Skills

Project skills in `.claude/skills/` load automatically:

| Skill | Use for |
| --- | --- |
| `design-taste-frontend` | Leads the visual direction, house rules, and lint/inspect gates. Symlinked from `.agents/skills/`, tracked in `skills-lock.json`. |
| `landing-page-design` | Structure, conversion copy, and SEO. Where its visual rules conflict with `design-taste-frontend` (gradient headline text, glass floating nav), `design-taste-frontend` wins on this project. |

`.claude/meng-skills/` is a reference library (its own git repo, gitignored), not loaded automatically. Relevant: `ui/no-ai-design-slop`, `web-design/animation-on-scroll`, `codex/optimize-web-animations`, `codex/performance-profiling`.

## Placeholders to replace before launch

- Testimonial (Rina Hartono, PT Sinar Logistik) in both i18n files is invented.
- FAQ pricing answer: pending the owner's decision on showing a starting price.
- Sample data inside the project screens (PR numbers, branches, products, merchants).
- `public/og.png` is a screenshot of the hero; regenerate if the hero changes.
