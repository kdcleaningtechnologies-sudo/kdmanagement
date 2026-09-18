import React from "react";
import { Check, ShieldCheck } from "lucide-react";
import { processData } from "@/content/process";

export const ProcessStep: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 5-step operational pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {processData.steps.map((step) => (
          <div
            key={step.stepNumber}
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-lg hover:border-brandcyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-2xl font-extrabold font-heading text-slate-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brandblue-600 group-hover:to-brandcyan-500 transition-all">
                  {step.stepNumber}
                </span>
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-brandblue-500 to-brandcyan-400 opacity-60" />
              </div>

              <h3 className="text-base font-bold font-heading text-navy-950 mb-1 group-hover:text-brandblue-600 transition-colors">
                {step.title}
              </h3>

              <p className="text-xs text-brandblue-600 font-semibold mb-2">
                {step.tagline}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
                {step.description}
              </p>
            </div>

            <div className="border-t border-slate-100 pt-3">
              <span className="text-xs font-semibold text-navy-900 block mb-2">
                Deliverables:
              </span>
              <ul className="space-y-1.5">
                {step.deliverables.map((item, i) => (
                  <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Recurring Contract Framing Note */}
      <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-brandblue-50/90 via-white to-brandcyan-50/70 border border-brandblue-200/80 text-navy-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-500/10 to-brandcyan-500/15 border border-brandblue-200/70 flex items-center justify-center flex-shrink-0 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-brandblue-600" />
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-navy-950 font-bold">Retainer Commitment:</strong> {processData.recurringNote}
          </p>
        </div>
        <a
          href="#assessment-form"
          className="px-5 py-2.5 rounded-xl btn-brand-primary text-xs font-bold whitespace-nowrap shadow-md hover:shadow-lg transition-all"
        >
          Book On-Site Walkthrough
        </a>
      </div>
    </div>
  );
};
