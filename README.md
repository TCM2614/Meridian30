# Meridian Thirty (M30)

Premium consulting website for **Meridian Thirty** — a London-based boutique
delivery consultancy. Senior practitioners delivering programme management,
advisory, technology implementation support, and bid leadership across the
public and private sectors.

Editorial visual style: McKinsey × Apple × Financial Times. Dark navy canvas,
cream accent (`#D8D2C7`), Playfair Display + Inter, generous whitespace, no
SaaS aesthetics.

## Tech

- **Next.js 15** App Router
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion 12**
- **shadcn/ui-style** primitives (Radix Slot + CVA + tailwind-merge)
- **lucide-react** for iconography

## Brand system

| Token         | Value      | Tailwind class            |
| ------------- | ---------- | ------------------------- |
| Background    | `#07111F`  | `bg-background`           |
| Surface       | `#0F1D30`  | `bg-surface`              |
| Surface 2     | `#132641`  | `bg-surface2`             |
| Accent        | `#D8D2C7`  | `text-accent` / `bg-accent` |
| Text          | `#FFFFFF`  | `text-ink`                |
| Muted text    | `#A9B2C3`  | `text-fog`                |
| Hairline      | `rgba(255,255,255,0.08)` | `border-hairline` |

- **Headings**: Playfair Display (`font-serif`), italic accents via
  `<em className="accent-italic">word</em>`
- **Body**: Inter (`font-sans`)
- **UK English** throughout

## Pages

- `/` — Home: Sticky Navbar, Hero, Sectors strip, Capability Cards,
  Technology Expertise strip, About, CTA Banner, Footer
- `/capabilities` — Project & Programme Management · Consultancy ·
  Tender & Bid Writing · Technology Implementation (overview, scope,
  scenarios for each)
- `/industries` — Financial Services · Public Sector & Government ·
  Technology & Software · Energy & Utilities · Infrastructure & Construction
- `/our-work` — Four anonymised case studies with measurable outcomes
- `/about` — Senior-led positioning, principles, leadership, technology
  experience
- `/contact` — London location, one-business-day response commitment,
  enquiry form
- `/insights` — Placeholder ("News & Insights — coming soon"), `noindex`
  until populated; not in main nav

## Folder structure

```
app/                          # Next.js App Router
  layout.tsx                  # Root layout, fonts, navbar, footer, metadata
  globals.css                 # Tailwind layers + .card-premium + utilities
  page.tsx                    # Homepage
  capabilities/page.tsx
  industries/page.tsx
  our-work/page.tsx
  about/page.tsx
  contact/page.tsx
  insights/page.tsx           # Placeholder (noindex)

components/
  layout/                     # Navbar, Footer
    Navbar.tsx                # Sticky, blur on scroll, mobile menu
    Footer.tsx
  sections/                   # Page-level sections
    Hero.tsx
    SectorsStrip.tsx
    CapabilityCards.tsx
    TechnologyStrip.tsx
    AboutSection.tsx
    CTABanner.tsx
    PageHero.tsx              # Shared hero for inner pages
    ContactForm.tsx
  ui/                         # Reusable primitives (shadcn-style)
    button.tsx
    container.tsx
    eyebrow.tsx
    section-heading.tsx
    reveal.tsx                # LineReveal + Reveal (Framer Motion)
    parallax-image.tsx        # Scroll-driven Y parallax
    nav-link.tsx              # Letter-rise hover

lib/
  utils.ts                    # cn() class merger
  site.ts                     # Single source of truth for all copy
```

## Editing copy

Almost all text on the site lives in `lib/site.ts`:

- `site` — name, tagline, description, contact (email, phone, London address)
- `navLinks` — main navigation
- `capabilities` — homepage capability cards (4 practices)
- `capabilityDetails` — full Capabilities page (overview, scope, scenarios)
- `industries` — sector descriptions (5 sectors)
- `work` — Our Work case studies (4)
- `leadership` — partner cards on About
- `principles` — firm principles on About
- `technologies` — Technology Expertise strip + About platforms grid
- `sectors` — homepage Sectors strip

Big editorial **headlines** are inline in the section files
(`components/sections/*.tsx`) and in each page's `PageHero` because they
contain per-line animations and italic accents.

## Animations

- Fade-up + line-mask reveals on scroll (`<Reveal>`, `<LineReveal>`)
- Navbar background blur + saturation on scroll
- Card lift / hover with premium box-shadow on dark canvas
- Image zoom + scroll-driven Y parallax (`<ParallaxImage>`)
- Letter-rise hover on nav links (`<NavLink>`)
- All easings: `cubic-bezier(0.16, 1, 0.3, 1)` editorial ease
- Respects `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
npm run lint
```

## Deployment

Designed to deploy cleanly on Vercel (zero config). The remote image pattern
for `images.unsplash.com` is already permitted in `next.config.ts`.
