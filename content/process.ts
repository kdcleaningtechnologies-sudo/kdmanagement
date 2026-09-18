export interface ProcessStepItem {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const processData = {
  sectionBadge: "Structured Onboarding",
  headline: "How We Work — From Audit to Seamless Operations",
  subheadline: "A battle-tested 5-step transition methodology that ensures zero operational disruption during vendor handover.",
  recurringNote: "Flexible monthly, quarterly, or annual Annual Maintenance Contracts (AMC) — no punitive lock-in required to start. We earn your business every 30 days through performance.",
  steps: [
    {
      stepNumber: "01",
      title: "Comprehensive Site Assessment",
      tagline: "Uncovering operational bottlenecks and hidden maintenance costs.",
      description: "Our senior technical and soft-services directors walk your property, auditing square footage, high-traffic zones, MEP plant conditions, and consumable burn rates.",
      deliverables: [
        "Free physical facility audit report",
        "MEP equipment vulnerability assessment",
        "Immediate quick-win safety and hygiene recommendations"
      ],
    },
    {
      stepNumber: "02",
      title: "Customized SLA & Staffing Plan",
      tagline: "Tailored to your operating hours, footfall, and budget.",
      description: "We design a customized manpower deployment matrix, machine allocation schedule, and SLA penalty matrix aligned with your exact corporate governance requirements.",
      deliverables: [
        "Shift-wise deployment rooster with float-crew reserves",
        "Mechanized equipment schedule & eco-chemical plan",
        "Transparent line-item cost proposal"
      ],
    },
    {
      stepNumber: "03",
      title: "Structured Mobilisation (10–14 Days)",
      tagline: "Zero-gap transition with parallel shadow shifts.",
      description: "We recruit, verify, and uniform our staff, conduct site-specific SOP training, deploy industrial machines, and install QR checkpoint tags across your property.",
      deliverables: [
        "100% police verification & medical clearance dossiers",
        "Installation of QR-code checkpoint tags and digital attendance",
        "Supervisor orientation and tenant introduction"
      ],
    },
    {
      stepNumber: "04",
      title: "Quality Monitoring & Tech Tracking",
      tagline: "Real-time visibility from day one.",
      description: "Every shift is recorded via biometric check-in, restrooms monitored via QR scans, and cleaning checklists submitted digitally to your facility manager daily.",
      deliverables: [
        "Daily 7 PM digital photographic handover reports",
        "Live QR inspection tracking logs",
        "Automated ticketing portal access for tenant grievances"
      ],
    },
    {
      stepNumber: "05",
      title: "Continuous Improvement & Quarterly Audits",
      tagline: "Data-driven optimization that drives down utility and maintenance costs.",
      description: "Quarterly joint reviews with client leadership comparing actual SLA response times, energy trends, and ATP hygiene scores to optimize manpower and chemical costs.",
      deliverables: [
        "Quarterly Executive SLA & compliance audit book",
        "Preventive MEP maintenance wear-and-tear analysis",
        "ESG sustainability metrics (water, energy & waste data)"
      ],
    },
  ] as ProcessStepItem[],
};
