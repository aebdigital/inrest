"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import {
  clients,
  contacts,
} from "@/data/site-content";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

function SectionHeading({ kicker, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

export default function HomePage() {
  const containerRef = useRef(null);
  const heroImages = [
    "/projects/realizacie/SIKO-BA-BORY-final-06.2023-12.jpg",
    "/projects/realizacie/20220324_134351.jpg",
    "/projects/project-jaguar.jpg"
  ];

  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "33%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: siteConfig.legalName,
        url: siteConfig.url,
        logo: absoluteUrl("/media/logo.png"),
        email: siteConfig.email,
        telephone: siteConfig.phone,
      },
      {
        "@type": "LocalBusiness",
        "@id": absoluteUrl("/#localbusiness"),
        name: siteConfig.legalName,
        image: absoluteUrl("/media/hero.jpg"),
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        priceRange: "$$",
        foundingDate: "2009",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lánska 64/961",
          addressLocality: "Považská Bystrica",
          postalCode: "017 01",
          addressCountry: "SK",
        },
        areaServed: ["Slovakia", "Czech Republic"],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "sk-SK",
      },
      {
        "@type": "WebPage",
        "@id": absoluteUrl("/#webpage"),
        url: absoluteUrl("/"),
        name: "INREST | Opláštenia budov, hydroizolácie a klampiarska výroba",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
        about: {
          "@id": absoluteUrl("/#organization"),
        },
        description: siteConfig.description,
        inLanguage: "sk-SK",
      },
    ],
  };

  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      
      <SiteHeader />

      <section ref={containerRef} id="top" className="relative flex min-h-[90vh] items-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeHero}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 6, ease: "linear" }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[activeHero]}
                  alt="Realizácia INREST"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </motion.div>

        <div className="shell relative z-10 py-20">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="hero-title text-white">
                INREST, s. r. o.
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl">
                Opláštenia budov, hydroizolácie, klampiarska výroba, investičné celky, stavebné práce a rekonštrukcie.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/realizacie" className="button-primary">
                Realizácie
              </a>
              <a href="#kontakt" className="button-secondary !border-white/20 !bg-white/10 !text-white backdrop-blur-sm">
                Kontakt
              </a>
            </div>

            <p className="text-lg font-medium text-white/70">
              Váš spoľahlivý dodávateľ od roku 2009.
            </p>
          </div>
        </div>
      </section>

      <section className="shell py-20">
        <Reveal>
          <SectionHeading
            kicker="Partneri"
            title="Naši spokojní klienti"
            description="Budujeme dlhodobé vzťahy s poprednými firmami v odvetví."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-8">
          {clients.map((client, index) => {
            let heightClass = "h-10";
            if (index < 11 && index !== 2) {
              const extraBig = [0, 4, 5, 6, 7].includes(index);
              heightClass = extraBig ? "h-[104px]" : "h-20";
            }
            
            return (
              <Reveal key={client.name} delay={index * 30} className="logo-card">
                <Image 
                  src={client.image} 
                  alt={client.name} 
                  width={320} 
                  height={144} 
                  className={`${heightClass} w-auto object-contain opacity-80 transition duration-500 hover:opacity-100`} 
                />
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
