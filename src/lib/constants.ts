// TerraSYNC™ Brand Constants - Campus/Municipal Funnel

export const BRAND = {
  name: "TerraSYNC™",
  nameNoTM: "TerraSYNC", // For URLs, emails, file names
  tagline: "SUSTAINABLE. SILENT. AUTONOMOUS.",
  parent: "KnoxBots LLC",
  website: "https://terrasync.biz",
  email: "wesleypitts@terrasync.biz",
  phone: "(865) 888-0049",
} as const;

// Odoo Appointment Booking URL
// Note: If iframe shows full site, check Odoo settings to use "async" template for the appointment page
export const APPOINTMENT_BOOKING_URL = "https://www.terrasync.biz/book/d7a03057";

export const COLORS = {
  green: "#c5ff00",
  greenDark: "#9fcc00",
  greenGlow: "#d4ff00",
  black: "#0a0a0a",
  blackLight: "#111111",
  blackCard: "#1a1a1a",
  gray: "#9ca3af",
  grayDark: "#4b5563",
} as const;

// Hero Section Content
export const HERO = {
  headline: "THE FUTURE OF CAMPUS GROUNDS IS HERE",
  subheadline: "Leading universities and municipalities are cutting grounds costs by 40% while exceeding sustainability goals — with zero noise complaints and zero emissions.",
  ctaPrimary: "Schedule Your Property Assessment",
  ctaSecondary: "See How It Works",
  stats: [
    { value: "80%", label: "CO₂ Reduction" },
    { value: "24/7", label: "Silent Operation" },
    { value: "30", label: "Days to Results" },
  ],
} as const;

// Pain Points Section
export const PAIN_POINTS = {
  headline: "Sound Familiar?",
  transition: "There's a better way...",
  points: [
    {
      icon: "dollar",
      title: "Budget Cuts, Same Expectations",
      description: "Every year you're asked to do more with less. Budgets shrink while campus expectations grow.",
    },
    {
      icon: "users",
      title: "The Labor Crisis",
      description: "You can't find workers. When you do, they leave. Seasonal gaps leave your grounds understaffed when it matters most.",
    },
    {
      icon: "clock",
      title: "Noise Complaints",
      description: "Early morning mowing disrupts classes, disturbs residents, and generates constant complaints.",
    },
    {
      icon: "chart",
      title: "Sustainability Mandates",
      description: "Your institution pledged carbon neutrality. Now you need to prove progress — with documentation.",
    },
    {
      icon: "shield",
      title: "Equipment Liability",
      description: "Gas equipment injuries, emissions concerns, and aging machinery create legal and safety risks.",
    },
  ],
} as const;

// Solution Section
export const SOLUTION = {
  headline: "WELCOME TO GENERATION 3 AUTOMATION",
  subheadline: "The intelligent era of Grounds Maintenance Automation™ has arrived.",
  comparison: {
    before: {
      title: "Reactive Era",
      points: [
        "Manual scheduling and dispatch",
        "Reactive maintenance",
        "No sustainability documentation",
        "Labor-dependent operations",
      ],
    },
    after: {
      title: "Intelligent Era",
      points: [
        "AI-optimized routing",
        "Predictive maintenance",
        "Real-time carbon reporting",
        "Autonomous execution",
      ],
    },
  },
  pillars: [
    {
      icon: "robot",
      title: "Autonomous Mowing",
      description: "24/7 silent operation with RTK-GPS accuracy. Zero emissions, zero noise complaints, zero operator needed.",
    },
    {
      icon: "chart",
      title: "Environmental Dashboard",
      description: "Real-time CO₂ savings, fuel elimination tracking, and stakeholder-ready sustainability reports.",
    },
    {
      icon: "dashboard",
      title: "Unified Command Center",
      description: "One platform to monitor, control, and document your entire grounds operation.",
    },
  ],
} as const;

// How It Works Section
export const HOW_IT_WORKS = {
  headline: "ONE STEP AT A TIME",
  subheadline: "We handle the complexity. You enjoy the results.",
  steps: [
    {
      number: "01",
      title: "Property Assessment",
      description: "We survey your campus, map every zone, and align with your stakeholders to create a custom automation roadmap.",
    },
    {
      number: "02",
      title: "Seamless Integration",
      description: "Our team handles all installation, configuration, and training — with zero disruption to campus operations.",
    },
    {
      number: "03",
      title: "Ongoing Partnership",
      description: "24/7 monitoring, proactive maintenance, sustainability reporting, and a dedicated success manager for board presentations.",
    },
  ],
  callout: "You don't need to become a tech expert. That's our job.",
} as const;

// Testimonials Section
export const TESTIMONIALS = {
  headline: "WHAT OUR CLIENTS ARE SAYING",
  stats: [
    { value: "100+", label: "Clients" },
    { value: "150+", label: "Acres Managed" },
    { value: "98%", label: "Client Retention" },
  ],
  quotes: [
    {
      quote: "", // Quote pending
      name: "[REDACTED]",
      title: "",
      course: "Local Knoxville Golf Course",
      metric: "",
    },
    {
      quote: "", // Quote pending
      name: "Clarke Burkle",
      title: "",
      course: "Different Strokes",
      metric: "",
    },
    {
      quote: "", // Quote pending
      name: "John Potter",
      title: "",
      course: "University of Tennessee Gardens",
      metric: "",
    },
  ],
} as const;

// ROI Calculator Section
export const ROI_CALCULATOR = {
  headline: "SEE YOUR POTENTIAL SAVINGS",
  subheadline: "Adjust the sliders to see your projected annual savings and environmental impact.",
  cta: "Get Your Custom Assessment",
  defaults: {
    acres: 50,
    laborCost: 250000,
    frequency: 4,
  },
  ranges: {
    acres: { min: 10, max: 500, step: 10 },
    laborCost: { min: 50000, max: 1000000, step: 25000 },
    frequency: { min: 1, max: 7, step: 1 },
  },
} as const;

// Guarantee Section
export const GUARANTEE = {
  headline: "THE TERRASYNC™ GUARANTEE",
  subheadline: "We're so confident in our solution, we put our money where our mouth is.",
  guarantees: [
    {
      icon: "shield",
      title: "30-Day Performance Guarantee",
      description: "See measurable results within 30 days, or we work with you until you do. No questions asked.",
    },
    {
      icon: "dollar",
      title: "Zero Capital Expenditure",
      description: "Our SYNC plan means no equipment purchase required. Fixed monthly cost, zero surprises for your budget.",
    },
    {
      icon: "headset",
      title: "Dedicated Success Manager",
      description: "Your partner for board presentations, sustainability reports, and achieving your operational goals.",
    },
  ],
} as const;

// Final CTA Section
export const FINAL_CTA = {
  headline: "READY TO LEAD THE AUTOMATION REVOLUTION?",
  subheadline: "Limited spots available for 2026 implementation partners.",
  cta: "SCHEDULE MY PROPERTY ASSESSMENT",
  microcopy: "No commitment. No pressure. Just a conversation about what's possible for your campus.",
  formFields: [
    { name: "name", label: "Your Name", type: "text", placeholder: "John Smith", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@university.edu", required: true },
    { name: "course", label: "Organization Name", type: "text", placeholder: "University of Tennessee", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "(555) 123-4567", required: false },
    { name: "acres", label: "Total Acres", type: "number", placeholder: "50", required: false },
  ],
} as const;

// Footer
export const FOOTER = {
  tagline: "Part of the KnoxBots LLC Family",
  links: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/terrasync" },
    { label: "Twitter", href: "https://twitter.com/terrasync" },
  ],
} as const;

// Partner Logos
export const PARTNERS = [
  { name: "Husqvarna", logo: "/images/partners/husqvarna.svg" },
  { name: "Korechi", logo: "/images/partners/korechi.svg" },
  { name: "Kress", logo: "/images/partners/kress.svg" },
] as const;
