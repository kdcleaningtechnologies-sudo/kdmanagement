export interface SustainabilityPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  esgMetric: string;
  iconName: string;
}

export const sustainabilityData = {
  badge: "ESG & Eco-Conscious Operations",
  headline: "Sustainable Facilities That Power Your Corporate ESG Commitments",
  subheadline: "Modern enterprises must report on environmental impact. We don't just use green words — we deploy water-saving technology, non-toxic chemistry, and verifiable waste segregation that directly feed your corporate BRSR (Business Responsibility and Sustainability Reporting) and ESG disclosures.",
  pillars: [
    {
      id: "pure-water-tech",
      title: "Pure-Water Façade Washing (Zero Runoff)",
      tagline: "Ultra-pure deionized water eliminates toxic detergents and ladder hazards.",
      description: "Our telescopic water-fed poles and façade drones filter municipal water into 100% demineralized pure water. Natural mineral attraction lifts dust without harsh surfactants, avoiding toxic runoff into stormwater drains.",
      esgMetric: "Saves up to 70% water volume compared to conventional high-pressure hose blasting.",
      iconName: "Droplets",
    },
    {
      id: "green-certified-chemicals",
      title: "Certified Eco-Friendly Chemistry",
      tagline: "Biodegradable, non-corrosive, low-VOC formulations.",
      description: "We use Diversey and Buzil Green Seal / EU Ecolabel formulations with automated wall-mounted dilution dispensers that prevent concentrated chemical dumping into public sewer systems.",
      esgMetric: "100% biodegradable formulations with zero VOC off-gassing into indoor breathable air.",
      iconName: "Leaf",
    },
    {
      id: "solid-waste-composting",
      title: "Source Waste Segregation & On-Site Composting",
      tagline: "Diverting wet cafeteria organic waste from municipal landfills.",
      description: "Color-coded 3-bin waste segregation across every floor. Organic cafeteria waste is processed in on-site Organic Waste Composting (OWC) machines, turning food scraps into rich landscaping mulch.",
      esgMetric: "Up to 85% solid waste landfill diversion rate documented with monthly disposal manifests.",
      iconName: "Recycle",
    },
    {
      id: "energy-hvac-optimization",
      title: "Energy & Chiller Plant Optimization",
      tagline: "Intelligent BMS setpoints that curb unnecessary kilowatt-hours.",
      description: "Our certified HVAC engineers optimize cooling tower delta-T, balance air ducts, and schedule smart sensor lighting to cut phantom loads without sacrificing occupant comfort.",
      esgMetric: "Demonstrated 8% to 14% reduction in common-area kilowatt-hour electricity consumption.",
      iconName: "Zap",
    },
  ] as SustainabilityPillar[],
  corporateEsgHook: {
    title: "How We Support Your BRSR / ESG Corporate Disclosures",
    points: [
      "Monthly Water Conservation Logs: Track liters saved through water-fed pure water systems.",
      "Waste Segregation Audit Manifests: Certified dry, wet, e-waste, and hazardous waste weight receipts.",
      "Green Chemical Compliance Certificates: Documentation for LEED, WELL, and IGBC certified green buildings.",
      "Energy Efficiency Logs: Sub-meter baseline reports on chiller and common-area power usage.",
    ],
  },
};
