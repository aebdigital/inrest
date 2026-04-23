"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useCallback } from "react";

export function Lightbox({ isOpen, onClose, images = [], currentIndex = 0, onNext, onPrev, title }) {
  const currentImage = images[currentIndex] || images[0];

  const handleKeyDown = useCallback((e) => {
    if (e.key === "ArrowRight" && onNext) onNext();
    if (e.key === "ArrowLeft" && onPrev) onPrev();
    if (e.key === "Escape") onClose();
  }, [onNext, onPrev, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-colors"
          onClick={onClose}
        >
          {/* Close Button - Top Right */}
          <div className="absolute top-6 right-6 z-[110]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              <X className="h-6 w-6 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Navigation Arrows - Fixed on Sides */}
          {images.length > 1 && (
            <>
              <div className="absolute left-6 top-1/2 z-[110] -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
                  aria-label="Predchádzajúci"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
              </div>
              <div className="absolute right-6 top-1/2 z-[110] -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110 active:scale-95"
                  aria-label="Nasledujúci"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </div>
            </>
          )}

          {/* Main Content */}
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative h-full w-full max-w-6xl p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full flex items-center justify-center">
              <Image
                src={currentImage}
                alt={title || "Zväčšený obrázok"}
                width={1920}
                height={1080}
                className="h-auto max-h-full w-auto object-contain select-none"
                priority
              />
            </div>
            
            {(title || images.length > 1) && (
              <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2 text-center text-white drop-shadow-lg">
                {title && <p className="text-lg font-medium">{title}</p>}
                {images.length > 1 && (
                  <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">
                    {currentIndex + 1} / {images.length}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
