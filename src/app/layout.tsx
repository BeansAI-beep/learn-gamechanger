import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GCGC | Grump City Game Changer",
  description:
    "Satirical branding, real help. Join Ashley's waitlist for a beginner-friendly mini course to help sports parents and scorekeepers learn GameChanger with less stress.",
  keywords: [
    "GCGC",
    "Grump City Game Changer",
    "GameChanger training",
    "GameChanger course",
    "sports scorekeeping help",
    "GameChanger app help",
    "team parent training",
    "Ashley GameChanger",
  ],
  openGraph: {
    title: "GCGC | Grump City Game Changer",
    description:
      "Satirical branding, real help for sports parents and scorekeepers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCGC | Grump City Game Changer",
    description:
      "Satirical branding, real help for sports parents and scorekeepers.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
