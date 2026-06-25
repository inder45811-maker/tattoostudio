/*
  Tattoo gallery data — drives the portfolio grids.
  PLACEHOLDER: every `image` is null for now, so each tile renders the monogram
  placeholder frame. Drop a real photo into /public/images/ and set `image` to
  its path (e.g. '/images/realism-koala.jpg') and the tile swaps in cleanly.
  Keep the descriptive `alt` text accurate to the actual piece when you do.
*/

export interface WorkItem {
  /** Short visible caption shown on the tile (the figtag). */
  label: string;
  /** Descriptive alt / accessible name for the image. */
  alt: string;
  /** Path under /public, or null to render the placeholder frame. */
  image?: string | null;
}

export interface TattooGroup {
  heading: string;
  caption: string;
  items: WorkItem[];
}

/** Full portfolio, grouped by style — used on /tattoos. */
export const tattooGroups: TattooGroup[] = [
  {
    heading: 'Realism',
    caption: 'Portraits · animals · objects',
    items: [
      { label: 'Koala · forearm', alt: 'Black and grey realism koala tattoo on forearm by Making Marks', image: null },
      { label: 'Religious sleeve', alt: 'Black and grey religious sleeve tattoo with skull and hands', image: null },
      { label: 'Roman · leg', alt: 'Black and grey Roman gladiator leg tattoo', image: null },
    ],
  },
  {
    heading: 'Fine line',
    caption: 'Delicate, single-needle detail',
    items: [
      { label: 'Botanical', alt: 'Fine line botanical branch tattoo on arm', image: null },
      { label: 'Ornamental', alt: 'Fine line ornamental decorative tattoo', image: null },
      { label: 'Swallow', alt: 'Fine line swallow bird tattoo on forearm', image: null },
    ],
  },
  {
    heading: 'Lettering & script',
    caption: 'Names, dates & quotes',
    items: [
      { label: 'Script', alt: 'Black and grey script lettering tattoo', image: null },
      { label: 'Anchor & script', alt: 'Anchor tattoo with fine script lettering', image: null },
      { label: 'Statement piece', alt: 'Black and grey lettering statement tattoo', image: null },
    ],
  },
];

/** Curated three-tile selection shown on the home page. */
export const homePreview: WorkItem[] = [
  { label: 'Realism · koala', alt: 'Black and grey koala realism tattoo on forearm', image: null },
  { label: 'Religious · sleeve', alt: 'Black and grey religious sleeve tattoo', image: null },
  { label: 'Fine line · botanical', alt: 'Fine line botanical tattoo on arm', image: null },
];
