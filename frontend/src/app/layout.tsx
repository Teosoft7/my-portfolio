import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taeho's Portfolio",
  description: "Taeho's Portfolio Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative min-h-screen">
        {/* Fixed Background Image */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none"
          style={{ backgroundImage: "url('/images/space_bg.jpg')" }}
        />
        {/* Gradient Overlay for better text readability */}
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80 pointer-events-none" />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
