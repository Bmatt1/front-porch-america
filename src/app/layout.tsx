import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Front Porch America | Rickk White",
  description: "Real conversations from the American front porch. Join Rickk White for honest discussions about faith, family, freedom, and the things that matter most.",
  openGraph: {
    title: "Front Porch America | Rickk White",
    description: "Real conversations from the American front porch",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
