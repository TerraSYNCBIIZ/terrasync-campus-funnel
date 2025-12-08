"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { FINAL_CTA, APPOINTMENT_BOOKING_URL } from "@/lib/constants";
import { ArrowRightIcon, CheckIcon, CalendarIcon } from "./ui/Icons";
import { submitLeadToOdoo, LeadData } from "@/lib/odoo";

interface ROIData {
  projectedSavings: number;
  acres: number;
  laborCost: number;
  frequency: number;
  co2Reduction?: number;
  fuelSaved?: number;
}

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
    acres: "",
  });
  const [roiData, setRoiData] = useState<ROIData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for ROI data from calculator
  useEffect(() => {
    const storedRoiData = sessionStorage.getItem('terrasync_roi_data');
    if (storedRoiData) {
      const parsed = JSON.parse(storedRoiData);
      setRoiData(parsed);
      // Pre-fill acres if available
      if (parsed.acres && !formData.acres) {
        setFormData(prev => ({ ...prev, acres: parsed.acres.toString() }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const leadData: LeadData = {
        name: formData.name,
        email: formData.email,
        course: formData.course,
        phone: formData.phone,
        acres: formData.acres,
        source: "TerraSYNC Campus Landing Page - Contact Form",
      };

      // Include ROI data if available
      if (roiData) {
        leadData.roiData = roiData;
      }

      const result = await submitLeadToOdoo(leadData);

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-terra-black to-terra-black-light" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terra-green/20 to-transparent" />
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-terra-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-terra-green/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gradient">{FINAL_CTA.headline}</span>
          </h2>
          <p className="text-xl text-terra-gray">
            {FINAL_CTA.subheadline}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-8 md:p-12"
        >
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ROI Data Badge - Enhanced for Campus */}
              {roiData && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-xl bg-terra-green/10 border border-terra-green/30 mb-6"
                >
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-terra-green" />
                    <span className="text-terra-green font-medium">
                      ${roiData.projectedSavings.toLocaleString()}/year savings
                    </span>
                  </div>
                  {roiData.co2Reduction && (
                    <div className="flex items-center gap-2">
                      <CheckIcon className="w-5 h-5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">
                        {roiData.co2Reduction.toLocaleString()} lbs CO₂ reduced
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FINAL_CTA.formFields.map((field) => (
                  <div key={field.name} className={field.name === "course" ? "md:col-span-2" : ""}>
                    <label 
                      htmlFor={field.name}
                      className="block text-sm font-medium text-terra-gray mb-2"
                    >
                      {field.label}
                      {field.required && <span className="text-terra-green ml-1">*</span>}
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-terra-black-card border border-white/10 text-white placeholder-terra-gray/50 transition-all duration-300 disabled:opacity-50"
                    />
                  </div>
                ))}
              </div>

              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="pt-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full" 
                  pulse={!isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      {FINAL_CTA.cta}
                      <ArrowRightIcon className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </div>

              <p className="text-center text-sm text-terra-gray">
                {FINAL_CTA.microcopy}
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terra-green/20 mb-4"
              >
                <CheckIcon className="w-8 h-8 text-terra-green" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                You&apos;re Almost There!
              </h3>
              <p className="text-terra-gray text-lg max-w-md mx-auto mb-6">
                Now let&apos;s schedule your personalized GMA™ Demo. Pick a time that works for you:
              </p>
              
              {/* Odoo Appointment Booking Embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden bg-white"
              >
                <iframe
                  src={APPOINTMENT_BOOKING_URL}
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Book Your GMA™ Demo"
                  className="w-full"
                  allow="geolocation; microphone; camera"
                  loading="lazy"
                  style={{ 
                    border: 'none',
                    borderRadius: '16px',
                    minHeight: '700px'
                  }}
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 flex items-center justify-center gap-2 text-terra-gray"
              >
                <CalendarIcon className="w-5 h-5 text-terra-green" />
                <span>30-minute personalized demo • Online meeting</span>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Trust indicators - Updated for Campus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-terra-gray"
        >
          <div className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-terra-green" />
            <span>Zero Upfront Cost</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-terra-green" />
            <span>Free Property Assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-terra-green" />
            <span>Sustainability Reports Included</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
