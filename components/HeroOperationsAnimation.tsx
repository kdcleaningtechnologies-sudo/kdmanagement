"use client";

import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Zap,
  Activity,
  Sparkles,
  Plane,
  CheckCircle2,
  Cpu,
  Radio,
  Clock,
  Gauge,
  Droplets,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

interface DivisionTelemetry {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  badge: string;
  subtitle: string;
  primaryStat: { label: string; value: string; unit?: string };
  secondaryStat: { label: string; value: string };
  statusNote: string;
  metrics: { label: string; value: string }[];
}

const DIVISIONS: DivisionTelemetry[] = [
  {
    id: "housekeeping",
    name: "Autonomous & Mechanized Housekeeping",
    shortName: "Housekeeping",
    icon: Sparkles,
    badge: "HYGIENE OPS ACTIVE",
    subtitle: "Taski ride-on scrubbers & pure RO custodial cycles",
    primaryStat: { label: "Hygiene Compliance Index", value: "99.8", unit: "%" },
    secondaryStat: { label: "Floor Coverage Rate", value: "4,500 m²/hr" },
    statusNote: "Continuous QR patrol loops across all common & corporate floors",
    metrics: [
      { label: "Machinery", value: "Taski Ride-on & Walk-behind Scrubbers" },
      { label: "Water System", value: "3-Stage Pure RO Water (<10 TDS)" },
      { label: "Audit Protocol", value: "Hourly Digital QR Checkpoints" },
    ],
  },
  {
    id: "mep",
    name: "24/7 Technical MEP & HVAC Grid",
    shortName: "MEP & HVAC",
    icon: Zap,
    badge: "BMS TELEMETRY ONLINE",
    subtitle: "Predictive chiller, DG sets, HT/LT panels & lift telemetry",
    primaryStat: { label: "Avg Incident SLA Dispatch", value: "14.2", unit: "min" },
    secondaryStat: { label: "Grid Health Status", value: "100% Normal" },
    statusNote: "Real-time electrical load balancing and temperature stability",
    metrics: [
      { label: "Chiller Temperature", value: "21.4°C Supply / 7.2 Bar" },
      { label: "3-Phase Power Load", value: "415V Balanced (PF 0.98)" },
      { label: "Engineers Deployed", value: "BEE / ITI Certified Technicians" },
    ],
  },
  {
    id: "security",
    name: "Smart Security & Access Telemetry",
    shortName: "Security",
    icon: ShieldCheck,
    badge: "PERIMETER SECURE",
    subtitle: "100% police-verified guard patrols & biometric gate control",
    primaryStat: { label: "Police Verification Rate", value: "100", unit: "%" },
    secondaryStat: { label: "Patrol Frequency", value: "Every 30 Mins" },
    statusNote: "PASARA Act 2005 compliant with RFID biometric perimeter gates",
    metrics: [
      { label: "Personnel Audit", value: "100% Police & Background Verified" },
      { label: "Statutory Law", value: "100% EPFO, ESIC & Minimum Wage" },
      { label: "Incident Rate", value: "Zero Breaches Across Managed Sites" },
    ],
  },
  {
    id: "drones",
    name: "Autonomous Façade Drone Washing",
    shortName: "Drone Fleet",
    icon: Plane,
    badge: "AERIAL FLEET STANDBY",
    subtitle: "Pure RO high-pressure spray with zero cradle fall hazard",
    primaryStat: { label: "Human Fall Risk Reduction", value: "100", unit: "%" },
    secondaryStat: { label: "Speed vs Cradle", value: "5x Faster" },
    statusNote: "Autonomous glass curtain cleaning up to 30 floors in high winds",
    metrics: [
      { label: "Elevation Range", value: "Ground to 120m / 35+ Floors" },
      { label: "Cleaning Agent", value: "Zero Chemicals • 100% Pure RO" },
      { label: "Safety Compliance", value: "DGCA Certified Remote Pilots" },
    ],
  },
];

export default function HeroOperationsAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const active = DIVISIONS[activeIndex];

  // 5-second rotation timer with smooth progress
  useEffect(() => {
    if (isPaused) return;

    const interval = 50; // update progress every 50ms
    const totalDuration = 5000;
    const increment = (interval / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % DIVISIONS.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused]);

  const selectTab = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  return (
    <div
      className="relative rounded-3xl border border-navy-700/80 bg-navy-900/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl text-white overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient background glow accents */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-brandblue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-brandcyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Live Operations Control Telemetry */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-navy-800">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
          </span>
          <span className="text-[11px] font-bold tracking-wider text-emerald-400 uppercase">
            LIVE OPERATIONS TELEMETRY
          </span>
          <span className="hidden sm:inline-block text-[10px] text-navy-400 font-mono">
            • GURGAON & NCR SITES
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-300 bg-navy-950/80 px-2.5 py-1 rounded-full border border-navy-800">
          <Clock className="w-3 h-3 text-brandcyan-400" />
          <span>&lt;15m SLA GUARANTEE</span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? "Resume Auto-Play" : "Pause Auto-Play"}
            className="ml-1 text-slate-400 hover:text-white transition-colors"
          >
            {isPaused ? <Play className="w-2.5 h-2.5 text-brandcyan-400" /> : <Pause className="w-2.5 h-2.5" />}
          </button>
        </div>
      </div>

      {/* Division Navigation Tabs with Progress Bar */}
      <div className="grid grid-cols-2 gap-2 my-3">
        {DIVISIONS.map((div, idx) => {
          const isActive = idx === activeIndex;
          const Icon = div.icon;
          return (
            <button
              key={div.id}
              onClick={() => selectTab(idx)}
              className={`relative flex items-center justify-start gap-2 py-2 px-3 rounded-xl text-xs font-semibold transition-all duration-300 text-left ${
                isActive
                  ? "bg-navy-800 text-white shadow-inner border border-brandcyan-500/50"
                  : "bg-navy-950/60 text-slate-400 hover:bg-navy-800/50 hover:text-slate-200 border border-navy-800/60"
              }`}
            >
              <Icon
                className={`w-4 h-4 flex-shrink-0 transition-colors ${
                  isActive ? "text-brandcyan-400" : "text-slate-500"
                }`}
              />
              <span className="font-medium whitespace-nowrap">{div.shortName}</span>

              {/* Individual Progress Indicator */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy-700 overflow-hidden rounded-b-xl">
                  <div
                    className="h-full bg-gradient-to-r from-brandblue-500 via-brandcyan-400 to-emerald-400 transition-all duration-75"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Animated Visual Showcase Area */}
      <div className="relative aspect-[16/9.8] w-full overflow-hidden rounded-2xl bg-navy-950 border border-navy-800/90 bg-telemetry-grid flex flex-col justify-between p-4 shadow-inner">
        {/* Subtle top scan laser line */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brandcyan-400 to-transparent animate-scan-laser pointer-events-none opacity-80" />

        {/* Ambient division badge and status indicator */}
        <div className="flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brandblue-500/20 text-brandcyan-300 border border-brandcyan-500/30">
            <Radio className="w-2.5 h-2.5 text-brandcyan-400 animate-pulse" />
            {active.badge}
          </span>
          <span className="text-[10px] font-mono text-slate-400 bg-navy-900/80 px-2 py-0.5 rounded border border-navy-800">
            24/7 COMMAND DESK
          </span>
        </div>

        {/* Dynamic Division Animation Centerpiece */}
        <div className="relative my-auto py-2 z-10 flex flex-col items-center justify-center text-center">
          {/* DIVISION 1: MECHANIZED HOUSEKEEPING */}
          {active.id === "housekeeping" && (
            <div className="w-full flex flex-col items-center">
              {/* Floor Plan & Scrubber Track Graphic */}
              <div className="relative w-44 h-24 sm:w-56 sm:h-24 rounded-xl border border-dashed border-brandcyan-500/40 bg-navy-900/60 p-2 overflow-hidden flex items-center justify-center">
                {/* Moving scrubber beacon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-14 border border-brandcyan-500/30 rounded-lg relative">
                    <div className="absolute -top-2 left-1/4 flex items-center gap-1 bg-navy-950 px-1.5 py-0.5 rounded-full border border-brandcyan-400/50 text-[9px] text-brandcyan-300 font-mono">
                      <Sparkles className="w-2.5 h-2.5 text-brandcyan-400 animate-spin" />
                      Taski Swingo 2500
                    </div>
                    {/* Pulsing scrubber position */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-brandcyan-400/20 animate-ping absolute" />
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brandblue-600 to-brandcyan-400 flex items-center justify-center shadow-lg shadow-brandcyan-500/40">
                          <Droplets className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1 right-2 text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Pure RO Water Wash
                </div>
              </div>

              <div className="mt-2 text-xs font-semibold text-slate-200">
                Automated High-Gloss Scrub & Disinfection Cycle
              </div>
            </div>
          )}

          {/* DIVISION 2: TECHNICAL MEP & HVAC GRID */}
          {active.id === "mep" && (
            <div className="w-full flex flex-col items-center">
              {/* Oscilloscope Wave / Live Electrical Graph */}
              <div className="relative w-full max-w-xs h-20 bg-navy-900/80 rounded-xl border border-navy-700 p-2 overflow-hidden flex items-center justify-center">
                {/* SVG Live Telemetry Wave */}
                <svg className="w-full h-12 stroke-brandcyan-400 fill-none" viewBox="0 0 300 60">
                  <path
                    d="M 0 30 Q 30 5, 60 30 T 120 30 T 180 30 T 240 30 T 300 30"
                    strokeWidth="2.5"
                    className="opacity-90 drop-shadow-[0_0_6px_#00D2B4]"
                  />
                  <path
                    d="M 0 30 Q 40 45, 80 30 T 160 30 T 240 30 T 320 30"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="stroke-blue-400 opacity-60"
                  />
                </svg>

                <div className="absolute top-1.5 left-2.5 flex items-center gap-1.5 text-[9px] font-mono text-emerald-400">
                  <Activity className="w-2.5 h-2.5 animate-pulse" />
                  BMS Grid: Normal (415V / 50Hz)
                </div>
                <div className="absolute bottom-1.5 right-2.5 text-[9px] font-mono text-brandcyan-300">
                  Chiller: 21.4°C / 7.2 Bar
                </div>
              </div>

              <div className="mt-2 text-xs font-semibold text-slate-200">
                Continuous BMS Monitoring & Rapid Technical SLA Dispatch
              </div>
            </div>
          )}

          {/* DIVISION 3: PASARA SECURITY & ACCESS */}
          {active.id === "security" && (
            <div className="w-full flex flex-col items-center">
              {/* Radar Sweep & Biometric Blips */}
              <div className="relative w-28 h-28 rounded-full border border-brandcyan-500/40 bg-navy-900/80 flex items-center justify-center overflow-hidden">
                {/* Concentric radar circles */}
                <div className="absolute w-20 h-20 rounded-full border border-navy-700/80" />
                <div className="absolute w-12 h-12 rounded-full border border-navy-700/80" />

                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-navy-700/80" />
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-navy-700/80" />

                {/* Rotating Radar Sweep Cone */}
                <div className="absolute inset-0 animate-radar origin-center">
                  <div className="w-1/2 h-1/2 bg-gradient-to-br from-brandcyan-400/40 via-brandcyan-400/10 to-transparent rounded-tl-full" />
                </div>

                {/* Security Blips (Guards on duty) */}
                <div className="absolute top-4 left-6 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <div className="absolute bottom-5 right-7 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <div className="relative z-10 w-6 h-6 rounded-full bg-navy-950 border border-brandcyan-400/60 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-brandcyan-400" />
                </div>
              </div>

              <div className="mt-2 text-xs font-semibold text-slate-200">
                100% Police-Verified Armed & Unarmed Guard Force
              </div>
            </div>
          )}

          {/* DIVISION 4: AUTONOMOUS FAÇADE DRONES */}
          {active.id === "drones" && (
            <div className="w-full flex flex-col items-center">
              {/* Skyscraper Facade + Floating Drone */}
              <div className="relative w-48 h-24 bg-navy-900/70 rounded-xl border border-navy-700 p-2 overflow-hidden flex items-center justify-center">
                {/* Skyscraper glass pattern */}
                <div className="absolute inset-y-0 right-3 w-16 bg-navy-950/80 border-l border-navy-800 grid grid-cols-2 gap-1 p-1">
                  <div className="bg-brandcyan-500/20 rounded-sm" />
                  <div className="bg-brandblue-500/20 rounded-sm" />
                  <div className="bg-brandcyan-500/20 rounded-sm" />
                  <div className="bg-emerald-500/20 rounded-sm" />
                  <div className="bg-brandcyan-500/20 rounded-sm" />
                  <div className="bg-brandblue-500/20 rounded-sm" />
                </div>

                {/* Floating Drone with Spray Cone */}
                <div className="absolute left-6 top-1/3 animate-float-drone flex items-center">
                  <div className="relative flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-brandcyan-400/20 flex items-center justify-center border border-brandcyan-400/60 shadow-[0_0_12px_#00D2B4]">
                      <Plane className="w-4 h-4 text-brandcyan-300" />
                    </div>
                  </div>
                  {/* Pure Water Spray Jet */}
                  <div className="w-16 h-4 bg-gradient-to-r from-brandcyan-400/60 via-brandcyan-400/20 to-transparent rounded-r-full -ml-1 filter blur-[1px]" />
                </div>

                <div className="absolute bottom-1 left-2 text-[9px] font-mono text-brandcyan-300 flex items-center gap-1">
                  <Gauge className="w-2.5 h-2.5" /> Alt: 48.5m • 140 Bar
                </div>
              </div>

              <div className="mt-2 text-xs font-semibold text-slate-200">
                Pure RO High-Pressure Jet • 0 Human Scaffolding Hazard
              </div>
            </div>
          )}
        </div>

        {/* Live Bottom Stats Pod for Current Division */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-navy-800/80 z-10">
          <div className="bg-navy-900/90 rounded-lg p-2 border border-navy-800 flex items-center justify-between">
            <div className="text-left">
              <span className="text-[10px] text-slate-400 block leading-tight">
                {active.primaryStat.label}
              </span>
              <div className="flex items-baseline gap-0.5 mt-0.5">
                <span className="text-base font-extrabold text-white font-mono leading-none">
                  {active.primaryStat.value}
                </span>
                {active.primaryStat.unit && (
                  <span className="text-xs font-bold text-brandcyan-400">
                    {active.primaryStat.unit}
                  </span>
                )}
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="bg-navy-900/90 rounded-lg p-2 border border-navy-800 flex items-center justify-between">
            <div className="text-left">
              <span className="text-[10px] text-slate-400 block leading-tight">
                {active.secondaryStat.label}
              </span>
              <span className="text-xs font-bold text-brandcyan-300 font-mono mt-0.5 block">
                {active.secondaryStat.value}
              </span>
            </div>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          </div>
        </div>
      </div>

      {/* Verified Operations Specs Bar (Replacing the 3 static rows with interactive live badges) */}
      <div className="p-3 sm:p-3.5 bg-navy-950/90 rounded-xl border border-navy-800 space-y-2 text-[11px] sm:text-xs mt-3">
        <div className="flex justify-between items-center text-slate-300 pb-1.5 border-b border-navy-900 gap-2">
          <div className="flex items-center gap-1.5 text-slate-400 flex-shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>Workforce:</span>
          </div>
          <span className="font-bold text-white text-right truncate sm:text-clip">
            Uniformed, Police-Verified, EPFO/ESIC
          </span>
        </div>

        <div className="flex justify-between items-center text-slate-300 pb-1.5 border-b border-navy-900 gap-2">
          <div className="flex items-center gap-1.5 text-slate-400 flex-shrink-0">
            <Cpu className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0" />
            <span>Active Fleet:</span>
          </div>
          <span className="font-bold text-white text-right truncate sm:text-clip">
            Taski Scrubbers, Pure Water RO, Drones
          </span>
        </div>

        <div className="flex justify-between items-center text-slate-300 gap-2">
          <div className="flex items-center gap-1.5 text-slate-400 flex-shrink-0">
            <Activity className="w-3.5 h-3.5 text-brandblue-400 flex-shrink-0" />
            <span>Contract Terms:</span>
          </div>
          <span className="font-bold text-brandcyan-400 flex items-center gap-1 text-right">
            Monthly / Annual Retainers
            <ChevronRight className="w-3 h-3 text-brandcyan-400" />
          </span>
        </div>
      </div>
    </div>
  );
}
