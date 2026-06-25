# Tattoo & studio photos

Drop real photography here, then reference it from the data files:

- **Portfolio tiles** — add the path to an item in [`src/data/tattoos.ts`](../../src/data/tattoos.ts),
  e.g. `image: '/images/realism-koala.jpg'`. A tile with `image: null` renders the
  monogram placeholder frame.
- **Artist portraits** — pass `image="/images/connor.jpg"` to `<ArtistCard>` in
  [`src/pages/artists.astro`](../../src/pages/artists.astro) / the home page.

Keep the descriptive `alt` text accurate to the actual piece. Aim for sharp,
high-resolution black & grey work; tiles use a 4:5 crop and portraits a 1:1 crop.
