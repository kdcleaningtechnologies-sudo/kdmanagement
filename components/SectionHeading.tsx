import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
}) => {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl mb-10 md:mb-14 ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3.5 border ${
            isDark
              ? "bg-gradient-to-r from-brandblue-500/20 via-brandcyan-500/15 to-transparent text-brandcyan-300 border-brandcyan-400/30 shadow-sm"
              : "bg-gradient-to-r from-brandblue-50 to-brandcyan-50 text-brandblue-700 border-brandcyan-200 shadow-sm"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brandblue-500 to-brandcyan-400 animate-pulse" />
          <span className="tracking-wide uppercase text-[11px] font-bold">{badge}</span>
        </div>
      )}

      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight font-heading ${
          isDark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-3 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-slate-300 font-light" : "text-slate-600 font-normal"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
