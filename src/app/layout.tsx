import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

// Base URL for the site - update this when you get a custom domain
const siteUrl = "https://terrasync-campus.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Autonomous Grounds Management for Universities, Municipalities & Commercial Properties | TerraSYNC™",
    template: "%s | TerraSYNC™ Grounds Maintenance Automation"
  },
  description: "Cut grounds maintenance costs by 40% with autonomous robotic mowing. Zero emissions, zero noise complaints, 24/7 silent operation. Serving universities, colleges, municipalities, corporate campuses, HOAs, and commercial properties. Real-time monitoring, sustainability reporting, and dedicated support included.",
  keywords: [
    // Primary Industry Terms
    "grounds maintenance automation",
    "GMA",
    "autonomous mowing",
    "robotic mowing service",
    "commercial robotic mowers",
    "autonomous lawn care",
    
    // University/Campus Keywords
    "university grounds management",
    "campus grounds automation",
    "college campus mowing",
    "university landscaping automation",
    "campus sustainability solutions",
    "higher education grounds maintenance",
    "university facilities management",
    "campus grounds crew alternative",
    "silent campus mowing",
    "zero emission campus",
    
    // Municipal Keywords
    "municipal grounds automation",
    "city parks mowing",
    "municipal landscaping robots",
    "public grounds maintenance",
    "parks and recreation automation",
    "city grounds management",
    "municipal sustainability",
    "government grounds maintenance",
    
    // Corporate/Commercial Keywords
    "corporate campus mowing",
    "commercial property landscaping",
    "business park grounds management",
    "office park mowing service",
    "commercial landscape automation",
    "corporate grounds maintenance",
    "industrial property mowing",
    
    // HOA/Property Management
    "HOA landscaping automation",
    "property management mowing",
    "community grounds automation",
    "HOA grounds maintenance",
    "apartment complex mowing",
    "multi-family property landscaping",
    
    // Problem/Solution Keywords
    "reduce landscaping labor costs",
    "solve groundskeeper shortage",
    "eliminate mowing noise complaints",
    "zero emission landscaping",
    "sustainable grounds management",
    "ESG landscaping solutions",
    "carbon neutral mowing",
    "electric commercial mowers",
    "24/7 autonomous mowing",
    "silent night mowing",
    
    // Equipment/Brand Keywords
    "Husqvarna CEORA commercial",
    "Kress commercial mower",
    "Nexmow autonomous mower",
    "commercial robotic mower fleet",
    "RTK GPS mowing",
    
    // ROI/Business Keywords
    "grounds maintenance ROI",
    "landscaping cost reduction",
    "reduce grounds crew",
    "grounds management software",
    "mowing fleet management",
    "sustainability reporting grounds",
    
    // Geographic Expansion
    "autonomous mowing USA",
    "robotic mowing service near me",
    "commercial mowing Tennessee",
    "campus mowing Southeast"
  ],
  authors: [{ name: "TerraSYNC™", url: "https://terrasync.biz" }],
  creator: "KnoxBots LLC",
  publisher: "TerraSYNC™",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TerraSYNC™ - Grounds Maintenance Automation",
    title: "Cut Grounds Costs 40% | Autonomous Mowing for Campuses, Municipalities & Commercial Properties",
    description: "Zero emissions. Zero noise complaints. 24/7 silent operation. Universities, municipalities, and commercial properties are switching to autonomous robotic mowing. Get your free property assessment.",
    images: [
      {
        url: "/images/dashboard-preview.jpg",
        width: 1200,
        height: 630,
        alt: "TerraSYNC Dashboard - Autonomous Grounds Management Platform for Universities and Municipalities",
      },
      {
        url: "/images/hero-campus.jpg",
        width: 1200,
        height: 630,
        alt: "Autonomous Robotic Mowers on University Campus - Silent Zero-Emission Grounds Maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous Grounds Management | 40% Cost Reduction | TerraSYNC™",
    description: "Universities & municipalities are cutting grounds costs 40% with autonomous mowing. Zero emissions, zero noise. Get your free assessment.",
    images: ["/images/dashboard-preview.jpg"],
    creator: "@terrasync",
    site: "@terrasync",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  classification: "Business/Landscaping/Automation",
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "distribution": "global",
    "rating": "general",
    "revisit-after": "7 days",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://terrasync.biz/#organization",
  name: "TerraSYNC™",
  legalName: "TerraSYNC (KnoxBots LLC)",
  description: "Leading provider of Grounds Maintenance Automation™ (GMA) solutions for universities, municipalities, corporate campuses, and commercial properties. Autonomous robotic mowing with zero emissions and 24/7 silent operation.",
  url: "https://terrasync.biz",
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/terrasync-logo.svg`,
    width: 320,
    height: 48
  },
  image: `${siteUrl}/images/dashboard-preview.jpg`,
  telephone: "+1-239-785-8023",
  email: "info@terrasync.biz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "121 East Jackson Ave",
    addressLocality: "Knoxville",
    addressRegion: "TN",
    postalCode: "37919",
    addressCountry: "US"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-239-785-8023",
      contactType: "sales",
      email: "info@terrasync.biz",
      areaServed: "US",
      availableLanguage: "English"
    }
  ],
  sameAs: [
    "https://linkedin.com/company/terrasync",
    "https://twitter.com/terrasync"
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "KnoxBots LLC"
  },
  knowsAbout: [
    "Autonomous Mowing",
    "Robotic Lawn Care",
    "Grounds Maintenance Automation",
    "Commercial Landscaping",
    "University Grounds Management",
    "Municipal Landscaping",
    "Sustainability",
    "Zero Emission Landscaping"
  ],
  slogan: "Sustainable. Silent. Autonomous."
};

// Service Schema - Comprehensive
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://terrasync.biz/#service",
  name: "Grounds Maintenance Automation™ (GMA)",
  alternateName: ["GMA", "Autonomous Grounds Management", "Robotic Mowing Service"],
  provider: {
    "@type": "Organization",
    name: "TerraSYNC™"
  },
  serviceType: "Autonomous Grounds Management",
  description: "Complete autonomous grounds management solution including robotic mowing, smart irrigation, real-time monitoring, and sustainability reporting. Zero capital expenditure SYNC plan with fixed monthly cost.",
  areaServed: {
    "@type": "Country",
    name: "United States"
  },
  audience: {
    "@type": "Audience",
    audienceType: "Facilities Managers, Grounds Directors, University Administration, Municipal Officials, Property Managers, Corporate Real Estate"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "TerraSYNC Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Autonomous Mowing",
          description: "24/7 silent robotic mowing with RTK-GPS precision. Zero emissions, zero noise complaints."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Environmental Dashboard",
          description: "Real-time CO₂ savings tracking and stakeholder-ready sustainability reports for ESG compliance."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smart Irrigation Integration",
          description: "AI-optimized water management integrated with autonomous mowing schedule."
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fleet Management Platform",
          description: "Unified command center for monitoring and controlling entire grounds operation."
        }
      }
    ]
  },
  termsOfService: "https://terrasync.biz/terms",
  brand: {
    "@type": "Brand",
    name: "TerraSYNC™"
  }
};

// FAQ Schema - Common Questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much can universities save with autonomous mowing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Universities and colleges typically see 30-45% reduction in grounds maintenance costs through autonomous mowing. This comes from reduced labor costs, eliminated fuel expenses, lower equipment maintenance, and 24/7 operation without overtime pay."
      }
    },
    {
      "@type": "Question",
      name: "Are robotic mowers quiet enough for campus use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, autonomous mowers operate at approximately 58-65 decibels, comparable to normal conversation. This allows for mowing during classes, near dormitories at night, and in noise-sensitive areas without complaints."
      }
    },
    {
      "@type": "Question",
      name: "How do autonomous mowers help with sustainability goals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autonomous electric mowers eliminate 100% of direct emissions from mowing operations. Our dashboard provides real-time CO₂ reduction tracking and generates sustainability reports for ESG compliance and stakeholder presentations."
      }
    },
    {
      "@type": "Question",
      name: "What size properties can autonomous mowers handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our commercial autonomous mowers can handle properties from 10 acres to 500+ acres. Fleet configurations allow scaling to any campus or municipal property size with coordinated multi-unit operation."
      }
    },
    {
      "@type": "Question",
      name: "Is there upfront capital required for autonomous mowing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our SYNC plan requires zero capital expenditure. You pay a fixed monthly cost that includes equipment, installation, monitoring, maintenance, and support. No equipment purchase required."
      }
    },
    {
      "@type": "Question",
      name: "How long does implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most properties see results within 30 days. Our team handles property assessment, zone mapping, installation, and training with zero disruption to ongoing grounds operations."
      }
    }
  ]
};

// Local Business Schema (for service area)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://terrasync.biz/#localbusiness",
  name: "TerraSYNC™",
  image: `${siteUrl}/images/dashboard-preview.jpg`,
  telephone: "+1-239-785-8023",
  email: "info@terrasync.biz",
  priceRange: "$$$$",
  description: "Commercial autonomous mowing and grounds management services for universities, municipalities, corporate campuses, and commercial properties.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "121 East Jackson Ave",
    addressLocality: "Knoxville",
    addressRegion: "TN",
    postalCode: "37919",
    addressCountry: "US"
  },
  areaServed: [
    {
      "@type": "State",
      name: "Tennessee"
    },
    {
      "@type": "State", 
      name: "Florida"
    },
    {
      "@type": "Country",
      name: "United States"
    }
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 35.9606,
      longitude: -83.9207
    },
    geoRadius: "500 miles"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial Grounds Services",
    itemListElement: [
      "University Grounds Automation",
      "Municipal Park Mowing",
      "Corporate Campus Landscaping",
      "HOA Grounds Management",
      "Commercial Property Mowing"
    ]
  }
};

// Product Schema for Equipment
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TerraSYNC SYNC Plan",
  description: "Zero capital expenditure autonomous grounds management subscription. Includes commercial robotic mowers, installation, monitoring, maintenance, and sustainability reporting.",
  image: `${siteUrl}/images/dashboard-preview.jpg`,
  brand: {
    "@type": "Brand",
    name: "TerraSYNC™"
  },
  category: "Commercial Landscaping Equipment & Services",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock",
    url: siteUrl,
    seller: {
      "@type": "Organization",
      name: "TerraSYNC™"
    },
    description: "Contact for custom pricing - Zero upfront capital required"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "47",
    bestRating: "5"
  }
};

// WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: siteUrl,
  name: "Autonomous Grounds Management for Universities, Municipalities & Commercial Properties | TerraSYNC™",
  description: "Cut grounds maintenance costs by 40% with autonomous robotic mowing. Zero emissions, zero noise complaints. Serving universities, municipalities, corporate campuses, and commercial properties.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://terrasync.biz/#website",
    url: "https://terrasync.biz",
    name: "TerraSYNC™",
    publisher: {
      "@type": "Organization",
      name: "TerraSYNC™"
    }
  },
  about: {
    "@type": "Thing",
    name: "Autonomous Grounds Management"
  },
  mainEntity: {
    "@type": "Service",
    name: "Grounds Maintenance Automation™"
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".ts-headline"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Primary Schema - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#c5ff00" />
        <meta name="msapplication-TileColor" content="#0a0a0a" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
