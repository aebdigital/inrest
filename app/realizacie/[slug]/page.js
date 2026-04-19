import { realizationPages } from "@/data/source-pages";
import { RealizationClient } from "./realization-client";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return realizationPages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function RealizationCategoryPage({ params }) {
  const { slug } = await params;
  const page = realizationPages.find((p) => p.slug === slug);

  if (!page) notFound();

  return <RealizationClient page={page} realizationPages={realizationPages} />;
}
