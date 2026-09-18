"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ShieldCheck, Sparkles } from "lucide-react";

interface LeadFormProps {
  initialCity?: string;
  initialService?: string;
  headline?: string;
  subheadline?: string;
  theme?: "light" | "dark";
}

const PROPERTY_TYPES = [
  "Corporate Office / IT Park",
  "Hospital & Healthcare Facility",
  "Industrial & Manufacturing Plant",
  "Commercial Mall & Retail Center",
  "Residential Community (RWA / AOA)",
  "School & Educational Campus",
  "Hotel & Hospitality",
  "Warehouse & Logistics Hub",
  "Other Commercial Property",
];

const CITIES = [
  "Gurgaon (Gurugram)",
  "Delhi (NCR)",
  "Noida & Greater Noida",
  "Faridabad",
  "Manesar & IMT",
  "Other NCR Location",
];

const AREA_RANGES = [
  "Under 10,000 sq.ft.",
  "10,000 – 25,000 sq.ft.",
  "25,000 – 50,000 sq.ft.",
  "50,000 – 100,000 sq.ft.",
  "100,000 – 250,000 sq.ft.",
  "250,000+ sq.ft. (Campus)",
];

const SERVICE_OPTIONS = [
  "Housekeeping & Soft Services",
  "Manned Security & Access Control",
  "Technical MEP & HVAC Maintenance",
  "Autonomous Façade & Drone Cleaning",
  "Marble Polishing & Floor Restoration",
  "Commercial Pest Management (IPM)",
  "Total Integrated Facility Management (IFM)",
];

const STAFF_COUNT_OPTIONS = [
  "1 – 5 personnel",
  "6 – 15 personnel",
  "16 – 30 personnel",
  "31 – 50 personnel",
  "50+ personnel",
  "To be recommended after audit",
];

export const LeadForm: React.FC<LeadFormProps> = ({
  initialCity = "",
  initialService = "",
  headline = "Request a Free Facility Assessment",
  subheadline = "Get an audit report, custom manpower deployment plan, and transparent quote within 2 business hours.",
  theme = "light",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    propertyType: PROPERTY_TYPES[0],
    city: initialCity ? (CITIES.find(c => c.toLowerCase().includes(initialCity.toLowerCase())) || initialCity) : CITIES[0],
    approxArea: AREA_RANGES[1],
    requiredServices: initialService ? [initialService] : [SERVICE_OPTIONS[0]],
    staffRequired: STAFF_COUNT_OPTIONS[1],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successLeadId, setSuccessLeadId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.requiredServices.includes(service);
      if (exists) {
        if (prev.requiredServices.length === 1) return prev; // Keep at least one
        return {
          ...prev,
          requiredServices: prev.requiredServices.filter((s) => s !== service),
        };
      } else {
        return {
          ...prev,
          requiredServices: [...prev.requiredServices, service],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit assessment request.");
      }

      setSuccessLeadId(data.leadId || "KD-CONFIRMED");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please call us directly.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === "dark";

  if (successLeadId) {
    return (
      <div className={`p-8 md:p-12 rounded-3xl border text-center shadow-2xl transition-all ${
        isDark ? "bg-navy-900 border-navy-700 text-white" : "bg-white border-slate-200 text-navy-950"
      }`}>
        <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] via-[#0099FF] to-[#00D2B4] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brandblue-500/30">
          <CheckCircle2 className="w-9 h-9 text-white" />
        </div>
        <span className="inline-block px-3.5 py-1 bg-gradient-to-r from-brandblue-500/10 to-brandcyan-500/10 text-brandblue-600 dark:text-brandcyan-400 text-xs font-semibold rounded-full border border-brandcyan-500/20 mb-2">
          Request Confirmed #{successLeadId}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">
          Your Free Facility Audit is Scheduled
        </h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed font-normal">
          Thank you, <strong>{formData.name}</strong>. Our senior facility solutions director for{" "}
          <strong>{formData.city}</strong> will contact you within <strong>2 business hours</strong> to finalize your on-site walkthrough.
        </p>

        <div className="bg-slate-50 dark:bg-navy-800/50 p-4 rounded-2xl max-w-md mx-auto border border-slate-200 dark:border-navy-700 text-left text-xs sm:text-sm mb-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-slate-400">Property:</span>
            <span className="font-semibold text-navy-900 dark:text-white">{formData.propertyType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-slate-400">Scope:</span>
            <span className="font-semibold text-navy-900 dark:text-white truncate max-w-[200px]">
              {formData.requiredServices.join(", ")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-slate-400">Direct Contact:</span>
            <span className="font-semibold text-navy-900 dark:text-white">{formData.phone}</span>
          </div>
        </div>

        <button
          onClick={() => {
            setSuccessLeadId(null);
            setFormData({
              name: "",
              company: "",
              phone: "",
              email: "",
              propertyType: PROPERTY_TYPES[0],
              city: CITIES[0],
              approxArea: AREA_RANGES[1],
              requiredServices: [SERVICE_OPTIONS[0]],
              staffRequired: STAFF_COUNT_OPTIONS[1],
              message: "",
            });
          }}
          className="text-xs font-semibold text-brandblue-600 hover:text-brandblue-700 underline underline-offset-4"
        >
          Submit another property assessment
        </button>
      </div>
    );
  }

  const inputClasses = isDark
    ? "w-full px-4 py-3 rounded-xl border border-navy-700 bg-navy-950 text-white placeholder-slate-400 focus:outline-none focus:border-brandcyan-400 focus:ring-2 focus:ring-brandcyan-400/20 text-xs sm:text-sm transition-all"
    : "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brandblue-500 focus:ring-4 focus:ring-brandblue-500/10 text-xs sm:text-sm transition-all shadow-sm";

  const selectClasses = isDark
    ? "w-full px-4 py-3 rounded-xl border border-navy-700 bg-navy-950 text-white text-xs sm:text-sm focus:outline-none focus:border-brandcyan-400 focus:ring-2 focus:ring-brandcyan-400/20 transition-all cursor-pointer"
    : "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-slate-50 focus:bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-brandblue-500 focus:ring-4 focus:ring-brandblue-500/10 transition-all shadow-sm cursor-pointer";

  const labelClasses = isDark
    ? "block text-xs font-semibold text-slate-200 mb-1.5"
    : "block text-xs font-semibold text-slate-800 mb-1.5";

  return (
    <div
      id="assessment-form"
      className={`rounded-3xl border p-6 sm:p-8 md:p-10 shadow-2xl transition-all ${
        isDark
          ? "bg-navy-900/95 border-navy-800 text-white"
          : "bg-white border-slate-200 text-navy-950 shadow-xl shadow-slate-200/50"
      }`}
    >
      <div className="mb-6 text-left pb-4 border-b border-slate-100">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/10 to-brandcyan-500/10 text-brandblue-700 border border-brandcyan-300 mb-3 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-brandcyan-600" />
          <span>Operational Facility Assessment (Zero Obligation)</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight tracking-tight text-navy-950">
          {headline}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
          {subheadline}
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Error</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vikram Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>
              Company or Facility Name
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Tech Park, Sector 44"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Row 2: Phone & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              Direct Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 87966 82266"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClasses}
            />
          </div>

          <div>
            <label className={labelClasses}>
              Official Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="vikram@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Row 3: Property Type & City */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              Property Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className={selectClasses}
            >
              {PROPERTY_TYPES.map((pt) => (
                <option key={pt} value={pt} className="text-slate-900 bg-white">
                  {pt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClasses}>
              Location / City <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={selectClasses}
            >
              {CITIES.map((c) => (
                <option key={c} value={c} className="text-slate-900 bg-white">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 4: Approx Area & Staff Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              Approximate Built-up Area
            </label>
            <select
              value={formData.approxArea}
              onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
              className={selectClasses}
            >
              {AREA_RANGES.map((ar) => (
                <option key={ar} value={ar} className="text-slate-900 bg-white">
                  {ar}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClasses}>
              Estimated Crew Requirement
            </label>
            <select
              value={formData.staffRequired}
              onChange={(e) => setFormData({ ...formData, staffRequired: e.target.value })}
              className={selectClasses}
            >
              {STAFF_COUNT_OPTIONS.map((sc) => (
                <option key={sc} value={sc} className="text-slate-900 bg-white">
                  {sc}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 5: Required Services (Multi-select pill tags) */}
        <div>
          <label className={labelClasses}>
            Required Operational Services (Select all that apply) <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {SERVICE_OPTIONS.map((srv) => {
              const selected = formData.requiredServices.includes(srv);
              return (
                <button
                  type="button"
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border text-left flex items-center gap-2 transition-all ${
                    selected
                      ? "bg-gradient-to-r from-[#0066FF] to-[#0091FF] text-white border-transparent shadow-md shadow-brandblue-500/25 scale-[1.01]"
                      : isDark
                      ? "bg-navy-900/80 text-slate-300 border-navy-700 hover:border-brandcyan-400"
                      : "bg-slate-100/90 text-slate-700 border-slate-200 hover:bg-brandblue-50/70 hover:border-brandblue-300 hover:text-brandblue-800"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      selected ? "bg-brandcyan-300 animate-pulse" : "bg-slate-400"
                    }`}
                  />
                  <span>{srv}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className={labelClasses}>
            Operational Notes or Current Vendor Pain Points (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Need audit for 2 chiller plants, high cleaner absenteeism during morning shifts, or upcoming DG maintenance..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClasses}
          />
        </div>

        {/* Recurring contract notice */}
        <p className="text-xs text-slate-500">
          Flexible monthly, quarterly, or annual contracts across Gurugram, Delhi NCR, Noida, Faridabad, and Manesar. No long-term lock-in required.
        </p>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-2xl btn-brand-primary text-sm font-extrabold flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:cursor-not-allowed group shadow-xl hover:shadow-2xl shadow-brandblue-500/25"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing Assessment Request...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Request Free Site Assessment</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
