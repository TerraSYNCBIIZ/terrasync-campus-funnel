"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "./ui/SectionHeading";

// Main products with images
const dashboardProduct = {
  id: "dashboard",
  name: "TerraSYNC Dashboard",
  tagline: "One Platform. Total Control.",
  description: "Unified command center for your entire grounds operation",
  image: "/images/ecosystem/dashboard.jpg",
};

const mowers = [
  {
    id: "nexmow",
    name: "Nexmow",
    tagline: "Campus-Scale Fleet Autonomy",
    image: "/images/ecosystem/nexmow.jpg",
  },
  {
    id: "ceora",
    name: "HUSQVARNA",
    tagline: "All-Weather Performance",
    image: "/images/ecosystem/ceora.jpg",
  },
  {
    id: "kress",
    name: "Kress",
    tagline: "Precision Terrain Handling",
    image: "/images/ecosystem/kress.jpg",
  },
];

const supportingTech = [
  {
    id: "line-painter",
    name: "TinyMobileRobots",
    tagline: "Robotic Line Painting",
    category: "FIELD MARKING",
    image: "/images/ecosystem/line-painter.jpg",
  },
  {
    id: "soil-sensor",
    name: "Soil Sensors",
    tagline: "Real-Time Ground Intelligence",
    category: "MONITORING",
    image: "/images/ecosystem/soil-sensor.jpg",
  },
  {
    id: "irrigation",
    name: "Smart Irrigation",
    tagline: "Intelligent Water Management",
    category: "WATER MGMT",
    image: "/images/ecosystem/irrigation.jpg",
  },
];

// Honorable mentions - text only, no images
const honorableMentions = [
  { id: "drones", name: "Drone Surveillance", icon: "drone" },
  { id: "maintenance", name: "Equipment Maintenance", icon: "wrench" },
  { id: "monitoring", name: "Operations Monitoring", icon: "chart" },
  { id: "scheduling", name: "Employee Scheduling", icon: "calendar" },
  { id: "resources", name: "Resource Management", icon: "grid" },
];

// Icon components for honorable mentions
const MentionIcon = ({ type }: { type: string }) => {
  const icons: Record<string, JSX.Element> = {
    drone: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    wrench: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    chart: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    calendar: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    grid: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  };
  return icons[type] || icons.grid;
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function ProductEcosystem() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-terra-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headline="THE TERRASYNC™ ECOSYSTEM"
          subheadline="Previously siloed technologies. One intelligent platform."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 md:mt-16"
        >
          {/* Desktop Bento Grid */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-5">
            {/* Dashboard Hero Card - Left Side (5 cols) */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-5 relative rounded-3xl overflow-hidden group cursor-pointer"
              style={{ minHeight: '480px' }}
            >
              <Image
                src={dashboardProduct.image}
                alt={dashboardProduct.name}
                fill
                className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-terra-green/10 via-transparent to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-terra-green bg-terra-green/10 backdrop-blur-sm rounded-full w-fit mb-4">
                  Platform
                </span>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white tracking-tight leading-none mb-2">
                  {dashboardProduct.name}
                </h3>
                <p className="text-base lg:text-lg text-white/80 font-light">
                  {dashboardProduct.tagline}
                </p>
                <p className="text-sm text-white/50 mt-3 max-w-sm hidden lg:block">
                  {dashboardProduct.description}
                </p>
              </div>
            </motion.div>

            {/* Mower Lineup Container - Right Side (7 cols) */}
            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-7 rounded-3xl border-2 border-terra-green/30 bg-terra-black-card/40 backdrop-blur-sm p-5 lg:p-6"
              style={{ minHeight: '480px' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-terra-green animate-pulse" />
                <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-terra-green">
                  Our Mower Lineup
                </h4>
              </div>

              <div className="grid grid-cols-3 gap-4 h-[calc(100%-60px)]">
                {mowers.map((mower, index) => (
                  <div
                    key={mower.id}
                    className="relative rounded-2xl overflow-hidden group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Image
                      src={mower.image}
                      alt={mower.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="(min-width: 1024px) 20vw, 30vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ring-2 ring-inset ring-terra-green/60 rounded-2xl" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h5 className="text-sm lg:text-base font-bold text-white leading-tight">
                        {mower.name}
                      </h5>
                      <p className="text-[11px] lg:text-xs text-white/60 mt-1 leading-snug">
                        {mower.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Supporting Tech Row */}
            {supportingTech.map((tech) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                className="lg:col-span-4 relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ minHeight: '220px' }}
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ring-1 ring-inset ring-terra-green/40 rounded-2xl" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-terra-green/80 mb-2 block">
                    {tech.category}
                  </span>
                  <h5 className="text-base font-bold text-white leading-tight">
                    {tech.name}
                  </h5>
                  <p className="text-xs text-white/50 mt-1">
                    {tech.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tablet Layout (md to lg) */}
          <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-4">
            {/* Dashboard - Full width on tablet */}
            <motion.div 
              variants={itemVariants} 
              className="col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer aspect-[16/9]"
            >
              <Image
                src={dashboardProduct.image}
                alt={dashboardProduct.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-terra-green bg-terra-green/10 backdrop-blur-sm rounded-full w-fit mb-3">
                  Platform
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight leading-none mb-2">
                  {dashboardProduct.name}
                </h3>
                <p className="text-base text-white/80 font-light">
                  {dashboardProduct.tagline}
                </p>
              </div>
            </motion.div>

            {/* Mower Lineup - Full width bordered container */}
            <motion.div 
              variants={itemVariants} 
              className="col-span-2 rounded-2xl border-2 border-terra-green/30 bg-terra-black-card/40 p-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-terra-green animate-pulse" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-terra-green">
                  Our Mower Lineup
                </h4>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {mowers.map((mower) => (
                  <div
                    key={mower.id}
                    className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[4/5]"
                  >
                    <Image
                      src={mower.image}
                      alt={mower.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h5 className="text-sm font-bold text-white leading-tight">
                        {mower.name}
                      </h5>
                      <p className="text-[10px] text-white/60 mt-0.5 leading-snug">
                        {mower.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Supporting Tech */}
            {supportingTech.map((tech) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[16/10]"
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-terra-green/80 mb-1 block">
                    {tech.category}
                  </span>
                  <h5 className="text-sm font-bold text-white leading-tight">
                    {tech.name}
                  </h5>
                  <p className="text-[11px] text-white/50 mt-1">
                    {tech.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout - Completely different design */}
          <div className="md:hidden space-y-4">
            {/* Dashboard - Full width with proper aspect ratio */}
            <motion.div 
              variants={itemVariants} 
              className="relative rounded-2xl overflow-hidden group cursor-pointer aspect-[16/10]"
            >
              <Image
                src={dashboardProduct.image}
                alt={dashboardProduct.name}
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="inline-block px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-terra-green bg-terra-green/10 backdrop-blur-sm rounded-full w-fit mb-2">
                  Platform
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight leading-none mb-1">
                  {dashboardProduct.name}
                </h3>
                <p className="text-sm text-white/80 font-light">
                  {dashboardProduct.tagline}
                </p>
              </div>
            </motion.div>

            {/* Mower Lineup - Vertical stack on mobile */}
            <motion.div 
              variants={itemVariants} 
              className="rounded-2xl border-2 border-terra-green/30 bg-terra-black-card/40 p-4"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-terra-green animate-pulse" />
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-terra-green">
                  Our Mower Lineup
                </h4>
              </div>

              <div className="space-y-3">
                {mowers.map((mower) => (
                  <div
                    key={mower.id}
                    className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[16/9]"
                  >
                    <Image
                      src={mower.image}
                      alt={mower.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col justify-center p-4">
                      <h5 className="text-lg font-bold text-white leading-tight">
                        {mower.name}
                      </h5>
                      <p className="text-xs text-white/70 mt-1">
                        {mower.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Supporting Tech - Vertical stack */}
            {supportingTech.map((tech) => (
              <motion.div
                key={tech.id}
                variants={itemVariants}
                className="relative rounded-xl overflow-hidden group cursor-pointer aspect-[16/9]"
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-center p-5">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-terra-green/80 mb-1">
                    {tech.category}
                  </span>
                  <h5 className="text-base font-bold text-white leading-tight">
                    {tech.name}
                  </h5>
                  <p className="text-xs text-white/60 mt-1">
                    {tech.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Honorable Mentions Section - All screen sizes */}
          <motion.div
            variants={itemVariants}
            className="mt-6 md:mt-8 rounded-2xl border border-white/5 bg-terra-black-card/30 backdrop-blur-sm p-5 md:p-8"
          >
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <h4 className="text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                Also Integrated
              </h4>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4">
              {honorableMentions.map((mention, index) => (
                <div
                  key={mention.id}
                  className="flex items-center gap-2 md:gap-3 px-3 md:px-5 py-2 md:py-3 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-terra-green/20 hover:bg-terra-green/[0.03] transition-all duration-300 cursor-default group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-white/30 group-hover:text-terra-green/60 transition-colors duration-300">
                    <MentionIcon type={mention.icon} />
                  </span>
                  <span className="text-xs md:text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300 font-medium">
                    {mention.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom tagline */}
          <p className="text-center text-white/30 mt-8 md:mt-12 text-xs md:text-sm font-light tracking-wide">
            All technologies seamlessly integrated through TerraSYNC&apos;s unified command center.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
