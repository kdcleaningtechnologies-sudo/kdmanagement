export interface ClientItem {
  id: string;
  name: string;
  shortName: string;
  industry: string;
  category: "Healthcare" | "Pharma & Industrial" | "Corporate & Telecom" | "Commercial & Luxury";
  location: string;
  scope: string;
  tagline: string;
}

export const clientsData: ClientItem[] = [
  {
    id: "ozone-pharmaceuticals",
    name: "Ozone Pharmaceuticals",
    shortName: "Ozone Pharma",
    industry: "Pharmaceutical & Healthcare Formulations",
    category: "Pharma & Industrial",
    location: "Gurgaon & Delhi NCR",
    scope: "Industrial Housekeeping, Sterile Facility Hygiene & MEP Maintenance",
    tagline: "Leading Healthcare Formulation & Life Sciences Giant",
  },
  {
    id: "aviss-hospital",
    name: "Aviss Hospital",
    shortName: "Aviss Hospital",
    industry: "Multi-Speciality Healthcare",
    category: "Healthcare",
    location: "Gurgaon, Haryana",
    scope: "NABH Clinical Housekeeping, OT Sanitization & Patient Area Care",
    tagline: "Premier Multi-Speciality Clinical Hospital",
  },
  {
    id: "sarvodaya-hospital",
    name: "Sarvodaya Hospital",
    shortName: "Sarvodaya Hospital",
    industry: "Super-Speciality Hospital & Research",
    category: "Healthcare",
    location: "Delhi NCR & Faridabad",
    scope: "Infection Control, Bio-Medical Waste Handling & 24/7 Security",
    tagline: "NABH-Accredited Super-Speciality Medical Centre",
  },
  {
    id: "transcomm",
    name: "Transcomm",
    shortName: "Transcomm",
    industry: "Telecom & Enterprise Infrastructure",
    category: "Corporate & Telecom",
    location: "Delhi NCR",
    scope: "Corporate Housekeeping, Technical Facility MEP & Security",
    tagline: "Enterprise Telecom & Infrastructure Solutions",
  },
  {
    id: "essentia",
    name: "Essentia",
    shortName: "Essentia",
    industry: "Luxury Architecture & Corporate Commercial",
    category: "Commercial & Luxury",
    location: "Gurgaon, Haryana",
    scope: "Premium Architectural Housekeeping, Deep Mechanized Cleaning & Facility Upkeep",
    tagline: "High-End Corporate & Architecture Spaces",
  },
];
