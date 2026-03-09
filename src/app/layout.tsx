import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
