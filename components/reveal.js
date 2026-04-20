"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // On server or before mount, we can decide stay hidden or show. 
  // To avoid shift and blank pages, we show it instantly on server-rendered HTML.
  const isVisible = visible || !mounted;

  return (
    <Tag
      ref={ref}
      className={`${className} reveal ${isVisible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
