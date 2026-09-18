"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, X } from "lucide-react";
import { companyInfo } from "@/content/company";

export const WhatsAppButton: React.FC = () => {
  const pathname = usePathname();
  const [showTooltip, setShowTooltip] = useState(true);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const encodedMessage = encodeURIComponent(companyInfo.whatsappMessage);
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="relative bg-white text-navy-950 px-4 py-2.5 rounded-xl shadow-2xl border border-slate-200 text-xs sm:text-sm max-w-[240px] animate-fade-in flex items-start justify-between gap-2">
          <div>
            <p className="font-semibold text-navy-900">Need Immediate Assistance?</p>
            <p className="text-slate-600 text-xs mt-0.5">Chat with our facility operations director on WhatsApp.</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 group font-medium text-sm"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline font-semibold">Talk to Operations</span>
      </a>
    </div>
  );
};
