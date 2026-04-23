import { notFound } from "next/navigation";
import { SidebarShell, SourceCopy } from "@/components/source-layout";
import { findServicePage, servicePages, findRealizationPage } from "@/data/source-pages";
import { Reveal } from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";
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

  // Find corresponding realization projects for specific services
  const realizationSlugMap = {
    "oplastenia-budov": "oplastenia-budov",
    "hydroizolacie": "hydroizolacie",
    "stresne-svetliky": "svetliky"
  };

  const realSlug = realizationSlugMap[slug];
  const realizationPage = realSlug ? findRealizationPage(realSlug) : null;
  const relatedProjects = realizationPage?.projects?.slice(0, 4) || [];

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
        {page.content ? (
          <div className="flex flex-col gap-20">
            {page.content.map((block, index) => (
              <div key={index} className={`grid gap-12 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <SourceCopy>{block.text}</SourceCopy>
                </div>
                <Reveal className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}>
                  <div className={`relative ${block.aspect || "aspect-video"} overflow-hidden rounded-2xl border border-line/20 shadow-2xl`}>
                    <Image 
                      src={block.image} 
                      alt={`${page.title} - ${index + 1}`} 
                      fill 
                      className="object-cover" 
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </Reveal>
              </div>
            ))}

            {page.gallery && (
              <div className="pt-20 border-t border-line/10">
                <h3 className="text-2xl font-bold tracking-tight mb-10">Realizácie a vybavenie</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {page.gallery.map((img, idx) => (
                    <Reveal key={idx} delay={idx * 0.05}>
                      <div className="relative aspect-square overflow-hidden rounded-xl border border-line/10 group cursor-pointer">
                        <Image 
                          src={img} 
                          alt={`${page.title} gallery ${idx + 1}`} 
                          fill 
                          className="object-cover transition-transform duration-500 group-hover:scale-110" 
                          sizes="(max-width: 768px) 50vw, 25vw"
                          priority={idx < 4}
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            <div className="grid gap-5">
              {page.blocks.map((block, index) => (
                <SourceCopy key={index}>{block}</SourceCopy>
              ))}
            </div>

            {relatedProjects.length > 0 && (
              <div className="mt-12 pt-12 border-t border-line/10">
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="section-kicker">Výber z realizácií</p>
                    <h3 className="text-2xl font-bold tracking-tight uppercase tracking-[0.05em]">Referenčné projekty</h3>
                  </div>
                  <Link 
                    href={`/realizacie/${realSlug}`}
                    className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-foreground transition-all"
                  >
                    Všetky referencie
                    <div className="h-[1px] w-5 bg-line group-hover:w-8 group-hover:bg-accent transition-all" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {relatedProjects.map((project, pIdx) => (
                    <Reveal key={`rel-${pIdx}`} delay={pIdx * 50}>
                      <Link 
                        href={`/realizacie/${realSlug}/${pIdx}`}
                        className="group flex flex-col border border-line/10 bg-white transition-all hover:border-accent/40"
                      >
                        <div className="relative aspect-square overflow-hidden bg-zinc-100">
                          <Image 
                            src={project.gallery[0]} 
                            alt={project.title} 
                            fill 
                            className="object-cover transition-all duration-700 group-hover:scale-110" 
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="line-clamp-2 text-[10px] font-bold uppercase tracking-tight text-zinc-900 group-hover:text-accent transition-colors leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </article>
    </SidebarShell>
  );
}
