import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { companyInfo } from "@/content/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kdglobalfacilities.com"),
  title: {
    default: "Facility Management Company in Gurgaon | KD Global Facilities",
    template: "%s | KD Global Facilities",
  },
  description:
    "Leading Integrated Facility Management (IFM) company in Gurgaon and Delhi NCR. Commercial housekeeping, 24/7 PASARA security, HVAC/MEP technical maintenance, and autonomous drone façade cleaning.",
  alternates: {
    canonical: "https://www.kdglobalfacilities.com",
  },
  keywords: [
    "Facility Management Company in Gurgaon",
    "Facility Management Services in Gurugram",
    "Integrated Facility Management Company",
    "Housekeeping Services Gurugram",
    "Security Services NCR",
    "Facility Management Company India",
    "Corporate Housekeeping Services",
    "Technical Facility Services",
    "Corporate Cleaning Services Gurgaon",
    "Hospital Housekeeping Services Gurgaon",
    "Industrial Cleaning Services Gurgaon",
    "Commercial Cleaning Company Gurgaon",
    "PASARA Security Guard Agency Gurgaon",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.legalName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.kdglobalfacilities.com",
    siteName: companyInfo.name,
    title: "KD Global Facilities — Integrated Facility Management & Smarter Operations",
    description:
      "Single-point IFM partner in Delhi NCR for corporate offices, hospitals, industrial plants, and commercial campuses. Flexible AMCs with zero lock-in.",
    images: [
      {
        url: "/images/hero-placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "KD Global Facilities Corporate Facility Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KD Global Facilities — Integrated Facility Management",
    description: "Smarter operations, verified workforce, 24/7 security, and mechanized facility management.",
    images: ["/images/hero-placeholder.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col`}
      >
        <div id="top" />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

