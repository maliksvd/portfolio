// next.js
import type { Metadata } from "next";

// fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// styles
import "./globals.css";

// componnents
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// seo
export const metadata: Metadata = {
  title: "Malik Krechiche",
  description: "Full-stack passionate developer with 9 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-[692px] overflow-x-hidden px-6 py-12 text-gray-1200 antialiased sm:py-32 md:overflow-x-visible md:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
