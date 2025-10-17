import type { MetadataRoute } from "next";
import { SITE_HOME_URL } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_HOME_URL}/sitemap.xml`,
  };
}
