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

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 border-b border-line backdrop-blur-md">
      <div className="shell flex items-center justify-between gap-8 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/media/logo.png"
            alt="INREST"
            width={200}
            height={56}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.14em] text-muted lg:flex">
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

        <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="button-primary hidden sm:inline-flex !py-3 !px-6">
          {siteConfig.phone}
        </a>
      </div>
    </header>
  );
}

