# BBC Group India — Corporate Website PRD

| | |
|---|---|
| **Client** | BBC Group India |
| **Agency** | Welfare Infotech |
| **Reference site** | https://www.olamagri.com/ |
| **Stack** | Astro 7, Tailwind CSS 4 (static site) |
| **Status** | Draft v1 — 7 Oct 2026 |
| **Content source** | Client document "Complete Website Content — Developer-Ready Master Copy" |

---

## 1. Summary

BBC Group India is a diversified business group operating across eight verticals: agriculture, rice processing, renewable energy, brick manufacturing, building construction supplies, agricultural machinery (authorised Kubota dealer), mining & minerals, and fuel & energy.

The group needs a corporate website that presents it as one credible, established group with a single vision, and gives each vertical its own page. The client has pointed to Olam Agri's website as the benchmark for look, structure and tone.

The site currently shows a "Coming Soon" placeholder. This PRD covers replacing it with the full website.

## 2. Goals and non-goals

### Goals

1. Establish BBC Group India as a credible, diversified group for customers, partners, banks, government bodies and job seekers.
2. Give every business vertical a dedicated, findable page with a clear enquiry path.
3. Generate enquiries (general, per-vertical, and careers) through the website.
4. Reach the visual and structural quality of the reference site while using BBC Group's own brand, copy and imagery.
5. Be fast, mobile-first and search-friendly, so the group ranks for its own name and for vertical + location searches.

### Non-goals (v1)

- E-commerce, online ordering or payments.
- Customer/dealer login or portals.
- Multi-language support (English only in v1; structure should not block Hindi later).
- Investor relations section.
- A CMS with an admin panel (content lives in the repo; see §9).

## 3. Audience

| Audience | What they want | Where they land |
|---|---|---|
| B2B buyers and contractors (rice, bricks, limestone, construction supplies) | Proof of capacity and quality, how to enquire | Vertical pages, Infrastructure, Contact |
| Farmers and agricultural customers | Kubota tractors and machinery, dealership location and phone | Agricultural Machinery, Contact |
| Partners, banks, suppliers, government bodies | Group credibility, leadership, scale | Home, About, Leadership, Infrastructure |
| Job seekers | Openings and how to apply | Careers |
| Local community and media | Sustainability work, news | Sustainability, News |

## 4. Brand

- **Name:** BBC Group India
- **Primary tagline:** Building Businesses. Creating Value. Growing Together.
- **Alternative taglines** (for section headings, footer, social cards):
  - Diversified Businesses. Sustainable Growth.
  - Strength Across Industries. Value for Generations.
  - From Agriculture to Industry, Building a Better Future.
- **Positioning:** A diversified group whose businesses share a philosophy of responsible growth, operational excellence, quality and long-term value creation.
- **Voice:** Confident, plain, corporate. Short sentences. No hype and no unverifiable claims.
- **Logo:** Supplied by client. The file is not yet in the repository (see §12). Colour palette and favicon are to be derived from it.
- **Kubota:** The Agricultural Machinery page will reference Kubota. Use of the Kubota name and logo must follow the dealer brand guidelines; the client is to confirm what is permitted.

## 5. What we take from the reference site

Olam Agri is the reference for structure, pacing and polish. We do not copy its code, text, images, logo or exact colour scheme.

| Reference pattern | How BBC Group India uses it |
|---|---|
| Slim utility bar above the header (Contact, Locations, Search, Subscribe) | Utility bar with phone, email and Contact Us. Search and Subscribe are omitted in v1. |
| Header overlaid on a full-bleed hero, turning solid on scroll | Same behaviour, with the BBC logo at left and main navigation at right |
| Hero slider with a bold angled colour panel carrying the headline, body text and a button | Hero with the same composition in the BBC brand colour. Slide 1 is the brand message; further slides can feature individual verticals. |
| Intro block with a headline beside animated key figures (facilities, customers, countries, employees) | "A Diversified Group. One Vision." beside key figures (e.g. business verticals, years in operation, employees, facilities). Figures needed from client. |
| Products & Services grid of image tiles | "Our Businesses" grid of eight vertical tiles, each with image, short description and an "Explore" link |
| Alternating full-width feature bands (Sustainability, Careers) with image, text and "Discover More" | Same pattern for Why BBC Group, Infrastructure, Sustainability and Careers teasers |
| Latest News carousel | Optional News & Updates strip, shown only if the client will supply news |
| Closing "Talk to Us" call-to-action band | Closing "Contact Us" band on every page |
| Large mega-footer | Footer with all verticals, quick links, addresses and social links |

## 6. Sitemap

```
/                               Home
/about                          About Us
/businesses                     Our Businesses (overview)
/businesses/agriculture         Agriculture & Farms
/businesses/rice-processing     Rice & Food Processing
/businesses/renewable-energy    Renewable Energy
/businesses/brick-manufacturing Brick Manufacturing
/businesses/construction-supplies  Building Construction Supplies
/businesses/agricultural-machinery Agricultural Machinery (Kubota)
/businesses/mining-minerals     Mining & Minerals
/businesses/fuel-energy         Fuel & Energy
/infrastructure                 Infrastructure
/sustainability                 Sustainability
/leadership                     Leadership
/careers                        Careers
/contact                        Contact Us
/privacy-policy                 Privacy Policy
/404                            Not found
```

Optional, subject to client content: `/gallery`, `/news` and `/news/[slug]`, `/projects`.

**Main navigation:** Home · About Us · Our Businesses (dropdown listing the eight verticals) · Infrastructure · Sustainability · Leadership · Careers · Contact Us

## 7. Page requirements

### 7.1 Home

Sections in order. Copy for sections 1–4 is final from the client document.

1. **Hero**
   - Heading: *Building Businesses. Creating Value. Growing Together.*
   - Subheading and supporting text as supplied.
   - Buttons: **Explore Our Businesses** → `/businesses`; **Know About BBC Group** → `/about`.
2. **Introduction — "A Diversified Group. One Vision."**
   - Four paragraphs as supplied, with a key-figures row alongside.
3. **Our Businesses**
   - Eight tiles in this order: Agriculture & Farms, Rice & Food Processing, Renewable Energy, Brick Manufacturing, Building Construction Supplies, Agricultural Machinery, Mining & Minerals, Fuel & Energy.
   - Each tile: image, title, the supplied one-paragraph description, and its "Explore … →" link to the vertical page.
4. **Why BBC Group India?**
   - A grid of reasons, starting with "Diversified Business Portfolio".
   - **The supplied content stops partway through this item.** Remaining items and everything after this section are pending (see §12).
5. **Infrastructure teaser** → `/infrastructure`
6. **Sustainability teaser** → `/sustainability`
7. **Careers teaser** → `/careers`
8. **News & Updates** (optional)
9. **Contact call-to-action band**

Sections 5–9 are proposed from the reference site and the navigation; they need client copy or sign-off.

### 7.2 About Us

Group overview, vision and mission, values, group philosophy (build responsibly, operate efficiently, grow for the long term), a milestones timeline if dates are available, and a snapshot of the eight verticals.

### 7.3 Our Businesses (overview)

Short introduction plus the full list of eight verticals, each linking to its page.

### 7.4 Vertical pages (one shared template, eight pages)

1. Banner with vertical name and one-line summary
2. Overview
3. What we do: products, services or activities
4. Facilities, capacity and locations
5. Quality and standards, with certifications where they exist
6. Photo gallery
7. Enquiry form pre-tagged with the vertical, plus direct phone and email
8. Links to the other verticals

Notes per vertical:

| Vertical | Specific content |
|---|---|
| Agriculture & Farms | Crops, land under cultivation, farming practices |
| Rice & Food Processing | Mill capacity, rice varieties, by-products (bran, husk, broken rice), packaging and brands |
| Renewable Energy | Solar projects, installed or planned capacity |
| Brick Manufacturing | Brick types, production capacity, delivery area |
| Building Construction Supplies | Product categories (hardware and related materials), brands stocked, store location |
| Agricultural Machinery | Authorised Kubota dealership, tractor models and implements, sales, service and spare parts, showroom address, test-drive or quote enquiry |
| Mining & Minerals | Limestone quarrying, crusher operations, product sizes and grades, compliance |
| Fuel & Energy | Fuel station location(s), oil company affiliation, services and opening hours |

### 7.5 Infrastructure

Facilities across the group (rice mill, brick plant, quarry and crusher, solar installations, showroom, fuel station, warehouses, fleet), with photos, capacities and locations.

### 7.6 Sustainability

The group's approach to environment (renewable energy, responsible resource use), community and employment, and workplace safety. Only verifiable activities are listed.

### 7.7 Leadership

Chairman's or Managing Director's message, followed by profile cards for directors and key management (photo, name, designation, short bio).

### 7.8 Careers

Why work with BBC Group, a list of current openings (or a general "send us your CV" state when there are none), and an application form with CV upload.

### 7.9 Contact Us

Registered or head office address, phone, email, office hours, embedded map, enquiry form with a "Business of interest" dropdown, and a list of unit addresses by vertical.

### 7.10 Global elements

- **Header:** utility bar, logo, navigation with the Businesses dropdown, sticky on scroll, hamburger menu on mobile.
- **Footer:** logo and tagline, links to all verticals, quick links, contact details, social links, copyright, Privacy Policy, and "Website by Welfare Infotech".
- **Floating WhatsApp / call button** on mobile (subject to client confirming a number).

## 8. Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| F1 | Responsive layout from 360px to large desktop | Must |
| F2 | Sticky header with dropdown and accessible mobile menu | Must |
| F3 | Hero supporting one or more slides, with autoplay that pauses on hover and respects reduced-motion | Must |
| F4 | Eight vertical pages generated from one template and one content source | Must |
| F5 | Contact enquiry form with validation, spam protection and email delivery to the client | Must |
| F6 | Per-vertical enquiry form that records which business the enquiry is about | Must |
| F7 | Careers application form with CV upload (PDF/DOC, size-limited) | Should |
| F8 | Animated key-figure counters and scroll-reveal animations | Should |
| F9 | Embedded map on Contact | Should |
| F10 | WhatsApp click-to-chat and click-to-call | Should |
| F11 | News listing and article pages | Could |
| F12 | Gallery with lightbox | Could |
| F13 | Site search | Won't (v1) |
| F14 | Newsletter subscription | Won't (v1) |

## 9. Technical approach

- **Framework:** Astro 7, static output. No client-side framework is needed; interactions (menu, slider, counters) use small vanilla scripts.
- **Styling:** Tailwind CSS 4, with brand colours and fonts defined as theme tokens in `src/styles/global.css`.
- **Content:** Astro content collections for `businesses`, `leadership`, `jobs` and (optionally) `news`, so the client's copy lives in Markdown/YAML files separate from layout code.
- **Images:** `astro:assets` for responsive, optimised WebP/AVIF output; lazy loading below the fold.
- **Forms:** A static site cannot send email on its own. Options are a hosted form service or a serverless function on the host. To be chosen with hosting (see §12).
- **SEO:** unique title and description per page, Open Graph and Twitter cards, `sitemap.xml`, `robots.txt`, canonical URLs, Organization and LocalBusiness structured data.
- **Analytics:** Google Analytics 4 and Search Console, if the client wants them.

### Proposed structure

```
src/
  layouts/        Layout.astro, PageLayout.astro
  components/     Header, Footer, Hero, StatCounter, BusinessCard,
                  FeatureBand, CtaBand, EnquiryForm, PageBanner
  content/        businesses/, leadership/, jobs/, news/
  pages/          index, about, businesses/[slug], infrastructure,
                  sustainability, leadership, careers, contact
  assets/         logo, images
```

## 10. Non-functional requirements

| Area | Target |
|---|---|
| Performance | Lighthouse ≥ 90 on mobile for Performance, SEO and Best Practices; LCP < 2.5s on 4G |
| Accessibility | WCAG 2.1 AA: keyboard navigable, visible focus, alt text, sufficient contrast, reduced-motion support |
| Browsers | Current Chrome, Edge, Safari, Firefox; Android Chrome and iOS Safari |
| Security | HTTPS, spam protection on forms, no secrets in the repo |
| Maintainability | All copy editable from content files without touching components |

## 11. Phases

| Phase | Scope | Depends on |
|---|---|---|
| 1. Foundation | Brand tokens from logo, header, footer, layout, shared components | Logo file |
| 2. Home | All home sections with supplied copy | Remaining home copy, hero imagery |
| 3. Businesses | Overview and eight vertical pages | Per-vertical copy and photos |
| 4. Corporate pages | About, Infrastructure, Sustainability, Leadership, Careers, Contact | Copy, leadership photos, addresses |
| 5. Forms and SEO | Form delivery, metadata, sitemap, structured data, analytics | Hosting decision, recipient emails |
| 6. QA and launch | Cross-device testing, performance, accessibility, client review, go-live | Domain and hosting access |

## 12. Open items for the client

**Blocking**

1. **Logo file.** Not present in the project. Needed as SVG (or high-resolution PNG with transparent background), plus a white/reversed version for use over photos.
2. **Remaining content.** The supplied document ends mid-sentence in Section 6, "Why BBC Group India? → Diversified Business Portfolio". Still needed: the rest of that section, and copy for About, each vertical page, Infrastructure, Sustainability, Leadership, Careers and Contact.
3. **Contact details.** Office and unit addresses, phone numbers, email addresses, map locations, and which email receives enquiries.

**Needed before the relevant phase**

4. Photography and video for each vertical, facilities and leadership. If none exists, decide between a shoot and licensed stock.
5. Key figures for the home page (years in operation, employees, facilities, capacities).
6. Leadership names, designations, photos and bios.
7. Kubota dealership details and what brand usage Kubota permits.
8. Oil company affiliation for the fuel station.
9. Certifications, licences and registrations to display.
10. Which optional sections are in scope: Gallery, News & Updates, Projects.
11. Domain name, hosting, and business email setup.
12. Social media links and WhatsApp number.
13. Whether Hindi is wanted later.

## 13. Acceptance criteria

- All pages in §6 are live and reachable from the navigation and footer.
- Supplied copy appears verbatim; no placeholder text remains.
- Every vertical page has a working enquiry path, and test enquiries reach the client's inbox.
- The site meets the targets in §10 on a real mobile device.
- The client has signed off the home page and one vertical page before the remaining pages are built out.
