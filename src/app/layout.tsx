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
    default: "TerraSYNC™ Campus | Autonomous Grounds Management for Universities & Municipalities",
    template: "%s | TerraSYNC™"
  },
  description: "Leading universities and municipalities are cutting grounds costs by 40% while exceeding sustainability goals. Zero emissions, zero noise complaints. Autonomous robotic mowing with real-time monitoring and sustainability reporting.",
  keywords: [
    "campus grounds automation",
    "autonomous mowing",
    "robotic lawn care",
    "university grounds management",
    "municipal grounds maintenance",
    "TerraSYNC",
    "Grounds Maintenance Automation",
    "GMA",
    "sustainable landscaping",
    "zero emission mowing",
    "silent lawn care",
    "electric mowers",
    "commercial robotic mowers",
    "Husqvarna CEORA",
    "Kress robotic mower",
    "Nexmow",
    "campus sustainability",
    "ESG grounds management",
    "carbon neutral landscaping",
    "smart irrigation",
    "grounds automation ROI"
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
    siteName: "TerraSYNC™",
    title: "TerraSYNC™ Campus | Sustainable. Silent. Autonomous.",
    description: "Cut grounds costs by 40%. Exceed sustainability goals. Zero noise complaints. Zero emissions. The future of campus grounds management is here.",
    images: [
      {
        url: "/images/dashboard-preview.jpg",
        width: 1200,
        height: 630,
        alt: "TerraSYNC Dashboard - Unified Grounds Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TerraSYNC™ Campus | Autonomous Grounds Management",
    description: "Cut grounds costs by 40%. Zero emissions. Zero noise complaints. The future of campus grounds is here.",
    images: ["/images/dashboard-preview.jpg"],
    creator: "@terrasync",
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
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TerraSYNC™",
  description: "Autonomous grounds management solutions for universities, municipalities, and commercial properties.",
  url: "https://terrasync.biz",
  logo: `${siteUrl}/images/terrasync-logo.svg`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-239-785-8023",
    contactType: "sales",
    email: "info@terrasync.biz",
    areaServed: "US",
    availableLanguage: "English"
  },
  sameAs: [
    "https://linkedin.com/company/terrasync",
    "https://twitter.com/terrasync"
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "KnoxBots LLC"
  },
  offers: {
    "@type": "Offer",
    name: "SYNC Plan - Grounds Maintenance Automation",
    description: "Zero capital expenditure autonomous grounds management with fixed monthly cost",
    priceCurrency: "USD"
  }
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grounds Maintenance Automation™",
  provider: {
    "@type": "Organization",
    name: "TerraSYNC™"
  },
  serviceType: "Autonomous Grounds Management",
  description: "24/7 autonomous mowing, smart irrigation, and real-time grounds monitoring for campuses and municipalities",
  areaServed: {
    "@type": "Country",
    name: "United States"
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
          description: "24/7 silent robotic mowing with RTK-GPS precision"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Environmental Dashboard",
          description: "Real-time CO₂ savings and sustainability reporting"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Smart Irrigation",
          description: "AI-optimized water management"
        }
      }
    ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
