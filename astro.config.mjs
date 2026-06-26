// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site for Making Marks Tattoo Co.
const ORIGIN = 'https://makingmarks-tattoo.co.uk';

// Deploy base path. Defaults to '/' (custom domain). The GitHub Pages workflow
// sets PUBLIC_BASE=/tattoostudio/ so assets + links resolve under the project
// subpath at https://<user>.github.io/tattoostudio/. Flip back to '/' (just
// don't set PUBLIC_BASE) once the custom domain is live.
const base = process.env.PUBLIC_BASE || '/';
const basePath = base.replace(/\/$/, ''); // '' for root, '/tattoostudio' otherwise

export default defineConfig({
  site: ORIGIN,
  base,
  output: 'static',
  integrations: [
    sitemap({
      // Sitemap entries always describe the production origin, regardless of the
      // deploy base: strip the base segment, keep the home page's trailing slash
      // and drop it from every other route (matching each page's canonical).
      serialize(item) {
        let url = item.url;
        if (basePath) url = url.replace(`${ORIGIN}${basePath}`, ORIGIN);
        url = url === ORIGIN || url === `${ORIGIN}/` ? `${ORIGIN}/` : url.replace(/\/$/, '');
        item.url = url;
        return item;
      },
    }),
  ],
});
