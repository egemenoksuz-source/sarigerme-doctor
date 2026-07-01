import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sarigermedoctor.com";

  const routes = [
    "",
    "/doctor-sarigerme",
    "/doctor-dalaman",
    "/doctor-fethiye",
    "/doctor-near-dalaman-airport",
    "/hotel-doctor",
    "/emergency-doctor",
    "/iv-therapy",
    "/food-poisoning",
    "/ear-infection",
    "/tourist-doctor",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}