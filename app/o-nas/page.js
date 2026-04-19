import { FileText } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SourceCopy, SourceHero } from "@/components/source-layout";
import { sourceCompanyPage } from "@/data/source-pages";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "O nás",
  description: "O spoločnosti INREST s.r.o. - Informácie o histórii, certifikácii a hodnotách firmy.",
  alternates: {
    canonical: absoluteUrl("/o-nas"),
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden pb-20">
      <div className="page-orb page-orb-left" aria-hidden="true" />
      <div className="page-orb page-orb-right" aria-hidden="true" />
      <SiteHeader />
      <SourceHero
        title={sourceCompanyPage.title}
        image="/media/hero.jpg"
      />
      <section className="shell">
        <Reveal className="source-panel">
          <div className="grid gap-8">
            <div className="grid gap-5">
              {sourceCompanyPage.blocks.map((block, index) => (
                <SourceCopy key={index}>{block}</SourceCopy>
              ))}
            </div>

            {sourceCompanyPage.documents && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {sourceCompanyPage.documents.map((doc) => (
                  <a
                    key={doc.title}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 border border-line bg-zinc-50/50 p-5 transition-all hover:bg-[var(--accent-soft)] hover:border-[var(--accent)] group"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-white border border-line shadow-sm transition-transform group-hover:scale-110">
                      <FileText className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <span className="text-[14px] font-bold text-foreground uppercase tracking-wider leading-snug">
                      {doc.title}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
