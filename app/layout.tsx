import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
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
  metadataBase: new URL("https://kdfmservices.com"),
  title: {
    default: "Facility Management Company in Gurgaon | KD Facilities Management Services",
    template: "%s | KD Facilities Management Services",
  },
  description:
    "Leading Integrated Facility Management (IFM) company in Gurgaon, Delhi, Noida, Greater Noida, Faridabad, and IMT Manesar. Commercial housekeeping, 24/7 PASARA security, HVAC/MEP technical maintenance, and autonomous drone façade cleaning.",
  alternates: {
    canonical: "https://kdfmservices.com",
  },
  keywords: [
    "Facility Management Company in Gurgaon",
    "Facility Management Services in Gurugram",
    "Integrated Facility Management Company",
    "Housekeeping Services Gurugram",
    "Security Services NCR",
    "Facility Management Company Delhi NCR",
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
    url: "https://kdfmservices.com",
    siteName: companyInfo.name,
    title: "KD Facilities Management Services — Integrated Facility Management & Smarter Operations",
    description:
      "Single-point IFM partner in Delhi NCR for corporate offices, hospitals, industrial plants, and commercial campuses. Flexible AMCs with zero lock-in.",
    images: [
      {
        url: "/images/kd-hero-staff.png",
        width: 1200,
        height: 630,
        alt: "KD Facilities Management Services Corporate Facility Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KD Facilities Management Services — Integrated Facility Management",
    description: "Smarter operations, verified workforce, 24/7 security, and mechanized facility management across Delhi NCR.",
    images: ["/images/kd-hero-staff.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
        <GoogleAnalytics />
        <div id="top" />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

