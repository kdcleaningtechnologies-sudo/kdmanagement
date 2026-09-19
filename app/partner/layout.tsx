import type { Metadata } from "next";
import React from "react";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Broker & Channel Partner Program | KD Facilities Management Services",
  description:
    "Partner with KD Facilities Management Services: Earn recurring monthly referral commissions on corporate Annual Maintenance Contracts (AMCs) across Gurgaon, Delhi NCR, and Noida.",
  alternates: {
    canonical: "https://www.kdfmservices.com/partner",
  },
  keywords: [
    "Facility Management Referral Partner",
    "Commercial Real Estate Broker Partnership Gurgaon",
    "Property Consultant AMC Referral Commission",
    "Corporate Channel Partner Program NCR",
  ],
  openGraph: {
    title: "Commercial Broker & Channel Partner Program | KD Facilities Management Services",
    description: "Monetize your commercial client relationships with predictable recurring revenue on corporate facility contracts.",
    url: "https://www.kdfmservices.com/partner",
    type: "website",
    locale: "en_IN",
  },
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Channel Partner Program", url: "/partner" },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
}
