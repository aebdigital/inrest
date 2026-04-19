import { notFound } from "next/navigation";
import { SidebarShell, SourceCopy } from "@/components/source-layout";
import { findServicePage, servicePages } from "@/data/source-pages";
import { absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return servicePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = findServicePage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: `${page.title} - Ponuka služieb spoločnosti INREST s.r.o.`,
    alternates: {
      canonical: absoluteUrl(`/sluzby/${page.slug}`),
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const page = findServicePage(slug);

  if (!page) {
    notFound();
  }

  return (
    <SidebarShell
      kicker="Naše služby"
      title={page.title}
      description="Ponuka odborných riešení v oblasti realizácie stavieb a špeciálnych profesií."
      image={page.image}
      items={servicePages}
      activeSlug={page.slug}
      basePath="/sluzby"
    >
      <article className="source-panel">
        <div className="mt-6 grid gap-5">
          {page.blocks.map((block, index) => (
            <SourceCopy key={index}>{block}</SourceCopy>
          ))}
        </div>
      </article>
    </SidebarShell>
  );
}
