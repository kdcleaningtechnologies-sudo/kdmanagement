export interface SubService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  whatItIs: string;
  whoItsFor: string;
  benefits: string[];
  slaNote?: string;
  iconName: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  menuTitle: string;
  badge: string;
  headline: string;
  description: string;
  subServices: SubService[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "soft-services",
    slug: "cleaning",
    title: "Cleaning & Soft Services",
    menuTitle: "Soft Services (Cleaning)",
    badge: "Hospitality-Grade Hygiene",
    headline: "Professional Housekeeping & Soft Facility Maintenance",
    description: "Trained housekeeping personnel, green cleaning chemicals, and mechanized cleaning systems designed to elevate workplace wellness and maintain spotless corporate environments.",
    subServices: [
      {
        id: "corporate-housekeeping",
        slug: "corporate-housekeeping",
        title: "Corporate Housekeeping & Janitorial",
        shortDescription: "Daily multi-shift office cleaning, desk sanitization, and restroom upkeep by uniformed, background-verified staff.",
        whatItIs: "Full-cycle janitorial management including pre-shift deep dusting, ongoing daytime restroom policing, continuous trash disposal, and end-of-day floor scrubbing.",
        whoItsFor: "Tech hubs, corporate headquarters, co-working spaces, and multi-tenant office complexes.",
        benefits: [
          "Zero absenteeism disruption via our 15% dedicated float-crew reserve pool",
          "Color-coded microfiber cross-contamination control protocols",
          "Diversey / Buzil certified eco-friendly cleaning consumables"
        ],
        slaNote: "Continuous 30-minute restroom cleanliness turnaround cycles during peak office hours.",
        iconName: "Sparkles",
      },
      {
        id: "deep-cleaning",
        slug: "deep-cleaning",
        title: "Commercial Deep Cleaning & Scrubbing",
        shortDescription: "Scheduled mechanized scrubbing, high-pressure washing, and restorative wall-to-wall sanitation.",
        whatItIs: "Intensive periodic treatment using single-disc rotaries, industrial wet-and-dry extractors, and thermal steam sanitation for carpeted and tiled high-traffic zones.",
        whoItsFor: "Facilities preparing for audits, executive client visits, post-renovation handovers, or quarterly sanitations.",
        benefits: [
          "Industrial rotary machines that lift ingrained grease and grime",
          "HEPA-filter vacuuming improving indoor air quality (IAQ)",
          "Overnight or weekend scheduling to prevent business disruption"
        ],
        slaNote: "99.8% dirt extraction verified through ATP bioluminescence hygiene testing.",
        iconName: "Layers",
      },
      {
        id: "pantry-cafeteria",
        slug: "pantry-cafeteria",
        title: "Pantry & Cafeteria Management",
        shortDescription: "FSSAI-aligned cafeteria housekeeping, tea/coffee service coordination, and dining area sanitation.",
        whatItIs: "Trained hospitality-trained pantry stewards handling beverage dispensing, table clearing, dishwashing hygiene, and continuous food-contact surface disinfection.",
        whoItsFor: "Corporate dining halls, executive lounges, training centers, and fast-paced business pantries.",
        benefits: [
          "Hygienic food-contact surface handling following HACCP guidelines",
          "Warm, polished front-of-house hospitality demeanor",
          "Automated consumable usage tracking to curb pantry wastage"
        ],
        slaNote: "5-minute table clearance and wipe-down SLA during peak luncheon hours.",
        iconName: "Coffee",
      },
      {
        id: "facade-cleaning",
        slug: "facade-cleaning",
        title: "Glass & Façade Cleaning",
        shortDescription: "High-rise external glass wash using water-fed carbon poles and certified rope-access technicians.",
        whatItIs: "Safe exterior architectural envelope maintenance eliminating mineral stains, bird droppings, and urban particulate film from glass, ACP, and granite surfaces.",
        whoItsFor: "Commercial glass towers, hotel atriums, hospital facades, and corporate campuses.",
        benefits: [
          "Up to 65 ft reach with ground-operated ultra-pure deionized water poles",
          "Fully IRATA certified rope access technicians for ultra-tall towers",
          "100% harness double-anchorage and strict fall-protection safety logs"
        ],
        slaNote: "Zero water-spotting guarantee using deionized pure water filtration.",
        iconName: "Building2",
      },
      {
        id: "waste-management",
        slug: "waste-management",
        title: "Waste Segregation & Disposal",
        shortDescription: "Source-level dry, wet, and e-waste segregation with municipal and authorized recycler handover.",
        whatItIs: "Systematic solid waste management aligning with Central Pollution Control Board (CPCB) and municipal regulations, turning corporate waste streams into ESG audit documentation.",
        whoItsFor: "LEED/IGBC certified green buildings, large townships, hospitals, and industrial parks.",
        benefits: [
          "Complete monthly diversion metrics for corporate ESG reporting",
          "Odor-controlled organic waste composting (OWC) operations",
          "Hazardous and e-waste manifest tracking with licensed disposal partners"
        ],
        slaNote: "100% compliance with local municipal solid waste bye-laws.",
        iconName: "Trash2",
      },
    ],
  },
  {
    id: "security-services",
    slug: "security",
    title: "Security & Guarding Services",
    menuTitle: "Security Services",
    badge: "PASARA Compliant Security",
    headline: "Vigilant Manned Guarding, Perimeter Control & Asset Protection",
    description: "Strictly vetted, ex-servicemen led security personnel, intelligent gate management, and biometric access surveillance protecting your people, property, and proprietary assets 24/7/365.",
    subServices: [
      {
        id: "manned-guarding",
        slug: "manned-guarding",
        title: "Manned Static Guarding",
        shortDescription: "24/7 uniformed security guards trained in access protocols, crowd handling, and premises patrolling.",
        whatItIs: "Stationary and perimeter security guards providing physical deterrence, visitor validation, gate log maintenance, and vigilant access enforcement.",
        whoItsFor: "Commercial high-rises, gated communities, logistics warehouses, IT campuses, and factories.",
        benefits: [
          "100% police verified, background-screened, and medically checked officers",
          "Ex-servicemen and defense-trained operational leadership",
          "Mandatory 40-hour pre-deployment drill and customer de-escalation training"
        ],
        slaNote: "Zero unstaffed post incidents with geo-fenced relief dispatch.",
        iconName: "ShieldCheck",
      },
      {
        id: "visitor-gate-management",
        slug: "visitor-gate-management",
        title: "Visitor & Material Gate Control",
        shortDescription: "Digital gatekeeper software, QR guest passes, vehicle inspection, and material inward/outward RGP logs.",
        whatItIs: "Front gate access checkpoints enforcing digital gate passes, thermal scans, under-vehicle mirror checks, and strict material gate-pass authorization tracking.",
        whoItsFor: "Manufacturing units, R&D centers, corporate tech parks, and residential societies.",
        benefits: [
          "Eliminates handwritten registers with cloud-synced digital visitor logs",
          "Strict Returnable/Non-Returnable Gate Pass (RGP/NRGP) audit trail",
          "Instant host notification via SMS/WhatsApp on guest arrival"
        ],
        slaNote: "Average visitor processing time under 45 seconds with pre-invited QR code.",
        iconName: "UserCheck",
      },
      {
        id: "cctv-surveillance-patrol",
        slug: "cctv-surveillance-patrol",
        title: "Electronic Surveillance & Night Patrol",
        shortDescription: "Active CCTV control room monitoring combined with RFID-logged security guard night beat patrols.",
        whatItIs: "Centralized command center monitoring coupled with scheduled perimeter patrols verified via RFID wand checkpoints to eliminate sleep-on-duty vulnerabilities.",
        whoItsFor: "Expansive industrial plots, corporate campuses, auto-dealerships, and logistics yards.",
        benefits: [
          "RFID patrol wands confirming guards visit every designated checkpoint hourly",
          "Active incident escalation tree with 10-minute local emergency response",
          "Night inspection audits conducted by unannounced patrol officers"
        ],
        slaNote: "100% verifiable electronic patrol logs delivered in weekly client summaries.",
        iconName: "Video",
      },
      {
        id: "emergency-fire-safety",
        slug: "emergency-fire-safety",
        title: "Emergency Response & Fire Marshals",
        shortDescription: "Trained first responders, fire drill marshals, and building evacuation coordination teams.",
        whatItIs: "Security personnel certified in first aid, CPR, fire extinguisher operation, and disaster evacuation procedures to safeguard lives in crises.",
        whoItsFor: "High-occupancy buildings, convention halls, educational campuses, and shopping malls.",
        benefits: [
          "Certified Fire Marshal training for all senior security supervisors",
          "Quarterly tenant fire evacuation drill assistance and documentation",
          "Real-time coordination with local police and fire stations"
        ],
        slaNote: "Immediate 60-second emergency sounding and perimeter lockdown capability.",
        iconName: "AlertTriangle",
      },
    ],
  },
  {
    id: "technical-services",
    slug: "technical",
    title: "Engineering & Technical Services",
    menuTitle: "Technical Services (Hard FM)",
    badge: "Zero-Downtime Hard FM",
    headline: "Mechanical, Electrical, HVAC & Critical Facility Operations",
    description: "Certified technicians, preventive maintenance protocols, and computerized monitoring to keep critical MEP infrastructure running at optimal energy efficiency with zero operational downtime.",
    subServices: [
      {
        id: "hvac-operations",
        slug: "hvac-operations",
        title: "HVAC & Chiller Plant Management",
        shortDescription: "Chiller efficiency tracking, AHU filter maintenance, cooling tower chemical treatment, and VRV/VRF upkeep.",
        whatItIs: "Full operational stewardship of central air conditioning, rooftop VRV units, duct air balancing, and scheduled coil cleaning to minimize energy consumption.",
        whoItsFor: "Data centers, corporate towers, hospitals, shopping malls, and clean rooms.",
        benefits: [
          "Substantial energy savings through optimal chiller delta-T maintenance",
          "Scheduled bi-weekly AHU filter wash preserving indoor air purity",
          "Predictive vibration and thermal imaging checks to preempt compressor failure"
        ],
        slaNote: "Sub-15 minute response time for critical server room temperature alerts.",
        iconName: "Wind",
      },
      {
        id: "electrical-dg-sets",
        slug: "electrical-dg-sets",
        title: "Electrical Substations & DG Backup",
        shortDescription: "HT/LT panels, transformer maintenance, UPS rooms, and diesel generator synchronization for uninterrupted power.",
        whatItIs: "Round-the-clock licensed wiremen and electrical engineers overseeing sub-station health, power factor correction, and automated diesel generator failover.",
        whoItsFor: "Commercial towers, IT enterprises, continuous manufacturing plants, and hospitals.",
        benefits: [
          "Zero power interruption through auto-mains failure (AMF) generator testing",
          "Power Factor optimization (>0.98) avoiding heavy state electricity penalties",
          "Preventive thermography scanning to detect hotspots in busbars before outages"
        ],
        slaNote: "Guaranteed generator switchover synchronization within 15 seconds of grid loss.",
        iconName: "Zap",
      },
      {
        id: "plumbing-wtp-stp",
        slug: "plumbing-wtp-stp",
        title: "Plumbing, STP & WTP Operations",
        shortDescription: "Water treatment plant, sewage treatment plant (STP), hydro-pneumatic pumping, and plumbing network upkeep.",
        whatItIs: "Certified chemical and mechanical management of dual-plumbing networks, reverse osmosis (RO) plants, wastewater biological testing, and municipal quality compliance.",
        whoItsFor: "Residential societies, large business parks, hotel chains, and educational institutions.",
        benefits: [
          "Effluent treated water meeting strict state pollution board reuse parameters",
          "Automated hydro-pneumatic pump balancing preventing dry-run burnouts",
          "Daily pH, TDS, and dissolved oxygen testing logged digitally"
        ],
        slaNote: "Zero toxic odor incidents and 100% compliance with State Pollution Control Board norms.",
        iconName: "Droplets",
      },
      {
        id: "bms-energy-monitoring",
        slug: "bms-energy-monitoring",
        title: "Building Management System (BMS)",
        shortDescription: "Centralized SCADA/BMS desk operations, energy auditing, sensor monitoring, and automated alerts.",
        whatItIs: "Dedicated console technicians monitoring building sensors, automated lighting schedules, CO2 levels, and energy sub-metering to optimize utility bills.",
        whoItsFor: "Grade-A intelligent buildings, LEED platinum offices, and modern hospital campuses.",
        benefits: [
          "Identifies phantom energy loads and saves up to 12% on monthly utility bills",
          "Instant automated alerts sent directly to engineering supervisors",
          "Granular tenant-wise utility billing and sub-meter consumption reports"
        ],
        slaNote: "24/7 dedicated control room attendance with minute-by-minute system logging.",
        iconName: "Cpu",
      },
    ],
  },
  {
    id: "specialised-services",
    slug: "specialised",
    title: "Specialised Facility Services",
    menuTitle: "Specialised Services",
    badge: "Advanced Technical Solutions",
    headline: "High-Margin Specialized Treatments & Restorative Care",
    description: "Cutting-edge robotic façade drones, marble restoration, integrated pest management, and post-construction handover solutions delivered by our specialized equipment fleet.",
    subServices: [
      {
        id: "drone-facade-cleaning",
        slug: "drone-facade-cleaning",
        title: "Autonomous Drone Façade Cleaning",
        shortDescription: "Proprietary drone-mounted high-pressure pure water sprayers for high-rise glass and ACP exterior panels.",
        whatItIs: "Next-generation exterior building cleaning without heavy suspended cradles or scaffolding, cutting cleaning cycle times by 60% with zero human fall hazard.",
        whoItsFor: "High-rise corporate towers, curved glass architectural landmarks, and luxury hotels.",
        benefits: [
          "Eliminates human scaffolding hazard completely from exterior façade work",
          "4x faster turnaround than conventional rope access teams",
          "Custom pure-water filtration leaves no mineral streak or chemical haze"
        ],
        slaNote: "Full safety tethering, DGCA-compliant flight approvals, and zero rooftop cradle anchoring damage.",
        iconName: "Plane",
      },
      {
        id: "marble-stone-crystallization",
        slug: "marble-stone-crystallization",
        title: "Marble Polishing & Floor Crystallization",
        shortDescription: "Italian marble grinding, diamond pad hone-finishing, and mirror-shine fluorosilicate crystallization.",
        whatItIs: "Restorative stone care using high-torque Klindex and Taski rotary machines, diamond grit discs, and imported chemical sealants to restore high-gloss optical reflection.",
        whoItsFor: "5-star hotel lobbies, luxury residential entrance atriums, and premium corporate offices.",
        benefits: [
          "Restores original wet-look mirror gloss without damaging natural stone veins",
          "Micro-abrasive diamond honing removes stubborn scratches and etching",
          "Hydrophobic fluorochemical sealant prevents coffee, wine, and water staining"
        ],
        slaNote: "Guaranteed 85+ gloss-meter reflection unit outcome on treated Italian marble.",
        iconName: "Sparkle",
      },
      {
        id: "integrated-pest-management",
        slug: "integrated-pest-management",
        title: "Commercial Integrated Pest Management (IPM)",
        shortDescription: "Odorless gel baiting, rodent glue traps, termite barriers, and herbal mist fogging.",
        whatItIs: "Scientific pest eradication targeting roaches, rodents, termites, mosquitoes, and flies using WHO-recommended, food-safe chemicals with zero downtime.",
        whoItsFor: "Hospitality kitchens, pharmaceutical warehouses, office pantries, and residential societies.",
        benefits: [
          "Odorless Bayer / Syngenta formulations safe for pregnant employees and pets",
          "Tamper-proof external perimeter rodent bait stations",
          "Detailed pest activity heat-maps and trend reports for HACCP/ISO audits"
        ],
        slaNote: "Free repeat touch-up callouts within 24 hours if pest sighting reoccurs between cycles.",
        iconName: "Bug",
      },
      {
        id: "disinfection-indoor-air",
        slug: "disinfection-indoor-air",
        title: "IAQ & Disinfection Solutions",
        shortDescription: "Hospital-grade ULV cold fogging, antimicrobial surface barrier coating, and duct sterilization.",
        whatItIs: "High-level microbial decontamination eliminating 99.99% of bacteria, airborne viruses, and mold spores in ducts and work surfaces using certified biocides.",
        whoItsFor: "Hospitals, cleanrooms, schools, daycare centers, and corporate call centers.",
        benefits: [
          "Non-corrosive, non-staining EPA-registered disinfectant mist",
          "HVAC duct sanitization preventing Sick Building Syndrome (SBS)",
          "Pre- and post-treatment air particulate and microbial swab reports"
        ],
        slaNote: "Rapid dry mist technology allowing room re-entry within 45 minutes of treatment.",
        iconName: "ShieldAlert",
      },
    ],
  },
];
