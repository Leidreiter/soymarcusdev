import type { Metadata } from "next";
import "./links.css";
import LinksClient from "@/components/links/LinksClient";

export const metadata: Metadata = {
  title: "@soymarcusdev | Todos mis links",
  description:
    "soymarcusdev — Creador de contenido tech. Encuentra mis redes sociales, recursos y contacto para colaboraciones.",
  alternates: {
    canonical: "https://soymarcus.dev/links",
  },
  openGraph: {
    title: "@soymarcusdev | Diseñador, UX/UI & Web Developer",
    description:
      "Creador de contenido tech. Diseño webs que no solo se ven bien, sino que funcionan.",
    type: "website",
    url: "https://soymarcus.dev/links",
    images: ["/images/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "@soymarcusdev | Diseñador, UX/UI & Web Developer",
    description:
      "Diseño webs que no solo se ven bien, sino que funcionan. Mirá mis proyectos, servicios y portfolio.",
    images: ["/images/preview.jpg"],
  },
};

export default function LinksPage() {
  return <LinksClient />;
}