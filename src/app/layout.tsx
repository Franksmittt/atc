// src/app/layout.tsx
import type { Metadata } from "next";
// Keep ThemeProvider commented out
import Header from "@/components/layout/Header"; // <-- UNCOMMENT THIS LINE
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
    <html lang="en">
      <body>
        <Header /> {/* <-- UNCOMMENT THIS LINE */}
        <main className="min-h-screen">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}