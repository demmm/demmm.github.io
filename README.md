# Hochkönig Ferien — Astro rebuild

A static Astro rebuild of the [hochkoenigferien.com](https://hochkoenigferien.com) WordPress
site.

## Stack

- [Astro](https://astro.build) 7, static output, zero client-side JS framework
- Plain CSS with design tokens in `src/styles/global.css` — no Tailwind/UI kit
- All content lives in `src/data/site.ts`, not hardcoded in components

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  data/site.ts        All Dutch copy, stats, gallery, contact info — edit here
  layouts/Layout.astro Head/meta/fonts
  components/          One component per section (Hero, Features, Why, Gallery, …)
  pages/index.astro    Assembles the one-page layout
  styles/global.css    Design tokens (colors, type, spacing) + base styles
public/
  favicon.svg
```

## Design

The palette and type system are grounded in the region rather than a generic
template: deep alpine ink, limestone stone, spruce pine, glacier blue, and an
Austrian trail-signpost yellow used as the signature accent. The recurring
"contour" divider between sections is a stylised elevation profile — a nod to
the real geography (Hochkönig 2941 m, Königstour 35 km, 340 km of trails).
The Hochkönig Card benefits and nearby activities render as wooden
trail-signpost placards, which is the one deliberate visual risk in the page;
everything else stays quiet around it.

## Images

Gallery, hero, and story images are still hot-linked from the original
WordPress media library (`hochkoenigferien.com/wp-content/uploads/...`) so the
site works immediately without any asset migration. For a fully independent
deploy:

1. Download the images referenced in `src/data/site.ts` into `public/images/`.
2. Update the `full` / `thumb` / `image` / `poster` / `video` paths in
   `src/data/site.ts` to point at `/images/...` instead of the old domain.

## Contact form

The form in `src/components/Contact.astro` is currently static (`action="#"`,
no backend) — the old site used WPForms. Wire it up to whichever handler you
prefer:

- [Formspree](https://formspree.io) / [Web3Forms](https://web3forms.com) — set
  `action` to their endpoint, no server code needed.
- An Astro API route (`src/pages/api/contact.ts`) if you want to send email
  yourself (e.g. via Resend or SMTP).

## Deploying

Static output (`npm run build` → `dist/`) — deploy to Netlify, Vercel,
Cloudflare Pages, GitHub Pages, or any static host.
