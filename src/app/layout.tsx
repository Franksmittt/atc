// src/app/layout.tsx
import type { Metadata } from "next";
// Keep ThemeProvider commented out
// import Header from "@/components/layout/Header"; // <-- Keep commented out
import Footer from "@/components/layout/Footer"; // <-- UNCOMMENT THIS LINE
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
        {/* <Header /> */} {/* <-- Keep commented out */}
        <main className="min-h-screen">
            {children}
        </main>
        <Footer /> {/* <-- UNCOMMENT THIS LINE */}
      </body>
    </html>
  )
}