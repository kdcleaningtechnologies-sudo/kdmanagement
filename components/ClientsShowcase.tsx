import React from "react";
import { clientsData } from "@/content/clients";

interface ClientsShowcaseProps {
  className?: string;
}

export const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({ className = "" }) => {
  const marqueeItems = [...clientsData, ...clientsData];

  return (
    <section className={`relative overflow-hidden bg-navy-950 ${className}`} aria-label="Key client partners">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brandcyan-400/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brandblue-500/60 to-transparent" />

      <div className="flex items-stretch">
        <div className="relative z-10 hidden sm:flex shrink-0 items-center px-5 lg:px-8 bg-navy-950 border-r border-white/10">
          <span className="text-[10px] lg:text-xs font-extrabold uppercase tracking-[0.22em] text-brandcyan-400 whitespace-nowrap">
            Key Client Partners
          </span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-navy-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-navy-950 to-transparent z-10" />

          <div className="flex w-max animate-client-marquee">
            {marqueeItems.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex items-center px-5 sm:px-8 py-4"
                aria-hidden={index >= clientsData.length}
              >
                <span className="text-sm sm:text-base font-extrabold tracking-wide text-white whitespace-nowrap drop-shadow-[0_0_12px_rgba(0,210,180,0.25)]">
                  {client.name}
                </span>
                <span className="ml-5 sm:ml-8 h-1.5 w-1.5 rounded-full bg-brandcyan-400 shadow-[0_0_10px_rgba(0,210,180,0.9)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
