"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Shield,
  Sparkles,
  Wrench,
  Rocket,
  Building2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { companyInfo } from "@/content/company";
import { servicesData } from "@/content/services";
import { BrandLogo } from "@/components/BrandLogo";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menus on route change
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "soft-services":
        return <Sparkles className="w-4 h-4 text-brandgreen-600" />;
      case "security-services":
        return <Shield className="w-4 h-4 text-brandgreen-600" />;
      case "technical-services":
        return <Wrench className="w-4 h-4 text-brandgreen-600" />;
      case "specialised-services":
        return <Rocket className="w-4 h-4 text-brandgreen-600" />;
      default:
        return <Building2 className="w-4 h-4 text-brandgreen-600" />;
    }
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-white border-b border-slate-100"
      }`}
    >
      {/* Top micro-bar for corporate trust */}
      <div className="bg-navy-950 text-slate-300 text-[11px] py-1.5 px-4 hidden md:block border-b border-navy-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-brandcyan-400" />
              PASARA & EPFO/ESIC Compliant
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300 flex items-center gap-1">
              Technology Arm:{" "}
              <a
                href={companyInfo.technologyArmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brandcyan-400 font-bold underline decoration-slate-600 hover:decoration-brandcyan-400 transition-colors inline-flex items-center gap-0.5"
                title="Visit KD Cleaning Technologies"
              >
                {companyInfo.technologyArm}
                <ExternalLink className="w-2.5 h-2.5 text-brandcyan-400" />
              </a>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-brandcyan-400 font-medium">
              Flexible Monthly AMCs • No Lock-in
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-1 text-white font-medium hover:text-brandcyan-300 transition-colors"
              title="Call India Office"
            >
              <Phone className="w-3 h-3 text-brandcyan-400" />
              <span>{companyInfo.phoneIndia}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:+31621712992"
              className="flex items-center gap-1 text-slate-300 font-medium hover:text-brandcyan-300 transition-colors"
              title="Call Netherlands Office"
            >
              <Phone className="w-3 h-3 text-brandcyan-400" />
              <span>{companyInfo.phoneNetherlands}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-2">
            <BrandLogo variant="facilities" size="md" theme="light" />
          </Link>

          {/* Desktop Nav Links */}
          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/about"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/facility-management"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/facility-management"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Facility Management
            </Link>

            {/* Mega Menu Trigger: Services */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-1 transition-all ${
                  pathname.startsWith("/services")
                    ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                    : "text-navy-900 hover:text-brandblue-600"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-brandblue-600" : ""
                  }`}
                />
              </button>

              {/* Mega-Menu Panel */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 animate-fade-in"
                >
                  <div className="grid grid-cols-4 gap-6">
                    {servicesData.map((category) => (
                      <div key={category.id} className="space-y-3">
                        <Link
                          href={`/services/${category.slug}`}
                          className="flex items-center gap-2 group/cat block pb-2 border-b border-slate-100"
                        >
                          <div className="p-1 rounded-lg bg-brandblue-50/60 group-hover/cat:bg-gradient-to-r group-hover/cat:from-brandblue-500 group-hover/cat:to-brandcyan-400 group-hover/cat:text-white transition-all">
                            {getCategoryIcon(category.id)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-navy-950 group-hover/cat:text-brandblue-600 transition-colors">
                              {category.menuTitle}
                            </p>
                            <span className="text-[10px] text-slate-500">
                              {category.badge}
                            </span>
                          </div>
                        </Link>

                        <ul className="space-y-1.5">
                          {category.subServices.map((sub) => (
                            <li key={sub.id}>
                              <Link
                                href={`/services/${category.slug}#${sub.slug}`}
                                className="text-[11px] text-slate-600 hover:text-brandblue-600 block leading-snug py-0.5 transition-colors"
                              >
                                {sub.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-brandblue-50/30 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brandblue-500 to-brandcyan-400 animate-pulse" />
                      <span>Single SLA contract covering soft, security, and MEP engineering.</span>
                    </div>
                    <Link
                      href="/facility-management"
                      className="text-xs font-bold text-brandblue-600 hover:text-brandblue-700"
                    >
                      Compare IFM Packages →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/industries"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/industries"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/technology"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/technology"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Technology
            </Link>

            <Link
              href="/projects"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/projects"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Projects
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname?.startsWith("/insights")
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Insights
            </Link>

            <Link
              href="/sustainability"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/sustainability"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Sustainability
            </Link>

            <Link
              href="/careers"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/careers"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                pathname === "/contact"
                  ? "text-brandblue-600 bg-gradient-to-r from-brandblue-50 to-brandcyan-50/60 font-bold border border-brandcyan-200/50"
                  : "text-navy-900 hover:text-brandblue-600"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact#assessment-form"
              className="px-5 py-2.5 rounded-xl btn-brand-primary text-xs tracking-wide shadow-md hover:shadow-lg"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-navy-900 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-navy-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-8 space-y-3 max-h-[80vh] overflow-y-auto shadow-2xl">
          <Link
            href="/"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            About Us
          </Link>

          <Link
            href="/facility-management"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            Facility Management (Overview)
          </Link>

          {/* Mobile Services Sub-list */}
          <div className="py-2 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-500 mb-2">
              Services Portfolio:
            </p>
            <div className="space-y-1.5 pl-3">
              {servicesData.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services/${cat.slug}`}
                  className="block text-sm font-medium text-navy-900 hover:text-brandgreen-600 py-1"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/industries"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            Industries We Serve
          </Link>

          <Link
            href="/technology"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            Technology & Robotics
          </Link>

          <Link
            href="/projects"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            Projects & Case Studies
          </Link>

          <Link
            href="/insights"
            className="block py-2 text-sm font-semibold text-brandblue-600 border-b border-slate-100"
          >
            Facility Insights & Guides
          </Link>

          <Link
            href="/sustainability"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            Sustainability & ESG
          </Link>

          <Link
            href="/careers"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="block py-2 text-sm font-semibold text-navy-950 border-b border-slate-100"
          >
            Contact Us
          </Link>

          <Link
            href="/partner"
            className="block py-2 text-sm font-semibold text-brandgreen-600 border-b border-slate-100"
          >
            Partner / Broker Referral Program
          </Link>

          <div className="pt-4 space-y-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-50 text-navy-900 text-sm font-bold border border-slate-200 hover:border-brandcyan-300"
            >
              <Phone className="w-4 h-4 text-brandblue-600" />
              Call Operations: {companyInfo.displayPhone}
            </a>

            <Link
              href="/contact#assessment-form"
              className="block text-center w-full py-3 rounded-xl btn-brand-primary text-sm font-bold shadow-md"
            >
              Request Free Facility Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
