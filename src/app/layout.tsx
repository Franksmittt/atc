// src/app/layout.tsx
import type { Metadata } from "next";
// Assuming you have a default font imported or generated here:
// import { Inter } from "next/font/google"; 
import "./globals.css";

// --- Imports for Global Structure and Theming ---
import { ThemeProvider } from "@/components/theme-provider" 
import Header from "@/components/layout/Header"; 
import Footer from "@/components/layout/Footer"; 


export const metadata: Metadata = {
  title: "Alberton Tyre Clinic - Your Tyre Experts",
  description: "Tyre sales, fitment, and service in Alberton.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 1. Root HTML tag with suppressHydrationWarning for theme switching
    <html lang="en" suppressHydrationWarning> 
      <body>
        {/* 2. Theme Provider wraps everything, enabling Dark Mode context */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system" 
          enableSystem
        >
          <Header /> 
          {/* 3. Main content area */}
          <main className="min-h-screen">
              {children}
          </main>
          <Footer /> {/* 4. Footer at the very bottom */}
        </ThemeProvider>
      </body>
    </html>
  )
}