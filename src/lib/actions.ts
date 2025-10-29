// src/lib/actions.ts
"use server";

import { db } from '@/lib/db/index';
import { appointments } from '@/lib/db/schema';
// Removed unused 'eq' and 'revalidatePath' imports
import { redirect } from 'next/navigation';
import { z } from 'zod';

// --- 1. Define Form Schema using Zod for Validation ---
const AppointmentSchema = z.object({
  clientName: z.string().min(3, { message: "Name must be at least 3 characters." }),
  phoneNumber: z.string().min(10, { message: "Please provide a valid 10-digit phone number." }),
  serviceType: z.string().optional(),
  message: z.string().optional(),
});

// Define a type for the potential state returned by the action
type FormState = {
    message: string;
    errors?: {
        clientName?: string[];
        phoneNumber?: string[];
        serviceType?: string[];
        message?: string[];
    };
} | null;


// --- 2. The Core Server Action Function ---
// Use the specific 'FormState' type for prevState instead of 'any' or 'unknown'
export async function createAppointment(prevState: FormState, formData: FormData): Promise<FormState> {
  // Extract data from FormData object
  const rawData = {
    clientName: formData.get('clientName'),
    phoneNumber: formData.get('phoneNumber'),
    // Default to 'General Inquiry' if serviceType is missing or empty
    serviceType: formData.get('serviceType') || 'General Inquiry',
    message: formData.get('message'),
  };

  // 3. Validate against Zod Schema
  const validatedFields = AppointmentSchema.safeParse(rawData);
  // If validation fails, return an error object matching FormState
  if (!validatedFields.success) {
    return {
      message: 'Validation Failed.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // If validation succeeds, attempt database insertion
  try {
    // 4. Database Write (Drizzle ORM)
    await db.insert(appointments).values({
      clientName: validatedFields.data.clientName,
      phoneNumber: validatedFields.data.phoneNumber,
      serviceType: validatedFields.data.serviceType ?? 'General Inquiry', // Use validated data, ensure fallback
      // message: validatedFields.data.message // Uncomment if you add 'message' to your db schema
    });
    // 5. Success Handling
    // Optional: Revalidate paths if needed
    // revalidatePath('/');

    // Redirect to a confirmation page on success
    redirect('/contact/thanks');

    // Technically unreachable due to redirect, but satisfies return type if redirect were conditional
    // return { message: 'Appointment created successfully!' };

  } catch (error) {
    console.error("Database or Server Error:", error);
    // Return a generic server error message matching FormState
    return {
      message: 'An unexpected server error occurred. Please try again later.',
    };
  }
}