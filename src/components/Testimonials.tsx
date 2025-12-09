"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { SectionHeading } from "./ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/constants";
import { QuoteIcon } from "./ui/Icons";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-terra-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-terra-green/5 via-transparent to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          headline={TESTIMONIALS.headline}
        />

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS.quotes.map((testimonial, index) => (
            <Card key={index} delay={index * 0.15}>
              <div className="flex flex-col h-full">
                {/* Quote icon */}
                <QuoteIcon className="w-10 h-10 text-terra-green mb-4" />
                
                {/* Quote */}
                <p className={`text-lg leading-relaxed mb-6 flex-grow ${testimonial.quote ? 'text-white' : 'text-terra-gray/50 italic'}`}>
                  {testimonial.quote ? (
                    <>&ldquo;{testimonial.quote}&rdquo;</>
                  ) : (
                    <>&ldquo;Testimonial coming soon...&rdquo;</>
                  )}
                </p>

                {/* Attribution */}
                <div className="flex items-start gap-4 pt-6 border-t border-white/10">
                  {/* Avatar placeholder */}
                  <div 
                    className={`w-12 h-12 rounded-full bg-terra-black-card flex items-center justify-center flex-shrink-0 ${testimonial.name === '[REDACTED]' ? 'blur-sm' : ''}`}
                    style={{
                      backgroundImage: testimonial.name !== '[REDACTED]' ? `url('/images/testimonials/${testimonial.name.toLowerCase().replace(' ', '-')}.jpg')` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <span className="text-terra-green text-lg font-bold">
                      {testimonial.name === '[REDACTED]' ? '?' : testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <p className={`font-semibold ${testimonial.name === '[REDACTED]' ? 'text-terra-gray blur-sm select-none' : 'text-white'}`}>
                      {testimonial.name === '[REDACTED]' ? 'Name Withheld' : testimonial.name}
                    </p>
                    {testimonial.title && (
                      <p className="text-sm text-terra-gray">{testimonial.title}</p>
                    )}
                    <p className="text-sm text-terra-gray">{testimonial.course}</p>
                  </div>
                </div>

                {/* Metric badge - only show if metric exists */}
                {testimonial.metric && (
                  <div className="mt-4 inline-flex self-start">
                    <span className="px-3 py-1 rounded-full bg-terra-green/10 text-terra-green text-sm font-medium">
                      {testimonial.metric}
                    </span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-3 gap-8">
            {TESTIMONIALS.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-terra-gray uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

