export const site = {
  name: "M30",
  shortName: "Meridian Thirty",
  tagline: "Strategy with conviction. Outcomes that endure.",
  description:
    "Meridian Thirty is a boutique strategy consultancy partnering with leadership teams to navigate inflection points and build enduring institutions.",
  contact: {
    email: "partners@meridianthirty.com",
    phone: "+1 (212) 555 0130",
    address: "London, United Kingdom",
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
  ],
}

export const navLinks = [
  { label: "Our Work", href: "/our-work" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const

export type Capability = {
  number: string
  title: string
  blurb: string
  bullets: string[]
}

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Strategy",
    blurb:
      "Corporate, growth, and portfolio strategy designed to compound advantage over decades, not quarters.",
    bullets: [
      "Corporate & growth strategy",
      "Market entry & geographic expansion",
      "M&A and portfolio shaping",
      "Pricing & commercial strategy",
    ],
  },
  {
    number: "02",
    title: "Transformation",
    blurb:
      "End-to-end programmes that re-architect operating models, technology, and ways of working under one cadence.",
    bullets: [
      "Operating model redesign",
      "Digital & AI transformation",
      "Cost & capital programmes",
      "Programme delivery (PMO)",
    ],
  },
  {
    number: "03",
    title: "Performance",
    blurb:
      "Margin, working capital, and revenue interventions executed with the rigour of an owner-operator.",
    bullets: [
      "Commercial performance",
      "Procurement & supply chain",
      "Working capital release",
      "Revenue acceleration",
    ],
  },
  {
    number: "04",
    title: "Organisation",
    blurb:
      "Leadership, design, and culture work that makes high performance the natural state of the institution.",
    bullets: [
      "Leadership & succession",
      "Org design & talent",
      "Culture & change",
      "Board effectiveness",
    ],
  },
]

export const industries = [
  {
    title: "Financial Services",
    blurb:
      "Banks, asset managers, insurers, and market infrastructure navigating regulatory change and platform economics.",
  },
  {
    title: "Energy & Resources",
    blurb:
      "Integrated majors, utilities, and developers shaping the transition with credible, capital-disciplined plans.",
  },
  {
    title: "Healthcare & Life Sciences",
    blurb:
      "Payers, providers, and biopharma redefining access, pipeline strategy, and enterprise productivity.",
  },
  {
    title: "Industrials & Mobility",
    blurb:
      "Manufacturers, defence, and mobility leaders re-engineering footprints for resilience and growth.",
  },
  {
    title: "Technology & Telecom",
    blurb:
      "Hyperscalers, software, and operators positioning for the AI-native enterprise.",
  },
  {
    title: "Consumer & Retail",
    blurb:
      "Brand owners and retailers compounding equity through omnichannel and category leadership.",
  },
  {
    title: "Private Capital",
    blurb:
      "PE, infrastructure, and sovereigns underwriting and accelerating value through commercial diligence and value creation.",
  },
  {
    title: "Public & Social Sector",
    blurb:
      "Governments, regulators, and institutions delivering reform with measurable public outcomes.",
  },
]

export const insights = [
  {
    eyebrow: "Strategy",
    title: "The CEO agenda for the next decade of compounding advantage",
    excerpt:
      "What separates institutions that compound from those that drift is rarely strategy on paper—it is the operating cadence behind it.",
    readTime: "8 min read",
    date: "May 2026",
    href: "/insights",
  },
  {
    eyebrow: "Transformation",
    title: "AI as an operating system, not a programme",
    excerpt:
      "Treating AI as a portfolio of pilots is the most expensive way to fall behind. The leaders are wiring it into the core.",
    readTime: "11 min read",
    date: "April 2026",
    href: "/insights",
  },
  {
    eyebrow: "Performance",
    title: "The margin reset: a playbook for the next cycle",
    excerpt:
      "Inflation has receded; the structural pressure on margin has not. A practical guide to the levers that still work.",
    readTime: "9 min read",
    date: "March 2026",
    href: "/insights",
  },
  {
    eyebrow: "Organisation",
    title: "Designing the executive team for the AI-native enterprise",
    excerpt:
      "New work requires new seats at the table. We examine how leading boards are reconfiguring the C-suite.",
    readTime: "7 min read",
    date: "February 2026",
    href: "/insights",
  },
  {
    eyebrow: "Private Capital",
    title: "Underwriting in a higher-for-longer rate environment",
    excerpt:
      "Why operating value creation, not multiple expansion, is now the principal source of returns.",
    readTime: "10 min read",
    date: "January 2026",
    href: "/insights",
  },
  {
    eyebrow: "Energy",
    title: "Capital discipline and the credible transition",
    excerpt:
      "Boards are being asked to deliver returns and decarbonise. The emerging archetypes that reconcile both.",
    readTime: "12 min read",
    date: "December 2025",
    href: "/insights",
  },
]

export const work = [
  {
    client: "Global Universal Bank",
    sector: "Financial Services",
    headline:
      "Re-architecting the operating model for an AI-native wholesale bank",
    metric: "$1.4B run-rate impact",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    client: "European Energy Major",
    sector: "Energy & Resources",
    headline:
      "A credible transition portfolio: capital allocation through 2035",
    metric: "€18B reallocated",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    client: "North American Health System",
    sector: "Healthcare",
    headline:
      "Network redesign and clinical productivity for a 14-state system",
    metric: "320 bps margin uplift",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    client: "Tier-1 Industrial",
    sector: "Industrials",
    headline:
      "Footprint resilience and a $2B working capital release programme",
    metric: "$2.1B cash unlocked",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1600&q=80",
  },
  {
    client: "Global Software Platform",
    sector: "Technology",
    headline: "From product-led growth to enterprise-grade go-to-market",
    metric: "2.3x ACV expansion",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    client: "Sovereign Investor",
    sector: "Private Capital",
    headline: "An operating playbook for a $40B private equity portfolio",
    metric: "+480 bps IRR",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
]

export const trustedBy = [
  "ATLAS CAPITAL",
  "NORTHWIND",
  "HELIOS ENERGY",
  "MERIDIAN HEALTH",
  "VANTAGE BANK",
  "AURELIAN",
  "STRATA INDUSTRIES",
  "KESTREL & CO",
]

export const leadership = [
  {
    name: "Anneliese Marchetti",
    role: "Managing Partner",
    bio: "Two decades advising boards on corporate strategy and transformation across Europe and the Americas.",
  },
  {
    name: "Idris Okafor",
    role: "Senior Partner, Transformation",
    bio: "Operating-partner background; led enterprise programmes for global banks and industrials.",
  },
  {
    name: "Hana Sato",
    role: "Senior Partner, Performance",
    bio: "Margin, capital, and supply chain specialist with deep Asia-Pacific experience.",
  },
  {
    name: "Theodore Lange",
    role: "Senior Partner, Private Capital",
    bio: "Former investor; advises sovereign and PE clients on diligence and value creation.",
  },
]

export const careerOpenings = [
  {
    role: "Engagement Manager — Strategy",
    location: "New York / London",
    type: "Full-time",
  },
  {
    role: "Associate Partner — Transformation",
    location: "Singapore",
    type: "Full-time",
  },
  {
    role: "Senior Associate — Private Capital",
    location: "London",
    type: "Full-time",
  },
  {
    role: "Consultant — Performance",
    location: "Dubai",
    type: "Full-time",
  },
  {
    role: "Knowledge Specialist — Energy",
    location: "Houston",
    type: "Full-time",
  },
  {
    role: "Design Lead — Brand & Editorial",
    location: "Remote (Americas)",
    type: "Full-time",
  },
]
