import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Front Porch America | Rick White",
  description:
    "Real conversations from the American front porch. Join Rick White for honest discussions about faith, family, freedom, and the things that matter most.",
  openGraph: {
    title: "Front Porch America | Rick White",
    description: "Real conversations from the American front porch",
    type: "website",
    siteName: "Front Porch America",
  },
  twitter: {
    card: "summary_large_image",
    title: "Front Porch America | Rick White",
    description: "Real conversations from the American front porch",
  },
  keywords: [
    "podcast",
    "America",
    "faith",
    "family",
    "freedom",
    "Rick White",
    "Front Porch America",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased grain">{children}</body>
    </html>
  );
}
