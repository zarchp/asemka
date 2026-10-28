import type { Dict } from './types';
import { EMAIL, WA_LOCAL, waLink } from './site';

const en: Dict = {
  lang: 'en',
  meta: {
    title: 'Asemka · Procurement, Warehouse and E-commerce Systems for Indonesian Businesses',
    description:
      'Asemka designs and builds procurement, warehouse and wholesale commerce systems for Indonesian companies and startups. Message us on WhatsApp to start.',
  },
  nav: { work: 'Work', services: 'Services', process: 'Process', faq: 'FAQ', cta: 'Chat on WhatsApp', skip: 'Skip to content', label: 'Main', switchLabel: 'Bahasa Indonesia', switchHref: '/id/', switchLang: 'id' },
  hero: {
    title: ['Business software,', 'built in Indonesia'],
    lead: 'Procurement, warehouse and online shop systems for Indonesian companies and startups.',
    cta: 'Send on WhatsApp',
    promises: ['A reply within one working day', 'A clickable prototype within two weeks', 'Built in Bahasa Indonesia and English'],
    composer: {
      label: 'Write your first message',
      contactName: 'Asemka',
      status: 'Replies within one working day',
      groups: { need: 'What do you need?', stage: 'Where are you now?', when: 'When?' },
      need: [
        { id: 'procurement', label: 'Procurement and approvals', phrase: 'a procurement and approval system' },
        { id: 'warehouse', label: 'Warehouse and stock', phrase: 'a warehouse and stock system' },
        { id: 'shop', label: 'Online wholesale shop', phrase: 'an online wholesale shop' },
        { id: 'website', label: 'Company website', phrase: 'a company website' },
        { id: 'other', label: 'Something else', phrase: 'help with a software project' },
      ],
      stage: [
        { id: 'idea', label: 'Just an idea', phrase: "It's just an idea for now" },
        { id: 'designs', label: 'We have designs', phrase: 'We already have designs' },
        { id: 'fix', label: 'Our current system needs fixing', phrase: 'Our current system needs fixing' },
      ],
      when: [
        { id: 'month', label: 'This month', phrase: "we'd like to start this month" },
        { id: 'quarter', label: 'In 1 to 3 months', phrase: "we'd like to start in 1 to 3 months" },
        { id: 'exploring', label: 'Just exploring', phrase: "we're still exploring options" },
      ],
      nameLabel: 'Your name',
      namePlaceholder: 'Optional',
      send: 'Send this message on WhatsApp',
      template: "Hi Asemka. I'm looking for {need}. {stage}, and {when}. Can we talk?",
      templateWithName: "Hi Asemka, I'm {name}. I'm looking for {need}. {stage}, and {when}. Can we talk?",
    },
  },
  work: {
    heading: 'Systems we built',
    projects: [
      {
        id: 'procurement',
        name: 'Procurement and approvals',
        category: 'General affairs, multi company group',
        body: 'Every branch of a multi company group sends purchase requests into one dashboard. Requests climb through approval levels set by role and amount, managers see spending per branch, and approved orders sync straight to Oracle Financials, so finance never retypes a purchase order.',
        link: 'Ask about a procurement system',
        message: "Hi Asemka. I saw your procurement and approval system. Can we talk about building one for us?",
        hint: 'Interactive demo with sample data. Try approving a request.',
      },
      {
        id: 'warehouse',
        name: 'Asemka Operation',
        category: 'Our own product, warehouse and stock',
        body: 'The warehouse platform we build and run ourselves. Receiving, picking, packing and shipping happen in one flow, on a phone or a desktop. Stock updates the moment a box moves, and reorder alerts go out before a shelf runs empty. Indonesian first, English one tap away.',
        link: 'Ask for a demo',
        message: "Hi Asemka. I'd like a demo of Asemka Operation for our warehouse.",
        hint: 'Interactive demo. Tick each item as you pick it.',
      },
      {
        id: 'wholesale',
        name: 'Wholesale commerce',
        category: 'Marketplace, fashion and apparel',
        body: "A wholesale marketplace for Indonesian fashion: women's and children's clothing, Muslim wear, batik, bags and shoes. Merchants open their own store, buyers browse by category or city and order in bulk with prices in Rupiah. Orders, stock and merchant payouts run from one admin.",
        link: 'Ask about a marketplace',
        message: 'Hi Asemka. I saw your wholesale marketplace. Can we talk about building one for us?',
        hint: 'Interactive demo. Pick a category and add to cart.',
      },
    ],
  },
  testimonial: {
    heading: 'What clients say',
    items: [
      {
        quote: 'They asked about our warehouse before our budget. Six weeks later our pickers worked from phones, and the stock count finally matched the shelves.',
        name: 'Rina Hartono',
        role: 'Operations manager',
        company: 'PT Sinar Logistik',
      },
      {
        quote: 'Approvals that waited days in someone’s inbox now clear before lunch.',
        name: 'Dimas Prasetyo',
        role: 'Head of general affairs',
        company: 'Grup Mitra Sentosa',
      },
      {
        quote: 'One WhatsApp message on Friday. A call on Monday. A prototype our merchants could click two weeks later.',
        name: 'Yuliana Tan',
        role: 'Founder',
        company: 'Kain Kita',
      },
    ],
  },
  services: {
    heading: 'What we do',
    lead: 'From the first sketch to the system your team runs every day, and the care after it ships.',
    items: [
      { name: 'Product strategy', body: 'We turn the problem into a scope and a budget you can approve.' },
      { name: 'Interface design', body: 'Screens your staff understand on day one.' },
      { name: 'Web apps and dashboards', body: 'Internal systems with roles, approvals and reports.' },
      { name: 'Company websites', body: 'Fast, bilingual sites that rank on Google.' },
      { name: 'System integration', body: 'We connect to the ERP, payment gateway and tools you already use.' },
      { name: 'Care after launch', body: 'Fixes, updates and new features, billed monthly.' },
    ],
  },
  process: {
    heading: 'How we start',
    steps: [
      { name: 'Message', body: 'Send us a WhatsApp message. We reply within one working day.', time: 'Day 1' },
      { name: 'Call and prototype', body: 'A 30 minute call, then a clickable prototype within two weeks.', time: 'Within 2 weeks' },
      { name: 'Build and launch', body: 'Weekly previews. Most launches land in 4 to 8 weeks.', time: 'Week 4 to 8' },
    ],
  },
  faq: {
    heading: 'Questions',
    items: [
      { q: 'How much does a system cost?', a: 'It depends on the scope. After the first call you get a fixed quote, never an hourly bill.' },
      { q: 'Why WhatsApp first?', a: "It's faster for you. Send what you need, and we'll call when there's something worth talking about." },
      { q: 'Can you fix our existing system?', a: 'Yes. We take over and improve existing Laravel, PHP and JavaScript systems, starting with a short audit.' },
      { q: 'Will the interface be in Bahasa Indonesia?', a: 'Yes, or English, or both. Your team chooses, and staff can switch at any time.' },
      { q: 'Who owns the code?', a: 'You do. You get the full source code, the database and access to every server.' },
      { q: 'Can you connect to our ERP?', a: "Yes. We've integrated with Oracle Financials, payment gateways and courier APIs." },
      { q: 'What happens after launch?', a: 'We stay on a monthly care plan, or we hand everything over to your own team with documentation.' },
    ],
  },
  contact: {
    heading: 'Talk to Asemka',
    rows: [
      { label: 'WhatsApp', value: `WhatsApp ${WA_LOCAL}`, href: waLink('Hi Asemka. Can we talk about a project?') },
      { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}?subject=${encodeURIComponent('Project enquiry')}` },
      { label: 'City', value: 'Jakarta, Indonesia' },
      { label: 'Hours', value: 'Mon to Fri, 08.00 to 17.00 WIB' },
    ],
    greeting: 'Halo',
    greetingAction: 'Open WhatsApp',
  },
  footer: {
    blurb: 'Software studio in Jakarta. We design and build procurement, warehouse and commerce systems for Indonesian companies and startups.',
    pagesLabel: 'On this page',
    contactLabel: 'Contact',
    notes: ['Asemka, software studio in Jakarta', 'Mon to Fri, 08.00 to 17.00 WIB', 'Procurement, warehouse and commerce systems'],
    top: 'Back to top',
    lineLabel: 'Message Asemka on WhatsApp',
    privacy: 'Privacy',
    credits: 'Designed and built by Asemka',
    place: 'Jakarta, 2026',
  },
};

export default en;
