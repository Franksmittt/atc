// src/app/contact/page.tsx
"use client"; // This page must be a client component to use React Hook Form

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// REMOVED: useFormState and useFormStatus as they are no longer needed
// REMOVED: createAppointment as it is no longer needed
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// FIX: Added Mail icon to the imports
import { Phone, User, MessageSquare, MessageSquareText, Info, Send, Mail } from 'lucide-react';

// --- Zod Client Schema (Used for Client-Side UX Validation) ---
const ClientSchema = z.object({
  clientName: z.string().min(3, "Please enter your name."),
  phoneNumber: z.string().min(10, "A valid 10-digit phone number is required."),
  // NOTE: Formspree uses an _replyto field for the submitter's email.
  _replyto: z.string().email("A valid email address is required for contact.").optional(),
  serviceType: z.string().optional(),
  message: z.string().optional(),
});
// Define the type based on the Zod schema
type ClientFormData = z.infer<typeof ClientSchema>;

// Helper component for the submit button state (Simplified)
function SubmitButton() {
    // REMOVED: unused 'setIsSubmitting' setter to fix unused-vars error
    const [isSubmitting] = useState(false); 
    // This form now uses traditional HTML submission, so pending state is managed locally
    return (
        <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/hover text-white transition-opacity"
            disabled={isSubmitting}
        >
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? 'Sending Request...' : 'Request Quote / Assessment'}
        </Button>
    );
}

export default function ContactPage() {
    // 1. Local state for showing success message after Formspree redirect
    // const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle'); // REMOVED: Unused state

    // 2. React Hook Form setup for client-side validation
    // REMOVED: unused 'reset' function from destructuring
    const { register, handleSubmit, formState: { errors } } = useForm<ClientFormData>({ 
        resolver: zodResolver(ClientSchema),
    });
// 3. Client-side submit handler (validates, then uses native browser submission)
    // REMOVED: unused 'data' argument
    const onSubmit = () => {
        // You would typically handle form submission logic here (e.g., set loading state, clear form)
        // For Formspree, the form submission is handled by the <form action="..."> itself.
// NOTE: Since the Server Action is removed, you must replace the action URL
        // with your own registered Formspree endpoint (e.g., https://formspree.io/f/your-form-id)
        // If left as-is, the form will still validate client-side before redirecting to the Formspree success page.
    };
    
    // NOTE: The form will redirect away from this page upon successful submission to Formspree's own thank you page.
// To handle success status locally without redirect, Formspree Pro is required.
// For now, we rely on Formspree's default thank you page.
    return (
        <main>
            {/* Header */}
            <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-5xl font-extrabold mb-4 uppercase">
                         Request a <span className="text-primary">Quote or Assessment</span>
                    </h1>
                    <p className="text-xl text-neutral-400">
                        Use the secure form below or WhatsApp us directly. Safety and service guaranteed by our Alberton team.
                    </p>
                </div>
            </section>
            
            {/* WHATSAPP CLARITY BLOCK */}
             <div className="bg-primary/10 dark:bg-primary/20 text-neutral-800 dark:text-neutral-200 py-4">
                 <div className="container mx-auto px-4 max-w-5xl flex items-center text-sm sm:text-base">
                    <Info className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
                    <p className='font-medium'>
                        **WhatsApp Line Clarity:** The 081 884 9807 number is for **messages only** (text/voice notes). It **cannot receive phone calls**. Please use the Landline (+27 11 907 8495) for voice calls.
                    </p>
                </div>
            </div>

            {/* Form & Contact Info */}
            <section className="py-24 bg-white dark:bg-neutral-800">
                <div className="container mx-auto px-4 max-w-5xl">
                    
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Info Column (High-Intent, Enhanced) */}
                        <div className="space-y-6 text-neutral-800 dark:text-neutral-200 p-6 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 h-full">
                            <h2 className="text-3xl font-bold text-primary mb-6">Need Urgent Help?</h2>

                            <p className="text-lg mb-8">
                                Don&apos;t wait for a form. Call or message our team directly for immediate service in Alberton.
                            </p>

                            <div className="space-y-6">
                                {/* Direct Call Link (LANDLINE - UNCHANGED) */}
                                <a href="tel:+27119078495" 
                                className="flex items-center text-2xl font-extrabold text-primary hover:text-primary/70 transition-colors">
                                    <Phone className="h-7 w-7 mr-3 text-primary" />
                                    +27 11 907 8495 (Landline)
                                </a>

                                {/* WhatsApp Link (UPDATED NUMBER) */}
                                <a href="https://wa.me/27818849807?text=Hello%2C%20I%20need%20urgent%20help%20with%20my%20tyres."
                                target="_blank" rel="noopener noreferrer" className="flex items-center text-2xl font-extrabold text-[#25D366] hover:text-[#128C7E] transition-colors">
                                    <MessageSquareText className="h-7 w-7 mr-3" />
                                    081 884 9807 (WhatsApp Now)
                                </a>
                            </div>

                            {/* Hours Block */}
                            <div className="pt-8 border-t border-neutral-300 dark:border-neutral-700">
                                <h3 className='text-xl font-bold mb-2'>Operational Hours</h3>
                                <div className="text-neutral-600 dark:text-neutral-400 space-y-1">
                                    <p>Monday - Friday: 08:00 - 17:00</p>
                                    <p>Saturday: 08:00 - 12:00</p>
                                    <p>Sunday: Closed</p>
                                 </div>
                            </div>
                        </div>

                        {/* Form Column */}
                         <div className="bg-white dark:bg-neutral-950 p-6 rounded-lg shadow-xl border border-neutral-200 dark:border-neutral-700">
                             <h2 className="text-3xl font-bold text-neutral-800 dark:text-white mb-6">Request a Call Back</h2>

                            {/* Form uses the handleSubmit wrapper from React Hook Form */}
                            {/* CRITICAL CHANGE: FORM ACTION & METHOD.
                            Replace YOUR_FORMSPREE_ENDPOINT with your endpoint. */}
                            <form 
                                onSubmit={handleSubmit(onSubmit)} 
                                className="space-y-4"
                                // The email address you registered with Formspree will receive submissions
                                action="https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT" 
                                method="POST"
                            >

                                 {/* Name Input */}
                                <div>
                                    <label htmlFor="clientName" className="flex items-center text-sm font-medium mb-1 dark:text-neutral-300">
                                        <User className="h-4 w-4 mr-2" /> Full Name
                                    </label>
                                     <Input
                                    
                                         id="clientName"
                                         type="text"
                                        placeholder="John Smith"
                                         {...register("clientName")}
                                         className={errors.clientName ? 'border-destructive' : ''}
                                         name="Client Name" // HTML name attribute for Formspree field identification
                                    />
                                    
                                 {/* Display Client-Side Validation Error */}
                                 {errors.clientName && <p className="text-sm text-destructive mt-1">{errors.clientName.message?.toString()}</p>}
                                </div>

                                
                                {/* Email Input - ADDED for Formspree compatibility/replies */}
                                <div>
                             
                                 <label htmlFor="_replyto" className="flex items-center text-sm font-medium mb-1 dark:text-neutral-300">
                                         <Mail className="h-4 w-4 mr-2" /> Email Address (Required for quote)
                                     </label>
                                     <Input
                                        id="_replyto"
                                       type="email"
                                        placeholder="sales@albertontyreclinic.co.za"
                                        {...register("_replyto")}
                                         className={errors._replyto ? 'border-destructive' : ''}
                                        name="_replyto" // CRITICAL Formspree field for setting Reply-To header
                                    />
                              
                               {errors._replyto && <p className="text-sm text-destructive mt-1">{errors._replyto.message?.toString()}</p>}
                                </div>


                                {/* Phone Input */}
                                  <div>
                                    <label htmlFor="phoneNumber" className="flex items-center text-sm font-medium mb-1 dark:text-neutral-300">
                                        
                                   <Phone className="h-4 w-4 mr-2" /> Phone Number
                                    </label>
                                    <Input
                                    
                                         id="phoneNumber"
                                        type="tel"
                                        placeholder="082 555 1234"
                                         {...register("phoneNumber")}
                                        className={errors.phoneNumber ? 'border-destructive' : ''}
                                        name="Phone Number"
                                    />
                                     
                               {errors.phoneNumber && <p className="text-sm text-destructive mt-1">{errors.phoneNumber.message?.toString()}</p>}
                                </div>

                                 {/* Service Type (Example of selecting a service) */}
                                   <div>
                                    <label htmlFor="serviceType" className="text-sm font-medium mb-1 dark:text-neutral-300 block">
                                        
                                   Service Required (Optional)
                                    </label>
                                     <select
                                       id="serviceType"
                                        {...register("serviceType")}
                                          className="w-full p-2 border border-input rounded-md bg-background text-foreground"
                                         name="Service Type"
                                    >
                                         <option value="">I need a Free Assessment (Default)</option>
                                         <option value="Tyre Quote">Tyre Quote</option>
                                         <option value="Brake/Shock Quote">Brake/Shock Quote</option>
                                         <option value="Battery Quote">Battery Quote</option>
                                    </select>
                                </div>

                                 {/* Message Input */}
                                   <div>
                                    <label htmlFor="message" className="flex items-center text-sm font-medium mb-1 dark:text-neutral-300">
                                          <MessageSquare className="h-4 w-4 mr-2" /> Message
                                     </label>
                                       <Textarea
                             
                                         id="message"
                                        placeholder="e.g., Need 2 Pirelli tyres for a Golf 7..."
                                     {...register("message")}
                                       name="Message"
                                    />
                              
                                 </div>

                                 {/* Submit Button */}
                                <SubmitButton />

                            
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}