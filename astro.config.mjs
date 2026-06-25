// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production site for Making Marks Tattoo Co.
// Static output — every page renders to a single clean URL.
export default defineConfig({
  site: 'https://makingmarks-tattoo.co.uk',
  output: 'static',
  integrations: [
    sitemap({
      // Match each page's <link rel="canonical">: the home page keeps its
      // trailing slash, every other route has none.
      serialize(item) {
        const root = 'https://makingmarks-tattoo.co.uk';
        if (item.url === root || item.url === `${root}/`) {
          item.url = `${root}/`;
        } else {
          item.url = item.url.replace(/\/$/, '');
        }
        return item;
      },
    }),
  ],
});
