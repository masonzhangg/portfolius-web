"use client";

import { Inter, Quicksand } from "next/font/google";
import Script from "next/script";
import { useEffect, useState } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isAllowedDomain, setIsAllowedDomain] = useState(false);
  
  useEffect(() => {

    const hostname = window.location.hostname;
    setIsAllowedDomain(
      hostname === "portfolius.co" || 
      hostname === "www.portfolius.co" ||
      hostname === "https://portfolius.co" ||
      hostname === "https://www.portfolius.co"
    );
  }, []);

  return (
    <html lang="en">
      <head>
        {GA_MEASUREMENT_ID && isAllowedDomain && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${inter.variable} ${quicksand.variable} bg-background text-foreground`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}