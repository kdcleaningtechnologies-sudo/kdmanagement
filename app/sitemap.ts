import { MetadataRoute } from "next";
import { citiesData } from "@/content/cities";
import { insightsArticles } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kdfmservices.com";
  const currentDate = new Date();

  // Core public pages
  const coreRoutes = [
    { route: "", priority: 1.0, changeFrequency: "daily" as const },
    { route: "/facility-management", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "/services/cleaning", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/security", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/technical", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/services/specialised", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/industries", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/technology", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/insights", priority: 0.85, changeFrequency: "daily" as const },
    { route: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.85, changeFrequency: "weekly" as const },
    { route: "/careers", priority: 0.75, changeFrequency: "weekly" as const },
    { route: "/projects", priority: 0.75, changeFrequency: "monthly" as const },
    { route: "/sustainability", priority: 0.75, changeFrequency: "monthly" as const },
    { route: "/partner", priority: 0.7, changeFrequency: "monthly" as const },
  ].map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified: currentDate,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  // City-specific landing pages (high local intent)
  const cityRoutes = Object.keys(citiesData).map((citySlug) => ({
    url: `${baseUrl}/${citySlug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Insights / Blog articles (long-tail B2B educational content)
  const insightRoutes = insightsArticles.map((article) => ({
    url: `${baseUrl}/insights/${article.slug}`,
    lastModified: new Date(article.modifiedDate || article.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...coreRoutes, ...cityRoutes, ...insightRoutes];
}
