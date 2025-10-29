// src/lib/db/index.ts
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import * as schema from './schema'; 

/**
 * Exports the Drizzle PostgreSQL client instance for use in Server Components.
 * This client securely connects to the database using environment variables.
 * * NOTE: This relies on the packages 'drizzle-orm', '@vercel/postgres', and 'drizzle-kit' 
 * being correctly installed and linked by pnpm.
 */
export const db = drizzle(sql, { schema });