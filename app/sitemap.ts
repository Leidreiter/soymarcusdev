import type { MetadataRoute } from "next";

export const BASE_URL = "https://soymarcus.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/links", "/entrevistas"].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}