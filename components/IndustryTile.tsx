import React from "react";
import Link from "next/link";
import {
  Briefcase,
  HeartPulse,
  Hotel,
  Factory,
  ShoppingBag,
  GraduationCap,
  Home,
  Building,
} from "lucide-react";
import { Industry } from "@/content/industries";

interface IndustryTileProps {
  industry: Industry;
}

const getIndustryIcon = (iconName: string) => {
  const props = { className: "w-5 h-5 text-brandblue-600" };
  switch (iconName) {
    case "Briefcase":
      return <Briefcase {...props} />;
    case "HeartPulse":
      return <HeartPulse {...props} />;
    case "Hotel":
      return <Hotel {...props} />;
    case "Factory":
      return <Factory {...props} />;
    case "ShoppingBag":
      return <ShoppingBag {...props} />;
    case "GraduationCap":
      return <GraduationCap {...props} />;
    case "Home":
      return <Home {...props} />;
    case "Building":
      return <Building {...props} />;
    default:
      return <Building {...props} />;
  }
};

export const IndustryTile: React.FC<IndustryTileProps> = ({ industry }) => {
  return (
    <Link
      href={`/industries#${industry.slug}`}
      className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-brandcyan-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between block group"
    >
      <div>
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-100 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-brandblue-500/10 transition-all">
          {getIndustryIcon(industry.iconName)}
        </div>

        <h3 className="text-lg font-bold font-heading text-navy-950 mb-1.5 group-hover:text-brandblue-600 transition-colors">
          {industry.name}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal">
          {industry.shortProblem}
        </p>
      </div>

      <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-brandblue-600 flex items-center justify-between group-hover:text-brandblue-700">
        <span>View Operational Protocol</span>
        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brandblue-500 to-brandcyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  );
};
