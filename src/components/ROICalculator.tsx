"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { ROI_CALCULATOR } from "@/lib/constants";
import { ArrowRightIcon } from "./ui/Icons";

export function ROICalculator() {
  const [acres, setAcres] = useState<number>(ROI_CALCULATOR.defaults.acres);
  const [laborCost, setLaborCost] = useState<number>(ROI_CALCULATOR.defaults.laborCost);
  const [frequency, setFrequency] = useState<number>(ROI_CALCULATOR.defaults.frequency);

  const scrollToContactWithROI = () => {
    // Store ROI data in sessionStorage for the form to pick up
    const roiData = {
      projectedSavings,
      acres,
      laborCost,
      frequency,
      co2Reduction,
      fuelSaved,
    };
    sessionStorage.setItem('terrasync_roi_data', JSON.stringify(roiData));
    
    // Scroll to contact form
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Calculate projected savings
  const projectedSavings = useMemo(() => {
    // Base savings rate of 35-45% on labor, scaled by frequency
    const savingsRate = 0.35 + (frequency / 7) * 0.1;
    const laborSavings = laborCost * savingsRate;
    
    // Additional efficiency gains from increased frequency
    const efficiencyBonus = (frequency > 4 ? (frequency - 4) * 5000 : 0);
    
    // Scale slightly by acreage (larger properties = more savings potential)
    const acreageMultiplier = 1 + (acres - 100) / 1000;
    
    return Math.round(laborSavings * acreageMultiplier + efficiencyBonus);
  }, [acres, laborCost, frequency]);

  // Calculate environmental impact
  const co2Reduction = useMemo(() => {
    // Average gas mower emits ~441 lbs CO2 per acre per year
    // Electric mowers reduce this by ~80%
    const co2PerAcrePerYear = 441;
    const reductionRate = 0.80;
    return Math.round(acres * co2PerAcrePerYear * reductionRate * (frequency / 5));
  }, [acres, frequency]);

  // Calculate fuel savings
  const fuelSaved = useMemo(() => {
    // Average gas mower uses ~22 gallons per acre per season
    const gallonsPerAcre = 22;
    return Math.round(acres * gallonsPerAcre * (frequency / 5));
  }, [acres, frequency]);

  // Calculate equivalent trees planted
  const treesEquivalent = useMemo(() => {
    // One mature tree absorbs ~48 lbs of CO2 per year
    return Math.round(co2Reduction / 48);
  }, [co2Reduction]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-terra-black via-terra-black-light to-terra-black" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-terra-green/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          headline={ROI_CALCULATOR.headline}
          subheadline={ROI_CALCULATOR.subheadline}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-8 md:p-12"
        >
          {/* Sliders */}
          <div className="space-y-10 mb-12">
            {/* Acres Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-medium text-white">
                  Total Maintained Acres
                </label>
                <span className="text-2xl font-bold text-terra-green">
                  {acres} acres
                </span>
              </div>
              <input
                type="range"
                min={ROI_CALCULATOR.ranges.acres.min}
                max={ROI_CALCULATOR.ranges.acres.max}
                step={ROI_CALCULATOR.ranges.acres.step}
                value={acres}
                onChange={(e) => setAcres(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-terra-gray mt-2">
                <span>{ROI_CALCULATOR.ranges.acres.min} acres</span>
                <span>{ROI_CALCULATOR.ranges.acres.max} acres</span>
              </div>
            </div>

            {/* Labor Cost Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-medium text-white">
                  Annual Grounds Budget
                </label>
                <span className="text-2xl font-bold text-terra-green">
                  {formatCurrency(laborCost)}
                </span>
              </div>
              <input
                type="range"
                min={ROI_CALCULATOR.ranges.laborCost.min}
                max={ROI_CALCULATOR.ranges.laborCost.max}
                step={ROI_CALCULATOR.ranges.laborCost.step}
                value={laborCost}
                onChange={(e) => setLaborCost(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-terra-gray mt-2">
                <span>{formatCurrency(ROI_CALCULATOR.ranges.laborCost.min)}</span>
                <span>{formatCurrency(ROI_CALCULATOR.ranges.laborCost.max)}</span>
              </div>
            </div>

            {/* Frequency Slider */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-medium text-white">
                  Mowing Frequency (per week)
                </label>
                <span className="text-2xl font-bold text-terra-green">
                  {frequency}x weekly
                </span>
              </div>
              <input
                type="range"
                min={ROI_CALCULATOR.ranges.frequency.min}
                max={ROI_CALCULATOR.ranges.frequency.max}
                step={ROI_CALCULATOR.ranges.frequency.step}
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-terra-gray mt-2">
                <span>{ROI_CALCULATOR.ranges.frequency.min}x/week</span>
                <span>{ROI_CALCULATOR.ranges.frequency.max}x/week</span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Financial Savings */}
            <div className="relative rounded-2xl bg-gradient-to-r from-terra-green/20 to-terra-green-glow/20 p-6 text-center overflow-hidden">
              <div className="absolute inset-0 bg-terra-green/5 blur-3xl" />
              <div className="relative">
                <p className="text-terra-gray uppercase tracking-wider text-xs mb-2">
                  Projected Annual Savings
                </p>
                <motion.div
                  key={projectedSavings}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                >
                  {formatCurrency(projectedSavings)}
                </motion.div>
                <p className="text-terra-gray text-xs">
                  Budget savings per year
                </p>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="relative rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 p-6 text-center overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/5 blur-3xl" />
              <div className="relative">
                <p className="text-terra-gray uppercase tracking-wider text-xs mb-2">
                  CO₂ Reduction
                </p>
                <motion.div
                  key={co2Reduction}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2"
                >
                  {formatNumber(co2Reduction)} lbs
                </motion.div>
                <p className="text-terra-gray text-xs">
                  Less carbon annually
                </p>
              </div>
            </div>
          </div>

          {/* Additional Environmental Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-terra-green mb-1">
                {formatNumber(fuelSaved)}
              </p>
              <p className="text-terra-gray text-xs uppercase tracking-wider">
                Gallons Fuel Saved
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center">
              <p className="text-2xl md:text-3xl font-bold text-terra-green mb-1">
                {formatNumber(treesEquivalent)}
              </p>
              <p className="text-terra-gray text-xs uppercase tracking-wider">
                Trees Equivalent
              </p>
            </div>
            <div className="glass rounded-xl p-4 text-center col-span-2 md:col-span-1">
              <p className="text-2xl md:text-3xl font-bold text-terra-green mb-1">
                100%
              </p>
              <p className="text-terra-gray text-xs uppercase tracking-wider">
                Zero Emissions
              </p>
            </div>
          </div>

          <p className="text-center text-terra-gray text-sm mb-8">
            Environmental metrics based on EPA data for gas-powered equipment vs. electric automation
          </p>

          {/* CTA */}
          <div className="text-center">
            <Button variant="primary" size="lg" onClick={scrollToContactWithROI}>
              {ROI_CALCULATOR.cta}
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
