"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { usePathname } from "next/navigation";

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
    <header className="fixed top-0 z-50 w-full bg-white/90 border-b border-line backdrop-blur-md">
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
            
            return (
              <Link 
                key={item.href} 
                href={item.href} 
                className={`group relative py-1 transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted"}`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] transition-all duration-300 ease-out ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="button-primary hidden lg:inline-flex !py-2.5 !px-5 !text-[11px]">
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 h-[70vh] bg-white rounded-t-[2.5rem] shadow-2xl z-55 flex flex-col p-8 lg:hidden"
            >
              <div className="mx-auto mb-8 h-1.5 w-12 rounded-full bg-zinc-200" />
              
              <div className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      className={`text-2xl font-bold tracking-tight ${isActive ? "text-accent" : "text-zinc-900"}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-8 border-t border-line/40">
                <p className="text-xs font-bold uppercase tracking-widest text-muted mb-4">Kontakt</p>
                <div className="space-y-1">
                  <p className="font-bold">{siteConfig.phone}</p>
                  <p className="text-muted">{siteConfig.email}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

