"use client";

import { motion } from "framer-motion";
import { GlowCard } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { GUARANTEE } from "@/lib/constants";
import { ShieldIcon, DollarIcon, HeadsetIcon } from "./ui/Icons";

const guaranteeIcons = {
  shield: ShieldIcon,
  dollar: DollarIcon,
  headset: HeadsetIcon,
};

export function Guarantee() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-terra-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-terra-green/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          headline={GUARANTEE.headline}
          subheadline={GUARANTEE.subheadline}
        />

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUARANTEE.guarantees.map((guarantee, index) => {
            const Icon = guaranteeIcons[guarantee.icon as keyof typeof guaranteeIcons];
            return (
              <GlowCard key={index} delay={index * 0.15}>
                <div className="text-center py-4">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      delay: index * 0.15 + 0.3 
                    }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-terra-green/10 mb-6"
                  >
                    <Icon className="w-10 h-10 text-terra-green" />
                  </motion.div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {guarantee.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-terra-gray leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <ShieldIcon className="w-5 h-5 text-terra-green" />
            <span className="text-terra-gray">
              100% Satisfaction Guaranteed or Your Money Back
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

