import React from "react";
import Link from "next/link";
import { Sparkles, Shield, Wrench, Rocket, Check, ShieldCheck } from "lucide-react";
import { ServiceCategory } from "@/content/services";

interface ServiceCardProps {
  category: ServiceCategory;
}

const getCategoryIcon = (id: string) => {
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
      return <Sparkles className="w-5 h-5 text-brandgreen-600" />;
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-brandgreen-400/80 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-4 mb-5 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-50 to-emerald-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
              {getCategoryIcon(category.id)}
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {category.badge}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold font-heading text-navy-950 mb-2 group-hover:text-brandgreen-700 transition-colors">
          {category.title}
        </h3>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
          {category.description}
        </p>

        <div className="border-t border-slate-100 pt-4 mb-6">
          <p className="text-xs font-semibold text-navy-900 mb-2.5">
            Core operational scope:
          </p>
          <ul className="space-y-2">
            {category.subServices.slice(0, 4).map((sub) => (
              <li key={sub.id} className="text-xs text-slate-700 flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-brandgreen-600 flex-shrink-0 mt-0.5" />
                <span className="font-medium">{sub.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-1.5 text-[11px] text-brandgreen-800 font-semibold bg-brandgreen-50/60 p-2.5 rounded-xl border border-brandgreen-200/60">
          <ShieldCheck className="w-3.5 h-3.5 text-brandgreen-600 flex-shrink-0" />
          <span>SLA: 100% Shift Uptime & Monthly Challans</span>
        </div>

        <Link
          href={`/services/${category.slug}`}
          className="block w-full py-3 px-4 text-center rounded-xl bg-navy-950 hover:bg-brandgreen-500 text-white hover:text-navy-950 font-bold text-xs transition-all shadow-md group-hover:shadow-lg"
        >
          View {category.menuTitle} Scope
        </Link>
      </div>
    </div>
  );
};
