import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { Nav } from "./components/Nav";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_NAME } from "./metadata";
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

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: "website",
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
      </body>
    </html>
  );
}
