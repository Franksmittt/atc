// src/app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"; // <-- UNCOMMENT THIS LINE
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

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
    // Add suppressHydrationWarning back
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* UNCOMMENT ThemeProvider wrapper */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          <main className="min-h-screen">
              {children}
          </main>
          <Footer />
        </ThemeProvider> {/* <-- UNCOMMENT THIS LINE */}
      </body>
    </html>
  )
}