import React from "react";

interface BrandLogoProps {
  variant?: "cleaning" | "facilities" | "icon-only" | "full-cleaning";
  theme?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "facilities",
  theme = "auto",
  size = "md",
  className = "",
  showTagline = true,
}) => {
  // Height & scale classes based on size
  const iconSizes = {
    sm: "h-9 w-auto",
    md: "h-11 w-auto",
    lg: "h-14 w-auto",
    xl: "h-18 w-auto",
  };

  const textSizes = {
    sm: {
      primary: "text-sm",
      secondary: "text-[11px]",
      tagline: "text-[8px] tracking-[0.18em]",
    },
    md: {
      primary: "text-base sm:text-lg",
      secondary: "text-xs sm:text-sm",
      tagline: "text-[9px] sm:text-[10px] tracking-[0.2em]",
    },
    lg: {
      primary: "text-xl sm:text-2xl",
      secondary: "text-base sm:text-lg",
      tagline: "text-xs tracking-[0.22em]",
    },
    xl: {
      primary: "text-2xl sm:text-3xl",
      secondary: "text-lg sm:text-xl",
      tagline: "text-xs sm:text-sm tracking-[0.24em]",
    },
  };

  const currentTextSize = textSizes[size];

  // Colors based on theme
  const isDark = theme === "dark";
  const secondaryColorClass = isDark ? "text-slate-100" : "text-slate-900";

  // Vector KD Monogram with Gradient Swoosh & Sparkle Star
  const Monogram = (
    <svg
      viewBox="0 0 160 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizes[size]} flex-shrink-0 drop-shadow-sm`}
    >
      <defs>
        {/* Main KD Letter Gradient */}
        <linearGradient id="kdBlueTealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0066FF" />
          <stop offset="45%" stopColor="#0091FF" />
          <stop offset="75%" stopColor="#00C2FF" />
          <stop offset="100%" stopColor="#00D2B4" />
        </linearGradient>

        {/* Swoosh Gradient */}
        <linearGradient id="kdSwooshGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0052D4" />
          <stop offset="40%" stopColor="#0099FF" />
          <stop offset="80%" stopColor="#00D2B4" />
          <stop offset="100%" stopColor="#00F2C8" />
        </linearGradient>

        {/* Sparkle Star Gradient */}
        <linearGradient id="kdSparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D2B4" />
          <stop offset="100%" stopColor="#0099FF" />
        </linearGradient>
      </defs>

      {/* Sparkle Star atop D */}
      <path
        d="M 125 8 Q 125 18 135 18 Q 125 18 125 28 Q 125 18 115 18 Q 125 18 125 8 Z"
        fill="url(#kdSparkleGradient)"
      />

      {/* Letter 'K' */}
      <path
        d="M 12 28 H 32 V 62 L 60 28 H 84 L 46 72 L 86 118 H 61 L 32 82 V 118 H 12 Z"
        fill="url(#kdBlueTealGradient)"
      />

      {/* Letter 'D' */}
      <path
        d="M 74 28 H 108 C 132 28 148 44 148 73 C 148 102 132 118 108 118 H 74 Z M 94 48 V 98 H 107 C 121 98 128 89 128 73 C 128 57 121 48 107 48 Z"
        fill="url(#kdBlueTealGradient)"
      />

      {/* Dynamic Curved Swoosh Arc */}
      <path
        d="M 8 98 C 18 114 42 124 74 116 C 104 108 130 86 146 54 C 132 74 104 96 74 98 C 42 100 20 86 8 98 Z"
        fill="url(#kdSwooshGradient)"
      />
    </svg>
  );

  if (variant === "icon-only") {
    return <div className={`inline-flex items-center ${className}`}>{Monogram}</div>;
  }

  // Variant: CLEANING TECHNOLOGIES (Matching exact user uploaded image)
  if (variant === "cleaning" || variant === "full-cleaning") {
    return (
      <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className} select-none`}>
        {Monogram}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5 leading-none font-heading font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D2B4] bg-clip-text text-transparent uppercase">
              CLEANING
            </span>
            <span className={`${secondaryColorClass} uppercase font-bold tracking-wider ${currentTextSize.secondary}`}>
              TECHNOLOGIES
            </span>
          </div>

          {/* Gradient Underline Bar */}
          <div className="h-[2px] w-full bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#00D2B4] my-1 rounded-full opacity-90" />

          {showTagline && (
            <span className={`font-semibold uppercase text-[#00A3FF] ${currentTextSize.tagline} font-sans leading-none`}>
              SMART SOLUTIONS <span className="text-[#00D2B4]">|</span> SPARKLING RESULTS
            </span>
          )}
        </div>
      </div>
    );
  }

  // Variant: FACILITIES (Main corporate IFM brand matching KD Facilities Management Services)
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className} select-none`}>
      {Monogram}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none font-heading font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D2B4] bg-clip-text text-transparent uppercase">
            KD
          </span>
          <span className={`${secondaryColorClass} uppercase font-bold tracking-wider ${currentTextSize.secondary}`}>
            FACILITIES
          </span>
        </div>

        {/* Gradient Underline Bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#00D2B4] my-1 rounded-full opacity-90" />

        {showTagline && (
          <span className={`font-semibold uppercase text-[#00A3FF] ${currentTextSize.tagline} font-sans leading-none`}>
            MANAGEMENT SERVICES
          </span>
        )}
      </div>
    </div>
  );
};
