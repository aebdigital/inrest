"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SourceCopy, SourceHero } from "@/components/source-layout";
import { Lightbox } from "@/components/lightbox";
import { sourceCertificatePage } from "@/data/source-pages";
import { certifications } from "@/data/site-content";

export function CertificatesContent() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <>
      <div className="page-orb page-orb-left" aria-hidden="true" />
      <div className="page-orb page-orb-right" aria-hidden="true" />
      <SiteHeader />
      <SourceHero
        title={sourceCertificatePage.title}
        image="/media/hero.jpg"
      />
      <section className="shell py-20">
        <Reveal className="source-panel">
          <SourceCopy>{sourceCertificatePage.intro}</SourceCopy>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {certifications.map((cert, index) => (
              <Reveal key={cert.title} delay={index * 50} className="cert-card cursor-pointer group" onClick={() => setSelectedCert(cert)}>
                <div className="cert-image-wrap !aspect-[3/4] relative overflow-hidden">
                  <Image 
                    src={cert.image} 
                    alt={cert.title} 
                    fill 
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-[var(--accent)]">
                    {cert.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      <Lightbox 
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        image={selectedCert?.image}
        title={selectedCert?.title}
      />
    </>
  );
}
