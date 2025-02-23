import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolius",
  description: "",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${quicksand.variable} bg-background text-foreground`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
