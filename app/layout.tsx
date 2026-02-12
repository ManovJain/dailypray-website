import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nav } from "./components/Nav";
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
  title: "DailyPray — Daily Prayer & Devotion",
  description:
    "A gentle daily companion for prayer, scripture, and spiritual reflection.",
  openGraph: {
    title: "DailyPray — Daily Prayer & Devotion",
    description:
      "A gentle daily companion for prayer, scripture, and spiritual reflection.",
    siteName: "DailyPray",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyPray — Daily Prayer & Devotion",
    description:
      "A gentle daily companion for prayer, scripture, and spiritual reflection.",
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
      </body>
    </html>
  );
}
