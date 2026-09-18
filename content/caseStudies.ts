export interface CaseStudy {
  id: string;
  title: string;
  facilityType: string;
  location: string;
  scope: string[];
  challenge: string;
  solution: string;
  impactPreview: string[];
  isTemplateNotice: boolean;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "case-it-park-gurgaon",
    title: "Integrated Facility Transition for Grade-A Cyber Tech Park",
    facilityType: "IT/ITeS Tech Park (450,000 sq.ft.)",
    location: "Cyber City, Gurgaon",
    scope: ["Corporate Housekeeping", "BMS & Chiller Plant Management", "24/7 PASARA Security", "Autonomous Drone Façade Wash"],
    challenge: "The previous contractor suffered from 18% daily cleaner absenteeism, leading to frequent tenant escalations during morning peak hours and unresolved HVAC hot-spots.",
    solution: "Deployed KD's 15% dedicated float-crew reserve, implemented facial biometric attendance kiosks, and retrofitted QR restroom inspection loops synced to mobile supervisors.",
    impactPreview: [
      "100% shift fill rate maintained consistently over 12 months",
      "Average ticket resolution time dropped from 4 hours to 28 minutes",
      "Façade cleaning turnaround reduced by 60% using tethered drone technology"
    ],
    isTemplateNotice: true,
  },
  {
    id: "case-hospital-delhi",
    title: "NABH-Aligned Infection Control & Housekeeping for 200-Bed Hospital",
    facilityType: "Multi-Speciality Hospital",
    location: "South Delhi",
    scope: ["Clinical Deep Cleaning", "Bio-Medical Waste Segregation", "Emergency DG Backup", "ULV Cold Fogging Disinfection"],
    challenge: "Strict NABH re-accreditation looming with unverified contract staff and inconsistent bio-medical waste manifest records.",
    solution: "Mobilized specialized hospital-certified housekeeping teams trained in color-coded microfiber cross-contamination control and introduced weekly ATP bioluminescence swab audits.",
    impactPreview: [
      "Zero bio-medical waste compliance notices during NABH audit",
      "Achieved 99.8% ATP hygiene pass scores on critical touchpoints",
      "Seamless emergency diesel generator switchover tested at <12 seconds"
    ],
    isTemplateNotice: true,
  },
  {
    id: "case-industrial-manesar",
    title: "Heavy-Duty Floor Scrubbing & Safety Security for Auto Component Plant",
    facilityType: "Automotive Manufacturing Plant (180,000 sq.ft.)",
    location: "IMT Manesar",
    scope: ["Heavy Machine Scrubbing", "Perimeter Security & Material Gate Control", "Substation HT/LT Maintenance"],
    challenge: "Machinery coolant spills created chronic slip-and-fall risks, while manual visitor registers failed to trace vendor material inward/outward movement accurately.",
    solution: "Introduced battery-powered industrial ride-on scrubber sweepers with oil-cutting enzymatic degreasers, combined with cloud-synced digital material gate pass tracking.",
    impactPreview: [
      "Zero lost-time injury (LTI) slips over 180 continuous operating days",
      "100% digital material audit trail with zero untracked gate pass variances",
      "Substation power factor maintained at 0.99, eliminating grid surcharges"
    ],
    isTemplateNotice: true,
  },
];
