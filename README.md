# Meridian Thirty (M30)

A premium consulting company website for **Meridian Thirty (M30)** — a boutique
strategy consultancy. Editorial, executive, high-trust design inspired by
McKinsey, EY-Parthenon, Bain Digital, and Accura.

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
| Surface (2nd) | `#0F1D30`  | `bg-surface`              |
| Accent        | `#D8D2C7`  | `text-accent` / `bg-accent` |
| Text          | `#FFFFFF`  | `text-ink`                |
| Muted text    | `#A9B2C3`  | `text-fog`                |
| Hairline      | `rgba(255,255,255,0.08)` | `border-hairline` |

- **Headings**: Playfair Display (`font-serif`) via `next/font`
- **Body**: Inter (`font-sans`) via `next/font`

## Pages

- `/` — Home (Hero, Trusted By, Capability Cards, Featured Insight, About,
  CTA Banner, Footer)
- `/our-work` — Selected engagements
- `/capabilities` — Strategy · Transformation · Performance · Organisation
- `/industries` — Sector practices
- `/insights` — Editorial articles
- `/about` — Firm, principles, and leadership
- `/careers` — Why M30 + open roles
- `/contact` — Direct contact + enquiry form

## Folder structure

```
app/                          # Next.js App Router
  layout.tsx                  # Root layout, fonts, navbar, footer
  globals.css                 # Tailwind layers + base + utilities
  page.tsx                    # Homepage
  our-work/page.tsx
  capabilities/page.tsx
  industries/page.tsx
  insights/page.tsx
  about/page.tsx
  careers/page.tsx
  contact/page.tsx

components/
  layout/                     # Navbar, Footer
    Navbar.tsx                # Sticky, blurs on scroll, mobile menu
    Footer.tsx
  sections/                   # Page-level sections
    Hero.tsx
    TrustedBy.tsx
    CapabilityCards.tsx
    FeaturedInsight.tsx
    AboutSection.tsx
    CTABanner.tsx
    PageHero.tsx              # Shared hero for inner pages
    ContactForm.tsx
  ui/                         # Reusable primitives (shadcn-style)
    button.tsx
    container.tsx
    eyebrow.tsx
    section-heading.tsx
    fade-up.tsx               # In-view fade-up motion wrapper

lib/
  utils.ts                    # cn() class merger
  site.ts                     # Nav, capabilities, industries, insights, work, etc.
```

## Animations

- **Fade-up on scroll** — `<FadeUp>` (Framer Motion `whileInView`)
- **Card lift / hover** — Tailwind transitions on capability + work cards
- **Image zoom on hover** — `group-hover:scale-105` with `duration-[1200ms]`
- **Smooth hover effects** — `ease-out-expo` (`cubic-bezier(0.16,1,0.3,1)`)
- **Navbar blur on scroll** — `backdrop-blur-xl` toggled past 12px scroll

## Getting started

```bash
npm install
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

## Deployment

Designed to deploy cleanly on Vercel (zero config). The remote image pattern
for `images.unsplash.com` is already permitted in `next.config.ts`.
