import { absoluteUrl } from "@/lib/site";
import { realizationPages, servicePages } from "@/data/source-pages";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/kontakt"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/o-nas"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/certifikaty"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...servicePages.map((page) => ({
      url: absoluteUrl(`/sluzby/${page.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
    ...realizationPages.map((page) => ({
      url: absoluteUrl(`/realizacie/${page.slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    })),
  ];
}
