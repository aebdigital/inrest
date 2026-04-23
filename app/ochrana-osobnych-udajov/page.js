import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { SourceCopy, SourceHero } from "@/components/source-layout";
import { absoluteUrl } from "@/lib/site";

export const metadata = {
  title: "Ochrana osobných údajov",
  description: "Informačná povinnosť spoločnosti INREST, s.r.o. podľa čl. 13 GDPR.",
  alternates: {
    canonical: absoluteUrl("/ochrana-osobnych-udajov"),
  },
};

export default function PrivacyPage() {
  return (
    <main className="relative overflow-hidden pb-20">
      <div className="page-orb page-orb-left" aria-hidden="true" />
      <div className="page-orb page-orb-right" aria-hidden="true" />
      <SiteHeader />
      <SourceHero
        title="Ochrana osobných údajov"
        image="/media/hero.jpg"
      />
      <section className="shell">
        <Reveal className="source-panel max-w-4xl mx-auto">
          <div className="space-y-12">
            <div>
              <p className="text-sm font-bold text-accent uppercase tracking-wider mb-2">GDPR - Článok 13</p>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-900 leading-tight">
                INFORMAČNÁ POVINNOSŤ SPOLOČNOSTI INREST, s.r.o.
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Informácie pre našich objednávateľov, dodávateľov, subdodávateľov, zákazníkov a partnerov o tom, ako nakladáme s osobnými údajmi a ako ich chránime pred zneužitím a nedovoleným používaním.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">OCHRANA OSOBNÝCH ÚDAJOV</h3>
                <div className="space-y-4">
                  <SourceCopy>
                    Prehlásenie o spracovaní osobných údajov podľa zákona č.18/2018 Z.z. a podľa nariadenia Európskeho parlamentu a Rady (EU) 2016/679 o ochrane osobných údajov (ďalej len GDPR), ktoré vstúpilo do platnosti 25.5.2018 a nahradilo tým súčasnú platnú legislatívu.
                  </SourceCopy>
                  <SourceCopy>
                    V súlade s čl. 13 GDPR je našou zákonnou povinnosťou Vás informovať, ako spracovávame vaše osobné údaje a aké sú vaše práva.
                  </SourceCopy>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">PREVÁDZKOVATEĽ</h3>
                <div className="p-6 bg-zinc-50 border border-line rounded-xl space-y-1 text-zinc-900 font-medium">
                  <p>INREST, s.r.o.</p>
                  <p>Lánska 64/961</p>
                  <p>017 01 Považská Bystrica</p>
                  <p>IČO: 44 637 896</p>
                  <p>zapísaný v Obchodnom registri Okresného súdu Trenčín, 21533/R</p>
                  <p className="pt-2 text-accent">kontaktné údaje: inrestsro@inrestsro.sk</p>
                </div>
                <p className="mt-4 text-sm text-muted italic">Určujeme, ako budú vaše osobné údaje spracovávané a za akým účelom.</p>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">ROZSAH ZPRACOVANIA OSOBNÝCH ÚDAJOV</h3>
                <div className="space-y-4">
                  <SourceCopy>
                    Osobné údaje sú spracované v rozsahu, v akom ich nám príslušný subjekt osobných údajov poskytol, a to priamo v súvislosti s uzatvorením zmluvného vzťahu, s doručovaním tovaru alebo v rozsahu iného právneho vzťahu s prevádzkovateľom, alebo ktoré prevádzkovateľ zhromaždí inak a spracováva ich v súlade s platnými právnymi predpismi, alebo k plneniu zákonných povinností prevádzkovateľa.
                  </SourceCopy>
                  <div className="pt-4 space-y-4">
                    <h4 className="font-bold text-zinc-900 uppercase text-sm">Spôsob spracovania ochrany osobných údajov</h4>
                    <SourceCopy>
                      Spracovanie je realizované jednotlivými poverenými zamestnancami. K spracovaniu dochádza prostredníctvom výpočtovej techniky a manuálnym spôsobom v listinnej podobe za dodržania všetkých bezpečnostných zásad pre správu a spracovanie osobných údajov. Za týmto účelom sme prijali technicko-organizačné opatrenia k zaisteniu ochrany osobných údajov, aby nemohlo dôjsť k neoprávnenému alebo náhodnému prístupu k osobným údajom, a ich neoprávneným prenosom, k ich neoprávnenému spracovaniu, ako aj k ich inému nechcenému zneužitiu. Naši zamestnanci v pracovnoprávnom vzťahu majú za týmto účelom uzatvorenú Zmluvu o mlčanlivosti.
                    </SourceCopy>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">DOBA SPRACOVANIA OSOBNÝCH ÚDAJOV</h3>
                <div className="space-y-4">
                  <SourceCopy>
                    V súlade s lehotami uvedenými v príslušných zmluvách a podľa príslušných právnych predpisov (na uchovávanie osobných údajov, ktoré o Vás spracúvame sa vzťahuje zákon č. 395/2002 Z. z. o archívoch a registratúrach a osobitné zákony) ide o dobu nevyhnutne nutnú k zaisteniu práv a povinností plynúcich jak zo záväzkových vzťahov, tak aj z príslušných právnych predpisov.
                  </SourceCopy>
                  <div className="grid sm:grid-cols-2 gap-6 pt-6">
                    <div className="p-5 bg-zinc-50 border border-line rounded-xl">
                      <p className="font-bold text-zinc-900 text-sm uppercase mb-2">Poskytnutie mimo EÚ?</p>
                      <p className="text-muted text-sm leading-relaxed">Prenos osobných údajov do tretej krajiny alebo medzinárodnej organizácie sa neuskutočňuje.</p>
                    </div>
                    <div className="p-5 bg-zinc-50 border border-line rounded-xl">
                      <p className="font-bold text-zinc-900 text-sm uppercase mb-2">Automatizované rozhodovanie?</p>
                      <p className="text-muted text-sm leading-relaxed">Osobné údaje nebudú použité na automatizované individuálne rozhodovanie vrátane profilovania.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">PRE KTORÉ ÚČELY OSOBNÉ ÚDAJE SPRACOVÁVAME?</h3>
                <div className="space-y-4">
                  <SourceCopy>
                    Vaše osobné údaje budú spracúvané na základe osobitných právnych predpisov a účelov, ktoré sú stanovené prevádzkovateľom.
                  </SourceCopy>
                  <SourceCopy>
                    Podrobnejšie informácie o účeloch spracúvania vašich osobných údajov, právnych základoch a dobe uchovávania sú uvedené v Záznamoch o spracovateľských činnostiach spoločnosti.
                  </SourceCopy>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">PRE OBCHODNÉ ÚČELY (Právny titul: Plnenie zmluvy)</h3>
                <div className="space-y-6">
                  <SourceCopy>
                    Ak sa rozhodnete využiť naše služby a stať sa našim klientom alebo dodávateľom, to znamená, ak uzatvoríte s nami obchodnú zmluvu, evidujeme vaše kontaktné údaje. Zdroje osobných údajov sú zmieňované v predchádzajúcom odstavci.
                  </SourceCopy>
                  <div className="space-y-3">
                    <p className="font-bold text-zinc-900 uppercase text-xs tracking-wider">Spracovávané údaje:</p>
                    <p className="text-sm text-muted leading-relaxed">
                      Názov firmy (podľa Obchodného alebo Živnostenského registra), údaje kontaktnej osoby v prípade firmy (v rozsahu meno a priezvisko, e-mail, telefónne číslo, funkčné zaradenie), meno a priezvisko fyzickej osoby, adresa, e-mail, telefónne číslo, účtovné a platobné údaje (IČO, DIČ, číslo účtu), adresa pre doručenie.
                    </p>
                  </div>
                  <SourceCopy>
                    Údaje sú nevyhnutné pre vašu identifikáciu ako kupujúceho klienta alebo dodávateľa pre realizáciu samotného dodania predmetu zmluvy a k realizácii operácií nevyhnutných pre vystavenie daňových dokladov a identifikácii vašich bezhotovostných platieb. Vaše údaje, budeme spracovávať po dobu realizácie predmetu platnej zmluvy, a podľa zákona ďalších desať rokov odo dňa jej skončenia.
                  </SourceCopy>

                  <div className="overflow-x-auto pt-4">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="border-b border-line">
                          <th className="py-3 font-bold uppercase text-zinc-900">Účel</th>
                          <th className="py-3 font-bold uppercase text-zinc-900 pl-4">Právny základ</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        <tr>
                          <td className="py-4 pr-4">splnenie zákonných povinností na úseky daní a účtovníctva</td>
                          <td className="py-4 pl-4 text-muted">osobitné zákony (najmä zákon o dani z príjmov, zákon o DPH, zákon o účtovníctve)</td>
                        </tr>
                        <tr>
                          <td className="py-4 pr-4">splnenie zmluvnej povinnosti (plnenie zmluvy, doručenie tovaru alebo poskytnutie služby objednávateľom, zákazníkovi), plnenie činností dotknutej osoby na stavbe</td>
                          <td className="py-4 pl-4 text-muted">zmluva medzi Prevádzkovateľom a dotknutou osobou, zmluva o dielo</td>
                        </tr>
                        <tr>
                          <td className="py-4 pr-4">marketing (zasielanie informácií o produktoch a tovaroch Prevádzkovateľa)</td>
                          <td className="py-4 pl-4 text-muted">oprávnený záujem</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">Spracovanie údajov WEB stránka</h3>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-bold text-zinc-900 uppercase text-sm">Rozsah spracovania osobných údajov</h4>
                    <SourceCopy>
                      Spracujeme osobné údaje užívateľov našej webovej stránky zásadne iba vtedy, pokiaľ je to potrebné na prípravu funkčnej webovej stránky, ako aj našich obsahov a výkonov. Spracovanie osobných údajov užívateľov sa uskutočňuje pravidelne iba po súhlase užívateľa. Výnimka platí v takých prípadoch, v ktorých predchádzajúce vyžiadanie súhlasu zo skutočných dôvodov nie je možné a spracovanie údajov je dovolené prostredníctvom zákonných predpisov.
                    </SourceCopy>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-zinc-900 uppercase text-sm">Právny základ pre spracovanie osobných údajov</h4>
                    <ul className="space-y-3 text-sm text-muted list-disc pl-4">
                      <li>Pokiaľ pre procesy spracovania osobných údajov vyžiadate súhlas dotknutej osoby, slúži čl. 6 ods. 1 písm. a základného nariadenia EÚ o ochrane údajov (GDPR) ako právny základ.</li>
                      <li>Pri spracovaní osobných údajov, ktoré sú potrebné na splnenie zmluvy, ktorej zmluvnou stranou je dotknutá osoba, slúži čl. 6 ods. 1 písm. b GDPR ako právny základ. To platí aj pre procesy spracovania, ktoré sú potrebné na realizáciu predzmluvných opatrení.</li>
                      <li>Pokiaľ je spracovanie osobných údajov potrebné na splnenie právnej povinnosti, ktorá podlieha nášmu podniku, slúži čl. 6 ods. 1 písm. c GDPR ako právny. základ.</li>
                      <li>Pre prípad, že životne dôležité záujmy dotknutej osoby alebo inej fyzickej osoby vyžaduje spracovanie osobných údajov, čl. 6 ods. 1 písm. d GDPR slúži ako právny základ.</li>
                      <li>Ak je spracovanie potrebné na zachovanie oprávneného záujmu nášho podniku alebo tretej osoby a záujmy, základné práva a základné slobody neprevažujú vyššie uvedený záujem, tak čl. 6 ods. 1 písm. f GDPR slúži ako právny základ pre spracovanie.</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-zinc-900 uppercase text-sm">Účel spracovania údajov</h4>
                    <SourceCopy>
                      Dočasné uloženie IP-adresy prostredníctvom systému je potrebné, aby bolo umožnené vydanie webovej stránky na počítač užívateľa. Na tento účel musí IP-adresa užívateľa zostať na dobu sedenia uložená.
                    </SourceCopy>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-zinc-900 uppercase text-sm">Vymazanie údajov a doba uloženia</h4>
                    <SourceCopy>
                      Osobné údaje dotknutej osoby sa vymažú alebo zablokujú, hneď ako odpadne účel uloženia. Uloženie sa okrem toho môže uskutočniť vtedy, keď to bolo plánované prostredníctvom európskeho alebo národného zákonodarstva v právnych nariadeniach Únie, zákonoch alebo ostatných predpisoch, ktorým podlieha zodpovedná osoba. Zablokovanie alebo vymazanie údajov sa uskutoční tiež vtedy, keď uplynie lehota uloženia, predpísaná uvedenými normami, iba vtedy nie, ak existuje potrebnosť ďalšieho uloženia údajov pre uzavretie zmluvy alebo plnenie zmluvy.
                    </SourceCopy>
                  </div>
                  <div className="space-y-3 pt-4 p-6 bg-zinc-50 border border-line rounded-xl">
                    <h4 className="font-bold text-zinc-900 uppercase text-sm mb-2">Cookies</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      Naša webová stránka používa cookies. Ak odsúhlasíte súbory cookies v rámci web stránok, tieto súbory sa môžu využívať na nasledovné účely: zlepšovanie spôsobu fungovania našich webstránok a zlepšovanie výkonu našich webstránok.
                    </p>
                    <p className="pt-2 text-sm text-muted leading-relaxed">
                      Pomocou nastavení vášho prehliadača môžete prijať alebo odmietnuť nové, prípadne odstrániť už existujúce súbory cookies. Podrobnejšie informácie nájdete v pomocníkovi vášho prehliadača. Ak sa rozhodnete cookies zakázať, nebudete môcť naplno využívať všetky funkcie našich webstránok.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">VAŠE PRÁVA AKO SUBJEKTU OSOBNÝCH ÚDAJOV</h3>
                <div className="space-y-4">
                  <SourceCopy>
                    Pokiaľ ako prevádzkovateľ spracovávame Vaše osobné údaje, máte právo sa na nás kedykoľvek obrátiť a uplatniť právo na prístup a opravu údajov, ktoré spracovávame.
                  </SourceCopy>
                  <SourceCopy>
                    Ak máte pochybnosti o tom, že Vaše údaje spracovávame v súlade so zákonom, môžete nás požiadať o vysvetlenie, nebo o nápravu závadného stavu, najmä požadovať blokovanie, opravu, doplnenie alebo likvidáciu osobných údajov, prípadne kompletný výmaz týchto údajov.
                  </SourceCopy>
                  <SourceCopy>
                    Máte právo podať aj sťažnosť u dozorného orgánu, ktorým je Úrad na ochranu osobných údajov Slovenskej Republiky.
                  </SourceCopy>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">OCHRANA A ZABEZPEČENIE VAŠICH ÚDAJOV</h3>
                <div className="space-y-4">
                  <SourceCopy>
                    S Vašimi osobnými údajmi, budeme nakladať zodpovedne a v súlade s platnou slovenskou a európskou legislatívou. Pre spracovanie osobných údajov používame automatizované, ale aj neautomatizované prostriedky. Všetky údaje sú uložené na zabezpečených serveroch uložených v Európskej únii.
                  </SourceCopy>
                  <SourceCopy>
                    Osobné dáta sú chránené v maximálnej možnej miere pomocou moderných technológií, ktoré zodpovedajú stupňu technického rozvoja, a miere rizika zneužitia.
                  </SourceCopy>
                  <SourceCopy>
                    Dobrovoľne sme sa zaviazali rovnako ako aj naši spolupracovníci, že budeme udržiavať technické a organizačné opatrenia, ktoré zamedzujú zneužitiu, poškodeniu alebo zničeniu osobných údajov a to v celom reťazci, počas celej doby spracovávania a skladovania až po vymazanie po vypršaní súhlasu, alebo zákonnej doby skladovania údajov.
                  </SourceCopy>
                  <SourceCopy>
                    Osobné údaje, ktoré spracovávame ako prevádzkovateľ, môžeme sprístupňovať výhradne spolupracovníkom a spracovateľom, ktorí vykonávajú administratívnu a technickú podporu pri prevádzke IT. Iným subjektom, je umožnený prístup iba z dôvodov plnenia zákonných povinností. Máme zákonnú povinnosť poskytnúť Vaše osobné údaje pri kontrole, dozornej činnosti alebo na žiadosť oprávnených orgánov štátu alebo inštitúcií, ak to vyplýva z osobitných predpisov.
                  </SourceCopy>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">PRÍJEMCOVIA OSOBNÝCH ÚDAJOV</h3>
                <div className="space-y-4">
                  <SourceCopy>
                    Prevádzkovateľ osobné údaje Dotknutých osôb poskytuje nasledovným kategóriám príjemcov:
                  </SourceCopy>
                  <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted list-disc pl-4">
                    <li>poskytovateľ účtovných služieb</li>
                    <li>poskytovateľ doručovacích služieb</li>
                    <li>audítorská spoločnosť</li>
                    <li>poskytovateľ IT podpory</li>
                    <li>daňový úrad</li>
                    <li>súd, advokát, exekútor, inkasná spoločnosť</li>
                    <li>dopravca</li>
                    <li>iné orgány verejnej moci</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-bold uppercase text-zinc-900 mb-6 border-b border-line pb-2">PODROBNÝ PREHĽAD VAŠICH PRÁV</h3>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">Odvolať súhlas</h4>
                    <p className="text-sm text-muted leading-relaxed">V prípadoch, kedy Vaše osobné údaje spracúvame na základe Vášho súhlasu, máte právo tento súhlas kedykoľvek odvolať. Odvolanie súhlasu nemá vplyv na zákonnosť spracúvania pred jeho odvolaním.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">Právo na prístup</h4>
                    <p className="text-sm text-muted leading-relaxed">Máte právo na poskytnutie kópie osobných údajov, ktoré o Vás máme k dispozícii, ako aj na informácie o tom, ako Vaše osobné údaje používame.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">Právo na opravu</h4>
                    <p className="text-sm text-muted leading-relaxed">Prijímame primerané opatrenia, aby sme zabezpečili presnosť a aktuálnosť informácií. Ak sú údaje nepresné, máte právo žiadať ich opravu.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">Právo na výmaz (na zabudnutie)</h4>
                    <p className="text-sm text-muted leading-relaxed">Máte právo nás požiadať o vymazanie údajov, ak už nie sú potrebné na naplnenie pôvodného účelu. Každá žiadosť sa posudzuje individuálne.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">Právo na obmedzenie spracúvania</h4>
                    <p className="text-sm text-muted leading-relaxed">Za určitých okolností ste oprávnený nás požiadať, aby sme prestali používať Vaše osobné údaje (napr. pri pochybnosti o ich presnosti).</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">Právo na prenosnosť údajov</h4>
                    <p className="text-sm text-muted leading-relaxed">Máte právo požiadať nás o prenos osobných údajov na inú tretiu stranu podľa Vášho výberu (týka sa údajov na základe súhlasu alebo zmluvy).</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">Právo namietať</h4>
                    <p className="text-sm text-muted leading-relaxed">Máte právo namietať voči spracúvaniu údajov, ktoré je založené na našich legitímnych oprávnených záujmoch.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900 text-sm uppercase">Právo podať návrh na začatie konania</h4>
                    <p className="text-sm text-muted leading-relaxed">Ak sa domnievate, že Vaše údaje spracúvame nezákonne, môžete podať sťažnosť na Úrad na ochranu osobných údajov SR.</p>
                  </div>
                </div>
              </section>

              <section className="pt-12 border-t border-line">
                <div className="grid sm:grid-cols-2 gap-12 items-end">
                  <div className="space-y-6">
                    <div className="space-y-1 text-sm text-zinc-900 font-bold uppercase tracking-tight">
                      <p>INREST, s.r.o.</p>
                      <p>Lánska 64/961</p>
                      <p>017 01 Považská Bystrica</p>
                      <p>IČO: 44 637 896</p>
                      <p>IČ DPH: SK20 22 80 61 48</p>
                    </div>
                    <div className="text-xs text-muted leading-relaxed">
                      <p>zapísaný v Obchodnom registri Okresného súdu Trenčín, 21533/R</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-block border-b border-zinc-900 pb-2 mb-4 w-48 h-12" />
                    <p className="text-sm font-bold text-zinc-900 uppercase">Pavol Fraštík</p>
                    <p className="text-[10px] text-muted uppercase tracking-widest">konateľ spoločnosti</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
