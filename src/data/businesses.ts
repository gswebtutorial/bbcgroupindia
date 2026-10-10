import type { ImageMetadata } from 'astro';
import agriculture from '../assets/images/biz-agriculture.jpg';
import bricks from '../assets/images/biz-bricks.jpg';
import construction from '../assets/images/biz-construction.jpg';
import machinery from '../assets/images/biz-machinery.jpg';
import rice from '../assets/images/biz-rice.jpg';
import solar from '../assets/images/biz-solar.jpg';
import type { IconName } from '../components/ui/icons';

export type Business = {
  slug: string;
  title: string;
  summary: string;
  cta: string;
  image: ImageMetadata;
  tagline: string;
  /** Extra overview paragraphs shown after the summary */
  overview: string[];
  whatWeDo: { icon: IconName; title: string; text: string }[];
  /** Ordered processing steps, shown as an animated flow */
  process?: { title: string; text: string }[];
};

// `summary` is the client's approved copy. `tagline`, `overview`, `whatWeDo` and `process`
// are our drafts, kept general on purpose. Add capacities, locations, product lists and
// certifications here as the client confirms them.
export const businesses: Business[] = [
  {
    slug: 'agriculture',
    image: agriculture,
    title: 'Agriculture & Farms',
    summary:
      'Our agricultural activities are focused on productive farming and responsible utilization of agricultural resources.',
    cta: 'Explore Agriculture',
    tagline: 'Productive farming, responsibly managed.',
    overview: [
      "Agriculture sits at the foundation of the Group's food and processing businesses. Our farming activities keep us close to the land, the seasons and the farming communities we work alongside.",
      'We aim to make the best use of every acre through careful planning, sound farming practices and respect for soil and water.',
    ],
    whatWeDo: [
      {
        icon: 'sprout',
        title: 'Crop Cultivation',
        text: 'Productive farming focused on dependable yields and quality produce.',
      },
      {
        icon: 'leaf',
        title: 'Responsible Resource Use',
        text: 'Land, water and inputs are used with care so that the farm stays productive season after season.',
      },
      {
        icon: 'layers',
        title: 'Linked to Processing',
        text: "Our farming knowledge supports the Group's wider food-processing value chain.",
      },
    ],
  },
  {
    slug: 'rice-processing',
    image: rice,
    title: 'Rice & Food Processing',
    summary:
      'Our rice business focuses on modern paddy processing and the production of quality rice and associated by-products.',
    cta: 'Explore Rice Processing',
    tagline: 'Modern paddy processing for consistent quality in every grain.',
    overview: [
      "BBC Rice Industries Private Limited is the Group's flagship business. Paddy is cleaned, milled, graded and packed to deliver rice that meets the expectations of buyers in India and overseas.",
      'Every stage of processing is managed with one aim: consistent quality, lot after lot.',
    ],
    whatWeDo: [
      {
        icon: 'factory',
        title: 'Paddy Processing',
        text: 'Modern milling that turns paddy into clean, uniform, well-graded rice.',
      },
      {
        icon: 'award',
        title: 'Quality Rice',
        text: 'Careful grading and sorting so customers receive dependable quality in every consignment.',
      },
      {
        icon: 'layers',
        title: 'By-products',
        text: 'Rice bran, husk and broken rice are recovered during milling and put to productive use. Fly ash from the mill goes into our brick manufacturing.',
      },
      {
        icon: 'globe',
        title: 'Domestic and Export Supply',
        text: 'Rice supplied to buyers across India and to international markets.',
      },
    ],
    process: [
      { title: 'Paddy Procurement', text: 'Paddy is received and checked before it enters the mill.' },
      { title: 'Cleaning', text: 'Dust, stones and other impurities are removed.' },
      { title: 'De-husking', text: 'The outer husk is separated from the grain.' },
      { title: 'Whitening & Polishing', text: 'The bran layer is removed and the grain is polished.' },
      { title: 'Grading & Sorting', text: 'Grains are sorted for size, colour and uniformity.' },
      { title: 'Packing', text: 'Finished rice is weighed and packed for dispatch.' },
      { title: 'Dispatch', text: 'Consignments are loaded and sent to buyers.' },
    ],
  },
  {
    slug: 'renewable-energy',
    image: solar,
    title: 'Renewable Energy',
    summary:
      'We are developing our presence in renewable energy with a focus on solar power and clean energy solutions.',
    cta: 'Explore Renewable Energy',
    tagline: 'Clean energy for a growing economy.',
    overview: [
      "Renewable energy is one of the Group's developing businesses. We see solar power as an important part of India's energy future and of how responsible businesses will operate.",
      'Our focus is on practical clean-energy solutions that are reliable and built to last.',
    ],
    whatWeDo: [
      { icon: 'leaf', title: 'Solar Power', text: 'Developing our presence in solar power generation.' },
      {
        icon: 'trending-up',
        title: 'Clean Energy Solutions',
        text: 'Exploring clean-energy solutions that reduce dependence on conventional power.',
      },
      {
        icon: 'factory',
        title: 'Energy for Operations',
        text: "Exploring how sustainable energy can support the Group's own operations.",
      },
    ],
  },
  {
    slug: 'brick-manufacturing',
    image: bricks,
    title: 'Brick Manufacturing',
    summary:
      'Our brick manufacturing business serves the construction and infrastructure sector with quality building materials.',
    cta: 'Explore Brick Manufacturing',
    tagline: 'Bricks made using fly ash from our own rice mill.',
    overview: [
      'Good construction starts with good materials. Our brick manufacturing business supplies builders, contractors and infrastructure projects with bricks they can depend on.',
      'The fly ash generated at our rice mill is used as a raw material in our bricks. What would otherwise be waste from one business becomes a building material in another.',
      'We focus on consistent quality and reliable supply so that work on site keeps moving.',
    ],
    whatWeDo: [
      {
        icon: 'leaf',
        title: 'Fly Ash from Our Rice Mill',
        text: 'Fly ash generated during rice processing is reused in brick making, so less goes to waste across the Group.',
      },
      {
        icon: 'layers',
        title: 'Quality Bricks',
        text: 'Bricks manufactured for strength, uniformity and durability.',
      },
      {
        icon: 'factory',
        title: 'Construction & Infrastructure',
        text: 'Serving residential, commercial and infrastructure projects.',
      },
      { icon: 'users', title: 'Reliable Supply', text: 'Dependable delivery for builders and contractors.' },
    ],
  },
  {
    slug: 'construction-supplies',
    image: construction,
    title: 'Building Construction Supplies',
    summary:
      'Our building construction supply business provides hardware and related materials for construction, infrastructure and building projects.',
    cta: 'Explore Construction Supplies',
    tagline: 'Hardware and materials that keep projects moving.',
    overview: [
      'Our building construction supply business brings together the hardware and related materials that construction, infrastructure and building projects need.',
      'We aim to be a dependable source for builders and contractors: the right material, when it is needed.',
    ],
    whatWeDo: [
      {
        icon: 'layers',
        title: 'Hardware & Materials',
        text: 'Hardware and related materials for building work.',
      },
      {
        icon: 'factory',
        title: 'Project Supply',
        text: 'Supplies for construction, infrastructure and building projects.',
      },
      {
        icon: 'users',
        title: 'Dependable Service',
        text: 'Straightforward dealing and timely supply for contractors and builders.',
      },
    ],
  },
  {
    slug: 'agricultural-machinery',
    image: machinery,
    title: 'Agricultural Machinery',
    summary:
      'BBC Group India is an authorized dealer of Kubota, a Japanese technology-based tractor company, providing reliable agricultural machinery and tractor solutions to farmers and agricultural customers.',
    cta: 'Explore Agricultural Machinery',
    tagline: 'Authorized Kubota dealer. Reliable machinery for the farm.',
    overview: [
      'Mechanisation helps farmers do more with their land and their time. We bring Japanese-technology tractors and agricultural machinery to farmers and agricultural customers.',
      'We aim to help every customer find the right machine for their land, their crops and their budget.',
    ],
    whatWeDo: [
      { icon: 'award', title: 'Kubota Tractors', text: 'Authorized dealership for Kubota tractors.' },
      {
        icon: 'factory',
        title: 'Agricultural Machinery',
        text: 'Reliable machinery and tractor solutions for modern farming.',
      },
      {
        icon: 'users',
        title: 'Support for Farmers',
        text: 'Guidance for farmers and agricultural customers in choosing the right equipment.',
      },
    ],
  },
];
