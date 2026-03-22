import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Nav } from "./components/Nav";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./metadata";
import "./globals.css";

const lora = localFont({
  src: [
    {
      path: "../fonts/Lora-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Lora-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-lora",
  display: "swap",
});

const akkuratMono = localFont({
  src: [
    {
      path: "../fonts/Akkurat-Mono.otf",
      style: "normal",
    },
  ],
  variable: "--font-akkurat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    template: "%s | DailyPray",
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "christian screen time app",
    "prayer app",
    "pray to unlock phone",
    "block apps christian",
    "faith based screen time",
    "screen time app for christians",
    "prayer journal app",
    "block adult content christian",
    "daily prayer app",
    "christian phone blocker",
    "opal alternative christian",
    "scripture app",
    "spiritual discipline app",
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: SITE_URL,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${akkuratMono.variable}`}>
      <body>
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
