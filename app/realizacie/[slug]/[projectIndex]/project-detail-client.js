"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { Lightbox } from "@/components/lightbox";

export function ProjectDetailClient({ project, categoryTitle, categorySlug }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <main className="relative min-height-screen bg-zinc-50 pb-20">
      <SiteHeader />
      
      <div className="shell pt-32">
        <Reveal>
          <Link 
            href={`/realizacie/${categorySlug}`}
            className="group mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Späť na {categoryTitle}
          </Link>
        </Reveal>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          {/* Left Side: Text */}
          <div className="lg:w-[40%]">
            <Reveal>
              <h1 className="mt-4 text-4xl font-bold uppercase tracking-tighter text-zinc-900 md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <div className="mt-8 h-1 w-20 bg-accent" />
              <p className="mt-10 text-lg leading-relaxed text-muted">
                Tento projekt predstavuje ukážku našej odbornosti v kategórii {categoryTitle}. 
                Zabezpečili sme kompletnú dodávku a montáž v súlade s najvyššími technologickými štandardmi.
              </p>
            </Reveal>
          </div>

          {/* Right Side: Big Photo (60%) */}
          <div className="lg:w-[60%]">
            <Reveal>
              <div 
                className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line/20 shadow-2xl cursor-zoom-in"
                onClick={() => openLightbox(0)}
              >
                <Image 
                  src={project.gallery[0]} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 hover:scale-105" 
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Gallery Grid Below */}
        <div className="mt-20">
          <Reveal>
            <h2 className="mb-10 text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 border-b border-line pb-4">
              Projektová fotogaléria
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4">
            {project.gallery.map((img, i) => (
              <Reveal key={`gallery-${i}`} delay={i * 50}>
                <div 
                  className="group relative aspect-square overflow-hidden rounded-lg bg-zinc-200 cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <Image 
                    src={img} 
                    alt={`${project.title} shot ${i}`} 
                    fill 
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80" 
                    priority={i < 4}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">Zobraziť</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Lightbox 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={project.gallery}
        currentIndex={currentIndex}
        onNext={nextImage}
        onPrev={prevImage}
        title={project.title}
      />
    </main>
  );
}
