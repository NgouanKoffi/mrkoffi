import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display, Anton } from "next/font/google";
import "./globals.css";
import "./sections.css";
import "./motion.css";
import "./mobile.css";

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const tall = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tall",
  display: "swap",
});

export const metadata: Metadata = {
  // Adresse publique du site (aperçus de partage). À définir au déploiement : NEXT_PUBLIC_SITE_URL=https://…
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3001"),
  title: "Gnimin Habib Coulibaly — Formateur IA, marketing digital & WordPress",
  description:
    "Consultant et formateur en intelligence artificielle appliquée, marketing digital et WordPress. Fondateur de Digital-Tech, Bouaké. Plus de 800 personnes formées.",
  openGraph: {
    title: "Gnimin Habib Coulibaly — Rendre l'IA utile aux entrepreneurs africains",
    description:
      "Formations, conférences, sites WordPress et marketing digital. Bouaké, Côte d'Ivoire — en présentiel comme en ligne.",
    images: ["/portraits/rouge-1.webp"],
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#9e0f1b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${body.variable} ${serif.variable} ${tall.variable}`}>
      <body>{children}</body>
    </html>
  );
}
