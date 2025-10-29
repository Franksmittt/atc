// src/components/theme-provider.tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Define the internal types expected by the next-themes package for stability.
type Attribute = 'class' | 'data-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: Attribute | Attribute[] | undefined; // Corrected type
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
}

/**
 * Wrapper for next-themes provider to enable theme switching in client components.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}