"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { usePathname } from "next/navigation";
import { servicePages } from "@/data/source-pages";

const navItems = [
  { href: "/", label: "Úvod" },
  { href: "/sluzby", label: "Služby" },
  { href: "/realizacie", label: "Realizácie" },
  { href: "/certifikaty", label: "Certifikáty" },
  { href: "/o-nas", label: "O nás" },
  { href: "/kontakt", label: "Kontakt" },
];

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full max-w-full bg-white/90 border-b border-line backdrop-blur-md">
        <div className="shell flex items-center justify-between gap-8 py-5">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/media/logo.png"
              alt="INREST"
              width={200}
              height={56}
              className="h-9 w-auto md:h-11"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-[12px] font-bold uppercase tracking-[0.18em] text-muted lg:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              const isServices = item.label === "Služby";
              
              return (
                <div key={item.href} className="group relative">
                  <Link 
                    href={item.href} 
                    className={`relative flex items-center gap-1 py-6 transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted"}`}
                  >
                    {item.label}
                    {isServices && (
                      <svg className="h-3 w-3 transition-transform group-hover:rotate-180 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className={`absolute bottom-5 left-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>

                  {isServices && (
                    <div className="invisible absolute left-1/2 top-full w-screen max-w-[100vw] -translate-x-1/2 transform pt-0 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="mt-0 overflow-hidden border-b border-line bg-white/95 shadow-[0_40px_100px_rgba(0,0,0,0.1)] backdrop-blur-xl">
                        <div className="shell py-10 px-4">
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {servicePages.map((service, sidx) => (
                              <Link
                                key={service.slug}
                                href={`/sluzby/${service.slug}`}
                                className="group/item flex flex-col gap-3 p-3 rounded-2xl transition-all hover:bg-zinc-50 border border-transparent hover:border-line/10"
                              >
                                <div className="relative aspect-[16/11] overflow-hidden rounded-xl border border-line/10 bg-zinc-100">
                                  <Image 
                                    src={service.image} 
                                    alt={service.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover/item:scale-110" 
                                    sizes="200px"
                                  />
                                  <div className="absolute inset-0 bg-black/5 transition-opacity group-hover/item:opacity-0" />
                                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-1.5 py-0.5 rounded text-[8px] font-black tracking-widest uppercase text-zinc-900">
                                    0{sidx + 1}
                                  </div>
                                </div>
                                <div className="flex flex-col gap-1.5 px-0.5">
                                  <span className="hover-split-text text-[9px] font-bold uppercase tracking-wider text-muted group-hover/item:text-foreground transition-colors overflow-hidden">
                                    <span className="hover-split-text-inner" data-text={service.title}>
                                      {service.title}
                                    </span>
                                  </span>
                                  <div className="h-[1.5px] w-0 bg-accent transition-all duration-500 group-hover/item:w-4" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="bg-zinc-50/50 px-8 py-6 border-t border-line/10">
                          <div className="shell flex items-center justify-between gap-4">
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted opacity-50">Služby spoločnosti INREST s.r.o. — Komplexné riešenia pre priemysel a logistiku</p>
                            <Link href="/sluzby" className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors whitespace-nowrap">
                              Zobraziť všetky služby
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="button-primary hidden xl:inline-flex !py-2.5 !px-5 !text-[11px]">
              {siteConfig.phone}
            </a>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line/20 bg-zinc-50 lg:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - OUTSIDE of header to avoid backdrop-filter fixed-position bug */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-[110] flex flex-col bg-white p-10 pb-[env(safe-area-inset-bottom,40px)]"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="relative">
                  <Image
                    src="/media/logo.png"
                    alt="INREST"
                    width={140}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="rounded-full border border-line/20 p-3 text-zinc-900 hover:bg-zinc-50 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex flex-col gap-10 overflow-y-auto pr-4 scrollbar-hide pb-10">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  const isServices = item.label === "Služby";
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link 
                        href={item.href}
                        className={`group block text-4xl font-black uppercase tracking-tight ${isActive ? "text-accent" : "text-zinc-300 hover:text-zinc-900 transition-colors"}`}
                      >
                        <span className="hover-split-text leading-tight">
                          <span className="hover-split-text-inner" data-text={item.label}>
                            {item.label}
                          </span>
                        </span>
                      </Link>

                      {isServices && (
                        <div className="mt-8 grid grid-cols-1 gap-6 border-l border-line/20 pl-8">
                          {servicePages.map((service, sidx) => (
                            <motion.div
                              key={service.slug}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + sidx * 0.03 }}
                            >
                              <Link
                                href={`/sluzby/${service.slug}`}
                                className="group/item flex items-center gap-4 py-1"
                              >
                                <div className="relative h-10 w-16 overflow-hidden rounded-lg bg-zinc-100 border border-line/10">
                                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="64px" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-[0.1em] text-muted group-hover/item:text-foreground transition-colors">
                                  {service.title}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto pt-8 border-t border-line/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted mb-4">Kontakt</p>
                <div className="space-y-1">
                  <p className="text-xl font-bold tracking-tight text-zinc-900">{siteConfig.phone}</p>
                  <p className="text-base font-medium text-muted">{siteConfig.email}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

