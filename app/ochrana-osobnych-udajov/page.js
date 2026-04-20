import { SiteHeader } from "@/components/site-header";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov spoločnosti INREST, s. r. o.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      
      <div className="pt-32 pb-20 overflow-hidden">
        <div className="shell">
          <Reveal>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 uppercase">
                  Ochrana osobných údajov
                </h1>
                <div className="h-1 w-20 bg-accent" />
              </div>

              <section className="space-y-6 text-muted leading-relaxed">
                <div className="bg-zinc-50 p-8 border border-line rounded-2xl space-y-2 text-foreground font-medium">
                  <p>{siteConfig.legalName}</p>
                  <p>Lánska 64/961, 017 01 Považská Bystrica</p>
                  <p>IČO: 44 637 896</p>
                  <p>Konateľ: Martin Fraštík, Pavol Fraštík</p>
                  <p>E-mail: {siteConfig.email}</p>
                  <p>Tel.: {siteConfig.phone}</p>
                </div>

                <p className="text-lg">
                  Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
                </p>

                <div className="space-y-8 pt-6">
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">I. Kontaktný formulár</h2>
                    <p>
                      Na stránke {siteConfig.url.replace("https://", "")} prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 list-accent">
                      <li>Položiť otázku k našim produktom a službám</li>
                      <li>Požiadať o cenovú ponuku</li>
                    </ul>
                    
                    <div className="pt-4 space-y-2">
                      <p className="font-bold text-zinc-900">Rozsah spracúvaných údajov:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Meno a priezvisko</li>
                        <li>E-mailová adresa</li>
                        <li>Telefónne číslo</li>
                      </ul>
                    </div>

                    <div className="pt-4 space-y-2">
                      <p className="font-bold text-zinc-900">Účel spracovania:</p>
                      <p>Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>
                    </div>

                    <div className="pt-4 space-y-2">
                      <p className="font-bold text-zinc-900">Právny základ:</p>
                      <p>Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>
                    </div>

                    <div className="pt-4 space-y-2">
                      <p className="font-bold text-zinc-900">Doba uchovávania:</p>
                      <p>Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">II. Súbory cookies</h2>
                    <p>
                      Na našej webovej stránke používame cookies výlučne na nasledujúce účely:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong className="text-zinc-900">Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                      <li><strong className="text-zinc-900">Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
                    </ul>
                    <div className="pt-4 space-y-2">
                      <p className="font-bold text-zinc-900">Správa súhlasov:</p>
                      <p>Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-wider">III. Práva dotknutej osoby</h2>
                    <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Prístup k osobným údajom, ktoré spracúvame</li>
                      <li>Oprava nepresných alebo neúplných údajov</li>
                      <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                      <li>Obmedzenie spracovania</li>
                      <li>Prenosnosť údajov</li>
                      <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                      <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
                    </ul>
                    <p className="pt-4">
                      V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na <a href={`mailto:${siteConfig.email}`} className="text-accent underline">{siteConfig.email}</a> alebo telefónnom čísle <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-accent underline">{siteConfig.phone}</a>.
                    </p>
                  </div>

                  <p className="pt-10 text-sm italic">
                    Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.
                  </p>
                </div>
              </section>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
