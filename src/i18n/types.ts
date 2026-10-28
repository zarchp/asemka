export type Lang = 'en' | 'id';

export interface Choice {
  id: string;
  label: string;
  /** The phrase this choice adds to the WhatsApp message. */
  phrase: string;
}

export interface Project {
  id: 'procurement' | 'warehouse' | 'wholesale';
  name: string;
  category: string;
  body: string;
  link: string;
  /** Pre-filled WhatsApp message for this project's link. */
  message: string;
  /** Caption under the interactive screen. */
  hint: string;
}

export interface Dict {
  lang: Lang;
  meta: { title: string; description: string };
  nav: { work: string; services: string; process: string; faq: string; cta: string; skip: string; label: string; switchLabel: string; switchHref: string; switchLang: Lang };
  hero: {
    title: [string, string];
    lead: string;
    cta: string;
    promises: string[];
    composer: {
      label: string;
      contactName: string;
      status: string;
      groups: { need: string; stage: string; when: string };
      need: Choice[];
      stage: Choice[];
      when: Choice[];
      nameLabel: string;
      namePlaceholder: string;
      send: string;
      /** Builds the message. Tokens: {name} {need} {stage} {when} */
      template: string;
      templateWithName: string;
    };
  };
  work: { heading: string; projects: Project[] };
  testimonial: { heading: string; items: { quote: string; name: string; role: string; company: string }[] };
  services: { heading: string; lead: string; items: { name: string; body: string }[] };
  process: { heading: string; steps: { name: string; body: string; time: string }[] };
  faq: { heading: string; items: { q: string; a: string }[] };
  contact: {
    heading: string;
    rows: { label: string; value: string; href?: string }[];
    greeting: string;
    greetingAction: string;
  };
  footer: {
    blurb: string;
    pagesLabel: string;
    contactLabel: string;
    notes: string[];
    top: string;
    lineLabel: string;
    privacy: string;
    credits: string;
    place: string;
  };
}
