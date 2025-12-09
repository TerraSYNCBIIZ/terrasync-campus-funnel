"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="text-terra-gray mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-terra-gray leading-relaxed">
                By accessing and using the {BRAND.name} website and services, you accept and agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Services</h2>
              <p className="text-terra-gray leading-relaxed">
                {BRAND.name} provides autonomous lawn care and grounds management solutions, including but not limited to 
                robotic mowing equipment, software platforms, installation services, and ongoing maintenance and support. 
                Specific service details are outlined in individual service agreements.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Website</h2>
              <p className="text-terra-gray leading-relaxed mb-4">
                You agree to use this website only for lawful purposes and in a way that does not infringe upon the 
                rights of others. You may not:
              </p>
              <ul className="list-disc list-inside text-terra-gray space-y-2 ml-4">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Collect or harvest any information from the website without permission</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-terra-gray leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of 
                {BRAND.name} or its content suppliers and is protected by intellectual property laws. You may not 
                reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">5. Service Agreements</h2>
              <p className="text-terra-gray leading-relaxed">
                The use of {BRAND.name} services is governed by separate service agreements, which contain specific 
                terms, pricing, warranties, and conditions. These Terms of Service apply to the use of our website and 
                general interactions with our company.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-terra-gray leading-relaxed">
                This website and its content are provided "as is" without warranties of any kind, either express or 
                implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or 
                other harmful components.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-terra-gray leading-relaxed">
                To the fullest extent permitted by law, {BRAND.name} shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising out of your access to or use of this website. Our 
                total liability shall not exceed the amount you paid for services, if any.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">8. Indemnification</h2>
              <p className="text-terra-gray leading-relaxed">
                You agree to indemnify and hold harmless {BRAND.name}, its officers, directors, employees, and agents 
                from any claims, damages, losses, or expenses arising from your use of the website or violation of 
                these terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Links</h2>
              <p className="text-terra-gray leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the content, privacy 
                policies, or practices of these external sites. Accessing third-party links is at your own risk.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">10. Modifications to Terms</h2>
              <p className="text-terra-gray leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately 
                upon posting to the website. Your continued use of the website after changes constitutes acceptance of 
                the modified terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">11. Governing Law</h2>
              <p className="text-terra-gray leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of 
                Tennessee, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Information</h2>
              <p className="text-terra-gray leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
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

