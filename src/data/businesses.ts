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
  /** Plant or unit addresses, shown with a map link */
  locations?: { name: string; address: string; mapUrl: string }[];
  /** false hides the business everywhere (nav, footer, grids, forms) and removes its page */
  enabled?: boolean;
};

// `summary` is the client's approved copy. `tagline`, `overview`, `whatWeDo` and `process`
// are our drafts, kept general on purpose. Add capacities, locations, product lists and
// certifications here as the client confirms them.
export const allBusinesses: Business[] = [
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
    locations: [
      {
        name: 'Unit 1',
        address: 'Salhebharri, Khairagarh, Chhattisgarh 491881',
        mapUrl: 'https://share.google/V0BkNMnepm5GjZHrw',
      },
      {
        name: 'Unit 2',
        address: 'Chikhaldah, Khairagarh, Chhattisgarh 491881',
        // No Google listing for this unit yet, so this searches for the village
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chikhaldah%2C+Khairagarh%2C+Chhattisgarh+491881',
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
    // Hidden on client request, 21 Oct 2026, until after the expo at their plant.
    // To bring it back: delete this line, and restore the phrase in the copy listed in
    // docs/WEBSITE-BUILD-GUIDE.md section 14.
    enabled: false,
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
    title: 'Agricultural Equipment & Technology',
    // Client instruction, 21 Oct 2026: do not name any equipment brand, and do not lead with tractors
    summary:
      'BBC Group India deals in agricultural equipment and technologies that provide end-to-end farming solutions, helping farmers and agricultural customers work more efficiently from land preparation to harvest.',
    cta: 'Explore Agricultural Equipment',
    tagline: 'End-to-end farming solutions, from land preparation to harvest.',
    overview: [
      'Modern farming needs more than a single machine. We bring together the equipment and technologies farmers need across the whole crop cycle.',
      'We aim to help every customer find the right solution for their land, their crops and their budget.',
    ],
    whatWeDo: [
      {
        icon: 'factory',
        title: 'Farm Equipment',
        text: 'Equipment for every stage of farming, from land preparation and sowing to crop care and harvest.',
      },
      {
        icon: 'trending-up',
        title: 'Modern Farm Technologies',
        text: 'Technologies that help farmers work more precisely, save time and get more from every acre.',
      },
      {
        icon: 'layers',
        title: 'End-to-End Solutions',
        text: 'One partner from the first field operation to the last, so farmers do not have to piece solutions together.',
      },
      {
        icon: 'users',
        title: 'Support for Farmers',
        text: 'Guidance in choosing the right equipment for the land, the crop and the budget.',
      },
    ],
  },
];

// Every page and component uses this list, so a disabled business disappears from the whole site
export const businesses = allBusinesses.filter((business) => business.enabled !== false);
