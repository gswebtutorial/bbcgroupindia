import type { ImageMetadata } from 'astro';

export type Leader = {
  name: string;
  role: string;
  /** Biography paragraphs shown in the "View Biography" pop-up */
  bio: string[];
  /** Portrait, ideally 4:5 on a plain background. A silhouette is shown while this is missing. */
  photo?: ImageMetadata;
};

// !! SAMPLE DATA !!
// Every name, designation and biography below is a placeholder so the page layout can be reviewed.
// Replace them with the client's real details, add photos to src/assets/images/leadership/,
// then set `isSample` to false to remove the notice shown on the page.
export const isSample = true;

const sampleBio = [
  'This is a sample biography shown for layout purposes only. It will be replaced with a short profile covering background, experience and current responsibilities within the Group.',
  'A second paragraph can describe areas of focus, key achievements and the businesses this person oversees.',
];

export const leaders: Leader[] = [
  { name: 'Name Surname', role: 'Chairman', bio: sampleBio },
  { name: 'Name Surname', role: 'Managing Director', bio: sampleBio },
  { name: 'Name Surname', role: 'Director, Rice & Exports', bio: sampleBio },
  { name: 'Name Surname', role: 'Director, Operations', bio: sampleBio },
  { name: 'Name Surname', role: 'Head, Finance & Accounts', bio: sampleBio },
  { name: 'Name Surname', role: 'Head, Agriculture & Farms', bio: sampleBio },
  { name: 'Name Surname', role: 'Head, Agricultural Machinery', bio: sampleBio },
];
