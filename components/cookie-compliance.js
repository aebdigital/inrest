"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Shield, Settings, Check } from "lucide-react";

export function CookieCompliance() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");
    if (!saved) {
      setShowBanner(true);
    } else {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed === "object" && parsed !== null) {
          setPreferences(parsed);
        } else {
          // If it's a string like "all" or other non-object, clear it
          localStorage.removeItem("cookie-consent");
          setShowBanner(true);
        }
      } catch (e) {
        // Silently clear invalid JSON and show banner
        localStorage.removeItem("cookie-consent");
        setShowBanner(true);
      }
    }

    // Listen for custom event to open modal from footer
    const handleOpenSettings = () => setShowModal(true);
    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const saveConsent = (prefs) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowModal(false);
  };

  const acceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    saveConsent(all);
  };

  const declineAll = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    saveConsent(essentialOnly);
  };

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:w-[420px]"
          >
            <div className="overflow-hidden rounded-3xl border border-line bg-white/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-black uppercase text-zinc-900">Súkromie a Cookies</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      Používame cookies na zlepšenie vášho zážitku. Niektoré sú nevyhnutné, iné nám pomáhajú lepšie porozumieť vášmu dopytu.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={acceptAll}
                      className="w-full rounded-full bg-accent py-2.5 text-[10px] font-bold uppercase text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Prijať všetko
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowModal(true)}
                        className="flex-1 rounded-full border border-line bg-white py-2.5 text-[10px] font-bold uppercase text-muted transition-colors hover:bg-zinc-50"
                      >
                        Nastavenia
                      </button>
                      <button
                        onClick={declineAll}
                        className="flex-1 rounded-full border border-line bg-white py-2.5 text-[10px] font-bold uppercase text-muted transition-colors hover:bg-zinc-50"
                      >
                        Odmietnuť
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-accent" />
                    <h2 className="text-xl font-bold uppercase tracking-tight text-zinc-900">Nastavenia Cookies</h2>
                  </div>
                  <button onClick={() => setShowModal(false)} className="rounded-full p-2 transition-colors hover:bg-zinc-100">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Category: Essential */}
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-line p-5">
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold uppercase text-zinc-900">Nevyhnutné (Vždy aktívne)</p>
                      <p className="text-[11px] leading-relaxed text-muted">Zabezpečujú stabilitu, bezpečnosť a základné funkcie webu.</p>
                    </div>
                    <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full bg-zinc-200">
                      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </div>
                  </div>

                  {/* Category: Analytics */}
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-line p-5">
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold uppercase text-zinc-900">Štatistické / Analytické</p>
                      <p className="text-[11px] leading-relaxed text-muted">Umožňujú nám sledovať návštevnosť a optimalizovať obsah pre klientov.</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${preferences.analytics ? "bg-accent" : "bg-zinc-200"}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${preferences.analytics ? "translate-x-6" : "translate-x-1"}`} />
                    </button>
                  </div>

                  {/* Category: Marketing */}
                  <div className="flex items-start justify-between gap-4 rounded-2xl border border-line p-5">
                    <div className="space-y-1">
                      <p className="text-[11px] font-bold uppercase text-zinc-900">Marketingové</p>
                      <p className="text-[11px] leading-relaxed text-muted">Personalizácia dopytov a spätné oslovenie pri vašich požiadavkách.</p>
                    </div>
                    <button
                      onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${preferences.marketing ? "bg-accent" : "bg-zinc-200"}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${preferences.marketing ? "translate-x-6" : "translate-x-1"}`} />
                    </button>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  <button
                    onClick={() => saveConsent(preferences)}
                    className="w-full rounded-full bg-zinc-900 py-3.5 text-[11px] font-bold uppercase text-white transition-transform hover:scale-[1.01]"
                  >
                    Uložiť nastavenia
                  </button>
                  <button
                    onClick={acceptAll}
                    className="w-full rounded-full bg-accent/10 py-3.5 text-[11px] font-bold uppercase text-accent transition-colors hover:bg-accent hover:text-white"
                  >
                    Povoliť všetky
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  }
}
