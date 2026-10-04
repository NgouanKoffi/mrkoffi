"use client";

import { useCallback, useEffect, useState } from "react";

type Affiche = { src: string; alt: string };

// Mur d'affiches + visionneuse plein écran (Échap, flèches, clic hors image).
export default function Wall({ items }: { items: Affiche[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback(
    (d: number) => setOpen((v) => (v === null ? v : (v + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, move]);

  return (
    <>
      <div className="wall">
        {items.map((a, k) => (
          <button key={a.src} type="button" className="wall-item" onClick={() => setOpen(k)} aria-label={`Agrandir : ${a.alt}`}>
            <img src={a.src} alt={a.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[open].alt} onClick={() => setOpen(null)}>
          <button type="button" className="lb-close" aria-label="Fermer" onClick={() => setOpen(null)}>
            ×
          </button>
          <button
            type="button"
            className="lb-nav lb-prev"
            aria-label="Affiche précédente"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
          >
            ‹
          </button>
          <img src={items[open].src} alt={items[open].alt} onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            className="lb-nav lb-next"
            aria-label="Affiche suivante"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
