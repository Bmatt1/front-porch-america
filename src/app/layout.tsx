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
  metadataBase: new URL("https://front-porch-america.vercel.app"),
  title: {
    default: "Front Porch America | Real Conversations with Rick White",
    template: "%s | Front Porch America",
  },
  description:
    "Real conversations from the American front porch. Join Rick White for honest discussions about faith, family, freedom, and the things that matter most to everyday Americans.",
  openGraph: {
    title: "Front Porch America | Real Conversations with Rick White",
    description:
      "Real conversations from the American front porch. Join Rick White for honest discussions about faith, family, freedom, and the things that matter most.",
    type: "website",
    siteName: "Front Porch America",
    locale: "en_US",
    images: [
      {
        url: "/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Front Porch America Podcast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Front Porch America | Rick White",
    description:
      "Real conversations from the American front porch. Faith, family, freedom.",
    images: ["/hero-bg.webp"],
  },
  keywords: [
    "podcast",
    "American podcast",
    "faith",
    "family",
    "freedom",
    "Rick White",
    "Front Porch America",
    "conservative podcast",
    "American values",
    "true crime podcast",
    "interview podcast",
    "YouTube podcast",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#0a0a0a",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PodcastSeries",
              name: "Front Porch America",
              description:
                "Real conversations from the American front porch. Join Rick White for honest discussions about faith, family, freedom, and the things that matter most.",
              url: "https://front-porch-america.vercel.app",
              author: {
                "@type": "Person",
                name: "Rick White",
              },
              image: "/logo.png",
              inLanguage: "en-US",
              genre: ["Society & Culture", "News", "True Crime"],
              webFeed:
                "https://www.youtube.com/@FRONTPORCHAMERICA-g7b",
            }),
          }}
        />
      </head>
      <body className="antialiased grain">{children}</body>
    </html>
  );
}
