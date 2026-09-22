import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Building2,
  Sparkles,
  Home,
  Plane,
  Wrench,
  ArrowRight,
  Droplets,
  QrCode,
  MapPin,
  LayoutDashboard,
  Check,
  Calendar,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { ClientsShowcase } from "@/components/ClientsShowcase";

// 7 Service Cards matching attachment
const SERVICES_CARDS = [
  {
    id: "integrated-facility-management",
    title: "Integrated Facility Management",
    href: "/facility-management",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    alt: "Modern commercial glass corporate tower for integrated facility management",
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    href: "/services/cleaning",
    icon: Sparkles,
    image: "/images/operations-hero.jpg",
    alt: "Mechanized ride-on floor scrubber commercial cleaning operations",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    href: "/services/cleaning#corporate-housekeeping",
    icon: Home,
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=600&q=80",
    alt: "Hospitality and corporate housekeeping professional cleaning desk",
  },
  {
    id: "security",
    title: "Security",
    href: "/services/security",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
    alt: "Uniformed security guard standing on duty for commercial perimeter safety",
  },
  {
    id: "high-rise-cleaning",
    title: "High-Rise Cleaning",
    href: "/services/specialised#facade-cleaning",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    alt: "Skyscraper glass curtain wall high-rise facade cleaning technician",
  },
  {
    id: "drone-cleaning",
    title: "Drone Cleaning",
    href: "/technology",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
    alt: "Autonomous façade drone cleaning commercial building exterior",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    href: "/services/technical",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
    alt: "MEP electrical engineering maintenance technician with helmet inspecting panel",
  },
];

// 7 Industry Cards matching attachment
const INDUSTRY_CARDS = [
  {
    id: "corporate",
    title: "Corporate",
    href: "/industries#corporate-offices",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    alt: "Corporate offices and IT parks",
  },
  {
    id: "residential",
    title: "Residential / RWA",
    href: "/industries#residential-societies",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    alt: "Residential gated societies and condominium towers",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    href: "/industries#hospitals-healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    alt: "Hospitals and healthcare clinical infrastructure",
  },
  {
    id: "industrial",
    title: "Industrial",
    href: "/industries#manufacturing-industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    alt: "Manufacturing plants and industrial logistics warehouses",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    href: "/industries#hospitality-hotels",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    alt: "Luxury hotels, banquets, and hospitality clubs",
  },
  {
    id: "retail",
    title: "Retail",
    href: "/industries#retail-malls",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=600&q=80",
    alt: "Retail shopping malls and flagship showrooms",
  },
  {
    id: "education",
    title: "Education",
    href: "/industries#educational-campuses",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    alt: "Educational institutions, universities, and schools",
  },
];

// 5 Technology Feature Cards matching attachment
const TECHNOLOGY_FEATURES = [
  {
    id: "drones",
    title: "Cleaning Drones",
    desc: "High-rise & difficult access areas with zero cradle fall hazard",
    icon: Plane,
  },
  {
    id: "water-fed",
    title: "Water-fed Systems",
    desc: "Streak-free glass & façade cleaning using 100% pure RO water",
    icon: Droplets,
  },
  {
    id: "inspections",
    title: "Digital Inspections",
    desc: "QR-based & mobile reporting with real-time incident logging",
    icon: QrCode,
  },
  {
    id: "workforce",
    title: "Workforce Monitoring",
    desc: "Attendance, biometric verification & GPS field patrol tracking",
    icon: ShieldCheck,
  },
  {
    id: "dashboard",
    title: "Client Dashboard",
    desc: "Real-time SLA reports, audit logs & instant service visibility",
    icon: LayoutDashboard,
  },
];

// 3 Case Studies matching attachment
const CASE_STUDIES = [
  {
    id: "corporate-office",
    title: "Corporate Office",
    category: "Commercial",
    location: "Gurgaon",
    scope: "Integrated Housekeeping & Cleaning",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    href: "/projects#corporate",
  },
  {
    id: "residential-society",
    title: "Residential Society",
    category: "Residential",
    location: "Gurgaon",
    scope: "RWA Facility Management",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    href: "/projects#residential",
  },
  {
    id: "hospital",
    title: "Hospital",
    category: "Healthcare",
    location: "Gurgaon",
    scope: "Housekeeping + GDA + Security",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=600&q=80",
    href: "/projects#healthcare",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd />

      {/* 1. HERO SECTION MATCHING ATTACHMENT */}
      <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
        {/* Subtle background ambient glow and grid */}
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-telemetry-grid pointer-events-none opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Breadcrumb Tags matching attachment */}
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-brandcyan-400 uppercase">
                <span>FACILITY MANAGEMENT</span>
                <span className="text-slate-600">|</span>
                <span>CLEANING</span>
                <span className="text-slate-600">|</span>
                <span>SECURITY</span>
                <span className="text-slate-600">|</span>
                <span>MAINTENANCE</span>
              </div>

              {/* Main H1 Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Technology-Driven{" "}
                <span className="text-gradient-brand">Facility Management</span>{" "}
                for Modern India
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                KD Facilities Management Services provides integrated facility management, housekeeping, cleaning, security and technical maintenance solutions for commercial, residential, industrial and institutional properties across Gurgaon and Delhi NCR.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="#site-survey"
                  className="px-6 py-3 rounded-xl btn-brand-primary text-xs sm:text-sm font-bold shadow-lg shadow-brandblue-500/25 hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  <span>Request a Free Site Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#services"
                  className="px-6 py-3 rounded-xl border border-slate-700 bg-navy-900/80 hover:bg-navy-800 text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right Hero Visual: Composite Architecture + Drone + Operations Crew matching attachment */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-navy-700/80 bg-navy-900/90 shadow-2xl backdrop-blur-md group">
                {/* Hero Composite Image */}
                <div className="relative aspect-[16/11] w-full bg-navy-950 overflow-hidden">
                  <Image
                    src="/images/kd-hero-staff.png"
                    alt="KD Facilities Management Services operations team with tablet, housekeeping cart, and security officer at modern corporate campus"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-[78%_center] transform group-hover:scale-105 transition-transform duration-1000 opacity-95 group-hover:opacity-100"
                  />
                  {/* Subtle gradient overlay at bottom for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                  {/* Hovering Drone Graphic Overlay */}
                  <div className="absolute top-4 right-6 animate-float-drone flex items-center gap-2 bg-navy-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-brandcyan-500/40 shadow-lg">
                    <Plane className="w-3.5 h-3.5 text-brandcyan-400" />
                    <span className="text-[10px] font-mono text-brandcyan-300 font-bold">Façade Drone Active</span>
                  </div>

                  {/* Facility Crew Silhouette / Badge at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-navy-900/90 backdrop-blur-md border border-navy-700/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brandblue-600 to-brandcyan-400 flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">
                          Supervised On-Site Teams
                        </p>
                        <p className="text-[10px] text-slate-400 font-mono">
                          100% Police-Verified & Uniformed
                        </p>
                      </div>
                    </div>

                    {/* Floating pill matching attachment */}
                    <div className="text-right hidden sm:block">
                      <span className="text-[10px] text-brandcyan-400 font-semibold tracking-wide block">
                        Cleaner Spaces • Safer Spaces
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono">
                        Better Living
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FLOATING 4-PILLAR OPERATIONS BAR MATCHING ATTACHMENT */}
      <section className="relative -mt-8 sm:-mt-12 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Pillar 1: People */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-200/60 flex items-center justify-center flex-shrink-0 text-brandblue-600">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">People</h4>
                <p className="text-xs text-slate-500 leading-snug">
                  Trained & supervised workforce
                </p>
              </div>
            </div>

            {/* Pillar 2: Process */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-200/60 flex items-center justify-center flex-shrink-0 text-brandcyan-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">Process</h4>
                <p className="text-xs text-slate-500 leading-snug">
                  Standardised SOP-driven operations
                </p>
              </div>
            </div>

            {/* Pillar 3: Technology */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-200/60 flex items-center justify-center flex-shrink-0 text-brandblue-600">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">Technology</h4>
                <p className="text-xs text-slate-500 leading-snug">
                  Digital monitoring & modern equipment
                </p>
              </div>
            </div>

            {/* Pillar 4: Performance */}
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-200/60 flex items-center justify-center flex-shrink-0 text-emerald-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">Performance</h4>
                <p className="text-xs text-slate-500 leading-snug">
                  Measurable service delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT SHOWCASE: OZONE PHARMA, AVISA HOSPITAL, SARVODAYA HOSPITAL, TRANSCOMM, ESSENTIA */}
      <ClientsShowcase theme="light" />

      {/* 3. OUR SERVICES SECTION MATCHING ATTACHMENT */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brandblue-600">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Comprehensive Facility Management Solutions
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-xl">
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                From housekeeping and cleaning to security, maintenance and technology-enabled operations, we provide end-to-end facility management services under one trusted partner.
              </p>
              <Link
                href="/services"
                className="text-xs font-bold text-brandblue-600 hover:text-brandblue-700 inline-flex items-center gap-1 whitespace-nowrap transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 7 Services Grid matching attachment */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 pt-10">
            {SERVICES_CARDS.map((srv) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={srv.id}
                  href={srv.href}
                  className="group bg-white rounded-2xl border border-slate-200/90 p-3 hover:border-brandcyan-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top: Icon + Title + Arrow */}
                  <div>
                    <div className="flex items-center justify-between pb-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-brandblue-50 flex items-center justify-center text-slate-700 group-hover:text-brandblue-600 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-brandcyan-500 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="text-xs font-bold text-navy-950 group-hover:text-brandblue-600 transition-colors line-clamp-2 leading-snug mb-3">
                      {srv.title}
                    </h3>
                  </div>

                  {/* Thumbnail Image */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src={srv.image}
                      alt={srv.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SECTION MATCHING ATTACHMENT */}
      <section id="industries" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brandblue-600">
                INDUSTRIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Serving Diverse Industries
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl pt-1">
                We understand the <strong className="text-slate-700">unique requirements</strong> of every industry. Our tailored solutions ensure safety, hygiene and operational efficiency across all sectors.
              </p>
            </div>
            <Link
              href="/industries"
              className="text-xs font-bold text-brandblue-600 hover:text-brandblue-700 inline-flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 7 Industry Cards matching attachment */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 pt-4">
            {INDUSTRY_CARDS.map((ind) => (
              <Link
                key={ind.id}
                href={ind.href}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brandcyan-400 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Photo */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Name Strip */}
                <div className="p-3 flex items-center justify-between text-xs font-bold text-navy-950 group-hover:text-brandblue-600 transition-colors">
                  <span className="truncate">{ind.title}</span>
                  <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-brandcyan-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR TECHNOLOGY SECTION MATCHING ATTACHMENT */}
      <section id="technology" className="py-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-telemetry-grid opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Headline & Overview */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brandcyan-400">
                OUR TECHNOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Smarter Tools. Greater Control. Better Outcomes.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                We leverage modern technology and advanced equipment to deliver efficient, transparent and high-quality facility management services.
              </p>
              <div className="pt-2">
                <Link
                  href="/technology"
                  className="px-5 py-2.5 rounded-xl btn-brand-primary text-xs font-bold inline-flex items-center gap-2 shadow-lg shadow-brandblue-500/25 hover:shadow-xl transition-all"
                >
                  <span>Explore Our Technology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 5 Feature Cards matching attachment */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {TECHNOLOGY_FEATURES.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.id}
                    className="rounded-2xl bg-navy-900/90 border border-navy-700/80 p-3.5 flex flex-col justify-between hover:border-brandcyan-400/80 hover:bg-navy-800/80 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center text-brandcyan-400 group-hover:text-white group-hover:bg-gradient-to-tr group-hover:from-brandblue-600 group-hover:to-brandcyan-400 transition-all mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                        {tech.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY KD FACILITIES MANAGEMENT SERVICES MATCHING ATTACHMENT */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Heading & Learn More */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brandblue-600">
                WHY KD FACILITIES MANAGEMENT SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight leading-tight">
                Your Trusted FM Partner in Delhi NCR
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We combine trained people, proven processes and advanced technology to deliver safe, clean and well-managed environments — every day across Gurgaon, Delhi, Noida, Greater Noida, Faridabad, and IMT Manesar.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="text-xs font-bold text-brandblue-600 hover:text-brandblue-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Center Column: High-Rise Image & Verified Checklist */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="Modern commercial corporate facility campus managed by KD Facilities Management Services"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>

              {/* 5-point Checklist matching attachment */}
              <div className="space-y-3">
                {[
                  "Experienced & Trained Teams",
                  "SOP-Driven Operations",
                  "Advanced Equipment & Technology",
                  "Safety & Compliance Focus",
                  "Dedicated Account Management",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-navy-900">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 4 Stat Blocks (2x2) matching attachment */}
            <div className="lg:col-span-3 grid grid-cols-2 gap-3">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <p className="text-2xl font-extrabold text-navy-950 font-mono">24/7</p>
                <p className="text-[11px] text-slate-500 font-medium">Facility Support</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <p className="text-2xl font-extrabold text-brandblue-600 font-mono">9+</p>
                <p className="text-[11px] text-slate-500 font-medium">Integrated Solutions</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <p className="text-2xl font-extrabold text-navy-950 font-mono">100%</p>
                <p className="text-[11px] text-slate-500 font-medium">SOP Driven Operations</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <p className="text-lg sm:text-xl font-extrabold text-brandcyan-600 font-mono">Delhi NCR</p>
                <p className="text-[10px] text-slate-500 font-medium leading-tight">Gurgaon, Delhi, Noida, Faridabad, Manesar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES SECTION MATCHING ATTACHMENT */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brandblue-600">
                CASE STUDIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Real Projects. Measurable Results.
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl pt-1">
                Explore how we&apos;ve helped businesses, communities and institutions maintain cleaner, safer and more efficient environments.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-xs font-bold text-brandblue-600 hover:text-brandblue-700 inline-flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Case Study Cards matching attachment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-5 flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-navy-950">
                      {cs.title}
                    </h3>
                    <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-600">
                      {cs.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <MapPin className="w-3 h-3 text-brandcyan-500" />
                      <span>{cs.location}</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium">
                      {cs.scope}
                    </p>
                    <Link
                      href={cs.href}
                      className="text-xs font-bold text-brandblue-600 hover:text-brandblue-700 inline-flex items-center gap-1 pt-2"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="96px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BOTTOM ACTION BANNER MATCHING ATTACHMENT */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center text-brandcyan-400 flex-shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Let&apos;s Build a Cleaner, Safer and More Efficient Facility Together
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Request a free site survey and get a customised facility management solution for your property.
                </p>
              </div>
            </div>

            <Link
              href="#site-survey"
              className="px-6 py-3 rounded-xl btn-brand-primary text-xs sm:text-sm font-bold shadow-lg shadow-brandblue-500/25 hover:shadow-xl transition-all whitespace-nowrap inline-flex items-center gap-2 flex-shrink-0"
            >
              <span>Request a Free Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE SITE SURVEY / LEAD CAPTURE FORM */}
      <section id="site-survey" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brandblue-600">
              SITE ASSESSMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight mt-1">
              Schedule Your Free Facility Survey
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Our certified facility engineers conduct an on-ground audit of your housekeeping, technical MEP, and security infrastructure within 24 hours.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
