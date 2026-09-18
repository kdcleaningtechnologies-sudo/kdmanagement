import React from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";
import { packagesData } from "@/content/packages";

export const TierComparisonTable: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {packagesData.tiers.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
              tier.isPopular
                ? "bg-gradient-to-b from-brandblue-50/70 via-white to-brandcyan-50/30 text-navy-950 border-2 border-brandblue-500 shadow-xl shadow-brandblue-500/15 hover:shadow-2xl hover:border-brandblue-600 hover:-translate-y-1.5"
                : "bg-white text-navy-950 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-brandblue-300"
            }`}
          >
            {tier.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full btn-brand-primary text-xs font-extrabold uppercase tracking-wide shadow-md flex items-center gap-1.5 text-white">
                <Zap className="w-3.5 h-3.5 fill-current text-white" />
                <span>Most Popular Choice</span>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-4 pt-2">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    tier.isPopular
                      ? "bg-brandblue-100/80 text-brandblue-700 border border-brandblue-300/60"
                      : "bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  {tier.contractType}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-2 text-navy-950">
                {tier.name}
              </h3>

              <p className="text-xs sm:text-sm mb-5 leading-relaxed text-slate-600">
                {tier.summary}
              </p>

              <div
                className={`p-3.5 rounded-xl text-xs mb-6 border ${
                  tier.isPopular
                    ? "bg-white/90 border-brandblue-200/80 text-slate-800 shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                <span
                  className={`font-semibold block mb-0.5 text-xs ${
                    tier.isPopular ? "text-brandblue-700" : "text-slate-500"
                  }`}
                >
                  Target Facility Scale:
                </span>
                {tier.targetFacility}
              </div>

              {/* Included Services */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4
                    className={`text-xs font-bold mb-3 ${
                      tier.isPopular ? "text-brandblue-700" : "text-navy-950"
                    }`}
                  >
                    Services Included:
                  </h4>
                  <ul className="space-y-2">
                    {tier.includedServices.map((srv, i) => (
                      <li key={i} className="text-xs sm:text-sm flex items-start gap-2">
                        <Check className="w-4 h-4 text-brandblue-600 flex-shrink-0 mt-0.5" />
                        <span className={tier.isPopular ? "text-slate-800 font-medium" : "text-slate-700"}>
                          {srv}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.techFeatures.length > 0 && (
                  <div className="pt-3 border-t border-slate-200/70">
                    <h4 className="text-xs font-bold mb-2.5 text-brandblue-700">
                      Technology Features:
                    </h4>
                    <ul className="space-y-1.5">
                      {tier.techFeatures.map((tf, i) => (
                        <li key={i} className="text-xs flex items-start gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-brandblue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 font-normal">
                            {tf}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-200/70">
              {tier.slaGuarantees.length > 0 && (
                <div
                  className={`text-xs text-center font-bold py-1.5 px-3 rounded-lg border ${
                    tier.isPopular
                      ? "text-brandblue-700 bg-brandblue-50 border-brandblue-200/80"
                      : "text-slate-600 bg-slate-100/80 border-slate-200/80"
                  }`}
                >
                  SLA: {tier.slaGuarantees[0]}
                </div>
              )}

              <a
                href="#assessment-form"
                className={`block w-full py-3 px-4 text-center rounded-xl font-bold text-xs transition-all shadow-md ${
                  tier.isPopular
                    ? "btn-brand-primary shadow-brandblue-500/20 hover:shadow-lg"
                    : "bg-slate-900 hover:bg-brandblue-600 text-white"
                }`}
              >
                Request Proposal for {tier.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
