import type { Metadata } from "next";
import React from "react";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Careers & Facility Jobs in Gurgaon & Delhi NCR | KD Facilities Management Services",
  description:
    "Explore facility management job openings: Senior Facility Operations Managers, HVAC technicians, housekeeping supervisors, and corporate sales across Gurugram, Delhi, and Noida.",
  alternates: {
    canonical: "https://www.kdfmservices.com/careers",
  },
  keywords: [
    "Facility Management Jobs Gurgaon",
    "Housekeeping Supervisor Jobs Gurugram",
    "HVAC Technician Vacancies Noida",
    "Facility Operations Manager Jobs",
    "KD Facilities Management Services Careers",
  ],
  openGraph: {
    title: "Careers & Facility Jobs in Gurgaon & Delhi NCR | KD Facilities Management Services",
    description: "Join India's leading facility management team. 100% on-time wages, PF, ESIC, and certified leadership growth paths.",
    url: "https://www.kdfmservices.com/careers",
    type: "website",
    locale: "en_IN",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
}
