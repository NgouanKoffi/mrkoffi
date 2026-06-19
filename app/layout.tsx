import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KOFFI N'gouan Emmanuel · Développeur Web & Mobile · Data Scientist",
  description:
    "Portfolio de KOFFI N'gouan Emmanuel : développeur web et mobile, data scientist (Big Data, Machine Learning) et concepteur de systèmes embarqués, basé en Côte d'Ivoire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
