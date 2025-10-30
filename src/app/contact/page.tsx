// src/app/contact/page.tsx
"use client"; // This page must be a client component to use React Hook Form

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormState, useFormStatus } from 'react-dom';
import { createAppointment } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, User, MessageSquare, MessageSquareText } from 'lucide-react';

// --- Zod Client Schema (Used for Client-Side UX Validation) ---
const ClientSchema = z.object({
  clientName: z.string().min(3, "Please enter your name."),
  phoneNumber: z.string().min(10, "A valid 10-digit phone number is required."),
  serviceType: z.string().optional(),
  message: z.string().optional(),
});

// Define the type based on the Zod schema
type ClientFormData = z.infer<typeof ClientSchema>;

// Helper component for the submit button state (to show 'Submitting...')
function SubmitButton() {
    // Hooks into the Server Action state (pending/loading)
    const { pending } = useFormStatus();
    return (
        <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/hover text-white transition-opacity"
            disabled={pending}
        >
            {pending ? 'Submitting Request...' : 'Request Quote / Assessment'}
        </Button>
    );
}


export default function ContactPage() {
    // 1. React Hook Form setup for client-side validation and state
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ClientFormData>({ // Use the defined type
        resolver: zodResolver(ClientSchema),
    });
    // 2. Next.js Server Action State setup
    const [state, dispatch] = useFormState(createAppointment, null);

    // 3. Effect to handle server response (clear form on success, show error)
    useEffect(() => {
         // Check if state exists, has a message, isn't validation failure, and has no errors object
         if (state && typeof state === 'object' && state !== null && 'message' in state && state.message && state.message !== 'Validation Failed.' && !('errors' in state)) {
            // Success response triggers redirection via the Server Action itself (redirect('/contact/thanks'))
            reset(); // Clear the form fields
        }
    }, [state, reset]);

    // 4. Client-side submit handler (validates, then dispatches Server Action)
    const onSubmit = (data: ClientFormData) => { // Use the defined type
        // Create a FormData object for the Server Action
        const formData = new FormData();
         // Loop through the keys of the validated data and append to FormData
         Object.keys(data).forEach(key => {
            // Type assertion to ensure key is valid for ClientFormData
            const typedKey = key as keyof ClientFormData;
            const value = data[typedKey];
            // Append only if the value is not undefined or null
            if (value !== undefined && value !== null) {
              formData.append(typedKey, String(value));
            }
          });

        // Dispatch the Server Action
        dispatch(formData);
    };

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
                                {/* Direct Call Link */}
                                 <a href="tel:+27119078495" className="flex items-center text-2xl font-extrabold text-primary hover:text-primary/70 transition-colors">
                                    <Phone className="h-7 w-7 mr-3 text-primary" />
                                    +27 11 907 8495
                                </a>

                                {/* WhatsApp Link (High-Conversion) */}
                                 <a href="https://wa.me/27119078495?text=Hello%2C%20I%20need%20urgent%20help%20with%20my%20tyres." target="_blank" rel="noopener noreferrer" className="flex items-center text-2xl font-extrabold text-[#25D366] hover:text-[#128C7E] transition-colors">
                                    <MessageSquareText className="h-7 w-7 mr-3" />
                                    WhatsApp Us Now
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
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

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
                                    />
                                    {/* Display Client-Side Validation Error */}
                                     {errors.clientName && <p className="text-sm text-destructive mt-1">{errors.clientName.message?.toString()}</p>}
                                    {/* Display Server-Side Validation Error (if it exists) */}
                                    {state && typeof state === 'object' && state !== null && 'errors' in state && state.errors && 'clientName' in state.errors && state.errors.clientName && <p className="text-sm text-destructive mt-1">{state.errors.clientName.join(', ')}</p>}
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
                                    />
                                    {errors.phoneNumber && <p className="text-sm text-destructive mt-1">{errors.phoneNumber.message?.toString()}</p>}
                                     {state && typeof state === 'object' && state !== null && 'errors' in state && state.errors && 'phoneNumber' in state.errors && state.errors.phoneNumber && <p className="text-sm text-destructive mt-1">{state.errors.phoneNumber.join(', ')}</p>}
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
                                    >
                                        <option value="">I need a Free Assessment (Default)</option>
                                         <option value="Tyre Quote">Tyre Quote</option>
                                        <option value="Brake/Shock Quote">Brake/Shock Quote</option>
                                        <option value="Battery Quote">Battery Quote</option>
                                        {/* REMOVED: <option value="Minor Service">Minor Service</option> */}
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
                                    />
                                 </div>

                                {/* Submit Button with Server Action status */}
                                <SubmitButton />

                                 {/* Server-Side Validation Failure Messages (General) */}
                                {state?.message && state.message === 'Validation Failed.' && (
                                     <p className="text-sm text-destructive font-bold pt-2 text-center">
                                         Please correct the errors above.
                                     </p>
                                )}
                                {/* Other Server Messages */}
                                {state?.message && state.message !== 'Validation Failed.' && !state.errors && (
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
