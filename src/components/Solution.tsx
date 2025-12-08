"use client";

import { motion } from "framer-motion";
import { GlowCard } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { SOLUTION } from "@/lib/constants";
import { RobotIcon, ChartIcon, DashboardIcon, CheckIcon, XIcon } from "./ui/Icons";

const pillarIcons = {
  robot: RobotIcon,
  chart: ChartIcon,
  dashboard: DashboardIcon,
};

export function Solution() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-terra-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-terra-green/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          headline={SOLUTION.headline}
          subheadline={SOLUTION.subheadline}
        />

        {/* Digital Twin Visualization - Before/After */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-terra-green/20 to-terra-green-glow/20 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-terra-green/20">
              <img 
                src="/images/before-after-comparison.jpg" 
                alt="Digital Twin Technology - Real-time synchronization between physical grounds and intelligent automation system" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <p className="text-center text-terra-gray mt-4 text-sm">
            Digital Twin Technology: Real-time synchronization between your physical grounds and our intelligent automation platform
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {/* Before - Reactive Era */}
          <div className="glass rounded-2xl p-8 border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <h3 className="text-xl font-semibold text-red-400">
                {SOLUTION.comparison.before.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {SOLUTION.comparison.before.points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-terra-gray">
                  <XIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After - Intelligent Era */}
          <div className="glass rounded-2xl p-8 border-terra-green/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-terra-green/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-terra-green animate-pulse" />
                <h3 className="text-xl font-semibold text-terra-green">
                  {SOLUTION.comparison.after.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {SOLUTION.comparison.after.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckIcon className="w-5 h-5 text-terra-green flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTION.pillars.map((pillar, index) => {
            const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];
            return (
              <GlowCard key={index} delay={index * 0.15}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-terra-green/10 mb-6">
                    <Icon className="w-8 h-8 text-terra-green" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-terra-gray leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Dashboard Preview Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-terra-green/30 to-terra-green-glow/30 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden border border-terra-green/20">
              <img 
                src="/images/dashboard-preview.jpg" 
                alt="TerraSYNC™ Environmental Dashboard - Real-time sustainability reporting" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
