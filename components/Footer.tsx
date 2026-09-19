"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { companyInfo } from "@/content/company";
import { BrandLogo } from "@/components/BrandLogo";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 6-Column Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-navy-800/80">
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-block py-1">
              <BrandLogo variant="facilities" size="md" theme="dark" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Technology-driven facility management solutions across Gurgaon & Delhi NCR.
            </p>

            {/* Social Links with inline SVGs */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-brandcyan-400 hover:border-brandcyan-500/50 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-brandcyan-400 hover:border-brandcyan-500/50 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-navy-900 border border-navy-800 flex items-center justify-center text-slate-400 hover:text-brandcyan-400 hover:border-brandcyan-500/50 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/facility-management" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Facility Management
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning#corporate-housekeeping" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Housekeeping
                </Link>
              </li>
              <li>
                <Link href="/services/security" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Drone Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/specialised" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Industrial Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/technical" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Industries
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/industries#corporate-offices" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Corporate
                </Link>
              </li>
              <li>
                <Link href="/industries#residential-societies" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/industries#hospitals-healthcare" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#manufacturing-industrial" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Industrial
                </Link>
              </li>
              <li>
                <Link href="/industries#hospitality-hotels" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Hospitality
                </Link>
              </li>
              <li>
                <Link href="/industries#retail-malls" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="/industries#educational-campuses" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: NCR Service Locations matching attachment 3 */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              NCR SERVICE LOCATIONS
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/gurgaon" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Gurgaon (Gurugram)
                </Link>
              </li>
              <li>
                <Link href="/delhi" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Delhi (National Capital Region)
                </Link>
              </li>
              <li>
                <Link href="/noida" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Noida & Greater Noida
                </Link>
              </li>
              <li>
                <Link href="/faridabad" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Faridabad
                </Link>
              </li>
              <li>
                <Link href="/manesar" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Manesar & IMT
                </Link>
              </li>
            </ul>

            <div className="pt-4 mt-4 border-t border-navy-800/80">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Company
              </h5>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 5: Legal & Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Legal & Info
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about#privacy" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/about#terms" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-slate-400 hover:text-brandcyan-300 transition-colors block">
                  Channel Partner
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Contact & Offices matching attachment 2 */}
          <div className="space-y-3 lg:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Contact & Offices
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              {/* Gurgaon Office */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-[11px]">Gurgaon Office:</p>
                  <p className="text-slate-400 text-[11px] leading-tight">521, Sector 31, Gurgaon</p>
                </div>
              </div>

              {/* Netherlands Office */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white text-[11px]">Netherlands Office:</p>
                  <p className="text-slate-400 text-[10px] leading-tight">
                    Kwikstraat 3, bedrijventerrein Oostervaart, 8211 AM Lelystad
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0 mt-0.5" />
                <div className="text-[11px] leading-snug">
                  <a href="tel:+918796682266" className="hover:text-brandcyan-300 transition-colors block font-medium">
                    +91 8796682266 (India)
                  </a>
                  <a href="tel:+31621712992" className="hover:text-brandcyan-300 transition-colors block font-medium text-slate-400">
                    +31 6 21712992 (Netherlands)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-brandcyan-300 transition-colors text-[11px] truncate block"
                  title={companyInfo.email}
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* WhatsApp Link */}
              <div className="pt-1">
                <a
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-brandcyan-400 hover:text-brandcyan-300 font-semibold transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.07-1.782-.406-1.464-.608-2.404-2.099-2.477-2.198-.073-.099-.594-.792-.594-1.51 0-.718.375-1.071.508-1.216.133-.145.291-.182.387-.182s.194.007.278.013c.089.006.208-.034.325.247.121.291.412 1.006.449 1.08.037.074.062.16.012.259-.05.099-.075.16-.149.247-.075.087-.158.194-.225.26-.075.074-.153.155-.066.304.087.149.387.639.831 1.034.572.509 1.055.666 1.204.74.149.074.236.062.324-.037.087-.099.375-.436.475-.585.1-.149.199-.124.333-.075.133.049.846.399.992.472.146.074.243.111.279.172.036.062.036.357-.108.762zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.958-1.398C8.423 21.499 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                  <span>Direct WhatsApp Helpdesk ↗</span>
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact#assessment-form"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg btn-brand-primary text-xs font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {companyInfo.legalName}. All rights reserved.</p>
          <p className="text-slate-400 font-medium">
            Powered by People | Driven by Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

