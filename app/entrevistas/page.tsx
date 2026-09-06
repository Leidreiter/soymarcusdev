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
};

export default function EntrevistasPage() {
  return <EntrevistasClient />;
}