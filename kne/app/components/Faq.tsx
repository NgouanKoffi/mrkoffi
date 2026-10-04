"use client";

import { useState } from "react";
import { WHATSAPP } from "../data/projects";

const QA = [
  [
    "Combien coûte un site ou une application ?",
    "Chaque projet est chiffré sur devis, selon le périmètre : nombre de pages, fonctionnalités (boutique, espace admin, paiement…), délais. Vous recevez un devis clair sous 48 h, sans surprise ensuite.",
  ],
  [
    "Quels sont les délais ?",
    "Un site vitrine : 1 à 2 semaines. Une boutique ou une plateforme avec espace admin : 3 à 6 semaines. Une application mobile : 6 à 10 semaines. Le planning est fixé au brief et suivi en continu.",
  ],
  [
    "Le nom de domaine et l'hébergement sont-ils inclus ?",
    "Oui. Je m'occupe du nom de domaine, de l'hébergement, du certificat SSL et de la mise en ligne. Vous n'avez rien à configurer.",
  ],
  [
    "Peut-on intégrer le paiement Mobile Money ?",
    "Oui : Orange Money, MTN MoMo, Wave et carte bancaire, sur site web comme sur application mobile.",
  ],
  [
    "Que se passe-t-il après la livraison ?",
    "Je vous forme à l'utilisation de votre espace admin et je reste disponible pour la maintenance, les évolutions et les sauvegardes.",
  ],
  [
    "Vous travaillez seulement à Bouaké ?",
    "Non. Je travaille avec des clients à Abidjan, Bouaké, au Canada… Tout se fait à distance via WhatsApp, appels et URL de preview.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section" id="faq">
      <div className="wrap faq-wrap">
        <div className="faq-side">
          <div className="sec-head">
            <span className="eyebrow">
              <i /> FAQ
            </span>
            <h2 className="split">
              Les questions qu&apos;on me pose <span className="o">souvent</span>.
            </h2>
            <p className="up">Tarifs, délais, hébergement, paiement mobile : les réponses courtes, sans jargon.</p>
          </div>
          <div className="faq-help up">
            <span className="fh-badge">
              <i /> Réponse en ~10 min
            </span>
            <b>Une autre question ?</b>
            <p>Écrivez-moi directement, je réponds vite et sans engagement.</p>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn dark sm">
              Écrire sur WhatsApp
            </a>
          </div>
        </div>
        <div className="faq">
          {QA.map(([q, a], i) => (
            <div className={`faq-item up${open === i ? " open" : ""}`} data-delay={i * 0.06} key={q}>
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span className="faq-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q">{q}</span>
                <i>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </i>
              </button>
              <div className="faq-a">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
