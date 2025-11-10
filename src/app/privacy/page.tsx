// src/app/privacy/page.tsx
// Server Component - Required for legal compliance and trust.

import React from 'react';
import Link from 'next/link';

// --- Metadata: Legal Compliance ---
export const metadata = {
  title: "Privacy Policy | Alberton Tyre Clinic",
  description: "Our commitment to protecting your personal information. Read about how Alberton Tyre Clinic collects, uses, and safeguards customer data.",
};
export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-4 uppercase">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-neutral-400">
            Last Updated: October 30, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-4xl text-neutral-800 dark:text-neutral-200 prose dark:prose-invert">
          
          <h2>1. Introduction</h2>
          <p>
            Alberton Tyre Clinic (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of your personal information. This policy describes how we collect, use, and share information about you when you use our website or services.
          </p>

          <h2>2.
          Information We Collect</h2>
          <p>We collect information you provide directly to us:</p>
          <ul>
            <li>**Contact Information:** Name and Phone Number when you book an assessment or request a quote (via forms on the /assessment and /contact pages).</li>
            <li>**Vehicle Information:** Optional details about your vehicle make and model.</li>
            <li>**Communication Data:** Content of 
            messages and emails you send us.</li>
          </ul>

          <h2>3.
          How We Use Your Information</h2>
          <p>We use the collected information primarily for:</p>
          <ul>
            <li>To book and confirm your vehicle assessment or service appointment.</li>
            <li>To provide personalized price quotes and service recommendations.</li>
            <li>To improve the efficiency of our service and website experience.</li>
          </ul>

          <h2>4.
          Data Sharing and Disclosure</h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties.
            We may share your information only with:
          </p>
          <ul>
            <li>Service providers (e.g., payment processors, hosting partners) necessary to deliver our services, who are bound by confidentiality agreements.</li>
            <li>When required by law or to protect our rights and safety.</li>
          </ul>
          
          <h2>5. Your Choices and Rights</h2>
          <p>
            You have the right to request access to the personal data we hold about you and to ask for corrections to be made.
            To exercise these rights, please contact us at **sales@albertontyreclinic.co.za**.
          </p>

          <p className="not-prose mt-10 text-center">
            <Link href="/contact" className="font-bold text-primary hover:underline">
              Questions about this policy?
              Contact us here.
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}