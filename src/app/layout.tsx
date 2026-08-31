import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/StarfieldBackground";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Akanksha Thakur | AI & ML Engineer Portfolio",
  description: "Personal portfolio of Akanksha Thakur, an aspiring AI and ML Engineer. Showcasing projects, skills, and professional journey.",
  keywords: ["Akanksha Thakur", "AI Engineer", "ML Engineer", "Portfolio", "Web Development", "Python", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} font-outfit bg-background text-foreground antialiased`}>
        <CustomCursor />
        <StarfieldBackground />
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
