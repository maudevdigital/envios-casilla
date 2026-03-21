import type { MetadataRoute } from "next";

const baseUrl = "https://envioscasilla.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["es", "en"];
  const routes = [
    "",
    "/about",
    "/contact",
    "/faq",
    "/services",
    "/services/usa-shipping",
    "/services/china-imports",
    "/services/personal-shopping",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route.startsWith("/services/") ? 0.9 : 0.8,
        alternates: {
          languages: {
            es: `${baseUrl}/es${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
