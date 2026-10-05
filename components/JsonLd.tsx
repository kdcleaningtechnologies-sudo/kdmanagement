import React from "react";
import { companyInfo } from "@/content/company";
import { SITE_URL } from "@/lib/seo";

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
    const isDelhi = Boolean(city && /delhi/i.test(city));
    const primaryAddress = isDelhi ? companyInfo.delhiAddress : companyInfo.address;
    const orgId = `${SITE_URL}/#organization`;
    const professionalService: Record<string, unknown> = {
      "@type": type === "LocalBusiness" ? "ProfessionalService" : "Organization",
      "@id": orgId,
      "name": city ? `${companyInfo.name} - ${city}` : companyInfo.name,
      "legalName": companyInfo.legalName,
      "url": SITE_URL,
      "logo": `${SITE_URL}/images/kd-logo.png`,
      "image": `${SITE_URL}/images/kd-hero-staff.png`,
      "description": companyInfo.heroSubheadline,
      "telephone": companyInfo.phone,
      "email": companyInfo.email,
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": companyInfo.phone,
          "email": companyInfo.email,
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"],
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "name": companyInfo.marketingHead.name,
          "telephone": companyInfo.marketingHead.phone,
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"],
        },
      ],
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": primaryAddress.street,
        "addressLocality": city || primaryAddress.city,
        "addressRegion": "state" in primaryAddress ? primaryAddress.state : companyInfo.address.state,
        "postalCode": primaryAddress.pincode,
        "addressCountry": "IN",
      },
      "location": [
        {
          "@type": "Place",
          "name": "Gurgaon Office (HQ)",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyInfo.address.street,
            "addressLocality": companyInfo.address.city,
            "addressRegion": companyInfo.address.state,
            "postalCode": companyInfo.address.pincode,
            "addressCountry": "IN",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.4595",
            "longitude": "77.0266",
          },
          "hasMap": "https://maps.google.com/?q=521+Sector+31+Gurgaon+122001",
        },
        {
          "@type": "Place",
          "name": "Delhi Office",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyInfo.delhiAddress.street,
            "addressLocality": companyInfo.delhiAddress.city,
            "addressRegion": companyInfo.delhiAddress.state,
            "postalCode": companyInfo.delhiAddress.pincode,
            "addressCountry": "IN",
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.5324",
            "longitude": "77.2936",
          },
          "hasMap": "https://maps.google.com/?q=C-134+Sarita+Vihar+New+Delhi+110076",
        },
        {
          "@type": "Place",
          "name": "Netherlands Office",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": companyInfo.netherlandsAddress.street,
            "addressLocality": companyInfo.netherlandsAddress.city,
            "postalCode": companyInfo.netherlandsAddress.pincode,
            "addressCountry": "NL",
          },
        },
      ],
      "geo": isDelhi
        ? {
            "@type": "GeoCoordinates",
            "latitude": "28.5324",
            "longitude": "77.2936",
          }
        : {
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
        { "@type": "City", "name": "New Delhi" },
        { "@type": "Place", "name": "Sarita Vihar" },
        { "@type": "City", "name": "Noida" },
        { "@type": "City", "name": "Greater Noida" },
        { "@type": "City", "name": "Faridabad" },
        { "@type": "City", "name": "Manesar" },
        { "@type": "Country", "name": "India" },
      ],
      "sameAs": [
        "https://kdcleaningtechnologies.com/",
        companyInfo.social.linkedin,
        companyInfo.social.facebook,
        companyInfo.social.instagram,
      ],
      "knowsAbout": [
        "Integrated Facility Management",
        "Corporate Housekeeping",
        "PASARA Security Guarding",
        "MEP and HVAC Maintenance",
        "Drone Facade Cleaning",
        "Integrated Pest Management",
        "Commercial Pest Control",
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
              "name": "Commercial Pest Control & IPM",
              "description": "Scheduled integrated pest management, rodent and termite control, fumigation, and disinfection for corporate, hospital, and industrial sites.",
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

    if (!city) {
      schemaData = {
        "@context": "https://schema.org",
        "@graph": [
          professionalService,
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            "url": SITE_URL,
            "name": companyInfo.name,
            "description": companyInfo.heroSubheadline,
            "publisher": { "@id": orgId },
            "inLanguage": "en-IN",
          },
        ],
      };
    } else {
      schemaData = {
        "@context": "https://schema.org",
        ...professionalService,
      };
    }
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
        "url": SITE_URL,
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
        "item": b.url.startsWith("http") ? b.url : `${SITE_URL}${b.url}`,
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
          "url": `${SITE_URL}/images/kd-logo.png`,
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": article.url,
      },
      "image": article.image || `${SITE_URL}/images/kd-hero-staff.png`,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
