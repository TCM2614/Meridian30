export const site = {
  name: "Meridian Thirty",
  shortName: "M30",
  tagline: "Delivered expertise. From strategy to implementation.",
  description:
    "Meridian Thirty is a boutique consultancy of senior practitioners. We deliver programme management, advisory, technology implementation support, and bid leadership for organisations across the public and private sectors.",
  contact: {
    email: "",
    phone: "",
    address: "London, United Kingdom",
    fullAddress: "",
    response: "Within one business day",
  },
  social: [
    { label: "LinkedIn", href: "#" },
  ],
}

export const navLinks = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
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
    title: "Project & Programme Management",
    blurb:
      "PMO design, governance, and delivery oversight for complex programmes — embedded alongside the leaders accountable for the outcome.",
    bullets: [
      "PMO setup",
      "Governance frameworks",
      "RAID management",
      "Reporting & dashboards",
      "Service transition",
    ],
  },
  {
    number: "02",
    title: "Consultancy",
    blurb:
      "Practical advisory grounded in delivery experience — business analysis, process design, and change management for organisations under pressure to act.",
    bullets: [
      "Business analysis",
      "Process mapping",
      "Requirements management",
      "Change management",
      "Training & adoption",
    ],
  },
  {
    number: "03",
    title: "Tender & Bid Writing",
    blurb:
      "Senior bid leadership for complex tenders — strategy, authoring, and submission support across public sector and private sector procurements.",
    bullets: [
      "Bid strategy & qualification",
      "Win theme development",
      "Authoring & editing",
      "Commercial input",
      "Submission management",
    ],
  },
  {
    number: "04",
    title: "Technology Implementation",
    blurb:
      "Implementation coordination and adoption management for enterprise platforms — providing the client-side capability that ensures rollouts land and are used.",
    bullets: [
      "Vendor management",
      "Implementation coordination",
      "Configuration support",
      "Reporting & dashboards",
      "Adoption & training",
    ],
  },
]

/**
 * Detailed capability content for the Capabilities page.
 * Provides overview, scope of services, and typical engagement scenarios.
 */
export type CapabilityDetail = Capability & {
  overview: string
  scope: string[]
  scenarios: string[]
  positioning?: string
}

export const capabilityDetails: CapabilityDetail[] = [
  {
    ...capabilities[0],
    overview:
      "We provide PMO design, governance, and delivery oversight for complex programmes — embedded in the work alongside the leaders accountable for the outcome. Our practitioners have run the work, not just advised on it.",
    scope: [
      "PMO setup and operating model",
      "Governance frameworks and steering committee design",
      "RAID (Risks, Assumptions, Issues, Dependencies) management",
      "Programme reporting and executive dashboards",
      "Resource and dependency management",
      "Stage gate and milestone management",
      "Service transition and operational handover",
    ],
    scenarios: [
      "A multi-year transformation programme that has lost cadence and needs an embedded PMO to re-establish reporting and accountability.",
      "A major implementation requiring independent governance and assurance, distinct from the delivery vendor.",
      "A portfolio of initiatives that needs consolidation under a single PMO with consistent reporting to the executive team.",
    ],
  },
  {
    ...capabilities[1],
    overview:
      "Practical advisory grounded in delivery experience. Our consultants bring business analysis, process design, and change management capability to the moments where organisations need to act with confidence.",
    scope: [
      "Business analysis and discovery",
      "Process mapping and target operating model design",
      "Requirements definition and management",
      "Change management and stakeholder engagement",
      "Training and adoption design",
      "Operating model assessments",
      "Capability and gap analyses",
    ],
    scenarios: [
      "A process redesign ahead of a technology implementation, where requirements need to be captured rigorously before vendor selection.",
      "A change programme where the target operating model is agreed but adoption across teams has stalled.",
      "An organisation preparing for a regulatory or operating model change that needs structured business analysis and impact assessment.",
    ],
  },
  {
    ...capabilities[2],
    overview:
      "Senior bid leadership for complex tenders — strategy, authoring, and submission support across public sector frameworks and private sector procurements.",
    scope: [
      "Bid strategy and qualification",
      "Win theme development",
      "Solution narrative and storyline design",
      "Lead authoring, editing, and quality assurance",
      "Pricing and commercial input (in conjunction with client teams)",
      "Stakeholder management and review cadence",
      "Submission and clarification management",
      "Post-bid lessons learned",
    ],
    scenarios: [
      "A public sector bid requiring formal compliance with framework requirements and strong narrative response writing.",
      "A private sector RFP where the win theme and solution narrative need sharpening and consistent expression across the document.",
      "A team without dedicated bid resource that needs interim senior bid management for a single, high-priority opportunity.",
    ],
  },
  {
    ...capabilities[3],
    overview:
      "Implementation coordination and adoption management for enterprise platforms. We do not replace systems integrators — we provide the client-side capability that ensures implementations land, are adopted, and deliver value.",
    positioning:
      "Advisory, delivery oversight, configuration support, implementation coordination, and adoption management.",
    scope: [
      "Vendor selection and management",
      "Implementation coordination and oversight",
      "Configuration support (working alongside SI partners)",
      "Data migration coordination",
      "User acceptance testing leadership",
      "Reporting and dashboard design",
      "Service transition and operational handover",
      "Adoption strategy and training design",
    ],
    scenarios: [
      "A Salesforce implementation where the SI is delivering, but the client needs senior coordination, business analysis, and adoption support.",
      "A reporting consolidation across Power BI and Tableau that requires requirements capture, dashboard design, and rollout.",
      "A ServiceNow rollout where end-user adoption is the primary risk and a structured adoption programme is needed.",
    ],
  },
]

export const technologies = [
  "Salesforce",
  "Microsoft 365",
  "SharePoint",
  "ServiceNow",
  "Jira",
  "Confluence",
  "TargetProcess",
  "Tableau",
  "Power BI",
]

export const sectors = [
  "Financial Services",
  "Public Sector",
  "Technology & Software",
  "Energy & Utilities",
  "Infrastructure & Construction",
]

export const industries = [
  {
    title: "Financial Services",
    blurb:
      "Experience supporting programmes, transformation initiatives, reporting solutions, and technology implementations across retail and wholesale banking, asset management, and insurance.",
  },
  {
    title: "Public Sector & Government",
    blurb:
      "Delivery, advisory, and bid support for central government, local authorities, and arm's-length bodies — including programme governance, business analysis, and major framework submissions.",
  },
  {
    title: "Technology & Software",
    blurb:
      "Programme management and implementation support for technology businesses delivering complex platform rollouts, reporting consolidations, and operational change.",
  },
  {
    title: "Energy & Utilities",
    blurb:
      "Experience supporting transformation programmes, reporting solutions, and operational change initiatives across regulated and unregulated parts of the energy and utilities sectors.",
  },
  {
    title: "Infrastructure & Construction",
    blurb:
      "PMO, governance, and reporting support for capital projects and infrastructure programmes — including bid leadership for major framework and project tenders.",
  },
]

export const work = [
  {
    client: "Tier-1 European Bank",
    sector: "Financial Services",
    headline:
      "Independent governance for a multi-year platform implementation",
    summary:
      "Established the client-side PMO, governance, and assurance structure for a complex platform implementation delivered by a tier-1 systems integrator.",
    outcome:
      "Re-baselined the programme plan, introduced a weekly executive reporting cadence, and recovered six months of slippage over a 14-month assignment.",
    metric: "6 months recovered",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    client: "UK Central Government Department",
    sector: "Public Sector",
    headline:
      "Consolidating a multi-portfolio PMO under a single reporting cadence",
    summary:
      "Redesigned the PMO operating model, governance forums, and reporting suite for a portfolio of more than thirty programmes.",
    outcome:
      "Reduced executive reporting effort by approximately 40% while improving forecast accuracy and stage-gate compliance.",
    metric: "~40% reporting effort reduced",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  },
  {
    client: "High-growth SaaS business",
    sector: "Technology & Software",
    headline:
      "A Salesforce optimisation programme aligned to the operating model",
    summary:
      "Following an initial implementation, led the business analysis, process redesign, and adoption work to bring the platform in line with the target operating model.",
    outcome:
      "Reduced sales-cycle administrative effort by approximately 25% and lifted CRM adoption above 90% across the field organisation.",
    metric: ">90% CRM adoption",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    client: "Major UK Infrastructure Group",
    sector: "Infrastructure & Construction",
    headline: "Senior bid leadership for a multi-lot framework submission",
    summary:
      "Provided bid strategy, lead authoring, and submission management for a complex public sector framework tender across multiple lots.",
    outcome:
      "Two of three submitted lots awarded; the client subsequently retained the team across two further bid cycles.",
    metric: "2 of 3 lots awarded",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  },
]

export const leadership = [
  {
    name: "Anneliese Marchetti",
    role: "Managing Partner",
    bio: "Two decades leading complex programmes across financial services, technology, and the public sector. Former programme director at a tier-1 systems integrator.",
  },
  {
    name: "Idris Okafor",
    role: "Senior Partner — Delivery",
    bio: "Programme delivery, PMO, and assurance specialist with experience across major regulatory and platform implementations.",
  },
  {
    name: "Hana Sato",
    role: "Senior Partner — Consultancy",
    bio: "Business analysis and operating model lead with deep experience across financial services, technology, and the public sector.",
  },
  {
    name: "Theodore Lange",
    role: "Senior Partner — Bids",
    bio: "Senior bid leader with a track record across public sector frameworks and major private sector tenders.",
  },
]

export const principles = [
  {
    title: "Senior-led, always.",
    body:
      "Every engagement is led by a partner who is on the work, every week. There are no pyramids, no rotations, and no surrogates.",
  },
  {
    title: "Practitioners, not commentators.",
    body:
      "Our consultants have run programmes, written winning bids, and delivered platform implementations — they are not theorists.",
  },
  {
    title: "Few engagements, deeply done.",
    body:
      "We accept a deliberate number of engagements at any one time. The discipline of saying no is what allows us to deliver the work we accept.",
  },
  {
    title: "Direct, plain English.",
    body:
      "We work with leaders who want a straight answer. Reports, decks, and conversations are honest, concise, and free of jargon.",
  },
]
