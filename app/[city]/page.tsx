import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { citiesData, CityData } from "@/content/cities";
import { servicesData } from "@/content/services";
import { companyInfo } from "@/content/company";
import { ServiceCard } from "@/components/ServiceCard";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { StatCounter } from "@/components/StatCounter";
import { JsonLd } from "@/components/JsonLd";

interface CityPageProps {
  params: {
    city: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(citiesData).map((slug) => ({
    city: slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = citiesData[params.city.toLowerCase()];
  if (!city) return {};

  const pageUrl = `https://www.kdfmservices.com/${city.slug}`;

  return {
    title: city.seoTitle,
    description: city.seoDescription,
    keywords: [city.primaryKeyword, ...city.secondaryKeywords],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: city.seoTitle,
      description: city.seoDescription,
      url: pageUrl,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default function CityLandingPage({ params }: CityPageProps) {
  const city: CityData = citiesData[params.city.toLowerCase()];

  if (!city) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(`Hello KD team, I need a facility assessment for our property in ${city.name}.`)}`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/contact" },
    { name: city.name, url: `/${city.slug}` },
  ];

  return (
    <>
      <JsonLd type="LocalBusiness" city={city.name} />
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {city.faqs && city.faqs.length > 0 && (
        <JsonLd type="FAQPage" faqs={city.faqs} />
      )}

      <div className="bg-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200/80 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-xs text-slate-600">
              <li>
                <Link href="/" className="hover:text-brandblue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li>
                <Link href="/contact" className="hover:text-brandblue-600 transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="font-semibold text-navy-950" aria-current="page">
                {city.name}
              </li>
            </ol>
          </div>
        </nav>

        {/* City Hero Banner */}
        <section className="bg-hero-gradient text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/20 to-brandcyan-500/20 text-brandcyan-300 border border-brandcyan-400/30 mb-3">
                <MapPin className="w-3.5 h-3.5 text-brandcyan-400" />
                <span>Regional Operations Hub • {city.name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {city.headline}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {city.tagline}
              </p>

              {/* Local Dispatch Badge */}
              <div className="mt-5 inline-flex items-center gap-2.5 p-3 rounded-xl bg-navy-900/90 border border-navy-800 text-xs text-slate-300 shadow-md">
                <Clock className="w-4 h-4 text-brandcyan-400 flex-shrink-0" />
                <span>
                  <strong>Field Response Guarantee:</strong> {city.dispatchTime}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#assessment-form"
                  className="px-6 py-3 rounded-xl btn-brand-primary text-xs font-bold shadow-md hover:shadow-lg transition-all"
                >
                  Book Free Site Audit in {city.name.split(" ")[0]}
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 flex items-center gap-2 transition-colors shadow-md"
                >
                  <Phone className="w-3.5 h-3.5 text-brandcyan-400" />
                  <span>Call Local Operations Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Local Key Business Hubs & Commercial Nodes */}
        <section className="py-8 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold text-navy-950 uppercase tracking-wider block mb-2">
                  Active Operational Zones in {city.name}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {city.keyHubs.map((hub, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-800 shadow-sm"
                    >
                      {hub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-300 text-xs text-slate-700 space-y-1 shadow-sm flex-shrink-0">
                <span className="text-xs font-semibold text-slate-500 block">
                  Regional Field Base:
                </span>
                <p className="font-bold text-navy-950">{city.localOffice}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Operational Overview */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold text-brandblue-600 uppercase tracking-wider">
                  Regional Facility Context
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                  Customized Operations for {city.name} Commercial Estates
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {city.localContext}
                </p>
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-2">
                    Key Client Sectors Served in {city.name}:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {city.clientTypes.map((client, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brandblue-600 flex-shrink-0" />
                        <span>{client}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-brandblue-50/80 via-white to-brandcyan-50/60 p-6 rounded-2xl border border-brandblue-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-brandblue-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-navy-950 text-sm">Local Compliance Guarantee</h4>
                    <span className="text-xs text-slate-600">State & Regional Mandates</span>
                  </div>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li>• 100% PF & ESIC statutory disbursements on 7th of every month</li>
                  <li>• Police-verified security staff under State PASARA authority</li>
                  <li>• Verified 15% float reserve for zero absenteeism downtime</li>
                  <li>• Regular chemical & equipment safety audits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services in this City */}
        <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge={`Facility Portfolio — ${city.name}`}
              title={`Integrated Facility Management Services in ${city.name}`}
              subtitle={`From hospital-grade housekeeping to 24/7 security guarding and hard MEP engineering across ${city.name}.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.map((category) => (
                <ServiceCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatCounter />

        {/* City FAQs Section (for Rich Snippets) */}
        {city.faqs && city.faqs.length > 0 && (
          <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brandblue-50 text-brandblue-700 border border-brandblue-200 mb-2">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                  Facility Management in {city.name} — FAQs
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2">
                  Common questions answered by our regional operational directors.
                </p>
              </div>

              <div className="space-y-4">
                {city.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-5 sm:p-6 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:bg-white hover:border-brandblue-300 transition-all"
                  >
                    <h3 className="text-sm sm:text-base font-bold text-navy-950 flex items-start gap-2.5">
                      <span className="text-brandblue-600 font-extrabold">Q.</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Local Lead Form */}
        <section id="assessment-form" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm
              initialCity={city.name}
              headline={`Request a Facility Assessment in ${city.name}`}
              subheadline={`Get a free on-site survey and custom manpower quotation for your property in ${city.name}.`}
            />
          </div>
        </section>
      </div>
    </>
  );
}
