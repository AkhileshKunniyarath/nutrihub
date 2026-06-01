import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { RootFrame } from "@/components/root-frame";
import { siteConfig } from "@/lib/site";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading"
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "NutriFab Naturals | Premium Wellness Essentials",
    template: "%s | NutriFab Naturals"
  },
  description:
    "Premium natural wellness products with clean ingredients, mindful sourcing, and a polished shopping experience.",
  keywords: [
    "NutriFab Naturals",
    "natural products",
    "wellness",
    "organic supplements",
    "healthy living"
  ],
  openGraph: {
    title: "NutriFab Naturals",
    description:
      "Natural goodness for everyday wellness with premium blends, trusted ingredients, and elegant care routines.",
    url: siteConfig.siteUrl,
    siteName: "NutriFab Naturals",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NutriFab Naturals",
    description: "Premium natural products crafted for everyday wellness."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Analytics />
        <RootFrame>{children}</RootFrame>
      </body>
    </html>
  );
}
