import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const conventionalRoutes = ["/", "/auth/login", "/auth/register"];

  return conventionalRoutes.map((route) => ({
    url: `${process.env.NEXTAUTH_URL}${route}`,
    lastModified: new Date().toISOString(),
    priority: 1,
    changeFrequency: "never",
  }));
}
