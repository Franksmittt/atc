// src/lib/db/schema.ts
import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

/**
 * Defines the database table for storing client appointment requests.
 */
export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  clientName: varchar('client_name', { length: 256 }).notNull(),
  serviceType: varchar('service_type', { length: 256 }),
  phoneNumber: varchar('phone_number', { length: 256 }).notNull(),
  preferredDate: timestamp('preferred_date'),
  createdAt: timestamp('created_at').defaultNow(),
});