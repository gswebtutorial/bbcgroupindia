import heroExport from '../assets/images/hero-export.jpg';
import heroPaddy from '../assets/images/hero-paddy.jpg';
import heroRice from '../assets/images/hero-rice.jpg';
import heroSolar from '../assets/images/hero-solar.jpg';
import type { IconName } from '../components/ui/Icon.astro';

export const heroSlides = [
  {
    image: heroPaddy,
    eyebrow: 'BBC Group India',
    title: ['Building Businesses.', 'Creating Value.', 'Growing Together.'],
    text: 'BBC Group India is a diversified business group with a growing presence across agriculture, rice processing, renewable energy, brick manufacturing, building construction supplies and agricultural machinery.',
    primary: { label: 'Explore Our Businesses', href: '/businesses' },
    secondary: { label: 'Know About BBC Group', href: '/about' },
  },
  {
    image: heroExport,
    eyebrow: 'Exports',
    title: ['From Indian Farms', 'to Global Markets.', ''],
    text: 'Quality rice, processed in India and supplied to buyers at home and abroad.',
    primary: { label: 'Explore Exports', href: '/exports' },
  },
  {
    image: heroRice,
    eyebrow: 'Rice & Food Processing',
    title: ['Rice Milled', 'with Care.', ''],
    text: 'Modern paddy processing for consistent quality in every grain.',
    primary: { label: 'Explore Rice Processing', href: '/businesses/rice-processing' },
  },
  {
    image: heroSolar,
    eyebrow: 'Sustainability',
    title: ['Diversified Businesses.', 'Sustainable Growth.', ''],
    text: 'With a focus on quality, efficiency and responsible growth, we are building businesses that create long-term value for customers, partners and communities.',
    primary: { label: 'Our Sustainability Approach', href: '/sustainability' },
  },
];

// The group's approach, from the client's intro copy
export const pillars = [
  { title: 'Build Responsibly', text: 'Growth that respects people, resources and communities.' },
  { title: 'Operate Efficiently', text: 'Disciplined execution and modern processes in every business.' },
  { title: 'Grow for the Long Term', text: 'Trusted relationships and a constant focus on creating value.' },
];

// Key figures. Add entries once the client confirms real numbers; the row stays hidden while this is empty.
// Example: { value: 6, suffix: '', label: 'Business Verticals' }
export const stats: { value: number; suffix?: string; label: string }[] = [];

type IconCard = { icon: IconName; title: string; text: string; href?: string };

export const commitments: IconCard[] = [
  {
    icon: 'factory',
    title: 'Contributing to Make in India',
    text: "We are committed to strengthening India's food-processing ecosystem by adding value to India's agricultural produce, creating employment opportunities and delivering quality rice products from India to markets across the country and beyond.",
  },
  {
    icon: 'leaf',
    title: 'Our Commitment to Green Manufacturing',
    text: 'We continuously work towards responsible manufacturing by reducing waste, improving resource efficiency and exploring sustainable energy solutions across our operations.',
  },
  {
    icon: 'sprout',
    title: "Supporting India's Agricultural Economy",
    text: "Our operations connect farmers, agricultural production and food processing—helping transform paddy into quality food products while contributing to India's agricultural value chain.",
  },
  {
    icon: 'globe',
    title: 'From Indian Farms to Global Markets',
    text: "We take the strength of India's agricultural production to consumers and businesses across global markets.",
    href: '/exports',
  },
];

export const reasons: IconCard[] = [
  {
    icon: 'layers',
    title: 'Diversified Business Portfolio',
    text: 'Our presence across multiple sectors provides a broad business base, balanced growth and the resilience to serve customers through changing market conditions.',
  },
  {
    icon: 'award',
    title: 'Quality at Every Step',
    text: 'From paddy procurement to the finished product, we follow consistent processes so customers receive dependable quality every time.',
  },
  {
    icon: 'factory',
    title: 'Modern Infrastructure',
    text: 'We invest in modern machinery and facilities that improve efficiency, consistency and capacity across our operations.',
  },
  {
    icon: 'sprout',
    title: 'Rooted in Agriculture',
    text: 'Our businesses have grown from the land. Close relationships with farmers and local communities remain at the centre of how we work.',
  },
  {
    icon: 'trending-up',
    title: 'Responsible Growth',
    text: 'We aim to grow in a way that uses resources carefully, creates local employment and builds value for the long term.',
  },
  {
    icon: 'users',
    title: 'Trusted Relationships',
    text: 'We believe in fair dealing, timely delivery and commitments kept — with customers, suppliers, partners and employees.',
  },
];
