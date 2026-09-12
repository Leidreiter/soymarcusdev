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
    title: "@soymarcusdev | Todos mis links",
    description:
      "Creador de contenido tech. Encuentra mis redes sociales, recursos y contacto para colaboraciones.",
    type: "website",
    url: "https://soymarcus.dev/links",
    images: ["/images/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "@soymarcusdev | Todos mis links",
    description:
      "Creador de contenido tech. Encuentra mis redes sociales, recursos y contacto para colaboraciones.",
    images: ["/images/preview.jpg"],
  },
};

export default function LinksPage() {
  return <LinksClient />;
}