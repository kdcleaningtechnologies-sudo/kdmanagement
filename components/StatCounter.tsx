import React from "react";
import { ShieldCheck, Clock, Users, Building2 } from "lucide-react";
import { statsData } from "@/content/stats";

const getStatIcon = (id: string) => {
  switch (id) {
    case "retention":
      return <Building2 className="w-5 h-5 text-brandcyan-400" />;
    case "compliance":
      return <ShieldCheck className="w-5 h-5 text-brandcyan-400" />;
    case "float":
      return <Users className="w-5 h-5 text-brandcyan-400" />;
    case "response":
      return <Clock className="w-5 h-5 text-brandcyan-400" />;
    default:
      return <ShieldCheck className="w-5 h-5 text-brandcyan-400" />;
  }
};

export const StatCounter: React.FC = () => {
  return (
    <section className="bg-hero-gradient text-white py-16 sm:py-20 border-y border-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/20 via-brandcyan-500/15 to-transparent text-brandcyan-300 border border-brandcyan-400/30 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brandblue-500 to-brandcyan-400 animate-pulse" />
            {statsData.sectionTitle}
          </span>
          <p className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
            {statsData.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {statsData.stats.map((stat) => (
            <div
              key={stat.id}
              className="p-6 rounded-2xl bg-navy-900/90 border border-navy-800 hover:border-brandcyan-400/60 shadow-lg hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getStatIcon(stat.id)}
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#00D2B4] font-heading mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-2">
                  {stat.label}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-navy-800/80 pt-6">
          <p className="text-xs text-slate-400 leading-relaxed italic">
            * {statsData.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
