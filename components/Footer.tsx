"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { companyInfo } from "@/content/company";
import { servicesData } from "@/content/services";
import { industriesData } from "@/content/industries";
import { citiesData } from "@/content/cities";
import { BrandLogo } from "@/components/BrandLogo";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800/80">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block py-1">
              <BrandLogo variant="facilities" size="md" theme="dark" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Single-point integrated facility management (IFM) partner in Delhi NCR. Combining trained manpower, engineering MEP upkeep, and mechanized robotics through our technology division,{" "}
              <a
                href={companyInfo.technologyArmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brandgreen-400 font-semibold underline decoration-slate-600 hover:decoration-brandgreen-400 transition-colors inline-flex items-center gap-1"
                title="Visit KD Cleaning Technologies"
              >
                {companyInfo.technologyArm}
                <ExternalLink className="w-3 h-3 text-brandgreen-400 inline" />
              </a>.
            </p>

            {/* Quick contact list matching official business profile */}
            <div className="space-y-2.5 pt-2 text-xs">
              {/* Gurgaon Office */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandcyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-white block">Gurgaon Office:</strong>
                  {companyInfo.address.street}, {companyInfo.address.city}
                </span>
              </div>

              {/* Netherlands Office */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brandcyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  <strong className="text-white block">Netherlands Office:</strong>
                  {companyInfo.netherlandsAddress.street}, {companyInfo.netherlandsAddress.pincode} {companyInfo.netherlandsAddress.city}
                </span>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brandcyan-400 flex-shrink-0" />
                <div className="flex flex-wrap items-center gap-2">
                  <a href={`tel:${companyInfo.phone}`} className="text-slate-200 hover:text-brandcyan-300 transition-colors">
                    {companyInfo.phoneIndia}
                  </a>
                  <span className="text-slate-600">|</span>
                  <a href="tel:+31621712992" className="text-slate-200 hover:text-brandcyan-300 transition-colors">
                    {companyInfo.phoneNetherlands}
                  </a>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brandcyan-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-slate-200 hover:text-brandcyan-300 transition-colors font-medium"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* WhatsApp Helpdesk */}
              <div className="flex items-center gap-2.5 pt-1">
                <MessageCircle className="w-4 h-4 text-brandcyan-400 flex-shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brandcyan-300 hover:text-brandcyan-200 font-semibold flex items-center gap-1 transition-colors"
                >
                  Direct WhatsApp Helpdesk <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-slate-400 hover:text-brandcyan-300 transition-colors block py-0.5"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/facility-management"
                  className="text-brandcyan-400 hover:text-brandcyan-300 transition-colors block font-semibold pt-1"
                >
                  IFM Overview & Retainer AMC
                </Link>
              </li>
              <li>
                <Link
                  href="/technology"
                  className="text-slate-400 hover:text-brandcyan-300 transition-colors block py-0.5"
                >
                  Autonomous Façade Drones
                </Link>
              </li>
              <li>
                <a
                  href={companyInfo.technologyArmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brandcyan-300 transition-colors flex items-center gap-1 py-0.5"
                >
                  <span>KD Cleaning Technologies</span>
                  <ExternalLink className="w-2.5 h-2.5 text-brandcyan-400" />
                </a>
              </li>
              <li>
                <Link
                  href="/services/specialised#marble-stone-crystallization"
                  className="text-slate-400 hover:text-brandcyan-300 transition-colors block py-0.5"
                >
                  Marble Floor Crystallization
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Industries Served
            </h4>
            <ul className="space-y-2 text-xs">
              {industriesData.slice(0, 6).map((ind) => (
                <li key={ind.id}>
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="text-slate-400 hover:text-brandcyan-300 transition-colors block py-0.5"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-brandcyan-400 hover:text-brandcyan-300 font-semibold transition-colors block pt-1"
                >
                  View All 8 Sectors
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Hubs & Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              NCR Service Locations
            </h4>
            <ul className="space-y-2 text-xs mb-6">
              {Object.values(citiesData).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="text-slate-400 hover:text-brandcyan-300 transition-colors block py-0.5"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Corporate Programs
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/insights" className="text-brandcyan-300 hover:text-white font-medium">
                  Facility Insights & Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-brandcyan-400 hover:underline">
                  Broker & Partner Referral (Earn AMC Commission)
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-slate-400 hover:text-white">
                  Corporate ESG & BRSR Disclosures
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white">
                  Careers & Ground Hiring
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Empanelment & Statutory Compliance Bar */}
        <div className="py-6 border-b border-navy-800/80 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-5 h-5 text-brandcyan-400 flex-shrink-0" />
            <span className="font-semibold text-white">
              Enterprise Vendor Empanelment Ready:
            </span>
            <span className="text-slate-400 hidden md:inline">
              100% Tax Compliant (GST), EPFO & ESIC on-time remittances, PASARA security, and ₹5 Cr public liability protection.
            </span>
          </div>
          <Link
            href="/about#compliance"
            className="text-brandcyan-400 hover:text-brandcyan-300 font-medium"
          >
            Download Compliance Dossier →
          </Link>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {companyInfo.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-slate-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-300">
              Site Assessment
            </Link>
            <Link href="/facility-management" className="hover:text-slate-300">
              AMC Retainers
            </Link>
            <Link href="/admin/login" className="hover:text-brandcyan-400 text-slate-500 transition-colors">
              Admin Portal
            </Link>
            <a href="#top" className="text-brandcyan-400 hover:underline">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
