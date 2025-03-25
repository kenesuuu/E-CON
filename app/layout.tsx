import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "../app/styles/globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// Load Inter font with Latin subset and variable font support
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optional: improves loading performance
  variable: '--font-inter', // Optional: enables CSS variable usage
});

export const metadata: Metadata = {
  title: "ECON Dashboard",
  description: "A smart dashboard for sustainability tracking.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}> {/* Apply font variable */}
      <body className="flex h-screen bg-gray-50 font-sans"> {/* Default to sans-serif fallback */}
        {/* Sidebar (Fixed Left) */}
        <Sidebar />

        {/* Main Layout Container */}
        <div className="flex flex-col flex-1">
          {/* Fixed Header */}
          <Header />

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
