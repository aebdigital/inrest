import { contacts } from "@/data/site-content";
import { Reveal } from "./reveal";

export function SiteFooter() {
  return (
    <footer id="kontakt" className="border-t border-line bg-zinc-50/50 py-16 mt-20">
      <div className="shell">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          {/* Main Info */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal>
              <p className="font-bold uppercase tracking-widest text-[14px] text-muted mb-4 text-[var(--accent)]">INREST, s. r. o.</p>
              <div className="text-sm leading-relaxed text-muted space-y-2">
                <p>Lánska 64/961, 017 01 Považská Bystrica</p>
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <p><span className="text-foreground/60">IČO:</span> 44 637 896</p>
                  <p><span className="text-foreground/60">IČ DPH:</span> SK2022806148</p>
                </div>
                <p><span className="text-foreground/60">Banka:</span> Tatra Banka, a.s.</p>
                <p className="text-sm tracking-tight text-foreground/80">IBAN: SK66 1100 0000 0029 4646 1034</p>
              </div>
            </Reveal>
          </div>

          {/* Locations */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 gap-8 lg:gap-4">
            <Reveal delay={100} className="space-y-4">
              <p className="section-kicker !text-[11px]">Prevádzka</p>
              <div className="text-sm text-muted space-y-1">
                <p>Robotnícka 258</p>
                <p>017 01 Považská Bystrica</p>
                <a href="tel:+421908264970" className="block mt-2 font-medium text-foreground hover:text-[var(--accent)] transition">+421 908 264 970</a>
              </div>
            </Reveal>
            <Reveal delay={150} className="space-y-4">
              <p className="section-kicker !text-[11px]">Výroba</p>
              <div className="text-sm text-muted space-y-1">
                <p>Dolný Lieskov 1262</p>
                <p>018 21 Dolný Lieskov</p>
              </div>
            </Reveal>
          </div>

          {/* People */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 gap-8 lg:gap-4 border-t lg:border-t-0 lg:border-l border-line pt-8 lg:pt-0 lg:pl-8">
            {contacts.map((person, i) => (
              <Reveal key={person.email} delay={200 + (i * 50)} className="space-y-3">
                <p className="text-[10px] uppercase tracking-widest text-muted/60">{person.role}</p>
                <p className="text-base font-semibold">{person.name}</p>
                <div className="text-[13px] text-muted space-y-1 flex flex-col">
                  <a href={`tel:${person.phone.replace(/\s+/g, "")}`} className="hover:text-foreground">{person.phone}</a>
                  <a href={`mailto:${person.email}`} className="hover:text-foreground">{person.email}</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-line pt-8 text-[11px] uppercase tracking-[0.14em] text-muted/60">
          <p>© {new Date().getFullYear()} INREST s.r.o. Všetky práva vyhradené.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Ochrana údajov</a>
            <a href="#" className="hover:text-foreground transition-colors">Obchodné podmienky</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
