import React from "react";
import { Building2, HeartPulse, Factory, Radio, Sparkles, CheckCircle2 } from "lucide-react";
import { clientsData } from "@/content/clients";

interface ClientsShowcaseProps {
  theme?: "dark" | "light";
  showTitle?: boolean;
  className?: string;
}

export const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({
  theme = "light",
  showTitle = true,
  className = "",
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Healthcare":
        return <HeartPulse className="w-5 h-5 text-emerald-500" />;
      case "Pharma & Industrial":
        return <Factory className="w-5 h-5 text-brandblue-500" />;
      case "Corporate & Telecom":
        return <Radio className="w-5 h-5 text-brandcyan-500" />;
      case "Commercial & Luxury":
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      default:
        return <Building2 className="w-5 h-5 text-brandblue-500" />;
    }
  };

  const isDark = theme === "dark";

  return (
    <section
      className={`py-12 sm:py-16 ${
        isDark ? "bg-navy-950 text-white border-y border-navy-800" : "bg-white text-slate-900 border-y border-slate-200/80"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <span
              className={`text-xs font-extrabold uppercase tracking-widest ${
                isDark ? "text-brandcyan-400" : "text-brandblue-600"
              }`}
            >
              OUR ESTEEMED CLIENTELE
            </span>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? "text-white" : "text-navy-950"
              }`}
            >
              Trusted by Industry Leaders & Healthcare Giants
            </h2>
            <p
              className={`text-xs sm:text-sm ${
                isDark ? "text-slate-400" : "text-slate-600"
              } max-w-2xl mx-auto`}
            >
              Delivering specialized facility operations, clinical housekeeping, and corporate maintenance for prestigious institutions across Gurgaon and Delhi NCR.
            </p>
          </div>
        )}

        {/* 5 Prominent Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className={`group relative rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? "bg-navy-900/90 border border-navy-800 hover:border-brandcyan-500/40 hover:bg-navy-850 hover:shadow-xl hover:shadow-brandcyan-500/5"
                  : "bg-slate-50/80 border border-slate-200/90 hover:border-brandblue-500/40 hover:bg-white hover:shadow-xl hover:shadow-brandblue-500/5"
              }`}
            >
              <div className="space-y-3">
                {/* Header Icon + Category Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                      isDark
                        ? "bg-navy-800 border border-navy-700"
                        : "bg-white border border-slate-200 shadow-sm"
                    }`}
                  >
                    {getCategoryIcon(client.category)}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      client.category === "Healthcare"
                        ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                        : client.category === "Pharma & Industrial"
                        ? "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                        : client.category === "Corporate & Telecom"
                        ? "bg-cyan-500/10 text-cyan-600 border border-cyan-500/20"
                        : "bg-amber-500/10 text-amber-600 border border-amber-500/20"
                    }`}
                  >
                    {client.category.split("&")[0].trim()}
                  </span>
                </div>

                {/* Client Name */}
                <div>
                  <h3
                    className={`text-base font-extrabold tracking-tight transition-colors ${
                      isDark
                        ? "text-white group-hover:text-brandcyan-300"
                        : "text-navy-950 group-hover:text-brandblue-600"
                    }`}
                  >
                    {client.name}
                  </h3>
                  <p
                    className={`text-[11px] font-medium mt-0.5 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {client.industry}
                  </p>
                </div>

                {/* Scope of Engagement */}
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {client.scope}
                </p>
              </div>

              {/* Footer Location & Verified Tag */}
              <div
                className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] ${
                  isDark ? "border-navy-800 text-slate-400" : "border-slate-200 text-slate-500"
                }`}
              >
                <span>{client.location}</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-500">
                  <CheckCircle2 className="w-3 h-3" />
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Marquee / Trust Bar */}
        <div className="mt-8 pt-6 border-t border-dashed border-slate-200 dark:border-navy-800 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center">
          <span className={`text-xs font-semibold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            Key Client Partners:
          </span>
          {clientsData.map((c) => (
            <span
              key={c.id}
              className={`text-xs sm:text-sm font-extrabold tracking-wide ${
                isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-navy-950"
              } transition-colors`}
            >
              {c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
