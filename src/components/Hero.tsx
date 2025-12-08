"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { HERO, PARTNERS } from "@/lib/constants";
import { ArrowRightIcon, PlayIcon } from "./ui/Icons";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-gradient-to-br from-terra-black via-terra-black-light to-terra-black"
          style={{
            backgroundImage: `url('/images/hero-campus.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-terra-green/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-terra-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Logo Header */}
      <div className="absolute top-0 left-0 w-full z-20 px-6 py-8 sm:px-10">
        <img src="/images/terrasync-logo.svg" alt="TerraSYNC™" className="h-10 sm:h-12 w-auto brightness-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 bg-terra-green rounded-full animate-pulse" />
            <span className="text-sm text-terra-gray uppercase tracking-wider">Zero Emissions • Zero Noise • Zero Upfront Cost</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="block text-white">THE FUTURE OF</span>
            <span className="block text-gradient">CAMPUS GROUNDS</span>
            <span className="block text-white">IS HERE</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-terra-gray max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="primary" size="lg" pulse onClick={scrollToContact}>
              {HERO.ctaPrimary}
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToHowItWorks}>
              <PlayIcon className="w-5 h-5" />
              {HERO.ctaSecondary}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16"
          >
            {HERO.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-terra-green mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-terra-gray uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-xs text-terra-gray uppercase tracking-widest mb-6">
              Powered by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
              <img src="/images/partners/husqvarna.png" alt="Husqvarna" className="h-6 object-contain brightness-0 invert" />
              <img src="/images/partners/korechi.svg" alt="Korechi" className="h-5 object-contain brightness-0 invert" />
              <img src="/images/partners/nexmow.png" alt="Nexmow" className="h-6 object-contain brightness-0 invert" />
              <img src="/images/partners/sheffield.png" alt="Sheffield Financial" className="h-6 object-contain brightness-0 invert" />
              <img src="/images/partners/kress-transparent.png" alt="Kress" className="h-6 object-contain brightness-0 invert" />
              <img src="/images/partners/caddis.png" alt="Caddis" className="h-6 object-contain brightness-0 invert" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-terra-gray uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-terra-gray/50 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-terra-green rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
