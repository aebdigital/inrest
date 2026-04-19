import { realizationPages } from "@/data/source-pages";
import { ProjectDetailClient } from "./project-detail-client";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const params = [];
  realizationPages.forEach((page) => {
    page.projects?.forEach((_, index) => {
      params.push({
        slug: page.slug,
        projectIndex: index.toString(),
      });
    });
  });
  return params;
}

export default async function ProjectDetailPage({ params }) {
  const { slug, projectIndex } = await params;
  const page = realizationPages.find((p) => p.slug === slug);
  const projectIdx = parseInt(projectIndex);

  if (!page || !page.projects || !page.projects[projectIdx]) notFound();

  const project = page.projects[projectIdx];

  return <ProjectDetailClient project={project} categoryTitle={page.title} categorySlug={slug} />;
}
