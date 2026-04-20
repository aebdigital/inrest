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
                    <div className="invisible absolute left-1/2 top-full w-[calc(min(90vw,1200px))] -translate-x-1/2 transform pt-0 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="mt-4 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0f172a] shadow-[0_40px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1 p-10">
                          {servicePages.map((service, sidx) => (
                            <Link
                              key={service.slug}
                              href={`/sluzby/${service.slug}`}
                              className="group/item flex items-center justify-between border-b border-white/5 py-4 transition-colors hover:border-accent/40"
                            >
                              <div className="flex flex-col">
                                <span className="mb-0.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
                                  0{sidx + 1}
                                </span>
                                <span className="hover-split-text text-[13px] font-bold tracking-tight text-white/80">
                                  <span className="hover-split-text-inner" data-text={service.title}>
                                    {service.title}
                                  </span>
                                </span>
                              </div>
                              <div className="h-0.5 w-0 bg-accent transition-all duration-500 group-hover/item:w-6" />
                            </Link>
                          ))}
                        </div>
                        <div className="bg-white/[0.03] px-10 py-6 border-t border-white/5 flex items-center justify-between">
                          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">Kompletné portfólio služieb spoločnosti INREST</p>
                          <Link href="/sluzby" className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent hover:text-white transition-colors">
                            Všetky služby
                          </Link>
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
              className="fixed inset-0 z-[110] flex flex-col bg-[#0f172a] p-10 pb-[env(safe-area-inset-bottom,40px)]"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="relative">
                  <Image
                    src="/media/logo.png"
                    alt="INREST"
                    width={140}
                    height={40}
                    className="h-8 w-auto invert brightness-200"
                  />
                </div>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="rounded-full border border-white/20 p-3 text-white hover:bg-white/10 transition-colors"
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
                        className={`group block text-4xl font-black uppercase tracking-tight ${isActive ? "text-accent" : "text-white/40 hover:text-white transition-colors"}`}
                      >
                        <span className="hover-split-text leading-tight">
                          <span className="hover-split-text-inner" data-text={item.label}>
                            {item.label}
                          </span>
                        </span>
                      </Link>

                      {isServices && (
                        <div className="mt-8 grid grid-cols-1 gap-4 border-l border-white/10 pl-8">
                          {servicePages.map((service, sidx) => (
                            <motion.div
                              key={service.slug}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + sidx * 0.03 }}
                            >
                              <Link
                                href={`/sluzby/${service.slug}`}
                                className="group/item flex items-center justify-between py-1 text-sm font-bold uppercase tracking-[0.2em] text-white/50 hover:text-accent transition-colors"
                              >
                                <span className="hover-split-text">
                                  <span className="hover-split-text-inner" data-text={service.title}>
                                    {service.title}
                                  </span>
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

              <div className="mt-auto pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 mb-4">Kontakt</p>
                <div className="space-y-1">
                  <p className="text-xl font-bold tracking-tight text-white">{siteConfig.phone}</p>
                  <p className="text-base font-medium text-white/40">{siteConfig.email}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

