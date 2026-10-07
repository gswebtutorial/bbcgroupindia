import { businesses } from './businesses';

export const site = {
  name: 'BBC Group India',
  tagline: 'Building Businesses. Creating Value. Growing Together.',
  description:
    'BBC Group India is a diversified business group with a growing presence across agriculture, rice processing, renewable energy, brick manufacturing, building construction supplies and agricultural machinery.',

  contact: {
    person: 'Aayush Singh',
    phoneDisplay: '+91 73850 20542',
    phoneHref: 'tel:+917385020542',
    email: 'bbcriceindustries@gmail.com',
    // Set to true once the client confirms this number is on WhatsApp
    whatsappEnabled: false,
    whatsappHref: 'https://wa.me/917385020542',
    mapsUrl: 'https://share.google/N030ydPlvanEKhMqx',
    // Keyless Google Maps embed that searches for the business listing. Replace with the
    // iframe src from Google Maps > Share > Embed a map once the client confirms the pin.
    mapEmbedUrl:
      'https://www.google.com/maps?q=BBC+Rice+Industries+Private+Limited+Salhebharri+Rajnandgaon&output=embed',
    // TODO: address as shown on the client's Google Business listing, client to confirm wording
    address: 'Salhebharri, Khairagarh, Chhattisgarh 491881, India',
  },

  // Switch a page on when its content arrives. Off pages vanish from nav and footer.
  pages: {
    exports: true,
    infrastructure: true,
    sustainability: true,
    leadership: true,
    careers: true,
  },
};

type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

const allNav: (NavItem & { enabled?: boolean })[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Our Businesses',
    href: '/businesses',
    children: businesses.map((b) => ({ label: b.title, href: `/businesses/${b.slug}` })),
  },
  { label: 'Exports', href: '/exports', enabled: site.pages.exports },
  { label: 'Infrastructure', href: '/infrastructure', enabled: site.pages.infrastructure },
  { label: 'Sustainability', href: '/sustainability', enabled: site.pages.sustainability },
  { label: 'Leadership', href: '/leadership', enabled: site.pages.leadership },
  { label: 'Careers', href: '/careers', enabled: site.pages.careers },
];

export const nav: NavItem[] = allNav.filter((item) => item.enabled !== false);
