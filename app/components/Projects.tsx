"use client";

import { useState } from "react";
import { projects, kindLabel, statusLabel, type Kind } from "../data/projects";

/* icônes SVG par type de projet (trait 2px, style Lucide) */
const ICON: Record<Kind, React.ReactNode> = {
  vitrine: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  dynamic: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  mobile: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M10 18h4" />
    </>
  ),
  system: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
};
const Ico = ({ children, size = 28 }: { children: React.ReactNode; size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState<Kind | "all">("all");
  const list = projects.filter((p) => filter === "all" || p.kind === filter);

  return (
    <section className="section" id="projets">
      <div className="wrap">
        <div className="sec-head center">
          <span className="eyebrow">
            <i /> Portfolio
          </span>
          <h2 className="split">
            Projets livrés, <span className="o">clients satisfaits</span>.
          </h2>
          <p className="up">Sites, applications et systèmes de gestion, tous en service quelque part, de Bouaké au Canada.</p>
        </div>

        <div className="tabs center up" role="tablist">
          {(["all", "vitrine", "dynamic", "mobile", "system"] as const).map((k) => {
            const n = k === "all" ? projects.length : projects.filter((p) => p.kind === k).length;
            return (
              <button key={k} role="tab" aria-selected={filter === k} className={filter === k ? "on" : ""} onClick={() => setFilter(k)}>
                {kindLabel[k]} <i>{n}</i>
              </button>
            );
          })}
        </div>

        <div className="prj-grid" key={filter}>
          {list.map((p, i) => (
            <article className={`prj-card k-${p.kind}`} style={{ animationDelay: `${(i % 6) * 60}ms` }} key={p.title}>
              <div className={`prj-cover${p.cover ? " full" : ""}`}>
                {p.cover || p.img ? (
                  <img src={p.cover ?? p.img} alt={p.title} loading="lazy" width={1600} height={1000} />
                ) : (
                  <div className="prj-abstract">
                    <span>
                      <Ico>{ICON[p.kind]}</Ico>
                    </span>
                    <b>{p.title}</b>
                  </div>
                )}
                <span className={`status st-${p.status}`}>{statusLabel[p.status]}</span>
              </div>
              <div className="prj-body">
                <small>
                  {kindLabel[p.kind]} · {p.year}
                  {p.location ? ` · ${p.location}` : ""}
                </small>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="prj-foot">
                  <em>{p.cat}</em>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="go" aria-label={`Visiter ${p.title}`}>
                      ↗
                    </a>
                  ) : (
                    <span className="go off" title={p.status === "wip" ? "Bientôt" : "Confidentiel"}>
                      {p.status === "wip" ? (
                        <Ico size={16}>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </Ico>
                      ) : (
                        <Ico size={16}>
                          <rect x="5" y="11" width="14" height="10" rx="2" />
                          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                        </Ico>
                      )}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
