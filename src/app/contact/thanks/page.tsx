// src/app/contact/thanks/page.tsx
import React from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 bg-neutral-100 dark:bg-neutral-900 text-center flex items-center justify-center">
            <div className="container max-w-xl p-8 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border-t-4 border-primary">
                <h1 className="text-4xl font-extrabold text-primary mb-4">Thank You!</h1>
                <p className="text-xl text-neutral-800 dark:text-neutral-200 mb-6">
                    Your appointment request has been received by our Alberton team.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
                    We will be in touch shortly via phone to confirm your **FREE Assessment** time and details.
                </p>
                <Link href="/" className="text-primary font-bold hover:underline">
                    ← Back to Homepage
                </Link>
            </div>
        </main>
    );
}