import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TerraSYNC™ Campus | Autonomous Grounds Management",
  description: "Leading universities and municipalities are cutting grounds costs by 40% while exceeding sustainability goals. Zero emissions, zero noise complaints. Welcome to Grounds Maintenance Automation™.",
  keywords: ["campus automation", "autonomous mowing", "TerraSYNC", "grounds maintenance", "sustainability", "GMA", "Grounds Maintenance Automation", "university grounds", "municipal grounds", "zero emissions"],
  openGraph: {
    title: "TerraSYNC™ Campus | Sustainable. Silent. Autonomous.",
    description: "Cut grounds costs by 40%. Exceed sustainability goals. Zero noise complaints. Zero emissions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
