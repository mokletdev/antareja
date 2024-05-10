import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/juri/"],
    },
    sitemap: "https://antareja.smktelkom-mlg.sch.id/sitemap.xml",
  };
}
