# BBC Group India — Website Build Guide

Step-by-step plan to build the website, from empty Astro project to launch.

| | |
|---|---|
| **Client** | BBC Group India (flagship company: BBC Rice Industries Pvt. Ltd.) |
| **Agency** | Welfare Infotech |
| **Reference site** | https://www.olamagri.com/ |
| **Stack** | Astro 7 + Tailwind CSS 4 (already installed), static output |
| **Enquiry form** | Web3Forms → bbcriceindustries@gmail.com |
| **Date** | 7 Oct 2026 |
| **Related** | [PRD.md](PRD.md) (earlier requirements draft; this guide supersedes its open items on logo, contact details and form delivery) |

---

## 0. The brief in one paragraph

The client is a rice miller who has now started exporting. He wants a website "like Olam Agri" that presents the wider BBC Group India (six business verticals) while making the rice mill and export business the hero, and that shows the company as aligned with Government of India priorities (Make in India, green manufacturing, the farmer ecosystem, export from India). He has no photos or videos and will send content in pieces as he thinks of it. So the site must (a) look complete and premium on day one without his media, and (b) be built so new content can be dropped in without redesign.

**Client instruction, 7 Oct 2026:** Mining & Minerals (limestone quarry, limestone processing, crusher operations) and Fuel & Energy (fuel station / petroleum retail) are **not to be mentioned on the website for now**. They have been removed from the sitemap, navigation, copy, enquiry form and image plan below. The site shows six verticals. If the client later asks for them, add one content file per vertical and restore the phrases in the hero and intro copy.

**Decisions taken in this guide**

1. One website for **BBC Group India**, with **Rice & Exports as the lead story** on the home page and in the navigation.
2. A custom theme in Astro + Tailwind, modelled on Olam Agri's layout and motion, in BBC's own gold / green / ivory colours.
3. Every section is driven by content files and has an on/off switch, so missing content hides cleanly instead of showing placeholders.
4. Imagery is solved with licensed stock, brand graphics and icon-led layouts, with fixed image slots ready for real photos later.

---

## 1. Reference site analysis — olamagri.com

### 1.1 What "theme" it uses

Olam Agri does **not use a purchasable theme** (it is not WordPress/ThemeForest). It is a custom corporate design built on **Adobe Experience Manager – Edge Delivery Services**, with jQuery, **Locomotive Scroll** (smooth scrolling and scroll-reveal), **Slick** (carousels) and YouTube/Vimeo embeds. There is nothing to buy or download; we recreate the *style* ourselves.

### 1.2 Its design language

| Element | What Olam Agri does |
|---|---|
| Typeface | Gilroy (commercial geometric sans) — regular for body, semibold for headings. Headings are modest in size (32–36px), not shouty. |
| Colours | Charcoal `#2E2D2C` and white as the base; one loud brand colour, orange `#FF7000`; small accent colours (yellow, purple, pink, cyan) used only in line icons. |
| Header | Slim utility bar (Contact, Locations, Search, Subscribe) above a transparent header that sits over the hero. |
| Hero | Full-width slider: a bold **angled/curved colour panel** on the left carrying the headline and button, photo on the right, dot pagination. |
| Key figures | Dark band with a statement on the left and four animated counters with line icons (facilities, customers, countries, employees). |
| Video block | Dark band, text + video thumbnail with play icon. |
| Products | Horizontal carousel of image tiles with the product name. |
| Feature bands | Alternating text + image blocks, and one full-bleed image with a text card overlaid; each ends in "Discover More". |
| News | Card row with date and headline. |
| Closing band | Dark "Talk to Us" call-to-action. |
| Motion | Smooth inertia scrolling, sections fade/slide up as they enter, counters count up, carousels glide. Calm and slow — nothing bounces. |

### 1.3 What we take and what we don't

We take the **structure, pacing and motion**. We do not copy Olam's text, photos, icons, logo, orange colour or code.

---

## 2. Our theme — "Golden Grain"

A custom Astro + Tailwind theme. Same skeleton as Olam Agri; colours and character come from the BBC logo (gold wheat-ear roundel on ivory).

### 2.1 Colour tokens

| Token | Hex | Use |
|---|---|---|
| `gold-500` | `#C2952E` | Brand colour: angled hero panel, buttons, rules, icons, counters |
| `gold-600` | `#A67C1E` | Button hover, gold on light backgrounds |
| `gold-300` | `#E3C878` | Gold on dark backgrounds, highlights |
| `paddy-900` | `#12301C` | Dark bands (replaces Olam's charcoal), footer |
| `paddy-700` | `#1F4D2B` | Secondary panels, hover states |
| `paddy-500` | `#3F8F4F` | Sustainability accents, success states |
| `ivory` | `#FAF7EF` | Page background for alternating sections (the logo's paper colour) |
| `ink` | `#23221F` | Body text |
| `white` | `#FFFFFF` | Cards, default background |

Rule: gold is for large shapes, icons and headings on dark. **Never small gold text on white** — it fails contrast. Body text is always `ink` on light or white on `paddy-900`.

### 2.2 Typography

| Role | Font | Why |
|---|---|---|
| Headings + body | **Plus Jakarta Sans** (variable, free) | Closest free match to Gilroy's geometric look |
| Accent (hero eyebrow, pull quotes, big numerals) | **Cormorant Garamond** (free) | Echoes the serif "BBC" lettering in the logo |

Self-host both through `@fontsource-variable/plus-jakarta-sans` and `@fontsource/cormorant-garamond` (no Google Fonts request, faster, no consent issue).

Scale: body 16–18px, section headings 32–40px, hero heading 44–64px, counters 56–72px.

### 2.3 Shapes and motifs

- **Angled panel**: the hero and page banners use a diagonal-cut colour panel (`clip-path: polygon(...)`), our equivalent of Olam's orange wedge.
- **Grain arc**: the wheat ear and concentric arcs from the logo, redrawn as SVG, used as a faint watermark in section corners and as section dividers.
- **Five stars**: the logo's star row reused as a small divider above section headings.
- Corners: 4px radius on cards and buttons (corporate, not bubbly). Generous white space; max content width 1280px.

### 2.4 Motion

| Effect | Where | Tool |
|---|---|---|
| Page-to-page transition (cross-fade + slight slide, header and logo persist) | All internal links | Astro `<ClientRouter />` view transitions |
| Smooth inertia scroll | Whole site (desktop) | Lenis |
| Stacked tiles: a section marked `data-stack` sticks while the next slides up over it with rounded corners; the covered one shrinks and dims | Available but not used on any page at present (removed from the home page at the client's request) | CSS sticky + GSAP ScrollTrigger |
| Reveal on scroll: fade + 24px rise, staggered for grids | Every section | GSAP + ScrollTrigger |
| Image mask reveal (image wipes in behind a gold curtain) | Feature bands, banners | GSAP |
| Slow parallax on full-bleed images | Hero, overlay bands | GSAP ScrollTrigger |
| Count-up numbers | Key figures | GSAP |
| Hero slider with Ken Burns zoom and progress dots | Home hero | Embla Carousel |
| Marquee strip | Export destinations / product names | CSS animation |
| Card hover: image zoom, gold underline draws in, arrow slides | Business tiles, links | CSS |
| Header shrinks and turns solid after 80px | Header | Small vanilla script |
| India → world route lines draw in | Export section map | SVG `stroke-dashoffset` + ScrollTrigger |

All motion is disabled under `prefers-reduced-motion`, and Lenis is off on touch devices. Durations 0.6–0.9s, ease `power3.out` — calm, like the reference.

---

## 3. Image plan (client has no photos or videos)

### 3.1 Sources, in order of preference

1. **Free licensed stock** (Unsplash, Pexels, Pixabay): Indian paddy fields, harvest, rice grains, rice sacks, mill machinery, solar panels, brick kilns, tractors in fields, construction hardware. Choose photos that look Indian and are not recognisably another company's plant.
2. **Stock video** (Pexels/Coverr): one 10–15s muted loop of paddy fields for the hero, compressed under 3 MB, with a poster image.
3. **Brand graphics instead of photos**: angled colour panels, grain-arc SVGs, line icons, large numerals, the export route map. These carry Why BBC, Commitments, Stats and CTA sections with no photos at all.
4. **Real photos later**: ask the client for phone photos of the mill, godown, paddy stock, packing, trucks and team. Even 10–15 good phone shots will beat stock on the rice and infrastructure pages.

Rules:
- Stock photos are illustrative. Do not caption a stock photo as "our mill" or "our farm".
- Kubota: use only generic tractor imagery and the plain text "Authorized Kubota Dealer" until the client confirms what Kubota's dealer guidelines allow. No Kubota logo or product photos from their site.
- Government initiatives: do not use the Make in India lion logo, the national emblem or ministry logos. Use our own icons and plain text.
- Keep a credits sheet (`docs/image-credits.md`) with source URL and licence for every stock file.

### 3.2 Image slots

Every slot has a fixed aspect ratio, so swapping in the client's photo later never breaks layout. Store under `src/assets/images/` and render with `astro:assets` `<Image />` (auto WebP/AVIF, responsive sizes, lazy load).

| Slot | Ratio | Subject |
|---|---|---|
| Hero slide 1 (brand) | 16:9, right 60% of screen | Golden paddy field at sunrise (or video loop) |
| Hero slide 2 (rice) | 16:9 | Close-up of polished rice grains / rice in hands |
| Hero slide 3 (export) | 16:9 | Container port or stacked jute/PP rice bags |
| Hero slide 4 (group) | 16:9 | Solar panels over farmland |
| Intro block | 4:5 portrait | Farmer in paddy field |
| Business tiles ×6 | 4:3 | One per vertical (see §5.3) |
| Export band | Full-bleed 21:9 | Cargo ship / port, dark overlay, map SVG on top |
| Commitments | none | Icons only |
| Why BBC | none | Icons only |
| Infrastructure teaser | 3:2 | Mill machinery / warehouse |
| Sustainability band | Full-bleed 21:9 | Green fields with solar or irrigation |
| Careers teaser | 3:2 | Workers / team at an agri facility |
| Page banners | 21:9, angled panel overlay | One per page |
| Rice varieties | 1:1 | Grain close-ups on plain background |

### 3.3 Logo

`public/images/bbclogo.png` is a **mock-up image** (gold foil on textured paper with a shadow). A transparent gold version (`src/assets/brand/logo.png`) and a white version (`logo-white.png`) have been extracted from it and are used on the site. Still worth doing when possible:

1. Redraw/trace the roundel as a clean **SVG** (gold `#C2952E` on transparent).
2. Export `logo.svg` (gold), `logo-white.svg` (for dark backgrounds), and a horizontal lock-up: roundel + "BBC GROUP INDIA" wordmark.
3. Generate `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` and a 1200×630 social share image from it.
4. Ask the client whether a vector/original file exists; if it does, use that instead.

---

## 4. Sitemap and navigation

```
/                                   Home
/about                              About Us
/businesses                         Our Businesses
/businesses/rice-processing         Rice & Food Processing   ← flagship, fullest page
/businesses/agriculture             Agriculture & Farms
/businesses/renewable-energy        Renewable Energy
/businesses/brick-manufacturing     Brick Manufacturing
/businesses/construction-supplies   Building Construction Supplies
/businesses/agricultural-machinery  Agricultural Machinery (Kubota)
/exports                            From Indian Farms to Global Markets   ← new
/infrastructure                     Infrastructure
/sustainability                     Sustainability & National Commitments
/leadership                         Leadership
/careers                            Careers
/contact                            Contact Us
/thank-you                          Form success page
/privacy-policy                     Privacy Policy
/404
```

Optional later: `/gallery`, `/news`, `/projects`.

**Header navigation:** Home · About Us · Our Businesses ▾ (six verticals) · Exports · Infrastructure · Sustainability · Leadership · Careers · **Contact Us** (gold button)

**Utility bar (above header):** phone `+91 73850 20542` · email · "Enquire Now"

A page whose content has not arrived is switched off in `src/data/site.ts` and disappears from the nav and footer automatically (most likely Leadership and Careers at first launch).

---

## 5. Content — master copy

Client-supplied copy is used verbatim. Copy marked **[Draft]** was written by us to fill gaps and needs client approval. Anything marked **[Client to confirm]** must not go live as fact until confirmed.

### 5.1 Brand

- **Name:** BBC Group India
- **Tagline:** Building Businesses. Creating Value. Growing Together.
- **Alternatives:** Diversified Businesses. Sustainable Growth. / Strength Across Industries. Value for Generations. / From Agriculture to Industry, Building a Better Future.
- **Positioning:** BBC Group India is a diversified business group with interests across agriculture, food processing, renewable energy, manufacturing, construction supply and agricultural machinery. The Group's businesses are built around a common philosophy of responsible growth, operational excellence, quality, and long-term value creation.

### 5.2 Home page — section by section

**1. Hero (slider)**

- Slide 1 — *Building Businesses. Creating Value. Growing Together.*
  BBC Group India is a diversified business group with a growing presence across agriculture, rice processing, renewable energy, brick manufacturing, building construction supplies, and agricultural machinery.
  Supporting text: With a focus on quality, efficiency and responsible growth, BBC Group India is building businesses that contribute to the economy, create employment and generate long-term value for customers, partners and communities.
  Buttons: **Explore Our Businesses** → `/businesses` · **Know About BBC Group** → `/about`
- Slide 2 **[Draft]** — *From Indian Farms to Global Markets.* Quality rice, processed in India and supplied to buyers at home and abroad. Button: **Explore Exports** → `/exports`
- Slide 3 **[Draft]** — *Rice Milled with Care.* Modern paddy processing for consistent quality in every grain. Button: **Explore Rice Processing**
- Slide 4 **[Draft]** — *Diversified Businesses. Sustainable Growth.* Button: **Our Sustainability Approach**

**2. Introduction + key figures** (ivory background, portrait image left, text right, counters below)

*A Diversified Group. One Vision.*

BBC Group India brings together businesses operating across multiple sectors of the Indian economy.

From agriculture and rice processing to renewable energy, brick manufacturing, building construction supplies and agricultural machinery, our businesses are connected by a common commitment to operational excellence, reliability and sustainable growth.

We believe that strong businesses are built over time through disciplined execution, trusted relationships and a constant focus on creating value.

Our approach is simple: build responsibly, operate efficiently and grow for the long term.

Counters: **6** Business Verticals · **[__]** Years of Operation · **[__]** TPH Milling Capacity · **[__]** Team Members **[Client to confirm all figures; the row shows only the counters that have real values]**

**3. Our Businesses** (carousel on mobile, 3×2 grid on desktop)

| Tile | Copy | Link | Image subject |
|---|---|---|---|
| Agriculture & Farms | Our agricultural activities are focused on productive farming and responsible utilization of agricultural resources. | Explore Agriculture → | Paddy field |
| Rice & Food Processing | Our rice business focuses on modern paddy processing and the production of quality rice and associated by-products. | Explore Rice Processing → | Rice grains / mill |
| Renewable Energy | We are developing our presence in renewable energy with a focus on solar power and clean energy solutions. | Explore Renewable Energy → | Solar panels |
| Brick Manufacturing | Our brick manufacturing business serves the construction and infrastructure sector with quality building materials. | Explore Brick Manufacturing → | Stacked bricks |
| Building Construction Supplies | Our building construction supply business provides hardware and related materials for construction, infrastructure and building projects. | Explore Construction Supplies → | Hardware / steel |
| Agricultural Machinery | BBC Group India is an authorized dealer of Kubota, a Japanese technology-based tractor company, providing reliable agricultural machinery and tractor solutions to farmers and agricultural customers. | Explore Agricultural Machinery → | Tractor in field (generic) |

**4. From Indian Farms to Global Markets** (full-bleed dark image, route-map SVG, destinations marquee)

We take the strength of India's agricultural production to consumers and businesses across global markets, contributing to India's growing position in the international food and rice trade.

Button: **Explore Our Export Business** → `/exports` · **Send an Export Enquiry** → `/contact?interest=export`

**5. Aligned with India's Growth Priorities** (four icon cards on `paddy-900`)

Section intro **[Draft]**: Our work is guided by the same priorities that are shaping India's economy — manufacturing in India, growing responsibly, strengthening agriculture and taking Indian produce to the world.

| Card | Heading | Copy |
|---|---|---|
| 1 | Contributing to Make in India | We are committed to strengthening India's food-processing ecosystem by adding value to India's agricultural produce, creating employment opportunities and delivering quality rice products from India to markets across the country and beyond. |
| 2 | Our Commitment to Green Manufacturing | We continuously work towards responsible manufacturing by reducing waste, improving resource efficiency and exploring sustainable energy solutions across our operations. |
| 3 | Supporting India's Agricultural Economy | Our operations connect farmers, agricultural production and food processing—helping transform paddy into quality food products while contributing to India's agricultural value chain. |
| 4 | From Indian Farms to Global Markets | (short version of section 4, linking to `/exports`) |

Wording rule: say "contributing to" / "aligned with". Never "approved by", "certified under" or "partner of" a government scheme unless the client holds that registration.
Note: the client's list was numbered 1, 2, 3, 5 — item 4 is missing. **[Ask client whether a fourth initiative was intended, e.g. Atmanirbhar Bharat, PM Formalisation of Micro Food Processing, One District One Product.]**

**6. Why BBC Group India?** (six icon cards, ivory background) — client copy stopped mid-sentence at the first item; all below is **[Draft]**

| Heading | Copy |
|---|---|
| Diversified Business Portfolio | Our presence across multiple sectors provides a broad business base, balanced growth and the resilience to serve customers through changing market conditions. |
| Quality at Every Step | From paddy procurement to the finished product, we follow consistent processes so customers receive dependable quality every time. |
| Modern Infrastructure | We invest in modern machinery and facilities that improve efficiency, consistency and capacity across our operations. |
| Rooted in Agriculture | Our businesses have grown from the land. Close relationships with farmers and local communities remain at the centre of how we work. |
| Responsible Growth | We aim to grow in a way that uses resources carefully, creates local employment and builds value for the long term. |
| Trusted Relationships | We believe in fair dealing, timely delivery and commitments kept — with customers, suppliers, partners and employees. |

**7. Infrastructure teaser** **[Draft]** — *Built for Capacity and Consistency.* Our facilities bring together processing, storage and logistics to deliver reliable supply at scale. → `/infrastructure`

**8. Sustainability band** **[Draft]** — *Growing Responsibly.* We work to reduce waste, use energy and water more efficiently and create lasting value for the communities around us. → `/sustainability`

**9. Careers teaser** **[Draft]** — *Grow with BBC Group India.* Join a group that is building across agriculture, food, energy and industry. → `/careers` (hidden if Careers is off)

**10. Contact band** **[Draft]** — *Let's Talk Business.* Whether you are a buyer, supplier, farmer or partner, we would like to hear from you. Buttons: **Send an Enquiry** · **Call +91 73850 20542**

### 5.3 Inner pages — outline

**About Us** — Who we are (positioning copy) · Our philosophy: Build responsibly / Operate efficiently / Grow for the long term · Vision and Mission **[Draft, to write]** · Values: Quality, Integrity, Reliability, Responsibility, Growth · Timeline (BBC Rice Industries Pvt. Ltd. incorporated July 2020 per public records **[Client to confirm; add other milestones]**) · Verticals snapshot.

**Our Businesses** — intro + six cards.

**Vertical page template** (one template, six content files): angled banner → overview → what we do (icon list) → facilities/capacity (shown only if data exists) → quality → gallery (shown only if images exist) → enquiry form pre-set to that vertical → other businesses.

**Rice & Food Processing (flagship)** adds: process flow graphic (Paddy procurement → Cleaning → De-husking → Polishing → Sorting/grading → Packing → Dispatch, animated on scroll) · rice varieties grid · by-products (bran, husk, broken rice) · packaging options · quality and food-safety registrations **[Client to confirm: varieties, capacity, sortex or not, FSSAI number, brand names, pack sizes]**.

**Exports** — *From Indian Farms to Global Markets* · why source from us · products for export · packing and private-label options · how we work (Enquiry → Sample → Quotation → Contract → Shipment) · documentation and compliance · destinations map · export enquiry form. **[Client to confirm: IEC, APEDA registration, export varieties, ports used, countries served or targeted, payment/inco terms, minimum order.]** Until confirmed, the page speaks about capability and intent, and lists no countries, certificates or volumes.

**Infrastructure** — facility cards per vertical with capacity and location; only verticals with data are shown.

**Sustainability & National Commitments** — the four commitment sections in full, plus Environment / People / Community. Green claims go live only for practices the client actually follows. **[Client to confirm: husk used as boiler fuel? solar installed (kW)? water reuse? ETP? plantation? bran/husk sold onward?]**

**Leadership** — Chairman/MD message + profile cards **[names, designations, photos, bios needed; page off until supplied]**.

**Careers** — why work with us + "send us your details" form. No CV upload (Web3Forms free plan has no file attachments); applicants are asked to email their CV instead.

**Contact Us** — details below, enquiry form, Google map, "View on Google Maps" button.

### 5.4 Contact details

| | |
|---|---|
| Contact person | Aayush Singh |
| Phone | +91 73850 20542 → `tel:+917385020542` |
| WhatsApp | `https://wa.me/917385020542` **[confirm the number is on WhatsApp]** |
| Email | bbcriceindustries@gmail.com → `mailto:` |
| Google Business Profile | https://share.google/N030ydPlvanEKhMqx — "BBC Rice Industries Private Limited, Salhebharri" |
| Mill address (from public listings) | Salhebharri, Baldeopur, Dist. Rajnandgaon, Chhattisgarh 491881 **[Client to confirm exact wording]** |
| Registered office (from public listings) | Plot No. 15, Thakur Para, Khairagarh, Chhattisgarh 491881 **[Client to confirm]** |

- The Google link is used as the **"View on Google Maps / Get Directions"** button on the Contact page and footer.
- For the embedded map, open the Business Profile in Google Maps → Share → *Embed a map* → paste the iframe `src` into `site.ts`.
- Floating buttons on mobile: Call and WhatsApp.

---

## 6. Enquiry form (Web3Forms)

### 6.1 One-time setup

1. Go to https://web3forms.com, enter **bbcriceindustries@gmail.com** and create an access key. The key is emailed to that inbox, so this needs the client (or someone with access to that mailbox).
2. Put the key in `.env` as `PUBLIC_WEB3FORMS_KEY=...` and add the same variable in the hosting dashboard. (The Web3Forms key is designed to be public, so it is safe in client-side code; the env var just keeps it out of the components.)
3. In the Web3Forms dashboard, restrict the key to the live domain once the site is launched.

### 6.2 Form fields

| Field | Type | Required |
|---|---|---|
| Full name | text | yes |
| Company / organisation | text | no |
| Phone (with country code) | tel | yes |
| Email | email | yes |
| Country | text | yes on export form |
| I am interested in | select: Rice – Domestic, Rice – Export, Agriculture, Renewable Energy, Bricks, Construction Supplies, Kubota Tractors & Machinery, Careers, Other | yes |
| Quantity / requirement | text | no (shown for rice options) |
| Message | textarea | yes |
| Consent checkbox | "I agree to be contacted about my enquiry" | yes |

Hidden fields: `access_key`, `subject` ("New website enquiry – {interest}"), `from_name` ("BBC Group India Website"), `page` (URL the form was sent from), and the honeypot `botcheck` checkbox (hidden with CSS) for spam.

### 6.3 Behaviour

- One `EnquiryForm.astro` component, used on Contact, Exports, every vertical page (interest pre-selected) and in a slide-in "Enquire Now" drawer from the header.
- Submit with `fetch` to `https://api.web3forms.com/submit` as JSON; show an inline success message and fall back to a normal POST with `redirect` → `/thank-you` if JavaScript is off.
- Client-side validation with clear inline errors; button shows a loading state and is disabled while sending.
- Add hCaptcha (supported by Web3Forms) only if spam becomes a problem.
- Test: send one enquiry from each form and confirm it lands in bbcriceindustries@gmail.com (check Spam the first time and mark as "Not spam").

---

## 7. Technical setup

### 7.1 Packages to add

```bash
npm install gsap lenis embla-carousel @fontsource-variable/plus-jakarta-sans @fontsource/cormorant-garamond @astrojs/sitemap astro-icon @iconify-json/lucide
```

### 7.2 Folder structure

```
src/
  assets/
    images/            stock + client photos (optimised by astro:assets)
    brand/             logo.svg, logo-white.svg, grain-arc.svg
  components/
    layout/            TopBar, Header, MobileMenu, Footer, FloatingActions
    home/              HeroSlider, IntroStats, BusinessGrid, ExportBand,
                       Commitments, WhyBBC, FeatureBand, CtaBand
    ui/                Button, SectionHeading, PageBanner, StatCounter,
                       BusinessCard, IconCard, ProcessFlow, RouteMap, Reveal
    forms/             EnquiryForm, EnquiryDrawer
  content/
    businesses/        one .md per vertical (frontmatter + body)
    leadership/        one .md per person (added later)
  data/
    site.ts            contact details, nav, feature flags, stats, map URL
    home.ts            hero slides, why-BBC items, commitments
  layouts/             Layout.astro (head, SEO, ClientRouter), PageLayout.astro
  pages/               index, about, businesses/index, businesses/[slug],
                       exports, infrastructure, sustainability, leadership,
                       careers, contact, thank-you, privacy-policy, 404
  scripts/             motion.ts (Lenis + GSAP reveals), header.ts, slider.ts
  styles/global.css    Tailwind import + @theme tokens
  content.config.ts    collection schemas
```

### 7.3 How late-arriving content is handled

- `site.ts` holds `pages: { leadership: false, careers: false, ... }`. Nav, footer, sitemap and home teasers read these flags.
- Stats, certifications, capacities and gallery arrays are optional in the schema; components render nothing when a value is empty.
- Adding a photo = drop the file in `src/assets/images/` and change one path in a content file.
- Adding or changing copy = edit a Markdown/TS content file; no component changes.

### 7.4 Notes for implementation

- With `<ClientRouter />`, page scripts must re-initialise on the `astro:page-load` event and clean up GSAP ScrollTriggers / Lenis on `astro:before-swap`.
- Use `transition:persist` on the header and `transition:name` on business-tile image → page-banner image for a shared-element morph.
- Run the dev server with `astro dev --background` (see `CLAUDE.md`).

---

## 8. Build tasks

The build is split into seven tasks, done and reviewed one at a time.

| Task | Scope | Status |
|---|---|---|
| 1. Foundation | Logo assets, theme tokens, site data, layout, header, footer, motion system, UI primitives | Done |
| 2. Home page | Hero slider, intro + counters, business grid, export band, commitments, Why BBC, feature bands, CTA | Done |
| 3. Businesses | Overview page, six vertical pages from one template, rice flagship extras | Done |
| 4. Exports + Sustainability | `/exports`, Sustainability & National Commitments | Done |
| 5. Corporate pages | About, Infrastructure, Contact, Leadership and Careers (switched off), Privacy, 404 | Done |
| 6. Enquiry forms | Web3Forms enquiry form, thank-you page, delivery test | Built; delivery test waits for the Web3Forms key |
| 7. SEO, QA, launch | Metadata, sitemap, structured data, performance, accessibility, hosting | Next |

### Detailed steps

### Phase 1 — Foundation
- [x] 1. Create the clean logo set (SVG gold, SVG white, favicon, social image) from `public/images/bbclogo.png`.
- [x] 2. Install packages (§7.1); add the sitemap and icon integrations to `astro.config.mjs` with the final `site` URL.
- [x] 3. Define colour, font, radius and spacing tokens in `src/styles/global.css` with Tailwind `@theme` (§2).
- [x] 4. Create `src/data/site.ts` with contact details, nav, page flags (§5.4, §7.3).
- [x] 5. Rebuild `Layout.astro`: SEO head (title, description, canonical, Open Graph), fonts, favicon, `<ClientRouter />`, skip link.
- [x] 6. Build `TopBar`, `Header` (transparent → solid on scroll, Businesses dropdown), `MobileMenu`, `Footer`, `FloatingActions`.
- [x] 7. Build UI primitives: `Button`, `SectionHeading`, `PageBanner`, `Reveal`, `IconCard`, `StatCounter`.
- [x] 8. Write `motion.ts`: Lenis, GSAP reveal/stagger/parallax/counter helpers, reduced-motion guard, view-transition lifecycle.

### Phase 2 — Home page
- [x] 9. Collect and optimise stock images/video for the home slots (§3.2); start `docs/image-credits.md`.
- [x] 10. `HeroSlider` with angled panel, four slides, Ken Burns, dots, autoplay with pause on hover.
- [x] 11. `IntroStats` — intro copy + counters.
- [x] 12. `BusinessGrid` — six tiles from the `businesses` collection.
- [x] 13. `ExportBand` with `RouteMap` SVG and marquee.
- [x] 14. `Commitments` — four national-priority cards.
- [x] 15. `WhyBBC` — six icon cards.
- [x] 16. Infrastructure / Sustainability / Careers `FeatureBand`s and the closing `CtaBand`.
- [ ] 17. **Client review of the home page** before going further.

### Phase 3 — Businesses and Exports
- [x] 18. `content.config.ts` + six business Markdown files.
- [x] 19. `/businesses` overview and the `[slug]` template.
- [x] 20. Rice page extras: `ProcessFlow`, varieties, by-products, packaging.
- [x] 21. `/exports` page.

### Phase 4 — Corporate pages
- [x] 22. About, Infrastructure, Sustainability & National Commitments.
- [x] 23. Leadership and Careers (built, switched off until content arrives).
- [x] 24. Contact page with map and Google profile button; Privacy Policy; 404.

### Phase 5 — Forms
- [ ] 25. Get the Web3Forms access key (§6.1).
- [x] 26. Build `EnquiryForm`; on Contact and Exports, with business pages linking to it pre-selected. (The slide-in drawer from the header was not built.)
- [x] 27. `/thank-you` page.
- [ ] 27a. Test delivery from every form once the key is in `.env`.

### Phase 6 — SEO, performance, accessibility
- [ ] 28. Unique title/description per page; Organization + LocalBusiness JSON-LD (name, address, phone, Google profile as `sameAs`); `sitemap.xml`, `robots.txt`.
- [ ] 29. Lighthouse mobile ≥ 90: image sizes, hero preload, font subsetting, video poster.
- [ ] 30. Keyboard navigation, focus states, alt text, contrast check on gold, reduced-motion check.
- [ ] 31. Test at 360, 768, 1024, 1440px on Chrome, Safari, Firefox, Android, iOS.

### Phase 7 — Launch
- [ ] 32. Choose hosting (Netlify / Vercel / Cloudflare Pages all suit a static Astro site) and connect the domain.
- [ ] 33. Set `PUBLIC_WEB3FORMS_KEY` on the host; restrict the key to the domain.
- [ ] 34. Add Google Search Console and Analytics (if wanted); submit the sitemap.
- [ ] 35. Add the website URL to the Google Business Profile.
- [ ] 36. Hand over a one-page "how to send us new content" note to the client.

---

## 9. What to ask the client (send as a simple WhatsApp checklist)

Nothing here blocks starting the build; each item unlocks a section.

**Soon**
1. Original logo file (vector or high-resolution), if any.
2. Confirm addresses for the mill and registered office, and that 73850 20542 is on WhatsApp.
3. Create the Web3Forms key from the bbcriceindustries@gmail.com inbox (2 minutes).
4. Domain name: owned already or to be bought?
5. Was there a 4th government initiative in the list (it jumps from 3 to 5)?

**Rice and export**
6. Rice varieties, milling capacity, machinery (sortex, etc.), brands and pack sizes.
7. Export status: IEC, APEDA, FSSAI numbers; countries already shipped to or targeted; ports.
8. Any certificates (ISO, HACCP, FSSAI, others) — photo or PDF.

**Group**
9. Year each business started; real numbers for the counters (years, capacity, employees, acres).
10. Which green practices are actually in place (husk boiler, solar kW, water reuse, plantation).
11. Kubota dealership: showroom address and what branding Kubota allows.
12. Brick plant location and capacity.
13. Leadership names, designations, photos and a short message from the head of the group.
14. Any phone photos or videos of the mill, godown, farms, trucks, showroom and team.
15. Social media links, if any.

---

## 10. Definition of done

- Home, About, Businesses (6), Exports, Sustainability, Infrastructure and Contact are live; switched-off pages leave no dead links.
- No lorem ipsum, no empty image boxes, no unconfirmed figures, certificates or country names, and no sample leadership profiles (`isSample` is `false`).
- Enquiries from every form arrive at bbcriceindustries@gmail.com.
- Page transitions and scroll animations run smoothly on a mid-range Android phone and are disabled under reduced-motion.
- Lighthouse mobile ≥ 90 for Performance, SEO and Best Practices.
- Client has approved the home page and the Rice page.

---

## 11. Leadership page (added 7 Oct 2026)

Modelled on https://www.olamagri.com/about-us/our-leadership:

- Banner with breadcrumb (About Us / Our Leadership), then a dark two-column intro with one highlighted word in the headline.
- Portrait tiles, four per row with an incomplete last row centred. Each tile has a photo with two opposite rounded corners, name, designation and "View Biography", which opens a pop-up with the full biography.

**The page currently shows sample data.** All seven names, designations and biographies in `src/data/leadership.ts` are placeholders, the portraits are generated silhouettes, and a notice on the page says so. Before launch: replace the entries with the client's real details, add portraits (4:5, plain background) under `src/assets/images/leadership/`, and set `isSample` to `false`. Do not launch with `isSample` still `true`.

## 12. Careers page (added 7 Oct 2026)

Modelled on https://www.olamagri.com/careers, without its job search, job alerts or talent-community login:

- Banner, with a dark rounded card overlapping its lower edge (where the reference has its job search) inviting visitors to fill the enquiry form.
- "Discover Your Potential in a Growing Group" text and image block.
- Three cards: Grow Your Career, Our Culture, Make a Difference.
- Careers enquiry form: name, phone, email, city, area of interest, experience, about you. Delivered by Web3Forms like every other form (`src/components/forms/Web3Form.astro`). No CV upload; no accounts.

Left out because we have no real material for them: employee stories, employer awards and colleague quotes. They can be added when the client has genuine ones.
