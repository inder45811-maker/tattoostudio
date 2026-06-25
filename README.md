# Making Marks Tattoo Co — website

Production website for **Making Marks Tattoo Co** — a custom black & grey tattoo
studio at 102 Regent Street, Royal Leamington Spa. Built with [Astro](https://astro.build)
as a fully static, component-based multi-page site.

- **Stack:** Astro (`output: 'static'`), plain CSS, self-hosted Archivo Variable font.
- **Live domain (target):** https://makingmarks-tattoo.co.uk

## Develop

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # static build → ./dist
npm run preview    # preview the built site
npm run make:og    # regenerate the placeholder public/og-image.jpg
```

## Pages

Each page is a single clean URL with its own `<title>`, meta description,
canonical, Open Graph/Twitter tags and JSON-LD structured data.

| Route        | File                      | Structured data                          |
| ------------ | ------------------------- | ---------------------------------------- |
| `/`          | `src/pages/index.astro`   | `TattooParlor`                           |
| `/tattoos`   | `src/pages/tattoos.astro` | `BreadcrumbList`                         |
| `/our-story` | `src/pages/our-story.astro` | `BreadcrumbList`                       |
| `/artists`   | `src/pages/artists.astro` | `BreadcrumbList` + `Person` (Connor)     |
| `/aftercare` | `src/pages/aftercare.astro` | `BreadcrumbList` + `Article`           |
| `/visit`     | `src/pages/visit.astro`   | `BreadcrumbList` + `TattooParlor`        |

`robots.txt` and `sitemap-index.xml` (via `@astrojs/sitemap`) are generated for
all six routes.

## Structure

```
reference/            The approved static prototype (design + copy + SEO source of truth). Not shipped.
public/               robots.txt, og-image.jpg, images/ (drop real photos here)
src/
  styles/global.css   Design tokens + base + shared component styles (ported from the prototype)
  layouts/BaseLayout.astro   <head> SEO/meta/JSON-LD, fonts, Nav, Footer, global script
  components/         Nav, Footer, Hero, SectionBook, WorkTile, ArtistCard, MapPlaceholder, Monogram, Placeholder
  data/
    site.ts           Studio facts (address, hours, links) + JSON-LD builders
    tattoos.ts        Gallery data (style group → tiles); swap in real photos here
  pages/              One .astro file per route
scripts/make-og.mjs   Generates the placeholder share image
```

## Swapping in real content (placeholders)

Everything below is a clearly-marked placeholder, designed to swap cleanly:

- **Tattoo photos** — add files to `public/images/`, then set `image:` on the
  relevant items in `src/data/tattoos.ts`. Items with `image: null` render the
  monogram placeholder frame. (See `public/images/README.md`.)
- **Artist roster** — Connor Humpage is real. The "Resident artist" and
  "Now hiring" cards in `src/pages/artists.astro` (and the home page) are
  placeholders; replace the props and pass `image="…"` for portraits.
- **Share image** — `public/og-image.jpg` is a generated placeholder (1200×630).
  Replace it with a strong real piece of work.
- **Map** — `MapPlaceholder.astro` is stylised. The `geo` coordinates in
  `src/data/site.ts` are approximate; confirm the exact pin from the studio's
  Google Business Profile before launch.

## Design & behaviour notes

- Design tokens, type scale and rules are ported verbatim from the prototype's
  CSS into `src/styles/global.css`.
- The display typeface is self-hosted **Archivo Variable** (`@fontsource-variable/archivo`,
  `standard.css` — includes the weight **and** width axes used by the condensed
  display type). No CDN fonts.
- The fixed nav turns solid after ~40px of scroll; scroll-reveal fade-ups use
  `IntersectionObserver` and respect `prefers-reduced-motion`.
- **Mobile nav:** the prototype simply hid the nav links on small screens. This
  build adds an accessible hamburger menu (`Nav.astro`) at ≤760px — a stacked
  dropdown that closes on selection, Escape, or resize back to desktop.

## Deploy

Static output in `dist/`. Connect this repo to Netlify, Vercel, or Cloudflare
Pages with:

- **Build command:** `astro build`
- **Output directory:** `dist`

Pushes to the default branch trigger automatic deploys. Point the
`makingmarks-tattoo.co.uk` DNS at the host when ready to go live, and keep
`site` in `astro.config.mjs` set to the production origin.
