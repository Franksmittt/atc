// src/app/terms/page.tsx
// Server Component - Required for legal and operational clarity.

import React from 'react';


// --- Metadata: Legal Compliance ---
export const metadata = {
  title: "Terms of Service | Alberton Tyre Clinic",
  description: "Review the terms and conditions that govern your use of the Alberton Tyre Clinic website and services, including appointments and warranties.",
};
export default function TermsOfServicePage() {
  return (
    <main>
      {/* Header */}
      <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-4 uppercase">
            Terms of <span className="text-primary">Service</span>
          </h1>
          <p className="text-xl text-neutral-400">
             Governing the use of our website and services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4 max-w-4xl text-neutral-800 dark:text-neutral-200 prose dark:prose-invert">
          
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using the services of Alberton Tyre Clinic, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h2>2.
          Service Appointments and Quotes</h2>
          <ul>
            <li>
                **Quote Validity:** All quotes for tyres, parts, and labour are valid for 7 days unless specified otherwise in writing.
            </li>
            <li>
                **Free Assessment:** The &quot;FREE 6-Point Vehicle Assessment&quot;
                is a visual check of accessible components and does not involve dismantling parts.
                It is non-binding and does not constitute a full diagnostic.
            </li>
            <li>
                **Cancellations:** We request at least 4 hours&apos;
                notice for any appointment cancellations.
            </li>
          </ul>

          <h2>3.
          Warranties and Guarantees</h2>
          <p>
            All parts (tyres, brakes, batteries, shocks) are covered by the original manufacturer&apos;s warranty.
            [cite_start]Warranties on tyres are subject to the manufacturer&apos;s conditions, often requiring **mandatory alignment and balancing every 10,000 km**[cite: 4030].
            Failure to adhere to maintenance schedules may void the warranty.
          </p>

          <h2>4.
          Limitation of Liability</h2>
          <p>
            Alberton Tyre Clinic will not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from (i) your access to or inability to access or use the Service;
            (ii) any conduct or content of any third party on the Service.
          </p>

          <p className="not-prose mt-10 text-center">
            <a href="mailto:sales@albertontyreclinic.co.za" className="font-bold text-primary hover:underline">
              Contact us for any questions regarding these terms: **sales@albertontyreclinic.co.za**.
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}