/*
  FAQ content — every answer is composed strictly from the studio's confirmed
  facts (booking flow, styles, hours, parking, aftercare guidance). Add or edit
  questions here; the FaqSection accordion and the FAQPage JSON-LD both render
  from this one list.
*/

export interface Faq {
  question: string;
  answer: string;
  /** Optional internal link appended after the answer, e.g. the aftercare guide. */
  link?: { label: string; href: string };
}

export const faqs: Faq[] = [
  {
    question: 'How do I book a tattoo?',
    answer:
      'Tattoo enquiries are taken through Instagram DM — send us your idea and we’ll talk it through, then confirm your booking on Fresha.',
  },
  {
    question: 'Will my design be unique?',
    answer:
      'Yes. Every design is drawn from scratch around the idea you walk in with — bring a clear idea, a few references, or just a feeling, and we’ll design a piece that’s yours alone.',
  },
  {
    question: 'Do you take on cover-ups?',
    answer:
      'We do. We work in custom black & grey — realism, fine line, lettering and cover-ups — so send us a photo of the existing piece and we’ll talk through what’s possible.',
  },
  {
    question: 'When is the studio open?',
    answer:
      'Tuesday to Saturday, 10:00–17:00. We’re closed on Sundays and Mondays.',
  },
  {
    question: 'Where can I park?',
    answer:
      'St Peter’s Multi-Storey on Augusta Place (CV32 5EL) and Covent Garden on Russel Street (CV32 5QB) both hold 380+ cars and are a short walk from the studio.',
  },
  {
    question: 'How do I look after my new tattoo?',
    answer:
      'Keep it clean, moisturise lightly, don’t pick or scratch, and keep it out of direct sun while it heals — our guide covers everything from the first 48 hours through to healed.',
    link: { label: 'Read the full aftercare guide →', href: '/aftercare' },
  },
];

/** FAQPage structured data built from the same list. */
export function faqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
