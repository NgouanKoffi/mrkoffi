"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Enveloppe chaque mot d'un élément `.split` dans <span class="w"><span>mot</span></span>. */
function wrapWords(el: HTMLElement) {
  if (el.dataset.split) return;
  el.dataset.split = "1";
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);
  nodes.forEach((t) => {
    const parts = t.textContent!.split(/(\s+)/);
    const frag = document.createDocumentFragment();
    parts.forEach((w) => {
      if (!w) return;
      if (/^\s+$/.test(w)) {
        frag.appendChild(document.createTextNode(" "));
        return;
      }
      const outer = document.createElement("span");
      outer.className = "w";
      const inner = document.createElement("span");
      inner.textContent = w;
      outer.appendChild(inner);
      frag.appendChild(outer);
    });
    t.parentNode!.replaceChild(frag, t);
  });
}

export function useScrollFx() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll<HTMLElement>(".split").forEach(wrapWords);

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        desktop: "(min-width: 1000px)",
      },
      (ctx) => {
        const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean };
        if (!motion) {
          document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => (el.textContent = el.dataset.count!));
          return;
        }

        /* ---- titres : mot par mot ---- */
        document.querySelectorAll<HTMLElement>(".split").forEach((el) => {
          gsap.from(el.querySelectorAll(".w > span"), {
            yPercent: 115,
            rotate: 3,
            duration: 1,
            ease: "power4.out",
            stagger: 0.035,
            scrollTrigger: { trigger: el, start: "top 90%", end: "bottom top", toggleActions: "play reset restart reverse" },
          });
        });

        /* ---- fade-up générique ---- */
        document.querySelectorAll<HTMLElement>(".up").forEach((el) => {
          gsap.from(el, {
            y: 36,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: Number(el.dataset.delay ?? 0),
            scrollTrigger: { trigger: el, start: "top 92%", end: "bottom top", toggleActions: "play reset restart reverse" },
          });
        });

        /* ---- parallaxe : data-py="60" → de -60 à +60 px sur la traversée de la section ---- */
        document.querySelectorAll<HTMLElement>("[data-py]").forEach((el) => {
          const d = Number(el.dataset.py) * (desktop ? 1 : 0.55);
          const root = el.closest<HTMLElement>("[data-py-root]") ?? el;
          gsap.fromTo(
            el,
            { y: -d },
            { y: d, ease: "none", scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 0.8 } },
          );
        });

        /* ---- hero : photo qui recule, texte qui s'efface ---- */
        const hero = document.querySelector<HTMLElement>(".hero");
        if (hero) {
          gsap.to(".hero-photo", {
            yPercent: 4,
            scale: 1.03,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
          });
          gsap.to(".hero-glow", {
            scale: 1.35,
            opacity: 0.6,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
          });
          if (desktop) {
            gsap.to(".hero-copy", {
              y: -70,
              opacity: 0,
              ease: "none",
              scrollTrigger: { trigger: hero, start: "40% top", end: "bottom top", scrub: true },
            });
          }
        }

        /* ---- lignes SVG qui se dessinent ---- */
        document.querySelectorAll<SVGSVGElement>(".draw").forEach((svg) => {
          svg.querySelectorAll<SVGPathElement>("path").forEach((p) => {
            const L = p.getTotalLength();
            gsap.set(p, { strokeDasharray: L, strokeDashoffset: L });
            gsap.to(p, {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: { trigger: svg, start: "top 90%", end: "top 40%", scrub: true },
            });
          });
        });

        /* ---- cartes empilées : la précédente recule quand la suivante arrive ---- */
        document.querySelectorAll<HTMLElement>(".stack").forEach((stack) => {
          const cards = [...stack.querySelectorAll<HTMLElement>(":scope > .stack-card")];
          cards.forEach((card, i) => {
            const next = cards[i + 1];
            if (!next) return;
            gsap.to(card, {
              scale: 0.9,
              opacity: 0.35,
              filter: "blur(2px)",
              ease: "none",
              scrollTrigger: { trigger: next, start: "top bottom", end: "top top+=110", scrub: true },
            });
          });
        });

        /* ---- panneaux plein écran ---- */
        document.querySelectorAll<HTMLElement>(".panels").forEach((wrap) => {
          const panels = [...wrap.querySelectorAll<HTMLElement>(":scope > .panel")];
          panels.forEach((panel, i) => {
            const next = panels[i + 1];
            if (!next) return;
            gsap.to(panel.querySelector(".panel-in"), {
              scale: 0.9,
              opacity: 0.25,
              y: -40,
              ease: "none",
              scrollTrigger: { trigger: next, start: "top bottom", end: "top top", scrub: true },
            });
          });
        });

        /* ---- compteurs ---- */
        document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.dataset.count);
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target,
            duration: 1.6,
            ease: "power3.out",
            onUpdate: () => (el.textContent = String(Math.round(obj.v))),
            scrollTrigger: { trigger: el, start: "top 88%", end: "bottom top", toggleActions: "restart reset restart reset" },
          });
        });
      },
    );

    // recalcul quand les images chargent
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);

    // recalcul quand la hauteur de la page change (filtres projets, accordéon FAQ, Lottie…) :
    // sinon les sections qui se déplacent gardent des positions de déclenchement périmées
    // et restent invisibles (opacity 0) une fois dans le viewport.
    let rt = 0;
    let lastH = document.body.scrollHeight;
    const ro = new ResizeObserver(() => {
      const h = document.body.scrollHeight;
      if (h === lastH) return;
      lastH = h;
      clearTimeout(rt);
      rt = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    });
    ro.observe(document.body);

    return () => {
      clearTimeout(t);
      clearTimeout(rt);
      ro.disconnect();
      window.removeEventListener("load", onLoad);
      mm.revert();
    };
  }, []);
}
