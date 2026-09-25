import type { Metadata, Viewport } from "next";
import { Bebas_Neue, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

/* Caveat en local (police variable 400–700) : évite le bug Turbopack next/font/google multi-graisses */
const hand = localFont({
  src: "./fonts/Caveat-Variable.ttf",
  weight: "400 700",
  variable: "--font-hand",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mr Koffi — Développeur Web & Mobile à Bouaké | Sites, applications, systèmes",
  description:
    "KOFFI N'gouan Emmanuel, développeur web & mobile à Bouaké (Côte d'Ivoire). Sites vitrines, boutiques, applications mobiles, systèmes de gestion — sur mesure, livrés dans les délais.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${font.variable} ${display.variable} ${mono.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
