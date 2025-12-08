"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-terra-black via-terra-black-light to-terra-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terra-green/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          headline={HOW_IT_WORKS.headline}
          subheadline={HOW_IT_WORKS.subheadline}
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-terra-green via-terra-green/50 to-transparent hidden md:block" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {HOW_IT_WORKS.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Number */}
                <div className="hidden md:flex items-center justify-center w-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-terra-black-card border-2 border-terra-green flex items-center justify-center">
                      <span className="text-3xl font-bold text-terra-green">{step.number}</span>
                    </div>
                    {/* Glow */}
                    <div className="absolute inset-0 w-20 h-20 rounded-full bg-terra-green/20 blur-xl -z-10" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 glass rounded-2xl p-8 ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  {/* Mobile step number */}
                  <div className="md:hidden flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-terra-green/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-terra-green">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-terra-gray text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block glass-strong rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-xl md:text-2xl font-medium text-white">
              &ldquo;{HOW_IT_WORKS.callout}&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

