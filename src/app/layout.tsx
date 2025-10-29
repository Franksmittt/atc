// src/app/layout.tsx
import type { Metadata } from "next";
// Keep ThemeProvider commented out
// import Header from "@/components/layout/Header"; // <-- Temporarily comment out
// import Footer from "@/components/layout/Footer"; // <-- Temporarily comment out
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
        {/* <Header /> */} {/* <-- Temporarily comment out */}
        <main className="min-h-screen">
            {children}
        </main>
        {/* <Footer /> */} {/* <-- Temporarily comment out */}
      </body>
    </html>
  )
}