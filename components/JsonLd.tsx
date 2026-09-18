import React from "react";
import { companyInfo } from "@/content/company";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  providerMobility?: string;
  offers?: {
    priceSpecification?: string;
    priceRange?: string;
  };
}

export interface ArticleSchemaData {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}

export interface JsonLdProps {
  type?: "LocalBusiness" | "Organization" | "Service" | "BreadcrumbList" | "FAQPage" | "Article";
  city?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  service?: ServiceSchemaData;
  article?: ArticleSchemaData;
}

export const JsonLd: React.FC<JsonLdProps> = ({
  type = "LocalBusiness",
  city,
  breadcrumbs,
  faqs,
  service,
  article,
}) => {
  let schemaData: Record<string, unknown> = {};

  if (type === "LocalBusiness" || type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": type === "LocalBusiness" ? "ProfessionalService" : "Organization",
      "@id": "https://www.kdglobalfacilities.com/#organization",
      "name": city ? `${companyInfo.name} - ${city}` : companyInfo.name,
      "legalName": companyInfo.legalName,
      "url": "https://www.kdglobalfacilities.com",
      "logo": "https://www.kdglobalfacilities.com/images/kd-logo.png",
      "image": "https://www.kdglobalfacilities.com/images/hero-placeholder.jpg",
      "description": companyInfo.heroSubheadline,
      "telephone": companyInfo.phone,
      "email": companyInfo.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": companyInfo.address.street,
        "addressLocality": city || companyInfo.address.city,
        "addressRegion": companyInfo.address.state,
        "postalCode": companyInfo.address.pincode,
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.4595",
        "longitude": "77.0266",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "00:00",
          "closes": "23:59",
        },
      ],
      "areaServed": [
        { "@type": "City", "name": "Gurugram" },
        { "@type": "City", "name": "Gurgaon" },
        { "@type": "City", "name": "Delhi" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Greater Noida" },
        { "@type": "City", "name": "Faridabad" },
        { "@type": "City", "name": "Manesar" },
        { "@type": "Country", "name": "India" },
      ],
      "sameAs": [
        "https://kdcleaningtechnologies.com/",
        "https://www.linkedin.com/company/kd-global-facilities",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Integrated Facility Management Services Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Housekeeping & Soft Services",
              "description": "Daily multi-shift office cleaning, mechanized deep scrubbing, and hospital-grade hygiene.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24/7 PASARA Manned Security Guarding",
              "description": "Police-verified security personnel, electronic patrol tracking, and access control.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Hard Services & Technical MEP Maintenance",
              "description": "Preventive maintenance for HVAC chillers, HT/LT electrical panels, and DG backup sets.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Autonomous Drone Façade Cleaning & Robotics",
              "description": "High-pressure pure-water drone façade cleaning up to 120m height.",
            },
          },
        ],
      },
    };
  } else if (type === "Service" && service) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.name,
      "serviceType": service.serviceType,
      "description": service.description,
      "url": service.url,
      "provider": {
        "@type": "ProfessionalService",
        "name": companyInfo.name,
        "telephone": companyInfo.phone,
        "email": companyInfo.email,
        "url": "https://www.kdglobalfacilities.com",
      },
      "areaServed": [
        "Gurugram",
        "Delhi NCR",
        "Noida",
        "Faridabad",
        "Manesar",
      ],
    };
  } else if (type === "BreadcrumbList" && breadcrumbs) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((b, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": b.name,
        "item": b.url.startsWith("http") ? b.url : `https://www.kdglobalfacilities.com${b.url}`,
      })),
    };
  } else if (type === "FAQPage" && faqs && faqs.length > 0) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer,
        },
      })),
    };
  } else if (type === "Article" && article) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.headline,
      "description": article.description,
      "url": article.url,
      "datePublished": article.datePublished,
      "dateModified": article.dateModified || article.datePublished,
      "author": {
        "@type": "Organization",
        "name": article.authorName || companyInfo.name,
      },
      "publisher": {
        "@type": "Organization",
        "name": companyInfo.name,
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.kdglobalfacilities.com/images/kd-logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url,
      },
      "image": article.image || "https://www.kdglobalfacilities.com/images/hero-placeholder.jpg",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
