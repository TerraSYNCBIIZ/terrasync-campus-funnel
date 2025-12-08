"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  pulse?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  pulse = false,
}: ButtonProps) {
  const baseStyles = "font-semibold tracking-wide uppercase transition-all duration-300 inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-terra-green text-terra-black hover:bg-terra-green-glow hover:shadow-glow",
    secondary: "bg-terra-black-card text-white border border-terra-green/30 hover:border-terra-green hover:shadow-glow-sm",
    outline: "bg-transparent text-terra-green border-2 border-terra-green hover:bg-terra-green hover:text-terra-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-md",
    md: "px-6 py-3 text-sm rounded-lg",
    lg: "px-8 py-4 text-base rounded-xl",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${pulse ? "btn-pulse" : ""} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}

