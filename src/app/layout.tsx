import type { Metadata } from "next";
import "./globals.css";
import RootLayout from "./components/root-layout";

export const metadata: Metadata = {
  title: 'Portfolius',
  description: 'Simulate. Trade. Connect. Experience the market with friends.',
  openGraph: {
    title: 'Portfolius',
    description: 'Simulate. Trade. Connect. Experience the market with friends.',
    url: 'https://portfolius.co',
    siteName: 'Portfolius',
    images: [
      {
        url: 'https://portfolius.co/portfolius.png',
        width: 1200,
        height: 630,
        alt: 'Portfolius',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolius',
    description: 'Simulate. Trade. Connect. Experience the market with friends.',
    images: ['https://portfolius.co/portfolius.png'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
