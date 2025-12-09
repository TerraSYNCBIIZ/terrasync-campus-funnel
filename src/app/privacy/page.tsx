"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-terra-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-terra-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-block">
            <img 
              src="/images/terrasync-logo.svg" 
              alt="TerraSYNC™" 
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-terra-gray mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-terra-gray leading-relaxed">
                {BRAND.name} ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="text-terra-gray leading-relaxed mb-4">
                We may collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-terra-gray space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Property address and details</li>
                <li>Business or organization name</li>
                <li>Information about your current lawn care or grounds management needs</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-terra-gray leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-terra-gray space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Schedule consultations and property assessments</li>
                <li>Provide you with information about our products and services</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <p className="text-terra-gray leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information 
                with trusted service providers who assist us in operating our website and conducting our business, provided 
                that those parties agree to keep this information confidential.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="text-terra-gray leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="text-terra-gray leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-terra-gray space-y-2 ml-4">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
              <p className="text-terra-gray leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. 
                You can set your browser to refuse cookies, but some features of our website may not function properly.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
              <p className="text-terra-gray leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the 
                new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
              <p className="text-terra-gray leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-6 glass rounded-xl">
                <p className="text-white font-semibold">{BRAND.name}</p>
                <p className="text-terra-gray">Email: <a href={`mailto:${BRAND.email}`} className="text-terra-green hover:underline">{BRAND.email}</a></p>
                <p className="text-terra-gray">Phone: <a href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`} className="text-terra-green hover:underline">{BRAND.phone}</a></p>
              </div>
            </section>
          </div>

          {/* Back Link */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-terra-green hover:text-terra-green-glow transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

