import type { Metadata } from "next";
import "./entrevista.css";
import EntrevistasClient from "@/components/entrevistas/EntrevistasClient";

export const metadata: Metadata = {
  title: "Entrevistas Tech · Guía para Invitados",
  description:
    "Entrevistas Tech — guía para invitados. Una charla de 45–60 minutos sobre tu carrera, tus proyectos y tus opiniones sobre el mundo tech. Nada formal, todo real.",
  alternates: {
    canonical: "https://soymarcus.dev/entrevistas",
  },
  openGraph: {
    title: "Entrevistas Tech · Guía para Invitados",
    description:
      "Entrevistas Tech — una charla de 45–60 minutos sobre tu carrera, tus proyectos y tus opiniones sobre el mundo tech. Nada formal, todo real.",
    type: "website",
    url: "https://soymarcus.dev/entrevistas",
    images: ["/images/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrevistas Tech · Guía para Invitados",
    description:
      "Una charla de 45–60 minutos sobre tu carrera, tus proyectos y tus opiniones sobre el mundo tech.",
    images: ["/images/preview.jpg"],
  },
};

export default function EntrevistasPage() {
  return <EntrevistasClient />;
}