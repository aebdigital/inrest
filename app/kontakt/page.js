import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SourceHero } from "@/components/source-layout";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte INREST s.r.o. v Považskej Bystrici. Kontaktný formulár, prevádzka, klampiarska výroba a priame kontakty na vedenie spoločnosti.",
  alternates: {
    canonical: absoluteUrl("/kontakt"),
  },
  openGraph: {
    title: "Kontakt | INREST",
    description:
      "Kontaktný formulár a priame kontakty na spoločnosť INREST s.r.o. vrátane prevádzky a fakturačných údajov.",
    url: absoluteUrl("/kontakt"),
    images: [
      {
        url: absoluteUrl("/media/hero.jpg"),
        width: 1024,
        height: 768,
        alt: "Kontakt na INREST s.r.o.",
      },
    ],
  },
};

export default function KontaktPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": absoluteUrl("/kontakt#contactpage"),
        url: absoluteUrl("/kontakt"),
        name: "Kontakt | INREST",
        description:
          "Kontaktná stránka spoločnosti INREST s.r.o. s formulárom a firemnými údajmi.",
        inLanguage: "sk-SK",
      },
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
      },
    ],
  };

  return (
    <main className="relative overflow-hidden pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <div className="page-orb page-orb-left" aria-hidden="true" />
      <div className="page-orb page-orb-right" aria-hidden="true" />

      <SiteHeader />

      <SourceHero
        title="Kontakt"
        image="/media/hero.jpg"
      />

      <section className="shell py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side: Info */}
          <Reveal className="space-y-12">
            <div>
              <p className="section-kicker mb-6">Fakturačné údaje</p>
              <div className="text-[15px] leading-relaxed text-muted space-y-4">
                <p>INREST, s. r. o.</p>
                <p>Lánska 64/961, 017 01 Považská Bystrica</p>
                <div className="pt-4 space-y-1">
                  <p><span className="text-foreground font-medium">Banka:</span> Tatra Banka, a.s. Pov. Bystrica</p>
                  <p className="tracking-tight text-foreground/80 uppercase">IBAN: SK66 1100 0000 0029 4646 1034</p>
                </div>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <p><span className="text-foreground font-medium">IČO:</span> 44 637 896</p>
                  <p><span className="text-foreground font-medium">IČ DPH:</span> SK2022806148</p>
                </div>
                <p><span className="text-foreground font-medium">Register:</span> OS Trenčín, 21533/R</p>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-4">
                <p className="section-kicker !text-[11px]">Prevádzka</p>
                <div className="text-[15px] text-muted space-y-1">
                  <p>Robotnícka 258</p>
                  <p>017 01 Považská Bystrica</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="section-kicker !text-[11px]">Klampiarska výroba</p>
                <div className="text-[15px] text-muted space-y-1">
                  <p>Dolný Lieskov 1262</p>
                  <p>018 21 Dolný Lieskov</p>
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 border-t border-line pt-10">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-muted/60">konateľ</p>
                <p className="text-xl font-bold">Pavol Fraštík</p>
                <div className="text-[15px] text-muted space-y-1 flex flex-col pt-2">
                  <a href="tel:+421948756681" className="hover:text-foreground transition">+421 948 756 681</a>
                  <a href="mailto:frastik@inrestsro.sk" className="hover:text-foreground transition">frastik@inrestsro.sk</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-widest text-muted/60">konateľ, vedúci výroby</p>
                <p className="text-xl font-bold">Martin Fraštík</p>
                <div className="text-[15px] text-muted space-y-1 flex flex-col pt-2">
                  <a href="tel:+421908264970" className="hover:text-foreground transition">+421 908 264 970</a>
                  <a href="mailto:m.frastik@inrestsro.sk" className="hover:text-foreground transition">m.frastik@inrestsro.sk</a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Side: Map */}
          <Reveal delay={200} className="relative min-h-[500px] overflow-hidden border border-line bg-zinc-100 shadow-xl lg:min-h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.1554562035255!2d18.452636577317785!3d49.1112440713673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47148bf42506b87b%3A0x5959ebd5bc7c8990!2sINREST%20s.r.o.!5e0!3m2!1ssk!2ssk!4v1713568000000!5m2!1ssk!2ssk"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
