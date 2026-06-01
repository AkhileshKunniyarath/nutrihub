import { getSitemapEntries } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();
  return getSitemapEntries().map((entry) => ({
    url: entry.url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: entry.url.endsWith("/products") ? 0.9 : 0.7
  }));
}
