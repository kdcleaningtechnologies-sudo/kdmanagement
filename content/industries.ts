export interface Industry {
  id: string;
  slug: string;
  name: string;
  headline: string;
  shortProblem: string;
  painPoints: string[];
  kdSolution: string;
  recommendedServices: { name: string; href: string }[];
  slaHighlight: string;
  iconName: string;
  quote: string;
}

export const industriesData: Industry[] = [
  {
    id: "corporate-offices",
    slug: "corporate-offices",
    name: "Corporate Offices & IT Parks",
    headline: "Impeccable workplaces that reflect your brand and boost employee productivity.",
    shortProblem: "High footfall, demanding hygiene expectations, and absenteeism-prone housekeeping contractors causing executive friction.",
    painPoints: [
      "Frequent cleaner absenteeism without backup personnel disrupts morning operations.",
      "Inconsistent restroom cleanliness during high-traffic midday hours.",
      "Disjointed vendors for housekeeping, technical HVAC, and security creating billing and management headaches.",
      "Lack of digital compliance documentation for corporate facility audits."
    ],
    kdSolution: "Single-point Integrated Facility Management (IFM) with a 15% dedicated float-crew reserve, QR-verified restroom cleanliness loops, and consolidated monthly digital SLA audits.",
    recommendedServices: [
      { name: "Corporate Housekeeping", href: "/services/cleaning#corporate-housekeeping" },
      { name: "Pantry & Cafeteria Management", href: "/services/cleaning#pantry-cafeteria" },
      { name: "HVAC & Chiller Plant Management", href: "/services/technical#hvac-operations" },
      { name: "Manned Guarding & Access Control", href: "/services/security#manned-guarding" },
    ],
    slaHighlight: "30-minute restroom inspection intervals; 100% staff shift fill rate guaranteed.",
    iconName: "Briefcase",
    quote: "Clean, well-maintained offices lead to a 15% boost in employee satisfaction and reduced sick days.",
  },
  {
    id: "hospitals-healthcare",
    slug: "hospitals-healthcare",
    name: "Hospitals & Healthcare Facilities",
    headline: "Zero-tolerance infection control and clinical-grade sanitation.",
    shortProblem: "Healthcare-associated infections (HAIs), strict NABH bio-medical compliance, and the need for silent, empathetic cleaning staff.",
    painPoints: [
      "Cross-contamination risks between infectious isolation wards and public waiting lobbies.",
      "Inadequate knowledge of bio-medical waste segregation guidelines leading to municipal penalties.",
      "Noisy, disruptive cleaning equipment in intensive care and patient recovery corridors.",
      "Strict statutory NABH/JCI audit requirements that generic housekeeping contractors fail."
    ],
    kdSolution: "Clinical-grade sanitation protocols with color-coded microfiber sanitization, certified bio-hazard waste handling, whisper-quiet HEPA equipment, and full NABH documentation support.",
    recommendedServices: [
      { name: "Clinical Deep Cleaning & Disinfection", href: "/services/specialised#disinfection-indoor-air" },
      { name: "Bio-Medical Waste Segregation", href: "/services/cleaning#waste-management" },
      { name: "Substation & Emergency DG Backup", href: "/services/technical#electrical-dg-sets" },
      { name: "Patient-Friendly Security Guarding", href: "/services/security#manned-guarding" },
    ],
    slaHighlight: "ATP bioluminescence verification achieving 99.8% microbial kill rate on high-touch surfaces.",
    iconName: "HeartPulse",
    quote: "In clinical environments, sanitation is not just aesthetics — it is life-saving patient safety.",
  },
  {
    id: "hotels-hospitality",
    slug: "hotels-hospitality",
    name: "Hotels & Luxury Hospitality",
    headline: "Flawless guest-facing presentation with 5-star grooming standards.",
    shortProblem: "Fluctuating seasonal occupancy, demanding guest scrutiny on reviews, and high marble and carpet wear.",
    painPoints: [
      "Guest complaints about dull lobby marble or stained ballroom carpets hurting TripAdvisor/Google ratings.",
      "Front-of-house staff lacking English communication and luxury grooming decorum.",
      "Back-of-house kitchen pest outbreaks risking health department inspections.",
      "High turnover of banquet and steward crews during peak wedding and conference seasons."
    ],
    kdSolution: "Hospitality-trained floor stewards, specialized Italian marble crystallization, odorless commercial pest management, and flexible manpower surge capacity for banquets and events.",
    recommendedServices: [
      { name: "Marble Polishing & Floor Crystallization", href: "/services/specialised#marble-stone-crystallization" },
      { name: "Glass & Façade Cleaning", href: "/services/cleaning#facade-cleaning" },
      { name: "Integrated Pest Management (IPM)", href: "/services/specialised#integrated-pest-management" },
      { name: "Kitchen & Restroom Sanitization", href: "/services/cleaning#deep-cleaning" },
    ],
    slaHighlight: "Guaranteed 85+ gloss-meter reflection unit outcome on lobby marble at all times.",
    iconName: "Hotel",
    quote: "First impressions are made in the first 7 seconds of entering a hotel lobby.",
  },
  {
    id: "industrial-manufacturing",
    slug: "industrial-manufacturing",
    name: "Industrial & Manufacturing Plants",
    headline: "Rigorous industrial housekeeping, factory safety, and heavy machinery support.",
    shortProblem: "Oil-slicked shop floors, dust accumulation in high bays, strict Factory Act safety compliance, and material pilferage.",
    painPoints: [
      "High slip-and-fall accident rates caused by machinery coolant and oil leaks on factory floors.",
      "Combustible dust accumulation in overhead structural trusses and high-bay lighting.",
      "Theft and unauthorized material movement through loading bays and scrap yards.",
      "Unplanned electrical panel outages disrupting entire assembly lines."
    ],
    kdSolution: "Heavy-duty ride-on scrubber sweepers, high-bay structural vacuuming, PASARA-certified industrial security with material inward/outward gate monitoring, and licensed HT/LT electrical technicians.",
    recommendedServices: [
      { name: "Commercial Deep Cleaning & Scrubbing", href: "/services/cleaning#deep-cleaning" },
      { name: "Visitor & Material Gate Control", href: "/services/security#visitor-gate-management" },
      { name: "Electrical Substations & DG Backup", href: "/services/technical#electrical-dg-sets" },
      { name: "Electronic Surveillance & Night Patrol", href: "/services/security#cctv-surveillance-patrol" },
    ],
    slaHighlight: "Zero lost-time injury (LTI) record with 100% PPE compliance across all factory operations.",
    iconName: "Factory",
    quote: "A clean factory floor is the foundation of high-speed manufacturing efficiency.",
  },
  {
    id: "malls-retail",
    slug: "malls-retail",
    name: "Malls & Retail Centers",
    headline: "High-capacity continuous cleaning and crowd security for retail destinations.",
    shortProblem: "Intense weekend footfalls, quick food-court spill response requirements, and shopping center security risks.",
    painPoints: [
      "Food court spills causing slippery tile hazards and unsightly trash buildup during weekend peaks.",
      "High-traffic glass balustrades and atrium skylights covered in dust and fingerprints.",
      "Shoplifting and unruly crowd management during promotional events and sales.",
      "Escalator and HVAC cooling breakdowns driving shoppers away."
    ],
    kdSolution: "Continuous roaming janitorial squads with cordless compact scrubbers, automated food-court tray clearance, crowd-trained security guards, and rapid-response MEP technicians.",
    recommendedServices: [
      { name: "Pantry & Cafeteria Management", href: "/services/cleaning#pantry-cafeteria" },
      { name: "Glass & Façade Cleaning", href: "/services/cleaning#facade-cleaning" },
      { name: "HVAC & Chiller Plant Management", href: "/services/technical#hvac-operations" },
      { name: "Emergency Response & Crowd Marshals", href: "/services/security#emergency-fire-safety" },
    ],
    slaHighlight: "3-minute spill response time in food courts and retail concourses.",
    iconName: "ShoppingBag",
    quote: "Retail footfall translates to revenue only when visitors feel safe, comfortable, and welcomed.",
  },
  {
    id: "schools-institutions",
    slug: "schools-institutions",
    name: "Schools & Educational Campuses",
    headline: "Safe, child-friendly hygienic learning environments with background-checked staff.",
    shortProblem: "Germ transmission across classrooms, child safety concerns, and large multi-acre campus upkeep demands.",
    painPoints: [
      "Parental anxiety over child protection and unverified contractor staff on school grounds.",
      "Fast spread of seasonal flu and respiratory infections through shared desks and play areas.",
      "Dilapidated sports courts, overgrown lawns, and uninspected water tanks.",
      "Strict seasonal budget constraints requiring cost-effective annual maintenance models."
    ],
    kdSolution: "100% police-verified, background-checked staff with child safety sensitivity training, green non-toxic sanitizing agents, and comprehensive campus grounds and plumbing management.",
    recommendedServices: [
      { name: "IAQ & Disinfection Solutions", href: "/services/specialised#disinfection-indoor-air" },
      { name: "Plumbing, STP & WTP Operations", href: "/services/technical#plumbing-wtp-stp" },
      { name: "Manned Static Guarding", href: "/services/security#manned-guarding" },
      { name: "Waste Segregation & Disposal", href: "/services/cleaning#waste-management" },
    ],
    slaHighlight: "Strict child-safety background verification and non-toxic Green Seal certified chemicals only.",
    iconName: "GraduationCap",
    quote: "Clean, secure campuses create the foundation for children to learn and thrive with peace of mind.",
  },
  {
    id: "residential-communities",
    slug: "residential-communities",
    name: "Residential Communities & Condominiums",
    headline: "Transparent, reliable society facility management for RWAs and AOAs.",
    shortProblem: "Resident complaints regarding clubhouse upkeep, security lapses at main gates, and STP plant odors.",
    painPoints: [
      "Unresponsive maintenance vendors leaving RWA board members stressed dealing with resident complaints.",
      "Foul odors and regulatory notices stemming from poorly managed on-site Sewage Treatment Plants (STP).",
      "Visitor gate friction and unauthorized vehicle parking causing resident disputes.",
      "Opaque billing and unverified staff attendance causing financial suspicion among flat owners."
    ],
    kdSolution: "Resident-first IFM framework with automated digital attendance, odorless biological STP maintenance, digital gate security app integration, and quarterly transparent RWA budget reviews.",
    recommendedServices: [
      { name: "Plumbing, STP & WTP Operations", href: "/services/technical#plumbing-wtp-stp" },
      { name: "Visitor & Material Gate Control", href: "/services/security#visitor-gate-management" },
      { name: "Marble Polishing & Floor Crystallization", href: "/services/specialised#marble-stone-crystallization" },
      { name: "Waste Segregation & Composting", href: "/services/cleaning#waste-management" },
    ],
    slaHighlight: "Zero-odor STP operation and 99.5% power backup uptime for resident elevators.",
    iconName: "Home",
    quote: "Giving RWA committees complete peace of mind through professional, transparent estate management.",
  },
  {
    id: "commercial-buildings",
    slug: "commercial-buildings",
    name: "Commercial Buildings & Business Parks",
    headline: "Maximizing asset valuation and tenant retention through Grade-A facility standards.",
    shortProblem: "High tenant turnover, deteriorating mechanical assets, and escalating utility costs reducing investor NOI.",
    painPoints: [
      "High tenant dissatisfaction resulting in lease non-renewals due to shabby common areas.",
      "Deferred mechanical maintenance leading to expensive premature chiller and elevator replacements.",
      "Escalating power bills due to unoptimized lighting and HVAC scheduling.",
      "Exterior glass facades encrusted with grime due to hazardous, costly conventional cleaning access."
    ],
    kdSolution: "Complete Grade-A facility lifecycle management: computerized BMS energy conservation, autonomous drone façade wash, and predictive MEP maintenance to protect long-term asset value.",
    recommendedServices: [
      { name: "Autonomous Drone Façade Cleaning", href: "/services/specialised#drone-facade-cleaning" },
      { name: "Building Management System (BMS)", href: "/services/technical#bms-energy-monitoring" },
      { name: "Electrical Substations & DG Backup", href: "/services/technical#electrical-dg-sets" },
      { name: "Corporate Housekeeping & Janitorial", href: "/services/cleaning#corporate-housekeeping" },
    ],
    slaHighlight: "Up to 12% reduction in common-area utility consumption within 90 days of onboarding.",
    iconName: "Building",
    quote: "Exceptional facilities turn commercial real estate into high-yield, long-term tenant magnets.",
  },
];
