/*
  Shared site constants and structured-data (JSON-LD) builders.
  All real facts (address, hours, links) live here so the Nav, Footer, pages
  and schema blocks stay in sync. Do not invent values — these are the studio's
  confirmed details.
*/

export const SITE = {
  name: 'Making Marks Tattoo Co',
  url: 'https://makingmarks-tattoo.co.uk',
  ogImage: 'https://makingmarks-tattoo.co.uk/og-image.jpg',
  email: 'info@makingmarks-tattoo.co.uk',
  founded: '2021',
  address: {
    street: '102 Regent Street',
    locality: 'Royal Leamington Spa',
    region: 'Warwickshire',
    postcode: 'CV32 4NR',
    country: 'GB',
  },
  // Approximate — confirm the exact pin from the Google Business Profile before launch.
  geo: { latitude: 52.2918, longitude: -1.5362 },
  links: {
    instagram: 'https://instagram.com/making_marks_tattoo',
    connorInstagram: 'https://instagram.com/cj_humps_tattoos',
    fresha:
      'https://www.fresha.com/lvp/making-marks-tattoo-co-regent-street-royal-leamington-spa-PVbaLV',
    email: 'mailto:info@makingmarks-tattoo.co.uk',
  },
} as const;

/**
 * Prefix an internal, root-relative path with the deploy base
 * (import.meta.env.BASE_URL). At root ('/') this is a no-op, so the same code
 * works for the custom-domain build and the GitHub Pages subpath build
 * (e.g. '/tattoostudio/'). Use for every internal <a href>; do NOT use for
 * canonical/OG URLs (those always point at the production origin SITE.url).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return path === '/' ? `${base}/` : `${base}${path}`;
}

/** Primary nav links (clean URLs). */
export const NAV_LINKS = [
  { label: 'Tattoos', href: '/tattoos' },
  { label: 'Story', href: '/our-story' },
  { label: 'Artists', href: '/artists' },
  { label: 'Visit', href: '/visit' },
] as const;

/** Footer "Explore" column. */
export const FOOTER_LINKS = [
  { label: 'Tattoos', href: '/tattoos' },
  { label: 'Our story', href: '/our-story' },
  { label: 'Artists', href: '/artists' },
  { label: 'Aftercare', href: '/aftercare' },
  { label: 'Visit', href: '/visit' },
] as const;

/* ----------------------------------------------------------------------------
   Structured data (JSON-LD)
   ------------------------------------------------------------------------- */

/** Primary TattooParlor block — used on the home page and the visit page. */
export const tattooParlorSchema = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  name: 'Making Marks Tattoo Co',
  description:
    'Custom black & grey tattoo studio in Royal Leamington Spa, specialising in bespoke realism, fine line and lettering.',
  image: 'https://makingmarks-tattoo.co.uk/og-image.jpg',
  url: 'https://makingmarks-tattoo.co.uk/',
  email: 'info@makingmarks-tattoo.co.uk',
  foundingDate: '2021',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '102 Regent Street',
    addressLocality: 'Royal Leamington Spa',
    addressRegion: 'Warwickshire',
    postalCode: 'CV32 4NR',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 52.2918, longitude: -1.5362 },
  areaServed: ['Leamington Spa', 'Warwick', 'Coventry', 'Warwickshire'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://instagram.com/making_marks_tattoo'],
};

/** BreadcrumbList for an inner page (Home > <name>). */
export function breadcrumbSchema(name: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://makingmarks-tattoo.co.uk/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name,
        item: `https://makingmarks-tattoo.co.uk${path}`,
      },
    ],
  };
}

/** Person block for Connor Humpage (artists page). */
export const connorPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Connor Humpage',
  jobTitle: 'Tattoo Artist & Studio Owner',
  worksFor: { '@type': 'TattooParlor', name: 'Making Marks Tattoo Co' },
  sameAs: ['https://instagram.com/cj_humps_tattoos'],
};

/** Article block for the aftercare guide. */
export const aftercareArticleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tattoo Aftercare Guide',
  about: 'Tattoo aftercare',
  publisher: { '@type': 'Organization', name: 'Making Marks Tattoo Co' },
  mainEntityOfPage: 'https://makingmarks-tattoo.co.uk/aftercare',
};
