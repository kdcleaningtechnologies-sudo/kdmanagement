import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  HeartPulse,
  Hotel,
  Factory,
  ShoppingBag,
  GraduationCap,
  Home,
  Building,
  Check,
  ShieldCheck,
  AlertCircle,
  Quote,
} from "lucide-react";
import { industriesData } from "@/content/industries";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Industry Solutions | Facility Management in Gurgaon & Delhi NCR",
  description:
    "Specialized facility management solutions for Corporate Offices, Hospitals, Hotels, Industrial Plants, Malls, Schools, Residential Societies, and Commercial Buildings across Gurugram, Manesar, Noida, and Delhi NCR.",
  alternates: {
    canonical: "https://www.kdglobalfacilities.com/industries",
  },
  keywords: [
    "Corporate Cleaning Services Gurgaon",
    "Hospital Housekeeping Services Gurgaon",
    "Industrial Cleaning Services Gurgaon",
    "Residential Facility Management Gurgaon",
    "Commercial Facility Management Delhi NCR",
  ],
};

const getIndustryIcon = (iconName: string) => {
  const props = { className: "w-6 h-6 text-brandgreen-600" };
  switch (iconName) {
    case "Briefcase":
      return <Briefcase {...props} />;
    case "HeartPulse":
      return <HeartPulse {...props} />;
    case "Hotel":
      return <Hotel {...props} />;
    case "Factory":
      return <Factory {...props} />;
    case "ShoppingBag":
      return <ShoppingBag {...props} />;
    case "GraduationCap":
      return <GraduationCap {...props} />;
    case "Home":
      return <Home {...props} />;
    case "Building":
      return <Building {...props} />;
    default:
      return <Building {...props} />;
  }
};

export default function IndustriesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ];

  return (
    <div className="bg-white">
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-brandgreen-400 block mb-2">
              Industry Playbooks
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              Facility Solutions Built for the Specific Operational Realities of Your Sector
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              A sterile hospital ward requires entirely different hygiene protocols than an automotive factory or a corporate tech park. We do not use generic checklists. Every sector receives a dedicated, verified operational standard.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Jump Bar */}
      <div className="sticky top-20 z-30 bg-slate-50 border-b border-slate-300 py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto text-xs font-medium text-slate-700 no-scrollbar">
          <span className="text-slate-500 text-xs font-semibold whitespace-nowrap mr-2">
            Jump to Sector:
          </span>
          {industriesData.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.slug}`}
              className="px-3 py-1.5 bg-white border border-slate-200 hover:border-navy-900 hover:text-navy-950 transition-colors whitespace-nowrap"
            >
              {ind.name.split(" ")[0]}
            </a>
          ))}
        </div>
      </div>

      {/* Expanded Industry Sections */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              id={ind.slug}
              className="p-6 sm:p-10 bg-white border border-slate-300 scroll-mt-36"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                    {getIndustryIcon(ind.iconName)}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                      {ind.name}
                    </h2>
                    <p className="mt-1 text-sm sm:text-base text-slate-600 font-medium">
                      {ind.headline}
                    </p>
                  </div>
                </div>

                <a
                  href="#assessment-form"
                  className="px-4 py-2.5 bg-navy-900 hover:bg-navy-950 text-white text-xs font-semibold transition-colors whitespace-nowrap self-start lg:self-center"
                >
                  Book {ind.name.split(" ")[0]} Audit
                </a>
              </div>

              {/* Grid: Pain Points vs KD Solution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6 border-b border-slate-200">
                {/* Pain Points */}
                <div className="p-5 bg-red-50/40 border border-red-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-red-800">
                    <AlertCircle className="w-4 h-4" />
                    Common Pain Points We Resolve
                  </div>
                  <ul className="space-y-2">
                    {ind.painPoints.map((pain, pIdx) => (
                      <li key={pIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-red-600 font-bold">✕</span>
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* KD Solution */}
                <div className="p-5 bg-brandgreen-50/30 border border-brandgreen-300 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-brandgreen-900">
                      <ShieldCheck className="w-4 h-4 text-brandgreen-600" />
                      Operational Blueprint & Protocol
                    </div>
                    <p className="mt-2 text-xs text-slate-800 leading-relaxed font-medium">
                      {ind.kdSolution}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-brandgreen-200 flex items-center gap-2 text-xs font-semibold text-brandgreen-800">
                    <Check className="w-4 h-4 text-brandgreen-600 flex-shrink-0" />
                    <span>SLA Benchmark: {ind.slaHighlight}</span>
                  </div>
                </div>
              </div>

              {/* Recommended Services & Industry Quote */}
              <div className="pt-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <span className="text-xs font-semibold text-slate-500 block mb-2">
                    Recommended Core Service Mix:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {ind.recommendedServices.map((rec, rIdx) => (
                      <Link
                        key={rIdx}
                        href={rec.href}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-navy-900 hover:text-white text-navy-950 border border-slate-300 text-xs font-medium transition-colors"
                      >
                        {rec.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 bg-slate-50 p-4 border border-slate-200 italic text-xs text-slate-700 flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span>&ldquo;{ind.quote}&rdquo;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Lead Form */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            headline="Request an Industry-Specific Facility Assessment"
            subheadline="Select your property type and let our sector specialists craft an optimized manpower and equipment plan."
          />
        </div>
      </section>
    </div>
  );
}
