export interface StatItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export const statsData = {
  sectionTitle: "Trusted Operational Scale",
  sectionSubtitle: "Proven field capabilities across demanding commercial and industrial properties in Delhi NCR.",
  stats: [
    {
      id: "workforce",
      value: "100+",
      label: "Trained Professionals*",
      description: "Background-verified, uniform-clad soft & hard FM team members deployed across client sites.",
    },
    {
      id: "support",
      value: "24/7",
      label: "Operational Support*",
      description: "Round-the-clock facility command desk and emergency engineering escalation.",
    },
    {
      id: "multisite",
      value: "Multi-Site",
      label: "Facility Capability",
      description: "Single-vendor management across corporate towers, manufacturing plants, and townships.",
    },
    {
      id: "tech-enabled",
      value: "100%",
      label: "Technology Enabled Operations",
      description: "Every deployed site monitored via digital attendance, QR inspections, and automated SLA logs.",
    },
  ] as StatItem[],
  disclaimer: "* Operational capability metrics reflecting deployed workforce capacity, active response frameworks, and service management parameters across current client networks. Field headcounts and SLA commitments are customized based on individual client scope and audit findings.",
};
