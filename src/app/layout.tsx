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
  title: "Learn GameChanger | Simple training for sports parents and scorekeepers",
  description:
    "Beginner-friendly GameChanger training for sports parents, volunteer scorekeepers, and team admins. Learn setup, scoring, livestream basics, and game-day confidence.",
  keywords: [
    "Learn GameChanger",
    "GameChanger training",
    "GameChanger course",
    "sports scorekeeping help",
    "GameChanger app help",
    "team parent training",
  ],
  openGraph: {
    title: "Learn GameChanger",
    description:
      "Simple training for sports parents and scorekeepers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn GameChanger",
    description:
      "Simple training for sports parents and scorekeepers.",
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
