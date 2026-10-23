import type { Metadata } from "next";
import { Doto, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import { portfolio } from "~/portfolio.config";
import { ThemeProvider } from "@/components/theme-provider";
import { CalEmbed } from "@/components/CalEmbed";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: portfolio.name,
  description: portfolio.description,
  openGraph: {
    title: portfolio.name,
    description: portfolio.tagline,
    url: SITE_URL,
    siteName: portfolio.name,
    type: "website",
  },
  ...(portfolio.googleSiteVerification
    ? { verification: { google: portfolio.googleSiteVerification } }
    : {}),
  twitter: {
    card: "summary_large_image",
    title: portfolio.name,
    description: portfolio.tagline,
    site: `@${portfolio.handles.x}`,
    creator: `@${portfolio.handles.x}`,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "256x256", type: "image/png" },
      { url: "/avatar.jpg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/avatar.jpg"],
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
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${doto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col dark:bg-black dark:text-zinc-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <CalEmbed />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
