/*
  Generates a PLACEHOLDER 1200x630 Open Graph share image at public/og-image.jpg.
  Uses sharp (already present via Astro) to rasterise an on-brand SVG — black
  ground, the "M" monogram, and the studio name. Replace the output with a strong
  real piece of work before launch; this script just gives us a valid placeholder.

  Run: npm run make:og
*/
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const out = resolve(here, '../public/og-image.jpg');

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#0B0B0C"/>
  <rect x="44" y="44" width="${W - 88}" height="${H - 88}" fill="none" stroke="rgba(242,241,239,0.26)" stroke-width="2"/>
  <g transform="translate(600,232)">
    <path d="M-78 104 V-78 L0 26 L78 -78 V104" fill="none" stroke="#F2F1EF" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <text x="600" y="430" text-anchor="middle" fill="#F2F1EF" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="800" letter-spacing="7">MAKING MARKS TATTOO CO</text>
  <text x="600" y="486" text-anchor="middle" fill="#AFAEAB" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="600" letter-spacing="9">BLACK &amp; GREY &#183; ROYAL LEAMINGTON SPA</text>
  <text x="600" y="556" text-anchor="middle" fill="#77756F" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="600" letter-spacing="5">PLACEHOLDER &#8212; REPLACE WITH A REAL PIECE</text>
</svg>`;

await sharp(Buffer.from(svg)).jpeg({ quality: 86, chromaSubsampling: '4:4:4' }).toFile(out);
console.log(`Wrote ${out} (${W}x${H})`);
