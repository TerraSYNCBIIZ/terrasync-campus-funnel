"use client";

import { motion } from "framer-motion";
import { BRAND, FOOTER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-terra-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terra-green/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="/images/terrasync-logo.svg" 
              alt="TerraSYNC™" 
              className="h-12 w-auto mb-4" 
            />
            <p className="text-terra-gray text-sm tracking-widest uppercase">
              {BRAND.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8 text-terra-gray">
            <a 
              href={`mailto:${BRAND.email}`}
              className="hover:text-terra-green transition-colors animated-underline"
            >
              {BRAND.email}
            </a>
            <span className="hidden sm:block">|</span>
            <a 
              href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`}
              className="hover:text-terra-green transition-colors animated-underline"
            >
              {BRAND.phone}
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {FOOTER.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-terra-gray hover:text-terra-green transition-colors animated-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {FOOTER.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-terra-gray hover:text-terra-green hover:border-terra-green transition-all glow-hover"
              >
                <span className="sr-only">{social.label}</span>
                {social.label === "LinkedIn" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )}
                {social.label === "Twitter" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-terra-gray">
              © {new Date().getFullYear()} {BRAND.name}. {FOOTER.tagline}
            </p>
            <p className="text-xs text-terra-gray/50 mt-2">
              All rights reserved. Built with precision, just like our automation.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

