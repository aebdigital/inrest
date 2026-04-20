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
                    <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 transform pt-0 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="mt-2 overflow-hidden rounded-2xl border border-line/20 bg-white shadow-2xl">
                        <div className="bg-zinc-50/50 p-2">
                          {servicePages.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/sluzby/${service.slug}`}
                              className="group/item flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-white hover:shadow-sm"
                            >
                              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-zinc-200">
                                <Image 
                                  src={service.image} 
                                  alt={service.title} 
                                  fill 
                                  className="object-cover transition-transform duration-500 group-hover/item:scale-110" 
                                  sizes="40px"
                                />
                              </div>
                              <span className="text-[11px] font-bold tracking-wider text-muted transition-colors group-hover/item:text-foreground line-clamp-1">
                                {service.title}
                              </span>
                            </Link>
                          ))}
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
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              exit={{ y: "105%" }}
              transition={{ 
                type: "spring", 
                damping: 38, 
                stiffness: 400,
                mass: 1
              }}
              className="fixed bottom-0 left-0 right-0 z-[110] h-[70dvh] bg-white rounded-t-[3rem] shadow-[0_-15px_60px_rgba(0,0,0,0.2)] flex flex-col p-10 pb-[env(safe-area-inset-bottom,40px)]"
            >
              <div className="mx-auto mb-10 h-1.5 w-16 flex-shrink-0 rounded-full bg-zinc-200" />
              
              <div className="flex flex-col gap-6 overflow-y-auto pr-4 scrollbar-hide pb-10">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  const isServices = item.label === "Služby";
                  
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.04 }}
                    >
                      <Link 
                        href={item.href}
                        className={`text-3xl font-extrabold tracking-tight ${isActive ? "text-accent" : "text-zinc-900"}`}
                      >
                        {item.label}
                      </Link>

                      {isServices && (
                        <div className="mt-4 grid grid-cols-1 gap-2 border-l border-line/20 pl-6">
                          {servicePages.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/sluzby/${service.slug}`}
                              className="py-1.5 text-sm font-bold tracking-wider text-muted hover:text-foreground"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-auto pt-8 border-t border-line/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-4 opacity-50">Kontakt</p>
                <div className="space-y-1">
                  <p className="text-lg font-bold tracking-tight text-zinc-900">{siteConfig.email}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

