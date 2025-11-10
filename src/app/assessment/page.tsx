// src/app/assessment/page.tsx
"use client"; // Needs to be a Client Component for form handling

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState, useFormStatus } from 'react-dom';
import { createAppointment } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// Import all necessary icons
import { Car, CheckCircle, ShieldCheck, Wrench, Phone, User, BatteryFull, Lightbulb, Gauge } from 'lucide-react';
// --- Zod Client Schema (Standard form validation) ---
const AssessmentSchema = z.object({
  clientName: z.string().min(3, "Please enter your full name."),
  phoneNumber: z.string().min(10, "A valid 10-digit phone number is required for booking."),
  vehicleMake: z.string().optional(),
  message: z.string().optional(),
});
// Define the type based on the Zod schema
type AssessmentFormData = z.infer<typeof AssessmentSchema>;

// Helper component for the submit button state
function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button
            type="submit"
            size="xl"
            // FIX: Ensure button text scales down and button takes full width on all screens
            className="w-full text-base sm:text-xl bg-primary hover:bg-primary/hover text-white transition-opacity font-bold py-3 whitespace-normal h-auto"
            disabled={pending}
        >
            {pending ? 'Booking Assessment...' : 'Book Your FREE Assessment Now'}
        </Button>
    );
}

// --- Assessment Page Component ---
export default function AssessmentPage() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<AssessmentFormData>({
        resolver: zodResolver(AssessmentSchema),
    });
    // This is the line that required the fix in src/lib/actions.ts (L72)
    const [state, dispatch] = useFormState(createAppointment, null);

    useEffect(() => {
        // Check if state exists, has a message, isn't the specific validation failure message, and has no errors object
        if (state && typeof state === 'object' && state !== null && 'message' in state && state.message && state.message !== 'Validation Failed.' && !('errors' in state)) {
            // Success response logic
            reset(); // Clear the form
            alert("Booking successfully submitted! We will call you soon to confirm.");
        }
    }, [state, reset]);

// Use the specific form data type for the data parameter
    const onSubmit = (data: AssessmentFormData) => {
        const formData = new FormData();
// Loop through the keys of the validated data and append to FormData
        Object.keys(data).forEach(key => {
          // Type assertion to ensure key is valid for AssessmentFormData
          const typedKey = key as keyof AssessmentFormData;
          const value = data[typedKey];
          // Append only if the value is not undefined or null
          if (value !== undefined && value !== null) {
            formData.append(typedKey, String(value));
          }
        });
        formData.append('serviceType', 'FREE 6-Point Assessment'); // Add hidden value
        dispatch(formData);
    };

    return (
        <main>
            {/* 1. HERO: High-Impact Value Proposition (H1 and Trust) */}
            <section className="pt-32 pb-20 bg-neutral-900 text-white border-b-8 border-primary">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 uppercase leading-tight">
                         Claim Your FREE 6-Point Vehicle Safety Assessment
                    </h1>
                    <p className="text-xl md:text-2xl text-primary font-bold mb-6">
                        Stop Guessing. Start Driving Safely. (No obligation. Zero cost.)
                    </p>
                    {/* FIX: Use flex-wrap on small screens and reduce space */}
                    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-base sm:text-lg font-medium">
                         <span className="flex items-center justify-center"><CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0" /> Tyres, Brakes &amp; Shocks</span>
                         <span className="flex items-center justify-center"><CheckCircle className="h-5 w-5 mr-2 text-primary flex-shrink-0" /> Full Battery Test</span>
                    </div>
                </div>
            </section>

            {/* 2. VALUE & FORM: Conversion Core */}
            <section className="py-16 sm:py-24 bg-white dark:bg-neutral-800">
                 <div className="container mx-auto px-4 max-w-6xl">
                    {/* Main grid changes from vertical stack to 2 columns on large screens */}
                    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">

                        {/* A. Assessment Value & Breakdown */}
                         <div className="space-y-6 sm:space-y-8">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-800 dark:text-white">
                                Why Is This Assessment Crucial?
                            </h2>
                            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
                                Tyres are only part of the safety equation. Our **Alberton Tyre Clinic** experts check the entire system that keeps you on the road safely—all completely free.
                            </p>

                            <div className="space-y-4">
                                <h3 className='text-xl sm:text-2xl font-bold text-primary'>The 6-Point Safety Checklist:</h3>
                                {/* Dynamically generated list */}
                                {[
                                     { icon: Car, title: "Tyre Tread & Pressure", detail: "Checking all four tyres for wear, damage, and correct inflation." },
                                     { icon: ShieldCheck, title: "Brakes & Discs Visual Check", detail: "Assessment of brake pad wear and disc condition (critical for stopping)." },
                                     { icon: Gauge, title: "Shocks & Suspension (Visual)", detail: "Checking for leaks or damage that compromises handling." },
                                     { icon: Wrench, title: "Wheel Alignment Check", detail: "A quick diagnosis for correct steering geometry." },
                                     { icon: BatteryFull, title: "Full Battery Health Test", detail: "Check voltage and CCA for winter readiness." },
                                     { icon: Lightbulb, title: "Fluid & Lights Check", detail: "Windscreen wipers, oil level, and lights checked for compliance." },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg shadow-sm border-l-4 border-primary">
                   
                                         {/* Ensure icon doesn't shrink, forcing text to wrap beside it */}
                                         <item.icon className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                   
                                         <div>
                                             <p className="font-semibold text-neutral-800 dark:text-white">{item.title}</p>
                               
                                             {/* FIX: Reduce detail text size on mobile for density */}
                                            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{item.detail}</p>
                            
                                        </div>
                                    </div>
                                ))}
                    
                         </div>
                         </div>

                        {/* B. The Booking Form */}
                        {/* FIX: Added lg:p-8 to ensure sufficient padding on large screens */}
   
                        <div className="sticky top-10 p-5 sm:p-8 bg-neutral-100 dark:bg-neutral-900 rounded-xl shadow-2xl border-t-8 border-primary">
                             <h2 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-white mb-6 text-center">
                                Secure Your FREE Booking
                            </h2>
                             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">

                                {/* Name Input */}
   
                                <div>
                                    <label htmlFor="clientName" className="flex items-center text-sm font-medium mb-1 dark:text-neutral-300">
                           
                                         <User className="h-4 w-4 mr-2 flex-shrink-0" /> Full Name
                                    </label>
                                    <Input
        
                                         id="clientName"
                                        type="text"
                            
                                         placeholder="Your Full Name"
                                        {...register("clientName")}
                                        className={errors.clientName ? 'border-destructive' : ''}
                                    />
                                    {errors.clientName && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.clientName.message?.toString()}</p>}
                    
                                 {/* Display Server-Side Validation Error (if it exists) */}
                                    {state && typeof state === 'object' && state !== null && 'errors' in state && state.errors && Array.isArray(state.errors.clientName) && <p className="text-xs sm:text-sm text-destructive mt-1">{state.errors.clientName.join(', ')}</p>}
            
                                 </div>

                                {/* Phone Input (Crucial for lead capture) */}
                                <div>
        
                                     <label htmlFor="phoneNumber" className="flex items-center text-sm font-medium mb-1 dark:text-neutral-300">
                                        <Phone className="h-4 w-4 mr-2 flex-shrink-0" /> Best Contact Number
                
                                     </label>
                                    <Input
                                        id="phoneNumber"
   
                                         type="tel"
                                        placeholder="082 555 1234"
                     
                                         {...register("phoneNumber")}
                                        className={errors.phoneNumber ? 'border-destructive' : ''}
                                    />
                                    {errors.phoneNumber && <p className="text-xs sm:text-sm text-destructive mt-1">{errors.phoneNumber.message?.toString()}</p>}
                    
                                 {/* Display Server-Side Validation Error (if it exists) */}
                                    {state && typeof state === 'object' && state !== null && 'errors' in state && state.errors && Array.isArray(state.errors.phoneNumber) && <p className="text-xs sm:text-sm text-destructive mt-1">{state.errors.phoneNumber.join(', ')}</p>}
           
                                 </div>

                                {/* Vehicle Make (Optional but highly useful for quoting) */}
                                <div>
     
                                     <label htmlFor="vehicleMake" className="flex items-center text-sm font-medium mb-1 dark:text-neutral-300">
                                        Vehicle Make &amp; Model (e.g., Ford Ranger)
                
                                     </label>
                                    <Input
                                        id="vehicleMake"
   
                                         type="text"
                                        placeholder="e.g., Toyota Corolla 2018"
                    
                                         {...register("vehicleMake")}
                                    />
                                </div>

            
                                 {/* Message Input */}
                                 <div>
                                    <label htmlFor="message" className="flex items-center text-sm font-medium mb-1 dark:text-neutral-300">
                                         Quick Note (e.g., &quot;Squeaky brakes&quot;)
                                    </label>
                     
                                 <Textarea
                                        id="message"
                                        placeholder="Any specific concerns you want us to check?"
                                        {...register("message")}
                                    />
                                </div>

                            
                                 {/* Submit Button */}
                                <SubmitButton />


                                {/* Privacy/Trust Anchor */}
                         
                                <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 mt-3">
                                    We promise: No Spam. No Obligation. Just an honest safety check from Alberton&apos;s family-run team.
                                </p>
                                {/* Display general Server-Side Validation Failure Message */}
                                {state && typeof state === 'object' && state !== null && 'message' in state && state.message === 'Validation Failed.'
                                && (
                                     <p className="text-sm text-destructive font-bold pt-2 text-center">
                                         Please correct the errors above.
            
                                     </p>
                                )}
                                {/* Display other server-side messages (e.g., unexpected error) */}
   
                                   {state && typeof state === 'object' && state !== null && 'message' in state && state.message && state.message !== 'Validation Failed.'
                                && !('errors' in state) && (
                                     <p className="text-sm text-destructive font-bold pt-2 text-center">
                                         {state.message}
            
                                     </p>
                                )}
                            </form>
               
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}