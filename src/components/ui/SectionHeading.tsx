"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  headline: string;
  subheadline?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  headline,
  subheadline,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${centered ? "text-center" : ""} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
        <span className="text-gradient">{headline}</span>
      </h2>
      {subheadline && (
        <p className="text-lg md:text-xl text-terra-gray max-w-3xl mx-auto">
          {subheadline}
        </p>
      )}
    </motion.div>
  );
}

