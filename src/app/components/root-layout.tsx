"use client";

import Analytics from "./analytics";
import { Quicksand, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quicksand.variable} bg-background text-foreground`}
        suppressHydrationWarning={true}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
