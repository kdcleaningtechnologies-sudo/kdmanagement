import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  Cpu,
  Sparkles,
  Building2,
  Check,
  Wrench,
  Shield,
  Rocket,
  Clock,
  ArrowUpRight,
  ExternalLink,
  BookOpen,
  HelpCircle,
} from "lucide-react";
import { companyInfo } from "@/content/company";
import { servicesData } from "@/content/services";
import { industriesData } from "@/content/industries";
import { whyUsData } from "@/content/whyUs";
import { technologyData } from "@/content/technology";
import { insightsArticles } from "@/content/insights";
import { IndustryTile } from "@/components/IndustryTile";
import { StatCounter } from "@/components/StatCounter";
import { ProcessStep } from "@/components/ProcessStep";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeading } from "@/components/SectionHeading";
import { TierComparisonTable } from "@/components/TierComparisonTable";
import { JsonLd } from "@/components/JsonLd";
import { BrandLogo } from "@/components/BrandLogo";

export default function HomePage() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  const getServiceDivisionIcon = (id: string) => {
    switch (id) {
      case "soft-services":
        return <Sparkles className="w-5 h-5 text-brandgreen-600" />;
      case "security-services":
        return <Shield className="w-5 h-5 text-brandgreen-600" />;
      case "technical-services":
        return <Wrench className="w-5 h-5 text-brandgreen-600" />;
      case "specialised-services":
        return <Rocket className="w-5 h-5 text-brandgreen-600" />;
      default:
        return <Building2 className="w-5 h-5 text-brandgreen-600" />;
    }
  };

  const homepageFaqs = [
    {
      question: "What areas in Delhi NCR does KD Global Facilities cover?",
      answer: "We deploy operational crews across Gurugram (Cyber City, Golf Course Road, Udyog Vihar, Sohna Road), New Delhi (Aerocity, Connaught Place, Okhla), Noida & Greater Noida (Sector 62, Expressway), Faridabad, and IMT Manesar."
    },
    {
      question: "What services are included under your Integrated Facility Management (IFM) model?",
      answer: "Our single-SLA IFM framework encompasses corporate housekeeping, mechanized deep scrubbing, 24/7 PASARA-certified security guarding, electro-mechanical (MEP) maintenance (HVAC, DG, substations, STP/WTP), autonomous drone façade washing, and commercial pest control."
    },
    {
      question: "How do you guarantee 100% statutory labor welfare compliance?",
      answer: "We provide principal employers with certified bank disbursement records, month-wise EPFO/ESIC challans, and GST compliance returns on the 7th of every month, eliminating all co-employer liabilities."
    },
    {
      question: "Can we request a site assessment without any contract commitment?",
      answer: "Yes, our engineering leadership conducts a 100% free, zero-obligation on-site audit to inspect current vendor pain points, audit MEP health, and propose a transparent square-footage manpower plan."
    }
  ];

  return (
    <>
      <JsonLd type="LocalBusiness" city="Gurgaon" />
      <JsonLd type="FAQPage" faqs={homepageFaqs} />

      {/* 1. HERO SECTION */}
      <section className="relative bg-hero-gradient text-white py-16 lg:py-24 border-b border-navy-800 overflow-hidden">
        {/* Ambient Glow Wash */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/20 via-brandcyan-500/15 to-transparent text-brandcyan-300 border border-brandcyan-400/30 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brandblue-500 to-brandcyan-400 animate-pulse" />
                <span>Integrated Facility Partner • Gurugram & Delhi NCR</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight text-white">
                Integrated Facility Management.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#00D2B4]">
                  Smarter Operations.
                </span>
              </h1>

              {/* Sub-headline with concrete regional & operational specifics */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
                {companyInfo.heroSubheadline}
              </p>

              <div className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800/90 text-xs sm:text-sm text-slate-300 max-w-xl backdrop-blur-sm shadow-inner">
                <span className="font-bold text-white block mb-0.5">Operational Coverage Nodes:</span> Gurugram, Delhi, Noida, Greater Noida, Faridabad, and IMT Manesar. Dedicated supervisory teams with a guaranteed 15% float reserve.
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#assessment-form"
                  className="px-7 py-4 rounded-xl btn-brand-primary text-xs sm:text-sm text-center transition-all shadow-lg hover:shadow-xl shadow-brandblue-500/25 group flex items-center justify-center gap-2"
                >
                  <span>Request a Free Site Assessment</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs sm:text-sm text-center border border-slate-700/80 hover:border-brandcyan-400/50 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brandcyan-400" />
                  <span>Talk to Our Facility Team</span>
                </a>
              </div>

              {/* Specific Operational Facts */}
              <div className="pt-6 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brandcyan-400 flex-shrink-0" />
                  <span>100% EPFO & ESIC on-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-brandcyan-400 flex-shrink-0" />
                  <span>QR custodial audit loop</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brandcyan-400 flex-shrink-0" />
                  <span>15-min emergency response</span>
                </div>
              </div>
            </div>

            {/* Right Hero: Operational Photo Card */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-navy-700/80 bg-navy-900/90 p-3 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-navy-950">
                  <Image
                    src="/images/operations-hero.jpg"
                    alt="KD Global Facilities crew operating mechanized floor scrubber and technical switchgear panel"
                    fill
                    priority
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-4 bg-navy-950/90 rounded-xl border border-navy-800 space-y-2 text-xs mt-3">
                  <div className="flex justify-between items-center text-slate-300 pb-1.5 border-b border-navy-900">
                    <span className="text-slate-400">Deployed Workforce:</span>
                    <span className="font-bold text-white">Uniformed, Police-Verified, Trained</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300 pb-1.5 border-b border-navy-900">
                    <span className="text-slate-400">Machinery Deployed:</span>
                    <span className="font-bold text-white">Taski Scrubbers, Pure Water RO, Drones</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Contract Format:</span>
                    <span className="font-bold text-brandcyan-400">Monthly / Annual Retainers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION — SAAS EDITORIAL DIRECTORY-STYLE LAYOUT */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Service Directory"
            title="Operational Service Divisions"
            subtitle="Explore our four operational pillars. Each service is delivered by dedicated on-site crews under certified supervisors with performance-linked SLAs."
          />

          {/* Directory-Style SaaS Layout */}
          <div className="space-y-6">
            {servicesData.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-brandcyan-400/80 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Division Info */}
                  <div className="lg:col-span-4 space-y-3 pb-4 lg:pb-0 lg:border-r border-slate-100 lg:pr-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-100 flex items-center justify-center text-brandblue-600">
                        {getServiceDivisionIcon(category.id)}
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {category.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-navy-950">
                      {category.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {category.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/services/${category.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-brandblue-600 hover:text-brandblue-700 transition-colors"
                      >
                        <span>View Full {category.menuTitle} Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-brandcyan-500" />
                      </Link>
                    </div>
                  </div>

                  {/* Sub-services Directory Table */}
                  <div className="lg:col-span-8">
                    <div className="text-xs font-semibold text-navy-900 mb-3">
                      Sub-Service Scope & Turnaround Benchmarks:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.subServices.map((sub) => (
                        <div
                          key={sub.id}
                          className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/80 text-xs space-y-1 hover:bg-white hover:border-brandgreen-300 transition-all shadow-2xl"
                        >
                          <div className="font-bold text-navy-950 flex items-start gap-1.5">
                            <Check className="w-3.5 h-3.5 text-brandgreen-600 flex-shrink-0 mt-0.5" />
                            <span>{sub.title}</span>
                          </div>
                          <p className="text-slate-600 text-[11px] leading-relaxed pl-5 font-normal">
                            {sub.shortDescription}
                          </p>
                          {sub.slaNote && (
                            <div className="text-[11px] text-brandgreen-800 font-semibold pl-5 pt-0.5">
                              SLA: {sub.slaNote}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/facility-management"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-brandgreen-700 transition-colors"
            >
              <span>Compare our integrated single-SLA framework vs multi-contractor models</span>
              <ArrowUpRight className="w-4 h-4 text-brandgreen-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Sector Focus"
            title="Operational Protocols by Property Type"
            subtitle="Tailored manpower rosters, audit documentation, and safety gear configured for your specific facility environment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesData.map((ind) => (
              <IndustryTile key={ind.id} industry={ind} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATS COUNTER LEDGER */}
      <StatCounter />

      {/* 5. WHY US / DIFFERENTIATORS */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Enterprise Clients Choose KD"
            title="Built to Solve Chronic Contractor Failures"
            subtitle="We engineered our operations to eliminate absenteeism, ghost workers, poor chemical safety, and lack of escalation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUsData.points.slice(0, 6).map((point) => (
              <div
                key={point.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-brandcyan-400 hover:-translate-y-1 transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-100 flex items-center justify-center text-brandblue-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-navy-950">
                  {point.title}
                </h3>
                <p className="text-xs text-brandblue-600 font-semibold">
                  {point.tagline}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY ARM TEASER */}
      <section className="py-16 sm:py-24 bg-navy-950 text-white border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/20 via-brandcyan-500/15 to-transparent text-brandcyan-300 border border-brandcyan-400/30">
                <Cpu className="w-3.5 h-3.5 text-brandcyan-400" />
                <span>Specialized Engineering Division</span>
              </span>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md inline-block">
                <a
                  href={companyInfo.technologyArmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block transition-transform hover:scale-[1.02]"
                  title="Visit KD Cleaning Technologies Official Website"
                >
                  <BrandLogo variant="cleaning" theme="dark" size="lg" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {technologyData.techArmDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/technology"
                  className="px-6 py-3.5 rounded-xl btn-brand-primary text-xs inline-flex items-center gap-2 transition-all shadow-lg hover:shadow-xl shadow-brandblue-500/25"
                >
                  <span>Discover Robotics & Pure-Water Fleet</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href={companyInfo.technologyArmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-brandcyan-400/40 font-semibold text-xs inline-flex items-center gap-2 transition-all"
                >
                  <span>Visit kdcleaningtechnologies.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brandcyan-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-navy-800 bg-navy-900/90 p-6 space-y-4 shadow-2xl backdrop-blur-md">
                <h3 className="text-lg font-bold font-heading text-white border-b border-navy-800 pb-3">
                  Hardware Capabilities
                </h3>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                    <strong className="text-white block">Autonomous Façade Drones:</strong> High-pressure pure water washing up to 120 meters.
                  </div>
                  <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                    <strong className="text-white block">Water-Fed Pole Systems:</strong> Deionized 000 PPM water cleaning up to 65 ft.
                  </div>
                  <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800">
                    <strong className="text-white block">QR Custodial Loop:</strong> Real-time restroom and security check-ins with client portal.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW WE WORK (01-05 STEP-BY-STEP PROCESS) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Standardized Onboarding"
            title="5-Step Transition & Operational Workflow"
            subtitle="From initial site audit to post-deployment 90-day SLA review."
          />

          <ProcessStep />
        </div>
      </section>

      {/* 8. TIER COMPARISON */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flexible Contracting"
            title="Integrated Facility Packages"
            subtitle="Choose soft-only housekeeping or complete IFM with 24/7 manned security and hard MEP engineering."
          />

          <TierComparisonTable />
        </div>
      </section>

      {/* 9. KNOWLEDGE & B2B INSIGHTS (SEO INTERNAL LINKING) */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Operational Knowledge"
            title="Facility Management Insights & Compliance Guides"
            subtitle="Actionable intelligence on single-vendor consolidation, statutory labor compliance, and hygiene benchmarks for corporate leaders."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsArticles.slice(0, 3).map((art) => (
              <div
                key={art.slug}
                className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brandblue-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="px-2.5 py-0.5 rounded-full bg-brandblue-50 text-brandblue-700 font-semibold border border-brandblue-100">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-heading text-navy-950 group-hover:text-brandblue-600 transition-colors line-clamp-2">
                    <Link href={`/insights/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">By {art.author}</span>
                  <Link
                    href={`/insights/${art.slug}`}
                    className="text-xs font-bold text-brandblue-600 group-hover:text-brandcyan-600 flex items-center gap-1 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs border border-slate-300 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-brandblue-600" />
              <span>Explore All Facility Insights & Checklists</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (FAQPAGE SCHEMA) */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brandblue-50 text-brandblue-700 border border-brandblue-200 mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
              Enterprise Facility Management — FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Answers to common operational, compliance, and billing questions for corporate clients.
            </p>
          </div>

          <div className="space-y-4">
            {homepageFaqs.map((faq, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-2 hover:border-brandblue-300 transition-all"
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

      {/* 11. LEAD FORM INTAKE */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            headline="Request a Free Facility Assessment"
            subheadline="Let our engineering team audit your site and craft a tailored manpower and equipment plan."
          />
        </div>
      </section>
    </>
  );
}
