"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function Card({ children, className = "", hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 card-shine ${hover ? "glow-hover" : ""} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export function GlowCard({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-terra-green to-terra-green-glow rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
      
      {/* Card content */}
      <div className="relative glass-strong rounded-2xl p-6">
        {children}
      </div>
    </motion.div>
  );
}

