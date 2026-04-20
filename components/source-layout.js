import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

export function SourceCopy({ children, className = "" }) {
  return <div className={`source-copy ${className}`}>{children}</div>;
}

export function SourceHero({ title, image }) {
  return (
    <section className="relative h-[30vh] min-h-[260px] w-full overflow-hidden">
      <div className="absolute inset-0 z-0 transition-transform duration-700 hover:scale-105">
        <Image 
          src={image || "/media/hero.jpg"} 
          alt={title} 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="shell relative z-10 flex h-full items-end pb-12">
        <Reveal>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

export function SidebarShell({ kicker, title, description, image, items, activeSlug, basePath, children }) {
  return (
    <main className="relative pb-20">
      <div className="page-orb page-orb-left" aria-hidden="true" />
      <div className="page-orb page-orb-right" aria-hidden="true" />
      <SiteHeader />
      <SourceHero title={title} image={image} />

      <section className="shell py-20">
        <div className="sidebar-grid">
          <aside className="source-sidebar mb-12 lg:mb-0">
            <nav className="grid gap-3 pt-12">
              {items.map((item) => {
                const href = item.slug ? `${basePath}/${item.slug}` : basePath;
                const isActive = activeSlug === item.slug;
                
                // Stable "random" image from the category's projects
                const previewImage = item.projects?.[0]?.gallery?.[0] || item.image || "/media/hero.jpg";

                return (
                  <Link 
                    key={item.slug} 
                    href={href} 
                    className={`group relative flex overflow-hidden border border-line/30 rounded-xl transition-all hover:border-accent/40 ${isActive ? "border-accent/50 shadow-md" : ""}`}
                  >
                    <div className="relative aspect-[16/4] w-full overflow-hidden bg-black">
                      <Image 
                        src={previewImage} 
                        alt={item.title} 
                        fill 
                        className={`object-cover transition-all duration-700 ${isActive ? "grayscale-0 scale-105" : "grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110"}`} 
                        sizes="(max-width: 1024px) 100vw, 300px"
                        priority={isActive}
                      />
                      <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-black/20" : "bg-black/50 group-hover:bg-black/30"}`} />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-2">
                        <span className={`text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 ${isActive ? "opacity-100 scale-105" : "opacity-90 group-hover:opacity-100 group-hover:scale-110"}`}>
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </aside>

          <div className="grid gap-6 min-h-[60vh]">{children}</div>
        </div>
      </section>
    </main>
  );
}
