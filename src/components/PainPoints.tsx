"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { PAIN_POINTS } from "@/lib/constants";
import { ClockIcon, UsersIcon, ChartIcon, DollarIcon, ShieldIcon } from "./ui/Icons";

const iconMap = {
  clock: ClockIcon,
  users: UsersIcon,
  chart: ChartIcon,
  dollar: DollarIcon,
  shield: ShieldIcon,
};

export function PainPoints() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-terra-black via-terra-black-light to-terra-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terra-green/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          headline={PAIN_POINTS.headline}
        />

        {/* Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PAIN_POINTS.points.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap];
            return (
              <Card key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {point.title}
                    </h3>
                    <p className="text-terra-gray text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-terra-gray italic">
            {PAIN_POINTS.transition}
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-terra-green to-terra-green-glow mx-auto mt-8 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
