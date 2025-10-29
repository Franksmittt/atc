// src/app/layout.tsx
import type { Metadata } from "next";
// import { ThemeProvider } from "@/components/theme-provider"; // <-- Temporarily comment out
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
    // Temporarily removed suppressHydrationWarning as it's for ThemeProvider
    <html lang="en">
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        > */} {/* <-- Temporarily comment out wrapper */}
          <Header />
          <main className="min-h-screen">
              {children}
          </main>
          <Footer />
        {/* </ThemeProvider> */} {/* <-- Temporarily comment out wrapper */}
      </body>
    </html>
  )
}