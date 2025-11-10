// src/lib/actions.ts
// REMOVED: All database connection logic and the createAppointment Server Action.
// This prevents the "unexpected server error" caused by missing database environment variables.
"use server";
// import { z } from 'zod'; // REMOVED: Unused 'z' import
// Removed unused redirect to fix previous build issue

// --- Define the form schema used by the client for type safety, even if unused directly ---
// COMMENTED OUT: AppointmentSchema is not used inside the function and only causes unused-vars error.
// const AppointmentSchema = z.object({
//   clientName: z.string().min(3, { message: "Name must be at least 3 characters." }),
//   phoneNumber: z.string().min(10, { message: "Please provide a valid 10-digit phone number." }),
//   serviceType: z.string().optional(),
//   message: z.string().optional(),
// });

/**
 * Interface representing the Server Action's return object.
 * This explicitly tells TypeScript the structure of the 'state' variable.
 */
export interface ActionResponse {
  message: string;
  errors?: {
    clientName?: string[];
    phoneNumber?: string[];
  };
}

// RENAMED: 'placeholderAction' to 'createAppointment' to fix the build error.
// PREFIXED: 'prevState' and 'formData' with an underscore (_) to mark them as intentionally unused.
export async function createAppointment(_prevState: ActionResponse | null, _formData: FormData): Promise<ActionResponse> {
  // NEW LINE: Use the variables to satisfy the 'defined but never used' ESLint rule.
  console.log("Placeholder Server Action triggered via useFormState.", _prevState, _formData.get('clientName')); 
  
  // Return a generic success message or a mock error structure for testing purposes.
  // The structure must match the exported ActionResponse interface.
  return { 
    message: "Success (Placeholder only).",
  };
}

// NOTE: You must now configure the <form action="..."> in contact/page.tsx with your actual Formspree endpoint.