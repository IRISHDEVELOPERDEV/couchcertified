import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TBCPL - The Best Couch Potato List",
  description: "Your ultimate streaming guide. Discover the best platforms for movies, shows, anime, manga, and live TV. The complete couch potato's companion.",
  keywords: ["streaming", "movies", "tv shows", "anime", "manga", "live tv", "netflix", "entertainment"],
  authors: [{ name: "Hellhorde" }],
  creator: "TBCPL Team",
  publisher: "TBCPL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "TBCPL - The Best Couch Potato List",
    description: "Your ultimate streaming guide for movies, shows, anime, manga, and live TV.",
    url: "https://tbcpl.lol",
    siteName: "TBCPL",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TBCPL - The Best Couch Potato List",
    description: "Your ultimate streaming guide for movies, shows, anime, manga, and live TV.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
